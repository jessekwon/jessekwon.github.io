const e="소공",n=[{index:1,topic:"소프트웨어",define:"- 프로그램 언어로 작성된 코드로, 프로그램의 개발, 운용, 보수에 필요한 관련 정보 일체",head:"비복비복변순무",remark:"비가시성, 복잡성, 비마모성, 복제성, 변경성, 순응성, 무형성",image:[]},{index:2,topic:"리만의 SW변화의 원리",define:"- SW에 대해 추가/수정 개발이 이루어지는 과정에서 SW는 일정한 패턴을 보이며 진화한다는 논리",head:`S,P,E-type 
변복자조 친성품피`,remark:"지속적 변경, 복잡도 증가, 자율규제, 조직의 안정성 유지, 친근성 유지, 지속적 성장, 품질 감소, 피드백 시스템",image:[]},{index:3,topic:"SW위기(SW Crisis)",define:"- SW 규모 및 복잡도 급증에 따라 이에대한 이해 및 관리의 부재로 SW의 품질은 저하되고 유지보수 비용이 급증하는 현상",head:`문제점: 비용초과, 일정지연, 성능저하(요구 불만족), 신뢰성 저하(오작동)
극복방안: 공표도품`,remark:`공학적 접근, 표준화, 
도구활용, 품질보증체계(SP인증등)
- * 최근 행정망 사고와 연관지어 설명 가능`,image:[]},{index:4,topic:"SW 공학(SWEngineering)",define:"- 질 좋은 SW를 경제적으로 생산하기 위해 공학, 과학 및 수학적 원리와 방법을 적용하는 것",head:`구성요소: 원기언도산 
- 원리, 기법, 언어, 도구, 산출물`,remark:`원리: 정관모추변일점
- 정형성과 엄격, 관심사의 분리, 모듈화, 추상화, 변화예측, 일반화, 점진화`,image:[]},{index:5,topic:"SWEBOK v3.0 (ISO/IEC 24773)",define:"- SW 엔지니어링을 위한 가이드라인과 개발지침서를 포함하고 있어 관련 전문가 소양의 기준으로 활용 가능한 지식",head:`기존기반: 요설개테유형관프모품 
- SW요구사항, SW설계, SW개발, SW테스트, SW유지보수, SW형상관리, SW관리, SW프로세스, SW모델, SW품질`,remark:`신규기반: 경전컴수공 
- 경제학, 전문가 실천, 컴퓨팅 기반, 수학적 기반, 공학적 기반`,image:[]},{index:6,topic:"SWEBOK v4.0 (ISO/IEC 24773)",define:`-최신기술 및 산업변화 반영(AI,DevOps,보안강화)
-소프트웨어 공학 프로세스 확장(애자일,CI/CD,자동화유지보수추가)
-소프트웨어 품질 및 경제학 강화(지속적품질관리,ROI분석도입)
-최신도구 및 방법론 반영(Git,DevOps,AI기반유지보수)`,head:`< v3.0 대비 추가내용 >
2.소프트웨어 아키텍처
(SoftwareArchitecture)
6.소프트웨어 엔지니어링 운영
(SoftwareEngineeringOperations)
13.소프트웨어 보안
(SoftwareSecurity)`,remark:null,image:[]},{index:7,topic:"SW SDLC",define:"- SW 개발 타당성 검토부터 개발, 유지보수, 폐기까지 전 과정을 하나의 생명주기로 보고, 과정을 단계별로 체계화한 모델",head:`타요설개테운폐 
- 타당성검토, 요구분석, 
설계, 개발, 테스트, 
운영 및 유지보수, 폐기`,remark:null,image:["static/images/cellImage_1044910612_0.jpg"]},{index:8,topic:"ㄴ폭포수 모델 (Waterfall)",define:"- 분석, 설계, 개발, 구현, 시험 및 유지보수 과정을 순차적으로 접근하는 방법",head:"계획-분석-설계-개발-시험-운영 및 유지보수",remark:null,image:[]},{index:9,topic:"ㄴ나선형(Spiral)모델",define:`- 시스템을 개발하면서 생기는 위험을 최소화하기 위해 나선을 돌면서 점진적으로 완벽한 시스템으로 개발하는 모델 
- 폭포수 모델 + 프로토타입 장점 수용`,head:"계위개고",remark:"계획, 위험분석(프로토타입), 개발/검증, 고객피드백",image:[]},{index:10,topic:"ㄴ프로토타입핑(Prototyping)모델",define:`- 사용자의 기본적인 요구사항에 따른 모형 시스템을 신속히 개발하여 제공한 후 사용자들의 의견을 바탕으로 시스템을 개선하고 보완해가는 프로세스 모형
- 개발목적-실험적 모형(개발타당성검증), 진화적 모형(지속적발전)
- 개발방법-수직 모형(특정 핵심 집중), 수평 모형(전체적 개발)`,head:`분프검개설
실진
수수`,remark:null,image:["static/images/cellImage_1044910612_1.jpg"]},{index:11,topic:"ㄴ반복적 모형(IterativeDevelopment)",define:"- 사용자의 요구사항 일부분 혹은 제품의 일부분을 반복적으로 개발하여 최종 시스템을 완성하는 모형",head:`증반진핵

증분형 모델: 일부분을 반복적으로 개발 
진화형 모델: 핵심부분 개발 후 지속적 발전(버전 1,2,3)`,remark:null,image:[]},{index:12,topic:"ㄴRAD모형(RapidApplicationDevelopment)",define:"- 자동화 툴을 사용하여, 2~3개월의 짧은 개발 주기 동안 SW를 개발하기 위한 순차적인 프로세스 모형",head:`JRP(분석/설계): 비즈니스 모형 작성/검토 반복 
JAD(개발): 프로토타입 개발/수정/보완 반복
Cut Over(구축/운영): 구현단위를 잘라 현업 이전`,remark:`Joint Requirement Planning
Joint Application Development`,image:[]},{index:13,topic:"ㄴ클린룸모형(CleanRoom)",define:`- 공식명세(FormalSpecification)와 수학적 기법을 활용하여 오류를 최소화하고 고품질 소프트웨어를 개발하는 SDLC모델
- 시스템의 핵심영역을 최초 증분(Increment)으로 개발하여 사용자에게 피드백한 후, 새로운 요구사항을 도출하거나 개발 계획을 수정하여 반복해서 증분 SW를 개발, 시스템에 추가하는 프로세스 모델`,head:`< 절차 단계  >
- 요구사항 수집 및 분석 -> 박스 구조 명세->정형 설계->
정확성 검증->코드 생성-> 코드 검증->통계적 사용 테스트->인증

< 상세화 검증방법 > 블상클 
블랙박스: 입력부터 출력까지의 데이터 흐름 확인 
상태박스: 블랙박스를 내부 기능 표현 
클리어박스: 상태박스에 제어 흐름 추가`,remark:null,image:[]},{index:14,topic:"ㄴ정형명세기법",define:"- 정형시스템 명세, 명세분석과 증명, 변화 개발과 프로그램 증명을 포함하는 소프트웨어의 수학적 표현에 의존하는 활동을 나타내기 위한 기법",head:`* 정형명세 종류
- 대수적 방법: 오퍼레이션과 이들의 관계로 시스템 표현(Larch, OBJ, Lotus)
- 모형기반방법: 시스템을 상태모형으로 보고 수학적 요소를 이용하여 표현(Z, VDM, CSP)
- 논리 기반 방법: 논리식 활용
- 자동화 증명 기반 방법 : 상태 공간 탐색
- B-Method : 상태 기반 모델 정의`,remark:`언규의검
- 언어, 규칙, 의미부여, 검증
정대모`,image:[]},{index:15,topic:"ㄴㄴZ(Zed)",define:"- 집합과 함수같이 잘 알려진 수학적 개체를 이용하여 시스템의 상태 모델을 정의하는 모델기반의 정형적 명세서 언어",head:`* 구성요소 
스키마, 스키마 이름, 스키마 시그니처, 스키마 Predicate(속성)`,remark:`* 4가지 Section 
주어진 집합, 상태정의, 초기상태, 연산`,image:[]},{index:16,topic:"ㄴV모형(V모델, V&V)",define:"- 폭포수 모델(WaterfallModel)의 확장 형태로, 각 개발단계마다 대응되는 테스트 단계를 두어 검증(Verification)과 확인(Validation)을 강조하는 개발",head:`요시아모코
단통시인설
- 특징: 개발과 테스트 병행, 명확한 단계 구분, 초기 오류 발견 가능`,remark:`요구분석-시스템설계-아키텍처설계-모델설계-코딩
단위테스트-통합테스트-시스템테스트-인수테스트-설치`,image:[]},{index:17,topic:"ㄴ일정중시 모형",define:"- 우선순위가 높은 순서에 따라 단계적으로 여러 차례 반복적인 사이클을 거치면서 정해진 일정에 맞추어 설계하는 모형",head:"- 달성여부가 불확실 할 때 위험방지용으로 적합",remark:null,image:[]},{index:18,topic:"SW 개발방법론",define:"- SW 개발의 생명주기에 따른 정형화되 방법 및 절차, 도구 등을 체계적으로 정리하여 표준화한 문서",head:`구정객CA 
프로세스-데이터-객체-컴포넌트-적시성`,remark:`* 주요구성: 절방산관기도
절차, 방법, 산출물, 관리, 기법, 도구`,image:[]},{index:19,topic:"ㄴ구조적방법론",define:"- 시스템을 기능에 따라 분할하여 개발하고 이를 통합하는 분할과 정복 개념을 이용한 프로세스 중심의 하향식 방법론",head:`* 구성요소
- 구조적 분석: 분할과 정복, 정형화 
- 구조적 설계: 데이터 흐름중심 
- 프로그래밍: 연속, 조건, 반복`,remark:`기능중심, 하향식 기능분해,
프로세스 중심`,image:[]},{index:20,topic:"ㄴ정보공학방법론",define:"- 기업 전체 또는 기업의 주요부분을 계획, 분석, 설계 및 구축에 정형화된 기법들을 상호 연관성 있게 통합, 적용하는 데이터 중심 방법론",head:`정보전락계획(ISP)
->업무영역분석(BAA)
->업무시스템설계(BSD)
->시스템구축(BSC)`,remark:`자료구조 중심, 전사관점, 
데이터 중심`,image:[]},{index:21,topic:"ㄴ객체지향방법론",define:`- 현실세계의 개체를 속성과 메소드가 결합된 형태의 객체로 표현하는 개념
- 객체와 클래스, 이들간의 관계를 식별하여 설계모델로 변환하는 방법론`,head:`클객속메: 클래스, 객체, 속성, 메소드
특징: 캡추다정상 
절차: 객동기/시객구/태패평 
- 분석: 객체모델링, 동적모델링, 기능모델링 
- 설계/구현: 시스템설계, 객체설계, 구현 
- 테스트/배포: 테스트, 패키지, 프로젝트 평가`,remark:null,image:["static/images/cellImage_1044910612_2.jpg"]},{index:22,topic:"ㄴㄴ모듈화",define:`- 효율적 프로그램 구성 지원, 
- SW개발에 있어 기능을 분할하고 추상화하여 소프트웨어의 성능을 향상시키고 유지보수를 효과적으로 하기 위한 SW 설계 및 구현 기법`,head:`* 특징: 분할과 지배, 정보은닉, 자료 추상화, 모듈 독립성 
* 유형 
- 설계: 모듈, 컴포넌트, 서비스 
- 구현: 매크로, Function, inline`,remark:null,image:["static/images/cellImage_1044910612_3.jpg"]},{index:23,topic:"ㄴㄴ캡슐화",define:"- 속성(데이터)과 메소드(연산)을 하나로 묶어서 객체로 구성",head:"접근지정자(public, private)",remark:null,image:[]},{index:24,topic:"ㄴㄴ추상화",define:"- 복잡함을 간단히, 분석의 초점을 명확히",head:"자료/기능/제어 추상화",remark:null,image:[]},{index:25,topic:"ㄴㄴ다형성",define:"- 동일인터페이스 서로 다른 응답하는 특성",head:"",remark:null,image:["static/images/cellImage_1044910612_4.jpg"]},{index:26,topic:"ㄴㄴ정보은닉",define:"- 메시지만으로 객체와 상호작용",head:"접근지정자(public, private)",remark:null,image:[]},{index:27,topic:"ㄴㄴ상속성",define:"- 슈퍼클래스의 성질을 서브클래스에 자동부여",head:"단일/다중/반복/선택",remark:null,image:[]},{index:28,topic:"ㄴㄴ객체지향설계 5대 원칙(SOLID)",define:"- 객체지향방법론이 지향하는 재사용과 유지보수 극대화를 달성하기 위한 클래스 단위에서의 설계 원칙",head:`SOLID, 응SI
- SRP(단일 책임 원칙): 하나의 클래스는 하나의 역할 수행 
- OCP(개방, 폐쇄 원칙): 확장에는 열려있고 수정에는 닫혀있어야하는 설계 원칙 
- LSP(리스코프 치환의 원칙): 자식 클래스는 부모 클래스를 대체 가능해야 한다는 설계원칙`,remark:`- ISP(I/F 분리의 원칙): 하나의 큰 인터페이스보다 작은 여러 개의 인터페이스로 분리 
- DIP(의존관계 역전의 원칙): 구체적인 구현이 아니라 추상화에 의존`,image:[]},{index:29,topic:"ㄴCBD 방법론",define:`- 기 개발된 SW 컴포넌트를 조립, 시스템을 개발하여 객체지향의 단점인 SW 재사용성을 극대화한 개발방법론 

- 마르미3: 국내환경 적합하게 개발 
- 마르미4(EMMA): 임베디드 시스템 개발 목적`,head:`분설추설구 
(도메인 분석->도메인 설계->컴포넌트 추출-> 컴포넌트 구현)
검형인 (검색<-형상관리<-컴포넌트 인증)
응조기분정 
(응용시스템<-컴포넌트 조립<-컴포넌트 기반설계<-영역분석<-요구사항 정의)`,remark:null,image:["static/images/cellImage_1044910612_5.jpg"]},{index:30,topic:"ㄴDDD(Domain Driven Development)",define:`- 해당 도메인과 일치하도록 소프트웨어를 모델링하는 데 중점을 둔 소프트웨어 설계 접근 방식
- 적절한 도메인 모델을 선택하고, 선택된 도메인 모델을 기반으로 분석, 설계, 구현에 걸친 SW 개발 전 과정을 주도하고 모델을 의사소통의 핵심수단으로 사용하기 위해 적용할 수 있는 기법과 패턴의 집합`,head:`* 구성요소 
Entity(객체)
Value(값)
Aggregate(집합체): 연관된 객체와 값의 묶음
Repository(저장소)
Service(서비스)`,remark:null,image:["static/images/cellImage_1044910612_6.jpg"]},{index:31,topic:"DDD(Domain Driven Design)",define:`- 도메인 주도 설계, 이벤트 스토밍 기법 활용
- 비즈니스 로직을 도메인별로 나누어 어플리케이션을 설계하는 방법 

- 유사한 업무의 집합인 비즈니스 도메인과 일치하도록 소프트웨어를 모델링하는데 중점을 둔 소프트웨어 설계 접근 방식

- 개발 참여자가 공통의 언어(유비쿼터스 언어) 사용을 통해 모델링과 개발의 불일치를 해결하고, 설계와 구현은 계속적인 수정과정을 반복함으로써 개발 품질을 향상시키는 소프트웨어 설계 방법`,head:`* 전략적 설계(Strategic Design)
- 도메인 중심의 큰 방향성 식별
> 유비쿼터스 언어 정의 
> 비즈니스 분석, 핵심개념 식별 
> Bounded Context 식별 
> Context Map 작성 
> 후보 마이크로서비스 도출 

* 전술적 설계 (Tactical Design)
- 도메인 모델을 만드는데 사용하는 디자인 패턴 집합을 제공하며 내부 아키텍처 설계

- 기술적 세부 방향성 설계 
- 식별된 마이크로서비스 내부 설계 
- 비즈니스의 고유한 활동 모델링 
- 도메인 모델 및 모듈 등 정의

- 전략적 설계로 도출한 마이크로서비스별로 서비스 내부구조를 상세히 정의하는 활동 
- 도메인 모델과 모듈, 프론트 엔드 설계, 서비스 I/F와 API`,remark:`* 구성요소  
[계층구조]
- User Interface, Application, Domain, Infrastructure
[구현패턴]
- 엔티티, 값 객체, 서비스, 어그리거트, 팩토리, 레파지토리, 도메인 이벤트
[모델관리]
- 모듈, 리팩토링 

1) 전략적 설계 
- 이벤트 스토밍 기법 
- 유비쿼터스 언어 
- 도메인 이벤트 
- 바운디드 컨텍스트 
- 마이크로 서비스 식별 
2) 전술적 설계 
- 디자인 패턴 
- 헥사고날 아키텍처 
- 에그리게잇(Aggregate) 
- CQRS 아키텍처`,image:[]},{index:32,topic:"ㄴ바운디드 컨텍스트",define:`- 도메인의 문제를 해결하기 위한 솔루션 영역 
- 도메인 모델이 존재하는 명시적인 경계`,head:`- 바운디드 컨텍스트는 전체 비즈니스 도메인을 여러개의 서브도메인으로 나눈후, 서브 도메인 내 동일한 맥락을 경계로 구분하여 바운디드 컨텍스트를 도출함 

- 1개의 바운디드 컨텍스트는 여러개의 마이크로 서비스로 분리될 수 있음`,remark:null,image:[]},{index:33,topic:"ㄴ유비쿼터스 언어",define:`- 도메인 전문가, 사용자, 분석가, 개발자 등 모델링에 참여하는 사람들이 사용하는 공통된 언어 

* 필요성 
- 개발시 커뮤니케이션 오류 발생 가능성 최소화 
- 바운디드 컨텍스트 모델링 시 활용`,head:`* 유비쿼터스 언어의 관리 
- 용어사전작성 

* 활용 
- 설계과정의 각종 모델링, 문서작성, 의사소통, 각종 코드 설계 등에 활용`,remark:null,image:[]},{index:34,topic:"ㄴ이벤트 스토밍",define:`이벤트 도출(브레인스토밍) 
> 커맨드 도출 
> 에그리게잇 식별 
> 바운디드 컨텍스트 식별 
> 마이크로 서비스 도출`,head:"",remark:null,image:[]},{index:35,topic:"ㄴCQRS 패턴(Command Query Responsibility Segregation)",define:`- 명령과 조회의 책임 분리
- 쓰기와 읽기의 분리를 통해 쓰기 시스템의 부하를 줄이고 대기시간을 줄이는 등의 장점이 있음`,head:`- 하나의 데이터 저장소에서 쓰기 모델과 읽기 모델을 분리 

- 물리적으로 쓰기 저장소와 읽기 저장소를 분리`,remark:"쿼리 오프로딩(MasterDB와 SlaveDB 분리)",image:[]},{index:36,topic:"ㄴProduct Line",define:"- 제품/서비스 군별로 SW핵심자산을 개발하고 이를 관리/조직적인 재사용을 통해 경제적인 SW제품을 생산하여 SW재사용성과 생산성을 극대화 하기 위한 개발방법론",head:`* 구성요소 
- Domain 공학: 도메인의 공통요구사항을 추출하여 핵심 프로세스 컴포넌트를 개발 
- Application 공학: Core Asset을 Plug&Play 형태로 조립하는 과정 
- Management: 저장, 프로세스 관리`,remark:`* 개발방법 
- ProActive: Core Asset 먼저개발
- ReActive: 여러 프로덕트로부터 Core Asset 도출
- Extract 방법: 프로덕트에서 공통점과 차이점을 분석/추출
- Incremental 방법: 반복 증분`,image:[]},{index:37,topic:"ㄴAgile",define:"- 절차보다는 사람이 중심이 되어 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 방법론",head:`* 핵심가치: 개변동고 
개인과 상호작용, 변화에 대응, 동작하는 SW, 고객과의 협력`,remark:`* 특징 
가변적 요구대응, 고객만족, 개발자 동기부여, PM의 역할변화, Sweet Spot`,image:[]},{index:38,topic:"ㄴAgile",define:"",head:"",remark:null,image:["static/images/cellImage_1044910612_7.jpg"]},{index:39,topic:"ㄴ애자일 추정",define:`애자일 프로젝트에서 프로젝트, 릴리즈 또는 스프린트의 규모를 산정하기 위해 Product Backlog의 StoryPoint를 기반으로 노력을 추정하는 절차/기법

- 특징 : 상대적인 규모 추정, 지속적인 반복을 통한 추정, 사용자관점에서 사고`,head:`- 단계 : Product Backlog작성->StoryPoint도출->추정일관성 점검->규모/일정산정
- 기법 : 플래닝포커,도트투표, 버킷시스템,선호도매핑,유사추정기법,전문가추정기법`,remark:"플래닝포커 : 착수준비->추정대상토론->추정수행",image:[]},{index:40,topic:"ㄴㄴXP(eXtreme programming )",define:"- 짧은 주기의 반복을 통해 요구변화에 신속하게 대응하여 위험을 줄이고 고객 관점의 고품질 SW를 빠르게 전달하는 Agile 방법론",head:`* 핵심가치: 용단커피존 
용기, 단순성, 커뮤니케이션, 피드백, 존중 
* 12가지 실천사항: 개관구환
페공지 개짤메 간테리 4고코
개발원리: 페어프로그래밍, 공동책임, CI
관리원리: 개발계획,small Release, 구조
구현원리: 간략디자인,Test Driven, 리팩토링
환경요소: 40hour week, 고객상주, 코드표준화
* 구성 
유저스토리(User Story) 작성->구조적 스파이크(Architectural Spike)->릴리즈 계획(Release Plan)->반복(Iteration)->인수테스트(Acceptance Test)->작업 배포(Small Release)`,remark:null,image:["static/images/cellImage_1044910612_8.jpg"]},{index:41,topic:"ㄴㄴTDD(Test Driven Development)",define:"- 프로그램에 대한 Test Case를 먼저 개발하고 이 테스트 케이스를 통과하는 실제코드를 나중에 개발하는 Agile 개발방법",head:`니테코리 
Need->Test->Code->리팩토링 (반복)
* TDD 사용패턴: 빨초테유디 
빨강막대패턴, 초록막대패턴, 테스트패턴, xUnit패턴, 디자인 패턴`,remark:null,image:["static/images/cellImage_1044910612_9.jpg"]},{index:42,topic:"ㄴㄴATDD(Acceptance Test Driven Development)",define:"- 테스트로부터 시작해서 구현을 마무리 짓는 TDD 범위를 소스코드 수준에서 인수테스트 수준까지 확장하여 고품질의 SW를 생산하는 개발방법",head:`사용자 스토리작성-> 인수시스템 테스트 케이스-> 시스템 구현-> 테스트 수행
4D 
Discuss(상의하다)->Distill(추출)->Develop(개발)->Demo 
Red Code->Green Code->Clean Code 순`,remark:null,image:["static/images/cellImage_1044910612_10.jpg"]},{index:43,topic:"ㄴBDD(Behavior Driven Development)",define:`- 실행수준의 행위에 기반한 설계 및 테스트케이스를 도출하고 테스트 케이스를 기반으로 TDD 개발하는 방법 
- 테스트를 작성하고 어떻게 테스트할 것인가 하는 관점이 아닌, 행위(behavior)에 초점을 두고 개발을 수행하는 개발 프로세스`,head:`* 구성 요소
- 기능: 개발할 기능 정의 
- 시나리오: 테스트 하고자 하는 시나리오 
- Given: 사용자에 의해 주어진 조건 
- When: 테스트하고 싶은 어떤 행위 
- Then: 기대하는 결과 작성`,remark:`- 유비쿼터스언어: 프로젝트 구성원 모두 사용하는 보편적언어
- OutSide-In: 비지니스/조직 관점에서 큰 범주부터 분석 시작`,image:[]},{index:44,topic:"ㄴ페어프로그래밍",define:"- 하나의 컴퓨터에서 두사람의 프로그래머가 개발을 진행하는 방식",head:`* 역할 
- Driver: 실제 코딩을 수행하는 프로그래머, 지시를 수행하는 역할
- Partner: Driven에게 방향과 전략을 지시하는 네비게이터 역할`,remark:null,image:[]},{index:45,topic:"ㄴ핑퐁프로그래밍",define:`- Pair 프로그래밍 + TDD 
- 한명은 실패하는 테스트 케이스를 작성하고, 다른 한명은 테스트를 성공시키기 위한 구현코드를 번갈아가며 개발하는 기법`,head:"",remark:null,image:[]},{index:46,topic:"ㄴㄴSCRUM",define:`- Product Backlog를 바탕으로 하여 기술적으로 분할되고 재해석된 스프린트를 스크럼 팀을 통해 구현해 나가는 방법론 
- 번다운차트 사용`,head:`* 핵심가치: 확전정존용
확약, 전념, 정직, 존중, 용기

prductBacklog->sprint회의->sprintBacklog->sprint(1-4주반복)->dailyScrum`,remark:`* 구성요소 
- 산출물: Product Backlog, Sprint Backlog, Sprint 
- 구성원: Product Owner, Scrum Master, Team 
- 주요 회의: Sprint Planning, Daily Scrum, Review Sprint, 회고`,image:[]},{index:47,topic:"ㄴㄴ칸반(KANBAN)",define:`- 매우 적은 규칙으로 Agile 개발 프로세스 전반에 걸친 적시개발(JITD)을 지원하는 방법론 
- 누적흐름도 사용`,head:"칸누적적",remark:`워크플로우 가시화(보드)
WIP(동시수행항목 제한)
플로우측정 및 최적화(소요시간 예측 및 최소화)`,image:[]},{index:48,topic:"ㄴㄴ스크럼반(Scumban)",define:`- 스크럼+칸반 
- (칸반 관점) 이미 스크럼을 실천하고 있는 팀에서 칸반 변화 관리 원칙에 따라 칸반을 점진적으로 도입하는 과정 
- (스크럼 관점) 스크럼 프레임워크의 규칙을 존중하고 핵심 프로세스를 그대로 유지하면서 거기에 일부 칸반의 실천법들을 적용하는 과정`,head:"",remark:null,image:["static/images/cellImage_1044910612_11.jpg"]},{index:49,topic:"ㄴㄴRUP(=UP)(Rational Unified Process)",define:`- UML과 함께 많이 사용하고 있는 객체지향 분석 설계 및 CBD를 위한 개발 방법론
- 완전한 SW개발 모델 제시, 비주얼 모델링 도구 지원
- 산출물 많음`,head:`6P3C+반복, 도정구인 
도입, 정련, 구현, 인도 
6P: 비즈니스 모델링, 요구관리, 분석/설계, 구현, 테스트, 배포 
3C: 형상/변경관리, 프로젝트 관리, 환경`,remark:null,image:["static/images/cellImage_1044910612_12.jpg"]},{index:50,topic:"ㄴㄴCrystal",define:"- 프로젝트 상황에 따라 알맞은 방법론을 적용할 수 있도록 다양한 방법론 제시, 테일러링하는 원칙 제공",head:"",remark:null,image:["static/images/cellImage_1044910612_13.jpg"]},{index:51,topic:"ㄴㄴFDD(Feature Driven Development)",define:"- 기능 모델, 설계와 구현, 수행의 3단계 사이클, 짧은 반복(2주)과 5단계 프로세스",head:"",remark:null,image:[]},{index:52,topic:"ㄴㄴMDA(Model Driven Architecture)",define:`- 메타모델을 기반으로 구현환경에 독립적 모델을 자동으로 각 구현환경에 적합한 구현 종속적 모델로 변환하게 하는 SW개발 아키텍처

* MDD 개발절차 
- CIM 모델: 비즈니스 업무 기술 
- PIM 모델: 비즈니스 기능과 행위 정의 
- PSM 모델: 기술 플랫폼의 특성을 반영하는 모델`,head:`* 구성요소 (MUCX)
- MOF: (메타모델)모델 정보에 대한 표준적인 저장소 제공 
- UML: (표기법)객체 및 컴포넌트 시스템을 표현하기 위한 표준언어
- CWM: (저장소)데이터베이스 모델과 스키마 변환 모델 
- XMI: (매핑)MOF 기반 모델을 XML로 매핑하기 위한 표준 사양`,remark:null,image:["static/images/cellImage_1044910612_14.jpg"]},{index:53,topic:"ㄴㄴASD(Automated Software Development)",define:`- MDD 모델 변경의 경직성 완화 
- 폭포수 사이클을 일련의 추측, 협동, 학습 단계로 대체`,head:"",remark:null,image:[]},{index:54,topic:"ㄴㄴLEAN",define:"- 도요타의 린시스템의 품질기법을 SW 개발에 적용한 개발 방법론",head:`- 7대 낭비요소: 재작업, 재학습, 가외작업, 작업전환, 결함, 지연, 이관 
- 7대 가치: 낭배늦팀빠통전`,remark:"낭비의 제거, 배움 증폭, 늦은 결정, 팀에 권한위임, 빠른 납품, 통합성 구축, 전체를 볼 것",image:[]},{index:55,topic:"ㄴㄴCI(Continuous Integration)",define:"- 여러명으로 구성된 팀이 개발한 SW를 지속적으로 통합하고 품질통제 하는 Agile Practice",head:"",remark:null,image:["static/images/cellImage_1044910612_15.jpg"]},{index:56,topic:"ㄴㄴCD(Continuous Delivery)",define:"- 변경된 요구사항에 대한 개발/통합/배포/테스트/릴리즈를 자동화하여 SW 개발과 운영을 통합하는 DevOps를 지원하는 연속적인 배포 출시 전략",head:"",remark:null,image:["static/images/cellImage_1044910612_16.jpg"]},{index:57,topic:"ㄴㄴDevOps",define:`- 배포의 자동화, CI/CD 자동화
- 개발/운영/품질관리 부서 사이의 통합, 커뮤니케이션, 협업을 위한 일련의 방식, 문화 

- 개발과 운영의 간극 해소
- SW개발과 운영의 합성어로, SW개발자와 정보기술 전문가 간의 소통, 협업 및 통합을 강조하는 개발 환경이나 문화`,head:`이개소빌 스운 
- 이슈관리, 개발관리, 소스관리, 빌드, STG 서버, 운영서버
* 핵심가치: CAMLS 
문화(Culture), 자동화(Automation), 측정(Measurement), 낭비제거(Lean), 공유(Sharing)`,remark:null,image:["static/images/cellImage_1044910612_17.jpg"]},{index:58,topic:"ㄴㄴDORA(DevOps Research and Assessment)",define:"- Google의 DORA�연구팀이 정의한 DevOps� 성과 측정 지표",head:`* DORA 메트릭
- 배포 빈도 향상
- 변경 리드 타임 단축
- 변경 실패율 감소
- 서비스 복구시간 단축`,remark:null,image:[]},{index:59,topic:"무중단 배포",define:`- 서비스 중단없는 배포
- 애플리케이션이 업데이트 되고 이를 운영환경에 배포하는 시간동안 서비스 중지 없이 배포하는 방식`,head:`* 배포방식 - 로블카
1) Rolling Update(롤링 배포) : 점진적으로 서버 교체하며 배포
2) 블루-그린 배포 : 두 개의 환경(Blue,Green)을 운영하며 트래픽 전환
3) Canary Deployment(카나리 배포) : 일부 사용자(소규모 트래픽)에게 먼저 배포 후 점진적 확장
4) Feature Deployment(기능 플래그 배포):기능을 배포해두고, 특정 시점에 활성화
5) Big Bang Deployment : 무중단 배포 불가. 한 번에 전체 시스템을 새로운 버전으로 변경`,remark:null,image:["static/images/cellImage_1044910612_18.jpg"]},{index:60,topic:"ㄴㄴSRE(Site Reliability Engineering)",define:`- 대규모 서비스나 인프라의 신뢰성, 안정성을 달성하기 위해 고도의 SW기술을 적용하여 운영관리하는 공학 기법 

- Google이 DevOps 개념을 기반으로 개발한 모델로, 서비스의 안정성(Reliability), 확장성(Scalability),운영
효율성(Efficiency)을 극대화하는 것이 목표

- 운영을 자동화하고 신뢰성을 극대화하는 DevOps의 핵심 역할`,head:`* 운영원칙 (MCCEC) - 모케변응문
1) Metric & Monitoring
- 모니터링 지표 정의 및 목표 시각화 관리
- (지표/기법) SLI, SLO
2) Capacity Planning
- 리소스 요청에 대한 유연한 대응
- (지표/기법) 수요 기반 예측
3) Change Management
- 점진적 배포와 변경, 빠른 롤백
- (지표/기법) 카나리 배포, 롤링업데이트
4) Emergency Response
- 플레이북 기반의 장애대응 자동화
- (지표/기법) MTTR, 플레이북
5) Culture
- 비난하지 않는 문화
- (지표/기법) Error budget`,remark:`* 주요 기준 지표 
- SLI(Service Level Indicator): 서비스 수준 지표. 측정가능한 관리 지표 
- SLO(Service Level objective): 서비스 수준 목표. 가용성에 대한 목표 기준
- SLA(ServiceLevelAgreement): 고객과 합의한 서비스 성능 기준

* 적용원칙
- 운영 자동화 : 반복작업(Toil) 제거
- 모니터링 및 로깅
- 에러 버짓(Error budget) : 허용가능한 장애율 설정
- 확장가능, 탄력적 인프라
- Blameless Postmortem : 장애분석 시 비난없는 논의
- Chaos Engineering`,image:[]},{index:61,topic:"ㄴㄴChaos� Engineering(카오스 엔지니어링)",define:`- 실제 운영 환경에서 인위적으로 장애를 발생시켜 시스템의 복원력(Resilience)과 안정성을 검증하는 방법론
- 프로덕션 서비스의 각종 장애 조건을 견딜 수 있는 시스템의 신뢰성을 확보하기 위해 분산 시스템을 실험 하고 배우는 학문, 공학`,head:`* 수행절차
- 실험 가설 설정->장애 유발->모니터링->자동화된 실험 프레임워크->복원력 검증->사후 분석

정가실검개
정상상태>가설구축>실험>검증>개선

* 도구 : 그램린, 카오스몽키, 카오스툴킷, 
LitmusChaos, Prometheus&Grafana,ELKStack
(Elasticsearch,Logstash,Kibana)`,remark:`* 실패주입방법 
- 리소스 레벨 
- 네트워크 및 의존성 레벨 
- 어플리케이션, 프로세스, 서비스 레벨 
- 인프라 레벨`,image:[]},{index:62,topic:"프레임워크",define:"- 구조적으로 고정된 부분은 개발자들이 구현하지 않고 재활용할 수 있도록 해당 프레임워크가 제공하고 반제품 비즈니스의 추가에 의해서 생기는 로직은 유연하게 추가/변경할 수 있도록 그 골격을 제공하는 반제품",head:"사용자>Presentation Layer>Business Layer>Persistent Layer>DB",remark:null,image:["static/images/cellImage_1044910612_19.jpg"]},{index:63,topic:"Spring 프레임워크",define:"- EJB 기반의 복잡함과 무거움을 극복하고 개발생산성 향상과 고품질의 시스템 개발을 위한 자바 플랫폼 상의 경량화된 오픈소스 웹 어플리케이션 프레임워크(POJO, Pure JAVA)",head:`* 주요 모듈 
Spring Core:Bean 컨테이너 제공, 핵심 유틸리티 기능 지원
Spring Context:애플리케이션 컨텍스트 제공(DI,빈 설정 관리)
Spring DAO: 트랜잭션 관리
Spring ORM: 객체관계형 모델 지원.Hibernate,iBatis(MyBatis)
Spring WEB: Spring Web MVC
Spring AOP: 횡단관심사의 분리`,remark:null,image:["static/images/cellImage_1044910612_20.jpg"]},{index:64,topic:"Spring 프레임워크",define:"",head:`* 주요 모듈 
1) Core Container(핵심 기능)
- Beans: Bean 객체 생성 및 관리
- Core: DI 및 IoC 기능 제공
- Context:애플리케이션 컨텍스트 제공(DI,빈 설정 관리)
- SpEL (Spring Expression Language):런타임 시점의 객체 조작 언어
2) Extend Function(확장 기능)
- AOP: AOP(관심사 지향 프로그래밍)기능 제공
3) Data Access/Integration(데이터접근/통합)
- ORM: JPA,Hibernate,iBatis(MyBatis) 등 ORM 프레임워크 연동
4) WEB 관련 모듈
- Spring Web MVC
- Servlet
- WebSocket`,remark:null,image:["static/images/cellImage_1044910612_21.jpg"]},{index:65,topic:"Spring Boot",define:`- Spring Framework 기반의 서브 프레임워크로,설정을 최소화하여 빠르게 애플리케이션을 개발할 수 있도록
지원하는 개발 플랫폼`,head:`- 특징: 설정 최소화,자동 설정, 내장 웹 서버,독립 실행형,Spring Cloud연계(MSA환경),강력한 모니터링
* 구성요소
- Spring Boot Starter : 설정 최소화
- Spring Boot AutoConfiguration : 자동 설정
- Embedded Server : 내장 웹 서버`,remark:null,image:["static/images/cellImage_1044910612_22.jpg"]},{index:66,topic:"Spring Cloud",define:`- 마이크로서비스 아키텍처(MSA)환경에서 서비스 간 통신,구성 관리,부하 분산,장애 복구 등을 쉽게 구현할 수 있도록 지원하는 Spring기반 프레임워크
- MSA환경에서 서비스 관리와 운영을 최적화하는 아키텍처`,head:`* 주요 기능
- MSA 지원
- 서비스 등록 및 디스커버리 : Eureka
- API Gateway
- 중앙 설정 관리
- 로드 밸런싱
- 장애 복구 : Circuit Breaker(회로 차단)
- 서비스 배포, 컨테이너 오케스트레이션 : 쿠버네티스
- 모니터링 지원`,remark:null,image:[]},{index:67,topic:"ㄴMVC(Model, View, Controller)",define:"",head:`* 유형 
- MVC1: 클라이언트가 jsp 페이지를 요청하면 jsp가 직접 DB등과 연동/처리하여 결과를 Client에 전송
- MVC2: 클라이언트가 요청을 컨트롤러에 전송, 모델을 거쳐 jsp 페이지로 클라이언트에 결과전송

- MVC→MVP→MVVM→MVI순으로 발전,UI와 비즈니스 로직이 더욱 명확하게 분리`,remark:null,image:["static/images/cellImage_1044910612_23.jpg","static/images/cellImage_1044910612_24.jpg"]},{index:68,topic:"ㄴMVP�(Model-View-Presenter)",define:"- Controller대신 Presenter 도입하여 View와 Model 완전 분리",head:"",remark:null,image:["static/images/cellImage_1044910612_25.jpg"]},{index:69,topic:"ㄴMVVM�(Model-View-ViewModel)",define:`- Presenter를 ViewModel로 대체. 데이터 바인딩
- MVVM과 MVI는 UI의 상태(State)를 관리하는 기능이 강화되어 테스트, 유지보수 용이`,head:"",remark:null,image:["static/images/cellImage_1044910612_26.jpg"]},{index:70,topic:"ㄴMVI(Model-View-Intent)",define:`- 단방향 데이터 흐름(Unidirectional Data Flow, UDF) 도입
- View는 Model의 상태를 구독하여 자동 업데이트함`,head:"",remark:null,image:["static/images/cellImage_1044910612_27.jpg"]},{index:71,topic:"ㄴAOP(Aspect Oriented Programming)",define:`- 핵심관심사에 대한 관점과 횡단관심사에 대한 관점들로 프로그램을 분해해 Weaving을 통해 프로그램을 구현하는 기법 
- 핵심관심: 비즈니스 로직(핵심)�기반,�시스템의 핵심 가치와 목적이 그대로 드러난 관심 영역  
- 횡단관심: 공통 기능(로깅,�트랜잭션,�보안 등)을 모듈화한 클래스`,head:`* 구성요소
- Joint Point: (실행 가능한 지점)AOP가 적용될 수 있는 실행 지점 
- Point-cut: (적용 대상 지정)Advice가 실행될 특정 Join�Point를 정의
- Advice: (부가 기능 로직)Aspect�내부에서 실행되는 공통 기능 코드 
- Aspect: point-cut과 advice를 합쳐 놓은 코드
- Weaving: (적용 과정)AOP�기능이 실제 코드에 적용되는 시점`,remark:null,image:["static/images/cellImage_1044910612_28.jpg"]},{index:72,topic:"ㄴIoC, 제어의 역전 (Inversion of Control)",define:"- 객체의 생성 및 제어 권한을 개발자가 아닌 프레임워크 또는 컨테이너(Spring등)가 담당하도록 하는 디자인 원칙",head:`* IoC 구현방식
- DL(Dependency Lookup) : 객체가 직접 의존성 찾아서 가져옴(결합도 높음)
- DI(Dependency Injection) : 객체 의존성을 외부에서 주입(결합도 낮음)
- Service Locator : 필요할 때 객체 검색하여 사용(DL과 유사하지만 더 포괄적)
- Factory Pattern : 객체 생성을 팩토리 클래스에서 관리
- Event-based IoC : 이벤트 리스너를 활용하여 객체를 동적연결`,remark:null,image:[]},{index:73,topic:"ㄴDI, 의존성주입 (Dependency Injection)",define:`- 각 클래스 사이의 의존관계를 Bean 설정 정보를 바탕으로 컨테이너가 자동적으로 연결해 주는 기술 

- 객체의 의존성을 외부에서 주입하는 방식(결합도 낮음)`,head:`* 의존성 주입(DI) 방식 
1) 생성자 주입(Constructor Injection):생성자 이용하여 의존성 주입
2) 필드 주입(Field Injection):멤버 변수(필드)에 직접 주입
3) Setter 주입(Setter Injection):setter 메소드를 통해 의존성 주입 
4) 메소드 주입(Method Injection):특정 메소드 실행 시점에만 의존성 주입

* 구현 방법
- XML 기반 : 설정과 코드 분리
- Annotation 기반 : 간결한 설정
- XML + Annotation 혼합 : XML 가독성과 Annotation 편리함 결합`,remark:null,image:[]},{index:74,topic:"ㄴDL, 의존성 검색 (Dependency Lookup)",define:`- 객체가 직접 컨테이너에서 필요한 의존성을 찾아서 가져오는 방식(결합도 높음)
- Bean에 접근하기 위해 컨테이너가 제공하는 API를 이용하여 Bean을 Lookup 하는 방식`,head:"",remark:null,image:[]},{index:75,topic:"ㄴORM(Object-Relational Mapping, 객체 관계 매핑)",define:"- 객체 지향 프로그래밍 언어에서 사용하는 객체와 관계형 데이터베이스의 테이블 간의 데이터를 자동으로 매핑(mapping)해주는 기술",head:`- SQL을 직접 작성하지 않고,객체를 통해 데이터베이스 작업(삽입,조회,수정,삭제) 수행
* 특징
: 객체-테이블 매핑, SQL추상화, 데이터베이스 독립성, 개발 생산성 향상
* 대표적 ORM Java FW
:Hibernate,JPA(Java Persistence API)등

* ORM 기능
- 객체와 테이블 간 매핑
- CRUD 자동화
- 관계 매핑
- 데이터베이스 독립성 유지
- 지연로딩, 즉시 로딩
- 캐싱 지원
- 트랜잭션 관리
- 쿼리 자동 생성 및 최적화, 스키마 자동 생성`,remark:null,image:["static/images/cellImage_1044910612_29.jpg"]},{index:76,topic:"ㄴㄴJPA(Java Persistence API)",define:`- Java 표준 ORM 인터페이스로,객체(엔터티)와 관계형 데이터베이스 간 매핑을 지원하는 Java EE(Enterprise Edition)의 표준 명세
- ORM 프레임워크의 기능을 Java 표준으로 통합한 기술`,head:`* JPA 특징
- JPQL(Java Persistence Query Language),
POJO(Plain Old Java Object) 기반
- 영속성 컨텍스트:엔티티 객체를 메모리에서 관리하여 캐싱,변경 감지,트랜잭션 내 데이터 동기화 기능 제공
- 자동 매핑 :객체와 테이블 간의 매핑 자동화

* JPA 구현체
:Hibernate, EclipseLink,TopLink

* JPA 기능
- 엔터티 매핑
- JPQL : 객체를 대상으로 질의하는 JPA 전용 쿼리언어`,remark:null,image:["static/images/cellImage_1044910612_30.jpg"]},{index:77,topic:"SOA(Service Oriented Architecture)",define:`- 다양한 비즈니스 환경에서 이기종 통합 및 loosely coupled 하게 서비스 단위를 재사용, 재조립을 가능하게 하는 서비스 지향 아키텍처 

- 프로세스 중심, 플랫폼 독립적, loosely coupled`,head:`* 아키텍처 
Service Broker, Service Provider, Service Consumer 
* 기술요소 
XML, ESB, SOAP, WSDL, UDDI
* MSA 기본사상`,remark:null,image:["static/images/cellImage_1044910612_31.jpg"]},{index:78,topic:"SOAP�(Simple�Object�Access�Protocol)",define:"- XML기반의 메시징 형식을 사용하여 플랫폼 및 프로그래밍 언어에 독립적인 방식으로 데이터 교환을 지원하는 웹서비스(WebService)간 메시지를 교환하기 위한 프로토콜",head:`< 특징 > 
- XML기반 메시징 프로토콜,HTTP등 전송 프로토콜 지원,보안성 강함,트랜잭션 지원,REST대비 성능 낮음
< 동작 과정 >
- WSDL을 통해 명확한 인터페이스를 공유하여 통신하는 구조
- WSDL(WebServicesDescriptionLanguage):서비스의 인터페이스,요청 및 응답 구조를 기술하는 XML문서
< 구성요소 >
- Envelope : SOAP 메세지의 루트요소
- Header : 인증,보안,트랜잭션 등의 메타데이터 포함
- Body : 실제 요청 또는 응답 데이터가 포함됨`,remark:null,image:["static/images/cellImage_1044910612_32.jpg"]},{index:79,topic:"REST(Representational� State� Transfer)�",define:"- 웹의 기존 기술과 HTTP프로토콜을 활용하여 분산 시스템을 설계하는 아키텍처 스타일",head:`< 구성요소 >
- 리소스 : URI(UniformResourceIdentifier)를 통해 고유하게
식별됨
- 행동(Verb) : GET,POST,PUT,DELETE(CRUD와 매핑)
- 표현(Representation) : SON,XML,HTML등의 포맷 사용
- 상태코드
< REST 6원칙 >
1) 클라이언트-서버 구조
2) 무상태성(Stateless)
3) 캐시 가능(Cacheable)
4) 일관된 인터페이스
5) 계층화된 시스템
6) 코드 온 디맨드`,remark:null,image:["static/images/cellImage_1044910612_33.jpg"]},{index:80,topic:"JSON(Java Script ObjectNotation)과 YAML(YAML Ain’t Markup Language)",define:`- JSON : 데이터 교환을 위해 설계된,key-value쌍으로 이루어진 경량 데이터 직렬화 형식
- YAML : JSON의 완전한 상위 호환으로서 들여쓰기와 공백을 이용해 사람이 쉽게 읽을 수 있는 데이터 양식`,head:"",remark:null,image:["static/images/cellImage_1044910612_34.jpg"]},{index:81,topic:"Proxy Server와 Reverse Proxy Server",define:`- 프락시 서버 : 클라이언트가 직접 서버에 접근하지 않고,대신 요청을 처리하는 중간 서버
- 리버스 프락시 서버 : 서버 앞단에서 클라이언트의 요청을 받아 적절한 백엔드 서버로 전달하는 서버`,head:"",remark:null,image:["static/images/cellImage_1044910612_35.jpg","static/images/cellImage_1044910612_36.jpg"]},{index:82,topic:"전자정부표준프레임워크",define:`- 전자정부의 시스템 개발의 일관성을 제공하고,�대중소 기업이 동일 개발기반상에서 공정경쟁을 지원하기 위한,�SW개발에
필요한 기반 환경 및 공통 모듈을 제공하는 FW�`,head:"",remark:null,image:[]},{index:83,topic:"SW 아키텍처",define:"- 프로그램/시스템의 컴포넌트, 컴포넌트들 간의 상호관계의 구조이며 이들을 설계하고 전개하기 위한 지침과 원리",head:"",remark:null,image:["static/images/cellImage_1044910612_37.jpg"]},{index:84,topic:"아키텍처 프레임워크",define:"- 비즈니스, 시스템 요구사항에 대한 view type을 설정하고, 기능/비기능 구현에 용이한 기준을 제공하는 뼈대 구조",head:`비데애기
- 비즈니스 아키텍처
- 데이터 아키텍처
- 애플리케이션 아키텍처
- 기술 아키텍처`,remark:null,image:[]},{index:85,topic:"아키텍처 드라이버",define:`- 아키텍처 결정에 영향을 주는 요구사항 

- 기능 요구사항은 간접적으로 품질 요구사항을 발생, 아키텍처에 영향`,head:`기제품 
- 기능 요구사항:시스템이 수행해야 할 핵심 기능
- 제약사항: 비기능 요구사항
- 품질속성: SW품질을 결정하는 주요 요소(품질 요구사항:성능,가용성,보안성,유지보수성)`,remark:null,image:["static/images/cellImage_1044910612_38.jpg"]},{index:86,topic:"ㄴ품질속성",define:"- 제품의 품질기준을 만족시키기 위해 SW가 가져야 하는 양이나 질로 관찰하여 수치로 측정할 수 있는 시스템의 특성",head:`시비아 
- 시스템 품질속성: 가변성보테사(가용성, 변경용이성, 성능, 보안, 테스트 용이성, 사용성)
- 비즈니스 품질속성: 시장 적시성, 비용과 이익, 목표시장, 신규 발매 일정 등
- 아키텍처 품질속성: 개념적 무결성, 정확성과 완전성, 개발용이성`,remark:null,image:["static/images/cellImage_1044910612_39.jpg"]},{index:87,topic:"ㄴㄴ품질속성 시나리오",define:`- 요구사항을 기반으로 작성 된 품질속성을 구체화하고, 시스템이 받아들여야 할 자극과 제공해야할 반응을 파악하여 작성되는 달성방안
- 품질속성 시나리오를 통해 유틸리티 트리를 작성하고 이를 기반으로 도출된 품질 요구사항 달성을 위해 설계전략(Tactics)을 활용함`,head:`원자환대응측
- 자극의 원천: 자극을 생성하는 주체 
- 자극: 시스템에 도착했을 때 고려될 필요가 있는 조건 
- 환경: 자극이 발생하는 조건 
- 대상: 자극을 받는 개체 
- 응답: 자극에 대한 반응 활동 
- 응답측정: 응답에 대한 측정 가능한 값`,remark:null,image:["static/images/cellImage_1044910612_40.jpg"]},{index:88,topic:"ㄴㄴ품질속성 유틸리티 트리",define:"- 시스템이 제공해야 하는 모든 품질속성에 대한 성공요인을 한눈에 파악하는 트리 형식의 도구",head:`유품속시 
- 유틸리티 
- 품질속성 
- 세분화한 품질속성 
- 품질속성 시나리오`,remark:null,image:[]},{index:89,topic:"ㄴㄴ설계전략(Tactics)",define:`- 시스템에 품질 목표 달성을 위한 기본 설계 의사결정 
- 품질속성 응답에 영향을 주는 설계 의사결정`,head:`가변성보테사 
가용성 설계전술, 변경용이성 설계전술, 성능 설계전술, 보안 설계전술, 테스트 용이성 설계전술, 사용성 설계전술`,remark:null,image:[]},{index:90,topic:"아키텍처 스타일/패턴/프레임워크",define:"- 아키텍처 설계시 반복해서 발생하는 문제를 해결하고 만족시켜야 할 품질 속성을 달성할 수 있는 방법을 정리한 SW 아키텍처 Best Practice",head:`RMCLDB
Repository 
MVC
클라이언트/서버구조 
Data Flow
Layered
BlackBoard`,remark:null,image:[]},{index:91,topic:"아키텍처 설계절차 ADD(Attribute Driven Design)",define:"- 만족되야 할 품질속성을 바탕으로 분할과정을 진행해 나가면서 SW 아키텍처를 만드는 방법",head:`시정재통 
1) 시스템 분할: 분할 모듈 선택 
2) 선택된 모듈을 정제 
- 아키텍처 드라이버 선택(품질속성)
- 아키텍처 패턴 선택 
- 모듈 생성 및 기능할당 후 내용 표현,,,
3) 재귀/통합: 추가적인 분할 필요시 재귀적 작업 수행`,remark:null,image:["static/images/cellImage_1044910612_41.jpg"]},{index:92,topic:"아키텍처 문서화",define:`- 아키텍처 문서는 규범적이며, 설명적이고 의사결정자에게 고려해야 할 제약사항을 명시하여 시스템 구조상 핵심 설계 결정 사항을 설명 
- 모든 이해관계자가 서로 다른 관심사를 가지고, 접근하는 점을 고려하여 문서화 필요`,head:`1) 뷰 집합 확보 
2) 뷰 문서화 : 1차 표현->핵심을 부각하여 표현
3) 뷰 통합 : 하나의 뷰의 한계,�여러 뷰 고려
4) 뷰 표현 : 뷰 타입에 속한 아키텍처 스타일 활용`,remark:`요표근: 요소,표현법,근거(Perry&Wolf's Model:페리앤울프스)
- 컴커패턴: 컴포넌트, 커넥터, 패턴 (Show & Galan's Model:쇼앤갈란스)
- 4+1View: 논리(Logical), 구현(Implementation), 프로세스(Process), 배포(Deployment), 유스케이스(Use-Case)`,image:[]},{index:93,topic:"아키텍처 평가기법",define:"- 제시된 SW 아키텍처가 개발될 SW에 대해 요구되는 품질특성을 충족시킬 수 있는가를 아키텍처 수준에서 평가하는 작업",head:`* SAAM
- 최초로 정리된 평가방법 
- 다양한 수정가능성들의 관점에서 아키텍처 분석 
* ATAM(SAAM 계승 발전) 
- 시나리오 기반의 모든 품질요소를 평가하고 품질속성들이 서로 어떻게 상충되는지 까지 밝힘 
* CBAM 
- 비용과 일정간의 관계를 파악하여 아키텍처 전략적 비용 측정
* ADR(Active� Design� Review)
- 아키텍처의 특정 부분에 대해 집중적으로 검토하는 기법(개발자 중심)
* ARID(ATAM + ADR) 
- 부분 아키텍처를 초기에 평가하는 방법(품질 속성 중심)
- 완성되지 않은 아키텍처에 집중`,remark:null,image:["static/images/cellImage_1044910612_42.jpg"]},{index:94,topic:"ㄴATAM",define:`- 품질속성 요구사항과 비지니스 목표달성을 위한 아키텍쳐 결정 사항들에 대해 평가하는 기법
- ProcuctLine개념이 들어간 여러개의 제품군 개발에 효과적`,head:`- 준 - 소조테보 - 후
- 아동아 식품분 우분발

- 준비-[소개-조사와분석-테스트-보고]-후속조치
- ATAM소개, 비지니스동인소개, 아키텍쳐소개
- 아키텍쳐 접근법 식별, 품질속성 유틸리티 트리작성, 분석
- 우선순위 결정, 접근법 분석 반복, 결과발표`,remark:null,image:["static/images/cellImage_1044910612_43.jpg"]},{index:95,topic:"ㄴCBAM",define:`- 경제적 의사결정에 대한 요구를 충족시키기 위해 ATAM 기반 SW 아키텍처 분석에 중점을 둔 경제적 모델링 방법 

- ATAM 강화, 이익을 효용으로 표현, ROI 계산`,head:`시효계검 
1) 시나리오 결정 
2) 효용-반응값 곡선 작성 
3) 아키텍처 접근법 전체 이익 계산 
4) 아키텍처 접근법 선점과 검증`,remark:null,image:["static/images/cellImage_1044910612_44.jpg"]},{index:96,topic:"ㄴARID(Active� Reviews� for� Intermediate� Designs)",define:"- 소프트웨어 아키텍처 설계의 중간 단계에서 효과적으로 검토를 수행하는 방법",head:`- 초기 설계가 완료된 후,세부 구현 전의 중간 설계(Intermediate Design)를 검토하여 문제를 조기에 발견하고 개선

* 특징
- 중간 설계 검토,빠른 피드백 제공,오류 예방,비용 절감,참여형 리뷰 방식(ADR : 리뷰어가 진행)

* 평가 프로세스
1) 준비 단계: 검토자 구성->설계 요약자료 작성->기초 시나리오 작성->검토 준비 완료
2) 검토 단계: ARID 소개->설계 설명->시나리오 우선순위 결정->시나리오 기반 설계검토->요약정리`,remark:null,image:[]},{index:97,topic:"아키텍처 문서화 기준IEEE 1471 -> ISO/IEC 42010:2022",define:`- 아키텍처 표현을 위한 요소 및 이들 관계를 일반화하여, 다양한 SW 시스템에서 활용할 수 있도록 하는 아키텍처 명세를 정의하는 메타모델

- 인미시아스아레 컨뷰뷰라모

- 인민아스스아래 컴커커 뷰뷰아 모컴레 

-42010:2022 
- Environment(외부맥락), Entity of Interest(대상엔티티), Stakeholder(이해관계자), Stakeholder Perspective(이해관계자관점), Concern(관심사), Architecture(아키텍처), Architecture Description(아키텍처기술서), Architecture Rationale(설계근거), Architecture Viewpoint(관점템플릿), Architecture View(아키텍처시각), Model Kind(모델유형), View Component(뷰구성요소), Architecture Aspect(아키텍처관점), Correspondence(대응관계), Correspondence Method(대응방법), Legend(기호설명)`,head:"",remark:null,image:["static/images/cellImage_1044910612_45.jpg","static/images/cellImage_1044910612_46.jpg"]},{index:98,topic:"SAD(Software Architecture Document)",define:"- 이해관계자들의 관심사 파악 및 관점들을 정의하고, 다양한 View를 통해 SW 아키텍처를 기술한 문서",head:`개배요참설시용 
- 개요, 아키텍처 배경, 아키텍처 요구사항, 참조 아키텍처, 설계전략, 시스템 뷰, 용어사전`,remark:null,image:[]},{index:99,topic:"델타 아키텍처(Delta Architecture) & 델타 레이크",define:`* 델타 아키텍처
- 데이터 레이크(Data Lake)기반으로 데이터를 단계적으로 정제하여 품질을 향상시키기 위해 기존 시스템을 유지하면서 변경(Delta)되는 부분만을 추가하거나 수정하는 방식의 아키텍처

* 델타 레이크(Delta Lake)
- 데이터 레이크의 Lakehouse구축 위해 ACID트랜잭션,메타데이터 처리,스트리밍 기반 다양한 형식의 데이터를 저장하는 스토리지 프레임워크`,head:`* Layer
- Bronze Layer(Raw Data):원본 데이터 저장(정제되지 않은 상태)
- Silver Layer(Cleansed Data):데이터 정제 및 변환 (중복 제거,스키마 적용 등)
- Gold Layer(Curated Data):최종 분석 및 머신러닝 적용이 가능한 고품질 데이터`,remark:null,image:["static/images/cellImage_1044910612_47.jpg"]},{index:100,topic:"MSA(마이크로서비스아키텍처)",define:`- 대용량 웹 서비스 최적화
- 대용량 웹 서비스 개발에 맞는 구조로 사상이 경량화되고, 대규모 개발팀의 조직 구조에 맞도록 변형된 아키텍처
- 클라우드 네이티브 기본 사상

- Inner 아키텍쳐 : 내부서비스 분리 설계, 데이터 Access, API 설계, Layer
- Outer 아키텍쳐 : 서비스 연계, 상태 유지 개선 설계`,head:`* 구성요소
API Gateway
Orchestration
Cross Cutting function handling

* 핵심사상
컨웨이의 법칙
데이터 분리

* Inner 아키텍처
- 서비스 실행환경 : 컨테이너 관리. 쿠버네티스
- Service Mesh : 서비스 Discovery, 로드밸런싱, 서비스 라우터
- 백엔드 서비스: 데이터 저장소, 메세지 브로커
- Telemetry : 모니터링, 진단

* Outer 아키텍처
- 외부 게이트웨이: API Gateway, 정책관리
- CI/CD 자동화 : 빌드 자동화, 이미지 저장소, 배포 자동화, 플랫폼 자동화`,remark:null,image:["static/images/cellImage_1044910612_48.jpg"]},{index:101,topic:"ㄴ서킷 브레이커 패턴(Circuit Breaker Pattern)",define:`- 장애에 강한 MSA 서비스 구현
- 장애를 감지하고 예상치 못한 시스템 장애가 지속적으로 반복되는 것을 방지하는 로직을 캡슐화한 디자인 패턴`,head:`* 회로상태
Open(오류상태)
Close(정상상태)
Half-open(지속시간 이후)`,remark:`* 회로제어 
실패율 임계값
지속시간
- 장애발생 시 트랜잭션 보상 : SAGA 패턴과 연결`,image:[]},{index:102,topic:"ㄴ서비스 메쉬(Service Mesh)",define:`- 애플리케이션 서비스 간의 브릿지(MSA 파생)
- 마이크로 서비스 간의 통신을 담당하며 Service, Service Discovery, 서비스 라우팅, Failure recovery, 로드밸런싱, 보안 등의 문제를 처리하는 기술
- ControlPlane, DataPlane`,head:`* 유형 
PaaS의 일부로 서비스코드에 포함
라이브러리로 구현되어 API 호출
Side car proxy 이용하여 주입`,remark:null,image:["static/images/cellImage_1044910612_49.jpg"]},{index:103,topic:"ㄴSAGA Pattern",define:`- 마이크로 서비스들끼리 이벤트를 주고 받아 특정 마이크로서비스에서의 작업이 실패하면
이전까지의 작업이 완료된 마이크로 서비스들에게 보상(complementary)이벤트를 소싱함으로써 분산
환경에서 원자성(atomicity)을 보장하는 패턴`,head:`* 유형
- Choreography based SAGA pattern(kafka): 이벤트 기반 통신. 중앙 중재자없이 각 참여 서비스가 직접 이벤트 발행하여 통신하는 방식
- Orchestration based SAGA pattern(Temporal): SAGA 오케스트레이터라고 하는 중앙의 관리자가 존재하며, 이 오케스트레이터가 각 참여 서비스에 특정 작업을 지시하는 명령(커맨드 메시지)을 보내는 방식`,remark:null,image:["static/images/cellImage_1044910612_50.jpg"]},{index:104,topic:"서버리스 아키텍처",define:`- FaaS 제공을 위한 설계
- 서버단에서 로직이나 상태를 관리하지 않고 특정 이벤트에 반응하는 함수가 실행되는 아키텍처 

- 서버단에서 로직이나 상태를 관리하지 않고 실행에 필요한 하드웨어 자원의 배분 및 할당을 클라우드에서 동적으로 관리해주는 클라우드 컴퓨팅의 실행 모델

- 마이크로서비스 아키텍처는 비즈니스 로직이 여러개의 마이크로서비스로 쪼개져 각 서비스는 저장계층에서 각자 개별 영속(persistent) 데이터를 관리하는 구조`,head:`- Stateless: 동적관리, 개발자 관점 표현 
- Function as a service: 여러함수 클라우드 내 실행

인증, 제품DB, Client, 검색기능, 구매기능`,remark:null,image:["static/images/cellImage_1044910612_51.jpg"]},{index:105,topic:"헤드리스 아키텍처",define:`- 머리없는 거인
- 전통구조에서 프론트엔드 또는 사용자 인터페이스 제거한 것
- 프론트엔드와 백엔드의 분리
- 모든 비지니스 로직과 기능을 API로 래핑해 전담 백엔드 제공
머리없이 몸통만 존재, 필요한 기능은 API를 통해 서비스를 불러옴`,head:`장점 : 프론트엔드 유연성, 다양한 디바이스지원, 보안성, 확장성
- 백엔트와 프론트엔드의 연결 및 관리, 콘텐츠 관리 및 배포, API 설계 등 추가적 노력 필요`,remark:null,image:[]},{index:106,topic:"서버리스 컴퓨팅",define:"- 특정 이벤트의 반응하는 함수가 실행되는 FaaS와 BaaS 기반으로, 마치 물리적 서버가 없는 것처럼 동작하여 기존의 방식보다 연결 및 처리속도를 개선한 컴퓨팅 기술",head:`* 핵심기술 
- Client: SPA, Web App 
- Front End: API G/W, Restful API
- Function Service: FaaS, Event Router
- Back End: BaaS, Container`,remark:"- 서버리스 아키텍처",image:[]},{index:107,topic:"EDA(Event Driven Architecture)",define:"- 분산된 시스템에서 이벤트를 생성(발행)하고 발행된 이벤트를 수신자에게 전송하는 구조로 수신자는 그 이벤트를 처리하는 방식의 아키텍처",head:"* 중재자(이벤트큐) 토폴로지",remark:"* 브로커(메시지 브로커) 토폴로지",image:[]},{index:109,topic:"레이어드 아키텍쳐",define:`- 응집성 향상 목표
- 시스템을 각각 특정 책임과 종속성을 갖는 일련의 계층으로 구성하는 설계 패러다임

* 계층
- 프리젠테이션 계층 : 화면처리
- 비지니스로직 계층 : 비지니스 개념, 규칙, 흐름제어
- 데이터 엑세스 계층 : 데이터처리`,head:`- 상위계층은 하위의 여러 계층을 모두 알 필요없이 바로 밑의 계층만 활용
- 상위계층이 하위계층에 영향을 받지 않게 구성`,remark:"MVC구조",image:[]},{index:110,topic:"클린 아키텍처",define:`- 소프트웨어 아키텍처를 4개의 계층으로 관심사를 분리해 각 계층에서 가지는 의존성에서 탈피해 높은 모듈성, 확장성, 유연성을 가지는 아키텍처 
- 관심사 분리를 통한 고수준 SW구현
- 계층적으로 분리된 구조를 가지며 의존성을 최소화하여 테스트, 유지보수가 용이한 소프트웨어 구현 아키텍처`,head:`엔유컨외
엔티티-유즈케이스-컨트롤러-외부인터페이스
<------------의존도높음
- 결합도 최소
- 의존성이 한방향`,remark:"클린아키텍쳐 > 핵사고날 아키텍쳐",image:[]},{index:111,topic:"헥사고날 아키텍처(Hexagonal Architecture)",define:`- MSA 개발효율성 강화 
- 포트와 어댑터를 활용해서 컴포넌트들의 의존성을 낮추고 테스트를 용이하게 하는 아키텍처
- 클린아키텍쳐가 일반화된 모델`,head:`* 주요 컴포넌트 (APUD)
- Adapter: 포트를 통해 인프라와 실제로 연결하는 부분을 담당하는 구현체
- Port: 서비스에 어댑터에 대한 명세만을 제공 
- UseCase(Application): 어댑터를 주입받아 도메인 모델과 어댑터를 적절히 오케스트레이션
- Domain Model: DDD의 도메인 모델과 동일한 개념, 비즈니스 로직이라 부르는 엔티티 변경 작업`,remark:null,image:["static/images/cellImage_1044910612_55.jpg"]},{index:112,topic:"CQRS 패턴",define:"- 데이터를 변경하는 삽입/삭제/입력 처리와 데이터를 조회하는 쿼리의 책임을 분리하는 패턴",head:`* 구성요소 
- Event Sourcing: 모든 activity를 이벤트로 전환 
- 메시지 큐: 이벤트 소싱 저장소 
- ORM: 객체-관계 매핑 
- ployglot DB: 상이한 요건에 맞추어 저장`,remark:null,image:[]},{index:113,topic:"SW 발주",define:`- 시스템 구축, 프로그램 개발 등 기업 요구사항을 외부업체에 아웃소싱하기 위한 제안서 작성, 입찰, 평가, 계약 등 조달을 위한 일련의 관리기법
(정작제공평선)

예산수립/심의 > 발주준비 > 선정계약 > 사업수행 > 종료/인수 > 유지관리(예발선사종유)`,head:"",remark:null,image:["static/images/cellImage_1044910612_56.jpg"]},{index:114,topic:"ㄴ분리발주 -> 상용SW직접구매(SW진흥법제54조)",define:"- 공공기관 SW 발주시 시스템의 기능에 따라 발주 절차를 분리, 일괄계약을 피하고 기능별 분리 계약하는 발주 형태",head:`- HW와 SW의 분리발주 
- 패키지 SW 분리발주 
- SW 개발부문 분리발주`,remark:`- SW진흥법 제 20조: 
정부부처, 공공기관 SW 예산기준 총 사업규모 3억원 이상 사업에서 단일 SW 가격 5천원만원 이상인 경우 해당 SW를 분리발주
상용SW 직접구매 대상 SW
① 총 사업규모 : 3억원 이상(VAT 포함)
② 조달청 종합쇼핑몰 등록 SW(가격에 관계없음)
③ SW가격 : 5천만원 이상 또는 동일 SW의 다량구매 가격이 5천만원을 초과하며 인증*을 획득한 제품
* GS, 행정업무용, CC, NEP, NET, 국가정보원 검증/지정`,image:[]},{index:115,topic:"ㄴ분할발주",define:`- 소프트웨어 사업의 계획을 명확하고 투명하게 하여 소프트웨어 사업의 가시성을 확보하고 소프트웨어 발주관리의 선진화를 촉진시킬 수 있는 제도적 방안
- 공정분할: 요구사항, 설계, 구현, 시험, 운영 등으로 구분되는 공정분할 형태로 분할하여 발주 (요설구시운)
- 기능분할: 공정에 상관없이 전체 프로젝트를 기능별로 서브시스템으로 분할하는 것 
- 부품분할: 각 공정 또는 서브시스템 내의 특정 부품, 패키지 SW 등을 분리하여 발주(기존의 분리발주)`,head:"",remark:null,image:["static/images/cellImage_1044910612_57.jpg","static/images/cellImage_1044910612_58.jpg"]},{index:116,topic:"ㄴRFI(Request For Information)",define:"- 발주자가 RFP 작성 전 필요정보 수집을 위해 공급업체에 요청하는 정보요청서",head:"사업개요, 발주업체정보, 주요 요구사항",remark:null,image:[]},{index:117,topic:"ㄴRFP(Request For Proposal)",define:"- 발주자가 정보시스템에 대한 요구사항을 구체적으로 정리하여 공급업체에 참여를 공식적으로 제안하는 문서",head:`1) 사업의 개요 
2) 제안 프로젝트 일정 
3) 정보 요구내역 
4) 기술적 환경정의 
5) 제안서 관련 요구사항
개일정기제`,remark:null,image:[]},{index:118,topic:"ㄴ제안서(Proposal)",define:`- 기업이나 단체에서 프로젝트를 발주 할 때 수주업체의 개발경험이나 능력, 기술적 특징 등을 분석하기 위해 제출받는 문서

* 원칙: 보현구
보편성, 현실성, 구체성`,head:`* 기술제안서 평가항목: 방기성관지상 
- 전략 및 방법론 
- 기술 및 기능 
- 성능 및 품질 
- 프로젝트 관리 
- 프로젝트 지원 
- 상생협력 및 하도급 계약 적정성`,remark:`* 상용SW 평가항목: 기신사효유이공 
(총 100점 기준, 평가부문별 최대 30점)
- 기능성 : 기능 구현 완전성, 기능 구현 적합성,상호 운용성,보안성,표준준수
- 신뢰성:  장애복구 용이성, 지속성, 데이터 회복성
- 사용성 :기능 학습 용이성, 입력/출력 데이터 이해 용이성, 사용자 인터페이스 조정 가능성, 작업 흐름 및 정보 파악 용이성
- 효율성 :반응시간, 자원 사용률, 처리율
- 유지보수성: 문제진단/해결 지원, 환경적응성, 백업/복구 용이성
- 이식성 : 설계체계 용이성, 하위호환성
- 공급업체 지원: 유지관리 지원, 하자보수 계획, 교육훈련 지원, 제품 신뢰도, 직접생산 여부`,image:[]},{index:119,topic:"ㄴBMT, 벤치마크테스트",define:`- 상용 소프트웨어(SW)의 성능, 기능, 안정성을 검증하기 위해 표준화된 환경에서 수행하는 시험
- 국가기관 등의 장이 우수한 SW 제품을 선택할 수 있도록 객관적인 품질 정보를 제공하기 위해 SW 품질 성능 평가시험
(BMT) 실시 의무화 규정이 SW 산업 진흥법에 신설(’16년1월1일의무화)
- 「소프트웨어진흥법」 제55조(상용 소프트웨어 품질 성능 평가시험)`,head:`- SW진흥법 55조
- 조달등록 제품은 제외`,remark:null,image:["static/images/cellImage_1044910612_59.jpg"]},{index:120,topic:"GS인증",define:"-  한국정보통신기술협회(TTA)가 SW시험인증센터가 보유한 각종 테스팅 장비를 통해 SW의 품질을 가늠하는 기능성, 신뢰성과 상호  호환성에 대한 평가를 수행, 일정수준 이상인 제품에 부여하는 국가인증제도",head:`- ISO/IEC 25023 : 품질측정 표준
- ISO/IEC 25051 : 요구사항과 시험 표준
- ISO/IEC 25041 : 평가 표준
: 기,신,사,효,유,이,보안성,호환성,성능효율성

* 정보보호·SW 인증제도 개선 방안('24년 4월)
- 인증 기간 단축: 평균3개월→2개월 단축
- 인증 비용 절감: 경미한 변경(업데이트) 재인증 비용 면제, 중대한 변경(업그레이드) 비용 50% 감면
- 인증 절차 간소화: SW품질 영향이 적은 변경 시, 기업이 자체 판단 가능하도록 체크리스트 제공
- SaaS 품질 인증 체계 구축: SaaS 제품 특성을 반영한 별도 인증기준 마련`,remark:null,image:["static/images/cellImage_1044910612_60.jpg"]},{index:121,topic:"SP인증",define:`- 국내 SW 기업의 SW 사업 수행능력을 강화하고 SW사업의 부실방지를 목적으로 기업의 SW 개발 단계별 작업 절차 및 산출
물 관리 역량 등을 분석하여 SW 개발프로세스 역량수준을 평가/인증하는 제도
- SW개발·운영 프로세스의 품질을 인증하는제도
- 「소프트웨어 진흥법」 제21조(소프트웨어 프로세스 품질인증)`,head:`조프개지프
* 25년 5월 1등급 신설하여 SP인증의 진입장벽 낮춤
1단계 
- 개발영역
2단계 : 개지프
- 개발,지원,프로젝트관리
3단계 : 조프개지프
- 조직관리,프로세스개선,개발,지원,프로젝트관리`,remark:null,image:["static/images/cellImage_1044910612_61.jpg"]},{index:122,topic:"SW대가산정가이드",define:"- SW의 기획, 현운영 등 수명주기 전단계에 대한 사업을 추진함에 있어 이에 대한 예산수립, 사업발주, 계약시 적정대가를 산정하기 위한 기준",head:`* 일반적 절차 (유시모)
- 사업유형식별 > 대가산정 시점식별 > 대가산정 모형 선정`,remark:`* 예산단계 시점구분
- 예산확보단계 : 사업비 개괄적 산정
- 사업발주단계 : 제안요청서 작성하고 발주금액 산정
- 사후정산단계 : 사업종료후 실제투입 사업비와 집행된 사업비의 차이 파악하여 필요시 정산`,image:[]},{index:123,topic:"ㄴ시점별 대가산정",define:`* 유형식별 (기구운)
1) 기획 : 
- ISP/BPR : 컨설팅업무량, 투입공수 
- EA/ITA, ISMP, 정보보안컨설팅 : 투입공수 
2) 구현
- 개발 : 기능점수(정규법, 간이법), 투입공수
3) 운영
- 유지보수 : 요율제, 상용/공개 SW유지관리비
- 운영 : 투입공수
- 재개발 : 재개발 기능점수 산정`,head:`- 컨설팅 대가 : 업무량 * 단가, 직접경비
- 투입공수 : 직접인건비, 제경비(직접인건비140~150%), 기술료((직접인건비+재경비)의 20~40%), 직접경비
- 기능점수 : 개원원가, 이윤=개발원가*25%이내, 기술료((직접인건비+재경비)의 20~40%), 직접경비
- 유지관리 총점수 : SW개발비 재산정가 * 유지관리난이도(%), 직접경비
- 등급별 요율 : 최초 licence 계약금액 * 등급별 유지관리요율
- 서비스항목, 요율 : 최초제품 구매 계약금액 * 서비스 요율
- 정액제 : 대상 공개SW 유지관리 유사거래 실례가격, 견적가 순 우선 적용 및 산정`,remark:null,image:[]},{index:124,topic:"인공지능(AI)�도입사업 대가산정 (2024년 5월 개정)",define:"- 인공지능(AI)서비스 도입 사업비는 서비스 가격표 또는 견적서에 제시된 이용료(구독료)와 투입공수 방식의 전문작업비에 따라 대가를 산정하는 방식",head:`< 사업유형 >
- 단순 AI서비스 제공 사업(License-only served)
- 커스터마이징 기반 사업(Customizing based)
- 시스템통합 기반 사업(System-Integrating based)

< 비용구성 >
- 서비스 이용료(라이선스비)
- 전문작업비: 알고리즘 조정,데이터 수집 및 전처리,데이터 학습,테스트 및 검증,사용자 교육
- 시스템통합 및 기능 개발비:FP방식으로 계산(인프라 구축, 통합시스템 개발 테스트 등)`,remark:null,image:[]},{index:125,topic:"PMO 위탁제도",define:"- 법 제64조의2(’13.7월 시행) 에 의해 전자정부사업의 관리·감독 업무를 전문지식과 기술능력을 �갖춘 자에게 위탁하는 것",head:"",remark:null,image:[]},{index:126,topic:"감리",define:"정보시스템의 효율성을 향상시키고 안전성을 확보하기 위해 제3자적 입장에서 정보시스템의 구축, 운영 사항을 종합적으로 점검하고 문제점을 찾아 개선하도록 하는 행위, 제도",head:"",remark:`유영관-성산절
사업유형 : 아키텍쳐, 정보화전략, 시스템개발, DB구축, 시스템운영, 유지보수(아정시데운유)
감리영역 : 
감리관점/점검기준 : 성과, 산출물, 절차`,image:[]},{index:127,topic:"ㄴ감리유형",define:`- 정기감리 : 1차~7차, 중간/최종
- 단계별감리 : (요구)-설계-종료
- 상주감리 : 전체사업기간 or 특정기간`,head:`* 예현시
- 예비조사(감리수행계획서) > 현장감리(감리수행결과보고서) > 시정조치(감리시정조치확인보고서)`,remark:null,image:["static/images/cellImage_1044910612_62.jpg"]},{index:128,topic:"ㄴ운영감리(OP)",define:`- 개발완료후 인도된 정보시스템에 대해 유지보수를 제외한 운영기획 및 관리, 모니터링, 테스트, 사용자 지원을 포함한 정보시스템의 정상적 운영에 필요한 제반활동
- 전자정부법 시행령 제71조 기준`,head:`* 개발SW : 릴리즈 및 배포관리, 테스트지원, 장애관리
* 인프라 : SLA관리, 서비스보고, 연속성 및 가용성관리, 용량관리, 정보보안관리, 공급자관리, 운영상태관리`,remark:null,image:[]},{index:129,topic:"ㄴ유지보수감리(MA)",define:`- 정보시스템 개발, 구축 완료후 기능변경, 추가, 보완, 폐기, 사용방법의 개선, 문서보완 등의 정보시스템 개선에 필요한 제반 활동
- 전자정부법 시행령 제71조 기준`,head:`* 개발SW : 응용서비스 모니터링, 장애처리, 사용자지원, 성능관리, 정기/비정기점검, 유지보수계획, 요구사항관리, 유지보수이행
* 상용SW : 유지보수계획, 표준및절차, 업그레이드 및 패치, 이전 및 재설치, 일상지원, 운영자/사용자교육, 보안조치
* 인프라 : OS/HW업그레이드, 긴급/장애처리, 부품지원, 운영상태관리, 이전 및 재설치`,remark:null,image:[]},{index:130,topic:"SW영향평가",define:"공공기관이 SW사업을 추진할 경우 민간 시장에 미치는 영향을 사전에 분석해 결과를 과기정통부 장관에게 제출하게 하는 제도",head:`기 : 파필 
대 : 침공 
기관공동 사용형: 파급효과/필요성
대국민 서비스형:침해여부/공공성`,remark:null,image:[]},{index:131,topic:"PMBOK",define:"- 프로젝트의 요구사항을 충족시키기 위한 지식, 기술, 도구, 기법의 응용을 다루는 국제적으로 인정 받은 표준 (PMI)",head:`- 관리프로세스: 착계실통종
- 지식영역: 통범일원품자의리조이
- 관련표준
: ISO21500
- 영국 표준협회의 제안으로 국제 프로젝트 �관리에 대한 원칙과 절차를 정립하기 위해 ISO가 제안한 프로젝트 관리 국제 표준`,remark:null,image:[]},{index:132,topic:"요구공학(Requirement Engineering)",define:"시스템의 개발, 변경의 목적을 식별하기 위해 이해관계자들의 요구를 이해 및 조정하여 체계적으로 수집, 분석, 명세화, 검증하는 학문",head:`기능 - 기능,자료,인터페이스,사용자(기자인사)
비기능 - 자료, 성능, 보안, 품질(자성보품)

* 요구공학 프로세스(추분명검)
타당성조사 > 요구사항추출 > 분석 > 명세 > 검증`,remark:null,image:["static/images/cellImage_1044910612_63.jpg"]},{index:133,topic:"ㄴ요구명세 작성원칙",define:`IEEE Std830 기반(SRS)
외부인터페이스, 기능요구사항, 성능요구사항, 논리DB요구사항, 설계제약사항, SW시스템속성`,head:`- 외기성논설소
- Software Requirement Specification Document`,remark:`* 평가
명완일검수추개(명확성, 완전성, 일관성, 검증가능성, 수정용이성, 추적가능성, 개발후이용성)`,image:[]},{index:134,topic:"SW규모산정",define:"- SW의 규모 파악을 통한 소요공수와 투입자원 및 소요기간을 파악하여 실행가능한 개발계획을 수립하기 위해 비용을 산정하는 방법",head:`하상수 
- 하향식 산정방법: 전문가판단, 델파이기법 
- 상향식 산정방법: LOC, 투입공수 
- 수학적 산정방법: COCOMO, FP`,remark:null,image:[]},{index:135,topic:"ㄴCOCOMO",define:`- 시스템의 비용을 산정하기 위해 시스템을 구성하고 있는 모듈과 서브시스템의 비용 합계를 계산하는 방식 

- SW 유형을 모듈로 구분하고 각 유형에 대한 총 MM와 개발기간을 계산하는 방식`,head:`* COCOMO 모델 : 기중발
1) Basic(기본형): SW 개발 노력과 비용을 LOC 형태로 추정한 후 비용을 산정하는 고정 단일값 모형
2) Intermediate(중간형): 프로젝트 형태, 개발환경, 개발인력 요소에 따라 15개의 특성치를 적용한 방식
3) Detailed(발전형): 서브시스템별로 비용을 별도로 산정하여 합산하는 방식. 개발단계별 비용산정방식 달리 적용 가능`,remark:`* COCOMO 유형: 유반내530 
1) 유기적모드(기본형): 2.4 * KDSI 
- 소규모 팀이 개발하는 잘 알려진 응용 시스템. 5만라인 이하
2) 반결합모드(중간형): 3.0 * KDSI 
- 트랜잭션 처리 시스템이나 운영체제, 데이터베이스관리시스템. 30만라인 이하
3) 내장모드(임베디드형): 3.6 * KDSI
- 하드웨어가 포함된 실시간 시스템, 신호기 제어 시스템 등. 30만라인 이상`,image:[]},{index:136,topic:"ㄴCOCOMO2",define:`- 최신 소프트웨어 개발 프로세스 지원을 위해 개선된 COCOMO 버전 

- 전행정도별 산정 모델 제시 
- 컴포넌트, 프레임워크 환경지원 
- 서브 시스템별 개별 산정 지원 
- 객체지향/CBD 지원`,head:`* COCOMO2 모델: 프초설 응기락
1) Applicatoin composition model(프로토타입/응용합성): 응용점수 
- 작은 팀이 몇 주의 기간동안 개발하는 경우에 사용
2) Early design model(초기설계): 기능점수 
- 개발초기단계 사용, 세부사항 정보가 부족할때 사용
3) Post-Architecture model(설계이후): 기능점수, LOC
- 프로젝트에 대한 상세한 자료가 존재하는 경우에 적용 가능`,remark:null,image:[]},{index:137,topic:"ㄴ기능점수(FP)",define:`- 사용자 관점에서 사용자가 요구하고 사용자에게 인도되는 기능을 정량적으로 산정하는 소프트웨어 규모 측정방법(ISO 14143) 

- 산정 절차: 유범경 데이트 미조정`,head:`* 구성요소 
1) 데이터 기능점수 측정 
- 내부논리파일(ILF): 내부 관리 정보 
- 외부논리파일(EIF): 외부 참조 정보
2) 트랜잭션 기능 유형 식별 
- 외부입력(EI): 등록, 수정, 삭제 등
- 외부출력(EO): 처리로직을 포함한 조회
- 외부조회(EQ): 계산식이나 파생데이터 없는 단순 조회 

3) 조정인자(VAF): 성능, 처리율, 복잡도, 용이성 등을 항목별로 측정`,remark:`* 데이터 기능 복잡도 측정 
1) 간이법: 평균복잡도 
2) 정통법 
- ILF, EIF
- 데이터 요소유형(DET): 필드수 
- 레코드 요소유형(RET): 테이블수 

* 트랜잭션 기능 복잡도 측정 
1) 간이법: 평균복잡도 
2) 정통법 
- EI, EO, EQ
- 데이터 요소유형(DET): 필드수 
- 레코드 요소유형(FTR): 테이블수`,image:[]},{index:138,topic:"ㄴ기능점수(FP)",define:"",head:"",remark:null,image:["static/images/cellImage_1044910612_64.jpg","static/images/cellImage_1044910612_65.jpg"]},{index:139,topic:"SW신뢰성과 가용성",define:`* 신뢰성 
- 어떤 기준 시점에서부터 서비스 수행의 지속성에 대한 척도. 장애가 발생하기까지의 시간 

* 가용성 
- 프로그램이 주어진 시점에서 요구사항에 따라 운영되는 확률`,head:`* 평균고장간격(MTBF): MTBF=MTTF+MTTR
- 시스템이 고장난 후 부터 다음 고장날때까지의 시간 
* 평균가동시간(MTTF): 가동시간합/n 
- 시스템이 사용시점부터 고장이 발생할 때까지의 가동시간평균(신뢰성)
* 평균수리시간(MTTR): 고장시간합/n
- 시스템에 고장이 발생하여 가동하지 못한 시간들의 평균 
* 가용성 측정: MTTF/MTBF*100
- 정상적으로 가동된 시간의 비율`,remark:null,image:["static/images/cellImage_1044910612_66.jpg"]},{index:140,topic:"SW품질경영 이론",define:`품질검사시대(1922) > 통계적 품질관리시대(1941) > 종합적 품질관리시대(1987) > 종합적 품질경영시대(2000)

* 품질경영 3개 선구자: 데밍, 쥬란, 크로스비 

* 데밍 
- "측정할 수 없는 것은 개선할 수 없다"

- 통계적 관리의 개념을 생산과 경영관리에 적용한 일본의 TQC에 공헌한 통계적 품질관리의 아버지 
- PDCA(Plan>Do>Check>Action)`,head:`* 쥬란 
-" 품질비용은 광산 속에 묻힌 황금"

- 품질통제에 대한 새로운 기법과 도구의 교육 및 전파업무를 수행하면서 평생을 품질관리 업무에 기여한 품질관리자 

- 품질3분법: 품질계획, 품질통제, 품질개선 
- 품질비용: 예방비용, 평가비용, 실패비용 (내부/외부) 
- 파레토 차트`,remark:`* 크로스비 
"Quality is Free"
- 품질은 무료라는 무결점 운동의 기반을 세운 품질관리의 선구자 

- 품질의 4대 기본철학 
1) 품질의 정의는 요구사항 적합성 
2) 품질은 최초에 올바르게 하는것(검사가 아닌 예방) 
3) 성과의 표준은 무결점(ZD)
4) 품질의 척도는 품질비용`,image:[]},{index:141,topic:"SW품질",define:`- 주어진 요구사항을 만족시킬 수 있는 소프트웨어 기능 및 특성(IEEE) 
- 명시적이거나 묵시적인 필요를 만족시키는 능력과 관련된 소프트웨어 제품의 특성 및 특징 전체(ISO 9126)`,head:`* 소프트웨어 품질 
- Big Q: 고객의 만족, 사용자 관점 품질 
- Small q: 개발자 관점, 결함없는 요구에 부합되는 소프트웨어`,remark:null,image:["static/images/cellImage_1044910612_67.jpg"]},{index:142,topic:"McCall의 품질요소",define:"- SW의 변경 및 유지보수 차원(프로덕트 개정)의 품질요소와 환경의 변화(프로젝트 전환)라는 측면의 품질요소, SW를 사용하고 운용(프로덕트 운용)하면서 중요하게 생각되는 품질요소가 다름",head:`개운전
- 개정: 유지보수성, 융통성, 테스트 용이성 
- 운용: 정확성, 신뢰성, 효율성, 통합성, 사용성 
- 전환: 이식성, 재사용성, 상호운용성`,remark:null,image:["static/images/cellImage_1044910612_68.jpg"]},{index:143,topic:"SW품질총론",define:`- 요구사항을 만족시키는 소프트웨어 제품의 특성과 기능 
- 쥬란의 '품질3분법' 차용 (계보통)`,head:`* 품질계획(Quality Plan)
- 적용할 품질의 표준을 식별하고 적용할 방법을 결정하는 계획. 좋은 품질지표 정의 

* 품질보증(Quality Assurance) 
- SW 제품과 요구사항이 일치하는지의 검토를 제3자 입장에서 수행하는 작업 

* 품질통제(Quality Control)
- 작업결과가 적절한 품질표준에 부합되는가를 위해 특정 산출물을 모니터링하고 불만족 결과에 대한 원인제거 방법을 확인`,remark:null,image:["static/images/cellImage_1044910612_69.jpg"]},{index:144,topic:"SW품질평가 표준모델",define:`1) 제품품질 
- IT 프로젝트를 진행하거나 완성된 IT 제품에 대해 기능성, 신뢰성 등을 평가
- ISO/IEC 9126, 14587, 12119
2) 프로세스 품질 
- IT 프로젝트 진행하거나 운영함에 있어 프로세스가 수립되어 있고 체계적으로 운용되고 있는지를 평가
- CMMI, SPICE, ISO 12207
3) 품질경영 
- 기관이나 회사를 경영함에 있어 SW 품질을 향상하기 위한 품질경영 기술
- 6시그마, ISO 9004`,head:`1) 제품품질 
- ISO 9126: SW 품질 특성 정의->25023
- ISO 14587: 9126 사용 프로세스 표준
- ISO 12119: SW 패키지 제품 표준 
- ISO 25000: 품질관리, 요구사항, 모델, 측정, 평가 등 통합 표준
- GS인증: 제품의기능성, 신뢰성 등을 평가 및 인증

2) 프로세스 품질 
- ISO 12207: 표준 SDLC(기지조)
- ISO 15504(SPICE): 프로세스 개선 및 능력 측정
- CMMI: SW와 시스템 공학의 능력과 성숙도 평가 모델
- SP인증: SW 개발 프로세스 역량 수준 평가 및 인증

3) 품질경영 
- 6시그마: 최소 결함 목표
- ISO 9000: 품질경영시스템 국제 규격`,remark:null,image:["static/images/cellImage_1044910612_70.jpg"]},{index:145,topic:"ㄴISO 9126",define:`- 소프트웨어 품질 특성을 정의하고 품질 평가에 대한 Metrics를 정의한 국제표준 
- 사용자 관점에서 본 SW 품질 특성에 대한 표준
-> ISO 25023 변경
: 기신사효유이 + 보호성 추가
: 보안성, 호환성, 성능효율성`,head:`* 품질 주특성: 기신사효유이 / 부특성
- 기능성 / 적합성, 정확성, 상호호환성 
- 신뢰성 / 성숙성, 오류허용성, 회복성
- 사용성 / 이해성, 습득성, 운용성
- 효율성 / 실행효율성, 자원효율성
- 유지보수성 / 변경성, 안정성, 시험성
- 이식성 / 환경적응성, 이식작업성`,remark:`- 9126-1: 품질특성 6개, 부특성 21개
- 9126-2: 외부 매트릭(SW완성단계)
- 9126-3: 내부 매트릭(SW개발단계)
- 9126-4: 사용 중 품질`,image:[]},{index:146,topic:"ㄴISO 14598",define:`- SW 제품평가에 대한 국제 표준 
- 9126 사용을 위한 절차와 기본상황 및 소프트웨어 평가 프로세스에 대한 표준을 규정 
(9126 평가 절차를 14598에서 정의) 

- 특징: 반복성, 재현성, 공정성, 객관성`,head:`* 구성: 개계개구평모 
- 14598-1: 개요
- 14598-2: 전체적 계획수립
- 14598-3: 개발자를 위한 프로세스 제공
- 14598-4: 구매자를 위한 프로세스 제공
- 14598-5: 평가자를 위한 프로세스 제공
- 14598-6: 평가 모델 및 문서화`,remark:`* 절차: 요명설수 
1) 평가 요구사항 정의: 평가목적 정의, 제품유형 식별, 품질모델 명세 
2) 평가 명세: 평가 메트릭 선정, 메트릭 등급 기준 정의, 평가 기준 정의 
3) 평가 설계: 평가 계획 작성 
4) 평가 수행: 품질측정, 등급결정, 결과 분석`,image:[]},{index:147,topic:"ㄴISO 12119",define:`- SW 패키지의 일반적인 품질 요구사항 및 시험에 대한 국제 표준 

* 절차: 제사실 기보
제품설명서 시험 > 사용자 문서 시험 > 실행 프로그램 시험 > 시험 기록 > 시험보고서 작성`,head:`* 구성: 제사실 
- 제품설명서: SW 패키지의 속성설명, 문서화 요구사항 만족여부 평가 
- 사용자 문서: 제품 구매자에게 사용에 대한 모든 정보 제공 
- 실행 프로그램: 실행 SW가 갖추어야 할 기능만족, 통제불능회피, 사용자 편의성 등의 요구사항 만족 여부 평가`,remark:`* 평가항목 
- 제품설명서: 일관성, 제품소개 명시내용, 각 품질 특성 내용 
- 사용자문서: 완전성, 정확성, 일관성, 이해성 
- 실행 프로그램: 문서대로 실행여부, 신뢰성, 사용성`,image:[]},{index:148,topic:"ㄴISO 25000(SQuaRE)",define:`- SW 개발공정 각 단계에서 산출되는 제품이 사용자 요구를 만족하는지를 검증하기 위해 품질 측정과 평가를 위한 국제 표준 

- SW 제품품질모델(9126) + SW제품품질평가지침(14598) + 패키지SW(12119) + System life cycle Process(15288)`,head:`* 구성: 요모관측평 
- 요구사항(Requirement): 15288 참조한 품질 요구
- 모델(Model): 9126-1 기반 데이터 품질모델
- 관리(Management): 14598-2 품질관리계획 
- 측정(Measurement): 9126-2,3,4 대응 품질측정요소
- 평가(Evaluation): 14598 평가 프로세스 
- 25051 Extention: 패키지 SW 포함`,remark:null,image:["static/images/cellImage_1044910612_71.jpg"]},{index:149,topic:"ㄴGS인증",define:`- SW 시험/인증을 위한 평가모델 

- 9126(25023), 25051, 25041에 근거하여 8가지 품질특성으로 구성`,head:`기신사효유이+보호 
- 기능적합성, 신뢰성, 사용성, 성능효율성, 유지보수성, 이식성, 보안성, 호환성`,remark:`* 인증시 지원제도 
- 우선 구매 제도 
- 성능 인증 제도 
- 성능 보험 제도 
- 구매자 면책제도`,image:[]},{index:150,topic:"ㄴISO 12207",define:`- 표준 SDLC(기지조) 
- 체계적인 소프트웨어 획득, 공급, 개발, 운영 및 유지보수를 위해 소프트웨어 개발 생명주기단계(SDLC)별 필요 프로세스를 규정한 국제 표준 

- 필요성: 9000, 9126 등에서 프로세스 평가모델 정의 못함, 프로세스에 대한 What 정의 필요`,head:`기지조 
1) 기본 생명주기: 획공개운유 
- 획득, 공급, 개발, 운영, 유지보수
2) 지원 생명주기: 문형품검VV
- 문서화, 형상관리, 품질보증, 검증, 확인, 감사, 문제해결
3) 조직 생명주기: 관기훈개 
- 관리, 기반구조, 훈련, 개선`,remark:null,image:["static/images/cellImage_1044910612_72.jpg"]},{index:151,topic:"ㄴISO 15504(SPICE)",define:`- 프로세스 등급 정의 
- 여러 프로세스 개선 모델을 ISO 국제표준으로 통합하여, SW SDLC 프로세스에 대한 개선 및 능력 평가의 기준이 되는 SW 프로세스 모델
- 12207의 how 부재, CMM 대항`,head:`* 프로세스 차원
- 5개 프로세스 카테고리와 40개 세부 프로세스로 구성 
- 12207 생명주기 프로세스 기반 
- 프로세스별 목적 달성 위한 기준 제시 

* 프로세스 수행능력 차원 
- 0~5까지 Capability Level로 구성 
- 9개의 PA(Process Attribute)로 구성`,remark:`* 프로세스 카테고리: 고공지관조 
1) CUS(고객-공급자)
2) ENG(공학)
3) SUP(지원)
4) MAN(관리)
5) ORG(조직) 

* Capability Level: 불수관확예최 
0-불완전, 1-수행, 2-관리, 3-확립, 4-예측, 5-최적화`,image:[]},{index:152,topic:"ㄴISO 15504(SPICE)",define:"",head:"",remark:null,image:["static/images/cellImage_1044910612_73.jpg","static/images/cellImage_1044910612_74.jpg"]},{index:153,topic:"ㄴISO 9000",define:"- 품질경영과 품질 보증에 관한 국제 규격",head:`- 9001
- 9002
- 9003
- 9004
- 9000-3`,remark:`* 품질경영 8대원칙: 고리전프 경지의상 
- 고객중심, 리더십, 전원참여, 프로세스 접근방법, 경영에 대한 시스템 접근방법, 지속적 개선, 의사결정에 대한 사실적 접근방법, 상호유익한 공급자관계`,image:[]},{index:154,topic:"ㄴCMMI 2.0",define:`- 조직의 프로세스 성숙도를 평가하고 개선하기 위한 프레임워크로, 소프트웨어 개발 뿐만 아니라 다양한 산업에서 품질관리 및 성과 개선을 위한 사실상 표준

- v1.3의 SG와 GG가 없어지고 각 Practice Area별로 Practice Group이 생성
- View의 개념을 도입하여 비즈니스 목적에 따라 Practice Area와 Practice Group을 선택 가능

* CMMi2.0 : 비지니스  성과 중심. 실행(Practice) 중심. Agile, DevOps 등 최신 개발방법론 반영`,head:`* 구성요소  
1) Model 
- Views: 최종 사용자에게 선택되는 중요 구성 요소 집합 
- Categories: Doing, Managing, Enabling, Improving
- Capability Area: Practice Area의 유사 관계 통합 Area 

2) Practice Area (PA)
- Required/Explanatory PA Info: 주요 활동 모델을 설명하는 Practice들의 집합

3) Practice Group (PG)
- Level n: 진화적 수준으로 구성된 성과 향상 level 

4) Practice 
- Required/Explanatory Info: 수행목표, 설명, 가치 사례의 구체적인 활동`,remark:null,image:["static/images/cellImage_1044910612_76.jpg"]},{index:155,topic:"ㄴCMMI 3.0",define:`- 소프트웨어 개발 및 서비스 관리 등 다양한 산업에서 프로세스 성숙도를 평가하고 개선하기 위한 글로벌 표준 모델
- 조직의 프로세스 성숙도를 평가하고 성과를 개선하기 위한 최신 프레임워크로, 보안(Security), 안전(Safety), 데이터(Data), 가상(Virtual) 환경 등 새로운 도메인을 추가하여 확장된 모델
- CMMI v3.0은 CMMI v2.0대비 Data Management, People Management, Virtual Work 도메인 추가됨

- 2024년 1월 1일부터 시작, CMMI 버전 2.2는 2024년 6월 30일까지 사용, 7월부터는 v3.0으로 심사`,head:"",remark:null,image:["static/images/cellImage_1044910612_77.jpg","static/images/cellImage_1044910612_78.jpg"]},{index:156,topic:"SW유지보수",define:`- SW 생명주기(SDLC)의 폐기 전 단계로 오류를 수정하고 사용자의 요구사항을 정정하며 기능과 수행력을 증진시키기 위한 활동
- ISO/IEC 14764 : 소프트웨어 유지보수는 "소프트웨어 제품이 변경되는 요구사항을 충족하도록 하는 프로세스”
- 유지보수 운영 비용이 전체 비용의 70~80% 차지
- 특징 : 지속적인 활동, 비용 증가 요인, 기능개선 포함, 운영 환경 대응, 품질보장`,head:`* 유지보수 형태 : 완적예교 계예응지 데프문시
1) 원인별
- 완전적, 적응적, 예방적, 교정적 유지보수
2) 시점별
- 계획, 예방, 응급, 지연 유지보수
3) 대상별
- 데이터, 프로그램, 문서, 시스템 유지보수`,remark:null,image:[]},{index:157,topic:"3R",define:`- SW 재사용원리 
- 소프트웨어 역공학이나 재구조화 등의 기술을 이용하여 소프트웨어를 분석하고 정보를 추출하여 이를 다시 순공학을 사용하여 새로 구현함으로써 재사용성을 확보하는 작업`,head:"",remark:"역공학, 재공학, 재사용",image:[]},{index:158,topic:"ㄴ역공학(Reverse Engineering)",define:"- 구현된 SW를 개발단계 역으로 분석하여 처음의 문서나 설계기법 등의 자료를 얻어 내는 기법",head:`* 기법 
- 논리 역공학 
- 자료 역공학 
- SW분석 및 유지보수성 향상 
- 시스템과 산출물간의 일관성 확보 
- 보안 취약점 등 개선사항 도출`,remark:null,image:["static/images/cellImage_1044910612_82.jpg"]},{index:159,topic:"ㄴ재공학(Re Engineering)",define:"- 기존 시스템을 널리 사용되는 프로그래밍 표준에 맞추거나 타 하드웨어에서 사용할 수 있도록 변환하는 기법",head:`* 기법 
- 시스템 및 SW 유지보수성 향상 
- 표준 및 아키텍처 적용 
- HW등의 환경변화에 따른 적응성 제공 
- 분석>재구성>역공학>이식활동`,remark:null,image:[]},{index:160,topic:"ㄴ재사용(Re Use)",define:"- 이미 개발된 SW의 전체나 일부분을 재사용해 새로 개발되는 SW의 질을 높이고 생산성을 향상시켜 개발시간과 비용을 감소하는 해결책",head:`* 기법
- 모듈, 컴포넌트, 방법론`,remark:null,image:[]},{index:161,topic:"모듈화(Modulatiry)",define:`- 효율적 프로그램 구성 지원, 
- SW개발에 있어 기능을 분할하고 추상화하여 소프트웨어의 성능을 향상시키고 유지보수를 효과적으로 하기 위한 SW 설계 및 구현 기법 

- 모듈화의 주요 특성: 결합도와 응집도`,head:`* 특징: 분할과 지배, 정보은닉, 자료 추상화, 모듈 독립성 
* 모듈화 기법
- 설계: 모듈, 컴포넌트, 서비스 
- 구현: 매크로, Function, inline`,remark:null,image:[]},{index:162,topic:"ㄴ결합도(Coupling)",define:"- 소프트웨어 구조에서 모듈간의 관련성을 측정하는 척도",head:`자료 결합도: 모듈간 파라메터 교환 
스탬프 결합도: 모듈간 자료구조 교환
제어 결합도: 제어용 신호, 정보 교환
외부 결합도: SW외부환경과 연관
공통 결합도: 전역변수 참조
내용 결합도: 한 모듈이 다른 모듈의 내부 자료나 제어정보 사용`,remark:`내공외제스자
-----------------> 낮을수록 좋음`,image:[]},{index:163,topic:"ㄴ응집도(Cohesion)",define:`- 정보은닉 개념의 확장개념 
- 하나의 모듈은 하나의 기능을 수행하는 집적성을 지칭함`,head:`- 우연적 응집도: 아무 관련성 없는 작업을 한 모듈에 모음
- 논리적 응집도: 유사한 성격의 작업 모음
- 시간적 응집도: 같은 시간대 처리되는 작업 모음
- 절차적 응집도: 관계있는 모듈 순차진행
- 통신적 응집도: 동일한 입출력 자료를 이용하여 서로 다른 기능 수행
- 순차적 응집도: 작업 결과가 다른 모듈 입력으로 사용
- 기능적 응집도: 하나의 기능만 수행`,remark:`우논시절통순기
-------------------> 높을수록 좋음`,image:[]},{index:164,topic:"코드난독화",define:`- 역공학을 통한 보안 취약점 공격에 대한 방지 기술 
- 코드를 복잡하게 만들어서 원시코드를 알아보기 힘들게 하는 기술`,head:`* 분류: 배자제방 
- 배치 난독화: 실행 파일에 포함된 문자열 내용 교체 
- 자료 난독화: 자료 구조 변환 또는 암호화
- 제어 난독화: 제어 흐름을 바꾸어 역공학 방해
- 방지 난독화: 디컴파일러나 디버거, 분석도구 무력화`,remark:`* 주요기술 
- 심볼정보제거: 메소드와 변수 이름 변경하여 의미 파악 최소화
- 코드 암호화: 코드를 암호키와 해독키에 의해 암호화
- 제어 흐름 변환: 계산변환, 집합변환, 순서변환
- 순서섞기: 명령어의 순서 교체`,image:[]},{index:165,topic:"코딩오류",define:"- 설계 명세상의 누락이나 프로그래밍 기법상의 결함",head:"메모리 누수, 중복된 Free 선언, Null 사용, 별칭 남용, 버퍼오류, 동기화오류, 데드락",remark:null,image:[]},{index:166,topic:"코드스멜",define:"- 프로그램의 가독성을 저해시키고 중복된 로직을 포함하는 등 코드 품질을 저하시키는 요인들의 총칭",head:`중긴큰많두여기
중복된 코드, 긴 메소드, 큰 클래스, 너무 많은 인수, 두가지 이상의 이유로 수정되는 클래스, 여러 클래스를 동시에 수정, 기본데이터 타입 선호`,remark:null,image:[]},{index:167,topic:"리팩토링",define:`- SW 외부기능 변경없이 내부 로직만을 수정하여 유지보수 및 개발 생산성 향상 기법 

* 필요성 
- 디자인 개선, 이해도 향상, 오류발견 용이성 확보, 개발생산성 향상`,head:`* 기법 : 결응가
[ 결합도 측면 ]
- Move Method/Field: 타 클래스와 결합도가 높은 메소드/속성 이전 
- Extract Class: 여러 기능이 결합된 클래스는 개별 클래스로 분리
[ 응집도 측면 ] 
- Pull Up Method: 서브클래스에 같은 결과를 반환하면 슈퍼 클래스로 이전
- Pull Up Field: 서브클래스와 같은 속성을 사용하면 슈퍼 클래스로 이전 
- Push Down Method: 슈퍼클래스의 메소드가 서브 클래스만 사용한다면 서브클래스로 이동 
- Push Down Field: 슈퍼클래스의 속성이 서브 클래스만 사용한다면 서브클래스로 이동 
- Inline Class: 클래스가 하는 일이 많지 않은경우 다른 클래스로 옮기고 제거
[ 가독성 측면 ]
- Rename: 클래스나 메소드의 동작을 알수있도록 이름 변경
- 동리대코테`,remark:null,image:["static/images/cellImage_1044910612_83.jpg"]},{index:168,topic:"SW Metric",define:"McCabe 회전복잡도",head:"",remark:null,image:[]},{index:169,topic:"ITSM",define:"- 서비스를 이용하는 고객과 서비스 제공자 간에 서비스 수준을 협의하여 그 수준에 맞게 품질을 유지하도록 하는 IT 서비스 관리 기법/프레임워크",head:`ITSM 관리관점
: 프인기조
: 프로세스/인력/기술/조직

ITSM 유형
: ITIL, eSCM, ISO2000, SLA, CMMI`,remark:null,image:["static/images/cellImage_1044910612_84.jpg"]},{index:170,topic:"ITIL",define:"- IT 서비스의 제공 및 관리(ITSM: IT Service Management)를 위한 Best Practice 프로세스",head:`- Service Support : 서데이피씨알씨
ServiceDesk, Incident, Problem, Configuration, Release, Change
(인문변릴구)인시던트,문제관리,변경관리,릴리즈,구성관리
- Service Delivery : 서재용가연보
:서비스수준관리,재무관리,용량관리,가용성관리,연속성관리,보안관리`,remark:null,image:["static/images/cellImage_1044910612_85.jpg"]},{index:171,topic:"ITIL V2",define:`7개 영역
: 서비스지원,서비스딜리버리
- What to do
- ISO/IEC9000
- 해결에 집중
- Best Practice`,head:"",remark:null,image:[]},{index:172,topic:"ITIL V3",define:`5개 영역(전설전운지)
: 서비스전략,서비스설계,서비스전환,서비스운영,서비스 지속적 개선
- How to do
- ISO/IEC20000
- ROI 측정방안제시
- 해결과 예방에 집중
- Common Practice`,head:"",remark:null,image:["static/images/cellImage_1044910612_86.jpg"]},{index:173,topic:"ITIL V4",define:`- 2019년초 릴리즈된 ITIL의 최신 버전으로 데브옵스, 애자일, 린 접근을 포함한 실용적 지침 제공 모음집
- 근본적 변화 : "서비스 공급자와 고객이 항상 '함께 가치를 창출'하는 것"`,head:`- Service Value System:가거프지
: 다양한 조직 요소와 활동을 통합 및 조정하고 강력하고 통일되며 가치에 집중하는 방향성을 조직에 제시
- 관리 4차원 : 조정파가 
 1) 조직과 사람
 2) 가치 흐름과 프로세스 
 3) 파트너와 공급자
 4) 정보와 기술`,remark:null,image:[]},{index:174,topic:"ITIL V4",define:"",head:"",remark:null,image:["static/images/cellImage_1044910612_87.jpg"]},{index:175,topic:"ISO/IEC 20000",define:"- ITIL(IT Infrastructure Library) 기반으로 ITSM(IT Service Management)의 운영 및 관리 체계를 측정, 평가, 개선하기 위하여 제정한 국제 심사/인증 표준.",head:`딜컬릴해관 + PDCA
딜리버리,컨트럴,릴리즈,해결,관계
- 8대원칙: 고리전프경지의상
고객중심,리더십,전원참여,프로세스접근방법,경영접근방법,지속적,의사결정접근방법,상호유익한공급자관계`,remark:null,image:["static/images/cellImage_1044910612_88.jpg"]},{index:176,topic:"eSCM",define:"- 아웃소싱 전체 절차에 관한 93개 Best Practice를 체계화하여 업무개선 지침으로 활용하고, 제공업자의 능력수준을 평가할 수 있도록 만든 모델",head:`구성요소 : 조인사기지
- 조직관리,인원,사업,기술,지식경영
평가단계 : 최고측혁우
- 최초-고객요구사항 이행-측정통한관리-혁신통한관리-우수성유지`,remark:null,image:[]},{index:177,topic:"SW시각화",define:`SW의 비가시성을 극복함으로써 SW개발의 전체과정을 파악할수 있도록 하며 이를 통하여 SW품질향상을 실현하기 위한 방안

- 시각화, 문서화, 중기기업의 역량강화가 목표, SW품질향상`,head:"계획-수행-검증",remark:null,image:[]},{index:178,topic:"형상관리",define:`SW생명주기상 무결성 보장하기 위해 형상항목을 식별, 통제, 감사 및 기록하는 생명주기 지원 및 보호활동

- 식별->통제->감사->기록`,head:`식통감기
- 형상관리 단계별 기준선:기분설시제운
기능적,분배적,설계,시점,제품,운영
:계획-요구분석-설계-구현-시험-설치/운영
Git(분산형) vs. SVN(중앙집중형)`,remark:null,image:["static/images/cellImage_1044910612_89.jpg"]},{index:179,topic:"ITAM",define:"- 조직이 소유하고 있는  HW/SW 자산과 연계된 이력 변경 정보, 비용, 구매 및 생명주기에 대한 데이터를 관리하는 시스템 또는 기법",head:"",remark:null,image:[]},{index:180,topic:"SAM",define:`- SW 자산관리(SW Asset Management)
- 기업이 보유한 SW 자산을 라이프사이클 전체 단계에 걸쳐 효과적으로 관리, 통제, 보호하는데 필요한 모든 인프라 및 프로세스(OCG ITIL)`,head:"SW Inventory(자산현황), SW Metering(라이선스 실시간 추적), 응용 프로그램 제어, 소프트웨어 배포, 패치관리",remark:null,image:[]},{index:181,topic:"ISO/IEC 19770",define:"- SW 자산의 효율적 관리를 위해 프로세스 및 SW 식별 전자 태그 부착을 규정한 ISO 국제 표준",head:`프식라
구성요소 : 프로세스, SW 식별태그, SW 라이센서태그`,remark:null,image:[]},{index:182,topic:"ISO/IEC Guide51",define:"제품규격에 안전에 관한 규정을 도입하기 위한 기본적인 가이드라인",head:"",remark:null,image:["static/images/cellImage_1044910612_90.jpg"]},{index:183,topic:"SW안전규격",define:`IEC62304 : 의료기기, class ABC
DO-178C : 항공기, level EDCBA
IEC61508 : 안전관련시스템, sil 1234
ISO26262 : 자동차, ASIL ABCD`,head:"",remark:null,image:["static/images/cellImage_1044910612_91.jpg"]},{index:184,topic:"ㄴIEC61508",define:"- 전기(Electrical),전자(Electronic),프로그래머블 전자(ProgrammableElectronic)시스템에서 기능 안전(Functional Safety)을 보장하기 위한 국제 표준",head:`일전소정실가측

<SIL�(Safety�Integrity�Level)>
- IEC�61508에서 정의한 기능 안전(Functional�Safety)�기준
- 시스템이 안전 기능을 수행하는 동안 발생할 수 있는 위험을 줄이기 위한 신뢰성 수준
<SIL 등급 수준>�
- SIL�1 : 가장 낮은 안전 무결성 수준
- SIL�2 : 중간 수준의 안전 무결성
- SIL�3 : 높은 수준의 안전 무결성
- SIL�4 : 가장 높은 수준의 안전 무결성`,remark:null,image:["static/images/cellImage_1044910612_92.jpg"]},{index:185,topic:"ㄴISO26262(자동차 기능 안전 표준)",define:`- 자동차 전자·전기 시스템에서 기능 안전(Functional�Safety)을 보장하기 위한 국제 표준
- 자동차의 안전을 확보하기 위한 전기전자부품 및 시스템 개발절차에 대한 국제 규격`,head:`용기
구시하소생
지아가
반모`,remark:null,image:["static/images/cellImage_1044910612_93.jpg"]},{index:186,topic:"ㄴㄴASIL(AutomotiveSafetyIntegrityLevel,자동차 안전 무결성 수준)",define:"- 자동차 시스템에서 안전 기능이 고장 날 경우 발생할 위험성을 평가하고,필요한 안전성 수준을 결정하는 기준",head:`ASIL A->B->C->D(가장 높은 수준)
ASIL A:상대적으로 낮은 위험 수준의 시스템 
ASIL B:중간 수준
ASIL C:높은 수준
ASIL D:가장 높은 수준의 안전 요구사항 적용->ADAS`,remark:null,image:["static/images/cellImage_1044910612_94.jpg"]},{index:187,topic:"AUTOSAR",define:"자동차 제어기(ECU)에 공통으로 들어가는 SW에 대한 규격을 표준화하는 단체명, 표준규격 이름",head:`HW, SW의 분리, xml문서로 상호연결

* 명세서 유형
- SW-Component Description
- ECU� Resource� Description 
- System� Constraint� Description`,remark:null,image:[]},{index:188,topic:"전통적 위험 분석 기법",define:"",head:"",remark:null,image:["static/images/cellImage_1044910612_95.jpg","static/images/cellImage_1044910612_96.jpg"]},{index:189,topic:"ㄴETA(Event Tree Analysis)",define:`- 이벤트 가시화
- 시스템에서 발생한 초기 사건(Initiating Event) 이 연속적인 이벤트를 통해 시스템에 미치는 영향을 분석하는 기법(사건수 분석)`,head:"* 절차 : 초기 사전(원인) 식별->사건 트리 구성->각 분기점에서 시스템 반응 결정->결과 시나리오 분석->확률 분석 수행->개선 조치 도출",remark:null,image:[]},{index:190,topic:"ㄴFTA(Fault Tree Analysis)",define:`- 시스템의 위험 요인을 트리(Tree)�구조로 표현하여 분석하는 기법
- 시스템 오작동의 원인을 하위수준의 오작동 원인들의 부울식으로 분석해 나가는 하향식 분석기법`,head:`* 구성 :and(종모양), or(고깔), 기본사상, 사상(원), 연결기호
* 사례 : 시스템실패 > and > 실패1, 실패2 > or > 실패3, A, B, C, D 발생`,remark:null,image:["static/images/cellImage_1044910612_97.jpg"]},{index:191,topic:"ㄴFMEA(Failure Mode and Effect Analysis)",define:"고장의 원인이 시스템에 개입되는것을 방지하기 위해 고장모드와 영향을 정량적으로 분석하는 방법",head:`* 위험우선순위(RPN)
- RPN=심각도(S)*발생도(O)*검출도(D){각 10점 ,1000점 만점 평가)

* 유형
- 시스템 FMEA:시스템 전체 (하드웨어 +소프트웨어) 분석
- 설계 FMEA:설계단계에서 발생할 수 있는 문제 분석
- 제품 FMEA:개별 제품 및 부품 차원의 결함 분석

* 절차 : 위험분석(고장모드도출) > 위험평가(RPN) > 최적화(RPN에 따라 순위매김)`,remark:null,image:["static/images/cellImage_1044910612_98.jpg"]},{index:192,topic:"ㄴHAZOP(HAZard OPerability)",define:"- 시스템,�공정,�또는 제품에서 잠재적인 위험(Hazard)과 운전 문제(Operability�Issues)를 사전에 분석하는 기법",head:`- 가이드 워드(GuideWords)를 활용하여 예상치 못한 문제를 체계적으로 분석(위험 및 운전성 연구)

* 특징
:체계적 분석(가이드 워드 이용),예방적 접근,팀 기반 평가,연속 공정 중심 적용(화학, 석유, 플랜트 산업)

* 분석단계 절차 : 시스템 정의 및 범위 설정 > 노드 설정 > 가이드워드 적용 > 이상 상황 분석 및 영향평가 > 원인 분석 및 개선 조치 도출 > 문서화 및 지속적 개선

* HAZOP 평가 결과 도출 방식 : 편차,이탈,원인,결과,보호조치,개선조치 

* 가이드워드 : Moore,Less,No/None,Reverse,As well as,Other than`,remark:null,image:["static/images/cellImage_1044910612_99.jpg"]},{index:193,topic:"ㄴSTAMP",define:`- SW 관계 중심 분석기법
- 사고의 원인을 특정 기능이나 컴포넌트의 결함이 아닌 전체 시스템의 구성 및 제어문제로 접근하는 위험분석 모델`,head:"Controller > Actuator > Controlled Process > Sensor",remark:null,image:[]},{index:194,topic:"ㄴSTPA",define:`STAMP를 기반으로 하는 위험분석기법으로 시스템 생명주기 전 과정에 걸쳐 존재하는 잠재적 위험과 발생원인을 시스템의 상위수준에서 분석하는 기법

- 전통적위험분석의 한계로 등장
  -> 복잡한 인프라, HW제품의 다양화, SW논리적 복잡도`,head:"* 절차 : 사고및 위험정의 > Control Structure도출 > Unsafe Control Action 도출(4가지 UCA도출) > 원인시나리오도출",remark:`* Control Action 4가지 유형: 부재, 부적절, 제공시간.순서, 지속시간

* STPA의 활용 : ISO-26262, 항공, 의료 -> 국민 생명과 안전에 영향을 미치는 SW에 의무화 활용`,image:[]}],i={subject:e,topics:n};export{i as default,e as subject,n as topics};
