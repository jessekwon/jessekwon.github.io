---
layout: post
title:  "Retrofit2 고급설정 : 인증관리"
subtitle: "Retrofit2 + OkHttp3를 이용해 Authorization을 관리해본다"
date:   2019-06-17
author: "jesseKwon"
header-img: "img/post-bg-css.jpg"
catalog: true
tags:
    - 인증서
    - Retrofit2
    - OkHttp3
    - Auth
---

# Retrofit2 고급설정 : 인증관리


이 글은 이전 글의 두번째 파트이다. 나는 이 인증관리 글에 Retrofit2 + OkHttp3 를 이용했다. 시작해보자

나는 이전 글에서 사용했던 코드 스타일을 따를것이다. 이글을 진행하기전에 이전글을 훌터보는게 나을것이다. 

앱은 그 서비스에 접근하기위한 사용자의 인증이 필요한 백앤드 API와 연결된다. 사용자가 앱에 로그인했을때,  토큰이 사용자의 증명서(즉, 이메일, 패스워드)를 사용해 생성된다. 백엔드 APIs는 몇가지 토큰을 생성하기 위해 몇가지 인증방법(JWT, OAuth2)을 사용한다. 증명서는 토큰에 대해 교환되고 이후 모든 요청에 첨부된다.



토큰은 임시이고 특정 기간후에 만료되며 리프래쉬된다. 앱에서 업데이트된 토큰이 필요할 수도 있다. 그래서 접근은 거절되지 않을것이다. 만료되면 앱은 필요한 액션을 취해야한다. 아래와 같은 몇가지 사용 케이스가 있다. 

**Use Case 1**: 몇 API는 응답헤더안에 한번에 업데이트된 토큰을 반환한다.

**Use Case 2**: 앱은 토큰이 만료되거나 사용자가 재로그인이 승인되었을때 즉시 로그아웃되어져야한다.( 예로 사용자가 웹사이트를 이용히 페이스북 패스워드를 변경하고 모바일앱을 계속 사용하길원할때. 해보자)

**Use Case3**: 토큰이 만료됐을때, 사용자에게 알리지 않고 그들이 하고자 하는것을 하게 할 수 있도록 백그라운드에서 자동적으로 로그인하는것이 요구될 수도 있다. 



토큰은 언제든 만료될 수 있다. 이는 토큰과 어떤 연관있는 Http 요청에 부딛힐 수 있다. 그렇기 때문에 우리는 모듈 수준에서 중심적으로 작동하고 토큰 만료를 처리하는 메커니즘이 필요하며 최상위 구현에서 변경하지 않아도 된다.



솔루션으로 차례차례 들어가보자, 먼저 필요 class들을 셋업하자

~~~java
public interface Session {
    boolean isLoggedIn();
    
    void saveToken(String token);
  
    String getToken();
    
    void saveEmail(String email);
    
    String getEmail();
    
    void savePassword(String password);
    
    String getPassword();
    
    void invalidate();
}
~~~



~~~java

public class App extends Application {
    private Session session;
    private ApiService apiService;
    private AuthenticationListener authenticationListener;

    @Override
    public void onCreate() {
        super.onCreate();
    }

    // use a storage option to store the
    // credentails and user info
    // i.e: SQLite, SharedPreference etc.
    public Session getSession() {
        if (session == null) {
            session = new Session() {
                @Override
                public boolean isLoggedIn() {
                    // check if token exist or not
                    // return true if exist otherwise false
                    // assuming that token exists
                    return true;
                }

                @Override
                public void saveToken(String token) {
                    // save the token
                }

                @Override
                public String getToken() {
                    // return the token that was saved earlier
                    return token;
                }

                @Override
                public void saveEmail() {
                    // save user's email 
                }

                @Override
                public String getEmail() {
                    return email;
                }

                @Override
                public void savePassword() {
                    // encrypt and save
                }

                @Override
                public String getPassword() {
                    // decrypt and return
                    return password;
                }

                @Override
                public void invalidate() {
                    // get called when user become logged out
                    // delete token and other user info 
                    // (i.e: email, password)
                    // from the storage

                    // sending logged out event to it's listener
                    // i.e: Activity, Fragment, Service
                    if (authenticationListener != null) {
                        authenticationListener.onUserLoggedOut();
                    }
                }
            };
        }

        return session;
    }

    public interface AuthenticationListener {
        void onUserLoggedOut();
    }

    public void setAuthenticationListener(AuthenticationListener listener) {
        this.authenticationListener = listener;
    }

    public ApiService getApiService() {
        if (apiService == null) {
            apiService = provideRetrofit(ApiService.URL).create(ApiService.class);
        }
        return apiService;
    }

    private Retrofit provideRetrofit(String url) {
        return new Retrofit.Builder()
                .baseUrl(url)
                .client(provideOkHttpClient())
                .addConverterFactory(GsonConverterFactory.create(new Gson()))
                .build();
    }

    private OkHttpClient provideOkHttpClient() {
        OkHttpClient.Builder okhttpClientBuilder = new OkHttpClient.Builder();
        okhttpClientBuilder.connectTimeout(30, TimeUnit.SECONDS);
        okhttpClientBuilder.readTimeout(30, TimeUnit.SECONDS);
        okhttpClientBuilder.writeTimeout(30, TimeUnit.SECONDS);
        return okhttpClientBuilder.build();
    }
}
~~~



첫번째 케이스를 고려해보자. 토큰이 만료되었을때 이전 토큰이있는 첫 번째 요청에 대한 응답 헤더에 새 토큰을 사용할 수 있어야합니다. 이전 토큰을 대체할 새 토큰을 저장할 필요가 있다 `TokenRenewInterceptor` 라 불리는 인터셉터를 생성할 것이다. 그 인터셉터는 연관성있는 요청을 위해 응답헤더에 새로운 토큰을 확인할 것이다. 토큰이 사용가능하면 세션에 저장될것이다. 그러면 `okHttpClientBuilder`에 인터셉터만 추가하면된다.



~~~java

public class TokenRenewInterceptor implements Interceptor {
    private Session session;

    public TokenRenewInterceptor(Session session) {
        this.session = session;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Response response = chain.proceed(chain.request());
      
        // if 'x-auth-token' is available into the response header
        // save the new token into session.The header key can be 
        // different upon implementation of backend.
        String newToken = response.header("x-auth-token");
        if (newToken != null) {
            session.saveToken(newToken);
        }

        return response;
    }
}
~~~



~~~java

    private OkHttpClient provideOkHttpClient() {
        OkHttpClient.Builder okhttpClientBuilder = new OkHttpClient.Builder();
        okhttpClientBuilder.connectTimeout(30, TimeUnit.SECONDS);
        okhttpClientBuilder.readTimeout(30, TimeUnit.SECONDS);
        okhttpClientBuilder.writeTimeout(30, TimeUnit.SECONDS);

        okhttpClientBuilder.addInterceptor(new TokenRenewInterceptor())
        return okhttpClientBuilder.build();
    }
~~~

두번째 케이스로 이동해보자. 아래코드를 봐

~~~java

public class AuthorizationInterceptor implements Interceptor {
    private ApiService apiService;
    private Session session;

    public AuthorizationInterceptor(ApiService apiService, Session session) {
        this.apiService = apiService;
        this.session = session;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Response mainResponse = chain.proceed(chain.request());
        if (mainResponse.code() == 401 || mainResponse.code() == 403) {
            session.invalidate();
        }
        return mainResponse;
    }
}
~~~



~~~java

private OkHttpClient provideOkHttpClient() {
        OkHttpClient.Builder okhttpClientBuilder = new OkHttpClient.Builder();
        okhttpClientBuilder.connectTimeout(30, TimeUnit.SECONDS);
        okhttpClientBuilder.readTimeout(30, TimeUnit.SECONDS);
        okhttpClientBuilder.writeTimeout(30, TimeUnit.SECONDS);

        okhttpClientBuilder.addInterceptor(new TokenRenewInterceptor());
        okhttpClientBuilder.addInterceptor(new AuthorizationInterceptor(getApiService(), getSession()));
        return okhttpClientBuilder.build();
}
~~~

보면, `AuthorizationIntercepter` 라는 다른 인터셉터를 추가했다. 그것은 관례적으로 인증관련 이슈를 나타내는 401, 403 응답코드를 확인한다. 이 에러를 만날때 토큰과 사용자의 데이터를 삭제하기위해 `invalidate()` 만 호출한다. 이벤트는 필요한 액션(로그인 액티비티로 전환)을 하기위해 그것의  리스너(view/service)에 전달된다. 

> 이처럼 필요하다면 여러개의 인터셉터를 추가할 수 있다. 



세번째 케이스를 보자 . 사용자의 재로그인을 승인하는것을 원하지 않거나 이 인증오류를 사용자에게 알리지 않고 동적으로 관리하길 원한다면 아래 솔루션이 있다. 비록, 이게 앱이 사용자의 증명서를 계속 저장할 필요가 잇기때문에 사용자가 자동으로 로그인하기에 좋지않은 연습일수있다. 이 메카니즘이 이행해야한다면 그 증명서들을 안전하게 보관해라. 난 단지 사용케이스를 보여주려고 시도하는것이다. 이 구현을 다른 요구사항과 관련 지을수 있다. 시작해보자

~~~java

public interface ApiService {
    // dummy url
    String URL = "https://api.example.com" + "/v1/";

    @POST("login")
    Call<Authorization> loginAccount(@Header("Authorization") String authKey);
    
    @GET("accounts/{accountId}")
    Call<AccountInfo> getAccountInfo(@Header("Authorization") String authKey, 
                                     @Path("accountId") String accountId);
}
~~~



이제 `AuthorizationInterceptor` 클래스를 아래와 같이 업데이트할것이다. 

~~~java

public class AuthorizationInterceptor implements Interceptor {
    private ApiService apiService;
    private Session session;

    public AuthorizationInterceptor(ApiService apiService, Session session) {
        this.apiService = apiService;
        this.session = session;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Response mainResponse = chain.proceed(chain.request());
        Request mainRequest = chain.request();

        if (session.isLoggedIn()) {
            // if response code is 401 or 403, 'mainRequest' has encountered authentication error
            if (mainResponse.code() == 401 || mainResponse.code() == 403) {
                String authKey = getAuthorizationHeader(session.getEmail(), session.getPassword());
                // request to login API to get fresh token
                // synchronously calling login API
                retrofit2.Response<Authorization> loginResponse = apiService.loginAccount(authKey).execute();
                
                if (loginResponse.isSuccessful()) {
                    // login request succeed, new token generated
                    Authorization authorization = loginResponse.body();
                    // save the new token
                    session.saveToken(authorization.getToken());
                    // retry the 'mainRequest' which encountered an authentication error
                    // add new token into 'mainRequest' header and request again
                    Request.Builder builder = mainRequest.newBuilder().header("Authorization", session.getToken()).
                            method(mainRequest.method(), mainRequest.body());
                    mainResponse = chain.proceed(builder.build());
                }
            }
        }

        return mainResponse;
    }

    /**
    * this method is API implemetation specific
    * might not work with other APIs
    **/
    public static String getAuthorizationHeader(String email, String password) {
        String credential = email + ":" + password;
        return "Basic " + Base64.encodeToString(credential.getBytes(), Base64.DEFAULT);
    }
}
~~~



~~~java

public class Authorization {
  
    @SerializedName("user_id")
    @Expose
    private String userId;
  
    @SerializedName("token")
    @Expose
    private String token;
  
    public void setUserId(String userId) {
      this.userId = userId;
    }

    public String getId() {
        return id;
    }
  
    public void setToken(String token) {
      this.token = token;
    }

    public String getToken() {
        return token;
    }
}
~~~

이제 요청에 401/403에러가 발생했는지를 다루고 있다. 발생했을때 auth key(이메일과 패스워드의 인코딩된 결합)를 생성하고 요청헤더로 로그인API에 그것을 전달한다. 로그인 API가 호출됨으로서 성공하면 ` Authorization` 객체가 리턴된다. `Authorization` 은 세션에 저장되어야 하는 새로운 토큰을 포함한다. 그래서 토큰은 업데이트된다. 이제 인증안된 에러가 발생하는  `mainRequest` 를 재시도 할 수있다. 새로운 토큰을 `mainRequest` 에 추가하고 요청이 재전송되도록 해준다 이제 성공적으로 결과를 받아야한다. 

**Process flow**: `getAccountInfo()` -> Unauthorized Error -> `loginAccount()` -> 성공(token updated) -> 재시도 `getAccountInfo()`  -> 성공

이게 전부다. 