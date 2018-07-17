---
layout: single
author_profile: true
comments: true
share: true
related: true
toc: true
title: Elasticsearch 설치및 기본 명령어
tag: Elasticsearch, 엘라스틱서치 설치, 
---



# Elastic Search 설치와 기본개념

### 설치

요구조건 : Java 8 이상(2018.7.16 기준 Java1.8.0_131 사용권장)

* Java Version 확인

~~~ bash
java -version
echo $JAVA_HOME
~~~

* Elasticsearch 다운로드 ([Elasticsearch 최신버전 다운로드](https://www.elastic.co/downloads))

~~~bash
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.3.1.tar.gz
~~~

* 압축 풀기

~~~bash
tar -xvf elasticsearch-6.3.1.tar.gz
~~~

* 실행 

~~~bash
./elasticsearch-6.3.1/bin/elasticsearch
~~~



### ELK Stack

**ELK** 란 **E**lastic Search, **L**ogstash, **K**ibana의 약자를 딴 Elastic 사의 상품 구성이다. 

| ELK                | 설명                |
| ------------------ | ------------------- |
| **E**lastic Search | 검색엔진            |
| **L**ogstash       | 데이터 입력 툴      |
| **K**ibana         | 수집결과 Display 툴 |



### 개념정리

| Elastic Search |  RDBMs   |
| :------------: | :------: |
|     index      | Database |
|      Type      |  Table   |
|    Document    |   Row    |
|     Field      |  Column  |
|    Mapping     |  Schema  |

### 명령어

| Elastic Search | RDBMs  |
| :------------: | :----: |
|      GET       | SELECT |
|      PUT       | UPDATE |
|      POST      | INSERT |
|     DELETE     | DELETE |



### 기본명령어

**검색**

~~~bash
curl -XGET http://localhost:9200/basketball/record/_search?pretty
~~~

**인덱스 생성**

~~~bash
curl -XPUT http://localhost:9200/인덱스명
~~~

**Document 생성** 

~~~bash 
curl -XPOST http://localhost:9200/인덱스명/타잎명/ID -d '{"name": "John", "title": "Algorithm"}'
~~~

**Document 생성** (Json 파일 사용)

~~~bash
curl -XPOST http://localhost:9200/인덱스명/타잎명/ID -d @onefile.json
~~~

**Document Update**

~~~bash
curl -XPOST http://localhost:9200/인덱스명/타잎명/ID/_update -d '{"doc": {"unit": 1} }'

curl -XPOST http://localhost:9200/인덱스명/타잎명/ID/_update -d '{"script": "ctx._source.unit +=5" }'
~~~

**Document 벌크 삽입** 

~~~bash
curl -XPOST http://localhost:9200/_bulk --data-binary @onefile.json
~~~

~~~json
//인덱스 정의 : 인덱스, 타잎, ID 값 정의
{ "index" : { "_index" : "basketball", "_type" : "record", "_id" : "1" } }
//실제 데이터
{"team" : "Golden States Warriors","name" : "Stephen Curry", "points" : 30,"rebounds" : 3,"assists" : 4, "blocks" : 5, "submit_date" : "2016-10-11"}
~~~

**Mapping** - 데이터 타잎을 정의하는 행위, 추후 키바나에서 시각화할때 도움이 된다. 

~~~bash
curl -XPOST http://localhost:9200/인덱스명/타잎명/_mapping -d @mapping.json
~~~



**@mapping.json**

~~~json
{
	"story" : {
		"properties" : {
			"tm_medal" : {
				"type" : "text",
				"fielddata" : true
			},
			"tm_title" : {
			  "type" : "text",
				"fielddata" : true
			},
			"tl_conts" : {
				"type" : "text"
			}
			"cover_img_h" : {
				"type" : "long"
			},
			"vst_min_dt" : {
				"type" : "date",
				"format" : "yyyy.MM.dd.HH.mm"
			}
		}
	}
}
~~~

**인덱스 삭제**

~~~bash
curl -XDELETE http://localhost:9200/basketball
~~~



