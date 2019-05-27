---
layout: single
author_profile: true
comments: true
share: true
related: true
toc: true
title: SSL 적용하기
tag: [인증서, SSL, CRT, PFX]
---



# 인증서 발급요청 및 SSL 적용



### 1. key파일 및 CSR 파일 생성

openssl 을 이용해서 key 와 CSR 파일을 동시에 생성

openssl이 없는 경우 [다운로드](https://code.google.com/archive/p/openssl-for-windows/downloads) 

~~~bash
openssl -nodes -newkey rsa:2048 -keyout test.key -out test.domainname.kr.csr -config openssl.cnf
~~~

-config 옵션을 사용하지 않고 실행하면 `Unable to load config info from c:openssl/ssl/openssl.cnf` 라는 오류 발생



**실행화면**

```bash
Loading 'screen' into random state - done
Generating a 2048 bit RSA private key
..................................................................+++
..................................................+++
writing new private key to 'test.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:KR
State or Province Name (full name) [Some-State]:Seoul
Locality Name (eg, city) []:Jongno-gu
Organization Name (eg, company) [Internet Widgits Pty Ltd]:TOURNOTE
Organizational Unit Name (eg, section) []:DevTeam
Common Name (eg, YOUR name) []:www.test.kr
Email Address []:khs@doresoft.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

실행하면 서버정보 입력하도록 되어 있는데 각 정보는 아래와 같다.



**입력내용**

| 내용                    | 정의                                         | 입력값                                                 |
| -------------------------------- | ------------------------------------------------------------- | ---------------------------- |
| Country Name (2 letter code) [AU]:                          | 국가코드 | KR                                                     |
| State or Province Name (full name) [Some-State]:            | 시/도    | Seoul                                                  |
| Locality Name (eg, city) []:                                | 시/군/구 | Jongno-gu                                              |
| Organization Name (eg, company) [Internet Widgits Pty Ltd]: | 회사명   | TOURNOTE                                               |
| Organizational Unit Name (eg, section) []:                  | 팀명     | Tournote DevTeam                                       |
| Common Name (eg, YOUR name) []:                             | 사이트   | www.domainname.kr                                 |
| Email Address []:                                           | 이메일   | jessekwon@mail.com            |
| A challenge password []:<br />An optional company name []:  | 추가정보 | 입력하면 정보불일치가 <br />될 수 있으므로 엔터만 입력 |

생성된 CSR파일을 발급업체(gabia)에 제출



### 2.CSR 파일 제출 및 인증서 구매

[가비아 홈페이지](https://www.gabia.com)에 접속 후 보안 > SSL 이동하면 아래와 같음

![인증서 구매](https://img.tnote.kr/upload/dev/ssl01.png){: width="100%" height="100%"}

AlphaSign, 1개 도메인 기준으로 설명함

이용기간 및 결제정보를 입력하면 관리 정보를 입력할 수 있음

관리정보에 [1.key파일 및 CSR 파일 생성](#1.-key파일-및-csr-파일-생성) 에서 생성한 csr 정보 전부를 입력한다. 

문서 처음과 끝의 -----BEGIN CERTIFICATE REQUEST----- ,-----END CERTIFICATE REQUEST——  을 포함해서 입력후 정보확인을 하면 파일생성시에 입력했던 정보들을 확인할 수 있다.

최종 인증서 요청 하면 완료



### 3. 인증서 발급 관련 정보

* 인증서를 요청을 하면 확인요청 메일이 온다. 

* 메일내의 링크를 따라가 확인을 하면 1~2일 이내 인증서가 발급된다. 

* key 파일은 꼭 가지고 있어야한다. 

* 발급된 인증서는 3개의 .crt 파일로 구성되어 있다

  ( `www.domainname.kr.crt`, `GLOBALSIGN_ROOT_CA.crt`, `ALPHASSL_CA__SHA256__G2.crt` )
  
  

### 4. key와 CRT파일로 PFX 파일 만들기

```bash
openssl pkcs12 -export -in www.domainname.kr.crt -inkey www.domainname.kr.key -out www.domainname.kr.pfx -name domainname
```

생성할 비밀번호를 입력하고, 비밀번호 확인을 하면 .pfx파일이 생성된다. 

생성된 비밀번호는 iis 적용시 이용된다. 

![pfx 만들기](https://img.tnote.kr/upload/dev/ssl02_pfx.png)



### 5. iis 7.x 적용

1. 인증서 등록 : 서버 인증서 > 가져오기

![iis1](https://img.tnote.kr/upload/dev/ssl03_iis1.png)

![iis1](https://img.tnote.kr/upload/dev/ssl03_iis2.png)

​	이전 단계([4. key와 CRT파일로 PFX 파일 만들기](#4.-key와-crt파일로-pfx-파일-만들기) )에서 생성한 .pfx 파일을 선택하고 생성했던 비밀번호를 입력한다. 

2. 연결하고자 하는 사이트에 바인딩한다.

![iis1](https://img.tnote.kr/upload/dev/ssl03_iis3.png)

![iis1](https://img.tnote.kr/upload/dev/ssl03_iis4.png)

​	https 선택후 편집 버튼 클릭

​	SSL 인증서에서 위에서 생성한 .pfx의 `-name domainname` 옵션으로 입력했던 인증서 찾아 선택



### 6. 인증서 확인

해당사에트에서 인증서버튼을 눌러 날짜가 변경되었는지 확인

![iis1](https://img.tnote.kr/upload/dev/ssl04.png)



끝