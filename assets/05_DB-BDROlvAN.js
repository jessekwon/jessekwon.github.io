const e="DB",n=[{index:1,topic:"DatabaseSystem(DBS)",define:"- 데이터베이스에 데이터를 저장하고, 저장된 데이터를 관리하여 조직에 필요한 정보를 생성해 주는 시스템",head:"",remark:"DB, DBMS, 데이터 언어, 사용자, HW",image:[]},{index:2,topic:"DIKW 피라미드",define:"- 데이터에서 정보, 정보에서 지식, 지식에서 지혜로 이어지는 계층적 지식 피라미드",head:`DIKW
특징 :계층적 구조,데이터의 가치 변화,이해 및 활용의 확장성,의사결정 지원`,remark:`Data
Information 
Knowledge 
Wisdom`,image:[]},{index:3,topic:"Database",define:"- 정보를 일원화하여 처리를 효율적으로 수행하기 위해서 서로 관련성을 가지며 중복이 없는 데이터의 집합을 유지하는 것",head:`통저운공 
통합, 저장, 운영, 공용 데이터 
특징 :�통합성,저장성,�운영성,�공용성,+ 실시간 접근성,�무결성 유지`,remark:`* 데이터베이스 구조 
- 논리적 구조: 사용자 관점(ERD) -> 스키마,테이블,속성,개체,관계
- 물리적 구조: 저장 관점(물리적 레코드)-> 테이블스페이스,�데이터파일,�데이터블록,� 물리적 레코드,�인덱스`,image:[]},{index:4,topic:"3단계 데이터베이스 구조",define:"- 데이터베이스를 관점에 따라 3개의 계층으로 분리하여 사용자에게 내부적으로 복잡한 데이터베이스 구조를 단순화시킨 관점을 제공하는 사상",head:`- 외부 단계(=외부 스키마) : 사용자 관점(뷰, 사용자 인터페이스로 구성)
- 개념 단계(=개념 스키마) : 전체적인 논리적 구조(개념 모델, 논리 모델)
- 내부 모델(=내부 스키마) : 실제 저장매체에서 저장 구조 결정(물리적 모델, 물리적 구현)`,remark:"외부, 개념, 내부, 논리, 물리",image:[]},{index:5,topic:"데이터 독립성(DataIndependence)",define:`- 하위단계의 논리적, 물리적 구조가 변경되어도 상위단계에 영향을 미치지 않도록 구성하는 DB 특징
- 데이터베이스의 논리적 구조나 물리적 저장 방식이 변경되더라도 응용 프로그램에 영향을 주지 않는 성질`,head:`외개내논물 
스키마(외개내), 독립성(논물), 사상(논물)`,remark:null,image:["static/images/cellImage_1674488679_0.jpg"]},{index:6,topic:"스키마(schema)",define:"- 데이터베이스가 어떤 구조로 설계되어 있는지 보여주는 논리적 구조와 제약조건에 대한 명세서",head:`- 데이터베이스를 구성하는 데이터 개체(Entity), 속성(Attribute), 관계(Relationship) 및 데이터 조작 시 데이터 값들이 갖는 제약 조건 등 정의
- 스키마는 데이터 사전(DataDictionary)에 저장
* 스키마 구성 : 외개내`,remark:`- 외부 스키마: 사용자 뷰 
- 개념 스키마: 전체 뷰 
- 내부 스키마: 저장 스키마`,image:[]},{index:7,topic:"데이터 사전(Data Dictionary), 시스템 카탈로그",define:"- 데이터베이스에 저장된 데이터의 구조,속성,관계,제약조건 등 메타데이터(데이터에 대한 데이터)를 관리하는 저장소(= 시스템 카탈로그)",head:`구성요소 : 테속관제인권저스감
: 테이블정보, 속성정보, 관계정보, 제약조건, 인덱스정보, 권한, 저장공간정보, 스키마구조, 감시/추적`,remark:null,image:[]},{index:8,topic:"데이터베이스 사용자",define:"- 데이터베이스를 이용하기 위해 접근하는 모든 사람",head:`데이터베이스 관리자 
최종 사용자 
응용 프로그래머`,remark:`*관리자 종류
데이터 아키텍트(DA) : 데이터 아키텍처 설계, 표준화
데이터 모델러 : 데이터 모델(개념·논리·물리 모델)설계, 정규화
데이터베이스 관리자(DBA) : DB성능 최적화(튜닝),보안 관리,백업 및 복구`,image:[]},{index:9,topic:"DBL(Database Language)",define:"- 사용자가 데이터베이스를 구축하고 접근하기 위해 데이터베이스 관리 시스템과 통신하기 위한 수단",head:`DMC 
- DDL, DML, DCL`,remark:`- 데이터 정의어(DDL): 스키마 정의, 수정, 삭제(CREATE,ALTER,DROP,
TRUNCATE)
- 데이터 조작어(DML): 데이터 삽입, 삭제, 수정, 검색 등의 처리 (SELECT,�INSERT,�UPDATE,�DELETE)
- 데이터 제어어(DCL): 내부적으로 필요한 규칙이나 기법 정의(GRANT,�REVOKE)`,image:[]},{index:10,topic:"데이터베이스 관리 시스템(DBMS)",define:"- 모든 응용프로그램에서 데이터베이스를 공용할 수 있게 관리해주는 소프트웨어 시스템",head:`- 기능: 정의(DDL), 조작(DML), 제어(DCL)
- 종류: 네트워크 DBMS, 계층 DBMS, 관계형 DBMS, 객체지향 DBMS, 객체관계 DBMS`,remark:`* DBMS 구성 
- DDL 컴파일러, DCL 컴파일러, DML 프리컴파일러, DML 컴파일러, 런타임 데이터베이스 처리기, 트랜잭션 관리자`,image:[]},{index:11,topic:"ㄴ객체관계형 DBMS (ORDBMS)",define:"- OODBMS의 한계를 극복하기 위해 OODBMS와 RDBMS의 기술을 접목한 DBMS",head:"사참중대상",remark:"- 사용자 정의형 지원, 참조타입 지원, 중첩된 테이블, 대단위 객체지원(LOB), 테이블간 상속관계",image:[]},{index:12,topic:"ㄴOracle DBMS",define:`- Instance: 메모리(SGA,PGA), 프로세스
- Database: 파일`,head:"",remark:null,image:[]},{index:13,topic:"분산 데이터베이스(DistributedDatabase)",define:"- 논리적으로 하나의 시스템으로 구현되어 있으나, 물리적 네트워크를 통해 분산된 형태로 관리되는 데이터베이스(지역화, 부하 분산 병렬처리)",head:`* 분산 데이터 베이스 5가지 투명성: 위분지복병장 
- 위치 투명성: 데이터 물리적 위치 알필요 없음
- 분할 투명성: 데이터가 여러 단편으로 분할되었음을 인식할 필요 없음
- 지역 투명성: 지역 시스템 이름과 무관한 논리적 이름 사용 가능
- 복제 무관성: 데이터 복제여부 신경 쓸 필요 없음
- 병행 무관성: 동시 트랜잭션 수행 시 일관성 유지
- 장애 무관성: 장애 발생 시에도 데이터 무결성 보장`,remark:"- 동기화기법: 2PC",image:[]},{index:14,topic:"ㄴ2PC(2Phase Commit)",define:`- 독립적인 머신에서 구동되는 프로세스들의 분산 트랜잭션 보장을 위한 프로토콜 

* 2PC 구성 
- Global Coordinator: 트랜잭션 관리
- 지역노드(참가자): 트랜잰션 대상`,head:"",remark:null,image:["static/images/cellImage_1674488679_1.jpg","static/images/cellImage_1674488679_2.jpg"]},{index:15,topic:"병렬 데이터베이스 (ParallelDatabase)",define:`- 여러 개의 프로세서(Processor) 및 디스크를 활용하여 데이터베이스 작업을 병렬로 처리하는 시스템
- 대량의 데이터를 빠르게 처리하고, 처리속도를 높이며 확장성을 제공하는 데이터베이스 기술`,head:`* 주요 기능
- 병렬 쿼리 처리
- 데이터 파티셔닝: 구간 파티셔닝(샤딩), 해시기반 파티셔닝,라운드로빈 기반 파티셔닝
- 로드 밸런싱
- 병렬 인덱싱
- 병렬 복제 및 장애복구`,remark:`* 시스템 아키텍처 유형
Shared-Memory System: 빠른 속도,확장성 낮음,단일 장애점
Shared-Disk System: 확장성 우수,디스크 병목 가능성,동기화 필요
Shared-Nothing System: 최고의 확장성,고가용성,통신 비용 발생`,image:[]},{index:16,topic:"데이터 모델(Data Model)",define:`- 데이터 모델링을 쉽게 할 수 있도록 도와주는 도구, 데이터 모델링의 결과물을 표현하는 도구
- 현실 세계의 데이터를 논리적으로 표현하는 구조와 기법을 정의한 모델
- 데이터의 구조, 연산, 제약 조건을 체계적으로 정의하여 데이터베이스를 설계하는 기본 틀`,head:`* 구성요소 
- 데이터 구조: 개체, 속성, 관계 포함
- 연산(Operation): 관계대수, 관계해석, SQL 연산 포함
- 제약조건: 기본키, 외래키, 유일성, 도메인 제약조건 포함`,remark:null,image:["static/images/cellImage_1674488679_3.jpg"]},{index:17,topic:"데이터 모델링",define:"- 현실 세계를 추상화하여, 중요 데이터를 추출 DB에 저장할 구조로 변환하는 작업",head:`개논물
- 개념적 모델링: 사용자의 요구사항을 반영하여 데이터의 개념적 구조를 설계하는 작업(예:ERD) -> 비즈니스 설계 중심
- 논리적 모델링: 개념모델을 DBMS구조에 맞춰 논리적인 관계로 변환하는 작업
(예:정규화,테이블 관계)->DBMS 독립적, 정규화 적용
- 물리적 모델링: 논리모델을 실제 DBMS에 맞춰 구현하는 단계
(예:인덱스,파티셔닝,저장 구조)->DBMS 종속적,최적화 고려(반정규화)`,remark:null,image:["static/images/cellImage_1674488679_4.jpg"]},{index:18,topic:"ㄴ개념적 데이터 모델링",define:`- 개체-관계 모델: 현실세계를 개체와 관계를 이용해 개념적 구조로 표현하는 방법 
- 개체-관계 다이어그램`,head:"",remark:null,image:[]},{index:19,topic:"ㄴㄴ개체(Entity)",define:`- 조직이 관리하고자 하는 데이터와 관련된 사용자 환경 속의 사람, 장소, 객체, 이벤트 또는 개념 
- 현실 세계에서 정보를 저장할 필요가 있는 데이터베이스의 독립적으로(고유하게) 식별할 수 있는 객체 또는 대상`,head:`* Entity 표현 요소
- 개체타입(Entity Type), 개체 이름, 속성, 개체 인스턴스, 개체 집합`,remark:`* Eentity 종류: 유개사 기중행 
[형태 기준]
- 유형: 물리적 형태 존재 
- 개념: 관리해야할 개념적 정보
- 사건: 업무 수행 중 발생 
[발생 시점 기준]
- 기본: 업무에 원래 존재하는 정보
- 중심: 기본 엔티티 타입에서 발생
- 행위: 두개 이상의 부모 엔티티 타입에서 발생`,image:[]},{index:20,topic:"ㄴㄴ속성(Attribute)",define:`- 개체(Entity) 또는 관계(Relationship)의 특성을 나타내며, 의미 있는 데이터의 가장 작은 논리적 단위

* 속성 유형
- 속성값 갯수 기준 : 단일값 속성, 다중값 속성
- 계산 여부 기준 : 기본 속성, 유도 속성
- 고유성 기준 : 기본키 속성, 외래키 속성, 약한 개체 식별자 속성
- 구성방식 기준 :  단순 속성, 복합 속성`,head:"",remark:null,image:["static/images/cellImage_1674488679_5.jpg","static/images/cellImage_1674488679_6.jpg"]},{index:21,topic:"ㄴㄴ관계(Relationship)",define:`- 두 개 이상의 개체(Entity)들이 어떻게 연결되고 상호작용하는지에 대한 연관성을 표현하는 요소
- 개체와 개체가 맺고 있는 의미있는 연관성, 개체 집합들 사이의 대응관계, 즉 매핑을 의미(동사에 해당)
- 관계도 개체처럼 속성을 가질 수 있음`,head:`* 관계 표현 요소
- 관계명
- 개체
- 카디널리티:  한 개체가 다른 개체와 가질 수 있는 최대/최소 연관 개수
- 참여도
- 종속성
- 식별/비식별 관계
ㄴ식별자 관계: 부모 개체의 기본키가 자식개체의 기본키(PK)로 포함
ㄴ 비식별자 관계: 부모 개체의 기본키가 자식개체의 일반속성에 포함

* 관계 유형
1:1, 1:N, N:1, N:M`,remark:null,image:["static/images/cellImage_1674488679_7.jpg"]},{index:22,topic:"ㄴㄴㄴ관계의 특성",define:`* 관계 특성 
1) 관계의 참여 특성 
- 전체(필수) 참여: 반드시 참여해야하는 관계(이중선 표시, 제약사항 활용) 
- 부분(선택) 참여: 일부만 참여 가능 관계`,head:`2) 관계의 종속성 
- 강한 개체: 다른개체의 존재 여부 결정(직원) 
- 약한 개체: 다른 개체의 존재 여부에 의존적인 개체(부양가족)`,remark:null,image:["static/images/cellImage_1674488679_8.jpg"]},{index:23,topic:"ㄴㄴE-R 다이어그램",define:"- 개체-관계 모델을 이용해 현실 세계를 개념적으로 모델링한 결과물을 그림으로 표현한 것",head:"",remark:null,image:[]},{index:24,topic:"ㄴ논리적 데이터 모델링",define:"- 데이터베이스 관리 시스템에 따라 사용자 입장에서 E-R 다이어그램으로 표현된 개념적 구조를 데이터베이스에 저장할 형태로 표현한 논리적인 구조",head:`* 유형
- 관계 데이터 모델: 2차원 테이블 형태 
- 계층 데이터 모델: 트리 형태
- 네트워크 데이터 모델: 그래프 형태`,remark:null,image:[]},{index:25,topic:"ㄴㄴ관계 데이터 모델 구조",define:`- 데이터베이스의 논리적 구조가 2차원 테이블 형태 

* 구성: 릴레이션, 튜플, 속성, 도메인, 기본키, 외래키, 관계, 정규화, 카디널리티(=튜플의 수), 차수(=속성의 수), 내포(=릴레이션의 구조), 외포(=릴레이션 내의 현재 데이터 집합), 속성값`,head:`* 릴레이션 특징: 유무무원 
- 튜플의 유일성 
- 튜플의 무순서성 
- 애트리뷰트의 무순서성 
- 애트리뷰트의 원자성`,remark:`* 키: 릴레이션의 튜플을 유일하게 식별할 수 있는 애트리뷰트의 집합 
- 슈퍼키, 후보키, 기본키, 대체키, 외래키`,image:[]},{index:26,topic:"ㄴㄴ관계 데이터 모델 제약조건",define:`* 무결성 
- 데이터의 정확성,일관성,신뢰성을 유지하기 위한 제약조건 및 규칙
- 데이터베이스에서 잘못된 데이터가 입력, 수정, 삭제되지 않도록 보호하는 원칙

* 무결성 종류
개체 무결성 
참조 무결성 
속성 무결성 
사용자(의미) 무결성 
키 무결성`,head:"",remark:null,image:["static/images/cellImage_1674488679_9.jpg","static/images/cellImage_1674488679_10.jpg"]},{index:26,topic:"ㄴ참조 무결성",define:`- 외래키(Foreign Key)가 참조하는 기본키(Primary Key)의 값이 항상 유효하도록 보장하는 규칙
 
<종류> 
- 입력 참조 무결성(의존·자동·기본·지정·NULL·미지정),  
- 수정 참조 무결성(제한·연쇄),  
- 삭제 참조 무결성(제한·연쇄·기본·지정·NULL·미지정)`,head:"",remark:null,image:[]},{index:27,topic:"무결성 제약 조건",define:`< 무결성 제약조건(IntegrityConstraints) = 규칙>
- 데이터베이스의 일관성과 정확성을 유지하기 위해 적용하는 규칙
- 잘못된 데이터 입력이나 조작을 방지하여 데이터의 신뢰성을 보장하는 역할`,head:`도메인 무결성 
릴레이션 무결성`,remark:null,image:["static/images/cellImage_1674488679_11.jpg"]},{index:28,topic:"ㄴ도메인 무결성 제약조건",define:"- 삽입, 수정 할 어트리뷰트 값이 어트리뷰트가 정의한 도메인에 속한 값이어야 하는 규칙",head:"Unique, Not null, Check, PK, FK",remark:`* 도메인 무결성 제약조건 
- PK : 유일성 보장. NULL값 허용 불가(Not NULL)
- Unique : 유일성 보장. NULL값 허용. 보조키 역할
- FK : 참조무결성 유지
ㄴCascaded: 부모 삭제 시 자식도 삭제
ㄴNullified: 부모 삭제 시 자식 값 NULL
ㄴRestricted: 부모 삭제 불가
- Date Type: 데이터 유형 제한
- Check: 특정조건 만족
- Default: 기본값 자동 설정`,image:[]},{index:29,topic:"ㄴ릴레이션 무결성 제약조건",define:"- 릴레이션을 조작시 연산을 수행하기 전과 후에 대한 상태에 대해 정확성을 유지하는 규칙",head:`변범시
상과 집튜 즉지`,remark:`* 릴레이션 무결성 제약조건
변환-상태, 과도 제약 
범위-집합, 튜플 제약 
시점-즉시, 지연 제약

- 상태: 조건명세
- 과도: 직전,직후 비교
- 집합: 튜플 집합 관련
- 튜플: 한 튜플
- 즉시: 즉시 적용
- 지연: 트랜잭션 단위`,image:[]},{index:30,topic:"ㄴ릴레이션 무결성 제약조건",define:"",head:"",remark:null,image:["static/images/cellImage_1674488679_12.jpg","static/images/cellImage_1674488679_13.jpg"]},{index:31,topic:"ㄴ무결성 제약조건 절차적 방법",define:"",head:"Trigger, Stored procedure, application, 뷰, 함수 등",remark:null,image:[]},{index:32,topic:"ㄴㄴ트리거",define:`<개념> 
- 특정 이벤트(INSERT, UPDATE, DELETE 등)가 발생할 때 자동으로 실행되는 데이터베이스 객체 
- 미리 정의된  조건을 만족하면 DBMS가 자동으로 실행하는 SQL 코드 블록 

- 테이블·뷰 종속 

<유형> 
BEFORE 트리거, AFTER 트리거, INSTEAD OF 트리거`,head:`<동작 절차>  
DECLARE
EVENT
BEGIN
CONTROL
SQL (DQL, DML)
EXCEPTION
END`,remark:null,image:["static/images/cellImage_1674488679_14.jpg"]},{index:33,topic:"ㄴㄴ저장 프로시저",define:`<개념> 
- 반복적으로 실행되는 SQL 문을 미리 저장하여 필요할 때 호출할 수 있는 데이터베이스 객체(명시적 실행 필요) 

- 트랜잭션 지원`,head:`<수행 요소> 
프로시저 이름
매개변수 (Parameter)
SQL 블록
제어 흐름 
예외 
트랜잭션 

<동작 절차>  
DECLARE
BEGIN
CONTROL
SQL (DQL, DML)
EXCEPTION
TRANSACTION
END`,remark:null,image:[]},{index:34,topic:"관계 데이터 모델 연산",define:"- 데이터 구조에 따라 개념 세계나 컴퓨터 세계에서 실제로 표현된 값들을 처리하는 작업",head:"관계대수, 관계해석",remark:null,image:["static/images/cellImage_1674488679_15.jpg"]},{index:35,topic:"ㄴ관계대수",define:"- 관계형 데이터베이스에서 원하는 정보와 그 정보를 어떻게 유도하는가를 기술하는 절차적 정형언어",head:`일반집합-합교차카리 
순수관계-셀프조디 

* 화일구조 과목을 가르치는 담당교수 검색=>`,remark:null,image:["static/images/cellImage_1674488679_16.jpg"]},{index:36,topic:"ㄴ관계해석",define:"- 원하는 결과를 얻기 위해 처리를 원하는 데이터가 무엇이지만 기술하는 비절차 언어",head:`- 튜플 관계 해석 : 테이블(릴레이션)내의 튜플(행) 단위로 데이터를 검색하는 방식
-> {t| 조건(t)}
- 도메인 관계 해석 : 개별 속성(컬럼)값의 조건을 기반으로 데이터를 검색하는 방식
-> {속성1,속성2,... | 조건(속성1,속성2,...)}`,remark:null,image:[]},{index:37,topic:"SQL(Structured Query Language)",define:"-  사용자가 처리를 원하는 데이터가 무엇인지만 제시하고 데이터를 어떻게 처리해야 하는지를 언급할 필요가 없어 비절차적 데이터 언어(표준 질의어)",head:`* SQL 처리과정
- SQL 요청 > 공통 파싱(문법 검사, 의미 검사, Shared Pool Cache 확인) > 캐시 hit 시 소프트 파싱 > 캐시 miss 시 하드 파싱 > SQL 실행 > 결과 반환

ㄴ 소프트 파싱 : 기존 실행 계획을 재사용하여 빠르게 처리함
ㄴ 하드 파싱 : 새로운 SQL로 인식하여 처음부터 실행계획 생성

* SQL 명령어 유형
: DDL, DML, DCL`,remark:null,image:[]},{index:38,topic:"ㄴ데이터 정의어(DDL, Data Definition Language)",define:"- 새로운 데이터베이스를 구축하기 위해 스키마를 정의하거나, 기존 스키마를 수정, 삭제 하기위해 사용하는 데이터 언어",head:"CREATE, ALTER, DROP, TRUNCATE, RENAME",remark:null,image:[]},{index:39,topic:"ㄴ데이터 조작어(DML, Data Manipulation Language)",define:"- 사용자가 데이터의 삽입, 수정, 삭제, 검색 등의 처리를 DBMS에 요구하기 위해 사용하는 데이터 언어(절차/비절차)",head:"SELECT, INSERT, UPDATE, DELETE",remark:`* SELECT문 명령어 
- 산술식, 조건, LIKE, NULL, 정렬, 집계함수, 그룹별
- 집계함수 : 속성(COUNT,MAX,MIN),숫자(SUM,AVG, STDDEV,VARIANCE), 조건(HAVING)`,image:[]},{index:40,topic:"ㄴㄴ조인(Join)",define:"- 복수 테이블로부터 데이터를 가져오기 위해 서로 묶어서 특정 조건의 레코드셋을 선별하고 중요한 정보로 가공하는 기법",head:`내부-세타/동등/자연/세미/크로스/셀프 조인 
외부-왼쪽 외부 조인,오른쪽 외부 조인,완전 외부 조인`,remark:null,image:["static/images/cellImage_1674488679_17.jpg"]},{index:41,topic:"ㄴㄴ서브쿼리",define:`- SQL문 안에 포함되어 있는 또 다른 SQL문 
- 메인 쿼리에 포함되는 종속적인 관계의 쿼리
- 괄호( ~ ) 안에 묶여저 있음`,head:`위치별-Nested, Inline View, Scalar Subquery 
형태별-단일행, 다중행, 다중칼럼 서브쿼리`,remark:null,image:[]},{index:42,topic:"ㄴ데이터 제어어(DCL, Data Control Language)",define:"- 여러 사용자가 무결성과 일관성을 유지하며 문제없이 공유할 수 있도록, 내부적으로 필요한 규칙이나 기법을 정의하는데 사용하는 데이터 언어(무결성,�보안,�회복,�동시성 보장)",head:`<DCL(Data Control Language)>
- 데이터베이스에서 사용자 권한을 부여하거나 회수하는 명령어
DCL- GRANT, REVOKE

<TCL(Transaction Control Language)>
- 데이터베이스에서 트랜잭션의 실행을 제어하는 명령어
TCL- COMMIT, ROLLBACK, SAVEPOINT`,remark:null,image:[]},{index:43,topic:"ㄴDBMS실행 계획(Execution Plan)",define:"- DBMS가 SQL�쿼리를 최적화하여 실행하는 과정과 접근 방법을 설명하는 계획",head:`- 활용 : SQL�성능 분석,�조인/인덱스 활용 방식,�데이터 접근 방식 확인,�DBMS별 차이 존재
- 조인 연산:�여러 테이블을 결합할 때 사용하는 방법,
- 데이터 접근 방식 : 테이블에서 데이터를 검색하는 방식과 인덱스 활용 여부`,remark:null,image:[]},{index:44,topic:"ㄴㄴ조인연산(조인알고리즘)",define:"- 하나의 SQL 명령문에 의해 여러 테이블에 저장된 데이터를 한번에 조회할 수 있는 기능",head:`Nested Loop Join
Sort Merge Join
Hash Join`,remark:null,image:[]},{index:45,topic:"ㄴㄴ데이터 엑세스 방식",define:"",head:"",remark:null,image:[]},{index:46,topic:"ㄴㄴㄴFull table scan",define:"- 전체 테이블을 첫번째 블록부터 차례대로 스캔하여 조건을 만족하는 데이터 블록을 엑세스하는 방식",head:"- 순차적 블록 엑세스",remark:null,image:["static/images/cellImage_1674488679_18.jpg"]},{index:47,topic:"ㄴㄴㄴIndex Scan",define:"- 조건을 만족하는 인덱스의 ROWID 정보를 이용하여 실제 테이블 데이터 블록(Block)의 로우를 일일이 랜덤하게 엑세스함",head:`- 인덱스 블록 엑세스 후 ROWID 를 통해 데이터 블록 획득
- 비 순차적인 블록 엑세스`,remark:null,image:["static/images/cellImage_1674488679_19.jpg"]},{index:48,topic:"ㄴㄴㄴFast full index scan",define:"- 질의에 포함된 조건이 index에 포함 된 경우 멀티 블록 .I/O 및 병렬화를 통한 엑세스 하는 기법",head:`- 질의에 필요한 모든 컬럼이 인덱스에 포함된 경우
- 멀티 블록 .I/O 및 병렬화 가능`,remark:null,image:["static/images/cellImage_1674488679_20.jpg"]},{index:49,topic:"Static SQL",define:`<정적 SQL: 컴파일 된 SQL>
- 실행 시점에 변경되지 않는 고정된 SQL문으로,실행 계획이 사전에 결정되어 있어 효율적이고 성능이 최적화된 SQL`,head:`- 특징 : 미리 컴파일 된 실행 계획 사용,빠른 실행,보안 강화,실행 계획 고정
- Soft Parsing:실행 계획이 고정되어 있어 재사용 가능`,remark:null,image:[]},{index:50,topic:"Dynamic SQL",define:`<동적 SQL : 런타임에 실행 계획이 생성>
- 실행 시점(런타임)에 SQL을 문자열(String형)로 생성 및 실행하며,유연성을 제공하지만 실행 계획이 매번 새로 계산되어 성능이 영향을 받을 수 있는 SQL(런타임에 동적으로 생성되는 SQL문을 실행)`,head:`- 특징 : 유연하지만 성능 최적화 필요,보안 문제 주의(SQL Injection 가능성)
- 하드파싱(Hard parsing)으로 인한 부담`,remark:null,image:["static/images/cellImage_1674488679_21.jpg"]},{index:51,topic:"Embedded SQL",define:"- 데이터베이스내의 데이터를 정의하거나 접근하는 SQL문을 응용 프로그램 내에서 포함되어 실행될 때 함께 실행되도록 호스트 프로그램 언어에 삽입된 SQL",head:"",remark:null,image:["static/images/cellImage_1674488679_22.jpg","static/images/cellImage_1674488679_23.jpg"]},{index:52,topic:"데이터베이스 구축프로세스",define:"- 요구수집 및 분석, DB 설계, 구현 및 테스트의 데이터베이스를 효율적으로 관리 할 수 있도록 구축하는 일련의 과정",head:"요구->Contextual model -> 개념 -> 논리 -> 물리 -> 구현(마스터 셋업) -> 이행",remark:null,image:[]},{index:53,topic:"데이터베이스 설계",define:"- 사용자들의 요구사항을 고려하여 데이터베이스를 생성하는 과정",head:`4단계- 요개논물
5단계- 요개논물구`,remark:`요구사항분석 
개념적 설계 : 주핵관핵식
논리적 설계 : 엔관식속세정통검
물리적 설계 : 테식속컬슈반
구현`,image:[]},{index:54,topic:"ㄴ개념적 설계- 개념적 모델링",define:"개념적 설계 단계에서 하는, 사용자의 요구 사항을 개념적 데이터 모델로 변환하는 작업",head:`주핵관핵식 
- 주제영역도출, 핵심데이터 집합도출, 관계설정, 핵심속성도출, 식별자도출`,remark:null,image:[]},{index:55,topic:"ㄴㄴ(1)개체(Entity)와 속성 추출",define:`명사형 도출 
정규화 이용 
4-Step 데이터 모델링`,head:"",remark:null,image:[]},{index:56,topic:"ㄴㄴ(2)관계추출",define:`- 관계는 개체 간의 의미 있는 연관성 
- 일반적으로 관계는 요구 사항을 표현한 문장에서 동사 역할`,head:`* 관계 유형
1:1, 1:N, N:1, N:M`,remark:null,image:[]},{index:57,topic:"ㄴㄴ(3)E-R 다이어그램 작성",define:"요구 사항 명세서에서 추출한 개체, 속성, 관계를 표현",head:"",remark:null,image:[]},{index:58,topic:"ㄴㄴ연결함정(Connection Trap)",define:"- 관계성 집합의 의미가 불분명하여 원하는 결과를 얻을수 없거나 업무처리에 있어 영향을 미치게 되는 ER모델",head:`* 부채꼴 함정(Fan Trap) 
- 개체 집합 사이에 관계성 집합이 정의되어 있기는 하지만 관계성 예시가 모호한 경우 
- 교단학->교학단`,remark:`* 균열함정(Chasm Trap) 
- 개체 집합 사이에 관계성 집합이 정의되어 있기는 하지만 일부 개체집합과 개체집합 사이에 관계성이 존재하지 않는 경우 
- 학교학->관계추가`,image:[]},{index:59,topic:"ㄴ논리적 설계",define:`- 개발에 사용할 DBMS에 적합한 논리적 데이터 모델을 이용해서, 개념적 설계 단계에서 생성한 개념적 스키마를 기반으로 논리적 스키마를 설계 
- 릴레이션 스키마, 즉 테이블 스키마로 변환하는 작업`,head:`엔관식속세정통검 
- 엔티티타입도출, 관계도출, 식별자도출, 속성도출, 세부사항 도출, 정규화, 통합/분할, 검증`,remark:"변환규칙 : E-R 모델과 릴레이션 변환 규칙을 이용",image:[]},{index:60,topic:"ㄴㄴ식별자(identifier)",define:"- 하나의 엔터티 내에서 각각의 인스턴스를 유일(unique)하게 구분해 낼 수 있는 속성 또는 속성 그룹(하나의 엔터티는 하나 이상의 식별자를 보유하고 있어야 함)",head:`특징: 유최불존 
유형: 주보 내외 단복 원대`,remark:`- 특징: 유일성, 최소성, 불변성, 존재성 
- 유형: 주/보조 식별자, 내부/외부 식별자, 단일/복합 식별자, 원조/대리 식별자`,image:[]},{index:61,topic:"ㄴㄴㄴ식별자 관계",define:"- 부모 엔터티타입의 주식별자가 자식 엔터티타입의 주식별자로 상속",head:`- 강한 연결관계 표현 
- 자식 주식별자의 구성에 포함 
- 실선 표현`,remark:null,image:["static/images/cellImage_1674488679_24.jpg"]},{index:62,topic:"ㄴㄴㄴ비식별자 관계",define:"- 부모 엔터티타입의 주식별자가 자식 엔터티타입의 일반 속성으로 상속",head:`- 약한 연결관계 표현 
- 자식 일반 속성에 포함 
- 점선 표현`,remark:null,image:["static/images/cellImage_1674488679_25.jpg"]},{index:63,topic:"ㄴㄴ자기참조관계",define:"- 동일 Entity 타입 내에서 자기가 자신의 인스턴스를 참조하는 구조 및 모델링 기법",head:`1:1 자기참조관계 
1:M 자기참조관계 
M:N 자기참조관계`,remark:`* M:N 관계의 해소 
- 엔터티타입 분리 
- 주식별자 통합 
- 병렬 관계`,image:[]},{index:64,topic:"ㄴㄴ모델링 표기법",define:"바커표기법 vs. IE표기법",head:"",remark:null,image:["static/images/cellImage_1674488679_26.jpg","static/images/cellImage_1674488679_27.jpg"]},{index:65,topic:"ㄴㄴㄴ바커표기법",define:"",head:"",remark:`식별자 #
필수 *
선택 O`,image:["static/images/cellImage_1674488679_28.jpg","static/images/cellImage_1674488679_29.jpg"]},{index:66,topic:"ㄴㄴㄴIE표기법",define:"",head:"",remark:null,image:["static/images/cellImage_1674488679_30.jpg","static/images/cellImage_1674488679_31.jpg","static/images/cellImage_1674488679_32.jpg"]},{index:67,topic:"ㄴㄴㄴArc(Mutually Exclusive)관계",define:"- 여러 개의 관계 중 오직 하나만 참여할 수 있는 배타적 관계",head:"",remark:null,image:["static/images/cellImage_1674488679_33.jpg"]},{index:68,topic:"ㄴ물리적 설계",define:`-  DMBS로 구현 가능한 물리적 구조 설계 (HW나 운영체제의 특성 고려)
- 필요한 인덱스 구조나 내부 저장 구조 등 물리적 구조를 설계`,head:`테식속컬슈반 
- 테이블로 전환, 식별자PK전환, 속성을 컬럼전환, RelationShip을 컬럼 전환, 슈퍼/서브타입, 반정규화`,remark:null,image:[]},{index:69,topic:"ㄴㄴ슈퍼/서브 타입",define:"- 엔티티의 작성 시 대부분의 속성이 비슷하고 일부만 다른 여러 엔티티들을 하나로 묶어 통합하는 경우 수행하는 확장형 데이터모델링",head:`- 수퍼타입 : 여러 서브타입을 포함하는 공통적인 개체 타입
- 서브타입 : 슈퍼타입을 상속받아 특정 속성을 추가하는 하위 개체
- 통합화 : 여러 개의 서브타입을 하나의 슈퍼타입으로 묶는 과정
- 세분화 : 하나의 슈퍼타입을 특정 기준에 따라 여러 개의 서브타입으로 나누는 과정
- 상호 배타적 관계 : 하나의 슈퍼타입이 오직 하나의 서브타입에만 속할 수 있는 경우
- 중첩 관계 : 하나의 슈퍼타입이 여러 서브타입에 동시에 속할 수 있는 경우

* 변환방법 
- OneToOne Type(Identity) : 슈퍼/서브타입의 개별 테이블 유지
- Plus Type(Rolldown) : 슈퍼 +서브타입의 각 테이블 
- Single Type(Rollup) : 하나의 테이블`,remark:null,image:["static/images/cellImage_1674488679_34.jpg"]},{index:70,topic:"정규화",define:`- 이상현상을 발생시키는 속성간의 종속성, 중복성을 제거하고 무결성을 보장하기 위해 릴레이션을 분해하는 과정 
- 함수적 종속성을 이용하여 릴레이션을 연관성이 있는 속성들로만 구성되도록 분해해서, 이상현상이 발생하지 않는 올바른 릴레이션으로 만들어 나가는 과정`,head:`무중분- 정보표현의 무손실, 최소 데이터의 중복성, 분리의 원칙
도(원)부이결다조`,remark:`원자값으로만 구성, 부분함수종속 제거, 이행함수종속 제거, 결정자 종속함수 제거, 다치종속 제거, 
조인종속 제거(프언자)`,image:[]},{index:71,topic:"ㄴ이상현상(Anomaly)",define:"- 데이터의 중복으로 인해 릴레이션을 조작할 때 발생하는 비합리적 현상",head:"삽삭갱",remark:"삭제이상, 삽입이상, 갱신이상",image:[]},{index:72,topic:"ㄴ함수적 종속성",define:"- 데이터들이 어떤 기준값에 의해 항상 종속되는 현상",head:"완부이결",remark:"완전함수 종속성, 부분함수 종속성, 이행함수 종속성, 결정자함수 종속성",image:[]},{index:73,topic:"ㄴ암스트롱 공리(Armstrong’s rules)",define:"- 릴레이션 R에 대해 X, Y, Z라는 애트리뷰트의 집합이 주어졌을 경우 여러가지 함수종속의 성질을 유도해 낼 수 있는 추론 규칙",head:`특징: 정정완(정규화, 정당, 완전)
추론규칙: 재증이 연분가`,remark:`기본- 재귀, 증가, 이행 
부가- 연합, 분해, 가이행`,image:[]},{index:74,topic:"ㄴㄴ폐포(closure)",define:"- 함수적 종속성 집합 F를 사용하여 X에 의해 함수적으로 결정되는 모든 애트리뷰트들의 집합",head:"- 릴레이션 R=(A,B,C,D,X) 가 있을 때 X->A, X->B, X->C 이런 함수 종속 관계가 있는 모든 속성 즉, (ABC)를 찾아 내는걸 의미",remark:null,image:[]},{index:75,topic:"정규화 개요",define:"- 함수 종속성을 이용하여 릴레이션을 연관성이 있는 속성들로만 구성되도록 분해해서, 이상 현상이 발생하지 않는 올바른 릴레이션으로 만들어 나가는 과정",head:`- 원리: 무중분 
- 정규화: 원부이결다조`,remark:"- 정보 표현의 무손실, 최소 데이터의 중복성, 분리의 원칙",image:[]},{index:76,topic:"ㄴ1차정규화",define:`- 모든 속성이 원자값(AtomicValue)만 포함 될 수 있도록 중복 속성,다중값 속성,반복 속성을 제거하는 과정
- 특징 :원자값 유지,중복 데이터 제거`,head:"한컬럼에 여러값 들어간 경우 수정",remark:null,image:[]},{index:77,topic:"ㄴ2차정규화",define:'- 기본키의 "일부"속성에만 종속되는 부분함수 종속성을 제거하여, 기본키에 완전 함수적 종속을 가지도록 속성을 분리하는 과정',head:"고이당등할 -> 고이당   고등할",remark:null,image:["static/images/cellImage_1674488679_35.jpg"]},{index:78,topic:"ㄴ3차정규화",define:`- 모든 속성이 기본키에 이행적 함수 종속이 되지 않도록
릴레이션을 분해하는 과정
- 어떤 속성이 기본키가 아닌 일반 속성에 종속되지 않도록
이행함수 종속성을 제거하는 과정`,head:"고등할 -> 고등   등할",remark:null,image:["static/images/cellImage_1674488679_36.jpg"]},{index:79,topic:"ㄴBCNF(강한 제3정규형)",define:`- 일반속성이 결정자 속성을 결정하는 상황인 결정자 함수종속성을 제거하여 모든 결정자가 후보키가 되도록 정규화하는 과정
- 모든 결정자가 후보키가 되도록 하는 정규화 단계
- 강한 제3정규화(Strong 3NF)`,head:`(고객아이디, 인터넷강좌) -> 담당강사번호
=>
고객아이디-담당강사번호, 담당강사번호-인터넷강좌`,remark:null,image:["static/images/cellImage_1674488679_37.jpg"]},{index:80,topic:"ㄴ4차정규화",define:`한 관계에 둘 이상의 독립적 다중값 속성이 존재하여 릴레이션을 분해하는 과정
- 다치종속 제거
* 삽입이상이 핵심`,head:`사기프
- 사원-기술, 사원-프로젝트`,remark:null,image:[]},{index:81,topic:"ㄴ5차정규화",define:`릴레이션(R)에 존재하는 모든 조인 종속이 릴레이션R의 후보키를 통해서만 만족되는 경우의 릴레이션R 
- 전제 조건 :�릴레이션 A,�B,�C가 있을 때 A-B,�A-C,�B-C는 연관성이 있으나 A-B-C는 연관성이 없음
- 조인종속성 제거`,head:`프자언
- 프-자, 자-언, 프-언
- 프-자-언 가짜 튜플 발생
- 중간에 연관 릴레이션 추가`,remark:null,image:[]},{index:82,topic:"ㄴ반정규화(역정규화)",define:`- 정규화된 엔티티타입, 속성, 관계에 대해 시스템의 성능향상과 개발 및 운영의 단순화를 위해 데이터 모델을 통합하는 프로세스 

- 절차: 반정규화 대상조사 > 다른 방법 유도 검토 > 반정규화 적용`,head:"테속관",remark:`테이블 반정규화 - 병분추(테이블 병합, 테이블 분할, 테이블 추가)
속성 반정규화 - 중복컬럼 추가, 파생칼럼 추가, 이력테이블 컬럼추가 
관계 반정규화 - 중복관계 추가`,image:[]},{index:83,topic:"상관모델링",define:"- 정보화 시스템 구축을 위해 그 업무에 존재하는 데이터에 대해 프로세스 및 데이터 영향도를 분석하는 방법",head:`*절차
시나리오 작성-> 업무기능분해 
-> ERD 작성-> CRUD 매트릭스로 검증`,remark:`* 업무기능분해 
- 업무기능영역 -> 업무기능 -> 업무프로세스 -> 단위프로세스`,image:[]},{index:84,topic:"ㄴCRUD매트릭스",define:"- 시스템 개발시 프로세스와 DB에 저장되는 데이터 사이의 의존성(Dependency)를 나타내기 위한 매트릭스",head:"Entity type, 업무 프로세스, CRUD",remark:"- CRUD Matrix 작성 후, 업무와 Entity 간의 무결성 검증 필요",image:[]},{index:85,topic:"이력모델링",define:"- 데이터의 변경이력을 관리하기 위한 모델링 기법으로, 데이터가 특정시점 또는 기간별로 어떻게 변경되었는지를 저장하고 추적하는 데이터 모델링 기법",head:`발생방법- 변발진 
이력관리- 시선 
테이블 구분- 내전과군군
시스템 환경에 따른 구분-변임감차유`,remark:`- 변경이력, 발생이력, 진행이력
- 시점, 선분 
- 내부스냅샷, 1:M 내부스냅샷 전체이력, 1:M 내부스냅샷 과거이력, 1:M 스냅샷 군집전체이력, 1:M 내부스냅샷 군집과거이력
- Slowly Changing Dimension(변경 시 이력관리), Temporal Table(임시테이블), Audit Logging(감사 기록), Difference-Based Storage(차분만 보관), Bi-Temporal Modeling(유효시간과 트랜잭션 함께 관리)`,image:[]},{index:86,topic:"트랜잭션",define:"- 한번에 수행되어야 할 데이터베이스의 일련의 Read와 Write 연산을 수행하는 단위",head:"ACID, 원일독지",remark:"Atomicity(원자성), Consistency(일관성), Isolation(독립성), Durability(지속성)",image:[]},{index:87,topic:"ㄴ트랜잭션 연산",define:`활동(Active)
부분완료(Partial Commited)
실패(Failed)
철회(Aborted)
완료(Committed)`,head:`- 철회-> restart or kill 
- 정상종료-> 커밋, 정상종료 
- 비정상종료-> 커밋, 롤백`,remark:null,image:["static/images/cellImage_1674488679_38.jpg"]},{index:88,topic:"ㄴ트랜잭션 직렬성",define:`- 여러 트랜잭션이 동시에 병행 수행되더라도 각 트랜잭션이 하나씩 차례대로 수행되는 것과 같은 데이터베이스의 일관성을 보장하는 수행특성 
- 스케쥴에 포함된 여러 트랜잭션을 동시에 실행한 결과와 트랜잭션을 순차적으로 처리한 결과가 같음을 보장하는 특성`,head:"",remark:`* 직렬성 위반내용: 부비가 
- 부정판독(Dirty Read)
- 비반복판독(NonRepeatable Read)
- 가상판독(Phantom Read)
* 직렬성 보장방안 -> 고립성 수준 설정`,image:["static/images/cellImage_1674488679_39.jpg"]},{index:89,topic:"ㄴIsolation Level",define:`- 트랜잭션 실행 중 중간 연산 결과가 다른 트랜잭션으로 접근 불가하도록 고립성을 유지하기 위해 데이터를 허용하는 수준
- 여러 트랜잭션이 동시에 실행될 때, 각 트랜잭션이 다른 트랜잭션의 중간 상태를 볼 수 없도록 제어하는 수준`,head:`언커리시
- Read Uncommitted 
- Read Committed
- Repeatable Read 
- Serializable`,remark:null,image:["static/images/cellImage_1674488679_40.jpg"]},{index:90,topic:"팬텀 충돌",define:`- 팬텀(Phantom)의 의미:이전에 존재하지 않았던 행이 나중에 갑자기 쿼리 결과에 나타나는 현상
- Phantom Read 현상과 관련된 트랜잭션 충돌
- 한 트랜잭션이 특정 조건을 만족하는 모든 행을 조회한 후, 다른 트랜잭션이 같은 조건을 만족하는 새로운 행을 삽입 혹은 삭제하면서 논리적인 충돌에 의해 발생하는 트랜잭션 간 일관성을 깨뜨리는 문제`,head:"해결방법 : Serializable 격리 수준, 범위 잠금 사용",remark:null,image:["static/images/cellImage_1674488679_41.jpg"]},{index:91,topic:"팬텀 리드",define:"- 동일한 쿼리를 반복 실행할 때 결과가 달라지는 현상",head:"해결방법 : Repeatable Read 또는 Serializable 격리수준 적용, SELECT...FOR UPDATE, Gap Lock 활용",remark:null,image:[]},{index:92,topic:"장애유형",define:`트랜잭션 장애
시스템장애
디스크장애
사용자장애`,head:"트시디사",remark:null,image:[]},{index:93,topic:"데이터 회복(Data Recovery)",define:"- 데이터베이스 운영 도중 예기치 못한 장애가 발생할 경우 데이터베이스를 장애 발생 이전의 일관된 상태로 복원",head:`REDO : 최근변경내용 로그에 기록, 장애발생시 로그파일 읽어 재실행 통해 복원
UNDO : 장애발생시 모든 변경내용 취소해 복원
로체그`,remark:`로그기반 회복기법 
체크포인트기반 회복기법
그림자페이징 회복기법`,image:[]},{index:94,topic:"ㄴ로그 기반 회복기법",define:"- 장애 발생 시 로그파일을 이용한 복구 기법",head:`즉시갱신 : UNDO
- 트랜잭션 수행중 변경한 연산결과 즉시반영
- 장애대비 갱신즉시 로그와 DB에 반영
- 장애시 로그파일 참조해 UNDO 실행`,remark:`지연갱신 : REDO
- 로그파일에만 기록해 두었다가 트랜잭션 부분완료후 로그 내용 기반 한번에 DB반영
- REDO Log이용한 DB Write
- 로그에 기록된 변경내용 폐기`,image:[]},{index:95,topic:"ㄴ체크포인트 기반 회복기법",define:"- 장애가 발생하면 가장 최근 검사 시점 이전의 트랜잭션에는 회복 작업을 수행하지 않고,이후의 트랜잭션에만 회복 작업을 수행하는 회복 기법",head:`<매커니즘>
1) 트랜잭션 실행 :
- 변경 사항을 먼저 로그 파일(WAL)에 기록
2)체크포인트 설정:
→ 일정 간격마다 변경된 데이터를 디스크에 기록
3)장애 발생:트랜잭션 중단
4)로그 분석:
→체크포인트 이전에 Commit된 트랜잭션:작업 불필요(t1,t2,t3)
→체크포인트 이후에 Commit된 트랜잭션:Redo수행(t4,t5)
→체크포인트 이후 실행 중이던 트랜잭션:Undo수행(t6)`,remark:null,image:["static/images/cellImage_1674488679_42.jpg"]},{index:96,topic:"ㄴ그림자페이징 회복기법",define:"- 데이터를 직접 수정하지 않고,새로운 페이지를 생성한 후 교체하는 방식으로 장애 발생 시 자동 복구가 가능한 회복 기법",head:`- 현재 페이지 테이블(주기억장치)과 그림자 페이지 테이블(하드디스크)을 이용
< 처리 절차 >
1) 트랜잭션 시작 : 현재 페이지 테이블 생성
2) 트랜잭션 수행 : 현재 페이지 테이블 데이터 변경
3) Commit(트랜잭션 완료) : 현재 페이지 테이블을 그림자 페이지 테이블로 교체. 그림자 페이지 테이블에 새로운 데이터 반영
4) 장애 발생 시 : 기존 그림자 페이지 테이블 유지(Rollback 자동수행). 현재 페이지 테이블 삭제 후 그림자 페이지 테이블로 대체`,remark:null,image:["static/images/cellImage_1674488679_43.jpg"]},{index:97,topic:"ㄴ백업과 복구",define:`- 주기적으로 데이터베이스를 백업하여 장애 발생시 복구 수행하는 기법
- 로그(Archive Log)와 함께 사용하여 최신 상태로 복구 가능`,head:`< 백업 종류 >
- 전체 백업, 증분 백업(마지막 백업 이후 백업), 차등 백업(변경분 백업)
- 논리적 백업, 물리적 백업
- Hot Backup(운영 중 백업), Cold Backup(정지 상태 백업)
- 스냅샷 백업(특정 시점 백업)`,remark:null,image:[]},{index:98,topic:"WAL(Write-ahead logging,로그선행 기법)",define:"- 트랜잭션이 데이터베이스를 변경하기 전에 반드시 해당 변경 사항을 로그에 먼저 기록하는 기법",head:`<특징>
- 로그 우선 기록(데이터 변경 전 로그 기록),Redo&Undo지원(장애 시 트랜잭션 복구),
- 체크포인트 활용(복구 범위 최적화)
<WAL기반 데이터 쓰기 과정>
- 데이터 블록을 캐싱 후 변경 →�변경 내용을 WAL에 순차 기록 →�체크포인트 발생 시 일괄 반영 →�랜덤 I/O�최소화로 성능 최적화`,remark:null,image:[]},{index:99,topic:"ㄴARIES(Algorithms for Recovery and Isolation Exploiting Semantics)",define:`- WAL을 기반으로 트랜잭션과 시스템 장애를 모두 복구할 수 있도록 설계된 회복 알고리즘
- 트랜잭션 수행 및 회복 절차까지 로그에 기록하여, 장애 회복 중 재 장애 발생시에도 복구 가능한 알고리즘`,head:`< 특징 >
- Redo&Undo모두 지원 : WAL기반, Undo 중에도 로깅, Redo 중 모든 행위 재 실행
< 사용 로그 정보 >
- LSN(순차번호), Undo/Redo정보, 트랜잭션 테이블, 오손 페이지 테이블(Dirty Page Table), 체크포인트 레코드
< 복구 매커니즘 >
1) 분석단계 : 체크포인트 이후 로그 분석
2) Redo(재실행) 단계 :  Redo 중 역사 반복(Repeating History)
3) Undo(되돌리기) 단계 : 미완료 트랜잭션을 역순으로 롤백. Undo 중 로깅`,remark:`* 동작원리
- 분석단계(REDO 시작위치결정) > REDO(시작~로그끝) > UNDO(로그역순)`,image:[]},{index:100,topic:"병행수행",define:"- DBMS내에서 여러개의 트랜잭션이 동시에 인터리빙 방식으로 병행 수행됨",head:"- 병행수행시 발생문제: 갱현모연(LDIC)",remark:`갱신 분실(Lost Update) 
현황파악오류(Dirty Read) 
모순성(Inconsistency) 
연쇄 복귀(Cascading Rollback)`,image:[]},{index:101,topic:"트랜잭션 스케줄",define:"- 트랜잭션에 포함되어 있는 연산들을 수행하는 순서를 지정하는 알고리즘",head:`< 스케줄 종류 >
- 직렬 스케쥴 :순차적 실행
- 직렬 가능 스케쥴: 병행실행이지만 결과가 직렬 스케줄과 동일
- 비직렬 스케쥴 : 직렬 스케줄과 동일한 결과 보장 못함
- 회복가능 스케줄 : 읽은 트랜잭션은 그 이전 트랜잭션이 커밋된 후에만 커밋 가능
- 연쇄복귀 불가 스케줄 : 커밋되지 않은 데이터는 읽지 않는 스케줄
- Strict 스케줄 : 커밋 전에는 어떤 트랜잭션도 해당 데이터를 읽기/쓰기할 수 없음`,remark:"스케줄에 대한 알고리즘을 확인 하기는 쉽지 않은 작업 -> 병행제어 기법 사용",image:[]},{index:102,topic:"병행제어(동시성제어)",define:`- 병행 수행 중 트랜잭션 간 데이터 충돌이나 일관성 오류를 방지하기 위해 순서를 조정하는 기법
- 트랜잭션이 사용하는 자원(데이터 항목)에 대하여 상호 배제 (Mutual�Exclusive)�기능을 제공하는 기법`,head:`LT낙다
2PL 낙타다`,remark:`Lock, 2Phase Locking 
Timestamp Ordering 
낙관적 검증 
다중버전 동시성제어(MVCC)`,image:[]},{index:103,topic:"ㄴLocking",define:`- 트랜잭션이 데이터베이스 객체(예:�레코드,�테이블,�페이지 등)에 동시에 접근하는 것을 제어하기 위해 Lock(잠금)을
설정하여,�데이터의 일관성과 무결성을 보장하는 동시성 제어 기법`,head:`- 공유Lock(Shared lock, S-lock) - 트랜잭션 읽기만 가능
- 베타Lock(Exclusive lock, E-lock) - 해당 트랜잭션만 읽고/쓰기 가능. 타 트랜잭션 읽기불가
<락 양립성(LockCompatibility)>
- 두 개 이상의 트랜잭션이 같은 데이터 항목에 동시에 락을 요청할 때,그 락들이 서로 충돌 없이 공존할 수 있는지 여부를 판단하는 기준
- 공유(S)-배타(X) 또는 배타(X)-공유(S): 불가능
→읽는 중에 누군가 쓰려 하거나,쓰는 중에 누군가 읽으려 하면 충돌
- 배타(X)-배타(X): 불가능`,remark:`< 락(lock) 분류 >
- 비관적 락(Pessimistic Lock) : 충돌 가능성을 높게 보고 락을 즉시 설정하여 방지
- 낙관적 락(Optimistic Lock)  : 충돌 가능성이 낮다고 보고 락 없이 진행 후 종료 시 검증`,image:[]},{index:104,topic:"ㄴ2PL(2Phase Locking)",define:"- 트랜잭션 내에서 모든 락을 설정하는 확장(확보)�단계와,�한 번이라도 락을 해제한 이후에는 더 이상 락을 설정할 수 없는 축소(해제)�단계로 구분하여 직렬 가능성을 보장하는 동시성 제어 기법",head:`- 단계: 확장단계, 차단단계, 축소단계 
- 기법: Strict 2PL, Rigorous 2PL, Static 2PL
→Strict2PL(Rollback안전성 강화) : 쓰기 락만 종료시까지 해제 금지
→Rigorous2PL(격리 수준 강화) : 읽기/쓰기 락 모두 종료시까지 해제 금지
→Static2PL(Deadlock예방 목적) : 필요한 모든 락을 미리 확보`,remark:null,image:["static/images/cellImage_1674488679_44.jpg"]},{index:105,topic:"ㄴ낙관적검증",define:`- 트랜잭션 간 충돌이 드물다는 가정 하에,락 없이 실행한 후 종료 직전에 검증(Validation)을 통해 충돌 여부를 확인하고
문제가 없을 경우 커밋하고,충돌이 있으면 롤백하는 동시성 제어 기법
- 3가지 조건 중 하나만 만족하면 트랜잭션 간섭없음 판정`,head:`- 처리단계: 판확기(RVW) 
판독단계(R: Read Phase) 
확인단계(V: Validation Phase) : 데이터베이스에 반영 전 직렬 가능성의 위반여부 확인
기록단계(W: Write Phase)
- 타임스탬프: Start(Ti), Validation(Ti), Finish(Ti)`,remark:null,image:["static/images/cellImage_1674488679_45.jpg"]},{index:106,topic:"ㄴ타임스탬프 기법",define:"- 트랜잭션마다 고유한 타임스탬프를 부여하고,모든 읽기/쓰기 연산을 해당 타임스탬프의 순서에 따라 제어하여 직렬 가능성을 보장하는 동시성 제어 기법",head:`- 락 없이 순서 제어
- 장점 : 직렬가능, 교착상태방지
- 단점 : 연쇄복귀, 기아상태 발생
- 타임스탬프
read_TS(X) : 마지막으로 읽힌 트랜잭션의 타임스탬프
write_TS(X): 마지막으로 쓰인 트랜잭션의 타임스탬프
트랜잭션 TS(X) : 시스템이 할당한 고유한 시점(숫자)`,remark:`<토마스 쓰기 규칙(ThomasWriteRule)>
- 타임스탬프 순서 기법을 기반으로 하면서 특정 조건에서의 불필요한 Write연산을 무시함으로써 롤백을 줄이고 효율성을 높이기 위한 최적화 기법`,image:[]},{index:107,topic:"ㄴ다중버전 동시성 제어(MVCC)",define:"- 데이터의 여러 버전(복사본)을 생성하여 관리함으로써,읽기 작업은 이전 버전,쓰기 작업은 새로운 버전에 접근하도록 하여 락 없이도 트랜잭션 간 동시성과 일관성을 유지하는 동시성 제어 기법",head:`< MVCC 유형 >
1) 버전 체이닝 방식(이전값 저장) : 데이터 블록 내에 여러 버전을 직접 저장하고, 트랜잭션의 SCN(시스템 변경 번호)에 따라 해당 시점에 유효한 버전을 선택하여 읽는 방식`,remark:null,image:["static/images/cellImage_1674488679_46.jpg"]},{index:109,topic:"DB성능향상",define:"* 설계 > DBMS > SQL 관점순 진행",head:`DB설계(모델링) 
DB환경(DBMS+HW) 
SQL문 튜닝`,remark:null,image:[]},{index:110,topic:"ㄴDB성능지표",define:"- 성능향상이 필요한 기준 지표",head:"응시자효반가신",remark:"응답시간, 시간당 처리량, 자원사용량, 효율성, 반환시간, 가용성, 신뢰성",image:[]},{index:111,topic:"ㄴ성능향상 주요기법",define:`* HW관점
CPU, memery, I/O, NW 

* 설계 관점
테식인데 : 테이블분할/통합, 식별자지정, 인덱스, 데이터타입`,head:`* DBMS 관점
이버커티 : I/O, Buffer, Commit/CheckPoint, Thead/Reuse`,remark:`* SQL관점
조다병힌부인옵다 : 조인, 다중처리, 병렬쿼리, 힌트, 부부분범위처리, 옵티마이져, DynamicSQL지양`,image:[]},{index:112,topic:"파티셔닝(Partitioning)",define:`-  데이터베이스의 분할을 나타내는 범용적인 용어 
- 일반적으로는 단일 데이터베이스 인스턴스에서 테이블을 여러 하위 집합으로 분리하는 것`,head:`수평 파티셔닝 
수직 파티셔닝`,remark:null,image:[]},{index:113,topic:"ㄴ테이블 수직분할",define:"- 테이블을 컬럼 단위로 분할하여 I/O를 경감하는 방식",head:"",remark:null,image:[]},{index:114,topic:"ㄴ테이블 수평분할",define:"- 테이블을 로우(ROW) 단위로 분할하여 I/O를 경감하는 방식",head:"래리해컴",remark:"범위(Range)분할, 목록(List)분할, 해시분할, Composite Partition",image:[]},{index:115,topic:"ㄴㄴ샤딩",define:`- 데이터 베이스를 물리적으로 분할 하는 방법이며, 수평 분할에 해당
- 하나의 큰 데이터를 여러 서브셋으로 나누어 여러 인스턴스에 나누어 저장`,head:`별도의 데이터베이스 
부하분산`,remark:null,image:["static/images/cellImage_1674488679_48.jpg"]},{index:116,topic:"쿼리오프로딩(Query off loading)",define:"- 운영 DB의 부하를 줄이기 위해 조회 트랜잭션(Read)과 쓰기 트랜잭션(Write)을 분리하여,조회 쿼리를 복제본(Replica)이나 외부 분석 시스템으로 분산 처리하는 기법",head:`- Master DB: 쓰기 트랜잭션 
- Staging DB: Master, Slave 연계 
- Slave DB: 읽기 트랜잭션. 복수 구성. Replica`,remark:"데이터복제시 CDC 기술 이용",image:[]},{index:117,topic:"CDC(Change Data Capture)",define:`- 변경 데이터 캡처 
- 데이터베이스 내 데이터에 대한 변경을 식별해 필요한 후속처리(데이터 전송/공유 등)를 자동화하는 기술 또는 설계 기법이자 구조`,head:`* CDC 구현방식 
- Push 방식: 데이터 원천(Source)에서 변경을 식별하고 대상 시스템(Target)에 변경 데이터를 적재해 주는 방식 
- Pool 방식: 대상 시스템(Target0에서 데이터 원천(Source)을 정기적으로 살펴보고, 필요 시 데이터를 다운로드 하는 방식`,remark:`* CDC 구현기법 : TVS
- Time Stamp on Rows: 테이블 내 마지막 변경 시점을 기록하는 타임스탬프 칼럼 사용
- Version Numbers on Rows: 테이블 내 버전을 기록하는 칼럼 사용
- Status on Rows: 데이터 변경의 여부를 True/False의 boolean값으로 저장하는 칼럼
- Time/Version/Status on Rows
- Triggers on Tables
- Event Programming 
- Log Scanner on Database`,image:[]},{index:118,topic:"해싱(Hashing)",define:"- 입력 데이터를 해시 함수에 넣어 고정된 길이의 해시값으로 변환하여,데이터를 빠르게 검색,저장,식별하기 위한 효율적인 데이터 처리 방법",head:`< 처리절차 >
- 해싱 키 추출 -> 해시 함수 입력 -> 해시값 계산 -> 주소 매핑(해시 어드레스 연결) -> 데이터 저장(슬랏 또는 버킷)
< 구성요소 >
- 해싱 : 해싱 키, 해시 함수, 해시값, 해시 테이블, 충돌(체이닝, 오픈 어드레싱, 이중 해싱), 충돌 처리, 오버플로우, 오버플로우 처리
- 해시 테이블 : 해시 어드레스, 슬랏(slot), 버킷(bucket)
< 해싱 종류 >
1) 정적 해싱: 해시 테이블 크기와 구조가 고정 -> 충돌 처리 필요
ㄴ 닫힌 해싱(Closed Hashing) (=오픈 어드레싱) : 충돌 시 해시 테이블 내부의 다른 슬롯에 저장
ㄴ 열린 해싱(Open Hashing) (=체이닝) : 충돌 시 해시 테이블 외부에 연결 구조(리스트 등)로 저장
2) 동적 해싱: 데이터가 늘어나면 해시 구조가 자동으로 확장 또는 재구성
ㄴ 확장 해싱: 디렉터리+버킷 구조 사용. 필요 시 디렉터리 크기를 2배로 확장하는 해싱 방식
ㄴ 선형 해싱: 데이터가 늘어나면 순차적으로 버킷을 나누며 점진적으로 확장`,remark:null,image:["static/images/cellImage_1674488679_49.jpg"]},{index:119,topic:"ㄴ해싱 함수(=해싱 알고리즘)",define:`- 해싱 키를 고정 크기의 해시값으로 변환하는 함수
- 목적 : 균등 분포,빠른 저장과 검색
- 출력 : 테이블의 인덱스로 사용 가능한 정수`,head:`< 해싱함수 유형 >
- 제산 함수(Division), 제곱 함수(Mid Square), 중첩 함수(Folding)
- 이동 폴딩/경계 폴딩, 기수 변환(Radix Conversion)`,remark:null,image:[]},{index:120,topic:"ㄴ정적 해싱",define:`- 해시 테이블의 크기와 구조가 고정된 상태에서 작동하는 해싱 방식
- 장점 :�단순하고 빠르며 소규모·정형 데이터에 적합
- 단점 :�유연성이 낮고 데이터 변화에 비효율 발생`,head:`< 매커니즘 >
- 해싱 키를 해시 함수에 입력해 해시값을 생성
- 생성된 해시값을 테이블의 고정된 인덱스로 사용
- 해당 인덱스(슬랏)에 데이터를 직접 저장
< 충돌/오버플로우 해결기법 >
- 체이닝, 오픈 어드레싱으로 해결
- 오버플로우 영역(Overflow Bucket) 처리 : 충돌이 발생한 슬롯 외부에 별도 오버플로우 영역을 마련해 저장
- 재해싱(Rehashing) : 오버플로우가 심해질 경우,전체 해시 테이블을 더 큰 크기로 재구성`,remark:null,image:["static/images/cellImage_1674488679_50.jpg"]},{index:121,topic:"ㄴㄴ체이닝(Chaining)(=열린 해싱)",define:`- 정적해싱 충돌 해결 기법
- 충돌이 발생한 슬롯에 연결 리스트나 배열을 두고,해당 위치에 여러 데이터를 함께 저장하는 방식`,head:`< 체이닝 유형 >
- 다이렉트 체이닝(Direct) : 슬롯이 데이터 레코드를 직접 포함하고, 거기서 다음 노드를 포인터로 연결
- 인다이렉트 체이닝(Indirect) : 슬롯에는 첫 번째 노드의 포인터만 저장하고, 모든 데이터는 외부 블록(버킷)에 위치`,remark:null,image:["static/images/cellImage_1674488679_51.jpg"]},{index:122,topic:"ㄴㄴ 오픈 어드레싱(Open Addressing)(=닫힌 해싱)",define:`- 정적해싱 충돌 해결 기법
- 충돌 시 테이블 내부의 다른 빈 슬롯을 탐색해 저장`,head:`< 오픈 어드레싱 유형 >
- 선형 탐사(Linear Probing) : 충돌 발생 시 한 칸씩 순차적으로 다음 슬롯을 탐색
- 이차 탐사(Quadratic Probing) : 제곱 간격(i2)으로 슬롯을 탐색 
- 이중 해싱(Double Hashing) : 충돌 시 다른 해시 함수를 사용해 탐색 간격을 정하고 다음 위치 계산`,remark:null,image:[]},{index:123,topic:"ㄴ 동적 해싱",define:`- 데이터의 양이 증가함에 따라 해시 테이블 구조를 자동으로 확장하는 해싱 방식
- 디렉터리와 버킷 구조를 사용해 유연하게 저장 공간을 관리`,head:`< 동적 해싱 유형 >
- 확장 해싱 : 버킷 +�디렉터리 확장
- 선형 해싱 : 버킷 중심. 디렉토리 없음`,remark:null,image:["static/images/cellImage_1674488679_52.jpg"]},{index:124,topic:"ㄴㄴ확장 해싱",define:"- 해시값의 앞쪽 비트를 기준으로 데이터를 구분하고,버킷이 꽉 차면 디렉터리를 확장해 새로운 버킷을 추가하는 방식",head:`< 구성요소 >
1) 키/값 : 키, 해시값, 모조키(Phantom Key:탐색경계 정의하는 가상키)
2) 디렉토리 + 글로벌 깊이 d
3) 버킷 + 로컬 깊이 p
< 오버플로우 처리 >
- 버킷 분할
- 디렉토리 확장`,remark:null,image:["static/images/cellImage_1674488679_53.jpg"]},{index:127,topic:"ㄴㄴ선형 해싱",define:"- 디렉토리 없이, 데이터 삽입이 늘어날수록 버킷을 순차적으로 하나씩 분할하며 확장하는 방식",head:`< 구성요소 >
- 버킷
- 오버플로우 영역 : 분할 시 오버플로우 값 재해시(Rehash)
- 초기 해시 함수 : (기본 해시 함수) k mod M 
- 보조 해시 함수 : (확장된 해시 함수) k mod 2M`,remark:null,image:["static/images/cellImage_1674488679_56.jpg"]},{index:128,topic:"옵티마이저(Optimizer)",define:"- 사용자 요구 시 마다 SQL문의 문법적 오류를 확인하고 최적의 경로를 찾아주는 역할",head:`*질의처리단계
쿼리-> Parse-> 질의변환기-> 비용산정기(RBO/CBO)-> 실행계획생성기-> 쿼리 실행 

- RBO(규칙기준), CBO(비용기준)
* Oracle10g부터 CBO만 지원`,remark:null,image:["static/images/cellImage_1674488679_57.jpg"]},{index:129,topic:"SQL 부분범위처리",define:"- 조건을 만족하는 전체 범위를 처리하는 것이 아니라 운반단위까지만 처리하여 추출하는 방식",head:`* 처리 할 수 없는 경우 
- ORDER BY가 사용된 경우
- UNION, MINUS, INTERSECT를 사용한 경우
- Hash Join 또는 Sort Merge Join 이 발생하는 경우`,remark:null,image:[]},{index:130,topic:"인덱스",define:"- 테이블의 존재하는 데이터 검색 속도를 빠르게 하기 위한 목적으로 테이블의 저장된 로우를 식별 가능하도록 구조회된 별도의 체계로 저장한 데이터베이스 오브젝트",head:"* 인덱스 선정절차: 액분경클조준수일",remark:"액세스 유형, 분포도 분석, 액세스 경로, 클러스터링 검토, 조합/순서 결정, 준비, 수정, 일괄적용",image:[]},{index:131,topic:"ㄴ인덱스 분류",define:`형태- 트해비 
목적- 함조도 
구조- 정동`,head:`트리기반, 해쉬기반, 비트맵 인덱스 
함수기반, 조인, 도메인 인덱스 
정적, 동적 인덱스`,remark:`* 논리적 인덱스 유형 
- 클러스터형 인덱스(Clustered Index) : 데이터 실제 순서가 인덱스 순서와 동일하거나 유사
- 비클러스터형 인덱스(Non-Clustered Index) : 데이터 물리적 순서가 인덱스 순서와 다름
- 밀집 인덱스(Dense Index) : 모든 레코드에 대해 인덱스 엔트리 존재 
- 희소 인덱스(Sparse Index) : 일부 레코드만 인덱싱
- 고유 인덱스(Unique Index) : 인덱스 컬럼에 대해 중복값 허용 안함
- 비고유 인덱스(Non-Unique Index) : 중복 허용
- 단일 컬럼 인덱스(Single-column Index) : 하나의 컬럼만으로 생성된 인덱스
- 복합 인덱스(Composite Index) : 여러 컬럼 조합으로 생성
- 함수 기반 인덱스(Function-based Index) : 함수 또는 계산식 결과를 인덱스로 사용. Cost-based�방식일 때만 사용 가능`,image:[]},{index:132,topic:"ㄴ힌트(hint)",define:`- SQL�문에 삽입하여 옵티마이저에게 실행 계획을 유도하거나 강제하는 지시문
- 쿼리 실행 시 인덱스를 사용하도록 강제하는 주석`,head:`- 기본 문법 : /*+hint*/
< 특징 >
- 옵티마이저 개입(사용자가 실행 계획에 개입),쿼리 성능 개선 목적
- 쿼리 내 주석 형태, 과용 주의(잘못 사용 시 성능 저하 가능)

< 작성규칙 >
- SQL내 주석 형태로 작성
- SELECT문 다음에 작성
- 여러 힌트는 공백으로 구분
- 대소문자 구분없음. 가독성 위해 대문자로 작성
- 테이블 별칭 일치해야 함

< 유형 >
- 엑세스 수단 선택 힌트(FULL, INDEX)
- 병렬 처리 관련 힌트(PARALLEL)
- 조인 순서 조정 힌트(USE_NL)
- 최적화 목표 설정 힌트(ALL_ROWS)`,remark:null,image:["static/images/cellImage_1674488679_58.jpg"]},{index:133,topic:"ㄴB Tree",define:"- 데이터를 정렬된 상태로 저장하면서,�검색,�삽입,�삭제를 모두 빠르게 처리할 수 있도록 설계된 트리 구조",head:`< 트리 구성요소 >
- Root Node, Internal Node, Leaf Node, Pointer 
< 구조 >
- M≥2인 다진 트리(M-waytree) 구조
- 자식 수 제한 : 최소 ⌈M/2⌉개 ~ 최대 M개
- 키 수 제한 : 최소⌈M/2⌉- 1개 ~ 최대 M- 1개
- 루트 노드 조건 : 최소 2개 자식 필요
- 트리 균형 조건 : 모든 리프노드는 동일한 레벨에 위치해야 함(균형 트리)
< 연산 > 
- 삽입 시 노드의 키 수가 최대치(M−1)를 초과했을 때 분할
- 삭제 시 노드의 키 수가 최소치(t−1)미만이고 형제 노드에 키가 t개 이상 있는 경우 차용, 재분배
- 삭제 시,�노드의 키 수가 최소치(t−1)�미만이고 형제 노드도 키가 t−1개로 여유 없을 때 병합`,remark:null,image:["static/images/cellImage_1674488679_59.jpg"]},{index:134,topic:"ㄴB+ Tree",define:"- B Tree의 중위순회와 잦은 분배와 합병에 따른 부하를 감소하기 위해 Index set과 Sequential set으로 구성한 트리",head:`Left Node간의 Linked List로 순차 탐색 효율 강화

Index Set : 키, 포인터
Sequential Set : data만 존재`,remark:null,image:["static/images/cellImage_1674488679_60.jpg"]},{index:135,topic:"ㄴB* Tree",define:"- B Tree의 공간활용도를 높이기 위해 노드가 2/3이상 찼을때 분할하도록 한 트리",head:"",remark:null,image:[]},{index:136,topic:"비트맵 인덱스",define:"- 컬럼의 각 값에 대해 비트 벡터를 만들어,�해당 값이 존재하는 행의 위치를 비트로 표시하는 인덱스 방식",head:`→ 각 고유한 값마다 하나의 비트맵(0/1)을 만들고,해당 값이 있는 위치는 1,없으면 0으로 표시
< 구성요소 > 
- 컬럼값(Key Value), Start ROWID, End ROWID, 비트맵
- 인덱스 블록, 인덱스 헤더, 비트 연산기
< 특징 >
낮은 카디널리티에 최적(성별,지역 등 범주형 데이터) => 낮은 분포도`,remark:null,image:[]},{index:137,topic:"MMDB(Main Memory Data Base)",define:"- 데이터베이스 전체를 주기억장치에 상주시켜 데이터베이스 연산을 처리하는 고성능 DB",head:"인덱싱- Hashing, T Tree",remark:null,image:[]},{index:138,topic:"ㄴT Tree",define:"- AVL Tree의 이진 탐색 특성 및 높이 균형과 B Tree의 업데이트와 저장효율을 가진 트리",head:`* 노드 유형 : 내하리
- 내부노드: 왼쪽과 오른쪽 자식 노드 모두를 가지는 노드
- 하프리프노드: 한쪽 자식 노드만 가지는 노두
- 리프노드(Leaf): 자식 노드가 없는 노드. 실제 데이터 저장 위치
* 연산
- 탐색 : 이진 탐색 수행
- 삽입 : 해당 리프 노드 탐색. 노드에 공간 있으면 삽입. 공간 없으면 재분배. AVL회전으로 균형 유지
- 삭제 : 내부 노드에서 키 제거. 최소 키 수 미만이면 재분배 또는 병합`,remark:null,image:["static/images/cellImage_1674488679_61.jpg"]},{index:139,topic:"다차원공간파일",define:"- 공간 정보의 다차원 자료화를 위해 복수 필드를 동시에 키로 사용하는 파일 또는 색인",head:`* 유형 
- PAM: K-D Tree, Quad Tree
- SAM: B Tree, B+ Tree, B* Tree`,remark:null,image:[]},{index:140,topic:"ㄴPAM(Point Access Method)",define:"- 다차원 점 데이터를 공간에서 저장, 검색하는 점 접근 방법",head:"",remark:null,image:[]},{index:141,topic:"ㄴㄴK-D Tree",define:"- 이원 탐색 Tree를 다차원 공간으로 확장, k 차원의 점 데이터를 Index 하는 자료구조",head:"- Tree 의 레벨을 내려가면서 차원의 필드 값을 차례로 번갈아 가며 비교하며 구성",remark:null,image:["static/images/cellImage_1674488679_62.jpg"]},{index:142,topic:"ㄴㄴQuad Tree",define:"- 2차원 공간을 4개의 사분면(quadrant)으로 재귀적 분할하여 표현하는 트리 기반 자료구조",head:`* 트리구조 요소
- 루트노드, 내부노드, 리프노드, 사분면 포인터(=포인터 필드(NW, NE, SW, SE))
* 노드 내부 요소 
- 데이터 필드(대전)
- 데이터 좌표(x:35, y:40)`,remark:null,image:["static/images/cellImage_1674488679_63.jpg"]},{index:143,topic:"ㄴSAM(Spatial Access Method)",define:"- 선, 면, 다각형 등의 다차원 공간 데이터를 저장, 검색할 수 있는 공간 접근 방법",head:"",remark:null,image:[]},{index:144,topic:"ㄴㄴR Tree",define:"- N차원의 공간 데이터를 효과적으로 저장하고 지리정보와 관련된 질의를 빠르게 수행 할 수 있는 자료 구조",head:`* MBR(MinimumBoundingRectangle)
- 하나 이상의 공간 객체 또는 하위 MBR들을 포함하는 가장 작은 직사각형
- 트리 구조의 기본 단위이자 검색의 핵심 조건
* MBR 종류 : 중간 MBR, 리프노드 MBR, 객체 MBR
* 탐색방법: 교포근
- 교차질의, 포함질의, 근접이웃질의`,remark:null,image:["static/images/cellImage_1674488679_64.jpg"]},{index:145,topic:"ㄴㄴR+ Tree",define:"- R-트리에서 노드 간의 중첩 허용, k-d-B 트리의 특징 접목",head:"R-트리의 중첩으로 인한 성능저하 문제 해결",remark:null,image:[]},{index:146,topic:"ㄴㄴR* Tree",define:"- R-트리의 삽입, 삭제 알고리즘을 개선",head:"최소사각형 생성",remark:null,image:[]},{index:147,topic:"품질관리",define:"제품의 품질기준 만족위해 SW가 가져야하는 양이나 질로 관찰하여 수치로 측정할수 있는 시스템 특성",head:"* 데이터 품질: 조직의 목적 달성을 위해 관리되는 데이터가 조직 구성원, 고객 등 데이터 이용자의 만족을 충족시킬 수 있는 수준",remark:null,image:[]},{index:148,topic:"데이터품질관리",define:"- 조직이 운영하는 정보시스템과 db를 활용하는 이용자의 기대를 만족시키기 위해 지속적으로 수행하는 데이터 관리활동",head:"",remark:null,image:[]},{index:149,topic:"ㄴ4가지관점",define:`모델링, 아키텍쳐, 참조, 품질관리
- 데이터 참조모델 : 표준화, 참조사용, 재사용, 분류, 구조, 교환, 관리`,head:`모아참품
표참재 분구교관`,remark:null,image:["static/images/cellImage_1674488679_65.jpg"]},{index:150,topic:"ㄴ데이터품질관리모형",define:"- 품질관리를 위한 거시,미시,부가가치적 관점을 제시 (세부관리 대상 및 방법)",head:`미거부 
- 미시, 거시, 부가`,remark:null,image:["static/images/cellImage_1674488679_66.jpg"]},{index:151,topic:"데이터품질관리프레임워크",define:`- 데이터(표준,모델,관리,업무) 
- 데이터 구조(개념, 논리, 물리, 참조, view, db)
- 데이터 관리 프로세스`,head:`데구프 
데-표모관업
구-개논물참dv 
프`,remark:`* 조직(이해관계자)/관점: CDMDU(개개논물운) 
- CIO(개괄적), DA(개념적), Modeler(논리적), DBA(물리적), User(운용적) 관점`,image:[]},{index:152,topic:"ㄴ데이터",define:"- 기관 및 기업의 비전이나 목표를 달성하기 위해 사용되어지는 전산화된 데이터 또는 전산화에 필요한 데이터",head:"표모관업",remark:"표준데이터, 모델데이터, 관리데이터, 업무데이터",image:[]},{index:153,topic:"ㄴ데이터 구조",define:"- 데이터가 담겨져 있는 모양 틀",head:"개논물참dv",remark:"개념 데이터 모델, 데이터 참조모델, 논리 데이터 모델, 물리 데이터 모델, DB, View",image:[]},{index:154,topic:"ㄴ데이터 프로세스",define:"- 데이터 및 데이터 구조의 품질을 안정적으로 유지, 개선하기 위한 활동",head:"데이터 관리정책, 데이터 표준관리, 데이터 모델관리, 데이터 흐름관리, DB관리, DB보안관리, 데이터 활용관리, 요구사항 관리",remark:null,image:[]},{index:155,topic:"데이터품질관리 성숙모형",define:`데이터품질기준(정일유접적보)
데이터관리프로세스(요표오구베흐활뷰)
데이터품질관리성숙수준(도정통정최)`,head:"기프성",remark:null,image:[]},{index:156,topic:"ㄴ데이터 품질기준",define:"- 데이터 품질에 관한 정의",head:"정일유접적보",remark:"정확성, 일관성, 유용성, 접근성, 적시성, 보안성",image:[]},{index:157,topic:"ㄴ데이터 품질관리 프로세스",define:`- 데이터 품질기준 6개 항목을 향상시키기 위해서 필요한 프로세스
- 품질 기준에 영향을 주는 요소를 관리하는 프로세스 식별`,head:`요표오 
구베
흐활뷰`,remark:"요구사항관리, 데이터 표준관리, 데이터 오너십관리, 데이터 구조관리, 데이터베이스 관리, 데이터 흐름관리, 데이터 활용관리, 사용자 뷰 관리",image:[]},{index:158,topic:"ㄴ데이터 품질관리 성숙수준",define:"- 품질 기준이 서로 다른 관리 프로세스에 의하여 영향을 받고 있기 때문에 품질 기준별로 다르게 측정(1~5)",head:"도정통정최",remark:"도입, 정형화, 통합화, 정량화, 최적화",image:[]},{index:159,topic:"데이터 품질관리 성숙모형(DQM3)",define:`- 데이터베이스 및 데이터 품질을 관리하는 프로세스의 수준을 평가하기 위해 5단계로 구성된 성숙모형 
- 국내에서 세계 최초로 개발`,head:`기프성 
- 데이터 품질기준: 정일유접적보
- 데이터 품질관리 프로세스: 요표오구베흐활뷰
- 성숙수준: 도정통정최`,remark:null,image:["static/images/cellImage_1674488679_67.jpg"]},{index:160,topic:"데이터 표준화",define:`- 시스템 별로 산재해 있는 데이터 정보 요소에 대한 명칭, 정의, 형식, 규칙에 대한 원칙을 수립하여 이를 전사적으로
적용하는 활동`,head:`* 구성요소 : 표절관
- 데이터 표준 : 표준용어,�표준단어,�표준도메인,�표준코드
- 데이터 표준화 절차 : 표준화 등록,검토,승인,변경
- 데이터 표준 관리 조직 : 전사 데이터 관리자,�업무 데이터 관리자,�시스템 데이터 관리자
명정형규
용단도코`,remark:`명칭, 정의, 형식, 규칙
표준 용어, 단어, 도메인, 코드`,image:[]},{index:161,topic:"데이터 아키텍처",define:`(정의) 데이터에 관한 모든 계층을 총망라해서 객관적이고 구체적인 접근방법을 명시한 체계적인 방법론

* 아키텍쳐 계층
개개논물부운 : 개괄적, 개념적, 논리적, 물리적, 부가적모델링, 운용적

* 프레임워크 : 데구 데프 데관
데이터구조, 데이터흐름, 데이터관리`,head:`* 구성요소: 원아참거
- 기본원칙(Data Principle) 
- 데이터 아키텍처 프레임워크(DA Framework, 구조/흐름)
- 참조모델(DRM: Data Reference Model)
- 거버넌스(Data Governance)`,remark:null,image:["static/images/cellImage_1674488679_68.jpg"]},{index:162,topic:"ㄴ데이터 거버넌스",define:"- 전사의 데이터 정책, 지침, 표준, 전략, 방향 등에 근거하여 기업의 목표달성을 위해 데이터에 대한 의사결정을 지원하는 매커니즘",head:`원조절

* 주요영역 (마메사빅)
- 마스터데이터, 메타데이터, 데이터사전, 빅브라더(정보독점문제)`,remark:"원칙, 조직, 절차",image:[]},{index:163,topic:"ㄴ데이터 참조모델(DRM)",define:"- 조직에서 DA(Data Architecture) 구축에 참조 및 재사용할 수 있는 표준화된 데이터 분류기준, 요소 및 관리체계",head:"표참재 분구교관",remark:`데이터 표준화, DRM 참조사용, DRM 재사용
데이터 분류, 데이터 구조, 데이터 교환, 데이터 관리`,image:[]},{index:164,topic:"데이터 전환",define:`- 현 시스템의 데이터를 목표 시스템의 데이터 구조에 맞게 데이터를 매핑하는 규칙을 정의하고 추출, 변화하여 이관하는 활동

- 분석 > 설계 >  설치 > 전개
- 구표변 - 신메에신 - 전작시 - 에이`,head:`*전환절차
분석- 구시스템 분석, 시스템 표준화, 구시스템 변경반영
설계- 신시스템 분석, 데이터 매핑, 에러데이터 정비, 신규항목 처리방안
설치- 전환PGM 구조설계, 전환프로그램 작성, 전환시험
전개- 에러내역 조치, 이행`,remark:`*전환방식
- 빅뱅 방식 
- 빅뱅/단계적 방식 
- 단계적 전환방식`,image:[]},{index:165,topic:"DMBOK",define:`- DAMA International에서 운영중인 데이터 관리를 위한 국제 표준 지침서 
- 표준 산업 관점의 데이터 관리 기능 및 개념, Best Practice 제공`,head:`v1.0- 거아개운보참 디닥메품
v2.0- 거 아모저보통 닥참디메품(거버넌스 중심)`,remark:"데이터 거버넌스, 데이터 아키텍처, 데이터 모델링, 데이터 저장소, 데이터 보안, 데이터 통합, 닥(도큐먼트), 참조, DW, 메타데이터, 데이터 품질",image:[]},{index:166,topic:"데이터품질인증제도(DQ인증)",define:`- 과학기술정보통신부가 지정한 데이터 품질인증기관이 ①데이터 내용,②데이터 관리체계를 진단하고 수준을
평가해 품질을 인증하는 제도
<관련법령>
:「데이터 산업진흥 및 이용촉진에 관한 기본법」 제20조

- DQC가 폐지되고 생김`,head:"",remark:`* 인증대상
 - 데이터내용 : 정형, 비정형, 반정형, AI학습용
 - 데이터 관리체계

* 심사항목
- 정형데이터 : 완전성, 유효성, 일관성, 정확성, 접근성, 유일성

* 데이터 품질기준
:(정일유접적보 +�완유다유)�=�데이터 관리 인증 기준

* 기대효과
- 신뢰성 확보, 요구사항 조율 및 매핑, 품질 제고, 홍보자료 활용, 4차산업혁명 추진 촉진`,image:["static/images/cellImage_1674488679_69.jpg"]},{index:167,topic:"DQC(DB Quality Certification)",define:"- 정보시스템의 데이터 품질을 확보하기 위해 데이터 자체 품질과 데이터 관리체계의 품질, 보안체계를 심사 인증",head:`데이터 인증(DQC-V)- 데이터 정합율
데이터 관리 인증(DQC-M)- 정일유접적보
데이터 보안 인증(DQC-S)- DB접근, 암호화, 취약점 분석 등`,remark:null,image:[]},{index:168,topic:"공공데이터 품질관리 수준진단·평가 매뉴얼",define:`- 공공기관이 생성‧취득하여 관리하는 공공데이터의 품질을 확보하기 위하여 체계적인 품질관리 활동을 수행하는지
여부를 진단
- 공공데이터의 제공 및 이용 활성화에 관한 법률」제22조(공공데이터 품질관리)�`,head:`* 평가지표
1) 데이터 관리체계
① 관리절차 준수 ② 품질관리 계획수립 ③ 예방적 품질관리 진단 
④ 데이터 표준 확산 ⑤ 데이터 구조 안정화 ⑥ 데이터 연계 관리

2) 데이터 값 관리
⑦ 데이터 품질진단 ⑧ 품질진단 결과 조치 ⑨ 데이터 오류율 
⑩ 오류신고 요구사항 분석 및 개선 ⑪ 개방데이터 품질진단`,remark:null,image:[]},{index:169,topic:"데이터베이스 보안",define:"- 저장된 데이터에 대한 인증, 기밀성, 무결성, 가용성 유지를 위한 관리적, 물리적, 기술적 보안 조치 및 활용",head:`* 특성: 인기무가 
- 인증, 기밀성, 무결성, 가용성`,remark:`*보안기법: 접허가암비
- 접근통제, 허가규칙, 가상테이블, 암호화, 비식별화`,image:[]},{index:170,topic:"ㄴ접근통제(Access Control)",define:"- 허가받지 않은 사용자의 DB 자체에 대한 접근을 방지",head:`정책- MAC, DAC, RBAC, ABAC(속성 기반 접근 제어)
모델- bell(기밀성 보장), biba(무결성 보장), Clark-Wilson(무결성과 분리 원칙), 
Chinese Wall(이해 충돌 방지)
매커니즘- ACL, CL, SL(SecurityLabel:보안 등급 기반 라벨링)`,remark:null,image:[]},{index:171,topic:"ㄴㄴ접근통제 정책",define:`- MAC : 강제적 통제, 객체중심, 규칙기반
- DAC : 임의적 통제, 객체 소유자 중심, 신분기반
- RBAC : 그룹/역할 단위 통제, 역할 기반
- ABAC : 속성기반 통제, 유연한 조건 설정 가능, 속성 기반`,head:"",remark:null,image:["static/images/cellImage_1674488679_70.jpg"]},{index:172,topic:"ㄴㄴ접근통제 모델",define:`- Bell-LaPadula : 기밀성 보장, 보안 등급, 군사,
No Read Up/No Write Down
- Biba : 무결성 보장, No Write Up/No Read Down
- Clark-Wilson : 업무 무결성과 내부통제, TP,CDI,UDI,IVP 
- Chinese Wall : 이해 충돌 방지, MAC+DAC 혼합제어`,head:"",remark:null,image:["static/images/cellImage_1674488679_71.jpg"]},{index:173,topic:"ㄴDB암호화(Encryption)",define:`- 데이터베이스에 저장되거나 전송되는 데이터를 암호화 알고리즘을 이용해 암호문으로 변환하여,�외부 유출 또는
비인가 접근 시에도 데이터를 보호하는 보안 기법`,head:`< 암호화 기법 >
- 컬럼단위 암호화 - API, Plug-In
- 블록단위 암호화 - TDE(Transparent Data Encryption)
- 파일 암호화
- 어플리케이션 암호화
- 암호화 함수 
- 호모몰픽(동형암호화) : Somewhat(준동형 암호화),�Full(완전 동형 암호화)`,remark:null,image:[]},{index:174,topic:"CAP 이론",define:`- 대용량 분산 시스템(분산 데이터 저장소)는 데이터 일관성(Consistency),가용성(Availability),단절내성(PartitionTolerance)을 모두 만족시키는 것이 불가능하므로 두 가지만 전략적으로 선택해야 한다는 이론 (DBMS선정을 위한 이론적 배경)
- Consistency(데이터 일관성)
- Availability(가용성)
- Patition Tolerance(단절내성)`,head:`CAP
CA- RDBMS. 일관성 (C) +�가용성 (A)⇒�분산 장애 허용하지 않음(P 불만족)
CP- MongoDB. 일관성 (C) +�분할 허용 (P)⇒�일부 가용성 포기(A 불만족)
AP- Cassandra. 가용성 (A) +�분할 허용 (P)⇒�일관성은 eventual(C 불만족)`,remark:null,image:["static/images/cellImage_1674488679_72.jpg"]},{index:175,topic:"PACELC 이론",define:`- CAP이론으로 부족한 부분을 보완하기위해 네트워크 장애 상황과 정상 상황으로 나누어서 설명하는 이론
- 네트워크 Partition이 발생했을 경우(P)에는 Availability(A) 또는 Consistency(C) 중 선택해야 하고, Partition이 없을 경우(Else)에도 Latency(L)와 Consistency(C) 사이에서 균형을 고려해야 한다는 확장 이론
- P(Partition):네트워크 분할 상황 발생 여부
- A(Availability):분산 시스템이 요청에 대한 응답 보장능력
- C(Consistency):모든 노드가 동일한 데이터를 보여주는 일관성
- E(Else):Partition이 발생하지 않은 정상 상황
- L(Latency):응답 속도,지연 시간`,head:"",remark:null,image:["static/images/cellImage_1674488679_73.jpg","static/images/cellImage_1674488679_74.jpg"]},{index:176,topic:"NoSQL",define:"- 비정형 데이터의 초고용량 데이터 처리를 위해 읽기보다 쓰기에 초첨을 둔, 수평적 확장이 가능한 DBMS",head:"BASE",remark:`- Basically Available: 가용성 보장
- Soft-State: 업데이트 시간 소요
- Eventually Consistent: 일시적 비일관성`,image:[]},{index:177,topic:"ㄴKey/Value Store",define:"- 키 기반",head:"Radis, DynamoDB",remark:null,image:[]},{index:178,topic:"ㄴColumn Family",define:`- 테이블기반, 조인미지원, 컬럼기반 
- Sorted by key`,head:"Cassandra, HBASE",remark:null,image:[]},{index:179,topic:"ㄴㄴHDFS(Hadoop Distributed File System)",define:"- 저비용의 수백/수천 노드로 구성된 클러스터를 이용하여 대용량 데이터 집합을 처리하는 응용프로그램에 적합한 분산 파일 시스템",head:`- Name Node: 파일시스템의 마스터 데이터를 관리하는 서버 
- Secondary Name Node: 백업 노드 
- Data Node: 실제 데이터를 저장하는 서버
- Replication: 데이터 노드간 정보 복제`,remark:null,image:[]},{index:180,topic:"ㄴDocument Store",define:"- JSON, XML 형태의 구조적 문서 저장",head:"MongoDB, CouchDB",remark:null,image:[]},{index:181,topic:"ㄴㄴMongo DB(몽고 DB)",define:`- Document base 데이터베이스 
- BSON 포멧의 동적 스키마 구조에 기반한 문서 지향적 오픈 소스 NoSQL DBMS 
- 저장되어지는 형식이 정해져 있으나 구조에 대한 유연성을 보장하는 NoSQL

- 샤드키, 오토샤딩`,head:`* 몽고DB 구성요소 
mongos: 라우터 서버
mongod: 샤드 서버, config 서버
oplog: 연산수행관련 명령 타임스탬프와 같이 저장 
data Store: 쓰기연산 수행 결과 저장`,remark:`* 몽고DB 특징 
- key-value 저장 
- 빠른 처리속도: 인덱스 기반 빠른 처리 
- 확장 용이성 : 수평확장가능 
- 고가용성(HA): 마스터/슬레이브 방식 운영 
- 비정형 처리: 조인연산없이 원하는 결과 도출 가능 
- 오픈소스: GPL+아파치 라이선스`,image:[]},{index:182,topic:"ㄴGraph Database",define:"- 그래프로 데이터 표현하는 DB",head:"Neo4j",remark:null,image:[]},{index:183,topic:"NoSQL 모델링 패턴",define:`* 특징
- 쿼리/액세스 중심,성능 우선 설계
- 유연한 스키마리스(schema-less) 구조
- 비정규화 기반 : 중복 허용,성능 최적화
- 조인 제한적 : 중첩 문서/중복 데이터 활용
- 수평 확장(Scale-Out)설계 전제`,head:`① Denormalization(반정규화) : 중복 저장,역정규화 유사
② Aggregation(집계 기반 구조) : 유연한 스키마 (Schema-less)
③ ApplicationSideJoin(클라이언트 측 조인) : 클라이언트 단 Join처리
④ AtomicAggregation(원자성 집계) : 단일 테이블 통합
⑤ IndexTable(인덱스 테이블) : 인덱스용 테이블 생성
⑥ CompositeKeyTable(복합 키 테이블)`,remark:null,image:[]},{index:184,topic:"NoSQL 모델링 절차",define:`① 도메인 모델 파악
② 쿼리결과 기반 디자인
③ 패턴 이용 모델링
④ 기능 최적화
⑤ 후보 모델 선정 /테스트
⑥ 선정 모델 최적화`,head:"전 사이클 고려사항 : 비정규화·중복 설계 고려, 샤딩/파티셔닝 고려",remark:null,image:[]}],i={subject:e,topics:n};export{i as default,e as subject,n as topics};
