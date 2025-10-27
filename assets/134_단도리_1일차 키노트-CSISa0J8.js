const n="134_단도리_1일차 키노트",e=[{index:1,topic:"이산확률분포",define:[`1. 정수의 확률분포, 이산확률분포의 개요\r
 - 특정한 수치만을 가지는 확률변수(정수)를 확률로 표현한 분포\r
 -> 연속 확률 분포는 실수로 표현되는 분포이며 표준정규분포가 대표적이나 이산확률분포는 정수로 표현되며, 베르누이분포가 대표적임 \r
\r
2. 이산확률분포의 종류를 확률변수와 사례기반으로 설명`],remark:[],image:["static/images/keynote/excel_img_1760670102968_22.png","static/images/keynote/excel_img_1760670102969_23.png","static/images/keynote/excel_img_1760670102969_24.png","static/images/keynote/excel_img_1760670102969_25.png","static/images/keynote/excel_img_1760670102969_26.png","static/images/keynote/excel_img_1760670102970_27.png","static/images/keynote/excel_img_1760670102970_28.png","static/images/keynote/excel_img_1760670102970_29.png","static/images/keynote/excel_img_1760670102971_30.png","static/images/keynote/excel_img_1760670102971_31.png","static/images/keynote/excel_img_1760670102971_32.png","static/images/keynote/excel_img_1760670102971_33.png"]},{index:2,topic:"F1-Score와 F-Beta Score",define:[`1. 분류모델 평가, 혼동행렬의 개념 및 주요 평가 지표 설명\r
\r
\r
\r
\r
\r
\r
\r
 - 혼동행렬 개념: 분석모델에서 분류한 예측값(그룹 혹은 범주)과 실제값(그룹 혹은 범주)을 교차표 형태로 정리한 행렬\r
  (분할표 또는 오차행렬과 동의어로 분류 모델을 평가하기 위한 지표로 사용하는 성능평가 방법)\r
 - 주요 평가지표 : 정밀도(예측한 Postive 정답률), 재현율(실제 Potive의 정답률), F1-Score, F-Beta Score 등  \r
\r
2. F1-Score와 조화평균의 조정, F-Beta Score 설명\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 일반적으로 분류 모델의 진단은 혼동행렬의 정확도, 정밀도, 재현율을 사용`,"3. 분류 모델 주요 지표 계산 사례 제시"],remark:[],image:["static/images/keynote/excel_img_1760670102971_34.png","static/images/keynote/excel_img_1760670102971_35.png","static/images/keynote/excel_img_1760670102971_36.png","static/images/keynote/excel_img_1760670102972_37.png","static/images/keynote/excel_img_1760670102972_38.png"]},{index:3,topic:"GPU와 HBM(High Bandwidth Memory)",define:[`1. AX 시대의 고속연산 처리 HW, GPU와 HBM의 정의 \r
 - GPU : 초기 3D 그래픽 처리와 게임 렌더링을 목적으로 사용되었으나, 현재는 병렬 처리가 강력하여 딥러닝, 데이터 분석, 과학적 계산 등 다양한 분야에서 널리 사용되는 프로세서 \r
 - HBM : 높은 대역폭을 제공하며, 데이터 처리 및 전송 속도가 가장 빠른 메모리(고성능 그래픽, 인공지능, 고성능 컴퓨팅 (HPC) 등의 분야에서 활용) \r
-> HBM은 GPU와 같은 고성능 연산 장치에서의 병목현상을 줄이고 성능을 극대화하기 위해 개발된 메모리 기술 \r
\r
2. GPU와 HBM 아키텍처 및 주요 기술 설명  \r
  가. GPU와 HBM 아키텍처 설명  \r
\r
\r
\r
\r
\r
\r
\r
\r
\r
--> GPU 연산을 위해 HBM 사용시, 기존D램(GDDR5) 대비 30배 처리 성능 향상  \r
  나 GPU와 HBM의 핵심 기술 설명`,`GPU : 병렬 처리, 아키텍처(CUDA, 블랙웰 등), 레이트레이싱( 광선의 경로를 시뮬레이션), 메모리 관리 기술 \r
 HBM : 3D 메모리 스태킹 (3D Memory Stacking), 인터포저 (Interposer) \r
   ㄴ TSV (Through Silicon Via): 메모리 칩을 수직으로 쌓고 칩 사이에 얇은 금속 터널을 만들어 데이터 전송 속도를 높이는 기법\r
   ㄴCoW (Chip on Wafer): 웨이퍼 위에 칩을 붙이는 기법\r
   ㄴ TCB (Thermal Compression Bonding): TSV가 적용된 얇은 칩을 정밀하게 쌓아 올리는 패키징 기법  \r
--> AX 시대에 고성능 연산처리장치의 수요는 지속적 증가 예상 \r
3. 고성능 연산 처리 장치 활용분야 제시 \r
 - 고성능 그래픽: 고사양 게임, 가상현실 (VR), 증강현실 (AR) 등\r
 - 인공지능: 딥 러닝, 머신 러닝 등 \r
 - 고성능 컴퓨팅: 데이터 분석, 과학 계산 등`],remark:[],image:["static/images/keynote/excel_img_1760670102972_39.png","static/images/keynote/excel_img_1760670102972_40.png"]},{index:4,topic:"GoF(Gang of Four)가 제시한 디자인 패턴의 개념, 원칙 및 유형",define:[`1. 소프트웨어의 품질 향상, 디자인 패턴의 개념 \r
  - 등장배경 :  소프트웨어 개발환경의 반복적 문제 발생, 재사용 가능한 설계 필요성, 추상화 필요\r
  - 디자인패턴 : 객체지향 소프트웨어 설계에서 재사용을 높이기 위해 자주 사용되는 개발 패턴을 생성, 구조, 행위로 구분하여 개발자 측면에서 정의한 best practice \r
 -> 디자인 패턴은 자주 발생되는 소프트웨어 설계의 검증된 해결책을 제시하며, 이미 입증된 패턴들을 활용해 효율적인 문제해결을 지원함\r
 -> 설계자는 디자인 패턴을 적용하여 코드의 유지보수성 향상과 재사용성 확보가 가능하며, 코드의 품질수준 향상 가능\r
\r
2. GoF(Gang of Four)가 제시한 디자인 원칙 및 유형 설명\r
  가. 디자인 패턴의 원칙 상세 설명`,`나. 디자인 패턴의 유형 상세 설명 \r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 클래스 패턴 : 클래스들 간의 정적인 관계와 상속을 통해 구조를 정의, 객체 패턴: 객체들 간의 동적인 관계와 조합`,`3. 객체의 중앙집중적관리, Mediator Pattern 제시 \r
  - 각 객체가 관련성을 갖는 다른 객체에 대한 참조 관계를 직접 정의하기 보다, 독립된 다른 한 곳에 몰아서 관리를 용이하게 하는 패턴임`],remark:[],image:["static/images/keynote/excel_img_1760670102972_41.png","static/images/keynote/excel_img_1760670102973_42.png","static/images/keynote/excel_img_1760670102973_43.png"]},{index:5,topic:"선형회귀분석(Linear Regression Analysis)과 로지스틱회귀분석(Logistic Regression Analysis) 비교",define:[`1. 독립변수와 종속 변수의 선형관계 예측, 선형회귀분석과 로지스틱회귀분석의 개념 비교\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
- 선형회귀분석은 연속형 변수값 예측 목적이고, 로지스틱회귀분석은 0과 1사이의 확률값을 이용하여 범주형으로 분류하는 것이 목적임`,`2. 선형회귀분석과 로지스틱회귀분석의 상세 비교\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
- 독립변수와 종속변수의 특성에 맞게 회귀분석방법 선택 필요\r
3. 선형회귀분석과 로지스틱회귀분석의 사례 비교`],remark:[],image:["static/images/keynote/excel_img_1760670102973_44.emf","static/images/keynote/excel_img_1760670102973_45.png","static/images/keynote/excel_img_1760670102974_46.png","static/images/keynote/excel_img_1760670102974_47.png","static/images/keynote/excel_img_1760670102974_48.png","static/images/keynote/excel_img_1760670102974_49.emf"]},{index:6,topic:"CPU 스케쥴링 기법인 SRT(Shortest Remaining Time)와 SJF(Shortest Job First) 비교",define:[`1. 짧은 시간을 이용한, SRT와 SJF 개념 비교\r
- SRT : 잔여 실행시간이 가장 짧은 프로세스를 우선 처리하는 선점 스케쥴링 방식\r
- SJF : 준비큐 내의 실행시간이 가장 짧은 프로세스를 우선 처리하는 비선점 스케쥴링 방식\r
\r
2. 사례기반의 SRT와 SJF 상세 비교\r
- 공통점 : 단일 큐에서 활용, 짧은 실행시간 활용\r
- SRT : SJF 방식 + RR 방식`,`- SRT 기법과 SJF 기법은 둘 다 기아 현상이 발생할 수 있기 때문에 설계 시 고려 필요\r
\r
3. SRT와 SJF 기아 현상 해결 방안`],remark:[],image:["static/images/keynote/excel_img_1760670102974_50.png","static/images/keynote/excel_img_1760670102975_51.png","static/images/keynote/excel_img_1760670102975_52.png"]},{index:7,topic:"AI 신뢰성 인증(CAT, Certification of Artificial Intelligence)",define:[],remark:[],image:["static/images/keynote/excel_img_1760670102975_53.png","static/images/keynote/excel_img_1760670102976_54.png","static/images/keynote/excel_img_1760670102976_55.png","static/images/keynote/excel_img_1760670102976_56.png","static/images/keynote/excel_img_1760670102976_57.png"]},{index:8,topic:"소프트웨어 모듈화(Modularity)의 개념, 특징, 필요성, 유형",define:[`1. 효율적 프로그램 구성 지원, 소프트웨어 모듈화(Modularity)의 개념 및 특징\r
 - 개념 : SW개발에 있어 기능을 분할하고 추상화하여 소프트웨어의 성능을 향상시키고 유지보수를 효과적으로 하기 위한 SW설계 및 구현 기법\r
 - 특징\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> SW의 모듈화는 프로그램의 효율적인 관리 및 성능을 향상시키며 이해의 용이성 증대 및 복잡성 감소시키는 기법임\r
2. 소프트웨어 모듈화(Modularity)의 필요성 및 유형\r
가. 소프트웨어 모듈화(Modularity)의 필요성\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 모듈의 재사용성 증대로 개발 및 유지보수가 용이하며, 모듈화의 주요 특성으로 결합도(Coupling)와 응집도(Cohesion)가 있음`,`나. 소프트웨어 모듈화(Modularity)의 유형\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
- 소프트웨어 설계 및 구현 시 결합도는 낮을수록, 응집도는 높을수록 좋음\r
3. 소프트웨어 응집도와 결합도\r
\r
\r
\r
\r
\r
\r
 \r
\r
\r
- SW 개발비용과 모듈화의 관계를 파악하여 효율적인 리소스 관리와 성능 개선과 비용 절감으로의 연계 필요`],remark:[],image:["static/images/keynote/excel_img_1760670102977_58.png","static/images/keynote/excel_img_1760670102977_59.png","static/images/keynote/excel_img_1760670102977_60.png","static/images/keynote/excel_img_1760670102977_61.png"]},{index:9,topic:"하드 보팅(Hard voting)과 소프트 보팅(Soft voting)",define:[`1. 앙상블 학습 Voting의 분류, 하드 보팅과 소프트 보팅의 개념\r
 - 하드 보팅: 각 분류기의 예측을 모아서 가장 많이 선택 된 클래스를 예측 하는 것(직접투표 분류기)\r
 - 소프트 보팅: 모든 분류기가 클래스 확률을 예측할때, 개별 분류기의 예측을 평균내어 확률이 가장 높은 클래스를 예측하는 것(간접투표)\r
 -> scikit-learn에서 predict_proba() 함수를 사용하며, 소프트 보팅이 확률이 높은 투표에 비중을 두므로 더욱 성능이 좋고 일반적으로 쓰임\r
2. 하드 보팅과 소프트 보팅의 상세 설명\r
 가. 하드 보팅과 소프트 보팅의 예측 매커니즘\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 하드 보팅: 각 분류기가 최종 class를 딱 정하면 그게 더 많은 걸 최종 class로 결정\r
 -> 소프트 보팅: 각 분류기마다 각 Class의 확률을 정하고 그 확률들의 평균값이 큰 값을 최종 Class로 결정`,`나. 하드 보팅과 소프트 보팅 특징 설명\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 하드보팅은 의료 진단 시 여러 의사의 진단 결과 중 가장 많은 의견을 최종 진단으로 선택하며, 소프트보팅은 스팸 메일 필터링 시 여러 필터의 결과를 확률 기반으로 종합하여 스팸 여부 판단에 주로 사용됨\r
\r
 3. 로지스틱 회귀와 KNN 기반, 소프트 보팅 구현 사례 설명\r
 - voting='soft'가 소프트 보팅으로 한다는 뜻이며, 개별 분류기와 보팅분류기를 사용했을때, 보팅 분류기의 정확도가 더 높게 예측됨`],remark:[],image:["static/images/keynote/excel_img_1760670102977_62.png","static/images/keynote/excel_img_1760670102977_63.png","static/images/keynote/excel_img_1760670102978_65.png","static/images/keynote/excel_img_1760670102977_64.png"]},{index:10,topic:"분석과제 도출 방법론의 2가지 유형 비교",define:[`1. 데이터 분석과제 도출, 분석과제 방법론의 개요\r
 - 데이터 분석 이전에 해결해야 할 다양한 문제들을 데이터 분석 문제로 변환하여 분석 프로젝트로 수행할 수 있는 과제정의서로 도출하는 기법\r
 - 문제가 주어진 상태에서 답을 구하는 '하향식 접근법(Top Down Approach)'과 문제 정의가 어려울 경우 데이터를 활용하여 생각하지 못했던 의미와 패턴을 도출하고 시행착오를 통해 개선해 나가는 '상향식 접근법(Bottom Up Approach)'이 있음\r
\r
2. 분석과제 방법론의 2가지 유형 비교 설명\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
3. 최적의 의사결정을 위한 혼합방식 : 디자인 싱킹\r
 - 동적인 환경에서 발산과 수렴 단계를 반복적으로 수행하며 상호 보완을 통해 분석의 가치를 극대화\r
 - 하향식 접근 방식의 수렴(Converge) 단계 : 도출된 옵션을 분석하고 검증\r
 - 상향식 접근 방식의 발산(Diverge) 단계 : 가능한 옵션을 도출`],remark:[],image:["static/images/keynote/excel_img_1760670102964_2.png","static/images/keynote/excel_img_1760670102964_3.png","static/images/keynote/excel_img_1760670102965_4.png","static/images/keynote/excel_img_1760670102965_5.png","static/images/keynote/excel_img_1760670102965_6.png"]},{index:11,topic:"교착상태의 개념과 Wait-Die, Wound-Wait",define:[`1. 멀티프로세스 환경의 자원 무한대기, 교착상태의 개념\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
  - 다중 프로그램 환경에서 두 개 이상의 프로세스가 서로 상대방의 자원을 요구하면서 양쪽모두 작업수행을 할 수 없는 대기상태\r
  -> 비공유이고 비선점인 다수의 프로세스가 점유된 자원의 해제 없이 다른 프로세스의 자원에 대해 무한 대기(블루스크린)\r
  -> 교착상태 해결위해 교착상태의 예방,회피,발견,회복 조치가 필요하며, 회피방안에 Wait-Die Wound-Wait 가능\r
2. 교착상태의 회피기법, Wait-Die Wound-Wait의 개념\r
\r
\r
\r
\r
\r
\r
\r
\r
  - DBMS에서 타임 스탬프를 이용하여 트랜잭션의 동시성을 제어 할 때, 교착상태 회피를 위한 기법\r
  -> Wait-Die 기법은 환형대기 조건의 부정을 통해, Wound-Wait 기법은 비선점 조건의 부정을 통해 교착상태를 회피함\r
3. 교착상태 회피를 위한 실무적 고려사항 제언\r
  - Wait-Die, Wound-Wait 기법 모두 교착상태 회피는 가능 하지만, 종료/복귀 로직 떄문에 성능이 저하 될 수 있음\r
  - 따라서 트랜잭션이 자원을 이용하는 순서를 일치시켜서 교착상태를 회피하는 방법을 우선적으로 고려해야 함`],remark:[],image:["static/images/keynote/excel_img_1760670102967_15.png","static/images/keynote/excel_img_1760670102967_16.png","static/images/keynote/excel_img_1760670102967_17.png","static/images/keynote/excel_img_1760670102967_18.png"]},{index:12,topic:"리눅스에서 사용되는 스핀락(Spinlock)",define:[`1. 동기화 기법, 리눅스에서 사용되는 스핀락의 개념\r
  - 임계 구역에 진입이 불가능할 때 진입이 가능할 때까지 루프를 돌면서 재시도하는 방식으로 구현된 락킹(locking) 매커니즘 \r
  -> 스핀락은 문맥교환을 하지않아 짧은시간의 멀티코어 환경에 유리함\r
2. 스핀락의 동작 매커니즘 설명\r
   가. 스핀락의 동작 매커니즘 설명\r
\r
\r
\r
\r
\r
\r
\r
  \r
 \r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 스핀락은 바쁜대기(busy waiting) 방식으로 락부담이 적고 사용시간이 짧은 경우에 사용 필요`,`3. 스핀락의 코드 구현\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
  -> 문맥교환 없는 빠른처리 환경은 스핀락이 효과적이고, 상호배제만 필요한 경우 뮤텍스, 작업간 실행순서 동기화, 두개 이상의 프로세스/스레드가 critical section에 동작한다면 세마포어를 사용하는 것이 효과적임`],remark:[],image:["static/images/keynote/excel_img_1760670102968_19.png","static/images/keynote/excel_img_1760670102968_20.png","static/images/keynote/excel_img_1760670102968_21.png"]},{index:13,topic:"소프트웨어사업 영향평가",define:[`1. 민간 소프트웨어 시장 침해방지, 소프트웨어사업 영향평가의 개요\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 「소프트웨어 진흥법」 제43조(소프트웨어사업 영향평가) 근거(제외: 상용소프트웨어 구매, 국가안보 관련 사업)하며, 민간 소프트웨어 시장 경쟁력 확보, 공공과 민간의 중복 개발에 따른 예산낭비 방지, 공공과 민간의 불필요한 경쟁방지 목표를 가짐`,`2. 소프트웨어사업 영향평가의 상세 설명\r
  가. 영향평가 대상기관 및 영향평가 체계\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 소프트웨어 영향평가 대상 사업은 민간 소프트웨어 침해 가능성과 소프트웨어 사업 필요성, 공공성을 종합적으로 평가`,`나. 소프트웨어사업 영향평가 항목 및 평가결과\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 소프트웨어사업 영향평가는 소프트웨어 진흥법 시행령 제35조에 따라 제외사업도 규정되어 있음`,`3. 소프트웨어사업 영향평가 제외사업 설명\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 -> 2023년 10월 법개정으로 소프트웨어사업 영향평가의 시기는 입찰공고 30일전(긴급 10일전)으로 명확화됨`],remark:[],image:["static/images/keynote/excel_img_1760670102965_7.png","static/images/keynote/excel_img_1760670102966_8.png","static/images/keynote/excel_img_1760670102966_9.png","static/images/keynote/excel_img_1760670102966_10.png","static/images/keynote/excel_img_1760670102966_11.png","static/images/keynote/excel_img_1760670102966_12.png","static/images/keynote/excel_img_1760670102967_13.png","static/images/keynote/excel_img_1760670102967_14.png"]}],r={subject:n,topics:e};export{r as default,n as subject,e as topics};
