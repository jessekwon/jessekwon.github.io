---
layout: post
title: Elasticsearch 한글형태소 분석기 설정
subtitle: Elasticsearch 한글형태소 분석기 설정(feat.Arirang)
date: 2018-07-17
author: "jesseKwon"
header-img: "img/post-bg-js-module.jpg"
catalog: true
tags: 
    - Elasticsearch 
    - 엘라스틱서치_한글
    - 형태소분석
    - Arirang
---



# Elastic Search 한글 형태소 분석기 설정

Elastic Search 에서는 기본적으로 한글로 검색이 되지 않는다. 문서도 제대로 읽어보지 않고 URI 인코딩도해보고, 이리저리 뻘짓을 많이 했다. 

한글 형태소 분석기는 현재 3개정도가 주목을 받고 있다고 한다. 그중 arirang 형태소 분석기가 가장 퍼포먼스가 좋다기에 적용키로 해본다. [참고: Elastic Blog - 어떤 한국어 분석기를 사용할까?](https://www.elastic.co/kr/blog/using-korean-analyzers)



Arirang 은 2개로 구성되어 있다. 

* arirang analyzer - 루신의 analyzer 를 상속받아 루신에서 사용할 수 있도록 해준다. 
* arirang morph - 한글 형태소에 대한 기본 분석과 사전 정보로 구성되어 있고 한글 처리와 사전정보를 변경할 수 있다.





