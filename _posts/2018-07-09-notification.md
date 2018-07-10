---
layout:single
author_profile: true
comments: true
share: true
related: true
toc: true
title: [Android8.0 번역]Notification 채널의 생성과 관리
tag: 안드로이드, Notification_channel, 알림채널, API_level_26
---



# Notification 채널의 생성과 관리

Android 8.0(API level 26) 부터 모든 Notification 은 채널에 속해있어야한다. 각채널별로 채널의 모든 알림에 적용되는 시각적 청각적 동작을 설정할 수 있다. 그러면 사용자는 이설정을 바꿀수 있고 앱의 알림채널이 끼어들어야할지 보여주지 말아야할지를 결정할 수 있다. 



채널의 개요와 Android 8.0 의 새로운 알림모습을 아래 비디오에서 확인해보자

[Notifications in Android O](https://youtu.be/zGIw4MIJn5o)



사용자는 그림1에서 보여지는것처럼 시스템세팅에서 각 앱별로 알림채널을 설정하는것이 가능하다.

![](../assets/images/channel-settings.jpg)

**그림 1**. 시계앱의 알림과 채널설정



> **Note** : 사용자 인터페이스는 알림채널을 "카테고리"로 보여진다

알림채널을 생성한 후, 알림동작을 바꿀수 없고, 그 시점에는 사용자가 완전히 컨트롤한다. 채널의 이름과 설명은 변경할 수 있다.



보내는 알림의 타잎별로 채널을 생성해야한다. 또한 사용자의 선택을 반영하는 알림 채널을 만들수 있다.예로, 메시지 앱에서 사용자별 대화그룹으로 나눠진 알림채널을 만들수 있다.



Android 8.0(API level 26) 을 타겟으로 할때, 하나 혹은 여러개의 알림채널을 만들어야한다. 만약 앱이 Adnroid 8.0(API level 26) 혹은 그이상에서 돌아갈때 `targetSdkVersion`이 25 혹은 그이하로 설정되었다면  Android 7.1(API level 25)혹은 그이하에서 돌아가는것과 동일하게 동작한다.

> **Caution** : 앱이 Android 8.0(API level 26)이상으로 설정되어 있고 채널을 정의하지않고 알림을 보내면 알림은 나타나지 않고 에러로 로그에 남는다.

> **Note** : Android 8.0(API level 26)을 타겟으로 하는앱이 알림채널없이 알림을 보내려고 시도할때 토스트로 나타나는 경고를 화면에 노출하하도록 새로운 설정을 켤 수있다. 세팅은 **설정 > 개발자옵션** 에서 **알림채널 경고보기**를 켜면된다



## 알림채널 생성하기

알림채널을 생성하기 위해 아래 단계를 따르시오

1. 유니크 채널ID, 사용자에게 보여지는 이름, 중요도를 포함하는 [NotificationChannel](https://developer.android.com/reference/android/app/NotificationChannel) 객체를 만든다.
2. 추가적으로,  [setDescription()](https://developer.android.com/reference/android/app/NotificationChannel#setDescription(java.lang.String)) 으로 시스템 설정에서 사용자가 볼 수있는 설명을 정의한다.
3. [createNotificationChannel]() 로 그것을 전달해서 알림채널을 등록한다.

> **Caution** : 코드를 Android 8.0 (API level 26) 혹은 그이상에서만 동작하도록 **SDK_INT** 조건을 넣어서 코드를 보호해야한다. 알림채널 APIs는 support library로 안된다. 

~~~java
private void createNotificationChannel() {
    // NotificationChannel을 생성한다., 하지만 API 26+ 만 된다. because
    // NotificationChannel class는 새로운 것이고 SupportLibrary로 지원하지않는다.
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        CharSequence name = getString(R.string.channel_name);
        String description = getString(R.string.channel_description);
        int importance = NotificationManager.IMPORTANCE_DEFAULT;
        NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);
        channel.setDescription(description);
        // 시스템에 채널을 등록한다.중요도나 알림동작은 이후 변경할 수 없다.
        NotificationManager notificationManager = getSystemService(NotificationManager.class);
        notificationManager.createNotificationChannel(channel);
    }
}
~~~

오리지널값으로 존재하는 알림채널을 생성하는것은 아무동작을 하지않기때문에 앱 시작할때 이코드를 호출하는것이 안전하다.



기본적으로 이 채널로 발송하는 모든 알림은 [NotificationManagerCompat](https://developer.android.com/reference/android/support/v4/app/NotificationManagerCompat) class 의 [IMPORTANCE_DEFAULT](https://developer.android.com/reference/android/support/v4/app/NotificationManagerCompat#IMPORTANCE_DEFAULT)와 [IMPORTANCE_HIGH](https://developer.android.com/reference/android/support/v4/app/NotificationManagerCompat#IMPORTANCE_HIGH)와 같은 중요도에 의해 정의된 시각적, 청각적 동작을 사용한다.  ([importance levels](https://developer.android.com/training/notify-user/channels#importance) 에 관한 더많은 정보는 아래를 봐라)



채널의 기본 알림 동작을 더 수정하고싶다면 [NotificationChannel](https://developer.android.com/reference/android/app/NotificationChannel) 의 [enableLights()](https://developer.android.com/reference/android/app/NotificationChannel#enableLights(boolean)) , [setLightColor()](https://developer.android.com/reference/android/app/NotificationChannel#setLightColor(int)), [setVibrationPattern()](https://developer.android.com/reference/android/app/NotificationChannel#setVibrationPattern(long[])) 과 같은 함수를 호출할 수있다. 하지만 채널을 한번 생성하면 이 설정들을 바꿀수없고 사용자가 이 동작을 활성화할지 말지의 제어권을 가지는 것을 명심해라



또한 [createNotificationChannels()](https://developer.android.com/reference/android/app/NotificationManager#createNotificationChannels(java.util.List%3Candroid.app.NotificationChannel%3E)) 를 호출해서 하나의 작업으로 여러개의 알림채널을 생성할 수 있다.

> **Note** : 채널별로 알림을 추가하는것 외에도, 각각의 알림에 시스템카테고리('알림', '미리알림'과 같은) 의 알림을 추가하는것도 고려해야한다.



#### 중요도 설정하기

채널중요도는 채널에 발송된 모든 알림에 끼어들기레벨에 영향을 미친다. 그리고 [NotificationChannel](https://developer.android.com/reference/android/app/NotificationChannel) 생성자에서 그것을 정의 해야한다. [IMPORTANCE_NONE(0)](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_NONE) 에서 [IMPORTANCE_HIGH(4)](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_HIGH) 까지의 5개의 중요도레벨중 하나를 사용할수 있다. 채널에 명시한 중요도는 채널로 전송되는 모든 메시지에 적용된다.



Android 7.1(API level 25) 혹은 그 이하 기기를 지원하기위해 [NotificationCompat](https://developer.android.com/reference/android/support/v4/app/NotificationCompat) class 의 중요도 상수를 써서 각 알림의 [setPriority()](https://developer.android.com/reference/android/support/v4/app/NotificationCompat.Builder#setPriority(int)) 를 호출해야한다. 



중요도(`NotificationManager.IMPORTANCE_*`)와 우선순위(`NotificationCompat.PRIORITY_*`) 를 테이블1 에 명시된 사용자 노출 중요도옵션으로 매핑된다.

**Table 1**. 채널 중요도 레벨

| 사용자가 볼수있는 중요도레벨               | 중요도(Android 8.0 또는 그이상)                              | 우선순위(Android 7.1 또는 그이하)                            |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 긴급(소리와 알림을 최상단에 나타나게한다.) | [IMPORTANCE_HIGH](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_HIGH) | [PRIORITY_HIGH](https://developer.android.com/reference/android/support/v4/app/NotificationCompat#PRIORITY_HIGH) or [PRIORITY_MAX](https://developer.android.com/reference/android/support/v4/app/NotificationCompat#PRIORITY_MAX) |
| 높음(소리를 나게한다)                      | [IMPORTANCE_DEFAULT](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_DEFAULT) | [PRIORITY_DEFAULT](https://developer.android.com/reference/android/support/v4/app/NotificationCompat#PRIORITY_DEFAULT) |
| 보통(소리없다)                             | [IMPORTANCE_LOW](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_LOW) | [PRIORITY_LOW](https://developer.android.com/reference/android/support/v4/app/NotificationCompat#PRIORITY_LOW) |
| 낮음(소리없고 상태바에 안나타난다)         | [IMPORTANCE_MIN](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_MIN) | [PRIORITY_MIN](https://developer.android.com/reference/android/support/v4/app/NotificationCompat#PRIORITY_MIN) |

중요도와 관계없이 모든 알림은 알림서랍 과 [런처아이콘의 뱃지](https://developer.android.com/guide/topics/ui/notifiers/notifications#app_icon_badge)에 나타나지만 [알림 뱃지 모양을 수정](https://developer.android.com/training/notify-user/badges)할수는 있다.



한번 `NotificationManager` 에 채널을 제출하면 중요도를 바꿀수 없다. 하지만 사용자는 언제든 앱 채널의 우위를 바꿀 수 있다. 



적합한 우선순위 레벨을 선택하기에 관한 정보를 위해 [Notifications design guide](https://material.io/design/#notifications-settings)에 있는"알림 우선순위의 올바른 설정과 관리"를 봐라



## 알림채널 설정 읽기

사용자는 알림소리와 진동과 같은 동작설정을 포함하는 알림채널 설정을 변경할수 있다. 그렇기때문에 사용자가 알림채널에 적용한 설정을 알고 싶다면 이 단계를 따르면된다.

1. [getNotificationChannel()](https://developer.android.com/reference/android/app/NotificationManager#getNotificationChannel(java.lang.String)) 또는 [getNotificationChannels()](https://developer.android.com/reference/android/app/NotificationManager#getNotificationChannels()) 를 호출해서 [NotificationChannel](https://developer.android.com/reference/android/app/NotificationChannel) 를 얻어온다.
2. [getVibrationPattern()](https://developer.android.com/reference/android/app/NotificationChannel#getVibrationPattern()), [getSound()](https://developer.android.com/reference/android/app/NotificationChannel#getVibrationPattern()), [getImportance()](https://developer.android.com/reference/android/app/NotificationChannel#getImportance()) 와 같은 특정 채널 설정값을 조회한다. 

그후 앱에서 의도된 행동이 방해받는 셋팅이 발견되면 사용자에게 그것을 바꾸도록 제안하고 채널설정창을 오픈하는 액션을 제공할 수도있다.



## 알림채널 설정창 열기

채널생성후 프로그램적으로 채널의 시작적, 청각적행동을 바꿀순 없다. 오로지 시스템설정에서 사용자만 변경할수있다. 이 알림설정에 쉽게 사용자가 접근하는것을  제공하기위해 앱의 [UI설정](https://developer.android.com/guide/topics/ui/settings)에 추가해야한다.



`ACTION_CHANNEL_NOTIFICATION_SETTINGS` 를 사용하는 `Intent` 로 알림채널 설정창을 열수있다.



예로, 아래코드는 어떻게 알림채널 설정창으로 사용자가 리다이렉트 되는지 보여준다.

~~~java
Intent intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);
intent.putExtra(Settings.EXTRA_APP_PACKAGE, getPackageName());
intent.putExtra(Settings.EXTRA_CHANNEL_ID, myNotificationChannel.getId());
startActivity(intent);
~~~



인텐트는 변경할 채널과 패키지명의 두가지 요소를 요구하는것을 주의해라



## 알림채널 그룹 삭제

설정에서 채널의 모양을 구성하고 싶다면 채널그룹을 생성한다. 앱에서 여러 사용자 계정을 지원할때 좋다 각 계정별로 알림채널그룹을 생성한다. 이방법은 사용자들이 쉽게 구분하고 이름이 있는 여러 알림채널을 제어할 수 있다.

![](../assets/images/channel-group.jpg)



예로, 소설 네트워킹앱은 개인계정과 비지니스계정의 지원을 포함할수 있다. 이 시나리오에서 각 계정은 동일한 기능과 이름들을 가진 여러 알림채널을 요구할 수 있다.

* 2개채널의 개인계정
  * 댓글
  * 추천글
* 2개채널의 비지니스계정
  * 댓글
  * 추천글

각 계정을 알림채널로 구성하는것은 명확히 사용자가 쉽게 구별할수 있도록 해야한다.



각 알림채널 그룹은 패키지내에서 유니크한 ID를 요구한다. 사용자에게 보여지는 이름도 마찬가지다

다음 코드는 어떻게 알림채널 그룹을 생성하는지 증명해준다.

~~~java
// 그룹 ID
String groupId = "my_group_01";
// 사용자에게 보여지는 그룹 이름
CharSequence groupName = getString(R.string.group_name);
NotificationManager mNotificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
mNotificationManager.createNotificationChannelGroup(new NotificationChannelGroup(group_id, group_name));
~~~

새그룹 생성이후 새로운 `NotificationChannel` 객체와 그룹을 연결짓기 위해 [setGroup()](https://developer.android.com/reference/android/app/NotificationChannel?hl=ko#setGroup(java.lang.String)) 을 호출한다.



채널을 알림매니저에 제출하면 알림채널과 그룹연결을 변경할 수 없다.

