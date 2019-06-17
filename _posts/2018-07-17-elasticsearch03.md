---
layout: post
title: Elasticsearch Plugin 설치
subtitle: Elasticsearch Plugin 설치
date: 2018-07-17
author: "jesseKwon"
header-img: "img/post-bg-js-module.jpg"
catalog: true
tags: 
    - Elasticsearch 
    - Elasticsearch_plugin
    - 엘라스틱서치_플러그인
    - 형태소분석
    - Arirang
---



# Elastic Search Plug-in 설치(Docs번역)

*한글 형태소 분석기를 Elasticsearch 내에 설치하기위해서는 Elasticsearch plug-in 을 이용해야한다.그래서 그냥 번역하기 시작했다.*



## Plug-in 소개

플러그인은 맞춤형방식으로 Elasticsearch 핵심기능의 성능을 높이는 방법이다. 이는 커스텀 매핑 타잎, 커스텀 분석기, 네이티브 스크립트, 커스텀 발견?(검색인듯) 등 에 이른다.



플러그인은 JAR파일, 스크립트와 설정파일을 포함한다.  그리고 클러스터의 모든 노드에 설치되어져야 한다. 설치후 플러그인이 보여지기 전에 각 노드는 재시작되어야한다. 



> **Note** : 전체 클러스터의 재시작은 X-Pack같은 커스텀 클러스터 상태메터데이터가 있는 플러그인 설치에 요구된다. 재시작을 돌리는 것으로 플러그인을 업그레이드가 가능하다.



이 문서는 플러그인을 2개의 카테고리로 구분한다.

* Core 플러그인

  이 카테고리는 플러그인이 Elasticsearch 프로젝트의 일부분임을 식별한다. Elasticsearch 와 동시에 교부되고, 버전 숫자는 항상 Elasticsearch와 일치한다. 이러한 플러그인들은 Elastic 팀에서 커뮤니티맴버(플러그인의 오픈소스)의 도움을 받아서 유지된다. Issue와 버그리포트는 [깃허브 페이지](https://github.com/elastic/elasticsearch)에서 보고받을 수 있다.

* 커뮤니티에서 기부된

  이 카테고리는 Elasticsearch 프로젝트의 외부로 식별한다. 개인개발자나 사설업체에 의해 제공되고, 그들 자신의 버전뿐만아니라 각자의 라이센스를 가진다. Issue와 버그리포트는 보통 커뮤니티의 웹사이트에서 보고받을 수 있다. 



> **중요** : HTML, CSS, Javascript를 포함하는 사이트 플러그인은 더 이상 지원하지 않습니다. 



## Plug-in 관리

`plugin` 스크립트는 플러그인을 설치, 목록보기, 삭제를 한다. 이는 기본적으로 `$ES_HOME/bin` 디렉토리 안에 있지만 Elasticsearch  package를 설치한 위치에 따라 다를 수 있다.

* [`.zip` 과 `.tar.gz` 압축파일의 디렉토리 구조](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/zip-targz.html#zip-targz-layout)
* [Debian 패키지의 디렉토리 구조](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/deb.html#deb-layout)
* [RPM 의 디렉토리 구조](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/rpm.html#rpm-layout)

사용법을 보기위해 아래 명령어를 실행해라

~~~bash
sudo bin/elasticsearch-plugin -h
~~~

> **중요** : **root로 실행하기**
>
> Elasticsearch 를 deb 또는 rpm 으로 설치하였다면 `/usr/share/elasticsearch/bin/elasticsearch-plugin` 을 root 로 실행해야 적정파일을 디스크에 쓸 수 있다. 또한 자체 Elasticsearch 파일 전체가 있다면 `bin/elasticsearch-plugin` 을 사용자 계정으로 실행해라



## 플러그인 설치

각플러그인의 문서는 보통 플러그인 내에 적절한 설치지침이 포함되어 있지만 사용가능한 옵션들을 아래에 서술한다. 

#### Core Elasticsearch 플러그인

Core Elasticsearch 플러그인은 아래와 같이 설치 될수 있다.

~~~bash
sudo bin/elasticsearch-plugin install [plugin_name]
~~~

[Core인 ICU 플러그인](https://www.elastic.co/guide/en/elasticsearch/plugins/6.3/analysis-icu.html)을 설치하는 경우 아래 명령어만 실행해라

~~~bash
sudo bin/elasticsearch-plugin install analysis-icu
~~~

이명령어는 Elasticsearch 버전과 일치하는 플러그인을 설치할 것이고 다운로드되는 동안 프로그레스바를 보여준다. 



## 사용자 지정 URL 또는 파일

플러그인은 URL을 정의하여 특정 위치로부터 직접 다운로드 받을 수도 있다. 

~~~bash
sudo bin/elasticsearch-plugin install [url]
~~~

url은 유효한 url이어야하고 플러그인 이름이 있어야한다. 



* Unix

  `/path/to/plugin.zip` 에 있는 로컬파일로 플러그인을 설치하려면 

  ~~~bash
  sudo bin/elasticsearch-plugin install file:///path/to/plugin.zip
  ~~~

* Window

  `C:\path\to\plugin.zip` 에 있는 로컬파일로 플러그인을 설치하려면

  ~~~bash
  bin\elasticsearch-plugin install file:///C:/path/to/plugin.zip
  
  ~~~

  > **Note** : 공백을 포함하는 경로는 따옴표로 감싸야한다.

  >  **Note** : 파일시스템에서 플러그인을 설치한다면 플러그인 위치는  플러그인을 설치하는 노드의 플러그인 디렉토리 안에 있으면 안된다. 안그러면 설치가 실패할것이다. 

* HTTP

  HTTP URL로 플러그인을 설치하려면

  ~~~bash
  sudo bin/elasticsearch-plugin install http://some.domain/path/to/plugin.zip
  ~~~

  신뢰하지않은 인증서로 HTTPS URL에 접속한다면 플러그인 스크립트는 거부된다. HTTPS 인증을 사용하기위해선 CA인증서를 로컬 자바 인증서함에 추가하고 경로를 스크립트로 전달해야한다.

  ~~~bash
  sudo ES_JAVA_OPTS="-Djavax.net.ssl.trustStore=/path/to/trustStore.jks" bin/elasticsearch-plugin install https://host/plugin.zip
  ~~~



## 설치된 플러그인 목록보기, 삭제, 업데이트

### 플러그인 리스트

최근 로드된 플러그인의 목록은 `list` 옵션으로 볼수 있다.

~~~bash
sudo bin/elasticsearch-plugin list
~~~

대신 클러스터의 각노드에 설치된 플러그인을 알아내기 위해서는 [node-info API](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/cluster-nodes-info.html)를 사용해라

### 플러그인 삭제

플러그인은 `plugins/` 아래 디렉토리를 삭제함으로서 수동으로 삭제될 수 있고 또는 공용 스크립트를 사용할 수 있다.

~~~bash
sudo bin/elasticsearch-plugin remove [pluginname]
~~~

Java 플러그인이 삭제된 후 삭제 프로세스를 완료하기 위해 노드를 재시작해야한다. 

기본적으로 플러그인 설정파일은 디스크에 보관된다. 이는 설정이 플러그인 업그레이드 되는동안 잃지 않는 이유이다.  플러그인을 삭제할때 설정파일을 퍼지하길 윈하면 `-p`  또는  `--purge` 를 사용한다. 이옵션은  설정파일삭제가 느릴때 사용될 수 있다.

### 플러그인 업데이트

플러그인은 Elasticsearch의 특정버전에 맞춰져있어서 Elasticsearch가 업데이트 될때마다 재설치를 해야한다. 

~~~bash
sudo bin/elasticsearch-plugin remove [pluginname]
sudo bin/elasticsearch-plugin install [pluginname]
~~~



## 그외 명령어 파라메터

`plugin` 스크립트는 몇가지 다른 명령어 파라메터들을 지원한다. 

### Silent/Verbose 모드

`--verbose` 파라메터는 더많은 디버깅정보를 출력한다. 한편, `--silent` 파라메터는 프로그레스바에 포함된 모든 출력은 끈다. 스크립트는 아래 코드를 반환할 수 있다. 

| 0    | Everything was OK                                  |
| ---- | -------------------------------------------------- |
| 64   | 알수없는 명령어 이거나 정확하지 않은 파라메터 옵션 |
| 74   | IO Error                                           |
| 70   | 그외 다른 Error                                    |

### Batch 모드

몇가지 플러그인은 Core Elasticsearch에서 기본적으로 제공되는 권한보다 더많이 요구할 수 있다. 이 플러그인들은 요구되는 권한을 리스트로 보여주고 설치를 계속하기전에 사용자에게 확인을 요청한다.

다른프로그램(설치 자동화 스크립트)으로부터 플러그인 설치 스크립트가 실행중일 경우 플러그인 스크립트는 콘솔에서 호출되지 않는것을 감지해야하고, 확인응답을 건너뛰고 요청된 모든 권한을 강제로 부여해야한다. 콘솔 검색에 실패하면 다음과 같이`-b` 또는 `--batch`  로 배치모드를 강제로 할수 있다 

~~~bash
sudo bin/elasticsearch-plugin install --batch [pluginname]
~~~

### 커스텀 설정 디렉토리

`elasticsearch.yml` 파일이 커스텀 위치에 있으면 `plugin` 스크립트를 사용할 경우 설정파일을 경로에 지정해야한다

~~~bash
sudo ES_PATH_CONF=/path/to/conf/dir bin/elasticsearch-plugin install <plugin name>
~~~

### Proxy 설정

proxy를 통해 플러그인을 설치하기위해 proxy 상세정보  `http.proxyHost` 와 `http.proxyPort`(또는 `https.proxyHost` 와 `https.proxyPort`)를 `ES_JAVA_OPTS` 를 환경설정에 추가해야한다.

~~~bash
sudo ES_JAVA_OPTS="-Dhttp.proxyHost=host_name -Dhttp.proxyPort=port_number -Dhttps.proxyHost=host_name -Dhttps.proxyPort=https_port_number" bin/elasticsearch-plugin install analysis-icu
~~~

윈도우에서는

~~~bash
set ES_JAVA_OPTS="-Dhttp.proxyHost=host_name -Dhttp.proxyPort=port_number -Dhttps.proxyHost=host_name -Dhttps.proxyPort=https_port_number"
bin\elasticsearch-plugin install analysis-icu
~~~



## 플러그인 디렉토리

`plugin` 디렉토리의 기본위치는 설치한 패키지에 따라 다르다.

- [`.zip` 과 `.tar.gz` 압축파일의 디렉토리 구조](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/zip-targz.html#zip-targz-layout)
- [Debian 패키지의 디렉토리 구조](https://www.elastic.co/guide/en/elasticsearch/reference/6.3/deb.html#deb-layout)
- [RPM 의 디렉토리 구조

### 필수 플러그인

플러그인을 사용한다면 `config/elasticsearch.yml` 파일에 `plugin.mandatory` 설정을 추가해서 필수 플러그인을 정의할 수 있다.

~~~
plugin.mandatory: analysis-icu, lang-js
~~~

안전이유로 노드는 필수 플러그인이 없다면 시작하지 않을것이다.

