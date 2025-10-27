const e="기출문제",n=[{index:2,topic:"통계/분포",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_0.jpg","static/images/cellImage_1186147548_1.jpg","static/images/cellImage_1186147548_2.jpg","static/images/cellImage_1186147548_3.jpg","static/images/cellImage_1186147548_4.jpg"]},{index:3,topic:"통계/분포",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_5.jpg","static/images/cellImage_1186147548_6.jpg","static/images/cellImage_1186147548_7.jpg","static/images/cellImage_1186147548_8.jpg"]},{index:4,topic:"정규분포 (Normal Distribution)(= 가우스분포)(=Gaussian Distribution)",define:"126회 관리 1교시",head:`분포 곡선이 평균값을 중앙으로 하여 
좌우 대칭으로 종 모양을 이루는 분포`,remark:`좌우대칭, 연속확률, PDF, CDF
평균, 표준편차, 
기대값 E(X) = 최빈값 = 중앙값 = 평균(μ)
분산 Var(X)= σ², X ~ N(μ,σ²)
중심극한정리`,image:["static/images/cellImage_1186147548_9.jpg","static/images/cellImage_1186147548_10.jpg"]},{index:5,topic:"베르누이 분포 (Bernoulli Distribution)",define:"130회 관리 1교시",head:`단일한 베르누이 시행의 결과를 
나타내는  이산 확률 분포`,remark:`단일 베르누이 시행, 이산확률, 
PMF, CMF, X ~ B(1,p), 
기대값 E[X] = p, 분산 Var[X] = p(1-p)`,image:["static/images/cellImage_1186147548_11.jpg"]},{index:6,topic:"기하 분포 (Geometric Distribution)",define:"130회 관리 1교시",head:`처음으로 성공이 일어날 때까지의 
베르누이 시행 횟수의 분포`,remark:`처음 성공까지 시행횟수, 이산확률,
확률질량함수, X ~ Geo(p)
기대값 E[X] = 1/p, 분산 Var[X] = (1-p)/p2`,image:["static/images/cellImage_1186147548_12.jpg"]},{index:7,topic:"이항 분포 (Binomial Distribution)와 포아송 분포(Poisson Distribution) 비교",define:"135회 관리 4교시",head:`[이항분포]
성공률이 p인 베르누이 시행을 n번 시행했을 때의 확률분포

[포아송분포]
단위 시간 또는 공간 내 어떤 사건이 발생하는 횟수를 나타내는 이산확률분포`,remark:null,image:["static/images/cellImage_1186147548_13.jpg","static/images/cellImage_1186147548_14.jpg","static/images/cellImage_1186147548_15.jpg"]},{index:8,topic:"표본 (Sampling)",define:"127회 관리 1교시",head:`전체 모집단에 대해 샘플링을 통해 
얻어지는 확률 실험 결과 값들`,remark:`샘플링, 랜덤성, 대표성, 실험 값
확률 추론, 모집단 검정
판단 Judgement, 랜덤 Random, 
독립Independent, 종속 Dependent`,image:["static/images/cellImage_1186147548_16.jpg","static/images/cellImage_1186147548_17.jpg"]},{index:9,topic:"점추정 (Point Estimation)",define:"132회 관리 1교시",head:`모집단의 모수를 하나의 값으로 
추정하는 과정`,remark:`하나의 값 => 모집단 추정 
추정량선택(불편성, 충분성, 효율성, 
유효성)
방식(베이지안, 적률법, 최대가능도)
MSE, RMSE, LSM, MLE, MME`,image:["static/images/cellImage_1186147548_18.jpg"]},{index:10,topic:"> 불편추정량 (Unbiased Estimator)",define:"127회 관리 1교시",head:`어떤 통계량의 기대값이 모수에 
일치하는 통계량`,remark:`표본 기대값 = 모수, 편향 0
표본 평균, 표본 분산, 표본 표준편차
좋은 추정량 선택, 점추정`,image:["static/images/cellImage_1186147548_19.jpg","static/images/cellImage_1186147548_20.jpg"]},{index:11,topic:"구간추정 (Interval Estimation)",define:"132회 관리 1교시",head:`일정 확신으로 모수가 포함될 구간을 
추정하는 것`,remark:`신뢰구간, 신뢰수준,
작은 오차범위, 짧은 신뢰구간`,image:[]},{index:12,topic:"중심극한정리 (Central Limit Theorem)",define:"132회 관리 2교시",head:`표본의 크기가 크면 표본평균의 
확률분포는 정규 분포를 보인다는 
정리`,remark:`충분한 표본 크기 , 모집단 분포 무관
표본평균 분포 => 정규분포`,image:[]},{index:13,topic:"t-검정 (t-test)(=Student's t-test)",define:`131회 관리 1교시
132회 관리 2교시`,head:`모집단의 분산 또는 표준편차를 
모르는 경우 모평균 검정을 위해 
사용되는 방법`,remark:`가설검정, t-분포, t-value,
모집단 분산/표준편차 모름
적은 표본크기, 두 집단 평균차이
독립표본, 대응표본
student, welch, 양측검정, 단측검정`,image:["static/images/cellImage_1186147548_21.jpg","static/images/cellImage_1186147548_22.jpg"]},{index:14,topic:"> 독립표본 t-검정 (Independent t-test)",define:"131회 관리 1교시",head:`서로 다른 독립된 두 집단으로부터의 
검정 방법`,remark:`독립성, 정규성, 등분산성
서로 다른 두 집단, t-검정`,image:["static/images/cellImage_1186147548_23.jpg"]},{index:15,topic:"> 대응표본 t-검정 (Paired t-test)",define:"131회 관리 1교시",head:`하나의 모집단 내부의 
두 집단으로부터 검정`,remark:`정규성, 하나의 모집단 내부 두 집단,
t-검정`,image:["static/images/cellImage_1186147548_24.jpg"]},{index:16,topic:"z-검정 (z-test)",define:"132회 관리 2교시",head:`표본의 크기가 크며 정규분포를 따를 
경우에 많이 사용하는 통계적 검정`,remark:`큰 표본크기, 정규분포, 
분산/표준편차 알고있음
Z = (X - μ)/σ`,image:["static/images/cellImage_1186147548_24.jpg"]},{index:17,topic:"오차의 등분산성(Homoscedasticity)",define:"135회 관리 2교시",head:`- 회귀모델에서 오차의 분산이 일정하다는 가정
- 예측값에 관계없이 오차의 크기가 동일하게 분포되어 있어야 한다는 것`,remark:`- 선형회귀 추정량의 효율성 보장
- 신뢰구간과 가설검정의 정확성 확보
- 예측의 일관된 정확도 유지`,image:["static/images/cellImage_1186147548_25.jpg"]},{index:18,topic:"다중공선성 (Multicollinearity)",define:"132회 관리 1교시",head:`회귀분석에서 독립변수들 간에 
강한 상관관계가나타나는 문제`,remark:`ρ(Xi, Xj) ≈ ±1
확인(산포도, 상관계수, 허용/공차, 
분산팽창지수(VIF >=10))
해결(무시, 변수제외, 변수통합, 
FA, PCA, Ridge)`,image:["static/images/cellImage_1186147548_26.jpg"]},{index:19,topic:"빅데이터 분석",define:`126회 관리 1교시
128회 관리 1교시`,head:`데이터들로부터 인사이트를 수집, 
처리, 파생하는데 사용되는 방법, 
도구 및 애플리케이션`,remark:`인사이트 
상관관계, 인과관계
도구(R, Hadoop)`,image:[]},{index:20,topic:"> 상관관계(Correlation)",define:"128회 관리 1교시",head:"두 변수간 상관관계",remark:"상관성, 유형(음, 양, 제로)",image:["static/images/cellImage_1186147548_27.jpg"]},{index:21,topic:"> 인과관계(Causation)",define:"128회 관리 1교시",head:"원인과 결과 관계",remark:"원인 -> 결과, 유형(직접,간접, 상호, 의사)",image:[]},{index:22,topic:"빅데이터 플랫폼 아키텍처 설계",define:"126회 관리 2교시",head:`빅데이터 수집, 저장, 처리, 분석, 
품질 관리를 할 수 있는 플랫폼 설계`,remark:`프로세스 (인프라 구조 규격서 
-> 인프라 -> 데이터 -> 입출력)`,image:[]},{index:23,topic:"데이터 시각화 (Data Visualization)",define:"131회 관리 2교시",head:`차트, 그래프와 같은 시각적 요소를 
사용해 데이터를 표시하는 프로세스`,remark:`유형(시각, 비교, 관계, 분포, 공간)
구축(기획 > 디자인 > 시각화 > 배포)
원리(간결, 상호작용, 정확, 색상효율)
사례(차트, 그래프, 히스토그램)
데이터시각화, 정보시각화, 인포그래픽
ELK(Kibana)`,image:["static/images/cellImage_1186147548_28.jpg","static/images/cellImage_1186147548_29.jpg"]},{index:24,topic:"데이터 시각화 절차, 도구(Data Visualization)",define:"135회 관리 4교시",head:`- 대량의 데이터를 시각적으로 표현하고 해석하는 과정
- 빅데이터의 복잡성과 다양성을 이해하고, 관련 인사이트를 빠르게 도출하며 의사 결정에 도움을 주는 중요한 도구`,remark:null,image:["static/images/cellImage_1186147548_30.jpg","static/images/cellImage_1186147548_31.jpg","static/images/cellImage_1186147548_32.jpg"]},{index:25,topic:"결측값 (Missing Value)",define:"126회 응용 1교시",head:`수집된 데이터 셋 중 관측되지 않은 
특정 확률변수의 값`,remark:`표현(NA, None, NaN, Null)
유형(MCAR, MAR, MNAR)
해결(Deletion, Imputation)`,image:["static/images/cellImage_1186147548_33.jpg","static/images/cellImage_1186147548_34.jpg"]},{index:26,topic:"NoSQL (=Not Only SQL)(=Non-Relational Operational Database)",define:`126회 관리 1교시
127회 관리 1교시
128회 관리 1교시
131회 응용 1교시
133회 관리 1교시`,head:`RDBMS 한계극복, 대량의 데이터, 
분산 처리 등이 가능한 비관계형
데이터베이스`,remark:`비관계형, 
BASE(가용성, 소프트상태, 최종 일관성)
모델/유형(Key-Value, Document, Graph)
이론(CAP, PACELE)
사례(HBase, Casandra, MongoDB)
모델링(도메인모델 > 쿼리디자인 > 
패턴모델링 > 최적화)`,image:["static/images/cellImage_1186147548_35.jpg"]},{index:27,topic:"> CAP (Consistency, Availability, Partition tolerance)",define:`126회 관리 1교시
131회 응용 1교시`,head:`일관성, 가용성 및 분할 내성 중  
두 가지만 만족할 수 있다는 정리`,remark:`일관성, 가용성, 분할내성 중 두 가지 만족
CA(RDBMS), AP(Casandra), CP(MongoDB)
한계개선(PACELC), 분산시스템`,image:["static/images/cellImage_1186147548_36.jpg"]},{index:28,topic:"> PACELC(Partition Availability Consistency Else Latency Consistency)",define:"126회 관리 1교시",head:`CAP 이론의 한계 극복 위해 네트워크 
장애 상황과 정상 상황으로 나누어서 
설명하는 이론`,remark:`CAP이론 한계 보완
partition 상황, else 상황
PA-EC(mongoDB), PA-EL(casandra)`,image:["static/images/cellImage_1186147548_37.jpg"]},{index:29,topic:"> MongoDB",define:"127회 관리 1교시",head:`문서를 활용해 다양한 데이터 형식을 
처리하고 저장하는  NoSQL DB`,remark:`NoSql (Document)
CP, PA-EC
Schemaless, Json, Chunk, Sharding
Scale-out, Replication, 
Mongos, Config Server, Mongod`,image:["static/images/cellImage_1186147548_38.jpg"]},{index:30,topic:"데이터 마이닝 (Data Mining)",define:`129회 관리 3교시
130회 관리 4교시`,head:`대규모로 저장된 데이터 안에서 
규칙이나 패턴을 분석하여 
가치있는 정보 추출 과정`,remark:`가치있는 정보 
기법(연관규칙, 군집화, 예측모델링)
절차(데이터 선택 > 준비 > 변환 >  마이닝 
> 결과)
방법(CRISP-DM, SEMMA)`,image:["static/images/cellImage_1186147548_39.jpg"]},{index:31,topic:"> 오피니언 마이닝 (Opinion Minig)",define:"129회 관리 3교시",head:`긍정, 부정 등 감정에 대해 분석하고, 
원인을 도출하는 마이닝`,remark:`감성분석, 자연어처리, 시맨틱분석
절차(정보추출 > 문장분석 > 요약/결과)`,image:[]},{index:32,topic:"> 음성데이터 마이닝",define:"130회 관리 4교시",head:`화자의 음성 내용을 처리하여 감성, 
의견 등에 대한 가치있는 정보를 
추출하는 과정`,remark:`음성, 자연어, 음향 모델링, 시계열, 
STT, TTS, Codec, ADC
활용(AICC, AI스피커, VOC)`,image:[]},{index:33,topic:"AHP (Analytic Hierarchy Process)",define:"130회 관리 1교시",head:`상호 배타적인 대안들을 체계적으로 
평가하여 우선. 순위를 도출하는 
의사결정방법`,remark:`상호배타, 대안평가
절차(계층구조, 비교행렬 > 가중치 
> 일관성 > 우선순위)`,image:["static/images/cellImage_1186147548_40.jpg","static/images/cellImage_1186147548_41.jpg","static/images/cellImage_1186147548_42.jpg"]},{index:34,topic:"ELK (Elasticsearch Logstash Kibana)",define:"132회 관리 1교시",head:`Elastic, Logstash 등을 이용하여 
데이터를 수집하고 분석하는 도구`,remark:"Beats > Logstash > Elasticsearch > Kibana",image:["static/images/cellImage_1186147548_43.jpg","static/images/cellImage_1186147548_44.jpg"]},{index:35,topic:"기계학습 / 딥러닝",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_45.jpg","static/images/cellImage_1186147548_46.jpg","static/images/cellImage_1186147548_47.jpg","static/images/cellImage_1186147548_48.jpg","static/images/cellImage_1186147548_49.jpg"]},{index:36,topic:"기계학습 / 딥러닝",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_50.jpg","static/images/cellImage_1186147548_51.jpg"]},{index:37,topic:"머신러닝 최적화 알고리즘 (Optimization Algorithm)",define:`126회 관리 1교시
130회 관리 1교시
132회 관리 1교시`,head:`오차 최소 등을 위해 파라미터,
경로, 모델 등을 조정하여 성능을 
최적화하는 알고리즘`,remark:`최적화, 오차최소, 정확도 향상
알고리즘 유형 (SGD, Momentum, Adam, 
RMSProp, Batch, Mini-Batch)
NW최적화(Quantization, Pruning)
효율적관리(메타휴리스틱, 휴리스틱)
파라미터최적화(베이지안, Grid Search, 
Random)`,image:["static/images/cellImage_1186147548_52.jpg","static/images/cellImage_1186147548_53.jpg"]},{index:38,topic:"> 메타휴리스틱스 (Metaheuristics)",define:"126회 관리 1교시",head:`최적화 문제 (해 탐색 또는 학습)를 
제한된 시간과 자원으로 효율적으로 
풀기 위한 알고리즘`,remark:`범용성, 보편성, NP해결, Global 최적화
근접최적성(POP), 동적계획법
유형(Genetic, Tabu, Ant, Natually, Local)`,image:["static/images/cellImage_1186147548_54.jpg","static/images/cellImage_1186147548_55.jpg","static/images/cellImage_1186147548_56.jpg"]},{index:39,topic:"> 베이지안 최적화 (Bayesian Optimization)",define:"132회 관리 1교시",head:`베이지안 정리를 이용하여 
하이퍼 파라미터를 최적화하는 방법`,remark:`하이퍼파라미터 최적화, 베이지안 정리
Surrogate Model, Acquisition Function`,image:["static/images/cellImage_1186147548_57.jpg","static/images/cellImage_1186147548_58.jpg"]},{index:40,topic:"과적합 (Overfitting)",define:`127회 관리 1교시
128회 응용 4교시`,head:`학습 데이터를 과하게 학습하여 실제
모델에서는 성능저하 발생하는 현상`,remark:`원인(Model Capacity)
해결(Drop-out, Regularization, 
Early stopping, Cross Validation)`,image:["static/images/cellImage_1186147548_59.jpg"]},{index:41,topic:"> 교차검증 (Cross Validation)",define:"128회 응용 4교시",head:`데이터를 여러 부분으로 나누고, 
각 부분을 훈련과 테스트 용도로 
번갈아 사용하여 모델 평가 방법`,remark:`Training, Validation, Test
유형(K-Fold, Stratified K Fold, LOOCV, 
Hold Out), Overfitting / Underfitting 감소`,image:["static/images/cellImage_1186147548_60.jpg","static/images/cellImage_1186147548_61.jpg","static/images/cellImage_1186147548_62.jpg"]},{index:42,topic:"데이터 차원 축소 (Data Dimensionality Reduction)",define:"131회 관리 1교시",head:`고차원의 데이터에 있는 의미 있는 
특성은 유지하면서 저차원의 
데이터로 변환 기법`,remark:`차원의 저주 해결, 다중공선성 해결, 
과적합 감소, 정보손실
방법(PCA, LDA, NMF, SVD, t-SNE, 
Feature Extraction, Feature Selection)
활용(SOM)`,image:["static/images/cellImage_1186147548_63.jpg"]},{index:43,topic:"인공지능 성능 관련 차원의 저주(Curse of Dimensionality)",define:"135회 응용 1교시",head:"기존 있는 데이터의 양을 포함하는 차원이 증가 할 수록, 데이터의 부족으로 인해 Overfitting등의 문제로 모델의 성능이 떨어지는 현상  (데이터의 품귀 현상)",remark:`차원의 저주 특징
- 기하급수적 증가
- Sparsing : 데이터 밀도는 차원증가에 따라 희박해짐
- 고차원에서 발생`,image:["static/images/cellImage_1186147548_64.jpg","static/images/cellImage_1186147548_65.jpg","static/images/cellImage_1186147548_66.jpg"]},{index:44,topic:"앙상블 (Ensemble)",define:"126회 관리 3교시",head:`서로 다른 여러 학습 모델을 사용하여 
성능 향상 방법`,remark:`성능, 예측 향상
유형(배깅, 부스팅, 부트스트랩, 
보팅, 스태킹, 랜덤포레스트)
Homogeneous, Heterogeneous
Sequential, Parallel`,image:["static/images/cellImage_1186147548_67.jpg","static/images/cellImage_1186147548_68.jpg","static/images/cellImage_1186147548_69.jpg"]},{index:45,topic:"> 배깅 (Bagging)",define:"126회 관리 3교시",head:`서로 다른 하위 집합에 대해 여러 
독립 모델을 학습하고 모델의 예측을 
결합하여 최종 예측을 만드는 것`,remark:`Bootstrap, 분산감소, Homogenious, 
병렬처리, Voting
Random Forest`,image:["static/images/cellImage_1186147548_70.jpg","static/images/cellImage_1186147548_71.jpg"]},{index:46,topic:"> 부스팅 (Boosting)",define:"126회 관리 3교시",head:`여러 약한 모델을 결합하여 정확도가 
향상된 강력한 모델을 형성하는 
반복 알고리즘`,remark:`편향 / 분산 감소, 가중치 , Homogenious,
순차처리, Voting
XGBoost, AdaBoost`,image:["static/images/cellImage_1186147548_72.jpg"]},{index:47,topic:"인공지능",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_73.jpg","static/images/cellImage_1186147548_74.jpg","static/images/cellImage_1186147548_75.jpg","static/images/cellImage_1186147548_76.jpg"]},{index:48,topic:"인공지능 학습용 데이터",define:`126회 관리 3교시
128회 관리 2교시
131회 관리 3교시
134회 관리 1교시`,head:`머신러닝, 딥러닝 등 AI 모델 학습을 
위해 활용되는 데이터를 총칭`,remark:`원본 데이터 + 레이블링 데이터
목적(학습, 검증, 테스트)
구축(데이터획득, 라벨링, 기존 데이터)
증강데이터, 합성데이터`,image:["static/images/cellImage_1186147548_77.jpg","static/images/cellImage_1186147548_78.jpg"]},{index:49,topic:"> 이미지 데이터 어노테이션 (Image Data Annotation)",define:"134회 관리 1교시",head:`이미지 데이터 셋에 메타 데이터 등을 
추가하여 주석 등을 달아주는 작업`,remark:`메타데이터, 설명
유형(바운딩박스, 폴리곤, 폴리라인, 
포인트, 큐보이드, 세그멘테이션)`,image:["static/images/cellImage_1186147548_79.jpg"]},{index:50,topic:"> 인공지능 학습용 데이터 품질관리",define:`128회 관리 2교시
131회 관리 3교시`,head:`인공지능 학습용 데이터의 품질을 
위해 조직, 절차, 품질기준, 방법 등을 
정의하여 점검 및 조치 활동`,remark:`프로세스(준비 > 구축 > 활용)
지표(구축공종, 데이터 적합성, 
데이터 정확성, 학습모델)`,image:[]},{index:51,topic:"벤치마크 데이터셋",define:"129회 응용 4교시",head:`공통된 기준으로 인공지능 정확도를 
평가하고 경쟁할 수 있는 데이터셋`,remark:`공통기준, 정확도 평가 
유형(GLUE, KLUE, KorQuAD)
성능 객관성 확보, 리더보드`,image:["static/images/cellImage_1186147548_80.jpg"]},{index:52,topic:"SNN (Spiking Neural Network)",define:"126회 관리 1교시",head:`뉴런과 뉴런 사이의 스파이크가 
가지는 시간적인 개념을 적용한 
신경망 모델`,remark:`spiking, 이산정보, 저전력, 이벤트기반, 
비동기적, 적용형 자가수정, STDP
스파이크데이터, 역전파 어려움
활용(뉴로모픽 칩)`,image:["static/images/cellImage_1186147548_81.jpg","static/images/cellImage_1186147548_82.jpg"]},{index:53,topic:"얼굴정보처리 기술",define:"126회 응용 2교시",head:`얼굴 데이터 및 인공지능을 이용하여 
처리하는 기술`,remark:`기술(HOG, YOLO)
유형(얼굴인식, 복원)`,image:[]},{index:54,topic:"YOLO 모델",define:"126회 응용 2교시",head:`1-stage detector 방식으로 실시간으로 
객체 검출을 가능하게 한 모델`,remark:`One-stage Detector, 속도가 빠름, 정확성 
문제, SxS그리드
bounding box + confidence 와 class 동시`,image:["static/images/cellImage_1186147548_83.jpg","static/images/cellImage_1186147548_84.jpg","static/images/cellImage_1186147548_85.jpg"]},{index:55,topic:"CNN (Convolutional Neural Network)",define:"128회 응용 1교시",head:`convolution, polling 등을 이용하여 
이미지 등을 처리하는 알고리즘`,remark:`layer(convolution, polling, fully connected)
kernel, filter, stride, padding
pooling(max pool, min pool, average pool)`,image:["static/images/cellImage_1186147548_86.jpg"]},{index:56,topic:"연합학습 (Federated Learning)",define:"128회 관리 3교시",head:`분산된 기기에서 직접 학습을 
수행하는 분산 학습 방법`,remark:`글로벌 모델, 로컬 모델, 분산학습
알고리즘(FedSGD, FedAvg)
활용(동형암호, FedGF, 
안전한 다자간계산, 차등정보보호)
수평연합, 수직연합, 전이연합`,image:["static/images/cellImage_1186147548_87.jpg","static/images/cellImage_1186147548_88.jpg","static/images/cellImage_1186147548_89.jpg"]},{index:57,topic:"오토인코더 (AutoEncoder)",define:"131회 응용 1교시",head:`해당 입력 데이터를 최대한 압축한 후 
다시 본래의 입력 형태로 복원 
시키는 신경망`,remark:`encoder = decoder, 
잠재변수, 손실재구성, 차원축소
Unsupervised Learning
목적(Manifold learning, 
Generative model learning)
유형(sparse, denosing, vae, stack, 
convolutional)
활용(이상탐지)`,image:["static/images/cellImage_1186147548_90.jpg"]},{index:58,topic:"VAE(Variational Auto Encoder)",define:"135회 관리 1교시",head:`오토인코더의 잠재공간의 보간문제를 해결하기 위해 가우시안 노이즈를 추가
하여 개선한 비지도 인공지능 모델`,remark:null,image:["static/images/cellImage_1186147548_91.jpg","static/images/cellImage_1186147548_92.jpg","static/images/cellImage_1186147548_93.jpg"]},{index:59,topic:"전이학습 (Transfer Learning)",define:`131회 응용 1교시
132회 응용 1교시`,head:`한 작업에 대해 훈련된 모델을 사용해 
유사한 작업을 수행하는 모델의 
기초로 활용하는 방법`,remark:`기존학습 + 미세조정
Knowledge Transfer, Downstream
유형(domain, multi task, fine tuning)`,image:["static/images/cellImage_1186147548_94.jpg","static/images/cellImage_1186147548_95.jpg"]},{index:60,topic:"> 파인튜닝 (Fine-Tuning)",define:"132회 응용 1교시",head:`기존에 훈련된 AI 모델을 특정한 
작업 및 목적에 맞게 재훈련하여 
성능을 향상시키는 과정`,remark:`pre-train+새로운 데이터셋, 도메인중심
방식(PEFT, DoRa, LoRa)
model-drift 주의
유형(모델전체, 모델일부, 학습없이)
파운데이션모델, 전이학습`,image:["static/images/cellImage_1186147548_96.jpg","static/images/cellImage_1186147548_97.jpg","static/images/cellImage_1186147548_98.jpg"]},{index:61,topic:"PLM (Pre-Trained Language Model)",define:"133회 관리 2교시",head:`이미 학습이 완료되어 출력 및 결과 
출출이 가능한 자연어 모델`,remark:`이미 학습된 모델, pre-trained, corpus
활용(LLM), BERT, GPT-3`,image:["static/images/cellImage_1186147548_99.jpg"]},{index:62,topic:"RAG (Retrieval Augmented Generation)",define:`134회 관리 1교시
135회 응용 1교시`,head:`대규모 언어 모델의 한계를 극복하기 
위해 제안된 새로운 자연어 처리 기술`,remark:`LLM한계보완, 검색증강, inference, 
vector DB, 임베딩, 
outdated knowledge 감소
초기설정(Retriever, Generator, 
parametric knowledge, non parametric 
knowledge)
모델(Rag-Sequence, Rag-Token)
단계(indexing, Retrieval, Generation)
유형(Naive RAG, Advanced RAG, 
Modular RAG)`,image:["static/images/cellImage_1186147548_100.jpg","static/images/cellImage_1186147548_101.jpg"]},{index:63,topic:"RAG (Retrieval Augmented Generation)",define:`134회 관리 1교시
135회 응용 1교시`,head:"대규모 언어 모델에서 질문에 대한 답변이나 텍스트를 생성하기 전에 광범위한 문서 집합에서 관련 정보를 검색하고 응답을 생성하는 기법",remark:"① 인덱싱, Vector DB 사용 ② 생성 모델 결합  ③ 외부정보이용, 검색 모델",image:["static/images/cellImage_1186147548_102.jpg","static/images/cellImage_1186147548_103.jpg"]},{index:64,topic:"RAG (Retrieval Augmented Generation)",define:`134회 관리 1교시
135회 응용 1교시`,head:"",remark:null,image:["static/images/cellImage_1186147548_104.jpg"]},{index:65,topic:"귀납적사고 (Inductive Reasoning)",define:"128회 관리 2교시",head:`특정 사례들로부터 일반적인 규칙, 
패턴을 추론하는 방법`,remark:`사례/데이터 -> 결론/일반화 추론
귀납적 학습, 기계학습`,image:["static/images/cellImage_1186147548_105.jpg"]},{index:66,topic:"기계학습 (Machine Learning)",define:`128회 관리 1교시
128회 관리 2교시
131회 관리 1교시
134회 관리 1교시`,head:`컴퓨터가 스스로 학습할 수 있도록 
도와주는 알고리즘이나 기술을 
개발하는 분야`,remark:`유형(지도, 비지도, 강화)
분류성능(Accuracy, Precision, Recall, 
F1 Score, ROC, AUC)
회귀성능(MAE, MAPE, MSE, RMSE)
군집성능(Dunn Index, Silhouette 
coefficient, Elbow, Rand Index)`,image:["static/images/cellImage_1186147548_106.jpg","static/images/cellImage_1186147548_107.jpg"]},{index:67,topic:"딥러닝 (Deep Learning)",define:`131회 관리 1교시
133회 관리 3교시`,head:`인간의 뇌 작동 원리를 모방한 
인공신경망을 토대로 학습과 
데이터 처리를 수행하는 기술`,remark:`은닉층 여러 개, 블랙박스
인공신경망, 기계학습
알고리즘(DNN, RBN, CNN, RNN)`,image:["static/images/cellImage_1186147548_108.jpg"]},{index:68,topic:"피드포워드 뉴럴 네트워크 (Feedforward Neural Network)",define:"133회 관리 3교시",head:`입력값이 출력까지 한 방향으로 
전달되는 구조를 가진 인공 신경망`,remark:`입력 -> 출력, 순방향
다층 퍼셉트론,`,image:[]},{index:69,topic:"역전파 (Backpropagation)",define:"133회 관리 3교시",head:`신경망의 각 노드가 가지고 있는 
가중치와 편향을 학습시키기 위한 
알고리즘`,remark:`loss function 최소, 가중치 수정, 미분,
chain rule, 경사하강법`,image:["static/images/cellImage_1186147548_109.jpg"]},{index:70,topic:"활성화 함수 (=Activation Function)(=Non-Linear Function)",define:"133회 관리 3교시",head:`입력 신호의 총합을 출력 신호로 
변환하는 함수`,remark:`출력신호 변환, 비선형
유형(항등, 계단, sigmoid, tanh, relu, gelu)`,image:["static/images/cellImage_1186147548_110.jpg","static/images/cellImage_1186147548_111.jpg"]},{index:71,topic:"모델옵스 (Modelops)",define:`127회 관리 1교시
128회 관리 1교시`,head:`기계 학습, 지식 그래프, 규칙, 최적화, 
언어 및 에이전트 기반 모델(Gartner)`,remark:`DataOps+DevOps, MLOps
학습모델 자동화, 운영자동화, 생명주기
관리
절차(이해 > 준비 > 모델 > 평가 > 배포 
> 모니터)`,image:["static/images/cellImage_1186147548_112.jpg"]},{index:72,topic:"DSML (Data Science & Machine Learning)",define:"130회 관리 2교시",head:`데이터 사이언스와 머신러닝을 
활용하여 데이터에서 가치를 
창출하고 예측모델을 구축하는 
프로젝트`,remark:`생명주기(계획 > 환경 > 모델 > 배포)
프로세스(획득, 구성, 분석, 전달)`,image:[]},{index:73,topic:"MLOps",define:"130회 관리 2교시",head:`프로덕션 환경에서 머신러닝 모델을 
안정적이고 효율적으로 배포 및 
유지 관리하는 모델`,remark:`ML + DevOps
ML Life Cycle, ML 파이프라인, Modelops
단계(수동 > ML 파이프라인 자동화 > 
CI/CD 파이프라인 자동화)
기능(Experimentation, Data Processing, 
Model Training, Model Evaluation, 
Model Serving, Online Experimentation)`,image:["static/images/cellImage_1186147548_113.jpg","static/images/cellImage_1186147548_114.jpg","static/images/cellImage_1186147548_115.jpg"]},{index:74,topic:"온디바이스 AI",define:`127회 관리 2교시
134회 응용 1교시`,head:`데이터를 외부 서버에 전송하지 않고
디바이스 자체적으로 AI연산을 
수행하는 기술`,remark:`디바이스 자체 처리
고수준 HW, SW
HW(NPU, 뉴로모픽 칩)
SW(경량 AI, AI 모델 경량화)
sLLM`,image:["static/images/cellImage_1186147548_116.jpg","static/images/cellImage_1186147548_117.jpg","static/images/cellImage_1186147548_118.jpg"]},{index:75,topic:"CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart)",define:"128회 응용 1교시",head:`기계는 인식할 수 없으나 사람은 쉽게 
인식할 수 있는 텍스트, 이미지를 통해 
사람과 기계를 구별하는 프로그램`,remark:`문자, 이미지 인식, OCR
사용자 판단, 어뷰징 방지
튜링테스트, recaptcha, no-chaptcha`,image:[]},{index:76,topic:"> 튜링테스트 (Turing test)(=모방게임, Imitation Game)",define:"129회 응용 1교시",head:`컴퓨터가 지능이 있는지를 판별할 수 
있는 시험(TTA)`,remark:`컴퓨터나 사람 판단, 1/3, 주관적 
활용(captcha), 튜링머신`,image:[]},{index:77,topic:"딥뷰 (DeepView)",define:"129회 관리 2교시",head:`대규모 이미지, 사람 행동 등을 
분석하여 실시간으로 영상 이해, 상황
예측하는 시각지능 기술`,remark:`시각지능, 영상분석
시각학습, 시각이해
SRG, VoVNet, SC-FEGAN
활용(지능형 cctv)`,image:["static/images/cellImage_1186147548_119.jpg"]},{index:78,topic:"추천시스템",define:"131회 응용 4교시",head:`특정 사용자가 관심을 가질만한 
정보를 추천하는 시스템`,remark:`추천, 관심사항
유형(컨텐츠기반, 협업, 하이브리드)
Memory, Model
User, Item, Matrix Factorization
컨텐츠(유사도), 협업(아이템, 사용자)
유사도 기반, Laten Factor, SGD/ALS, 
SVD/NMF, Cold Start/필터버블`,image:["static/images/cellImage_1186147548_120.jpg","static/images/cellImage_1186147548_121.jpg"]},{index:79,topic:"LLM(Large Language Model)",define:"135회 관리 2교시",head:`1000억개 이상의 파라미터를 활용하여 사전 정의된 답변이 아닌 대화의 맥
락을 이해하고 답변을 스스로 만들어 내는 언어 모델`,remark:null,image:["static/images/cellImage_1186147548_122.jpg","static/images/cellImage_1186147548_123.jpg"]},{index:80,topic:"멀티모달 인공지능 (Multimodal AI)",define:"134회 응용 4교시",head:`여러 인터페이스를 통해 서로 다른 
감각이나 유형의 정보를 컴퓨터가 
학습하여, 사고할 수 있게 만든 AI`,remark:`멀티모달
구성(입력, 융합, 출력)`,image:["static/images/cellImage_1186147548_124.jpg","static/images/cellImage_1186147548_125.jpg"]},{index:81,topic:"Multimodal LLM",define:"135회 관리 1교시",head:"텍스트, 이미지, 음성, 촉각 등 다양한 양식의 데이터를 동시에 처리하고 분석하여 인간과 자연스럽게 상호작용하는 대규모 언어 모델",remark:`① 다양한 입력 모달리티, 
② 크로스 모달 학습(서로 다른 모달 데이터 연관 이해)
③ 멀티모달 생성 
④ 모달리티 유연성 
⑤ 대규모 데이터 학습`,image:["static/images/cellImage_1186147548_126.jpg","static/images/cellImage_1186147548_127.jpg"]},{index:82,topic:"> LLM 도입 시 고려해야 할 보안 위험",define:"136회 관리 2교시",head:`데이터 수집/관리 및 예측 불가한 응답이 발생 가능한 LLM 특성 상
소프트웨어 전 생애주기에 걸쳐 보안 전략이 요구`,remark:`- 데이터 관리 및 모델 학습 측면 : 
민감정보 유출, 데이터 재식별, 저장정책 불명확, 적대적 공격, 모델 오염, 비검증 데이터 학습

- 출력 무결성 및 시스템 관리 측면 : 
프롬프트 인젝션, 허위정보 생성, 컴플라이언스 위배, API키노출, 인증 및 권한통제 미흡, 자동화 연계 오류`,image:["static/images/cellImage_1186147548_128.jpg","static/images/cellImage_1186147548_129.jpg"]},{index:83,topic:"의사결정나무 (Decision Tree)",define:`126회 관리 1교시
130회 관리 3교시`,head:`전체 자료를 몇 개의 소집단으로 
분류하거나 예측을 수행하는 방법`,remark:`분류(classification), 예측(prediction)
노드(root, internal, terminal/leaf, parent, 
child) , 속성(branch, depth) 
불순도/평가(misclassification rate, 
gini index, cross entropy, entropy, 
information gatin)
규칙(정지규칙, 가지치기, 불순도파악)
절차(변수선택 > 성장 > 가지치기 > 타당성 
> 분류/예측)
알고리즘(cart, c5.0)
활용(random forest, GB, xgboost, light gbm)`,image:["static/images/cellImage_1186147548_130.jpg","static/images/cellImage_1186147548_131.jpg"]},{index:84,topic:"> 지니 지수 (Gini Index)",define:"126회 관리 1교시",head:`통계적 분산 정도를 정량화해서 
불순도를 표현한 값`,remark:"분산, 불순도",image:["static/images/cellImage_1186147548_132.jpg"]},{index:85,topic:"> 엔트로피 지수 (Entropy Index)",define:"126회 관리 1교시",head:`무질서한 정도를 정량화 및 수치화 한
결과 값`,remark:"무질서, 불순도",image:["static/images/cellImage_1186147548_133.jpg"]},{index:86,topic:"몬테 카를로 방법 (Monte carlo method)(=Monte Carlo Simulation)",define:"131회 응용 1교시",head:`일련의 난수를 반복적으로 생성하여 
계산 가능한 함수의 값을 확률적으로 
계산하는 알고리즘`,remark:`무작위 추출(repeated random sampling)
확률+반복
강화학습`,image:[]},{index:87,topic:"SVM (Support Vector Machine)",define:`127회 관리 1교시
130회 관리 2교시
132회 관리 2교시
132회 응용 4교시`,head:`기계 학습의 분야 중 하나로 패턴 
인식, 자료 분석을 위한 지도 학습모델`,remark:`robustness, 이진분류
구성(Hyper plane, margin, kernel trick, 
support vector, 결정직선)
유형(선형SVM, 비선형분리)
선형 마진(Hard, Soft)
SVM clustering, 비선형(다항 kernel, 유사도)`,image:["static/images/cellImage_1186147548_134.jpg"]},{index:88,topic:"유사도(Similarity)",define:"128회 응용 2교시",head:`두 데이터가 얼마나 같은지를 
나타내는 척도`,remark:`데이터 일치성 확률
군집(clustering)
유형(유클리디안, 코사인, 자카드, 실루엣)
활용(추천시스템)`,image:["static/images/cellImage_1186147548_135.jpg"]},{index:89,topic:"> 자카드 유사도 (Jaccard Similarity)",define:"128회 응용 2교시",head:`각 집합에 대하여 얼마나 같은 원소를 
포함하고 있는가를 구하는 기법`,remark:"공유/전체",image:["static/images/cellImage_1186147548_136.jpg"]},{index:90,topic:"> 코사인 유사도 (Cosine Similarity)",define:"128회 응용 2교시",head:`두 벡터 간의 각도를 기반하여 
구할 수 있는 유사도`,remark:`각도, 같은 방향 1, 반대방향 -1, 수직방향 0
코사인 각도
빈도수개선(TF-IDF)`,image:["static/images/cellImage_1186147548_137.jpg"]},{index:91,topic:"> 실루엣 계수 (Silhouette Coefficient)",define:"128회 응용 2교시",head:`각 데이터별로 그 데이터가 속한 군 
내의 유사도와 인접한 군의 유사도를 
비교하는 지표`,remark:`군집 거리 분석, -1~1, 응집도, 분리도
실루엣 스코어
작은 군집내 비유사성, 높은 군집간 
비유사성`,image:["static/images/cellImage_1186147548_138.jpg"]},{index:92,topic:"> TF-IDF (Term Frequency - Inverse Document Frequency)",define:"132회 관리 3교시",head:`단어의 빈도와 역 문서 빈도를 사용 
단어들마다 중요한 정도에 따라서 
가중치를 부여하는 방법`,remark:`코퍼스(corpus), 문장단어행렬(DTM), BoW
단어빈도(TF), 문서빈도(DF), 
역문서빈도(IDF)
sparse vector, one-hot encoding`,image:["static/images/cellImage_1186147548_139.jpg","static/images/cellImage_1186147548_140.jpg","static/images/cellImage_1186147548_141.jpg"]},{index:93,topic:"K-means Clustering",define:`129회 관리 1교시
130회 관리 2교시`,head:`데이터를 K개의 군집으로 묶는 
알고리즘`,remark:`K개 cluster, clustering, 비지도
거리 분산 최소화, 이상치 민감
절차(초기점 > 그룹 > 중심점 업데이트
> 최적화)`,image:["static/images/cellImage_1186147548_142.jpg","static/images/cellImage_1186147548_143.jpg"]},{index:94,topic:"DBSCAN (Density Based Spatial Clustering of Applications with Noise)",define:`129회 관리 1교시
130회 관리 2교시`,head:`밀도가 높은 곳에 포함된 데이터에는 
클러스터를 할당하고 밀도가 낮으면 
노이즈로 취급하는 알고리즘`,remark:`밀도, k-means 단점 해결
군집의 수를 설정할 필요가 없음
이상치에 대응이 가능
방법(eps-neighbors, minPts)`,image:["static/images/cellImage_1186147548_144.jpg","static/images/cellImage_1186147548_145.jpg"]},{index:95,topic:"SOM (Self Organizing Map)(=자기조직화지도)",define:"134회 관리 4교시",head:`고차원 데이터의 각 개체들이 
저차원에 대응하도록 인공신경망과 
유사한 방식의 학습을 통해 군집을 
도출해내는 기법`,remark:`차원축소, 군집화, instance-based learning
입력, 경쟁, 가중치, 노드(영역), BMU`,image:["static/images/cellImage_1186147548_146.jpg"]},{index:96,topic:"인공지능 윤리",define:`129회 관리 1교시
131회 관리 2교시
134회 관리 4교시`,head:`모든 사회구성원이 인공지능 
개발부터 활용 전 단계에서 함께 
지켜야 할 주요 원칙과 핵심 요건 기준`,remark:`3대원칙(인간의존엄성, 사회공공성, 
기술합목적성)
10대요건(투명성, 안전성, 책임성, 공공성)
자율점검표
OECD AI 윤리가이드
인공지능 거버넌스 구축`,image:["static/images/cellImage_1186147548_147.jpg"]},{index:97,topic:"> 인공지능 신뢰성",define:"133회 관리 1교시",head:`AI 시스템의 의사결정 및 활동에 
영향을 받는 이해당사자의 기대치를 
충족시키는 역량`,remark:`ISO/IEC 22989
강건성, 안정성, 회복탄력성, 제어가능성, 
설명가능성, 예측가능성, 투명성
XAI, CAT, 신뢰성 프레임워크(윤리기준, 
생명주기, 확보대상)`,image:[]},{index:98,topic:"초거대 AI",define:"134회 응용 2교시",head:`대규모 데이터셋을 기반으로 훈련된 
딥러닝 모델을 사용하여 새로운 
콘텐츠를 생성하는 인공지능`,remark:`도입원칙(최신기술, 혁신, 하나의정부, 
윤리기준 준수)
도입절차(보안등급 > 클라우드 > 학습 
> 서비스 도입 > SLO > Ops)`,image:[]},{index:99,topic:"생성형AI",define:"133회 관리 3교시",head:`데이터 세트를 활용하여 새로운 
콘텐츠를 창조하는 인공지능`,remark:`보안위협(유사AI, 잘못된 정보, 데이터유출, 
API 취약점, 할루시네이션, 딥페이크)
대응(암호화, 마스킹, PET, 난독화, 
MFA, RBAC)
활용(파운데이션 모델)`,image:["static/images/cellImage_1186147548_148.jpg","static/images/cellImage_1186147548_149.jpg"]},{index:100,topic:">> 파운데이션 (Foundation) 모델",define:"131회 관리 4교시",head:`레이블이 지정되지 않은 광범위한 
데이터 집합에 대해 훈련된 대규모 
인공 지능 모델`,remark:`대규모 학습
활용(Bert, Gpt, Pre-train, fine-tuning)
심층신경망, 강화학습, 자기주도학습,
FMOps
개발(아키텍처 > 사전학습 > 미세조정 > 
배포)`,image:["static/images/cellImage_1186147548_150.jpg","static/images/cellImage_1186147548_151.jpg"]},{index:101,topic:"적대적공격 (Adversarial Attack)",define:`130회 관리 3교시
131회 응용 3교시`,head:`어떠한 이미지에 아주 작은 noise를 
가하는 것만으로  딥러닝 네트워크의 
성능을 떨어트리는 공격기법`,remark:`4가지유형(model invasion, poisoning, 
evasion, model extraction)
방어(적대적훈련, gradient masking, 
distillation, feature squeezing, defene gan)
공격(whitebox, blackbox)
기법(FGSM, GMM, DeepFool)`,image:["static/images/cellImage_1186147548_152.jpg","static/images/cellImage_1186147548_153.jpg","static/images/cellImage_1186147548_154.jpg"]},{index:102,topic:"> Defense GAN",define:"131회 응용 3교시",head:`기존의 Gan을 활용하여 적대적 공격을 
방어하는 기법`,remark:`WGAN, robustness, white/black 대응, 
gradient-based attacks 강인
hyper-parameter tuning 중요`,image:["static/images/cellImage_1186147548_155.jpg"]},{index:103,topic:"마르코프 특성 (Markov Property)",define:"131회 응용 2교시",head:`미래의 결과는 과거의 상태에 관계 
없이 현재 상태에 의해 결정되는 특성`,remark:`강화학습
현재 상태 결정, Memoryless, 상태전이확률
가치함수(상태가치, 액션가치(=Q함수))
방정식(벨만기대, 벨만최적)
활용(markov chain, 은닉마르코프모델)`,image:["static/images/cellImage_1186147548_156.jpg","static/images/cellImage_1186147548_157.jpg","static/images/cellImage_1186147548_158.jpg"]},{index:104,topic:"강화학습 (Reinforcement Learning)",define:"131회 응용 4교시",head:`행동과 보상을 통해 학습을 하여 
목표를 찾아가는 알고리즘`,remark:`다이나믹 프로그래밍
액션, 보상, 환경, 마르코프(MDP)
방식(model-based, model-free)
유형(가치기반, 정책기반, 액터크리틱, 
정책경사)
방정식(벨만기대, 벨만최적)
가치(상태, 액션)
모델(Q-learning, DQN)`,image:["static/images/cellImage_1186147548_159.jpg","static/images/cellImage_1186147548_160.jpg"]},{index:105,topic:"MCTS(Monte Carlo Tree Search) 몬테카를로 트리검색",define:"135회 응용 1교시",head:"- 검색 공간에서 무작위 추출에 기초한 탐색 트리의 노드를 확장하면서, 유망한 노드에 가중치를 부과하여 최적의 확장을 선택하는 알고리즘",remark:"Selection(선택) > Expansion(확장) > Simulation(시뮬레이션) > Backpropagation(역전파)",image:["static/images/cellImage_1186147548_161.jpg","static/images/cellImage_1186147548_162.jpg"]},{index:106,topic:"가. 생성형 인공지능 학습용 멀티모달 데이터 품질특성�나. 생성 데이터 유형별 유효성 검증 방법",define:"135회 응용 2교시",head:`생성형 AI에서 활용되는 이미지, 텍스트등의 데이터의 의미적 정확성, 유효성 평가지표를 평가하기 위한 검증 기법
- TTA에서 2024년 12월, 멀티모달 데이터 품질 검증 방법 제안(TTAK.KO-10.1558)`,remark:"표현성, 변환성, 정렬성",image:["static/images/cellImage_1186147548_163.jpg","static/images/cellImage_1186147548_164.jpg"]},{index:107,topic:"PR곡선과 ROC곡선",define:"135회 관리 1교시",head:`- PR곡선: 정밀도(Precision) 와 재현율(Recall)의 관계를 시각화한 그래프

- ROC곡선: 참 긍정률 (True Positive Rate, TPR) 과 거짓 긍정률 (False Positive Rate, FPR)의 관계를 시각
화한 그래프`,remark:null,image:["static/images/cellImage_1186147548_165.jpg","static/images/cellImage_1186147548_166.jpg"]},{index:108,topic:"AGI(Artificial General Intelligence, 인공 일반 지능)와 ANI(Artificial Narrow Intelligence, 인공 좁은 지능)",define:"135회 관리 1교시",head:`- AGI: 특정 작업에 국한되지 않고 인간처럼 일반적인 문제를 해결 가능한 범용 AI

- ANI: 학습된 특정 도메인외에 문제를 해결할 수 없는 사전 설정된 작업을 위한 AI`,remark:null,image:["static/images/cellImage_1186147548_167.jpg","static/images/cellImage_1186147548_168.jpg"]},{index:109,topic:"AI 디지털교과서",define:"135회 관리 2교시",head:`AI 기반 학생 진단‧분석을 바탕으로 교사‧학부모에게 학생의 객관적인
학습 정보를 제공하고, 개별 학생에게는 학업성취도 및 특성을 고려한 최적
의 학습경로와 학생 맞춤 처방 및 지원을 제공하는 교과서`,remark:null,image:["static/images/cellImage_1186147548_169.jpg","static/images/cellImage_1186147548_170.jpg"]},{index:110,topic:"프롬프트 엔지니어링 기술요소 및 활용방안",define:"135회 관리 3교시",head:`- 프롬프트
1) 특정 작업을 수행하도록 생성형 AI에 요청하는 자연어 텍스트
2) AI 모델로부터 응답을 생성하기 위한 입력 값

- 프롬프트 엔지니어링
1) 생성형 인공지능 솔루션을 안내하여 원하는 결과를 생성하는 프로세스
2) AI가 생성하는 결과물의 품질을 높일 수 있는 프롬프트 입력 값들의 조합을 찾는 작업`,remark:`입력 값, 명령, 문맥, 입력 정보, 출력 지시자, 답변 최적화, Zero Shot, One Shot, Few Shot

[기법] Zero-Shot Prompting, One-Shot Prompting, Few-Shot Prompting, CoT (Chainof-Thought)

[가이드라인]
1) 대화 스타일 조정
2) 열린 질문보다 닫힌 지시문
3) 미사여구를 최소화한 쉽고 간결한 표현
4) Instruction과 Context를 구체적으로 명시
5) 예제를 함께 제공`,image:["static/images/cellImage_1186147548_171.jpg","static/images/cellImage_1186147548_172.jpg"]},{index:111,topic:"인공지능 소프트웨어 품질인증 테스트가. 메타모픽 테스트(Metamorphic Test)나. 뉴런 커버리지 테스트(Neuron Coverage Test)다. 안전 반경 최대화 테스트",define:"135회 관리 4교시",head:`[인공지능 품질인증 테스트]
정확한 예상 출력값의 정의가 불가능한 AI 시스템의 품질을 보증하기 위해 입력과 출력의 관계 및 뉴런 활성화 패턴 등을 분석하여 평가하는 테스팅

[AI 블랙박스 테스팅]
- 메타모픽 테스트
- 안전반경 최대화 테스트

[AI 화이트박스 테스팅]
- 뉴런 커버리지 테스트`,remark:null,image:["static/images/cellImage_1186147548_173.jpg","static/images/cellImage_1186147548_174.jpg","static/images/cellImage_1186147548_175.jpg","static/images/cellImage_1186147548_176.jpg"]},{index:112,topic:"범용 AI(General-Purpose AI) 위험관리 프레임워크",define:"136회 관리 1교시",head:"인간 수준 이상의 지능을 갖춘 범용 인공지능(GPAI)이 초래할 수 있는 예측 불가능하고 복합적인 위험 요소를 체계적으로 식별, 분석, 평가, 대응하기 위해 설계된 정렬 중심의 안전관리 체계",remark:null,image:["static/images/cellImage_1186147548_177.jpg","static/images/cellImage_1186147548_178.jpg"]},{index:113,topic:"에이전틱 AI(Agentic AI)",define:"136회 관리 1교시",head:"사용자의 명확한 지시나 명령 없이도 스스로 작업을 수행하는 자율적인 소프트웨어(가트너2025)",remark:null,image:["static/images/cellImage_1186147548_179.jpg","static/images/cellImage_1186147548_180.jpg","static/images/cellImage_1186147548_181.jpg"]},{index:114,topic:"아웃라이어",define:"136회 관리 3교시",head:`관측된 데이터의 범위에서 많이 벗어난
아주 작은 값이나 아주 큰 값 의미`,remark:null,image:["static/images/cellImage_1186147548_182.jpg","static/images/cellImage_1186147548_183.jpg","static/images/cellImage_1186147548_184.jpg"]},{index:115,topic:"혼동행렬",define:"136회 관리 3교시",head:`* 혼동행렬의 개념
분석모델에서 분류한 예측값(그룹 혹은 범주)과 실제값(그룹 혹은 범주)을
교차표 형태로 정리한 행렬(분할표 또는 오차행렬과 동의어로 분류모델을
평가하기 위한 지표로 사용하는 성능평가 방법)

* 성능평가 원리
① 실제값과 예측값 비교
- TP ,TN : 정확히 예측
- FP : false Alarm
- FN : 놓친 예측
② 정확도 , 정밀도 등 확인
- 어떤 종류의 오류가 많은지 확인 가능
③ 문제 성격별 지표 적정성확인
- 암진단–재현율 중요(정확한 예측 필요)`,remark:`풀이문제
True Positive(TP)=100, False Positive(FP)=5, False
Negative(FN)=7, True Negative(TN)=9
(단, 계산 결과는 %로 표시하고 소수점은 버린다.)
>  정확도, 정밀도, 재현율 계산 결과와 해석
>  F1-score 계산 결과와 해석`,image:["static/images/cellImage_1186147548_185.jpg","static/images/cellImage_1186147548_186.jpg"]},{index:116,topic:"GNN(Graph Neural Network)",define:"137회 관리 1교시",head:`그래프에 있는 노드 사이의 상관성을 모델링을 하기 위해 그래프 구조에 대해
직접적으로 작동하는 인공신경망(그래프 구조를 활용하여 loss 최적화)`,remark:null,image:["static/images/cellImage_1186147548_187.jpg","static/images/cellImage_1186147548_188.jpg"]},{index:117,topic:"AI 거버넌스",define:"137회 관리 1교시",head:`AI 시스템의 개발과 활용에 있어 안전성, 신뢰성, 윤리성을 확보하기 위한
프레임워크

국제표준 : ISO/IEC 38507`,remark:null,image:["static/images/cellImage_1186147548_189.jpg","static/images/cellImage_1186147548_190.jpg"]},{index:118,topic:"트랜스포머(Transformer)",define:"137회 관리 1교시",head:`Self-Attention을 중심으로 문맥을 이해하고, 인코더–디코더 구조를
기반으로 동작하는 범용 딥러닝 아키텍처`,remark:null,image:["static/images/cellImage_1186147548_191.jpg","static/images/cellImage_1186147548_192.jpg"]},{index:119,topic:"MoE(Mixture of Experts)",define:"137회 관리 1교시",head:`여러 개의 전문가 네트워크를 두고, gating Network가 특정 입력에
적합한 전문가를 선택, 최적의 결과 도출 모델`,remark:null,image:["static/images/cellImage_1186147548_193.jpg","static/images/cellImage_1186147548_194.jpg"]},{index:120,topic:"AI 신뢰성 검인증 제도(CAT)",define:"137회 관리 1교시",head:`AI 시스템의 거버넌스, 기술적 완결성,
법규 준수, 성능 안정성 등을 평가해
인증서를 부여하는 제도

목적 - 신뢰성, 투명성, 책임성 확보
주관 - TTA (한국정보통신기술협회)`,remark:null,image:["static/images/cellImage_1186147548_195.jpg","static/images/cellImage_1186147548_196.jpg"]},{index:121,topic:"데이터 늪(Data Swamp)",define:"137회 관리 1교시",head:`수집만 지속되고 관리되지 않아 품질 저하와 탐색 불가 상태에 이른 장 공간

데이터 레이크가 관리되지 않아 쓸모없는 데이터 저장소로 전락한 상태`,remark:null,image:["static/images/cellImage_1186147548_197.jpg","static/images/cellImage_1186147548_198.jpg"]},{index:122,topic:"연관 규칙 분석(Association Rule Analysis) 지표",define:"137회 관리 1교시",head:`연관 규칙 분석
: 발생 빈도에 기반하여 특정 사건(상품 구매)들이 동시에 발생하는 비율을
상호간의 연관성으로 표현하는 규칙`,remark:null,image:["static/images/cellImage_1186147548_199.jpg","static/images/cellImage_1186147548_200.jpg"]},{index:123,topic:"MCP(Model Context Protocol)",define:"137회 관리 2교시",head:`AI모델이 외부 애플리케이션 도구, 데이터 소스 등과 안전하고 유연하게
상호작용할 수 있도록 설계된 개방형 표준 통신 프로토콜`,remark:null,image:["static/images/cellImage_1186147548_201.jpg","static/images/cellImage_1186147548_202.jpg","static/images/cellImage_1186147548_203.jpg"]},{index:124,topic:"TEXT2SQL",define:"137회 관리 2교시",head:`자연어 처리(NLP)와 SQL를 결합한 기술로, 사용자의 자연어 입력을 SQL
쿼리문으로 자동 변환해주는 AI 기반 기술`,remark:null,image:["static/images/cellImage_1186147548_204.jpg","static/images/cellImage_1186147548_205.jpg"]},{index:125,topic:"벡터 데이터베이스(Vector Database)",define:"137회 관리 4교시",head:`방대한 양의 고차원 데이터를 벡터 형태로 최적화하여 보관하고
쿼리하기 위해 특화된 데이터베이스`,remark:null,image:["static/images/cellImage_1186147548_206.jpg","static/images/cellImage_1186147548_207.jpg","static/images/cellImage_1186147548_208.jpg"]},{index:126,topic:"> HNSW(Hierarchical Navigable Small World)",define:"137회 관리 4교시",head:`계층적 그래프 구조를 기반으로 탐색하는 근사 최근접 탐색 알고리즘
시간복잡도 O(log N)`,remark:null,image:["static/images/cellImage_1186147548_209.jpg"]},{index:127,topic:"> IVF(Inverted File Index",define:"137회 관리 4교시",head:`벡터를 K-means 알고리즘으로 클러스터링하여 그룹화한 뒤, 검색 시 일부 그룹만 탐색하는
근사 최근접 알고리즘`,remark:null,image:["static/images/cellImage_1186147548_210.jpg"]},{index:128,topic:"유전 알고리즘(Genetic Algorithm)",define:"137회 관리 4교시",head:`다윈의 적자생존 이론을 바탕으로 자연계의 진화를 통해 관찰된 매커니즘 기
반의 최적의 답을 찾아내기 위한 알고리즘`,remark:null,image:["static/images/cellImage_1186147548_211.jpg","static/images/cellImage_1186147548_212.jpg","static/images/cellImage_1186147548_213.jpg"]},{index:129,topic:"> 세마포어 (Semaphore)",define:`126회 응용 1교시
132회 응용 1교시`,head:`두개의 원자적 함수로 제어되는 정수 
변수로 멀티프로그래밍 환경에서 
공유자원에 대한 접근 제어 방법`,remark:`동기화, P, V연산, 상호배제
유형(Binray, Count)
방식(Busy Wait, Sleep Queue)
장점(자원경쟁 해결)`,image:["static/images/cellImage_1186147548_214.jpg","static/images/cellImage_1186147548_215.jpg"]},{index:130,topic:"운영체제 가상 메모리 관리 기법",define:`126회 응용 1교시
131회 관리 3교시`,head:`제한된 물리 메모리의 효율적인 
사용과 메모리 참조 방식을 제공하는 
가상 메모리 관리 기법`,remark:`주소(logical, physical)
주소바인딩(compile, load, execution)
할당(연속, 불연속(paging, segmentation)
호출(예상,요구)
배치(first, best, worst, next)
교체(LRU, LFU)
불연속(page, segmentation)
overlap, swap, 단편화`,image:[]},{index:131,topic:"> 페이징 기법 (Paging)",define:"131회 관리 3교시",head:`프로세스의 주소 공간을 동일한 
사이즈의 페이지 단위로 나누어 
물리적 메모리에 불연속적으로 
저장하는 방식`,remark:`고정, frame, page, block, page table, 
thrashing, page fault, page replacement
내부단편화
주소변환(page number, offset, 
직접, 연관, 직접-연관)
페이징(two-level paging, multi level paging, 
invert page, shared page, hash page)`,image:["static/images/cellImage_1186147548_216.jpg"]},{index:132,topic:"> 세그먼테이션 기법 (Segmentation)",define:`126회 응용 1교시
131회 관리 3교시`,head:`프로세스의 메모리 부분을 
가변적으로 여러 개로 나뉘어 물리 
메모리에 비연속적으로 할당하는 방식`,remark:`segment, 가변
segment number, offset
segment table
bit(protection, valid), 외부단편화`,image:["static/images/cellImage_1186147548_217.jpg"]},{index:133,topic:"프로세스 스레싱 (Thrashing)",define:`126회 관리 1교시
131회 응용 2교시`,head:`페이지 부재율이 증가하여 CPU 
이용율이 급격하게 떨어지는 현상`,remark:`원인(다중프로그래밍, 페이지 부재, 
낮은 cpu)
해결(다중프로그램 낮춤, PFF, working set, 
pre paging)`,image:[]},{index:134,topic:"우선순위 역전 (Priority Inversion)",define:"126회 관리 4교시",head:`우선순위가 높은 task가 준비 상태로 
바뀌었지만 더 낮은 task가 CPU를 
점유하고 있어 실행되지 못하는 현상`,remark:`조건(RTOS, 비선점자원, 선점cpu 스케쥴링)
해결(우선순위 올림, 우선순위 상속)`,image:[]},{index:135,topic:"우선순위 상속 (Priority Inheritance)",define:"135회 응용 1교시",head:"낮은 우선순위 태스크가 높은 우선순위 태스크가 기다리는 자원을 사용하고 있을 때, 낮은 우선순위 태스크의 우선순위를 일시적으로 높이는 기법",remark:"높은 우선순위 태스크가 자원을 기다리지 않도록 하여 우선순위 역전 문제를 해결",image:["static/images/cellImage_1186147548_218.jpg","static/images/cellImage_1186147548_219.jpg"]},{index:136,topic:"빅엔디언 (Big Endian)",define:"126회 관리 1교시",head:`낮은 주소에 데이터의 높은 
바이트부터 저장`,remark:`MSB
활용(네트워크, 디버깅)`,image:["static/images/cellImage_1186147548_220.jpg"]},{index:137,topic:"리틀엔디언 (Little Endian)",define:"126회 관리 1교시",head:`낮은 주소에 데이터의 낮은 
바이트부터 저장`,remark:`LSB
활용(컴퓨터, 내부처리)`,image:[]},{index:138,topic:"JTAG (Joint Test Action Group)",define:"126회 응용 1교시",head:`디지털 회로에서 특정 노드의 디지털 
입출력을 위해 직렬 통신 방식으로 
출력 데이터를 전송하거나 입력
데이터 수신 방식`,remark:`IEEE 1149.1, 직렬통신
clock신호(TDI, TDO, TRST, TCK, TMS)
활용(디버깅, 임베디드 테스트)`,image:["static/images/cellImage_1186147548_221.jpg","static/images/cellImage_1186147548_222.jpg"]},{index:139,topic:"처리장치(프로세서)",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_223.jpg","static/images/cellImage_1186147548_224.jpg","static/images/cellImage_1186147548_225.jpg"]},{index:140,topic:"CPU (Central Processing Unit)(=중앙처리장치)",define:`126회 응용 2교시
126회 응용 4교시
132회 응용 3교시`,head:`프로그램의 연산을 실행 · 처리하는 
가장 핵심적인 컴퓨터의 제어 장치 
혹은 그 기능을 내장한 칩`,remark:`중앙처리장치, 산술연산, 
major cycle(direct, execute, indirect, 
interrupt)
Core(control unit(micro, hard wired), ALU)
병렬/병행, 파이프라이닝, 해저드
명령어 주소지정 및 처리
CISC, RISC, EISC
cpu scheduling`,image:["static/images/cellImage_1186147548_226.jpg"]},{index:141,topic:"> ARM (Advanced RISC Machine)",define:"126회 응용 4교시",head:"RISC 아키텍처 기반의 중앙 처리 장치",remark:`RISC, ARM Core
모드(User, system, exeption)
명령어처리(fetch - decode - execute - 
memory - write)`,image:["static/images/cellImage_1186147548_227.jpg","static/images/cellImage_1186147548_228.jpg"]},{index:142,topic:"> 제어장치 (Control Unit)",define:"132회 응용 3교시",head:`프로세서의 조작을 지시하는 컴퓨터 
중앙 처리 장치의 구성요소`,remark:`조작 지시, 제어
control signal
방식(micro-programmed, hard-wired)`,image:["static/images/cellImage_1186147548_229.jpg","static/images/cellImage_1186147548_230.jpg"]},{index:143,topic:">파이프라인 해저드",define:"135회 응용 4교시",head:"CPU의 명령어를 여러단계로 나누어 병렬처리 하여 CPU의 성능을 높이는 파이프라인 기술에서 발생되는 문제",remark:null,image:["static/images/cellImage_1186147548_231.jpg","static/images/cellImage_1186147548_232.jpg"]},{index:144,topic:"GPU (Graphic processing unit)(=그래픽 처리 장치)",define:`126회 응용 2교시
134회 관리 4교시`,head:`다양한 장치에서 컴퓨터 그래픽 및 
이미지 처리 속도를 높이도록 
설계된 전자 회로`,remark:`그래픽, 부동소수점, 병렬처리
소량의 cache, 대량 연산처리
GPGPU, 멀티 GPU, CuDA`,image:[]},{index:145,topic:"FPGA (Field-Programmable Gate Array)",define:"126회 응용 2교시",head:`트랜지스터 기반 논리 게이트의 
어레이를 포함하는 집적 회로`,remark:`설계 가능 논리 소자, 프로그래밍 가능
AI, 반도체`,image:[]},{index:146,topic:"ASIC (Application-Specific Integrated Circuit)",define:"126회 응용 2교시",head:`특정 응용 분야 및 기기의 특수한 기능 
하나하나에 맞춰 만들어진 집적회로`,remark:`특정목적, 주문형
AI, 반도체`,image:["static/images/cellImage_1186147548_233.jpg"]},{index:147,topic:"뉴로모픽 칩 (Neuromorphic Chip)(=Neuromorphic Processing Unit)(=Neuromorphic 반도체)",define:`128회 관리 1교시
128회 응용 1교시
134회 응용 1교시`,head:`뉴런을 모방한 Hardware Neuron을 
병렬로 연결한 칩`,remark:`SNN 활용
신경망, 뉴런
메모리 병목 개선, 폰노이만 개선
활용(온디바이스 AI)`,image:["static/images/cellImage_1186147548_234.jpg","static/images/cellImage_1186147548_235.jpg"]},{index:148,topic:"CPU스케줄링",define:"137회 관리 3교시",head:`준비상태에 있는 프로세스들 중에서 하나를 선택해 CPU를 할당하는 운
영체제의 실행 제어 기법

목적 : CPU자원효율 극대화`,remark:`* 선점
RR ,SRT, MLQ, MLFQ

* 비선점
Priority, FCFS, SJF, HRN

* 실시간
RM, EDF`,image:["static/images/cellImage_1186147548_236.jpg","static/images/cellImage_1186147548_237.jpg"]},{index:149,topic:"디스크 스케줄링",define:"137회 관리 3교시",head:`디스크 입출력을 위해 대기하고 있는 요구들 중 먼저 처리할 것을 결정
하는 기법

목적 : 디스크 access 효율 향상`,remark:`* 탐색시간 기반
SSTF

* 회전시간 기반
SLTF`,image:["static/images/cellImage_1186147548_238.jpg","static/images/cellImage_1186147548_239.jpg"]},{index:150,topic:"멀티 프로세스 스케줄링 알고리즘",define:"129회 응용 3교시",head:`여러 cpu 들에서 스케쥴링을 하는 
알고리즘`,remark:`배경(캐시일관성, 캐시친화성, 
공유자원접근)
유형(단일큐, 멀티큐)`,image:[]},{index:151,topic:">RM(Rate Monotonic) 스케줄링",define:"135회 응용 3교시",head:"주기가 짧은 태스크에 높은 우선순위를 부여하는 정적 우선순위 스케쥴링",remark:`- 선점형 스케쥴링
- 주기가 짧을 수록 높은 우선순위
- 장점: 실시간 시스템 예측 가능
- 단점: CPU사용률이 69.3%이상이면 스케쥴링 불가`,image:[]},{index:152,topic:"> 단일 큐 멀티프로세서 스케줄링 (SQMS, Single Queue Multiprocessor Scheduling)",define:`129회 응용 3교시
135회 응용 3교시`,head:`프로세서가 여러개더라도 하나의 
스케줄링 큐를 사용`,remark:`하나의 큐, 구현 간단
문제점(확장성, 캐시친화성)
사례(Linux - BFS)`,image:[]},{index:153,topic:"> 멀티 큐 멀티프로세서 스케줄링 (MQMS, Multi Queue Multiprocessor Scheduling)",define:`129회 응용 3교시
135회 응용 3교시`,head:`CPU별로 Ready Queue를 두고, 
프로세서별 스케줄링 큐에 작업을 
균등하게 할당`,remark:`cpu별 queue 이용, 균등 할당, 구현복잡
sqms 문제 개선
워크로드 불균형 문제 -> migration 해결
사례(Linux - O(1), CFS)`,image:[]},{index:154,topic:"SOC (System On Chip)",define:"128회 응용 1교시",head:`완전 구동이 가능한 제품과 시스템이 
한 개의 칩에 들어 있는 것`,remark:`단일 칩
구성(MPU, DRAM, I/O, Logic)
Chiplet`,image:["static/images/cellImage_1186147548_240.jpg","static/images/cellImage_1186147548_241.jpg"]},{index:155,topic:"> 칩렛 (Chiplet)",define:"131회 응용 2교시",head:`각기 다른 역할을 수행하는 여러 개의 
반도체 칩을 쌓아 하나이 반도체 
패키지를 형성하는 방식`,remark:`SoC 단점(Die 사이즈 증가)극복
각 기능을 제조 -> 후 통합, SiP, 이종집적
UCIe 표준
이어붙이기(와이어본딩, 플립칩본딩, 
TSV)`,image:["static/images/cellImage_1186147548_242.jpg"]},{index:156,topic:"입출력장치 인터페이스",define:`128회 응용 1교시
128회 응용 1교시
128회 응용 2교시`,head:`입출력 채널과 주변 장치를 접속하는 
인터페이스 장치`,remark:`제어방식(programmend, interrupt, dma, 
channel)
버스 중재(중앙집중, 분산, 직렬, 병렬, 고정,
가변, h/w, s/w)
레지스터(데이터, 상태)
위치(North, South)`,image:["static/images/cellImage_1186147548_243.jpg"]},{index:157,topic:"> 버스중재 (Bus Arbitration)",define:"128회 응용 1교시",head:`버스 경합 시 미리 정해준 순서대로 
버스를 사용하게 하는 기술`,remark:`정해진 순서대로 사용, BREQ, BGNT, BBUSY
구성(마스터, 중재기)
중재기위치(중앙, 분산), 폴링(sw, hw)
제어(병렬, 직렬), 우선순위(고정, 가변)`,image:["static/images/cellImage_1186147548_244.jpg"]},{index:158,topic:"> I/O 전송방식",define:"128회 응용 2교시",head:`I/O 장치 cpu, memory간의 
데이터 전송방식`,remark:`cpu 개입(programmed, interrupt)
cpu 개입 없음(dma, channel)
회선(단일, 다중)`,image:[]},{index:159,topic:"메모리 인터리빙 (Memory Interleaving)(=Bank Interleaving)",define:"128회 관리 1교시",head:`메모리를 여러개로 나눠서 동시에 
접근이 가능하도록 하는 기법`,remark:`동시접근, 성능향상, bank
유형(상위, 하위 , 혼합)
Access(C-access, S-access)`,image:[]},{index:160,topic:"반도체 가치사슬 (Value Chain)",define:"129회 관리 4교시",head:"반도체 산업에서의 가치 창조 활동",remark:`단계(설계 > 생산 > 패키징 및 테스트)
기업유형(idm, 팹리스, 파운드리, 조립/검사)`,image:["static/images/cellImage_1186147548_245.jpg","static/images/cellImage_1186147548_246.jpg"]},{index:161,topic:"메모리 반도체",define:`126회 응용 3교시
129회 관리 4교시
129회 응용 1교시
129회 응용 3교시
132회 응용 1교시
134회 관리 1교시`,head:`데이터를 저장하는 것을 목적으로 
생산되는 반도체`,remark:`데이터 저장
RAM(SRAM, DRAM), ROM, Flash memory, 
FeRAM, MRAM`,image:["static/images/cellImage_1186147548_247.jpg","static/images/cellImage_1186147548_248.jpg","static/images/cellImage_1186147548_249.jpg"]},{index:162,topic:"> TCAM(Ternary Content Addressable Memory)",define:"132회 응용 1교시",head:`빠른 속도를 요구하는 응용분야에 
사용되는 고속 검색 메모리`,remark:`0, 1, X(와일드), 컨텐츠 직접 검색, 패턴매칭
라우터, 스위치 활용`,image:["static/images/cellImage_1186147548_250.jpg","static/images/cellImage_1186147548_251.jpg"]},{index:163,topic:"> DDR SDRAM(Double Date Rate Synchronous DRAM)",define:"129회 응용 3교시",head:`SDR SDRAM에 비해 대역폭이 
거의 두 배나 늘어난 SDRAM`,remark:`DDR, 2개 데이터 전송, 2n 프리패치
발전(DDR2, DDR4, GDDR)
손실방지(Precharge, Refresh)
HBM`,image:[]},{index:164,topic:"> HBM (High Bandwidth Memory)",define:`129회 응용 1교시
134회 관리 1교시`,head:`3D 스택킹 기술을 적용하여 여러개의 
DRAM을 수직으로 적층하여 고속 
데이터 전송이 가능한 메모리`,remark:`고속전송, 광대역폭, 전력소모 감소, 
3D 적층, TSV, DRAM, Base Die
본딩(TC-NCF, MR-MUF)`,image:["static/images/cellImage_1186147548_252.jpg","static/images/cellImage_1186147548_253.jpg","static/images/cellImage_1186147548_254.jpg","static/images/cellImage_1186147548_255.jpg"]},{index:165,topic:"> 플래시 메모리 (Flash Memory)",define:"126회 응용 3교시",head:`전기적으로 데이터를 지우고 다시 
기록할 수 있는 비휘발성 컴퓨터 
기억 장치`,remark:`기억장치, 비휘발성, 블록단위
구조(floating gate, sorce, drain, control gate)
유형(NAND, NOR)
Cell(SLC, MLC, TLC, QLC, PLC, OLC)`,image:[]},{index:166,topic:">> 3D-Vertical NAND Flash Memory",define:"126회 응용 3교시",head:`기존 평면 cell 구조의 한계를 극복
위해 동일한 면적에서 수직으로 
단수를 높여 저장용량을 극대화하는 
플래시 메모리`,remark:`U자형(SMArT, P-BiCS), I자형(TCAT)
Gate-All Around 구조, 단위 cell size 증가
Tunnel Oxide, Block Oxide, Channel Oxide
구성(floating gate, ctf, 3d-ctf, 수직공정)
공정(etching, gate pattern)`,image:["static/images/cellImage_1186147548_256.jpg"]},{index:167,topic:"SSD (Solid State Drive)",define:"128회 응용 4교시",head:`반도체 칩을 이용하여 컴퓨터의 
운영체제와 데이터를 저장하는 
보조기억장치`,remark:`구조(플래시 메모리, 컨틀롤러, 
버퍼메모리)
변환(FTL)`,image:[]},{index:168,topic:"> 플래시 변환 계층 (Flash Translation Layer)",define:"128회 응용 4교시",head:`파일 시스템과 SSD사이에서 데이터를 
읽고 쓸 수 있도록 Mapping 하는 역할`,remark:`SSD와 Flash memory 사이  read/write
논리주소 <-> 물리영역
요소(STL, BML, LLD)
STL(address mapping, GC, Wear leveling)`,image:["static/images/cellImage_1186147548_257.jpg","static/images/cellImage_1186147548_258.jpg","static/images/cellImage_1186147548_259.jpg"]},{index:169,topic:"비메모리 반도체 (=시스템 반도체)",define:"129회 관리 4교시",head:`데이터의 연산 및 처리를 목적으로 
생산되는 반도체`,remark:`연산, 처리
종류(CPU, AP, GPU, LSI)
HSM, PIM, PNM`,image:["static/images/cellImage_1186147548_260.jpg","static/images/cellImage_1186147548_261.jpg","static/images/cellImage_1186147548_262.jpg"]},{index:170,topic:"> PIM (Processing in Memory)",define:"129회 응용 1교시",head:`하나의 패키지에 메모리 반도체와 
처리장치가 탑재된 형태의 융합형 
반도체`,remark:`데이터 병목, bottleneck 개선, 
데이터 이동 최소화
유형(digital, analog, im pim, nm pim,
dram 기반, sram 기반)`,image:["static/images/cellImage_1186147548_263.jpg","static/images/cellImage_1186147548_264.jpg","static/images/cellImage_1186147548_265.jpg"]},{index:171,topic:"> PNM (Processing Near Memory)",define:"131회 응용 1교시",head:`하나의 모듈에 메모리 반도체와 
처리장치가 탑재된 형태의 융합형 
반도체`,remark:`모듈, 메모리 반도체 + 처리장치
PIM 유사, 병목 제거, CXL-PNM`,image:["static/images/cellImage_1186147548_266.jpg","static/images/cellImage_1186147548_267.jpg"]},{index:172,topic:"CXL (Compute Express Link)",define:`129회 응용 2교시
136회 관리 1교시`,head:`시스템 내 메모리, 스토리지, 
로직 반도체 등 장치별로 서로 다른 
인터페이스를 하나로 통합 기술`,remark:`통합, 초고속 처리, pcie 대체
프로토콜(cxl.io, cxl.cache, cxl.memory)
device(type 1 caching, type 2 with memory,
 type 3 memory buffer)
활용(CXL-PNM)`,image:["static/images/cellImage_1186147548_268.jpg","static/images/cellImage_1186147548_269.jpg","static/images/cellImage_1186147548_270.jpg"]},{index:3,topic:"129회 응용 1교시",define:`Control 신호를 추가로 입력받는 
스위치가 있는 버퍼`,head:`3상태
high, low, high-impedance
control 신호`,remark:null,image:[]},{index:174,topic:"Cache Memory",define:`129회 응용 1교시
131회 응용 4교시
132회 응용 4교시`,head:`메인 메모리와 CPU간의 데이터 속도 
향상을 위한 중간 버퍼 역할을 메모리`,remark:`속도차이, 워드전송/블록전송
유형(L1, L2, L3)
지역성(시간, 공간)
결과(hit, miss)
사상(direct, full associative, set associative)
쓰기(write through, write back)
교체(LRU, LFU)
일관성(VI, MESI, 스누피, Flush, Clean)`,image:["static/images/cellImage_1186147548_271.jpg","static/images/cellImage_1186147548_272.jpg"]},{index:175,topic:"> 쓰기정책 (Write Policy)",define:`129회 응용 1교시
132회 응용 4교시`,head:`캐시 메모리에 데이터를 언제 저장
할지를 결정`,remark:`언제저장, 
write miss(no write allocation, 
write allocation)
유형(write through, write back)`,image:[]},{index:176,topic:"> 지역성 (Locality)",define:"131회 응용 4교시",head:`캐시의 적중률(Hit rate)을 극대화하여 
캐시가 효율적으로 동작하는 성질`,remark:`hit rate, 
유형(시간, 공간, 순차)`,image:["static/images/cellImage_1186147548_273.jpg"]},{index:177,topic:"> 캐시 일관성 (Coherence)",define:`131회 응용 4교시
132회 응용 4교시`,head:`여러 캐시간의 데이터 일관성을 
유지하는 기법`,remark:`불일치 원인(변경가능 데이터 공유, 멀티
프로세서)
일관성유지(SW, HW)
SW(공유캐시, 공유변수 캐시 미사용)
HW(디렉토리, 스누피) 
VI, MESI
Cache Flush, Cache Clean`,image:[]},{index:178,topic:"MESI 프로토콜",define:"135회 응용 2교시",head:"Cache의 일관성 유지를 위해, 메모리 상태를 Modified, Exclusive, Shared, Invalid 네 가지로 정의한 Cache일관성 유지 프로토콜",remark:"멀티프로세스 시스템에서 메모리의 상태를 4가지로 관리하므로, VI 프로토콜보다 세부적인 일관성 유지가 가능함",image:["static/images/cellImage_1186147548_274.jpg","static/images/cellImage_1186147548_275.jpg"]},{index:179,topic:"> 주소매핑 (Mapping)(=사상)",define:"132회 응용 4교시",head:`캐시메모리와 주기억장치 
사이에서의 매핑`,remark:`캐시 데이터 = 주메모리 데이터
유형(직접, 완전연관, 집합연관)`,image:[]},{index:180,topic:"폴락의 법칙(Pollack’s Rule)",define:"132회 응용 1교시",head:`cpu의 성능향상은 다이 크기 증가의 
제곱근 정도만 가능하다는 법칙`,remark:`2배 크기 증가 -> 성능 1.4배 증가
극복(멀티코어)`,image:["static/images/cellImage_1186147548_276.jpg"]},{index:181,topic:"TPM (Trusted Platform Module)",define:"132회 관리 1교시",head:`안전한 부팅과 데이터 보호 기능을 
제공하는 하드웨어 기반 보안 모듈`,remark:`보안, 신뢰성 HW, SO/IEC 11889
기능(암호화, 보안부팅, 키관리, 
데이터보호)
HSM`,image:["static/images/cellImage_1186147548_277.jpg","static/images/cellImage_1186147548_278.jpg"]},{index:182,topic:"인터럽트(Interrupt)",define:"132회 응용 2교시",head:`예기치 않은 상황이 발생할 경우 
현재 실행 중인 작업을 중단하고 
발생된 상황을 처리한 후 다시 실행
중인 작업으로 복귀하는 것`,remark:`IRQ, IVT, ISR
종류/우선순위(전원 -> 기계 -> 외부 -> 
입출력 -> 내부 -> SW)
동작(요청 IRQ -> 처리 ISR -> 복구)
처리(polling, daisy chain, vector)
처리(순차, 중첩)`,image:["static/images/cellImage_1186147548_279.jpg"]},{index:183,topic:"교착 상태 (Dead Lock)",define:`132회 응용 4교시
134회 응용 2교시`,head:`다중 프로그램 환경에서 두 개 이상의 
프로세스가 아무리 기다려도 자원을 
사용할 수 없는 무한 대기 상태`,remark:`조건(상호배제, 점유와 대기, 비선점, 
환형대기)
해결(예방, 회피(banker's, wait-die, wound-
wait), 발견(자원할당), 회복, 무시)`,image:[]},{index:184,topic:"병렬 컴퓨팅",define:"134회 응용 4교시",head:`두개이상의 프로세스가 동시에 
실행되는 컴퓨팅`,remark:`병렬프로세서(멀티프로세서)
동시실행, 동기화, IPC, 
스케쥴링(SQMS, MQMS)
프로세서유형(Hetero, Homo)`,image:[]},{index:185,topic:"> 병렬 프로세서",define:"134회 응용 4교시",head:`두개 이상을 동시에 처리하도록 
연결된 프로세서`,remark:`멀티프로세서
유형(Hetero, Homo)
사례(APU, GPGPU, 멀티 GPU, CPU)
명령어분류(SISD, SIMD, MISD, MIMD)
메모리공유분류(SMP, DMP, Clustering)`,image:[]},{index:186,topic:"Split Brain",define:"126회 응용 1교시",head:`클러스터로 구성된 두 시스템 그룹간
네트워크의 일시적 동시단절 현상 
발생시 나타나는 현상`,remark:`원인(네트워크 단절)
이중가동, 데이터정합성 이슈
해결(홀수 쿼럼/샤드, heartbeat, 
마스터노드 설정, 정족수 투표)`,image:["static/images/cellImage_1186147548_280.jpg"]},{index:187,topic:"정보시스템 하드웨어 규모산정",define:`126회 응용 1교시
129회 응용 2교시
133회 관리 2교시
135회 응용 1교시`,head:`기본 용량과 성능 요구사항이 제시
되었을 경우 이를 시스템 
요구사항으로 변환하여 산정하는 
기법`,remark:`절차(기초자료 > 업무분석 > 규모산정 
> 가중치 적용)
방법(수식, 참조, 시뮬레이션)
대상(cpu, memory, disk, storage)
참고) 정보시스템 하드웨어 규모산정 지침
(TTAK.KO-10.0292/R3)`,image:["static/images/cellImage_1186147548_281.jpg","static/images/cellImage_1186147548_282.jpg"]},{index:188,topic:"가상화(Virtualization)",define:`129회 관리 2교시
132회 응용 3교시
133회 관리 1교시
134회 관리 1교시`,head:`실행되는 기반 운영 체제로부터 응용 
소프트웨어를 캡슐화 하여 가상화로
동작시키는 소프트웨어 기술`,remark:`유형(응용프로그램, 스토리지, 네트워크,
리소스)
VM, Docker, container
쿠버네티스`,image:[]},{index:189,topic:"> 응용 프로그램 가상화 (Application Virtualization)",define:"129회 관리 2교시",head:`실행되는 기반 운영 체제로부터 응용 
소프트웨어를 캡슐화하는 소프트웨어 
기술`,remark:`동작(환경설정 > 식별 > 배포 및 사용 >
모니터링)
RDP, Rlogin, RCoIP, VDI, 데스크톱 가상화`,image:[]},{index:190,topic:">> 원격데스크톱 프로토콜(Remote Desktop Protocol)",define:"129회 관리 2교시",head:`다른 PC에 그래픽 사용자가 
인터페이스를 통해 원격으로 동작이
가능하도록 도와주는 프로토콜`,remark:`Port 3389
Telnet, RDP, Rlogin, RCoIP, ARD`,image:[]},{index:191,topic:"> 스토리지 가상화 (Storage Virtualization)",define:"134회 관리 1교시",head:`여러 물리적 스토리지 장치를 단일 
논리적 스토리지 풀로 통합하여 
사용자가 효율적으로 관리하고 
접근할 수 있도록 하는 기술`,remark:`스토리지를 가상화
위치기반(호스트, 네트워크, 어레이)
계층기반(블록, 파일, 객체)
사례(DAS, NAS, SAN, SDS)`,image:[]},{index:192,topic:"> 가상머신(VM, Virtual Machine)",define:`128회 응용 1교시
132회 응용 3교시`,head:`가상머신을 사용하여 여러 운영체제 
또는 환경을 동시에 실행할 수 있는 
가상화 기술`,remark:`하이퍼바이저, VM스냅샷, R-IOV
종류(전가상화, 반가상화)
타입(베어메탈, hosted), 모놀로식 서비스`,image:["static/images/cellImage_1186147548_283.jpg"]},{index:193,topic:"> 컨테이너 (Container)",define:`128회 응용 1교시
132회 응용 3교시`,head:`실행에 필요한 모든 파일을 포함한 
전체 실행환경에서 애플리케이션을 
패키징하고 격리하는 기술`,remark:`컨테이너 엔진, 도커, LXC, OpenVZ
구성(Cgroup, Namespace, Libvirt),
마이크로서비스`,image:[]},{index:194,topic:">> 쿠버네티스(Kubernetes)(=k8s)",define:"133회 관리 1교시",head:`컨테이너화된 워크로드와 서비스를 
관리하기 위한 이식성과 확장성을 
갖춘 오픈소스 플랫폼`,remark:`기능(오케스트레이션, 자동화)
구성(master, worker, user)
master node(api server, scheduler, manager, 
etcd)
worker node(pod, kubelet, kube-proxy)`,image:["static/images/cellImage_1186147548_284.jpg"]},{index:195,topic:">>> HPA(Horizontal Pod Autoscaler)",define:"137회 관리 4교시",head:"쿠버네티스에서 Pod 개수를 자동으로 스케일링 해주는 핵심 기능(수평 확장)",remark:null,image:["static/images/cellImage_1186147548_285.jpg","static/images/cellImage_1186147548_286.jpg","static/images/cellImage_1186147548_287.jpg"]},{index:196,topic:"코드형 인프라스트럭처(IaC, Infrastructure as Code)",define:"129회 관리 1교시",head:`자동화된 인프라 실현을 위해 변경, 
추가 등의 작업을 스크립트를 이용한 
소프트웨어로 구성하는 기법`,remark:`클라우드 네이티브, 프로비저닝, 
인프라 자동화
Serverless computing, Bootstrap, 
Configuration, Orchestration,`,image:["static/images/cellImage_1186147548_288.jpg"]},{index:197,topic:"데이터 저장",define:"130회 관리 3교시",head:`서비스를 위한 데이터를 파일, 
데이터베이스, 블록체인 등에 
효율적으로 저장 및 관리`,remark:"방식(파일, 데이터베이스, 블록체인)",image:[]},{index:198,topic:"스토리지 데이터 접근방식",define:"132회 관리 1교시",head:"스토리지에 데이터를 접근하는 방식",remark:`방식(파일스토리지, 블록스토리지, 
오브벡트 스토리지)`,image:["static/images/cellImage_1186147548_289.jpg","static/images/cellImage_1186147548_290.jpg"]},{index:199,topic:"RAID (Redundant Array of Inexpensive Disk)(= Redundant Array of Independent Disk)(=Disk Array)",define:"131회 응용 3교시",head:`가용성 및 성능향상을 위해 복수 
디스크를 사용하여 데이터를 분산 
또는 중복 저장하는 기술`,remark:`중복, 분산 저장, Striping, Mirroring
유형(RAID 0, 1, 2, 3, 4, 5, 6, 0+1, 1+0, 5+1)
HW(Adapter), SW(OS)`,image:["static/images/cellImage_1186147548_291.jpg","static/images/cellImage_1186147548_292.jpg"]},{index:200,topic:"> RAID5(=블록 인터리브된 분산 패리티)",define:"131회 응용 3교시",head:`데이터를 블록 단위로 분산하고 
패리티도 분산하여 통합 저장한 
하드디스크로 구성된 RAID`,remark:"데이터분산, 패리티분산",image:[]},{index:201,topic:"> RAID6",define:"131회 응용 3교시",head:`Block 레벨의 Striping과 Double Parity 
사용하는 RAID`,remark:"double Parity 분산 제공",image:[]},{index:202,topic:"MMU(Memory Management Unit)",define:"135회 응용 1교시",head:`- 프로그램 상의 논리적 주소를 실제 물리적 주소로 변환하여 실행시키는 장치
TLB가 없으면 MMU는 메모리에 항상 두번 접근`,remark:"가상주소 > 물리주소 검색 > 주소신호발생 > 해당 주소 데이터 출력",image:["static/images/cellImage_1186147548_293.jpg"]},{index:203,topic:"동적 메모리 할당",define:"136회 관리 3교시",head:`프로그램 실행 시간 (runtime) 에 필요한 만큼의 메모리 공간을 운영체제로
부터 할당 받고, 더 이상 사용하지 않을 때 운영체제에 반환하는 과정`,remark:null,image:["static/images/cellImage_1186147548_294.jpg"]},{index:204,topic:"메모리 누수(Memory Leak)",define:"136회 관리 3교시",head:`동적으로 메모리를 할당한 후 더 이상 사용하지 않음에도 반환하지 않아
해제되지 않은 메모리 공간이 계속 점유되는 현상`,remark:null,image:["static/images/cellImage_1186147548_295.jpg","static/images/cellImage_1186147548_296.jpg"]},{index:205,topic:"소프트웨어 프로세스 (SP, Software Process) 인증",define:"134회 응용 4교시",head:`SW기업(또는 조직) 및 개발조직의 
SW프로세스 품질역량 수준을 
심사하여 등급을 부여하는 제도`,remark:`품질향상, 신뢰성 향상
기준(프로젝트관리, 개발, 지원, 조직관리, 
프로세스 개선)
 5개영역, 16개항목, 63개 세부항목
등급(1,2,3등급)
절차(신청 > 현장심사 > 결과)`,image:["static/images/cellImage_1186147548_297.jpg"]},{index:206,topic:"소프트웨어 비용 / 규모 산정",define:`126회 관리 2교시
128회 관리 1교시
131회 관리 4교시
132회 관리 3교시
132회 관리 4교시`,head:`SW 개발에 필요한 기능과 규모를 
기반으로 비용을 산정하는 방식`,remark:`유형(하향식, 상향식, 수학적)
하향식(전문가, 델파이)
상향식(LOC, M/M)
수학적(COCOMO, FP)
기준(doty, putnam, fp, halstead, mccabe)
고려(프로젝트, 자원, 생산성)
유지보수비용(SW요율, 투입공수, 
고정비/변동비)
SW대가산정가이드
개선방안(요구사항 명확, 비용 현실화, 
전문가도입)`,image:["static/images/cellImage_1186147548_298.jpg"]},{index:207,topic:"> 소프트웨어 사업 대가산정",define:"132회 관리 3교시",head:`SW 진흥법 10 조에 의거하여, SW 
수명주기 중 운영 단계 사업 및 
서비스의 적정대가를 산정 지침`,remark:`유지관리(응용, 상용, 공개, 보안성)
운영(SW, 보안관제)
재개발
대가산정(응용SW요율제, 투입공수,
고정비/변동비)
개발비, 직접경비, 제경비, 기술료`,image:["static/images/cellImage_1186147548_299.jpg"]},{index:208,topic:"인공지능 도입사업 대가산정",define:"137회 관리 4교시",head:`인공지능(AI) 서비스 도입 사업
비는 서비스 가격표 또는 견적서에 제시된 이용료(구독료)와 투입 공
수 방식의 전문작업비에 따라 대가
를 산정하는 방식`,remark:null,image:["static/images/cellImage_1186147548_300.jpg","static/images/cellImage_1186147548_301.jpg","static/images/cellImage_1186147548_302.jpg"]},{index:209,topic:"> 기능점수 (Function Point)",define:"126회 응용 1교시",head:`논리적 설계를 기초로 SW의 기능을 
정량화 하고, 계수적 측정을 통한 
실험적 관계를 통해 개발규모를 
산정하는 방법`,remark:`요구사항, 전체, 일관성확보, 규모산정
유형(간이법, 정통법)
간이법(평균복잡도 적용, 데이터, 
트랜잭션)
정통법(정확한 기능점수산정, DET, RET, 
FTR)`,image:["static/images/cellImage_1186147548_303.jpg"]},{index:210,topic:"> 소프트웨어 개발 프로젝트의 품질비용",define:"128회 관리 1교시",head:`소프트웨어 개발 프로젝트를 진행
동안 프로젝트 생명주기에 걸쳐 
품질과 관련하여 발생하는 비용`,remark:"확보(예방, 평가), 실패(내부, 외부)",image:["static/images/cellImage_1186147548_304.jpg","static/images/cellImage_1186147548_305.jpg"]},{index:211,topic:"개념적 객체 모델 (Conceptual Object Model)",define:"126회 관리 2교시",head:`객체들을 확인해서 개념적으로 
정의한 모델`,remark:"포괄적, 특정시점",image:[]},{index:212,topic:"시퀀스 다이어그램 (Sequence Diagram)(=순차 다이어그램)",define:`126회 관리 2교시
127회 관리 4교시`,head:`객체간 주고받는 순서 및 시간 흐름 
따라 보여주는 다이어그램`,remark:`객체의 동작 설계
시간 순서, 동적 상호작용
구성(frame, object, lifeline, box message, 
guard)`,image:["static/images/cellImage_1186147548_306.jpg","static/images/cellImage_1186147548_307.jpg"]},{index:213,topic:"클래스 다이어그램 (Class Diagram)",define:"126회 관리 2교시",head:`객체타입, 관계를 표현하는 
다이어그램`,remark:`객체에 대한 설계
구조, 관계, 접근자`,image:["static/images/cellImage_1186147548_308.jpg","static/images/cellImage_1186147548_309.jpg"]},{index:214,topic:"활동 다이어그램(Activity Diagram)",define:"137회 관리 4교시",head:`객체의 상태가 아닌 처리 로직이나 조건에 따른 처리흐름을 순서에 따라
정의한 행위 다이어그램`,remark:null,image:["static/images/cellImage_1186147548_310.jpg","static/images/cellImage_1186147548_311.jpg"]},{index:215,topic:"상태 다이어그램(State Diagram)",define:"137회 관리 4교시",head:`시스템 행위를 명세하기 위해 대상 행위를 상태들의 집합으로 구분한 후
그 상태들 간의 전이 관계와 조건을 명세한 행위 다이어그램`,remark:null,image:["static/images/cellImage_1186147548_312.jpg","static/images/cellImage_1186147548_313.jpg"]},{index:216,topic:"유스케이스 다이어그램(Use-Case Diagram)",define:"137회 관리 4교시",head:`시스템 제공 기능 및 그와 관련 외부요소를 사용자 관점에서 요구사항을
표현하는 다이어그램`,remark:null,image:["static/images/cellImage_1186147548_314.jpg","static/images/cellImage_1186147548_315.jpg"]},{index:217,topic:"전자정부 웹사이트 UI/UX 가이드라인",define:`126회 관리 3교시
133회 관리 2교시`,head:`사용자에 대한 이해를 바탕으로 
전자정부 서비스를 효율적으로 
제공할 수 있는 설계 방안을 
제공하는 가이드라인`,remark:`설계기준7가지(정보제공, 시간최소화, 
일관성)
품질요인(웹접근, 웹호환, 웹개방, 웹최적화)
웹접근(누구나 동등하게 접근, 24개지표)
웹호환(모든환경가능, 3개지표)
웹개방(제한없이 접근, 4개지표)
웹최적화(낮은응답시간, 2개지표)`,image:[]},{index:218,topic:"> 디지털 정부서비스 UI/UX 가이드라인",define:"133회 관리 2교시",head:`행정기관 및 공공기관이 준수해야 할 
디지털정부 서비스 UI/UX에 대한 
세부사항을 가이드라인으로 제공`,remark:`공공기관 준수
구성(원칙, 스타일, 컴포넌트, 기본패턴,
서비스패턴)
대상(중앙행정기관, 공공기관, 지자체)
활용(전반적개선, 부분개선, 모바일개선)
목적(이용자만족, 비용절약)
특징(실효성, 포용성, 일관성)`,image:[]},{index:219,topic:"디자인패턴",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_316.jpg","static/images/cellImage_1186147548_317.jpg","static/images/cellImage_1186147548_318.jpg"]},{index:220,topic:"디자인패턴",define:`129회 관리 2교시
131회 관리 2교시`,head:`재사용 가능한 객체지향 설계를 
만들기 위해 유용한 공통의 
설계 구조로부터 중요 요소들을 
식별하여 이들에게 적당한 이름을 
주고 추상화 하는 기법`,remark:`개발자관점
4 요소(패턴이름, 문제, 해법, 결과)
원칙(캡슐화, 위임, Loosely Coupling)
유형(생성, 구조, 행위)
생성(Singleton), 구조(Facade), 
행위(Strategy)
재사용가능, 설계
아키텍처스타일, 리팩토링 비교`,image:["static/images/cellImage_1186147548_319.jpg"]},{index:221,topic:"프록시(Proxy) 디자인패턴",define:"136회 관리 1교시",head:"접근대상 객체와 동일한 인터페이스를 제공하는 대리인 객체를 이용해 타겟 객체 접근 전에 추가적인 작업의 기회를 제공하는 패턴",remark:`* 구성요소 
- Subject: RealSubject와 Proxy의 공통적인 인터페이스를 정의
- RealSubject: Client가 실제 접근하려는 타겟 객체
- Proxy: RealSubject와 동일한 인터페이스, 대리인 객체`,image:["static/images/cellImage_1186147548_320.jpg","static/images/cellImage_1186147548_321.jpg"]},{index:222,topic:"소프트웨어 아키텍처",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_322.jpg","static/images/cellImage_1186147548_323.jpg","static/images/cellImage_1186147548_324.jpg"]},{index:223,topic:"아키텍처 스타일",define:"131회 관리 2교시",head:`SW 시스템을 구성하는 서브 시
스템이나 컴포넌트 구성요소 간
관계를 분리하는 시스템 구조`,remark:`아키텍트관점
유형(MVC, MVP, MVVP, 서버-클라이언트,
브로커)
원리모듈화, 추상화
내용(구성요소, 상호관계, 구성방식,
의미, 매커니즘)
디자인패턴 비교
ABAS(아키텍처스타일+프레임워크)`,image:["static/images/cellImage_1186147548_325.jpg","static/images/cellImage_1186147548_326.jpg"]},{index:224,topic:"소프트웨어 아키텍처 분석",define:`126회 관리 3교시
128회 관리 1교시
131회 응용 1교시`,head:`SW 아키텍처의 사전 발생 가능한 
위험요소 제거와 SW 구조의 
평가 및 개선을 위한 활동`,remark:`필요성(의사소통, 위험감소)
방법(정방향, 역방향)
정방향(시나리오, 시뮬레이션, 수학적)
역방향(역공학, 재공학)
평가(SAAM, ATAM, CBAM)
스타일(layer, server & client)`,image:["static/images/cellImage_1186147548_327.jpg","static/images/cellImage_1186147548_328.jpg"]},{index:225,topic:"> ATAM (Architecture Trade-off Analysis Method)",define:`126회 관리 3교시
131회 응용 1교시`,head:`SW 아키텍처 품질 목표 간의 
Trade-Off 및 민감도 분석을 통한 
시나리오 기반 아키텍처 평가 기법`,remark:`Trade-off, 정방향분석평가기법
단계(소개 > 조사,분석 > 테스트 > 보고)
단점(ROI, 경제성 어려움) => CBAM`,image:["static/images/cellImage_1186147548_329.jpg"]},{index:226,topic:"> CBAM (Cost Benefit Analysis Method)",define:`128회 관리 1교시
131회 응용 1교시`,head:`ATAM 에서 부족한 경제적 부분을 
보강하여 아키텍처 전략적 비용을 
측정한 SW 아키텍처 평가 모델`,remark:`ROI, ATAM + 경제성
프로세스(시나리오 > 효용반응 > 
이익계산 > 검증)`,image:["static/images/cellImage_1186147548_330.jpg"]},{index:227,topic:"소프트웨어 개발 보안 가이드",define:"126회 응용 3교시",head:`사이버 보안 위협에 대응할 수 있는 
안전한 소프트웨어 개발하기 위한 
일련의 보안 활동`,remark:`안전한 SW 개발
대상(감리대상, 신규개발, 유지보수)
유형(설계, 개발)
기준(입력값 검증, 업로드 및 다운로드 
검증)`,image:[]},{index:228,topic:"상용소프트웨어를 직접 구매(=분리발주)",define:`126회 응용 4교시
129회 응용 1교시
131회 응용 4교시`,head:`HW, SW구매 시 상용소프트웨어만을 
별도로 발주, 평가·선정, 계약 방식`,remark:`분리발주, 직접구매, 하도급 폐해 방지
대상(3억이상, SW 5천만원이상)
절차(사업비산정, 구매계획, 제외검토, 발주)
예외(비용상승, 지연, 비효율)
일괄발주 개선`,image:["static/images/cellImage_1186147548_331.jpg","static/images/cellImage_1186147548_332.jpg"]},{index:229,topic:"과업심의",define:"128회 관리 3교시",head:`공공소프트웨어 사업 추진 시 발주 
전에 과업심의위원회를 통하여 
사업계획서 또는 제안요청서를 
심의하여 그 결과를 제안요청서 
등에 반영하기 위한 절차`,remark:`과업변경심의위원회
소프트웨어 사업영향평가 확인
절차(요청 > 심의 > 결과 > 확정)
검토(FP, 기초, 유사사업, 특이사항)
직접구매 예외 확인`,image:["static/images/cellImage_1186147548_333.jpg","static/images/cellImage_1186147548_334.jpg"]},{index:230,topic:"> 소프트웨어사업 영향평가",define:`128회 응용 1교시
132회 응용 3교시`,head:`공공정보화사업의 기획단계에서 
민간시장 침해 등 SW 산업 생태계에 
미치는 영향을 평가하여 개선의견을 
제시하는 제도`,remark:`민간침해 등 평가
결과(없음, 최소화, 재검토)
대상(국가기관, 지자체 투자법인, 기관)
체계(기준, 방법, 절차)
항목(민간침해, 필요성/공공성)
활용(SW과업심의)`,image:["static/images/cellImage_1186147548_335.jpg"]},{index:231,topic:"스프링 부트(Spring Boot)",define:"127회 관리 1교시",head:`복잡한 설정 없이 쉽고 빠르게 사용할 수 
있도록 필요한 설정을 미리 세팅한 프레임워크`,remark:`spring framework, 빠른 사용
layer(controller, service, repository, domain)
기능(starter, tomcat, CLI, AutoConfig, 
Actuator)
Facade 패턴`,image:["static/images/cellImage_1186147548_336.jpg"]},{index:232,topic:"무중단 배포",define:`127회 관리 2교시
134회 관리 3교시
135회 관리 4교시`,head:`비즈니스의 연속성과 안정성을 
보장하기 위해 운영 환경에 소스 
배포 시 서비스가 중단되지 않도록 
배포하는 방법`,remark:`중단배포 문제(기존 서비스 연결해제, 
손실)
기술(리버스 프록시, 로드 밸런싱)
유형(Rolling update (Ramped, Incremental), 
Blue/Green(Red-Black), Canary)`,image:["static/images/cellImage_1186147548_337.jpg","static/images/cellImage_1186147548_338.jpg"]},{index:233,topic:"> 리버스 프록시 (Reverse Proxy)",define:`127회 관리 2교시
128회 관리 4교시`,head:`컴퓨터 네트워크에서 클라이언트를 
대신해서 한 대 이상의 서버로부터 
자원을 추출하는 프록시`,remark:`기능(무중단배포환경지원)
특징(로드밸런싱, 성능향상)
매핑(정상, 역방향)
절차(요청 -> 전달 -> 응답 -> 응답 전달)`,image:["static/images/cellImage_1186147548_339.jpg"]},{index:234,topic:"> 로드 밸런싱(Load Balancing)",define:"127회 관리 2교시",head:`컴퓨터 네트워크 기술의 일종으로 
둘 혹은 셋이상의  컴퓨터 
자원들에게 작업을 나누는 기술`,remark:`기능(작업분산, 배포시 부하분산)
로드밸런서(L4 로드밸런서, L7로드밸런서)
알고리즘(Round Robin, Least Connection, 
Least Response)
NLB, ALB, FLB, SLB, CLB, GWLB`,image:["static/images/cellImage_1186147548_340.jpg"]},{index:235,topic:"리팩토링 (Refactoring)",define:`127회 관리 3교시
129회 관리 2교시
129회 응용 1교시`,head:`SW의 유지보수 및 개발 생산성을 
향상하기 위해 외부로 보이는 
동작의 변화 없이 내부 구조를 
개선하는 기법`,remark:`목적(유지보수향상, 품질향상)
코드스멜 제거
순서(수정 > 테스트 > 결과)
기법(Move, Extract, Rename)
재사용가능, 구현, 3R, 디자인패턴 비교`,image:["static/images/cellImage_1186147548_341.jpg"]},{index:236,topic:"> 코드스멜 (Code Smell)",define:"127회 관리 3교시",head:`프로그램 가독성이 나쁘고 중복된 
로직을 포함하는 등 코드품질을 
저하시키는 요인`,remark:`품질저하
특징(중복, 읽기 어려움)
종류(중복코드, 긴 메소드, 긴 클래스, 
파라미터 길이)
해결(리팩토링)`,image:["static/images/cellImage_1186147548_342.jpg","static/images/cellImage_1186147548_343.jpg"]},{index:237,topic:"> 3R",define:"133회 관리 1교시",head:`SW 생산성 극대화 위해 역공학, 
재공학, 재사용 기법을 사용하는 
공학적 접근법`,remark:`생산성 극대화
역공학(자료, 논리), 
재공학(재구조, 재모듈),
재사용(OOP, CBD), 리팩토링`,image:["static/images/cellImage_1186147548_344.jpg"]},{index:238,topic:"MSA(Micro Service Architecture)",define:`127회 관리 4교시
135회 응용 1교시`,head:`독립적으로 배포 가능한 서비스의 
조합으로 어플리케이션을 설계하는
SOA를 근간으로 한 분산 시스템 
아키텍처`,remark:`특징(데이터분리, 이기종 가능, 
서비스 단위)
원칙(명확한 경계, 독립적배포)
API Gateway, Service Mesh, 
saga 패턴, CQRS패턴`,image:["static/images/cellImage_1186147548_345.jpg","static/images/cellImage_1186147548_346.jpg"]},{index:239,topic:"> 서비스 매쉬 (Service Mesh)",define:"127회 관리 4교시",head:`MSA 환경에서 서비스 간의 호출제어 
및 오버헤드를 최소화 하기 위한 
네트워킹 기술`,remark:`sidecar, proxy
구성(configuration, discovery, LB, routing, 
circuit breaker, heart check)
유형(native, aware, agnostic)`,image:["static/images/cellImage_1186147548_347.jpg","static/images/cellImage_1186147548_348.jpg"]},{index:240,topic:"모놀리스 아키텍처 (Monolith Architecture)",define:`127회 관리 4교시
135회 응용 1교시`,head:`하나의 Large Application으로 구성된
Legacy 시스템 아키텍처`,remark:"하나, 전체, 하나의 공간 저장",image:["static/images/cellImage_1186147548_349.jpg","static/images/cellImage_1186147548_350.jpg"]},{index:241,topic:"모듈화(Module)",define:`128회 관리 3교시
129회 관리 1교시`,head:`분해하고 추상화하여 소프트웨어의 
성능을 향상시키는 설계 기법`,remark:`모듈화
기법(응집도, 결합도, Fan-in, Fan-out)`,image:["static/images/cellImage_1186147548_351.jpg"]},{index:242,topic:"> 응집도 (Cohesion)",define:"128회 관리 3교시",head:`명령어나 호출문 등의 모듈의 내부 
요소들의 서로 관련 있는 정도`,remark:`모듈 내부 관련
단계(기능 > 순차 > 통신 > 절차 > 시간 
> 논리> 우연)
높을수록 좋음`,image:["static/images/cellImage_1186147548_352.jpg"]},{index:243,topic:"> 결합도 (Coupling)",define:`128회 관리 3교시
129회 관리 1교시`,head:`결합도는 모듈 간에 상호 의존하는 
정도`,remark:`모듈간 관련
척도(자료 < 스탬프 < 제어 < 외부 < 공유 
<  내용)
낮을수록 좋음`,image:["static/images/cellImage_1186147548_353.jpg"]},{index:244,topic:"> Fan-In (=공유도)",define:"128회 관리 3교시",head:"어떤 모듈을 제어(호출)하는 모듈의 수",remark:`많을수록 좋음
응집도가 높고 처리 기능의 분해가 좋음`,image:["static/images/cellImage_1186147548_354.jpg"]},{index:245,topic:"> Fan-Out(=제어도)",define:"128회 관리 3교시",head:`어떤 모듈어 의해 제어(호출)되는 모듈
의 수`,remark:`적을수록 좋음
중간 관리 단계 삽입 필요`,image:["static/images/cellImage_1186147548_355.jpg"]},{index:246,topic:"AOP(Aspect Oriented Programming)",define:"129회 관리 1교시",head:`핵심 관심사(Core Concerns)에 대한 
관점과 횡단 관심사(Cross�cutting 
Concerns)에 대한 관점들로 분해해 
직교(Weaving) 을 통해 프로그램을 
구현하는 기법`,remark:`핵심관심사, 횡단관심사, Advice, Join Point,
Aspect, Weaving, Point cut
OOP보완`,image:["static/images/cellImage_1186147548_356.jpg"]},{index:247,topic:"객체지향 프로그래밍(OOP, Object-Oriented Programming)",define:`129회 관리 1교시
131회 관리 1교시
132회 응용 3교시
134회 관리 1교시`,head:`필요한 데이터를 추상화 시켜 상태와 
행위를 가진 객체 로 만들고, 
객체들간의 상호작용을 통해 로직을 
구성하는 프로그래밍 방법`,remark:`객체+메소드, 재사용, 반복
설계(SRP, OCP, LSP, ISP, DIP)
특징(캡슐화, 추상화, 다형성, 정보은닉,
상속성, 연관규칙)
단점개선(AOP, CBD)`,image:[]},{index:248,topic:"> 캡슐화(Encapsulation)",define:`129회 관리 1교시
131회 관리 1교시`,head:`속성(데이터)과 이 자료를 처리하는 
메소드(연산)가 결합하여 객체라는 
단위로 묶여서 사용되는 원리`,remark:`정보은닉, 독립성, 높은응집도, 
낮은결합도, 재사용성, 유지보수, 
종속성 최소화
방법(속성+메소드)
접근지정자(private, public)`,image:["static/images/cellImage_1186147548_357.jpg","static/images/cellImage_1186147548_358.jpg"]},{index:249,topic:"> 정보은닉(Information Hiding)",define:`131회 관리 1교시
134회 관리 1교시`,head:`특정 모듈의 정보를 필요로 하지 않는 
모듈이 접근하지 못하도록 세부 내용 
은폐하고 설계하는 기법`,remark:`추상화, 접근제한, 데이터보호
private, public, protected
구현방식(접근제어, 업캐스트, I/F, 캡술화)`,image:["static/images/cellImage_1186147548_359.jpg"]},{index:250,topic:"> SOLID",define:"132회 응용 3교시",head:`소프트웨어 개발 및 유지보수성 
향상을 위한 설계관점의 기본원칙`,remark:"SRP, OCP, LSP, ISP, DIP",image:["static/images/cellImage_1186147548_360.jpg","static/images/cellImage_1186147548_361.jpg"]},{index:251,topic:"대규모 공공 차세대 시스템",define:"129회 관리 2교시",head:`현재의 비즈니스와 IT의 근본적인 
혁신을 통해 새로운 경영환경 
변화에 유연하게 대처할 수 있는 
정보시스템`,remark:`발생이슈(요구사항, 대가지급, 검수미흡)
대응(요구사항명확, 과업심의, 감리, 
테스트)
지표(적합, 정밀, 신뢰, 호환, 이식)`,image:[]},{index:252,topic:"Agile 방법론(Agile Methodology)",define:`129회 응용 1교시
129회 관리 2교시
131회 관리 1교시
134회 응용 1교시`,head:`절차보다 사람을 중심으로 변화에
유연, 신속대응하는 방법론`,remark:`사람 중심, 변화 유연
점진적, bottom-up, 반복, 적응형
유형(XP, Kanban, Scrum)
기법(페어프로그래밍, 핑퐁프로그래밍)
타방법론비교(구조적, 폭포수)
장점(Roi,  생산성향상)
단점(오버헤드, 감리)`,image:[]},{index:253,topic:"> 스크럼",define:"129회 관리 2교시",head:`짧은 스프린트 기간 동안 점진적, 
반복적으로 소프트웨어를 개발하는 
방법론`,remark:`구성(제품백로그, 스프린트 백로그, 
스프린트)
회의(백로그, 계획, 데일리, 리뷰, 회고)
역할(owner, master, scrum team)`,image:[]},{index:254,topic:"> 칸반",define:"129회 관리 2교시",head:`적시 개발을 지원하는 방법론으로 매
우 적은 규칙을 가지고 있는 Agile 
방법론`,remark:`적시개발, 칸반보드, work queue
워크플로우 가시화, wip제한, total 
cycle time`,image:["static/images/cellImage_1186147548_362.jpg"]},{index:255,topic:"> 페어 프로그래밍 (Pair Programming)",define:"129회 응용 1교시",head:`나의 개발 가능한 PC 에서 두 명의 
개발자가 함께 작업하는 것`,remark:`두 명의 개발자, XP
역할(드라이버, 네비게이터)
종류(핑퐁, 포모도로, 스트롱스타일)`,image:["static/images/cellImage_1186147548_363.jpg"]},{index:256,topic:">> 핑퐁 프로그래밍 (Ping Pong Programming)",define:"129회 응용 1교시",head:`TDD와 규칙적 역할 교환을 이용한 
페어프로그래밍 기법`,remark:`페어프로그래밍 + TDD
역할(테스트, 코드)`,image:["static/images/cellImage_1186147548_364.jpg"]},{index:257,topic:"> 구조적 방법론(Structured Development Methodology)",define:"129회 관리 2교시",head:`시스템 기능에 따라 분할하여 
개발하고 통합하는 방법론`,remark:`Divide and Conquer, 기능, Top-down
구조적 분석, (DFD, ERD, STD, DD)`,image:["static/images/cellImage_1186147548_365.jpg"]},{index:258,topic:"> 폭포수 개발 방법론(Waterfall Methodology)",define:"131회 관리 1교시",head:`요구분석, 설계, 개발, 테스트 단계를 
반복없이 순차적으로 진행하는 
고전적 SW 개발 방법론`,remark:"단계별, 순차적, top-down",image:["static/images/cellImage_1186147548_366.jpg","static/images/cellImage_1186147548_367.jpg"]},{index:259,topic:"제품계열(Product Line) 방법론",define:"136회 관리 2교시",head:"유사한 기능을 갖는 소프트웨어 제품들을 체계적으로 재사용 가능한 핵심 자산(Core Assets)을 중심으로 개발함으로써, 개발 생산성 향상과 유지보수 비용 절감을 동시에 달성하는 전략적 소프트웨어 개발 방법론",remark:`특징 : 공통성/변동성 관리, 핵심자산 재사용, 자동화 도구 활용, 품질 일관성 확보

구성항목 :  Core Asset Development, Product Development, Management`,image:["static/images/cellImage_1186147548_368.jpg","static/images/cellImage_1186147548_369.jpg"]},{index:260,topic:"> SSPL(System & Software Product Line)",define:"136회 관리 2교시",head:"대량고객맞춤화 생산이 가능하도록 플랫폼·프로세스를 사용해 SW와 시스템을 개발하기 위한 패러다임",remark:`4대 핵심역량 
1) 대량고객맞춤화 역량
 - 고객 니즈 충족, 성능,기능,신뢰성, 편의성, 적시 출시
2) 플랫폼
- 체계적 재사용 가능 체계 마련
3) 프로세스
- 제품개발 프로세스와 개발 프로세스 제공
4) SW와 시스템의 융합 
- 지능이 부여된 시스템으로 문제해결, 고객만족 지원`,image:["static/images/cellImage_1186147548_370.jpg"]},{index:261,topic:"EDA (Event Driven Architecture)",define:"129회 관리 3교시",head:`분산된 시스템에서 이벤트를 
생성(발행)하고 발행된 이벤트를 
수신자에게 전송하는 구조로 
수신자는 그 이벤트를 처리하는 
방식의 아키텍처`,remark:`이벤트, 분산, 비동기, 느슨한 결합
구성(generator, channel, engine)
동작(msg > source > processor, consumer)
단일(broker), 복잡(mediator)
kafka, rabbitMQ`,image:["static/images/cellImage_1186147548_371.jpg"]},{index:262,topic:"> 브로커 토폴로지(Broker Topology)",define:"129회 관리 3교시",head:`경량 메시지 브로커를 통해 이벤트 
프로세서간 연결되는 체인방식의 
토폴로지`,remark:`단순, 경량 
ActiveMQ`,image:["static/images/cellImage_1186147548_372.jpg"]},{index:263,topic:"> 중재자 토폴로지(Mediator Topology)",define:"129회 관리 3교시",head:`이벤트 중재자 통해 중앙에서 
관리하고 단계를 결정하는 방식의 
토폴로지`,remark:`중앙 이벤트 중재자, 여러단계
유형(초기이벤트, 처리이벤트)
Spring Integration`,image:[]},{index:264,topic:"리먼(Lehman)의 소프트웨어 진화 법칙",define:"129회 응용 2교시",head:`SW 의 계속적인 변경 시 SW 변화 관리 
및 유지관리를 위하여 활용하는 
소프트웨어 변화의 법칙`,remark:`SW유지관리, 변화관리
E-Type
법칙(지속변경, 복잡성증가, SW진화, 조직
안정, 친근성, 지속적증가, 품질감소, 
피드백)`,image:["static/images/cellImage_1186147548_373.jpg"]},{index:265,topic:"노코드 (No-Code)",define:"130회 관리 1교시",head:`프로그래밍 언어 습득이 필요없이 
원하는 화면 유형과 기능을 선택하여 
설정하는 것만으로 코드를 사용하지 
않고 어플리케이션을 개발하는 방법`,remark:`기능(시각적인 인터페이스, 드래그&드롭 ,
자동화, 협업)
사례(Bubble)
로우코드, 비전문가 가능`,image:["static/images/cellImage_1186147548_374.jpg","static/images/cellImage_1186147548_375.jpg"]},{index:266,topic:"소프트웨어 요구사항",define:`130회 관리 1교시
130회 관리 4교시
133회 관리 3교시`,head:`소프트웨어가 어떤 문제를 해결하기 
위해 제공하는 서비스에 대한 
설명과 정상적으로 운영되는데 
필요한 제약조건`,remark:`품질속성(완전, 정확, 일관, 특이)
도출(인터뷰, 설문지, 브레인스토밍)
개발(추출, 분석, 명세, 검증)
관리(협상, 기준선, 변경관리, 확인/검증)
명세원리(정확, 명확, 일관, 이용)
요구사항 명세서, 요구공학, SRS, 
요구사항 추적 메트릭스`,image:[]},{index:267,topic:"> 소프트웨어 요구공학 (Requirement Engineering)",define:`130회 관리 1교시
130회 관리 4교시
133회 관리 3교시`,head:`요구사항 수집, 분석, 명세, 검증 및 
변경관리 등에 대한 제반 활동과 
원칙에 대한 공학적인 접근 체계`,remark:`요구사항 관리, REBOK
개발(추출, 분석, 명세, 검증, CMMI Lv3)
관리(협상, 기준선, 변경, 검증, CMMI Lv2)
요구사항명세서, SRS`,image:["static/images/cellImage_1186147548_376.jpg"]},{index:268,topic:"> 요구사항 명세서(SRS, Software RequirementSpecification)",define:`130회 관리 1교시
133회 관리 3교시`,head:`소프트웨어를 분석, 설계, 구현, 
유지하는 단계에서 검토, 평가, 승인 
기준이 되는 문서`,remark:`ISO/IEC/IEEE 29148, IEEE 830
항목(범위, 목적, 기능, 비기능), SRS, 
요구사항 추적표
검증(명확, 일관)`,image:["static/images/cellImage_1186147548_377.jpg"]},{index:269,topic:"> 요구사항 추적표(Requirement Traceability Matrix)",define:"135회 관리 1교시",head:`프로젝트의 요구사항이 프로젝트 진행 과정(설계, 개발, 테스트 단계)에서 일관
되게 반영되고 충족되고 있는지를 추적하고 관리하기 위한 문서`,remark:null,image:["static/images/cellImage_1186147548_378.jpg"]},{index:270,topic:"SBOM (Software Bill of Material)",define:`131회 관리 1교시
134회 관리 3교시
134회 응용 1교시`,head:`소프트웨어 패키지 및 구성 요소 등 
고유하게 식별 가능한 메타데이터, 
저작권 및 라이선스 등 소프트웨어
콘텐츠에 대한 정보를 포함하는 
공식 명세서`,remark:`명세서, 추적, 취약점해소, 공급망 확보, 
구성(컴포넌트버전, 고유 식별자, 
의존관계)
데이터(SPDX, CycloneDX, SWID`,image:["static/images/cellImage_1186147548_379.jpg"]},{index:271,topic:"xAPI (eXperience Application Interface)",define:"131회 응용 1교시",head:`분산학습 환경에서 학습자 경험 
데이터를 정의하고 이종의 시스템 
간에 데이터를 공유, 통신이 가능 
개발된 기술 표준`,remark:`LRS, Flipped learning, Statements, Statement 
API, Json, 데이터시각화
구성(형식, 전송/저장, 서비스)`,image:["static/images/cellImage_1186147548_380.jpg"]},{index:272,topic:"개방형 API (=Open API)(=Public API)",define:"134회 관리 4교시",head:`전문적인 지식이 없어도 쉽게 
가공하여 사용할 수 있도록 데이터를 
추상화하여 표준화한 인터페이스`,remark:`누구나, 공개, 데이터 개방, 확장, 융합
SOAP, REST, XML, JSON,
취약점(OWASP top 10, Sniffing, Key 유출)
대응(secure coding, Waap, 모니터링, 
표준화,TLS, SOAR)`,image:[]},{index:273,topic:"> SOAP (Simple Object Access Protocol)",define:`134회 관리 4교시
135회 응용 1교시`,head:`HTTP 통신 프로토콜을 기반으로 
XML을 사용하여 데이터를 교환 
프로토콜`,remark:`HTTP, XML
구성(UDDI, WSDL, Message)`,image:["static/images/cellImage_1186147548_381.jpg","static/images/cellImage_1186147548_382.jpg"]},{index:274,topic:"> REST API (REpresentational State Transfer Application Programming Interface)",define:`133회 관리 1교시
134회 관리 4교시
135회 응용 1교시`,head:`웹서비스 개발에 널리 활용되며, 
웹기반 애플리케이션간의 상호작용
용이하게 하는 인터페이스`,remark:`REST
구성(resource, verb, representation)
표현(http uri, http method, payload)
특징(uniform, stateless, cacheable,
self descriptiveness, client-server)
method(get, post, put, delete)
RMM(Rest API 성숙도 모델)`,image:["static/images/cellImage_1186147548_383.jpg","static/images/cellImage_1186147548_384.jpg"]},{index:275,topic:"좋은 소프트웨어",define:"132회 관리 1교시",head:`발주자, 개발자, 사용자 모두에게 
이점을 제공하는 소프트웨어`,remark:`유지관리, 신뢰, 효율, 접근, 정확성, 
재사용성`,image:[]},{index:276,topic:"IT직무제",define:"132회 관리 2교시",head:`소프트웨어 기술자를 IT 직무 역량 
중심으로 구분하여 산업현장에서 
정당한 대우를 받기 위한 경력관리 
제도`,remark:`IT분야역량체계(ITSQF), 다양한 평가
SW 기술자 노임단가
SW 대가산정 활용`,image:[]},{index:277,topic:"> 기술자 등급제",define:"132회 관리 2교시",head:`경력, 학력, 자격 등을 바탕으로 
산정된 등급과 경력사항 등이 기재된 
증명서를 발급받는 제도`,remark:`경력, 학력, 자격
역량측정 부족 -> 폐지`,image:[]},{index:278,topic:"소프트웨어 기술성 평가기준",define:"132회 응용 1교시",head:`소프트웨어 진흥법에 따라 
소프트웨어 사업 계약을 체결 경우 
사업자의 기술성 평가를 위하여 
필요한 사항을 정한 지침`,remark:`전략 및 방법론, 기술 및 기능, 성능 및 품질, 
프로젝트 관리/지원
차등평가, 차등가점제
평가등급`,image:[]},{index:279,topic:"SLA(Service Level Agreement)",define:"130회 관리 3교시",head:`정보시스템 사용자와 공급자 
사이의 상호 동의에 의하여 
서비스 수준을 명시적으로 정의하고 
이를 문서화한 약정서`,remark:`구성(catalog, SoW, SLM, SLR)
지표(가동율, 장애건수), SPI, OLA
확장(클라우드 SLA, 금융 클라우드 SLA)`,image:["static/images/cellImage_1186147548_385.jpg"]},{index:280,topic:"형상관리(Configuration Management)",define:"134회 관리 1교시",head:`소프트웨어 생명주기의 모든 산출물 
이력을 체계적으로 관리하여 품질 
보증을 향상시키는 기법`,remark:`기법(식별, 통제, 감사, 기록)
형상관리 기준선, CCB
도구(CVS, SVN, Git)`,image:[]},{index:281,topic:"> 형상관리 기준선(Baseline)",define:"134회 관리 1교시",head:`각 형상 항목들의 기술적 통제 시점 및 
모든 변화를 통제하는 시점의 기준`,remark:`통제관리, CCB, FTR
기능, 분배, 설계, 시험, 제품, 운영`,image:[]},{index:282,topic:"오픈소스",define:"134회 관리 3교시",head:`소스 코드를 공개해 누구나 특별한 
제한 없이 그 코드를 보고 사용할 수 
있는 오픈 소스 라이선스를 만족하는 
소프트웨어`,remark:`공개, 무제약, 오픈소스 거버넌스, 
오픈소스 라이선스 준수
취약점(활용미흡, 프로세스부재, 종속성,
zero-day, 악성코드)
관리방안(SBOM , 정책, 컴플라이언스,
공급망 관리)
SBOM OSS(수집, 생성, 배포, 유지관리)
라이선스(개방형 -> 폐쇄형, 상업,지속,
공정)
라이선스유형(MIT, BSD, SSPL, BSL)`,image:[]},{index:283,topic:"소프트웨어 테스트",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_386.jpg"]},{index:284,topic:"소프트웨어 테스트",define:`126회 관리 1교시
127회 관리 1교시
128회 응용 3교시
129회 관리 1교시
129회 응용 2교시
129회 관리 4교시
131회 관리 3교시
131회 응용 4교시
132회 관리 3교시
132회 응용 1교시
133회 관리 1교시
133회 관리 4교시
134회 관리 3교시`,head:`개발된 SW의 단위, 통합, 기능, 
시스템의 테스트를 통해 요구사항을 
충족하고 기대하는 대로 작동하는지 
확인하는 일련의 활동`,remark:`고객요구사항 충족, 
ISO/IEC 29119, ISO/IEC 33063, 
KSXISO/IEC/IEEE 29119
원리(결함존재, 불완전, 초기시작, 집중,살충제
패러독스, 정황의존) 결완초집살정오
레빌(단위, 통합, 시스템, 인수)
유형(기능, 비기능)
비기능(신뢰성,이식성)
설계(동적, 정적)
내부참조(블랙박스, 화이트박스, 그레이)
설계(명세, 구조, 경험)
커버리지(테스트, 코드)
임베디드, 몽키, 뮤테이션, 회귀, 모델기반,
백투백, 리스크기반
TDD, 자동화`,image:["static/images/cellImage_1186147548_387.jpg"]},{index:285,topic:"> KS X ISO/IEC/IEEE 29119",define:"128회 응용 3교시",head:`SW 테스트를 관리하고 수행하는 
능력을 제공하기 위한 국내 표준`,remark:`국내 표준, ISO/IEC/IEEE 29119
구성 (개념, 프로세스, 문서, 기법, 키워드)
설계기법(명세기반, 구조기반, 경험기반)`,image:["static/images/cellImage_1186147548_388.jpg"]},{index:286,topic:"임베디드 소프트웨어 테스트 (Embedded Software Test)",define:"126회 관리 1교시",head:`하드웨어에 내장되어 특수한 기능을 
수행하는 소프트웨어 테스트`,remark:`임베디드, HW+SW
절차(테스트케이스 > 테스트 수행 > 결과)
기법(Depth V, Multiple V, R&R, smoke)
도구(jtag, swd, GDB, Cppcheck)`,image:["static/images/cellImage_1186147548_389.jpg"]},{index:287,topic:"테스트 커버리지 (Test Coverage)",define:"127회 관리 1교시",head:`전체 테스트 케이스 중 실행된 테스트 
케이스의 비율`,remark:`전범위, 테스트 범위
블랙박스 테스트, 
명세기반, 경험기반 테스트
종류(기능, 라인, 코드)`,image:[]},{index:288,topic:"> 블랙박스 테스트 (Black Box Test)",define:`129회 관리 1교시
134회 관리 3교시`,head:`소프트웨어의 내부를 보지 않고,
입력과 출력 값을 확인하여,기능의 
유효성을 판단하는 테스트 기법`,remark:`명세, 경험, 입/출력
기법(동등, 경계값, 원인결과, 결정)
테스트 커버리지`,image:["static/images/cellImage_1186147548_390.jpg"]},{index:289,topic:">> 명세기반 테스트 (Specification Based Test)",define:`134회 관리 3교시
137회 관리 2교시`,head:`사용자의 요구사항이 기술된 명세나 
설계 정보 등을 이용하는 테스트`,remark:`블랙박스 테스트
기법(동등, 경계, 원인, 결정, 상태전이)`,image:["static/images/cellImage_1186147548_391.jpg"]},{index:290,topic:">> 경험기반 테스트 (Experience Based Test)",define:"134회 관리 3교시",head:`테스터의 직관, 기술, 유사 앱 사용 
경험을 기반으로 테스트`,remark:`블랙박스, 경험
기법(탐색, 오류추정, 분류)`,image:[]},{index:291,topic:"코드 커버리지 (Code Coverage)",define:"127회 관리 1교시",head:`소스코드의 구문, 조건 등이 테스트 
수행 중 얼마나 테스트 되었는지 
판단하는 척도`,remark:`테스트 충족, 코드 검사, 
화이트박스 테스트, 구조기반 테스트
종류(구문, 결정, 조건, 조건/결정, 변경조건/
결정, 다중조건)`,image:[]},{index:292,topic:"> 화이트박스 테스트(White Box Test)",define:`129회 관리 1교시
134회 관리 3교시`,head:`개발자 중심의 단위 테스트 시 내부 
소스 코드 분석하여 Logic 중심의 
기능을 테스트 하는 기법`,remark:`소스, 구조기반
기법(문장, 선택, 조건, 경로)
코드 커버리지`,image:[]},{index:293,topic:">> 구조기반 테스트 (Structure Based Test)",define:`134회 관리 3교시
137회 관리 2교시`,head:`프로그램 내부 구조 및 복잡도를 
검증하는 테스트`,remark:`화이트박스, 내부 구조 및 복잡도
기법(구문, 결정, 조건/결정, 변경조건/결정)`,image:[]},{index:294,topic:"동등 분할과 분류 트리 기법 테스트 케이스",define:"137회 관리 2교시",head:`[프로그램 명세]
이 기능의 입력창은 점수로 입력 되며, 입력값이 10 미만이거나
100을 초과하면 "Fail',
10 이상이고 100 이하면 "Pass" 정수가 아니면 "Invalid Input" 메
시지를 출력한다.`,remark:null,image:["static/images/cellImage_1186147548_392.jpg","static/images/cellImage_1186147548_393.jpg"]},{index:295,topic:"몽키 테스트 (Monkey Test)(=무작위 테스트, 퍼즈 테스트, 확률적 테스트)",define:"129회 관리 4교시",head:`개발자의 의도에 대한 고려 없이 
시험 실시자가 즉흥적으로 조작하는 
시험 방법`,remark:`랜덤조작, 사용쉬움, 무작위 입력, 즉흥적
유형(dumb, smart, brilliant)
시스템 테스트`,image:["static/images/cellImage_1186147548_394.jpg"]},{index:296,topic:"회귀 테스트 (Regresstion Test)",define:"129회 관리 4교시",head:`결함의 수정으로 인해 다른 모듈, 
기능과의 문제가 없는지, 수정으로 
인한 새로운 결함은 없는지 확인하는 
테스트`,remark:`영향도 분석, side-effect, ripple-effect
유형(all, selective, unit, complete, 
partial/priority)`,image:["static/images/cellImage_1186147548_395.jpg"]},{index:297,topic:"통합테스트(Integration Test)",define:`129회 관리 4교시
131회 관리 3교시`,head:`소프트웨어 각 모듈간의 인터페이스 
관련 오류 및 결함을 찾아내기 위한 
테스트 방법`,remark:`단계(계획 > 테스트 > 결과)
계획서항목(대상, 범위, 전략, 일정)
유형(점진적, 비점진적, 하향식, 상향식,
빅뱅, 샌드위치)
테스트 하네스(테스트 드라이버, 스텁)`,image:[]},{index:298,topic:"> 테스트 드라이버 (Test Driver)",define:"131회 관리 3교시",head:`상향식 테스트에서 아직 통합되지 
않은 상위 컴포넌트의 동작을 
시뮬레이션하는 모듈`,remark:"상향식 테스트, 서버가상모듈",image:["static/images/cellImage_1186147548_396.jpg"]},{index:299,topic:"> 테스트 스텁(Test Stub)",define:"131회 관리 3교시",head:`테스트 대상과 협력해 구동되는 
컴포넌트를 대신하는 더미 컴포넌트`,remark:"하향식 테스트, 클라이언트가상모듈",image:[]},{index:300,topic:"인수테스트 (Acceptance Test)",define:"129회 응용 2교시",head:`기능, 비기능적 요구사항을 사용자가 
직접 개발 완료를 확인하는 테스트`,remark:`사용자 인수 테스트
기준(기능, 성능, 품질, 보안, 안전)
유형(사용자, 운영, 계약, 알파, 베타, 감마)
절차(준비 > 실행 > 평가 > 시스템 모니터링)
ATDD`,image:["static/images/cellImage_1186147548_397.jpg","static/images/cellImage_1186147548_398.jpg"]},{index:301,topic:"> 알파테스트 (Alpha Test)",define:"129회 응용 2교시",head:`개발인력, 내부조직원 등이 성능을 
테스트 하는 내부 필드 테스트`,remark:"비공개, 사내개발,  폐쇄적",image:["static/images/cellImage_1186147548_399.jpg"]},{index:302,topic:"> 베타테스트 (Beta Test)",define:"129회 응용 2교시",head:`제품으로서의 가치 등을 평가하기 
위한 테스트`,remark:"공개, 사용자환경, 개방적",image:["static/images/cellImage_1186147548_400.jpg"]},{index:303,topic:"뮤테이션 테스트 (Mutation Test)(=돌연변이 테스트)",define:"133회 관리 1교시",head:`결함 추정과 테스트 케이스 평가 
위해 프로그램 일부를 변형한 후 원래 
프로그램과 동일한 케이스로 
테스트하는 결함기반 테스트 기법`,remark:`의도적 결함, 효과성, 신뢰성
mutant, mutant score(높을수록 좋음)
절차(뮤턴트생성, 오류수정, 재생성, 반복)
bebugging : 의도적 오류코드 삽입으로 잔존 오류 도출,  잔존 오류 추정`,image:["static/images/cellImage_1186147548_401.jpg"]},{index:304,topic:"신뢰성 테스트 (Reliability Test)",define:"133회 관리 4교시",head:`소프트웨어가 정해진 조건 하에서 
일정 기간 동안 정상적으로 
작동하는지를 확인하는 테스트`,remark:`지속 동작, 신뢰성
오류최소, 회복능력, 성능유지
부하, 스트레스, 지속, 회복, 성능테스트
ISO/IEC 25010 (성숙, 결함수용, 복구용이,
가용성)`,image:[]},{index:305,topic:"이식성 테스트 (Portability Test)",define:"133회 관리 4교시",head:`소프트웨어가 다양한 환경에서 
동일하게 작동하는지 확인 테스트`,remark:`호환성, 일관성
HW, SW, OS, DB, Browser, User I/F, 지역
ISO/IEC 25010 (SW 품질특성:환경적응, 설치용이, 치환)`,image:[]},{index:306,topic:"Canary Test",define:`132회 응용 1교시
134회 관리 3교시`,head:`새로운 기능이나 업데이트를 일부 
사용자 그룹에 먼저 적용하여 
시스템의 안정성과 성능 확인 테스트`,remark:`무중단 서비스, 무중단배포
피처 플래그, 일부 사용자, 롤백, 로깅, 
모니터링, 테스트 그룹, 배포전략, 
A/B 테스트`,image:["static/images/cellImage_1186147548_402.jpg"]},{index:307,topic:"시스템 성능 테스트",define:`131회 응용 4교시
132회 관리 3교시`,head:`사용자가 시스템을 사용하기에 성능상 문제가 있는지 여부를 점검하기 위해 시스템 처리
능력을 검증하는 테스트`,remark:`루스확가티
유형(Load, Recovery, Resilience, Stress, Spike)
척도(TPS, 응답시간, 대기시간, 동시사용자, 
활성사용자)`,image:["static/images/cellImage_1186147548_403.jpg","static/images/cellImage_1186147548_404.jpg"]},{index:308,topic:"> 정보시스템의 성능 요구사항",define:"132회 관리 3교시",head:`목표 시스템의 일부 기능이 달성해야 하는 최고 또는 최저 능력을 명시한 것으로 시스템이 어떠한
기능을 수행할 때 소요되는 시간이나 처리량, 자원 사용치 등에 대한 요구사항을 기술`,remark:`성능일반, 처리속도, 처리량, 자원사용량
지표(일반, 실행시간, 응답시간, 지연시간,
처리량, 가용성, 효율성)`,image:[]},{index:309,topic:"시스템 & SW 안전",define:`126회 관리 3교시
128회 관리 3교시
128회 응용 1교시
128회 응용 2교시
131회 관리 3교시`,head:`내부 위험 요인으로부터 시스템을 
보호, 불법/악의적 외부 위협으로부터 
시스템 보호 활동`,remark:`안전, 보안, 품질
Risk, Hazard , FMEA, FTA, HAZOP, STPA, ETA, 
PHA, GAMAB, ALARP, DFA, CCA
SW 산업진흥법`,image:["static/images/cellImage_1186147548_405.jpg"]},{index:310,topic:"> 소프트웨어 안전진단",define:"126회 관리 3교시",head:`SW의 안전을 위해 활용할 수 있는 
실무지침서`,remark:`영역(안전기능충분성, 품질안전성, 
기반SW안전성)
절차(기획추진 > 진단실시 > 최종종료)
진단실시(준비 > 계획 > 수행 > 종료)
대상(국민안전에 직결, 운영 시스템)`,image:["static/images/cellImage_1186147548_406.jpg"]},{index:311,topic:"> 안전, 보안, 품질",define:"128회 응용 2교시",head:`(안전) 내부위험으로부터 신체, 
생명 보호
(보안) 외부위험으로부터 내부정보 
보호
(품질) 요구사항의 정상동작 보장`,remark:"안전, 보안, 품질",image:["static/images/cellImage_1186147548_407.jpg"]},{index:312,topic:"> GAMAB(Globalement Au Moins Aussi Bon)",define:"128회 응용 2교시",head:`새로운 시스템이 적어도 기존의 비교 
가능한 시스템만큼 안전하고 
위험이 낮아야 된다는 원칙`,remark:`신규시스템 위험도 <= 기존시스템 위험도
최소 안전 수준 (변경시에도 안정유지), 
지속적개선 ( 기술진보 대응 안전)
안전성 허용 위험율(THR), SIL`,image:[]},{index:313,topic:"> ALARP(As Low As Reasonable Practicable)",define:"128회 응용 2교시",head:`안전이 관련된 시스템의 규제 및 
관리가 합리적으로 실행가능한 
최저 수준의 위험도로 감소되었음을 
증명하는 원칙`,remark:`수용가능한 위험도, DoA
위험도(상위, 중간, 하위)
SIL`,image:["static/images/cellImage_1186147548_408.jpg","static/images/cellImage_1186147548_409.jpg"]},{index:314,topic:"> FMEA (Failure Mode and Effects Analysis)",define:`128회 관리 3교시
131회 관리 3교시`,head:`고장 발생의 원인이 시스템에 개입
되는 것을 방지위해 고장모드와  
영향을 정량적으로 분석하는 기법`,remark:`영향도출, 신뢰성
유형(설계, 기능, 공정)
구성(D, R, E, M)
절차(분석 > 평가 > 최적화)
RPN(심각도, 발생도, 검출도)
정성적, 귀납적
한계(단순, 인적 누락)`,image:["static/images/cellImage_1186147548_410.jpg","static/images/cellImage_1186147548_411.jpg","static/images/cellImage_1186147548_412.jpg"]},{index:315,topic:"> HAZOP (Hazard and Operability Analysis)",define:`128회 관리 3교시
131회 관리 3교시`,head:`기능요건과 같은 매개변수와 가이드 
워드 조합을 통해 예상치 못한 동작과 
그에 따른 영향을 분석하는 기법`,remark:`위험탐색
구성(파라미터, 가이드 워드)
절차(범위 >  팀구성 > 예비조사 > 토론
> 결과)
분석절차:분석대상 노드 선정>파라미터 선정>가이드워드 적용>변이 식별>변이 원인 파악>변이로 인한 결과 파악>변이 안전책 고려>분석 반복 및 권고사항 보고서 작성
한계(단순, 인적 누락)`,image:["static/images/cellImage_1186147548_413.jpg"]},{index:316,topic:"> FTA (Fault Tree Analysis)",define:"131회 관리 3교시",head:`위험으로부터 위험의 원인을 트리 
다이어그램을 통해서 찾아나가는 
연역적이고 정성/정량적으로 
분석하는 기법`,remark:`연역적, 트리형태, 정성/정량
AND, OR, XOR, 기본사상, 사상, 연결기호
절차(대상 > 최상위이벤트 > 분석준비 >
원인분석 > 평가 및 대책)`,image:["static/images/cellImage_1186147548_414.jpg","static/images/cellImage_1186147548_415.jpg"]},{index:317,topic:"> STPA (System Theoretic Process Analysis)",define:"128회 관리 3교시",head:`STAMP 를 기반으로 하는 위험분석 
기법으로 시스템 생명주기 전 과정에
걸쳐 존재하는 잠재적 위험과 
발생원인을 시스템의 상위수준에서 
분석하는기법`,remark:`단계(위험정의 > 식별/도식화 > 도출 > 
시나리오 도출)
4가지 UCA(부재, 부적절, 부적합, 
지속부적합)`,image:["static/images/cellImage_1186147548_416.jpg"]},{index:318,topic:"> ETA (Event Tree Analysis)",define:"128회 응용 1교시",head:`사건초기에서부터 마지막 결과까지 
여러 가지 결과의 발생경로를 트리 
형태로 표현 및 추론하여 발생확률을 
산정하는 귀납적 분석기법`,remark:`결과, 트리 구조, 확률적 위험성 평가, 
이벤트 기반, Event Tree, 
초기사건/시작사상(IE)/촉발사상
(Initiation Event)/ 중간사상(PE), 
안전 요소(Safety Function), 
PRA(확률적 리스크 평가)`,image:["static/images/cellImage_1186147548_417.jpg","static/images/cellImage_1186147548_418.jpg"]},{index:319,topic:"소프트웨어 진흥법",define:"132회 관리 4교시",head:`국가 전반의 소프트웨어 역량 강화 및 
소프트웨어 발전 기반을 조성하여 
국민생활 향상 및 국민경제 발전에 
이바지하기 위한 법률`,remark:"주요내용(총칙, 기본계획, 안전, 교육)",image:[]},{index:320,topic:"DevOps 장점과 단점",define:"136회 관리 1교시",head:"지속적이고 빠른 배포, 운영 자동화를 위해 시스템 개발과 운영을 병행 및 소통, 통합을 강조하는 개발 환경이나 문화",remark:null,image:["static/images/cellImage_1186147548_419.jpg","static/images/cellImage_1186147548_420.jpg"]},{index:321,topic:"세그멘테이션 오류(Segmentation Fault)",define:"136회 관리 1교시",head:"프로그램이 운영체제로부터 할당 받지 않은 메모리 영역(예: NULL 포인터, 해제된 메모리, 배열 범위 초과 등)에 접근하려 할 때 발생하는 오류",remark:null,image:["static/images/cellImage_1186147548_421.jpg","static/images/cellImage_1186147548_422.jpg"]},{index:322,topic:"서버리스 컴퓨팅(Serverless Computing)",define:"136회 관리 1교시",head:"특정 이벤트의 반응하는 함수가 실행되는 FaaS와 BaaS 기반으로, 마치 물리적 서버가 없는 것처럼 동작하여 기존의 방식보다 연결 및 처리속도를 개선한 컴퓨팅 기술",remark:`* 핵심기술 
- Client: SPA, Web App 
- Front End: API G/W, Restful API
- Function Service: FaaS, Event Router
- Back End: BaaS, Container`,image:["static/images/cellImage_1186147548_423.jpg","static/images/cellImage_1186147548_424.jpg"]},{index:323,topic:"품질보증",define:"136회 관리 3교시",head:`품질의 정의
 - 주어진 요구사항을 만족시킬 수 있는 소프트웨어의 기능 및 특성 (IEEE)

품질보증의 정의
 - 설정된 요구사항과 SW 제품과의 일치성 확인 작업(모든 산출물들을 사
용하는데 필요한 적절한 확증을 준비하는 체계적인 행위)`,remark:`* 품질보증의 목적
- 사용자 요구사항 최대 만족을 통한 생산성 향상
- 개발과정에서 품질 문제점 조기 발견 및 조치
- 납기준수, 제품의 견고성 확보
- 비용 노력 절감, 생산성 향상, 재사용성 증가`,image:["static/images/cellImage_1186147548_425.jpg"]},{index:324,topic:"인스펙션",define:"136회 관리 3교시",head:`소프트웨어 개발 산출물(요구사항 명세서, 설계서, 코드 등)에 대해
사전에 정의된 형식적 절차에 따라 결함을 체계적으로 식별하는 정적
품질 보증 기법`,remark:`* 인스펙션의 특징
- 정형화된 절차 : 준비 → 회의 → 수정 → 후속 검토
- 비실행 기반 검토 : 소스코드나 산출물을 실행없이 문서기반 오류 탐색
- 객관적 검토 : 작성자 외의 다양한 역할(검토자, 모더레이터 등)이 참여
- 사전 예방 중심 : 테스트보다 앞서 결함을 찾아, 재작업 비용이 낮음
- 토론 금지 : 회의에서는 결함만 식별, 논쟁·해결은 하지 않음
- 재작업 및 추적성 : 발견된 결함은 수정되며, 수정 사항은 후속검토 확인

* 인스펙션의 효과
- 오류를 테스트 이전 단계에서 조기에 발견할 수 있음
- 재작업 비용 절감, 유지보수 비용 감소
- 품질 메트릭 확보로 프로젝트 품질 수준 파악 및 관리 가능`,image:["static/images/cellImage_1186147548_426.jpg","static/images/cellImage_1186147548_427.jpg"]},{index:325,topic:"A/B 테스팅",define:"137회 관리 1교시",head:`두 가지 이상의 대안을
사용자 집단에
무작위로 적용 후,
반응 차이를
통계적으로 비교하고 최적안
을 도출하는 테스트 방식`,remark:null,image:["static/images/cellImage_1186147548_428.jpg","static/images/cellImage_1186147548_429.jpg","static/images/cellImage_1186147548_430.jpg"]},{index:326,topic:"> IPSec VPN",define:"133회 관리 4교시",head:`단말간 안전한 통신망 연결을 위해 
IPSec Tunneling 기술 이용하는 
OSI 3계층 사설 네트워크 보안 기술`,remark:`IPSec + VPN, Site - Site, NW계층
AH, ESP, IKE,`,image:["static/images/cellImage_1186147548_431.jpg","static/images/cellImage_1186147548_432.jpg","static/images/cellImage_1186147548_433.jpg"]},{index:327,topic:"> SSL VPN",define:"133회 관리 4교시",head:`OSI 4~7계층에서 웹 브라우저를 통해 
원격 액세스를 제공하며, 사용자 
인증, 데이터 암호화 및 데이터 
무결성을 보장하는 사설 네트워크 
보안 기술`,remark:`SSL + VPN, Client - Site, OSI 4~7계층
Change Cipher, Alert, Handshake, Record`,image:["static/images/cellImage_1186147548_434.jpg"]},{index:328,topic:"TLS(Transport Layer Security)",define:"136회 관리 2교시",head:`웹 서버와 브라우저 간의 안전한 통신을 위해 서버인증, 클라이언트
인증, 기밀성 보장하는 기술(프로토콜)`,remark:`- 주요기능 : 상호인증,메시지인증,키교환,종단간통신

- 구조 : Record, Handshake, Change Cipher Spec, Alert Message, Application Message`,image:["static/images/cellImage_1186147548_435.jpg"]},{index:329,topic:"> TLS1.2의 보안 취약점, TLS 1.3 개선사항",define:"136회 관리 2교시",head:"TLS 1.3에서 취약 알고리즘 제거, 구조 단순화, 민감정보 암호화 강화, 세션 재개시 0-RTT 지원",remark:null,image:["static/images/cellImage_1186147548_436.jpg","static/images/cellImage_1186147548_437.jpg"]},{index:330,topic:"Tor (=The Onion Router)",define:"126회 관리 4교시",head:`사용자의 트래픽 분석, IP주소 추척을 
불가능하게 하여 익명성을 보장하는 
네트워크`,remark:`특징(익명성, 겹층암호화)
구성(cell, circuit, OR, OP, Directory)
라우팅경로(cascade, stratified, free)`,image:["static/images/cellImage_1186147548_438.jpg","static/images/cellImage_1186147548_439.jpg"]},{index:331,topic:"샌드박스 (Sandbox)",define:"126회 응용 1교시",head:`격리된 가상환경에서 파일을 
실행하고 이상 행위를 감시하여 
알려지지 않은 보안 취약점의 악용 
여부를 확인하는 기술`,remark:`구성(클래스로더, 바이트검사기, 
보안관리자)
활용(보안, 개발)`,image:[]},{index:332,topic:"대칭 암호화",define:`127회 관리 4교시
130회 관리 1교시
132회 관리 1교시`,head:`암호화에 사용한 키와 암호
를 해석할 때의 키가 동일한 암호 
알고리즘`,remark:`암호키=복호키, Secret key
기법(블록, 스트림)
사례(DES, AES, SEED, LEA)`,image:[]},{index:333,topic:"> 블록(Block) 암호",define:`127회 관리 4교시
130회 관리 1교시`,head:`블록 단위의 데이터를 공유키를 
통하여 반복적으로 안전하게 
이용하는 기법`,remark:`블로단위, 대칭암호화, Padding
운용모드(ECB, CBC, PCBC, CFB, OFB, CTR)
패딩(zero, bit, byte, null)
구조(Feistel, SPN)
기법(DES, LEA, HIGHT, SEED, IEDA, RC5, 
AES, ARIA)`,image:[]},{index:334,topic:">> ECB (Electronic CodeBook)",define:"127회 관리 4교시",head:`가장 간단한 구조를 가지며,
암호화하려는 메시지를 여러 
블록으로 나누어 각각 암호화`,remark:`간단, 해독시 위험, 패딩 필요
블록단위 블록암호`,image:[]},{index:335,topic:">> CBC (Cipher Block Chaining)",define:"127회 관리 4교시",head:`초기화 벡터와 이전 암호문 결과를 
사용하여 암호문을 생성하는 모드`,remark:`블록단위 블록암호
IV, Chain, 병렬 복호, 패딩 필요, 
이전오류확산`,image:[]},{index:336,topic:">>  CFB (Cipher FeedBack)",define:"127회 관리 4교시",head:`블록 암호를 자기 동기 스트림 
암호로 변환하는 암호화 모드`,remark:`블록단위 스트림암호
병렬복호, 패딩불필요, 오류확산`,image:[]},{index:337,topic:">> OFB (Output FeedBack)",define:"127회 관리 4교시",head:`블록 암호를 동기식 스트림 암호로 
변환하는 모드`,remark:`블록단위 스트림암호
오류 미확산, 패딩 불필요`,image:[]},{index:338,topic:"비대칭 암호화",define:`126회 관리 4교시
128회 응용 1교시
132회 관리 1교시`,head:`공개키와 개인키를 소유하고, 암
복호화를 수행하는 암호 알고리즘`,remark:`암호키 <> 복호키, public / private
기법(이산대수, 소인수, 타원)
사례(RSA, DSA, DH, ECC)`,image:[]},{index:339,topic:"> RSA (Rivest-Shamir-Adleman)",define:"126회 관리 4교시",head:`소인수 분해 기반 공개키와 비밀키를 
생성하고 MOD연산을 통해 
암호화/복호화하는 알고리즘`,remark:`소인수분해, 비대칭, 공개키, 개인키
오일러공식, 전자서명
취약점(Shor 알고리즘) -> 양자암호통신`,image:["static/images/cellImage_1186147548_440.jpg"]},{index:340,topic:"> DSA (Digital Signature Algorithm)",define:"126회 관리 4교시",head:`이산대수 문제 기반 공개키와 
비밀키를 생성하고 개인키로 
암호화하고 공개키로 검증하는 
알고리즘`,remark:`이산대수, 비대칭, 공개키, 개인키
활용(ECDSA), 전자서명`,image:[]},{index:341,topic:"> 디피-헬만 알고리즘 (Diffie-Hellman Algorithm)",define:"128회 응용 1교시",head:`두 사람이 공통의 비밀키를 공유할 수 
있도록 하는 암호키 생성 알고리즘`,remark:`비밀키, 공개키, 이산대수 활용
MITM 문제 -> RSA`,image:[]},{index:342,topic:"전자봉투",define:"133회 관리 1교시",head:`공개키 인프라를 이용해 비밀키를 
수신자의 공개키로 암호화함으로써 
온라인 상에서 기밀성 있는 통신이 
가능한 암호화 기술`,remark:`비밀키, 전자서명, 대칭키, hash, md
생성(md생성 , 전자서명, 비밀키 암호문, 
전자봉투)
개봉(전자봉투복호, 암호문 복호, 전자서명
복호, 무결성검증)
위조불가, 부인방지, 서명자 인증
블록체인`,image:["static/images/cellImage_1186147548_441.jpg"]},{index:343,topic:"동형암호(Homomorphic Encryption)",define:"133회 관리 1교시",head:`암호화된 상태의 데이터에 대한 
연산을 복호화 과정 없이 수행할 수 
있도록 하는 암호화 기법`,remark:`No key
유형(완전동형, 준동형, 부분동형)
원리(squashing, bootstrapping, 
서킷프라이버시,다중도약)`,image:["static/images/cellImage_1186147548_442.jpg","static/images/cellImage_1186147548_443.jpg"]},{index:344,topic:"동적 WEP 키(Dynamic WEP Key)",define:"134회 응용 1교시",head:`무선 단말기와 AP 간의 WEP 키를 
주기적으로 자동 변경함으로써 
무선 랜의 보안성을 향상시킨 방식`,remark:`무선, 암호화, IEEE 802.1aa, 키 갱신주기,
키분배
개선(WPA, 802.11i)`,image:[]},{index:345,topic:"디지털 증거",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_444.jpg","static/images/cellImage_1186147548_445.jpg"]},{index:346,topic:"디지털 포렌식(Forensic)",define:`126회 관리 1교시
126회 관리 4교시
128회 응용 3교시
129회 응용 4교시
130회 관리 4교시
133회 관리 3교시`,head:`디지털 증거를 수집·분석 또는 
보관하거나 현출하는데 필요한 
기술 또는 절차 (대검찰청 예규 제3조)`,remark:`원칙 (정당성, 재현, 연계보관, 무결성, 신속)
수집(네트워크, 시스템, 응용프로그램)
기술(파일카빙, 파일슬랙, 이미징)
절차(수집, 이송, 분석, 보고)
유형(일반, 네트워크, 모바일, 메모리, DB, 
암호, 인터넷)
수집기법(이미징, 덤프)
분석기법(스테가노그래피, 타임라인, 
브라우징, 뷰잉, 카빙)
안티포렌식`,image:[]},{index:347,topic:"디지털 포렌식(Forensic)아티팩트(Artifact)",define:"137회 관리 1교시",head:`디지털 기기에서 사용자 행위나 시스템 동작으로 인해 생성·수정·저장된 흔적
데이터로, 사건 조사 및 증거 분석의 핵심 자료`,remark:null,image:["static/images/cellImage_1186147548_446.jpg","static/images/cellImage_1186147548_447.jpg"]},{index:348,topic:"> 파일 슬랙 (File Slack)",define:"126회 관리 1교시",head:`하드디스크를 블록단위, 즉 섹터와 
클러스터로 나누어 파일을 위한 
저장 공간으로  할당하는 과정에서 
낭비되는 공간`,remark:`낭비 공간
구성(섹터, 클러스터, 램슬랙, 드라이브슬랙)
활용(포렌식)`,image:[]},{index:349,topic:"> 파일 카빙 (FC, File Carving)",define:"126회 관리 4교시",head:`파일 시스템의 메타 정보가 
손상되거나 삭제되었을 경우, 파일 
자체의 바이너리 데이터에서 
의미있는 정보를 획득하여 파일을
복구하는 기법`,remark:`포렌식, 데이터 복구
구분(파일시그니처, 구조체)
4가지(시그니처 (header/footer, ram slack), 
구조체(file size, 구조검증)`,image:["static/images/cellImage_1186147548_448.jpg"]},{index:350,topic:"> 디스크 이미징(Disk Imaging)",define:"129회 응용 4교시",head:`원본 훼손을 막고 저장매체의 모든 
물리적 데이터의 사본을 생성하는 
기술`,remark:`사본 생성
용도(보안, 배포)
방식(Disk to Disk, Disk to File)
포렌식(증거수집)(SW, HW)`,image:[]},{index:351,topic:"> 안티포렌식(Anti-Forensic)",define:"133회 관리 3교시",head:`디지털 포렌식 수사를 방해하거나 
회피하기 위한 기술과 방법`,remark:`포렌식 방해
기술(디가우징, 와이핑, 삭제, 
스테가노그래픽, 은닉,암호화, 
가짜로그생성, 파일병합)
컴플라이언스 시스템`,image:[]},{index:352,topic:"ISMS-P(Personal Information & Information Security Management System)(=정보 보호 및 개인정보보호 관리체계)",define:`126회 응용 1교시
134회 응용 2교시
131회 관리 3교시`,head:`정보보호 및 개인정보보호를 위한 
일련의 조치와 활동이 인증기준에 
적합함을 증명하는 제도`,remark:`대상(ISP, IDC, 1500억이상, 자율신청자)
종류(최초, 사후, 갱신)
심사분야(관리체계수립 및 운영 16개, 
보호대책요구사항 64개, 개인정보 처리단계
요구사항 22개)
절차 (신창 > 심사위원 > 심사 > 결과)
ISMS(관리체계+보호대책), ISMS-P 간편인증`,image:[]},{index:353,topic:"> ISMS-P 간편인증",define:"134회 응용 2교시",head:`중소기업의 부담 완화를 위한 
간소화한 ISMS-P 인증`,remark:`간소화, 중소기업
대상(영세기업, 중소기업)
기준(관리체계(8), 보호대책(33), 개인정보(21))
ISMS 간편인증`,image:[]},{index:354,topic:"> 정보보호 정책",define:"132회 관리 4교시",head:`문서화된 사업 규칙의 특수한 
형태로서 정보보호에 관한 경영진의 
목표와 방향을 제시한 기준`,remark:`내용(목적, 책임, 역할, 대상, 규정준수)
시점별 활동(예방, 탐지, 저지, 교정)
전문가`,image:[]},{index:355,topic:"ISO/IEC 29100",define:"126회 응용 3교시",head:`개인정보보호 정책과 통제수단, 
요구사항등을 제공하는 개인정보 
프레임워크`,remark:`개인정보 프레임워크
11원칙(동의, 수집제한, 데이터 최소화)
GDPR, 개인정보보호법 등 참고 지침`,image:[]},{index:356,topic:"ISO/IEC 27701",define:"126회 응용 3교시",head:`ISO/IEC 27001에 대한 개인정보보호로 
확장한 개이정보 경영시스템 표준`,remark:`PIMS, 개인정보 경영시스템
평가(관리적보호, 기술적보호, 물리적보호)
절차(신청 > 심사 > 결과)
구성(범위, 목적, 요구사항, 가이드라인)`,image:[]},{index:357,topic:"개인정보 안전성 확보조치",define:`127회 관리 2교시
131회 관리 4교시`,head:`개인정보가 분실, 도난, 유출, 위조, 
변조 또는 훼손되지 아니하도록 
안전성 확보에 필요한 기술적, 
관리적 및 물리적 안전조치 수립`,remark:`기술적, 관리적, 물리적 안전조치 수립
내부관리계획`,image:[]},{index:358,topic:"> 내부관리계획",define:`127회 관리 2교시
131회 관리 4교시`,head:`개인정보의 분실·도난·유출·위조·변조 
또는 훼손되지 아니하도록 내부 
의사결정 절차를 통하여 수립된 
관리계획`,remark:`내부 의사결정, 암호화 적용
처리자(완화, 표준, 강화)
주요내용(책임자지정, 역할 및 책임, 
접근통제, 유출사고 대응계획)
예외(1만명 이하  처리하는 소상공인)`,image:[]},{index:359,topic:"개인정보의 가명·익명처리 기술",define:`128회 관리 1교시
131회 응용 3교시`,head:`개인정보를 알수 없도록 가명처리나 
익명처리하는 기술`,remark:`유형(가명처리, 총계, 삭제, 범주, 마스킹)
ISO 20889
기법(통계, 암호, 해부화, 가명, 삭제, 재현)
재식별위험(Single out, Linkability, Inference)
해결(K익명, L다양, T근접)`,image:[]},{index:360,topic:"개인정보보호법 개정안",define:"130회 관리 2교시",head:`개인정보 처리 및 보호에 관한 사항을 
정함으로써 개인의 자유와 권리를 
보호하고, 나아가 개인의 존엄과 
가치를 구현함을 목적으로 하는 법률`,remark:`개정안(데이터경제성장, 극민신뢰사회,
글로벌표준, 선도국가, 활성화)
개별주체(주체, 처리자, 책임자)
흐름(수집, 저장, 이용, 공유, 삭제)
전송요구권(본인, 제3자)
AI 결정대응권(설명요구권, 거부권, 
프로파일링, 자동화된결정)`,image:[]},{index:361,topic:"개인정보 안심구역",define:"135회 관리 1교시",head:`제로 트러스트(Zero Trust) 원칙하에 외부와 차단되어 강화된 보안환경에서
보다 유연하게 개인정보 처리를 할 수 있도록 개인정보위원회가 지정한 공간`,remark:null,image:["static/images/cellImage_1186147548_449.jpg","static/images/cellImage_1186147548_450.jpg"]},{index:362,topic:"CBPR (Cross Border Privacy Rule)",define:`131회 응용 1교시
132회 관리 3교시`,head:`APEC 프라이버시 보호 원칙을 기반 
기업의 개인정보 보호 체계를 
평가하여 인증하는 글로벌 인증제도`,remark:`개인정보 보호체계, 
개인정보 국외이전, GDPR, 자율인증제도
절차(준비 > 심사 > 인증 > 유지관리)
기준(체계수립, 수집/위탁, 주체권리, 
무결성)
50개기준
APEC 9원칙(고지, 수집제한, 목적내이용, 
선택, 무결, 열람)`,image:["static/images/cellImage_1186147548_451.jpg","static/images/cellImage_1186147548_452.jpg"]},{index:363,topic:"PbD (Privacy by Design)",define:"133회 관리 2교시",head:`개인정보침해 예방을 위해 SW구축 전 
과정에 개인정보보호요소를 적용하는 
기법`,remark:`사전 예방
원칙(Design, Coverage, Usability)
Design(사전예방, 기본값, 설계내재)
Coverage(균형, 전생애주기)
Usability(가시성 및 투명성, 개인존중)
전략(최소화, 숨기기, 분리, 총계, 제공)
개인정보보호법 3조
개인정보 보호 중심설계 인증`,image:["static/images/cellImage_1186147548_453.jpg"]},{index:364,topic:"개인정보 보호 강화기술 (Privacy Enhancing Technology)",define:`134회 관리 1교시
134회 응용 4교시`,head:`개인정보의 기밀성을 보호하면서, 
정보를 수집, 처리, 분석, 공유할 수 
있는 기술 프로세스와 방법, 지식의 
총칭`,remark:`개인정보 강화 및 보호
차분 프라이버시, 합성 데이터, 
영지식 증명, 동형 암호화, 연합학습, 
신원기반, 다자간연산`,image:[]},{index:365,topic:"> 다자간 계산(MPC, Multi-Party Computation)",define:"133회 관리 4교시",head:`여러 참여자들이 자신의 데이터를 
공개하지 않고도 공동으로 계산을 
수행할 수 있게 하는 암호학적 기법`,remark:`여러 참여자, 분산신뢰, 프라이버시 보호
원리(비밀유지, 공동계산, 결과공유)
secret sharing, beaver triple, garbled circuits,
Oblivious Transfer, 임계값서명
동형암호, 무지전송, 블록체인
PET 개인정보강화`,image:[]},{index:366,topic:"메시지 인증 코드 (Message Authentication Code)",define:"127회 관리 1교시",head:`해시알고리즘과 비밀키를 사용하여 
메시지의 무결성과 인증을 수행하는 
코드`,remark:`메시지 무결성, 인증, 해시알고리즘
활용(CBC-MAC, H-MAC)`,image:[]},{index:367,topic:"변조 (Modification)",define:"127회 관리 1교시",head:`비인가자들의 불법적인 접근 뿐만 
아니라 불법적인 변경에 의한 
무결성에 대한 공격`,remark:`데이터 수정, 변조, 무결성 파괴
대응(zero trust, 암호화, 관제)`,image:[]},{index:368,topic:"위조 (Fabrication)",define:"127회 관리 1교시",head:`비인가자들의 시스템에 대한 위조물 
삽입에 의한 인증에 대한 공격`,remark:`위조, 삽입, 무결성 파괴
대응(DRM, 암호화, 부인봉쇄, 블록체인)`,image:[]},{index:369,topic:"접근제어",define:`127회 관리 2교시
132회 응용 1교시
128회 관리 4교시
129회 관리 2교시
133회 관리 4교시`,head:`외부로부터 위협 보호위해, 사용자, 
신분 식별/인증, 대상정보, 
접근/사용자 수준, 인가 관리기법`,remark:`기밀성, 무결성, 가용성 유지
정책(MAC, DAC, RBAC, ABAC)
모델(BLP, BIBA, Clark & Wilson, 만리장성)
매커니즘(ACL, CL, IL, SL)
절차(식별 > 인증 > 권한)
LDAP`,image:[]},{index:370,topic:"> 벨라파듈라 (BLP, Bell-Lapadula)",define:"127회 관리 2교시",head:`허가된 비밀 정보에 허가되지 않은 
방식의 접근을 금지하는 모델로서, 
기밀성을 강조하는 모델`,remark:`기밀성
규칙(단순 No Read Up, 성형 No Write Down, 
특수 Strong star)`,image:[]},{index:371,topic:"> 비바 (Biba)",define:"127회 관리 2교시",head:`BLP의 단점을 보완한 무결성을 
보장하는 최초의 모델`,remark:`무결성, 비인가자 데이터 수정 방지
규칙(No Read Down, No Write Up)
무결성 강화(Clark & Wilson)`,image:[]},{index:372,topic:"> Clark & Wilson",define:"127회 관리 2교시",head:`무결성 중심의 상업적 모델로 
사용자가 직접 객체에 접근할 수 없고 
프로그램을 통해서만 객체 접근 
보안 모델`,remark:`무결성, 상업적
규칙(TP, CDI, UDI, IVP)
목표(비인가자의 위변조 방지, 정확한 
트랜젝션, 직무분리)`,image:[]},{index:373,topic:"> 만리장성 모델 (Chinese Wall Model) (=Brewer-Nash Model)",define:"132회 응용 1교시",head:`사용자가 한 정보 집합에 접근하면, 
그와 충돌할 수 있는 다른 정보 
집합에는 접근 할 수 없도록 제한을
두는 방식의 모델`,remark:`이해상충방지, 충돌집합기반
구성(주체, 객체, 접근권한, 충돌집합, 
엑세스제어, 안전성검사)`,image:[]},{index:374,topic:"> 식별 (Identification)",define:"128회 관리 4교시",head:`사용자가 문자열 등 식별자로 자신의 
신원정보를 밝히고, 시스템에 이를 
확인하는 행위`,remark:"식별자, 확인",image:[]},{index:375,topic:"> 인증 (Authentication)",define:"128회 관리 4교시",head:`사용자가 임의의 정보에 접근할 수 
있는지 정보를 확인하고 자격을 
검증하는 단계`,remark:`접근 확인, 자격검증
보안요구(인증, 식별, 허가, 인증방식, 기준)
유형(지식 type1, 소유 type2, 생체 type3, 
특징)
분산인증(DID), 2 Factor인증, Multi Factor,
자각인증, 무자각인증`,image:[]},{index:376,topic:"> 통제정책",define:"129회 관리 2교시",head:`자원에 접근하는 사용자의 접근모드 
및 접근 제한조건 정의`,remark:`최소권한, 직무분리
DAC(임의), MAC(강제), RBAC(역할), 
ABAC(속성)`,image:[]},{index:377,topic:"ABAC(Attribute-Based Access Control)",define:"135회 응용 2교시",head:"속성 기반으로 접근 권한 주체와 접근 권한 대상이 어떠한 환경에 처해 있는가를 동적으로 분석하여 접근 사용자 및 시스템에 권한을 부여하는 접근통제 정책",remark:null,image:["static/images/cellImage_1186147548_454.jpg","static/images/cellImage_1186147548_455.jpg"]},{index:378,topic:">  LDAP (Lightweight Directory Access Protocol)",define:"129회 관리 2교시",head:`네트워크 상에서 조직이나 개인정보 
혹은 파일이나 디바이스 정보 등을
찾아보는 것을 가능하게 만든 
소프트웨어 프로토콜`,remark:"계층구조, 클라이언트-서버 인증",image:[]},{index:379,topic:"SOAR (Security Orchestration, Automation and Response)",define:"127회 관리 3교시",head:`다양한 보안장비의 통합적 수집한 
로그를 분석하고, 워크플로우 자동화, 
보안사고 대응 및 보안위협에 대한 
지능적 탐지를 제공하는 솔루션`,remark:`구성(SOA, TIP, SIRP)
기능(자동화, 플레이북, 보안로그, 
빅데이터, 상관분석, ESM, SIEM)`,image:[]},{index:380,topic:"SIEM(Security Informatino & Event Management)",define:"135회 관리 1교시",head:`기업내 보안이벤트를 빅데이터 기반
로그 수집, 분석해주는 지능적 위협에
대한 조기 경고 모니터링 체계`,remark:null,image:["static/images/cellImage_1186147548_456.jpg","static/images/cellImage_1186147548_457.jpg"]},{index:381,topic:"랜섬웨어 (Ransomware)",define:"128회 관리 1교시",head:`몸값 과 소프트웨어 의 합성어로 
시스템을 사용 불가능한 상태로 
변경하거나 데이터를 암호화해 
사용할 수 없도록하고 이를 인질로 
금전을 요구하는 악성 프로그램`,remark:`공격 + 금전 요구
개발자중심
대응(백업, 패치, 실행주의)`,image:[]},{index:382,topic:"> RaaS (Ransomware as a Service)",define:"128회 관리 1교시",head:`RaaS는 랜섬웨어의 변형으로, 
랜섬웨어를 제작 및 배포하려는 
사람을 위해 고안된 일종의 주문 
제작 대행 서비스`,remark:`일반인 가능, 주문형 랜섬웨어
대응(백업, 패치)`,image:[]},{index:383,topic:"DRM (Digital Rights Management)",define:"128회 응용 1교시",head:`기업의 디지털 콘텐츠 생성과 
이용까지 전과정을 안전하게 관리, 
보호하기 위한 권한정보 기반의 
디지털 콘텐츠 저작권 관리 솔루션`,remark:`문서권한
기술(워터마킹, 핑거프린팅, 디바이스인증,
컨텐츠패키징)`,image:[]},{index:384,topic:"DLP (Data Loss Prevention)",define:"128회 응용 1교시",head:`데이터 손실 방지를 의미하며, 데이터 
흐름을 감시하고 기업 내부의 중요 
정보에 대한 유출을 감시, 차단 기술`,remark:`유출방지
기술(이동식저장매체차단, 인터넷차단)
유형(호스트, 네트워크, 스토리지)`,image:[]},{index:385,topic:"융합보안",define:"128회 응용 2교시",head:`정보보안과 물리보안 및 타 산업과의 
융복합에 대하 보안`,remark:`타 산업 융합, 정보보안 + 물리보안
네트워크 보안, 시스템 보안, 출입통제, 
영상감시, 클라우드, 인공지능, 빅데이터`,image:[]},{index:386,topic:"정보보호 제품 신속 확인제도",define:"129회 관리 1교시",head:`신기술, 융·복합 제품에 대해 최소한 
절차와 인증 기준으로 보안 제품을 
평가한 뒤 평가 기준이 마련될 때까지 
공공부문에 제품을 적용할 수 있도록 
하는 제도`,remark:`정보보호 혁신보안제품, 공공도입
절차(대상검토 > 신속확인 > 사후관리)
평가기준 없는 신기술 및 융합 제품`,image:[]},{index:387,topic:"인포스틸러 (InfoStealer)",define:"129회 관리 4교시",head:`운영체제,프로그램에 저장된 자격 
증명과 각종 정보를 훔치는 악성코드`,remark:`자격증명, 계정 유출
공격(감염 > 추출 > 정보수집)
대응(MFA, 모니터링, 패치, 실시간감시)`,image:[]},{index:388,topic:"웹 애플리케이션 방화벽 (WAF, Web Application Firewall)",define:`129회 응용 1교시
134회 응용 3교시`,head:`Web Traffic, Script 등의 방어가 가능한 
솔루션`,remark:`SSL, 방화벽, OWASP 취약점 방어, 
양방향 검사
모드(탐지, 차단)
기능(접근제어, dos제어, 파일 검사, 
변조방지)
설계(네트워크기반, 호스트기반)
내부(Proxy, Filtering)`,image:[]},{index:389,topic:"침입탐지시스템(IDS, Intrusion Detection System)",define:"134회 응용 3교시",head:`보안 정책을 위반하는 행위, 침입을 
실시간으로 탐지하는 시스템`,remark:`실시간 탐지
기능(경보, 세션차단, 실시간탐지)
구성(정보수집, 분석, 로그저장, 패턴DB)
소스기반(Host IDS, Network IDS)
탐지(오용탐지, 이상탐지)`,image:[]},{index:390,topic:"침입방지시스템 (IPS, Intrusion Prevention System)",define:"134회 응용 3교시",head:`네트워크에서 침입탐지와 사전 
예방하는 능동형 정보보호시스템`,remark:`실시간 탐지 + 사전예방,
zero-day 공격 일부 차단가능
기능(실시간분석, 자동대응, 미탐 감지)
시스템(에이전트, 콘솔)
운영(passive, inline, out-of-band)
위치(Host IPS, Network IPS)`,image:[]},{index:391,topic:"크리덴셜 스터핑 (Credential stuffing)",define:"131회 관리 1교시",head:`공격자가 미리 확보한 사용자의 
로그인 인증 정보를 이용해서 다른 
사이트 및 서비스에 무작위로 대입 후
계정을 탈취하는 공격 방식`,remark:`자격증명(Credential), 무작위 대입(Stuffing)
절차(수집 > 거래 > 공격)
다크웹 
MFA, 모니터링, Chapcha, 이상탐지`,image:[]},{index:392,topic:"제로 트러스트 보안 (Zero Trust Security)",define:`131회 관리 2교시
134회 응용 1교시`,head:`내부 네트워크와 외부 네트워크 
모두에서 보안 위협이 존재할 수 
있다는 사실을 인정하고, 모든 
사용자나 시스템이 데이터나 자원에 
접근 전에 항상 검증해야 한다는 방식`,remark:`원칙(SDP, 최소권한, 분리원칙)
인증 후 연결, 지속적인증, 비신뢰, 논리적,
추상적
제로트러스트, 마이크로세그멘테이션, 
MFA`,image:[]},{index:393,topic:"> 제로 트러스트(Zero Trust) 1.0",define:"134회 응용 1교시",head:`악의적인 상대에 의해 지속적으로 
노출되고 잠재적으로 침해될 수 있는
시스템의 구성요소, 서비스 및 
사용자를 다루는 일련의 원칙`,remark:`비신뢰
도입절차(준비,계획,구현,운영,피드백)
프레임워크(핵심요소, 기능)
핵심요소(식별자, 기기, 환경, 워크로드,
데이터)
기능(시각화, 자동화, 거버넌스)
성숙도(기존, 향상, 최적화)
마이크로 세그멘테이션, 프록시, SDP,
(Policy Decision Point), 
(Policy Engine), (Policy Administrator), 
(Policy Enforcement Point)
제로트러스트 보안`,image:[]},{index:394,topic:"> 제로 트러스트(Zero Trust) 2.0",define:`135회 응용 3교시
135회 관리 4교시`,head:`2024년 12월 철통 인증 지침(제로트러스트 가이드라인)2.0 발표 관련 문제

- 경계 기반 보안(Perimeter Security)과 제로 트러스트(Zero Trust) 성숙도모델 2.0 비교`,remark:`성숙수준 4단계 
 1. 기존 단계 (정적, 경계기반, 수동)
 2. 초기 단계 (일부 자동화)
 3. 향상 단계 (자동화, 중앙집중적, 통합)
 4. 최적화 (동적, 완전 자동화)
도입절차 
가. 준비 나. 계획 다. 구현 라.운영 마. 피드백 개선`,image:["static/images/cellImage_1186147548_458.jpg","static/images/cellImage_1186147548_459.jpg"]},{index:395,topic:"CSRF (Cross-Site Request Forgery)",define:"131회 응용 1교시",head:`악의적인 웹사이트나 이메일을 통해 
인터넷 사용자가 자신의 의지와는 
무관하게 공격자가 의도한 행위를
특정 웹사이트에 요청하게 만드는 
공격 기법`,remark:`요청위조, Script, Session Cookie, 
동작(게시물등록 > 읽기 > 조작응답 
> 요청동작)
대응(OAuth, Token, WAF)
SSRF`,image:[]},{index:396,topic:"국가정보원 보안성 검토 절차",define:"131회 응용 3교시",head:`공공기관 정보화 사업 추진 시 
구축계획 수립 단계에서 정보시스템 
보안규정 위배 여부를 점검하기 위한
절차`,remark:`보안점검
절차(범위, 목록, 리스크, 계획, 수행, 
결과분석, 보고서, 보완, 평가)`,image:[]},{index:397,topic:"큐싱 (Qshing)",define:"132회 관리 1교시",head:`QR 코드와 피싱(Fishing)의 합성어로 
QR 코드를 통해 악성 앱을 내려 
받도록 유도하는 공격기법`,remark:`QR코드, 사회공학, 이메일, 악성코드
절차(문자 > QR > 악성앱 설치 > 유출)
 2차 인증 유도 금지, 118신고, URL검증`,image:[]},{index:398,topic:"FIPS (Federal Information Processing Standard) 140-2",define:"132회 관리 4교시",head:`미국 연방정부에서 사용되는 정보 
보안 요구 사항을 정의하는 표준`,remark:`보안요구사항, 레벨
레벨(1 ~ 4)
암호화(키관리, 보안평가, 알고리즘)
보안요소(기밀성, 무결성, 가용성)
FIPS 140-3에서는 레벨(등급) 삭제`,image:[]},{index:399,topic:"영지식 증명(Zero Knowledge Proof)",define:"132회 응용 1교시",head:"어떤 내용을 알고 있을 경우, 그 내용을 직접적으로 보여 주지 않으면서 알고 있음을 증명하는 방법",remark:`증명자(Prover), 검증자(Verifier), 
성질(완전성, 건전성, 영지식성)
알리바바 동굴 원리`,image:[]},{index:400,topic:"딥페이크 (Deepfake)",define:`133회 관리 1교시
135회 관리 3교시`,head:`인공지능 기술을 이용하여 진위 
여부를 구별하기 어려운 이미지나 
영상물을 제작하는 기술`,remark:`가짜 데이터
딥러닝, LSTM, GAN(생성자, 판별자)
워터마크 의무화`,image:[]},{index:401,topic:"딥페이크 (Deepfake)",define:`133회 관리 1교시
135회 관리 3교시`,head:"",remark:null,image:[]},{index:402,topic:"다크패턴 (Dark Pattern)",define:"134회 관리 2교시",head:`기업의 이익을 목적으로 이용자를 
속이기 위해 교묘하게 설계된 사용자 
인터페이스(User Interface)패턴`,remark:`소비자 피해, 권리 침해, 행동유도
국내(4개범주, 19개유형) 
OECD(7개유형, 25개세부)
유형(편취, 오도, 방해, 압박)
 편취(숨은갱신), 오도(거짓할인, 유인판매)
방해(숨겨진질문, 취소방해), 압박(반복
간섭)
대응(데이터법, 정책, 규제체계, 자동감지,
행동분석 및 추적)`,image:["static/images/cellImage_1186147548_460.jpg"]},{index:403,topic:"제로데이 (Zero Day) 취약점",define:"134회 응용 1교시",head:`특정 소프트웨어의 아직까지 
공표되지 않은 혹은 패치 되지 않은 
보안 취약점을 이용한 해킹`,remark:`미패치 공격
대응(최신상태, F/W, IPS, 교육)`,image:[]},{index:404,topic:"DevSecOps",define:"135회 관리 2교시",head:`DevOps와 보안(Security)이 결합된 개념으로 DevOps의 IT 개발부터
배포, 운영, 관리에 이르기까지 전 영역이 보안과 연계된 접근방식`,remark:`빠르고 안전한 배포
개발자와 보안 팀 간 협업 
지속적인 개선`,image:["static/images/cellImage_1186147548_461.jpg"]},{index:405,topic:"스푸핑 (Spoofing)",define:"134회 응용 2교시",head:"ARP, MAC, IP 등의 속임을 이용한 공격",remark:`속임수, 무결성 파괴, 적극적 공격
유형(ARP, IP, ICMP, DNS)`,image:[]},{index:406,topic:"> ARP 스푸핑",define:"134회 응용 2교시",head:`ARP  메시지를 이용하여 상대방의 
데이터 패킷을 중간에서 가로채는 
중간자 공격 기법`,remark:`ARP 이용, 속임, 중간자공격
ARP Reply Broadcasting, ARP Cache, APR Reply
대응(정적 ARP, MAC관리, 암호화)`,image:[]},{index:407,topic:"> IP 스푸핑",define:"134회 응용 2교시",head:`공격자가  호스트 IP Address로 바꾸어 
IP 기반의 인증을 무력화 시키는 공격`,remark:`IP 변경
대응(패킷필터링, Wrapper)`,image:[]},{index:408,topic:"> DNS 스푸핑",define:"134회 응용 2교시",head:`조작된 Query를 전송하여 DNS 서버가 
저장하고 있는 주소 Cache 정보를 
임의로 변조하는 공격`,remark:`DNS 변경, DNS Cache Poisong 
대응(DDOS 대피소, DNSSEC)`,image:[]},{index:409,topic:"CC(Common Criteria)",define:"136회 관리 1교시",head:"국가 간에 시행되고 있는 정보보호시스템 평가 수준을 표준화하여 평가결과의 상호 인정을 목표로 단일화한 공통 평가기준, ISO 15408",remark:`* 평가 : EAL 0~7 (숫자높을수록 보증 요구사항 강화)

* 구성: 소기증
part1: CC소개 및 일반모델
part2 : 보안기능 요구사항
part3 : 보증 요구사항

* 평가절차: PP -> ST -> TOE
* CC인증기간이 긴 문제로 신속확인제도 도입`,image:["static/images/cellImage_1186147548_462.jpg","static/images/cellImage_1186147548_463.jpg"]},{index:410,topic:"타원곡선 암호(ECC, Elliptic Curve Cryptography)",define:"136회 관리 1교시",head:"소인수 분해 적용의 RSA보다 키의 비트수가 적고, 암호화 강도가 높은 타원곡선 이론 기반의 공개키 암호화 방식",remark:"① 공개키 암호화 ② 작은 키 크기 ③ 높은 보안성 ④ 빠른 연산 속도",image:["static/images/cellImage_1186147548_464.jpg","static/images/cellImage_1186147548_465.jpg"]},{index:411,topic:"암호문 공격(Ciphertext Attack)",define:"137회 관리 1교시",head:`암호분석을 하는 방법으로 암호문과 평문을 가지고, 평문과 암호문을 알아
내거나 암호화하는데 쓰인 알고리즘이나 키를 알아내는 방법

커크호프의 원리(Kerckhoff's Principle) 해석`,remark:null,image:["static/images/cellImage_1186147548_466.jpg","static/images/cellImage_1186147548_467.jpg","static/images/cellImage_1186147548_468.jpg"]},{index:412,topic:"국가 망 보안체계(N²SF)",define:"137회 관리 3교시",head:`업무정보를 3등급(기밀·민감·공개)으로 분류하여 등급별 보안통제를
적용함으로써, 보안성과 데이터 공유를 동시에 달성하는 정책`,remark:null,image:["static/images/cellImage_1186147548_469.jpg","static/images/cellImage_1186147548_470.jpg","static/images/cellImage_1186147548_471.jpg"]},{index:413,topic:"BPFdoor(Berkeley Packet Filter door)",define:"137회 관리 4교시",head:`"PF 기반 NW 패킷을 감시하다가 매직패킷 수신 시 리버스셸로 연결해 침해
공격을 수행하는 보안시스템 우회 공격기법"`,remark:null,image:["static/images/cellImage_1186147548_472.jpg","static/images/cellImage_1186147548_473.jpg","static/images/cellImage_1186147548_474.jpg"]},{index:414,topic:"DDoS 사이버대피소",define:"128회 관리 4교시",head:`피해 웹사이트로 향하는 DDoS 
트래픽을 대피소로 우회하여 분석, 
차단함으로써 정상적으로 운영될 수 
있도록 하는 중소기업 지원 서비스`,remark:`대상(중소기업)
트래픽 우회, 분석, 차단
3차 필터링`,image:[]},{index:415,topic:"정보공유센터 (ISAC, Information Sharing Analysis Center)",define:"129회 응용 3교시",head:`사이버 위협에 효과적으로 대응하기 
위한 공동대응체계`,remark:`역할(관제, 공유, 침해대응, 교육)
도메인별 (의료, 금융)`,image:[]},{index:416,topic:"ESG (Environmental, Social and Governance)",define:`126회 관리 2교시
129회 관리 3 교시
134회 관리 2교시`,head:`친환경, 사회 책임, 지배구조 개선 
방식 등의 비재무적 요소 통한 
지속가능성 기반 경영 방식`,remark:`환경, 사회, 지배구조
관련표준(ISO 14000, ISO 45001)
환경요소(온실가스, 에너지, 폐기물)
사회요소(안전,보건, 보안)
IT기술(Green IT, Smart Grid, AI, IoT)
보안(정보보호, 개인정보보호)
K-ESG 가이드라인`,image:[]},{index:417,topic:"> ISO 14000",define:"132회 관리 2교시",head:`국제적으로 환경관련 규격을 
통일하여 제품 및 이를 생산하는 
기업에 대해 부여하는 환경인증제도`,remark:`환경 경영 환경관리시스템(EMS), 
컴플라이언스 환경 심사 (EA), 
전과정평가(EPA)
심사(신청 > 예비 > 문서 > 본 > 결과)
ESG`,image:[]},{index:418,topic:"디지털세 (Digital Tax)",define:"126회 관리 2교시",head:`기업이 디지털 형식으로 제품을 
판매해 수익을 얻으면 사업장 
소재지와 상관없이 해당 국가가 일정 
세율로 세금을 부과하는 조세제도`,remark:`배경(IT 기업의 과세권 문제, 조세회피)
내용(필라1 Amount A, Amount B, 
필라2 글로벌최저한세, 원천지국 과세)`,image:["static/images/cellImage_1186147548_475.jpg"]},{index:419,topic:"IT 투자분석",define:`127회 관리 1교시
128회 관리 1교시
129회 관리 4교시`,head:`IT 투자 대안에 대한 성과를 객관적, 
논리적 측정하고 의사결정을 
지원하는 평가방법 체계`,remark:`프로세스(기획 > 투자 > 구축 > 운영 > 
효과 >성과)
지표(투자, 품질, 이용, 효과)
평가(사전, 중간, 사후)
기법(NPV, ROI, PP, IRR, BSC)
방법론(Real option, Cost, Multi criteria)`,image:[]},{index:420,topic:"> 균형성과기록표 (Balanced Score Card)",define:"127회 관리 1교시",head:`재무적 관점과 고객, 내부프로세스, 
학습과 성장측면의 3 가지 비재무적 
관점의  성과 관리기법`,remark:`재무, 고객, 내부프로세스, 학습과 성장
KPI, MBO, OKR, IT-BSC`,image:[]},{index:421,topic:"> IT-ROI 투자 성과평가 모델",define:"128회 관리 1교시",head:`IT 프로젝트의 사전, 중간, 사후 평가 
통해 IT 예산, 인력, 운영 측정 지표를 
도출할 수 있는 평가체계를 제공하는 
투자 성과평가 모델`,remark:`구성(사전, 중간, 사후평가)
측정(IT투자성과, IT투자비용)`,image:[]},{index:422,topic:"전자정부 평가",define:"127회 관리 2교시",head:`유엔에서 2002년부터 2년마다 
회원국을 대상으로 전자정부 참여 및 
발전 부문의 수준을 평가하는 제도`,remark:`2년마다 평가
평가(발전지수, 온라인참여지수)
발전지수(온라인서비스, 인프라, 인적)
참여지수(정보제공, 정책참여, 정책결정)`,image:[]},{index:423,topic:"> 전자정부 발전지수 (E-Government Development Index)",define:"127회 관리 2교시",head:`온라인서비스, 통신인프라, 인적자본 
부문을 종합하여 전자정부 발전 
정도를 객관적으로 평가하는 지수`,remark:"부분(온라인서비스, 통신인프라, 인적자본)",image:[]},{index:424,topic:"> 전자정부 정보시스템 성과 측정",define:"134회 응용 1교시",head:`정보시스템 운영과 관련된 업무 및 
비용 측면의 성과를 관리하기 위해 
정해진 지표에 따라 측정하는 활동`,remark:`성과관리
비용측면(적정성, 용이성, 효율성)
업무측면(영향도, 편의성, 달성도)`,image:[]},{index:425,topic:"정보전략계획 ISP (Information Strategy Planning)",define:`127회 관리 3교시
129회 관리 3교시
130회 관리 1교시
131회 관리 2교시
132회 응용 2교시`,head:`조직의 중장기 비젼 및 목표, 경영 
계획을 지원하기 위한 정보시스템, 
정보관리 체계의 비젼 수립 계획`,remark:`경영전략과 정보화 전략 연계 
단계(환경 > 현황 > 미래설계 > 이행계획)
단계별 활동/산출물
ISMP, BPR, EA`,image:["static/images/cellImage_1186147548_476.jpg"]},{index:426,topic:"> 정보시스템마스터플랜(ISMP)",define:`127회 관리 3교시
130회 관리 1교시
132회 응용 2교시`,head:`RFP 마련을 위해, 분석 기능 점수
도출이 가능한 수준까지 기능적
/비기능적 요건을 상세히 기술하며, 
구축 전략 및 이행 계획을 수립하는
활동`,remark:`특정 정보 시스템의 기능적/기술적
요구 사항 상세화
절차(착수 > 방향성 > 분석 > 정의 
> 이행방안)
단계별 활동/산출물
ISP, EA`,image:["static/images/cellImage_1186147548_477.jpg","static/images/cellImage_1186147548_478.jpg"]},{index:427,topic:"> BPR (Business Process Reengineering)",define:"131회 관리 2교시",head:`기업의 비용, 품질, 서비스 등의 
획기적인 향상을 이룰 수 있도록 
프로세스를 근본적으로 다시 
생각하고 혁신적으로 재설계하는 
경영혁신 활동`,remark:`혁신, zero-base
절차(현재프로세스 > 니즈파악 > 
혁신설계 >과제도출)
ISP, PI`,image:[]},{index:428,topic:"> EA (Enterprise Architecture)",define:`132회 응용 2교시
134회 응용 3교시`,head:`비즈니스 경영 목표 달성을 위해 기반 
어플리케이션, 데이터, 기술적 
아키텍처를 바탕으로 거버넌스를 
구성하여 기업 CSF와 Align 하는 
통합 아키텍처 청사진`,remark:`구성(BA, AA, TA, DA, SA, IT거버넌스, RM, SP)
성숙도(현행, 목표, 최적화)
ISP, ISMP`,image:[]},{index:429,topic:"> 범정부 정보기술 아키텍처 (EA, Enterprise Architecture)",define:"134회 응용 3교시",head:`범정부 EA 목적 확인 및 범정부 EA 
목적에 따른 구성요소 도출하는 
아키텍처`,remark:`범정부 아키텍처
메타모델(EA메타요소간 관계모델)
참조(DRM, SRM, TRM, PRM)
성숙도(현행, 이행전략, 목표, 아키텍처, 
최적화)`,image:[]},{index:430,topic:"SCM (공급망관리)",define:`128회 관리 2교시 
136회 관리 2교시`,head:`공급자에서 최종 소비자에 이르는 
제품의 공급체인을 효율적으로 
통합하여 기업의 수익증가와 
고객서비스 개선을 위한 정보화된 
경영혁신기법`,remark:`공급망 관리, 고객지향, 정확한 수요 예측
채찍효과, SCM 2.0
구성(SCP, SCE)
예측 7단계(기간 > 자료 > 분석 > 방법)
기법(정성,정량)
정성(델파이, 시장조사, 수명주기)
정량(시계열, 서베이, 지수평활, 회귀분석)
안전재고, 적정재고 관리`,image:[]},{index:431,topic:"디지털 혁신",define:`128회 관리 2교시
131회 관리 1교시`,head:`디지털 중심으로 발생하는 다양한 
변화에 디지털 기반으로 기업의 전략
조직, 프로세스, 비지니스 및 
시스템을 근본적으로 변화시키는 
경영전략`,remark:`데이터 혁신, 프로세스 혁신, 기업문화혁신
디지털 트랜스포메이션, CoE`,image:[]},{index:432,topic:"> CoE (Center of Excellence)",define:"128회 관리 2교시",head:`기업가 정신과 비즈니스 가치망, 
테크놀로지 전문성이 결합된 조직`,remark:`역할(방향성, 전문성, 부가가치창출)
전문가 집단`,image:[]},{index:433,topic:"> 디지털 트랜스포메이션 (Digital Transformation)",define:"131회 관리 1교시",head:`디지털 기술을 활용하여 전략, 
프로세스, 조직, 문화, 커뮤니케이션, 
비즈니스모델, 등 기업 가치사슬 
전반을 디지털화 하는 경영혁신전략`,remark:`전략(비전수립, 조직정비, 인재확보, 
거버넌스 체계, 비즈니스 모델, 혁신)
기술(빅데이터, 인공지능, 모바일, IoT, 
Cloud)
오픈이노베이션, 디지털씽킹, 디지털 혁신`,image:[]},{index:434,topic:"디지털 플랫폼 정부",define:`129회 관리 1교시
129회 응용 4교시`,head:`모든 데이터가 연결되는 디지털 
플랫폼 위에서 국민, 기업 정부가 함께
사회문제를 해결하고 새로운 가치를 
창출하는 정부`,remark:`특징(양방향, 플랫폼, 민간참여)
구성(플랫폼제공자, 공급자, 소비자)`,image:[]},{index:435,topic:"디지털 역기능",define:"130회 관리 2교시",head:`디지털 기술과 그 응용 서비스 
활용에서 발생하는 부작용을 통칭`,remark:`3대이슈(허위정보, 혐오표현, 성범죄)
유사(정보화 역기능, 사이버 역기능)
사례(딥페이크, 인포데믹스, 필터버블)
대응(법적강화, AI, 신기술, 교육, 거버넌스)`,image:[]},{index:436,topic:"전략적 기업경영 (Strategic Enterprise Management)",define:"131회 관리 4교시",head:`기업의 경영진이 가치중심 경영을 
전사적으로 구현하기 위해 KPI, 
원가/성과 관리를 통해 전략 중심형 
조직을 구축 위한 경영 지원시스템`,remark:`전략적 기업경영, 가치중심 경영, 
의사결정, SEM, ESG
구성(VBM, ABM, BSC), KPI, ERP, DW
절차(수집 > 구축 > 의사결정)`,image:[]},{index:437,topic:"지능정보화 기본법",define:"131회 응용 1교시",head:`다양한 분야에서 지능형 정보기술의 
개발과 이용에 유리한 환경을 
조성하고, 지능정보기술의 개발과 
적용을 촉진하기 위해 제정된 법률`,remark:`주요내용(국가전략, 협의회, CIO, 
데이터센터)`,image:[]},{index:438,topic:"디지털 리터러시 (Digital Literacy)",define:"132회 응용 1교시",head:`컴퓨터를 통해 다양한 출처로부터 
찾아낸 여러 가지 형태의 정보를 
이해하고 자신의 목적에 맞는 새로운 
정보로 조합해 냄으로써 올바로 
사용하는 능력`,remark:`영역(연구, 의사결정, 창의성, 시민의식, 
의사소통, 기술활용)
교육(윤리, 능력, 적용)`,image:[]},{index:439,topic:"기술수용모델 (TAM, Technology Acceptance Model)",define:"133회 관리 1교시",head:`사용자가 새로운 기술을 수용하고 
사용하는 과정에서 어떤 요인들이
영향을 미치는지를 설명하는 이론적 
모델`,remark:`새로운 기술수용, 영향
외부요인, 핵심(인지된용이성, 
인지된유용성),
행동(태도, 이용의사)
TAM2, TAM3`,image:[]},{index:440,topic:"BCP (Business Continuity Planning)",define:"133회 관리 1교시",head:`기업 비즈니스에 갑작스런 재해가 
발생하더라도 비즈니스를 중단 없이 
지속적으로 수행할 수 있도록 IT infra, 
인적 자원, 물적 자원에 대한 재해 
예방 및 복구 계획을 수립하는 체계`,remark:`비즈니스 연속성, 무중단
BIA, BA, 모의훈련
지표(RTO, RPO, RSO, RCO, BCO), DRS`,image:[]},{index:441,topic:"> DRS (Disaster Recovery System)",define:"133회 관리 1교시",head:`정보시스템에 대한 비상 대비체계 
유지와 각 업무 조직별 비상사태에 
대비한 복구계획 수립을 통한 업무
연속성을 유지할 수 있는 체계`,remark:`복구계획, BCP
고려사항(비용, 복구용이, 상호운영)
DR유형(Mirror, Hot, Warm, Cold)
데이터(동기, 비동기)`,image:[]},{index:442,topic:"정보기술 서비스 관리체계 (ITSM)",define:"133회 관리 2교시",head:`서비스 수준 충족을 보장하고 
효과성과 효율성을 높이며 지속적인 
개발을 위한 프레임워크를 제공하는 
관리 시스템`,remark:`IT서비스, ISO 20000, ITIL, CMMI, SPICE, 
SoW, SLA, SLM
구성(계획, 포트폴리오, 합의, 공급, 설계 
및 구축, 이행, 브증)
전환(설계, 구축, 전환)
원칙(고객중심, 리더십, 전원참여, 
지속개선)`,image:[]},{index:443,topic:"> ISO 20000",define:"133회 관리 2교시",head:`IT 서비스 관리 체계 구축에 필요한 
요건을 명확히 정의한 국제 표준`,remark:`ITSM 표준
Part1 규칙, Part2 권고사항 
Part3 적용가능성
프로세스(Service Delivery, Control, 
Resolution, Relationship)`,image:[]},{index:444,topic:"TAM-SAM-SOM 프레임워크",define:"134회 관리 1교시",head:`스타트업이 목표로 하는 시장규모를 
TAM(전체시장), SAM(유효시장), 
SOM(거점/수익시장)의 단계별 
Top-Down 방식으로 정의 프레임워크`,remark:`시장규모
TAM 전체, SAM 유효, SOM 수익, 
PAM 잠재, LAM 가설(MVP)검증
STP전략`,image:["static/images/cellImage_1186147548_479.jpg"]},{index:445,topic:"경영환경 분석",define:"133회 관리 3교시",head:`제품 또는 시장을 둘러싸고 있는 
여러 가지 환경요인들의 변화를 
파악하여 기업 전략 수립의 방향을 
설정하는 방법`,remark:`환경 분석, 전략 수립
외부(5Force, PEST, STEEP, PESTEL, 3C)
내부(7S, Value chain, swot)`,image:[]},{index:446,topic:"> SWOT (Strengths, Weaknesses, Opportunities, Threats)",define:"133회 관리 3교시",head:`기업내부의 강점과 약점을 분석하고 
외부환경의 기회요인과 위협요인을 
파악하여 전략적 대안을 도출하는 
분석 방법`,remark:`전략도출, 포괄적
강점, 약점, 기회, 위협
전략(SO, ST, WO, WT)`,image:[]},{index:447,topic:"> 3C(Customer, Competitor, Company)",define:"133회 관리 3교시",head:`경쟁사와 비교 및 차별화 포인트를 
분석함으로써 자사가 경쟁력우위를 
차지할 수 있는 전략을 분석하는 기법`,remark:`미시적, 고객중심, 경쟁환경
고객, 경쟁사, 자사`,image:[]},{index:448,topic:"> PEST(Political, Economical, Social, Technological)",define:"133회 관리 3교시",head:`정치(P), 경제(E), 사회문화(S), 
기술(T)의 거시환경 요인 및 영향도를
통해 전략수립의 기초를 제공하는 
분석기법`,remark:`거시적, 통제어려움
정치, 경제, 사회, 기술
PESTEL, STEEP`,image:[]},{index:449,topic:"IT 거버넌스",define:"134회 관리 2교시",head:`IT활용에 있어 바람직한 행동을 
지원하기 위한 의사결정 및 책임에 
대한 프레임워크`,remark:`의사결정 및 책임
도메인(전략적연계, 가치전달, 위험관리, 
자원관리,성과측정)
측징지표(ROI, 만족도, 위험대응, 예산준수,
비용효율, SLA, OLA)
방법론(COBIT,  EVA, TCO, BCG, Value Chain,
BSC, AIE)`,image:[]},{index:450,topic:"플랫폼 엔지니어링 (Platform Engineering)",define:"134회 응용 1교시",head:`여러 애플리케이션과 서비스를 
지원하고 수명 주기를 관리하기 위해 
소프트웨어 플랫폼을 설계하고 
구축하여 사용자에게 제공하는 
엔지니어링`,remark:`소프트웨어 수명 주기 관리, 
Cross Functional Team, 생산성 향상`,image:[]},{index:451,topic:"지식재산권",define:"135회 응용 1교시",head:`- 인간의 지적 창조물 중에서 법으로 보호할 만한 가치가 있는 것들에 법이 부여한 권리

- 사람의 정신적 창작물이나 연구결과 또는 창작된 방법을 인정하는 독점적 권리로서 무형재산권`,remark:`종류
- 산업재산권
- 저작권
- 신지식 재산권`,image:["static/images/cellImage_1186147548_480.jpg","static/images/cellImage_1186147548_481.jpg"]},{index:452,topic:"지속가능한 스마트시티",define:"135회 응용 2교시",head:"도시가 가지고 있는 경제, 환경적 요소가 연속성을 가지고 현재 세대와 미래 세대가 동일한 혜택을 누릴 수 있게 발전하는 ICT 기술 기반 도시 패러다임",remark:null,image:["static/images/cellImage_1186147548_482.jpg"]},{index:453,topic:"기술부채",define:"135회 관리 1교시",head:`- 소프트웨어 설계·개발·테스트·배포 전 과정에서 장기적 관점의 솔루션 대신 짧은 기간 내 임시 방편의 해법을 선택해 차후 발생 가능한추가적 위험 비용

- 단기적인 개발 속도를 높이기 위해 취한 비효율적인 설계나 코드 작성이 장기적으로 유지보수 및 확장성을 저하시켜 추가적인 비용을 발생시키는 상태`,remark:null,image:["static/images/cellImage_1186147548_483.jpg","static/images/cellImage_1186147548_484.jpg"]},{index:454,topic:"화이트 레이블 마케팅(White Label Marketing)",define:"136회 관리 1교시",head:"제조사나 서비스 제공자 등의 제3자가 개발한 제품이나 서비스를 자신의 브랜드로 리브랜딩(Rebranding)하여 판매하는 마케팅 전략",remark:`- 키워드
: 리브랜딩, 브랜드 독립성, 비개발형 비즈니스 모델, 빠른 시장 진입,

- 기술요소
: SaaS, API 연동, 멀티테넌시 구조, 브랜딩 커스터마이징, CI/CD 파이프라인, AI/ML
기반 마케팅 자동화, 화이트 레이블 CMS(Contents Management System), SSL, GDPR, ISO 27001`,image:["static/images/cellImage_1186147548_485.jpg","static/images/cellImage_1186147548_486.jpg"]},{index:455,topic:"AX(AI Transformation)",define:"136회 관리 3교시",head:`기업이 기존 업무 방식을 AI 중심으로 변화시키는 과정
> 단순한 자동화를 넘어, AI 기술을 핵심 비즈니스 프로세스에 통합해 운영 방식을 재구성하는 것`,remark:null,image:["static/images/cellImage_1186147548_487.jpg","static/images/cellImage_1186147548_488.jpg"]},{index:456,topic:"SLA(Service Level Agreement)",define:"137회 관리 2교시",head:`정보시스템 사용자와 공급자 
사이의 상호 동의에 의하여 
서비스 수준을 명시적으로 정의하고 
이를 문서화한 약정서

* 지표
하드웨어 영역
: 서비스 가동률, 동일장애 발생률
소프트웨어 영역
: 장애 및 오류건수, SR 적기 처리율
네트워크 영역
:네트워크 가동률, 네트워크 장애건수`,remark:null,image:["static/images/cellImage_1186147548_489.jpg","static/images/cellImage_1186147548_490.jpg"]},{index:457,topic:"다중지역 동시 가동방식 (Multi - Region Active - Active)재해복구시스템",define:"137회 관리 3교시",head:`실제로 서비스되는 시스템이 여러 지역에 동시에 가동되어 한 지역
의 시스템에 장애가 있더라도 실시간으로 서비스 연속성이 보장되는
(Active-Active) 방식`,remark:null,image:["static/images/cellImage_1186147548_491.jpg","static/images/cellImage_1186147548_492.jpg"]},{index:458,topic:"> 클러스터드 인덱스와 논클러스터드 인덱스",define:"136회 관리 2교시",head:`클러스터드 인덱스 : 테이블의 실제 데이터가 인덱스에 포함되어 있으며, 데이터가 인덱스 순서대로 물리적으로 정렬되어 저장되는 인덱스

논클러스터드 인덱스 : 인덱스는 별도로 저장되고, 실제 데이터는 물리적으로 분리된 위치에 있으며 인덱스에는 해당 데이터의 참조 주소만 포함된 인덱스`,remark:null,image:["static/images/cellImage_1186147548_493.jpg","static/images/cellImage_1186147548_494.jpg"]},{index:459,topic:"데이터베이스 용량산정",define:"131회 응용 2교시",head:`테이블에 저장해야 할 데이터양과 
볼륨이 얼마나 많은 디스크 공간을 
차지하는지를 산정하는 기술`,remark:`방법(수식계산법, 참조법, 시뮬레이션법)
기준(트랜잭션 처리, 백업, 운영시간, 
업무량)
절차(오브젝트용량 > 스페이스 용량 > 
디스크용량)`,image:[]},{index:460,topic:"데이터 표준화",define:`126회 관리 3교시
131회 관리 1교시`,head:`시스템 별로 산재해 있는 데이터 정보 
요소에 대한 명칭, 정의, 형식, 규칙에
대한 원칙을 수립하여 전사적으로 
적용하는 기법`,remark:`데이터 표준화
요소(명칭, 정의, 형식, 규칙)
효과(전사의사결정, 통합, 품질, 규정)
DQM, DQC`,image:[]},{index:461,topic:"> 공공기관의 데이터베이스 표준화지침",define:"126회 관리 3교시",head:`공공기관에서 생성 또는 취득하는 
데이터에 대해 저장하는 
데이터베이스의 표준화에 대한 지침`,remark:`관리체계구축, 표준 수립, 공통표준용어,
메타데이터 관리
테이블 정의서, 항목
항목(영문DB명, 한글테이블명, 
영문테이블명, 테이블유형, 테이블소유자)
지침(물리영문DB명, 소유자, 테이블이름)
구축 시 예방적 품질 준수`,image:[]},{index:462,topic:"> 예방적 품질관리",define:"132회 관리 4교시",head:`정보시스템 구축계획을 수립하는 
ISP, ISMP 등 ‘계획’ 단계부터 품질관리 
활동을 수행하여 품질 요구가 반영된 
RFP의 작성으로 고품질 
데이터베이스 구축 유도`,remark:`절차(계획, 발주, 설계, 개발, 완료)
4개영역(표준, 구조, 값, 관리체계), 9개항목`,image:[]},{index:463,topic:"데이터 산업진흥 및 이용촉진에 관한 기본법 (=데이터산업법)",define:"127회 관리 4교시",head:`4차산업혁명의 핵심인 데이터 경제 
전환에 적극 대응하고, 데이터의 
생산,유통, 활용을 촉진하기 위한 법률`,remark:`데이터의 생산, 거래 및 활용 촉진
제 1 조(목적)~ 제 48 조
데이터 가치평가, 자산보호, 데이터거래사
활용(데이터 커머스, 데이터 거래소)`,image:[]},{index:464,topic:"데이터 커머스 (Data Commerce)",define:"127회 관리 4교시",head:`소비자와 상품 데이터를 분석하여 
맞춤형 서비스를 제공하는 커머스`,remark:`기술(빅데이터, ai, iot, cloud, 
데이터마이닝)
특징(고객맞춤, 모바일, 커머스, 
중계플랫폼)
활용(데이터 거래소)`,image:[]},{index:465,topic:"데이터 거래소",define:"132회 관리 1교시",head:`여러 산업 분야에서 확보한 데이터를 
수집, 가공하여 부가가치를 높여 
제공하는 데이터 유통·활용 플랫폼`,remark:`데이터 센터, 데이터 플랫폼, 데이터 브로커
프로세스(공급자, 거래소, 수요자)
데이터 커머스, 데이터 거래사`,image:["static/images/cellImage_1186147548_495.jpg"]},{index:466,topic:"데이터베이스 튜닝",define:"127회 관리 2교시",head:`데이터베이스 응용, 데이터베이스 
자체, 운영체제의 조정 등을 통하여 
최적 자원으로 최적의 성능을 
얻을 수 있도록 개선하는 방법`,remark:`최적의 성능, 장애방지, 품질향상
단계(설계 > DBMS > SQL)
설계단계(정규화, 반정규화, 테이블 분할,
통합, 효율적 인덱스)
SQL 튜닝(Hint, Join)`,image:[]},{index:467,topic:"반정규화",define:"135회 관리 2교시",head:"정규화된 엔티티 타입, 속성, 관계에 대해 시스템의 성능 향상과 개발 및 운영 단순화를 위해 데이터 모델을 통합하는 프로세스",remark:null,image:["static/images/cellImage_1186147548_496.jpg","static/images/cellImage_1186147548_497.jpg","static/images/cellImage_1186147548_498.jpg"]},{index:468,topic:"> Hint",define:"127회 관리 2교시",head:`데이터베이스의 SQL 성능향상을 위해 
옵티마이저에게 원하는 실행계획으로 
유도하도록 사용하는 명령어`,remark:`옵티마이저 
/*+hint*/
유형(옵티마이저, 접근경로, 쿼리변환, 
조인변경)`,image:[]},{index:469,topic:"옵티마이저",define:"127회 관리 3교시",head:`사용자가 질의한 SQL문의 처리 가능한 
실행계획을 탐색하고 각 실행계획에 
대한 비용을 추정하여 최적의 실행
계획을 수립하는 DBMS의 핵심엔진`,remark:`기능(실행계획, 질의변환)
동작 (parse > query rewrite > optimization >
qep 생성 > query 실행)
유형(RBO, CBO)`,image:[]},{index:470,topic:"> RBO (Rule Based Optimizer)",define:"127회 관리 3교시",head:`미리정의된 규칙(인덱스, 비교연산자) 
기반으로 결정하는 옵티마이저`,remark:"규칙기반, ranking",image:[]},{index:471,topic:"> CBO (Cost Based Optimizer)",define:"127회 관리 3교시",head:`통계정보에 따른 비용 계산하여 최소 
비용으로 경로 결정하는 옵티마이저`,remark:"통계기반, cost",image:[]},{index:472,topic:"데이터 거버넌스",define:`127회 관리 3교시
130회 관리 1교시`,head:`전사의 데이터 정책, 지침, 표준, 전략, 
방향 등에 근거하여 기업의 목표 달성 
위해 데이터에 대한 의사결정을 
지원하는 매커니즘`,remark:`전사차원 관리, 수립
기능(데이터품질, 표준화, 마스터/메타 
데이터, 데이터 보안 및 프라이버시)
구성(원칙, 조직, 프로세스)
체계(표준화, 관리체계, 저장소)
성숙도(도입, 프로세스, 통합경영, 위험대응,
가치창출)`,image:[]},{index:473,topic:"> Master Data (마스터 데이터)",define:"127회 관리 3교시",head:`기업의 모든 비즈니스 활동 및 
경영진의 비즈니스 의사결정에 
근간이 되는 데이터 관련 시스템들의 
기준이 정의된 데이터`,remark:`시스테 기준 정의 데이터
유형(운영기준, 컨트롤기준, 마스터기준)
MDR, MDM 활용`,image:[]},{index:474,topic:"> Maste Data Management",define:"127회 관리 3교시",head:"마스터 데이터를 관리하는 시스템",remark:`기술(EAI, repository, ETL)
관리(DQM, 가시화, MRM)`,image:[]},{index:475,topic:"데이터 안심구역",define:`133회 관리 2교시
136회 관리 1교시`,head:`누구든지 데이터를 안전하게 분석, 
활용할 수 있도록 유용한 데이터와, 
다양한 분석도구 등을 제공하는 
안전한 데이터 분석 공간`,remark:`데이터 안전성, 분리공간, 데이터산업법
이용(신청, 자료분석, 결과다운로드)
기능(분석, 환경, 서비스, 지원)
지정(신청서, 접수, 심사, 결정, 교부)
요건(시설, 공간, 시스템, 정책, 조직)`,image:[]},{index:476,topic:"개인정보 안심구역과 데이터 안심구역 비교",define:"136회 관리 1교시",head:`- 개인정보 안심구역
: 제로 트러스트(Zero Trust) 원칙하에 외부와 차단되어 강화된 보안환경에서 유연하게 개인정보 처리를 할 수 있도록 개인정보위원회가 지정한 공간

- 데이터 안심구역
: 법적 기준(데이터산업법 등)에 따라 지정, 미개방 데이터 등 민감한 데이터를 안전하게 분석·활용할 수 있는 구역`,remark:"데이터 안심구역의 익명정보 활용에 따른 가명정보 활용 제한이 있어 , 23년 개인정보위원회에서 가명정보 활용 위한 개인정보 안심구역 도입",image:["static/images/cellImage_1186147548_499.jpg","static/images/cellImage_1186147548_500.jpg"]},{index:477,topic:"데이터 마이그레이션",define:"128회 관리 3교시",head:`데이터를 한 위치에서 다른 위치로, 
한 형식에서 다른 형식으로 또는 
한 애플리케이션에서 다른 
애플리케이션으로 이동하는 프로세스`,remark:`무결성(값이 정확), 정합성(서로 일치)
프로파일링 분석(컬럼속성, 누락값 분석, 
값의 허용범위, 문자열 패턴 분석 등), 
데이터 마이그레이션 검증방법
(완전성, 외양, 통합, 프로세싱, 추출, 전송, 
전환)`,image:[]},{index:478,topic:"DB 병행제어 (Concurrency Control)",define:`128회 관리 4교시
130회 관리 1교시`,head:`다중 사용자 환경을 지원하는 
데이터베이스 시스템에서 여러 
트랜잭션들이 성공적으로 동시에 
실행될 수 있도록 지원하는 기능`,remark:`무결성, 일관성, 동시실행
문제점(갱신손실, 현황파악오류, 모순, 
연쇄복귀 불가)
기법(Locking, 2PL, Time-stamp, Validation, 
MVCC)`,image:[]},{index:479,topic:"데이터 독립성 (Data Independency)",define:"128회 응용 1교시",head:`하위 단계 스키마를 변경하더라도 
상위 단계 스키마가 영향을 받지 
않도록 하는 데이터베이스 관리에서 
구조변화에 의한 영항을 미치지 
않도록 하는 성질`,remark:`영향 없음, 독립적
3단계(외부, 개념, 내부)
독립성(논리적, 물리적)
사상(외부/개념, 개념/내부)`,image:[]},{index:480,topic:"데이터 무결성",define:`128회 응용 3교시
134회 응용 3교시
135회 관리 4교시`,head:`사용자가 데이터 입력, 수정, 삭제, 
조회 등 데이터 작업을 수행할 때 
관계/ 참조 등의 무결성 제한이나 
규칙에 의해 데이터의 일관성과 
정확성을 유지 할 수 있도록 하는 성질`,remark:`종류(객체, 참조, 속성, 사용자정의, 키)
유형(본질적, 내재적)
무결성 제약조건`,image:["static/images/cellImage_1186147548_501.jpg"]},{index:481,topic:"> 개체 무결성 (Entity Integrity)",define:`128회 응용 3교시
135회 관리 4교시`,head:`릴레이션은 고유성(Unique)이 
만족되는 Primary Key 를 가져야 하며 
NULL 값을 허용하지 않는 특성`,remark:"PK NUll 불가, 유일성",image:["static/images/cellImage_1186147548_502.jpg"]},{index:482,topic:"> 참조 무결성 (Referential Integrity)",define:"128회 응용 3교시",head:`외래키 값은 피참조 릴레이션의 
기본키 값이거나 NULL 값인 특성`,remark:"피참조 릴레이션의 PK, NULL",image:[]},{index:483,topic:"DB 트랜잭션 (Transaction)",define:`129회 관리 1교시
131회 응용 3교시
134회 관리 2교시`,head:`작업 단위의 원자성은 보장하고, 
데이터의 일관성, 저장의 영속성 및 
수행의 고립성을 지원하는 방법`,remark:`특징(원자성, 일관성, 고립성, 영속성)
상태(활성, 부분완료, 실패, 완료, 철회)
직렬성`,image:["static/images/cellImage_1186147548_503.jpg"]},{index:484,topic:"> 트랜잭션 격리 수준(Transaction Isolation Level)",define:"134회 관리 2교시",head:`트랜잭션 실행 중 중간 연산 결과가 
다른 트랜잭션으로 접근 불가하도록
하는 고립성을 유지하기 위한 
데이터를 허용하는 수준`,remark:`고립성, 직렬성, Ansi 기준
격리수준(read uncommitted, 
read committed, repeatable read, 
serialization)
위반(dirty read, nonrepeatable read, 
phantom read / phantom conflict)`,image:[]},{index:485,topic:"> 팬텀 충돌(Phantom Conflict)",define:"135회 관리 1교시",head:`트랜잭션이 특정 조건으로 데이터 검색할 때, 다른 트랜잭션이 그 조건에
부합하는 데이터를 삽입 혹은 삭제하여 발생하는 데이터베이스의 충돌현상`,remark:null,image:["static/images/cellImage_1186147548_504.jpg","static/images/cellImage_1186147548_505.jpg","static/images/cellImage_1186147548_506.jpg"]},{index:486,topic:"데이터 품질관리",define:`129회 관리 3교시
131회 관리 4교시`,head:`사용자에게 유용한 가치 제공하도록 
데이터의 품질을 확보하기 위한 
품질 목표 설정, 품질 진단 및 개선 등 
일련의 활동과 이를 지원 도구`,remark:`총괄책임자, DQI, CTQ, DQM
생애주기(계획, 구축, 운영, 활용)
아키텍처(값, 데이터, 구조, 프로세스)
성숙도(도입, 정형, 통합, 정량, 최적)
정형데이터(완전, 유일, 유효, 일관)
비정형데이터(보안, 유용, 접근, 적시)
전략(기준, 프로파일링, BR, 진단, 개선)`,image:["static/images/cellImage_1186147548_507.jpg"]},{index:487,topic:"이상현상 (Anomaly)",define:"129회 관리 4교시",head:`테이블을 설계할 때 잘못 설계하여 
데이터를 삽입, 삭제, 수정할 때 
논리적으로 생기는 오류`,remark:`원인(중복, 함수종속)
유형(삽입, 갱신, 삭제)
해결(정규화, 종속성 제거)`,image:[]},{index:488,topic:"데이터옵스 (DataOps)",define:`130회 관리 4교시
131회 응용 3교시`,head:`기업 데이터에 대한 깊이 있는 
인사이트를 얻기 위해 DevOps 
접근법을 이용하는 관리 방식`,remark:`devops + data, 
자동화, 모니터링, 애널리틱스
아키텍처(파이프라인, 기술, 프로세스)
git, tableau, jenkins, , etl, dqm`,image:[]},{index:489,topic:"> 데브옵스 (DevOps)",define:"130회 관리 4교시",head:`지속적이고 빠른 배포, 운영 자동화를 
위해 시스템 개발과 운영을 병행 및 
협업하는 소프트웨어 개발방법론`,remark:"개발+운영, 협업, 자동화",image:[]},{index:490,topic:"분산 데이터베이스",define:"132회 관리 1교시",head:`여러 곳으로 분산되어 있는 
데이터베이스를 하나의 가상 
시스템으로 사용할 수 있도록 한 
데이터베이스`,remark:`지역성, 부하분산, 병렬처리, 투명성
투명성(위치, 분할, 지역, 복제, 병행, 장애)
상호배제(Time Ring, Time Ordering)
고려(성능, 일관성,가용성)`,image:[]},{index:491,topic:"샤딩 (Sharding)",define:"127회 관리 4교시",head:`물리적으로 다른 여러 DB에
분산하여 저장/사용하는 기법`,remark:`분산저장, Sharding key
이슈(resharding, 과부하, 조인어려움)
유형(modular, range, hash, vertical, 
horizontal)
활용(dbms, 이더리움, mongoDB)`,image:[]},{index:492,topic:"> 파티셔닝 (Partitioning)",define:"127회 관리 4교시",head:`큰 테이블이나 인덱스를 관리하기 
쉬운 단위로 분할하여 관리하는 방식`,remark:`테이블분할, 하나의 DB
유형(Range, List, Hash)`,image:[]},{index:493,topic:"CRUD 매트릭스 (Matrix)",define:"133회 관리 1교시",head:`시스템 개발 시 프로세스와 DB에 
저장되는 데이터 사이의 의존성을 
나타내기 위한 Matrix`,remark:`Create, Read, Update, Delete,
데이터모델링, entity, process`,image:[]},{index:494,topic:"데이터 모델링",define:"133회 관리 4교시",head:`요구사항 분석, 개념적/논리적/물리적 
모델링의 절차에 따라 현실세계를 
추상화하여 일정한 표기법에 의해 
표현하는 모델링`,remark:`요구사항, 개념, 논리, 물리
식별(자식 주식별), 비식별(자식 일반)
고려사항(품질, 표현, 성능, 무결성)
활용(CRUD)`,image:[]},{index:495,topic:"정적 SQL (Static SQL)",define:"134회 관리 1교시",head:`애플리케이션에 하드 코딩되어 
런타임 시 변경되지 않는 SQL`,remark:"컴파일, 고정, Cursor, Bind, 속도빠름",image:[]},{index:496,topic:"동적 SQL (Dynamic SQL)",define:"134회 관리 1교시",head:`컴파일 시점 때, Runtime 시점에 
사용자로부터 SQL문의 일부 또는 
전부를 입력받아 실행되는 SQL`,remark:"런타임, 동적, 유연, String",image:[]},{index:497,topic:"다차원 색인구조 (Multidimensional Index Structure)",define:"134회 관리 3교시",head:`공간 정보의 다차원 자료화를 위해 
기존의 1차원 값이 아닌 복수 필드를 
동시에 키로 사용하는 색인 구조`,remark:`다차원 키, CAD, GIS
PAM(점데이터, K-D, K-D-B, Quad)
SAM(공간데이터, R, R+, R*)`,image:[]},{index:498,topic:"확장성 해싱(Extendible Hashing)",define:"135회 관리 4교시",head:`동적 해싱의 한 형태로 디렉터리(부가적 저장 기법)기반, 버킷 크기를 입력되는 레코드의 수에 따라 변화시켜 테이블의 성능을 유지하는 방법

[충돌회피기법]
확장성 해싱에서 버킷(Bucket) 충돌이 발생했을 때 , 버킷 분할과 디렉터리 확장 기법을 통해 충돌을 해결하는 기법`,remark:null,image:["static/images/cellImage_1186147548_508.jpg","static/images/cellImage_1186147548_509.jpg"]},{index:499,topic:"제4정규형",define:"136회 관리 1교시",head:`한 관계에 둘 이상의 독립적 다중값 속성이 존재하여 발생하는 삽입 이상 
현상을 가지는 릴레이션을 분해하는 과정(다치 종속성 제거)`,remark:`다치 종속성 제거, 삽입이상 현상

* 다치종속성
한 릴레이션에서 속성 A가 속성 B에 영향을 주되, 속성 C와는 독립적으로 영향을 주는 관계
- (R : A,B,C)  A-B, B-C: 관계 존재, A-C : 관계 미 존재`,image:["static/images/cellImage_1186147548_510.jpg","static/images/cellImage_1186147548_511.jpg"]},{index:500,topic:"퍼블릭 블록체인 (Public Blockchain)",define:`126회 관리 2교시
135회 응용 3교시`,head:`누구나 블록을 생성할 수 있는 공개형 
블록체인`,remark:`누구나, 공개, 개방형, 무허가
사례(비트코인, 이더리움)
합의(PoW, PoS)`,image:[]},{index:501,topic:"프라이빗 블록체인 (Private Blockchain)",define:`126회 관리 2교시
135회 응용 3교시`,head:`허가된 참여자 외에는 공유되지 않고 
추적이 불가능한 폐쇄형 블록체인`,remark:`허가, 폐쇄, 기업
합의(PBFT, BFT) 
  - 블록체인과 같이 다수 참여자들로 구성된 P2P 네트워크에서 하나의 결과에 대하여 참여자 전체 합의기반의
타당성 검증하는 알고리즘.
사례(R3CEV)`,image:[]},{index:502,topic:"하이브리드 블록체인 (Hybrid Blockchain)",define:`126회 관리 2교시
135회 응용 3교시`,head:`퍼블릭 블록체인과 프라이빗 
블록체인을 서로 연결하여 장점을 
극대화한 혼합형 블록체인`,remark:`퍼블릭 + 프라이빗, 더블체인, 인터체인
합의(DPoS)
사례(코스모스, 아이콘, Coda)`,image:[]},{index:503,topic:"NFT (Non-Fungible Token)(=대체불가능 토큰)",define:`126회 응용 2교시
127회 관리 1교시
128회 관리 4교시`,head:`블록체인 기술 이용하여 하나의 
토큰을 다른 토큰으로 대체하는 것이 
불가능한 가상 토큰`,remark:`대체불가능
표준(ERC-721, ERC-1155)
블록체인(DApp, smart contract, 합의)
프로세스(저장 > 서명 > 발행 > 검증)
기술(NFT meta-data, IPFS, NFT Contract, 
NFT MINT)
특징(부분소유, 위변조불가)
거래(NFT 마켓플레이스)`,image:[]},{index:504,topic:"> NFT 마켓 플레이스",define:"128회 관리 4교시",head:`NFT를 저장, 표시 및 거래할 수 있는 
서비스`,remark:`보안취약점(피싱, 서비스거부, 정보유출, 
스니핑, 키유출, 랜섬웨어)
대응(hsm, 패치, 인증, 백업, cold월렛)`,image:[]},{index:505,topic:"웹3.0",define:"130회 관리 4교시",head:`개방형 블록체인 프로토콜 위에 개인 
사용자가 자신의 자산 및 개인정보를 
자체 보유하는 새로운 디지털 
세계의 비전 실현 공간`,remark:`소유, 의사결정
시멘틱 기반, 개인맞춤형, 지능화, 빅데이터,
NFT, 블록체인, DApp, 메타버스`,image:[]},{index:506,topic:"메타버스 (Metaverse)",define:`126회 관리 4교시
126회 응용 2교시
127회 관리 1교시
130회 관리 2교시`,head:`현실과 비현실이 공존하는 
가상세계의 광범위한 개념`,remark:`4가지 유형(증강현실, 가상세계, 
라이프로깅, 거울세계)
특징(연속성, 실재감, 동시성)
시스템위협(개인정보침해, 
데이터오용, 사이버 공격, 비정상거래)
사회적이슈(저작권, 민감정보, 법적지위)
활용(디지털트윈과 연계)
XR, MPEG-I, MIV, 메타버스 윤리원칙`,image:[]},{index:507,topic:"> 메타버스 윤리원칙",define:"130회 관리 2교시",head:`메타버스 신산업 및 선도전략에 
근거하여 관계부처가 합동으로 
마련한 메타버스 생태계 윤리 규범`,remark:`윤리규범, 3대가치, 8대원칙
3대가치(온전한자아, 안전한경험,  
지속가능 번영)
8원칙(진정성, 자율성, 호혜성, 
사생활존중, 공정성, 개인정보보호, 
포용성, 책임성)
인공지능 윤리, 인터넷 윤리`,image:[]},{index:508,topic:"> MIV (MPEG-Immersive Video)",define:"129회 응용 2교시",head:`기존의 2D 인코딩 한계인 360도 
6DoF를 지원하는 표준`,remark:`XR, 몰입감, 6DoF, 메타버스
MPEG-I`,image:[]},{index:509,topic:"> 디지털 트윈 (Digital Twin)",define:"127회 관리 1교시",head:`현실세계에 존재하는 사물로부터 
다양한 센싱 데이터를 수집하여 
동적 소프트웨어로 모델링하는 기술`,remark:`가상공간, CPS, 물리 -> 디지털 복제
센서, 액츄에이터, 시뮬레이션
활용(제조, 공장, 메타버스)`,image:[]},{index:510,topic:"스마트 팩토리 (Smart Factory)",define:"126회 응용 2교시",head:`설계, 개발, 제조, 품질, 유통 등 다양한 
분야의 생산과정에 정보통신기술을 
적용한 지능형 생산공장`,remark:`기술(ERP, SCM, IIoT, MES, 제어설비, CPS, 
디지털트윈, AI, POP)
보안위협(악의적공격, 도청, MITM, 도난, 
고장, 오작동)
대응(접근통제, 암호화, 훈련 및 교육)
ISA/IEC 62443`,image:[]},{index:511,topic:"> POP(Point Of Production)",define:"128회 관리 1교시",head:`제조 현장의 기계, 설비, 작업자, 작업 
등에서 발생하는 실시간 정보를 
수집 및 실시간 처리하고, 생산현장 
관리자에게 제공하여 생산 현장
관리를 하는 시스템`,remark:`기능(생산, 품질, 원가)
실시간 실적, 재고감축, 사이클 단축`,image:[]},{index:512,topic:"> ISA/IEC 62443",define:"132회 관리 1교시",head:`전자적으로 보안적인 산업용 자동화 
및 제어 시스템(IACS)을구현하기 위한 
일련의 표준, 보고서 및 부속 문서를 
포함하는 국제 표준`,remark:`산업제어/자동화시스템
General, Policy & Procedure, System, 
Component
등급(0~4)
기본요구사항 (식별 및 인증, 제어, 무결성,
기밀성, 제한성, 응답성, 자원가용성)
스마트팩토리`,image:[]},{index:513,topic:"> 설비 예지정비 (Predictive Maintenance)",define:"132회 관리 4교시",head:`설비의 자산 관리 측면에서 설비의 
고장을 미리 예측하여 조기에 
유지보수함으로써 운영 비용을 
절감하고 운영 효율성 극대화 기술`,remark:`미리 고장 예측 및 보수
인공지능, IoT, Cloud,빅데이터
LangChain, LLM`,image:[]},{index:514,topic:">> LangChain",define:"132회 관리 4교시",head:`언어 모델을 활용한 서비스 개발에서 
언어 모델과 여러 어플리케이션 기능 
간의 통합을 간소화하고, 
어플리케이션 개발을 지원하도록 
설계된 프레임워크`,remark:`API, SDK, 쉬운통합
메인모듈(소스, 임베딩, 벡터db, 언어모델)
하위모듈(에이전트, 메모리, 콜백, 연결)`,image:[]},{index:515,topic:">>> LLM",define:"132회 관리 4교시",head:`방대한 양의 데이터를 기반으로 
사전학습되어, 번역, 답변, 생성과
같은 언어관련 작업에 특화된 모델`,remark:"딥러닝, Pre-trained, 생성모델, 강화모델",image:[]},{index:516,topic:"> 제조 디지털 트윈",define:"132회 응용 4교시",head:`제조 자원을 컴퓨터상에 가상적으로 
표현한 가상 제조 자원`,remark:`제조 + 디지털 트윈
액터(이용자도메인, 서비스 도메인,
자원연동, 제조자원)
액터정보(속성, 기능)
속성(유형, 정보, 통신)`,image:[]},{index:517,topic:"FANET (Flying Ad-hoc NETwork)",define:"126회 응용 1교시",head:`무인항공기를 활용하여 애드혹 
네트워크를 구성하기 위한 네트워크`,remark:`구조(비상호연동, 상호연동)
라우팅(static, proactive, reactive, hybrid, 
position)
VANET, MANET`,image:["static/images/cellImage_1186147548_512.jpg","static/images/cellImage_1186147548_513.jpg"]},{index:518,topic:"UAM (Urban Air Mobility)",define:`128회 응용 2교시
130회 관리 1교시`,head:`별도의 활주로 없이 도시 권역을 수직 
이착륙(eVTOL)하는 개인용 비행체로 
이동하는 3 차원 미래형 도시 
항공교통 체계`,remark:`UAM, 수직이착륙(eVTOL), 
개인용비행체(PAV), 도시항공체계, 
멀티로터형, 리프트&크루즈형, 틸트형
K-UAM 로드맵 
RPAS, 위성기반 위성항법 보강(SBAS), 
지상기반 위성항법 보강(GBAS)`,image:[]},{index:519,topic:"> eVTOL (electric Vertical Take-Off and Landing)",define:"128회 응용 2교시",head:`공중에서 정지하거나 활주로 없이 
뜨고 내릴 수 있는 비행체`,remark:"멀티로터형, 리프트&크루즈형, 틸트형",image:[]},{index:520,topic:"> K-UAM (Korea-UAM)",define:"128회 응용 2교시",head:`도심 교통 문제를 해결하기 위한 
최적의 수단인 UAM의 추진사업`,remark:"UAM, 교통문제 개선, 드론택시",image:[]},{index:521,topic:"> 드론",define:"130회 관리 1교시",head:`조종자가 탑승하지 아니한 상태로 
항행할 수 있는 비행체`,remark:`위협(하이재킹, 재전송, 중간자, 교란)
대응(인증, 암호화, 안전한통신)`,image:[]},{index:522,topic:"> 안티 드론",define:"135회 응용 3교시",head:"비인가 무인항공기의 잠재적 위협에 대응하기 위한 시스템",remark:`관리 - 사전 위험 모니터링, 사후조치
기술 - 탐지 시스템, 식별 시스템, 무력화 시스템, 통합관제 시스템
보조적 조치 - 데이터 수집, 기능효과 측정, 기술교육, 사건 추적`,image:[]},{index:523,topic:"CAN (Controller Area Network)",define:"129회 응용 1교시",head:`차량 내에서 호스트 컴퓨터 없이 
마이크로 컨트롤러나 장치들이 
서로 통신하기 위해 설계된 통신규격`,remark:`ISO 11898, 자동차, ECU, 
마이크로컨트롤러
계층(응용, 데이터링크, 물리)
기술(Multi Master, Twist Paire Wire, 
차분통신, Plug & Play)
전선(High, Low), CAN-1, CAN-2`,image:[]},{index:524,topic:"ISO 26262",define:"134회 응용 4교시",head:`자동차에 탑재되는 SW의 오류로 
인한 사고 방지를 위해 ISO에서 
제정한 자동차 기능 안전 국제표준`,remark:`자동차 기능 표준
구성(용어, 기능, 구상, 시스템, 하드웨어,
소프트웨어, 생산,지원, ASIL, 가이드라인,
반도체, 모터사이클)
ISO 33020(A-SPICE), 백투백 테스트, 
모델기반테스트, ASIL`,image:[]},{index:525,topic:"> 자동차 안전 무결성 수준(ASIL, Automotive Safety Integrity Level)",define:"134회 응용 4교시",head:`IEC 61508의 안전성 보전 등급 개념을 
자동차 제품 특성에 맞게 개선한 
차량 안전성 보전 등급`,remark:`자동차 + SIL
Severity (S0 - S3), Exposure (E0 - E4), 
Controllability(C0 -C3)
등급(QM, ASIL A, ASIL B, ASIL C, ASIL D)
모터사이클(MSIL)`,image:[]},{index:526,topic:"컴퓨팅 컨티뉴엄 (Computing Continuum)",define:"126회 응용 1교시",head:`임베디드-엣지-클라우드 컴퓨팅 등 
다계층 컴퓨팅 요소를 하나의 
연속체로 바라보고, 최적의 위치에 
서비스에 필요한 리소스를 정확히 
배치하기 위한 기술`,remark:`엣지, IoT, 클라우드, 계층간 연계, 
구분(GigaMEC, CompactEdge, EdgeCPS)`,image:["static/images/cellImage_1186147548_514.jpg"]},{index:527,topic:"엣지컴퓨팅 (Edge Computing)",define:`126회 응용 1교시
128회 응용 4교시
132회 응용 4교시
135회 응용 3교시`,head:`디바이스와 가장 가까운 위치에서 
실시간으로 데이터를 수집, 처리하는 
분산 컴퓨팅`,remark:`실시간, 소규모
활용(모바일, 온디바이스, IoT)
장점(비용절감, 초저지연)
단점(대량화, 해킹)
보안취약점(키, 재전송, 중간자, 
프라이버시)
모바일 엣지 컴퓨팅, 클라우드 컨티뉴엄`,image:[]},{index:528,topic:"> 모바일 엣지 컴퓨팅 (MEC, Mobile Edge Computing)",define:"132회 응용 4교시",head:`데이터를 중앙에 모아 처리할 필요 
없이 데이터 소스 가까이에서 실시간 
분석과 저장을 지원하는 분석 및 
처리 기술`,remark:`지연 감소, 대역폭 절약, 보안 강화, 
비용 절감, 네트워크 부하 감소
Edge computing, 5G`,image:[]},{index:529,topic:"포그컴퓨팅 (Fog Computing)",define:"126회 응용 1교시",head:`엣지 컴퓨팅에서 처리된 데이터를 
수집 및 일부 처리하여 클라우드와 
통신하는 분산 게이트웨이 컴퓨팅`,remark:`데이터분석, 처리, 분산 G/W
대용량 저장`,image:[]},{index:530,topic:"DaaS (Desktop as a Service)",define:"127회 관리 2교시",head:`사용자 pc를 클라우드 기술로 구현, 
서비스 공급자가 아웃소싱 형태로 
제공하는 서비스`,remark:`가상화, 클라우드, 데스크탑, 
VDI, Zero PC
구성(Client, 가상머신, 스토리지, 
세션관리자, 브로커서버)
활용(클라우드보안인증제 포함)`,image:[]},{index:531,topic:"클라우드 컴퓨팅",define:"131회 관리 1교시",head:`인터넷을 통해 원격으로 컴퓨팅 자원 
및 서비스를 제공하는 컴퓨팅 기술`,remark:`서비스모델(iaas, paas, saas, daas, 
serverless)
배포모델(public, private, hybrid, multi, 
inter)
품질관리, CSP, MSP관리`,image:[]},{index:532,topic:"클라우드 서비스",define:`128회 관리 2교시
128회 응용 4교시
129회 관리 4교시
130회 관리 3교시
130회 관리 4교시`,head:"클라우드를 활용한 서비스",remark:`활용 태스크(계획수립, 검색, 상세검토, 
이용방식, 실적)
기본설계(현황 > 설계 > 구축 > 운영)
4가지활용 / 서비스 개방(퍼블릭, 프라이빗, 
커뮤니티,  하이브리드)
서비스 유형 / 자원(paas, saas, iaas)
보안 및 인증(csap, 유형별 기준 다름)
품질성능기준(가용성, 응답성, 확장성, 
신뢰성, 서비스지속성, 서비스 지원, 
고객대응 )
가용성(MTBF, MTTR, MTTF)
보안관리(기밀성, 무결성, 개인정보, 인증,
접근제어, 백업, 공급업체)
아웃소싱, CSP / MSP
Auto Scale Out / Up / In`,image:["static/images/cellImage_1186147548_515.jpg"]},{index:533,topic:"> 클라우드서비스 제공자 (CSP, Cloud Service Provider)",define:"129회 관리 4교시",head:`클라우드 인프라 및 서비스를 
제공하는 업체`,remark:"클라우드 제공, 리스크 관리, 아웃소싱",image:[]},{index:534,topic:"> 클라우드 서비스의 품질⋅성능",define:"128회 응용 4교시",head:`클라우드 서비스에 대한 품질 
성능에 대한 평가`,remark:`적용대상(IaaS, PaaS, SaaS)
품질성능기준(가용성, 응답성, 확장성, 
신뢰성, 서비스지속성, 서비스 지원, 
고객대응 )
가용성(MTBF, MTTR, MTTF)
고려사항(거버넌스, SRM, SLA, Compliance)`,image:[]},{index:535,topic:"> 오토 스케일링 (Auto Scaling)",define:"131회 관리 1교시",head:`CPU, 메모리, 디스크, 네트워크 
트래픽과 같은 시스템 자원들의 
메트릭 값을 모니터링하여 자동으로 
그 규모를 조절하는 기술`,remark:`클라우드, 메트릭, 임계치, 
서버 프로비저닝, 
Scale-out, Scale-in, scale-up, Load Balancer`,image:[]},{index:536,topic:"> MSP (Managed Service Provider)",define:"131회 응용 2교시",head:`클라우드 도입을 위한 컨설팅부터 
마이그레이션, 운영, 모니터링까지 
클라우드 환경을 관리하는 사업자`,remark:"서비스(구축, 운영, 기술지원)",image:[]},{index:537,topic:"> 클라우드 관리 플랫폼",define:"132회 관리 3교시",head:`기업이 클라우드 컴퓨팅 리소스를 
모니터링하고 제어하는 데 사용할 
수 있는 통합 소프트웨어 도구 모음`,remark:`클라우드 서비스 가속화, CSP, MSP
기능(미터링/빌링, 프로비저닝, 자동화)
종류(기능, 멀티클라우드, HCI)
선정(비용, 인터페이스구조, 기반플랫폼)`,image:[]},{index:538,topic:"> CSAP (Cloud Security Assurance Program)",define:`128회 관리 2교시
129회 응용 1교시`,head:`정보보호 기준의 준수여부 확인을 
인증기관이 평가/인증하여 안심하고 
클라우드 서비스를 이용할 수 있도록 
지원 제도`,remark:`인증절차(준비, 평가, 인증)
인증유형(최초, 사후, 갱신)
평기기준(정책, 프로세스 및 조직, 기술)
등급(표준, 간편)
대상(IaaS, PaaS, SaaS, DaaS, SeCaaS)
항목(관리적, 기술적, 물리적, 클라우드)`,image:[]},{index:539,topic:"> 클라우드 SLA",define:"130회 관리 3교시",head:`이용자에게 제공하는 클라우드 
서비스의 수준을 정량화 등을 통해 
명확히 제시하고 서비스의 품질을 
보장하기 위한 약정서`,remark:`클라우드 + SLA
내용(가용성, 장애, 확장, 백업, 복구)`,image:[]},{index:540,topic:">> 금융 클라우드 SLA (Service Level Agreement)",define:"130회 관리 3교시",head:`클라우드 활용 범위를 개인 신용정보
까지 확대하되, 금융권 보안수준 및 
관리감독체계를 강화하기 위한 규정`,remark:`금융권 + 클라우드 SLA
내용(범위확대, 내부통제, 감독강화)`,image:[]},{index:541,topic:"> 공공부문 SaaS 이용 가이드라인",define:"134회 관리 2교시",head:`안전하고 효율적으로 SaaS를 
이용하기 위한 제도와 절차 및 방법 
등을 통합적으로 제공 가이드라인`,remark:`SaaS 이용, 안전, 효율적
공통원칙 + SaaS환경추가원칙
위험기준(인프라, 가상환경, 데이터, 권한,
장애대응)
보안대책(가이드라인, 보안성검토), 
SLA(가용성, 신뢰성, 지속성)
CSAP, SaaS 인증`,image:["static/images/cellImage_1186147548_516.jpg"]},{index:542,topic:">> 안정성 검토항목",define:"134회 응용 1교시",head:`클라우드 컴퓨팅서비스를 안전하게 
이용할 수 있도록 이용 기준 및 
안전성 확보 등에 필요한 세부사항`,remark:`안전성 중요
검토항목(체계, 비상연락, 실시가 
모니터링, 장애대응 및 위험관리, 
계정 및 보안관리)`,image:[]},{index:543,topic:"클라우드 서비스 활용사업 감리 점검",define:`132회 응용 4교시
134회 관리 4교시`,head:`클라우드 서비스 활용사업을 
품질 확보 등을 위해 감리 점검항목`,remark:`사업유형(1 ~ 7)
점검항목(기회식별, 요건정의, 서비스전환)
전환프로세스(계획 및 준비, 전환, 안정화)
전환유형(공공, 민간)`,image:[]},{index:544,topic:"AIaaS (AI as a Service)",define:"128회 응용 3교시",head:`AI 사용을 위한 엔진, 어플리케이션, 
프레임워크 제공 클라우드 서비스`,remark:`AI + 클라우드
구조(API, Auto ML, AI Platform, Infra)
AWS, , Lex`,image:[]},{index:545,topic:"NaaS (Network as a Service)",define:"131회 응용 1교시",head:`클라우드 서비스 공급자(CSP)가 
제공하는 구독 기반 또는 유연한 
소비 모델에 사용되는 네트워크 
인프라 제공 클라우드 서비스`,remark:`NW 인프라 + 클라우드
VPN, MPLS, CSP, CAPEX, OPEX, SD-WAN, ADC, 
아웃소싱, 유연성, 확장성`,image:[]},{index:546,topic:"멀티클라우드",define:`135회 응용 1교시
135회 관리 3교시`,head:`2개 이상의 클라우드 공급업체의 서비스 및 컴퓨팅 및 스토리지 서비
스를 사용하여 클라우드 간 연계와 상호 운용성, 탄력성을 보장하는
클라우드 구축모델`,remark:`1) 고가용성: 2개 이상의 클라우드에 워크로드를 분산
2) 비종속성: 단일 CSP에 대한 의존성 해소
3) 유연성: 워크로드 특성에 따른 유형 및 기술특성 서비스 선택`,image:["static/images/cellImage_1186147548_517.jpg","static/images/cellImage_1186147548_518.jpg"]},{index:547,topic:"멀티클라우드 : 개념, 필요성, 시스템 요구사항 및 기술요소",define:`135회 응용 1교시
135회 관리 3교시`,head:"여러 클라우드 서비스 제공자들의 인프라와 서비스를 동시에 사용하여 IT 인프라, 애플리케이션 및 서비스를 구축하고 관리하는 전략",remark:null,image:["static/images/cellImage_1186147548_519.jpg","static/images/cellImage_1186147548_520.jpg","static/images/cellImage_1186147548_521.jpg"]},{index:548,topic:"CBDC(Central Bank Digital Currency)",define:"135회 응용 4교시",head:"중앙은행내 지준 예치금이나 결제성 예금과는 별도로 중앙 은행이 전자적 형태로 발행하는 새로운 형태의 화폐",remark:`구조 (아키텍처가 제일 하단, 3각형 형태)
1.아키텍처 2.인프라 3. Access 4.국가간연계
CBDC의 시스템 
1. 직접형 - 발행을 중앙은행이 하는 것
2. 간접형 - 발행, 환수를 민간 참가 기관이 진행
3. 혼합형 - 발행 환수 중앙은행, 유통 민간 기관
4. 중계형 - 발행 중앙은행, 유통 민간 기관, 원장관리 민간기관
원장 관리 방식
1. 단일 원장 - 개인 기업에게 허용된 CBDC 계좌 및 관련 거래 정보를 신뢰할 수 있는 중앙 관리자가 보관하는 방식 
2. 분산원장 - 각자 원장을 갖고 신규 거래 발생시 합의 절차를 거쳐 각자 관리하는 원장에 해당 거래를 기록`,image:["static/images/cellImage_1186147548_522.jpg","static/images/cellImage_1186147548_523.jpg"]},{index:549,topic:"스마트시티 거버넌스",define:"135회 응용 3교시",head:"도시 내 생성되는 데이터를 효율적으로 수집, 관리, 공유, 보호하며, 데이터의 표준화, 보안, 프라이버시, 활용성을 보장하는 관리 체계",remark:`스마트시티의 거버넌스 각 항목별 요구수준
- 기술적 수준: 스마트시티에서 데이터를 수집, 저장, 처리하는 기술적 인프라와 프로세스를 구축
- 정보적 수준: 스마트 시티 데이터를 이해하고 활용하는 방법을 정의 
- 조직적 수준: 스마트시티 데이터 거버넌스를 지원하는 정책, 규정, 법적 프레임 워크를 설정`,image:[]},{index:550,topic:"웹 서비스 / 웹 서버",define:`128회 관리 3교시
128회 관리 4교시`,head:`네트워크 상에서 서로 다른 종류의 
컴퓨터들 간에 상호작용을 하기 위한 
소프트웨어 시스템`,remark:`성능저하(유무선지연, 보안점검, 연산지연)
웹최적화(로딩, 실행, 공통영역)
DDoS 사이버대피소`,image:[]},{index:551,topic:"DID (Digital Information Display)",define:"128회 응용 1교시",head:`24시간 365일 운영이 가능하도록 
제작된 산업용 디스플레이 패널을 
적용하여, 정보, 광고, 컨텐츠, 홍보, 
상황관제 등을 불특정 다수에게 
디지털 디스플레이 장치를 통해 
재생 및 표출하는 기술`,remark:`디지털 사이니지, 초고속 스위칭,
투명 디스플레이. 저소비 전력, 고시인성, 
모드변환, 광 셔터, 
전반사/전투과 디스플레이, 광시야각`,image:[]},{index:552,topic:"슈퍼 앱 (Super APP)",define:`132회 응용 1교시
133회 관리 3교시`,head:`하나의 앱 안에서 별도의 다른 앱을 
설치하지 않아도 수많은 서비스를 
이용할 수 있는 앱`,remark:`하나의 앱, lock-in, 다양한 서비스, 결제, 
인증, 쇼핑, OTT, 예약, 검색, 금융, 구독
기술(ai, big data, cloud, db, node.js, react)
미니앱 통합`,image:[]},{index:553,topic:"> 멀티앱",define:"133회 관리 3교시",head:`서비스별로 APP을 분리하여 별도의 
앱으로 제공하는 APP 제공방식`,remark:"특정기능, 한정적",image:[]},{index:554,topic:"> 미니앱",define:"133회 관리 3교시",head:`별도의 앱 설치 없이 메인 앱 내에서 
실행되는 작은 규모의 애플리케이션`,remark:"경량, 슈퍼앱 내부실행, 다양한 기능",image:[]},{index:555,topic:"공공데이터 품질인증",define:"135회 응용 1교시",head:"기관 전체의 공공데이터 품질 관리체계 및 보유 DB 전반의품질이 인증기준에 적합한지 심사해 우수기관에 인증을 부여하는제도",remark:`- 근거 : 「공공데이터의 제공 및 이용 활성화에 관한 법률」제22조제2항
- 대상 : 공공데이터 값, 공공데이터 관리, 공공데이터 개방 및 활용
- 인증 절차
인증신청 및 기초자료 제출 -> 증빙자료 제출->심사실시->결과발표`,image:["static/images/cellImage_1186147548_525.jpg","static/images/cellImage_1186147548_526.jpg"]},{index:556,topic:"공공부문 초거대 AI 도입/활용 가이드라인",define:"137회 관리 2교시",head:`가이드라인 구성
1. 초거대 AI 개요
 - 1.1. 초거대 AI의 개념과 구성 요소
2. 공공부문 초거대 AI 추진 방향과 활용 사례 
3. 초거대 AI 도입 절차 
4. 공공부문 AI 성과 관리`,remark:null,image:["static/images/cellImage_1186147548_527.jpg","static/images/cellImage_1186147548_528.jpg","static/images/cellImage_1186147548_529.jpg"]},{index:557,topic:"양자 컴퓨터(Quantum Computer)",define:`128회 관리 1교시
128회 관리 4교시
126회 응용 1교시
129회 응용 3교시`,head:`양자 얽힘, 중첩 등의 양자 성질을 
기반으로 연산을 하는 컴퓨터`,remark:`특징(양자얽힘, 중첩, Qubit, 양자우월성, 
양자 결잃음, 초극저온)
구성(양자알고리즘, 컴파일러, MCU, QEC, 
제어관측기, 큐비트)
구현(초전도, 이온, 어닐링)
CNot게이트, 퀀텀게이트
양자암호통신`,image:[]},{index:558,topic:"> 양자비트 (=Qubit, 큐비트)",define:`128회 관리 1교시
129회 응용 3교시`,head:`양자 정보 시스템에서 사용하는 
수학적으로 정의된 정보의 기본단위`,remark:`퀀텀비트, 파동함수
설계(양자어닐링, 레이저nw, 초전도, 스핀)
특징(중첩, 측정 시 상태결정)
활용(양자컴퓨터)`,image:["static/images/cellImage_1186147548_530.jpg","static/images/cellImage_1186147548_531.jpg"]},{index:559,topic:"> 양자 우월성 (Quantum Supremacy)",define:"129회 응용 3교시",head:`기존 컴퓨터의 연산 능력을 
혁신적으로 뛰어 넘은 특징`,remark:`연산 능력 향상, 특정분야
성능(양자컴퓨터 > 슈퍼컴퓨터)`,image:[]},{index:560,topic:"> 양자 결잃음 (Quantum Decoherence)(= 양자 결 어긋남)",define:"129회 응용 3교시",head:`외부와의 상호작용으로 결맞음을 
소실한 상태`,remark:`어긋남, 중첩 불가
양자오류, 결어긋남 지배 오류`,image:["static/images/cellImage_1186147548_532.jpg"]},{index:561,topic:"> 양자암호통신",define:`126회 응용 1교시
128회 관리 4교시`,head:`에너지양 최소 단위인 양자기술로 
생성한 암호키를 이용하여 송수신에 
데이터를 안전하게 통신하는 기술`,remark:`QKD, 양자 특성, QRNG, 중개기
양자내성암호
키분배(BB84, COW04)
취약점(광자분리, MITM, DoS, 복제공격, 
Time-shift, After-gate)
대응(개선된 프로토콜 사용, 
SW기반암호, 일반무선에도 양자암호화)`,image:[]},{index:562,topic:">> 양자키분배 (QKD, Quantum Key Distribution)",define:`126회 응용 1교시
128회 관리 4교시
135회 관리 3교시`,head:`양자물리학의 법칙에 기반하여 
송신자와 수신자 사이에 안전하게 
키를 분배하기 위해 사용되는 
양자암호통신 실시간 키분배 기술`,remark:`양자암호통신
HW(난수생성기, 변조기, 전자제어)
SW(프로토콜, 구현방식)
구현(one-way, two-way)
프로토콜(BB84, B92, E91, CoW04, SARG04)`,image:[]},{index:563,topic:"양자내성암호(PQC : Post Quantum Cryptography): QKD와 PQC 비교",define:"135회 관리 3교시",head:`[PQC  정의] 기존의 공개키, 대칭키의 취약점을 보완하여 소인수 분해나 이산대수 문제에 기반을 두고 있지 않은 새로운 수학적 어려움에 기반한 암호 기법
[PQC 유형]
다코격아해

- 양자키분배(QKD) : 양자 역학 원리를 이용하여 도청이 불가능한 키 분배 수행(하드웨어적 관점)
- 양자내성암호(PQC) : 양자 컴퓨터에도 안전한 수학적 난제 기반 암호화 (소프트웨어적 관점)`,remark:null,image:["static/images/cellImage_1186147548_533.jpg","static/images/cellImage_1186147548_534.jpg","static/images/cellImage_1186147548_535.jpg"]},{index:5,topic:"126회 응용 2교시126회 응용 4교시133회 관리 4교시",define:`전용 주파수 통해 특정공간 및 기업이 
도입 후 5G 통신을 이용하여 서비스를 
구현하는 네트워크`,head:`제한된 범위 내 5G
분야(스마트공장, 교육, 의료, 관광)
기술(SDN, NFV, MEC, XR, N/W Slicing)
주파수(4.7GHz, 28GHz)
구축방안(MPLS-TP, IP-MPLS)
안전성(인증, 이중화, 예비전원, 자가복구)
간섭회피(재배치, 모니터링, 주파수조정)`,remark:"참고) 5G 특화망 가이드라인",image:["static/images/cellImage_1186147548_536.jpg"]},{index:565,topic:"> 네트워크 슬라이싱(network slicing)",define:"126회 응용 2교시",head:`다양한 종류의 서비스를 하나의 네트워크에서 
논리적으로 구분 지어 각기 다른 QoS 특성을
만족시킬 수 있는 기술`,remark:`서비스마다 차등 QoS, DiffSerV
기술(SDN, NFV, QoS)`,image:[]},{index:566,topic:"> MPLS-TP",define:"126회 응용 4교시",head:`라우터 내의 Control Plane을 제거해서 
NMS만 토폴로지를 수집, 처리 방식`,remark:`NMS통한 Control Plane 집중화
Core Network
백홀망(NMS, LSR, LSP, OAM, G-Ach, MIP)`,image:["static/images/cellImage_1186147548_537.jpg"]},{index:567,topic:"> IP-MPLS",define:"126회 응용 4교시",head:`라우터 내에 Control Plane이 존재하여 
모든 라우터가 토폴로지를 수집, 
처리하는 방식`,remark:`라우터 내 Control Plane 존재
Access Network
백홀망(LER, LSR, FEC, LSP, LIB, LDP)`,image:[]},{index:568,topic:"신호 다중화 기술",define:"126회 응용 3교시",head:`신호의 효율성을 극대화하기 위해서 
신호 및 주파수 등을 공유, 통합하여 
전송하는 방식`,remark:`통합, MUX, Muliplexing
기법(SDM, FDM, TDM, CDM, OFDM, WDM)
대역폭확장(DSSS, FHSS, THSS, Chirp)
확산이득(Spectrum Gain)`,image:[]},{index:569,topic:"> FHSS (Frequency Hopping Spread Spectrum)",define:"126회 응용 3교시",head:`알려진 의사 무작위 추출 시퀀스를 
이용하여 주파수 채널에서 빠르게 
carrier를 스위칭 함으로써 라디오 
시그널들을 송신하는 방식`,remark:`일정한시간, 주파수 이동, random hopping
sequence`,image:[]},{index:570,topic:"> DSSS (Direct Sequence Spread Spectrum)",define:"126회 응용 3교시",head:`원래의 신호에 주파수가 높은 
확산코드를 곱하여 원래 신호의 
대역폭을 확산시키는 변조방식`,remark:"확산코드, 직접확산, 고정할당",image:[]},{index:571,topic:"> SDN (Software Defined Network0",define:`127회 관리 3교시
131회 응용 2교시`,head:`SW, HW 가 통합된 스위치,라우터의 
벤더 종속을 탈피하고, 표준 API 및 
프로토콜을 이용하는 네트워크`,remark:`구성(control plane, data plane, openflow)
control plane(north i/f, south i/f)
머신러닝, 인공지능 적용
활용(5G, 이음5G)`,image:[]},{index:572,topic:">> Open Flow",define:"127회 관리 3교시",head:`이기종의 스위치와라우터의 플로우 
테이블을 개방형 프로토콜에 따라서 
패킷전달과 제어기능을 SW적으로 
분리 구현한 인터페이스 표준 기술`,remark:`Controller, protocol, switch
Flow table, pipelining, group table, secure 
channel
활용(SDN)`,image:[]},{index:5,topic:"128회 응용 4교시129회 관리 1교시",define:`4G대비 10배이상 향상된 초고속, 
초연결, 초저지연 기술적 특징을 
가진 5세대 이동통신`,head:`초연결, 초고속, 초저지연
기술(NW 슬라이싱, NOMA)
활용(촉각컴퓨터)
채널코딩(LDPC, Polar)`,remark:null,image:[]},{index:574,topic:"> 비직교 다중접속(NOMA, Non-Orthogonal Multiple Access)",define:"129회 관리 1교시",head:`5G의 주요 후보 기술 중의 하나로 
셀의 주파수 용량 향상을 위해 동일한 
시간, 주파수, 공간 자원 상에 다수의 
사용자들을 위한 신호를 동시에 
전송하여 주파수 효율 향상 기술`,remark:`비직교
주파수, 시간, 공간영역 중첩, 
간섭제거 기술
OFDMA 개선
5G`,image:[]},{index:6,topic:"128회 관리 4교시128회 응용 4교시130회 관리 1교시",define:`1Tbps의 전송속도와 1Gbps의 체감 
전송속도를 갖는 무선간 0.1ms이하 
지연의 6세대 이동통신`,head:`초성능, 초대역, 초정밀, 초공간, 초지능, 초신뢰
AI, Tbps, THz 활용(SATIN, 저궤도 위성, SBAS)`,remark:null,image:["static/images/cellImage_1186147548_538.jpg","static/images/cellImage_1186147548_539.jpg"]},{index:576,topic:"> 위성-상공-지상 통합형 무선 네트워크(SATIN, Satellite-Aerial-Terrestrial Integrated Network)",define:"128회 관리 4교시",head:`다양한 서비스로 복잡한 스펙트럼 
내에서 IoT의 폭발적인 수요를 
수용하기 위해위성, 항공 및 지상파 
간에 스펙트럼 공유가 활성화된 인지 
라디오 기반 네트워크`,remark:`특징(통합, 저지연, UAV, 저궤도 위성, 협력
빔포밍, 대규모 IoT 활용)
재난대비, 낙후지역 서비스 활용`,image:[]},{index:577,topic:"촉각 인터넷(Tactile Internet)",define:"134회 응용 1교시",head:`사람의 촉각(촉감)이 느낄 만큼 
정보를 매우 빠른 속도로 전송하는 
인터넷 서비스`,remark:`초저지연, 5G/6G
활용(저궤도, NW슬라이싱, AI, 에너지효율,
MEC, 촉각센서)`,image:[]},{index:578,topic:"네트워크 주소",define:"128회 응용 2교시",head:`네트워크 통신을 위해 각각 계층별로 
구성하고 계층간 통신이 가능하도록 
계층별 고유한 주소 식별 체계`,remark:`계층간 통신
종류(IP, MAC, Port, 전자메일)`,image:[]},{index:579,topic:"> IP주소",define:"128회 응용 2교시",head:`TCP/IP 인터넷 계층에서 장치들이 
인터넷 통신을 하기 위해 사용하는 
논리적인 고유 주소`,remark:`인터넷 통신, IPv4 32bit, IPv6 128bit
IPv4 구성(NW ID, Host ID)
OSI Network Layer`,image:[]},{index:580,topic:"> MAC (Media Access Control)주소",define:"128회 응용 2교시",head:`TCP/IP 네트워크 인터페이스 계층에서 
장치들이 같은 네트워크에 있는 
장치와 통신을 위해 네트워크 장치에 
할당되는 물리적 주소`,remark:`OSI DataLink Layer 
IP 주소와 변환(ARP, RARP)
48bit (24bit 제조사, 24bit 일련번호)`,image:[]},{index:581,topic:"> Port 주소",define:"128회 응용 2교시",head:`TCP/IP 트랜스포트 계층에서 호스트 
내에서 프로세스를 구분하기 위한 
16bit 논리적 주소`,remark:`OSI Transport Layer
16bits(0-65535)
종류(well known, registered, dynamic)`,image:[]},{index:582,topic:"> 전자메일 주소",define:"128회 응용 2교시",head:`컴퓨터 통신망을 통해 전자편지를 
주고 받을 수 있도록 하는 시스템에서 
사용자와 시스템을 특정하는 주소`,remark:`OSI Application Layer
구조(ID, 구분자(@), 도메인주소)`,image:[]},{index:583,topic:"디지털 계위 (Digital Hierarchy)",define:"134회 응용 3교시",head:`디지털 통신 시스템에서 데이터 전송 
속도와 용량을 계층적으로 구분한 
체계`,remark:`여러계층 구분
PDH, SDH, SONET`,image:[]},{index:584,topic:"> PDH (Plesiochronous Digital Hierarchy)",define:"134회 응용 3교시",head:`각각의 디지털 다중화장치들이 자체 
발진기 클럭을 사용하여, DS-n 급 
신호들을 만들어가는 준동기식 
다중화 전송 기반 체계`,remark:`비동기, 다중화, E1/E3
동기비트(Stuffing bit)`,image:[]},{index:585,topic:"> SDH (Synchronous Digital Hierarchy)",define:"134회 응용 3교시",head:`동기식 전송 시스템으로, 모든 
네트워크 요소가 동일한 클럭으로 
동기화되어 데이터를 전송`,remark:`동기식, 동일클럭, STM-1, ADM
Path, Line, Section, Physical, ITU-T`,image:[]},{index:586,topic:"> SONET (Synchronous Optical NETwork)",define:"134회 응용 3교시",head:`동기식 전송 시스템으로, 모든 
네트워크 요소가 동일한 클럭으로 
동기화되어 데이터를 전송`,remark:`동기식, 북미,STS-1 , OC-1 
PTE, STE, LTE`,image:[]},{index:587,topic:"네트워크 프로토콜",define:"134회 응용 3교시",head:`네트워크 프로토콜은 네트워크 
상에서 데이터 전송의 규칙과 절차를 
정의하여 효율적이고 신뢰성 있는
통신을 보장하는 규약`,remark:`데이터 전송/규칙
3요소(구문, 의미, 시간)
기능(단편화, 캡슐화, 다중화, 주소설정, 
순서제어, 연결제어, 흐름제어, 오류제어)
사례(Tcp/Ip, UDP, HTTP)`,image:[]},{index:588,topic:"OSI 7 계층(Layer)",define:`128회 응용 3교시
134회 응용 2교시`,head:`네트워크에서 통신이 일어나는 
과정을 7단계로 나눈 것`,remark:`계층간 통신, ISO 7498
Layer(Application, presentation, session, 
transport, network, data link, physical)
데이터(bit, frame, packet, segment, 
message/data)
장비(hub, switch, router, gateway)
프로토콜(RS-232, HDLC, IP, TCP, TLS, JPEG,
HTTP)`,image:[]},{index:589,topic:"> 오류제어",define:"128회 응용 3교시",head:`데이터링크, 네트워크 계층에서 
신뢰성 있는 데이터 전달을 위해 
데이터의 미수신 혹은 오류 발생 시, 
검출 후 재전송하거나 수정하는 기법`,remark:`오류 확인, 정정
FEC(Turbo, Convolution), BEC(Go-back-N, 
Selective)`,image:["static/images/cellImage_1186147548_540.jpg"]},{index:590,topic:">  흐름제어",define:"128회 응용 3교시",head:`송신측과 수신측의 데이터 처리 
수준차이로 인해 패킷 손실 및 과다 
수신 방지를 위한 전송속도 조절 기법`,remark:`속도 조절
Stop-and-Wait, Sliding Window
Window Size`,image:[]},{index:591,topic:">> 슬라이딩 원도우(Sliding Window)",define:"137회 관리 3교시",head:`송신자와 수신자가 윈도우(Window)라는 범위를 유지하면서, 여러 프레
임을 연속적 파이프라인 방식으로 전송/수신할 수 있게 하는 기법`,remark:null,image:["static/images/cellImage_1186147548_541.jpg","static/images/cellImage_1186147548_542.jpg"]},{index:592,topic:">  전달방식",define:"128회 응용 3교시",head:`송신측과 수신측의 전송 방향을 
정의하는 기법`,remark:`데이터 전송
Full Duplex, Half Duplex, Simplex`,image:[]},{index:593,topic:"> HDLC (High-level Data Link Control)",define:"134회 응용 4교시",head:`데이터 전송의 안정성과 효율성을 
보장하기 위해 개발, ISO 에서 제정한 
표준`,remark:`데이터링크 프로토콜
기능(에러정정, 흐름제어, 동기화, 다중화)
프레임(Flag, Address, Control, Data, FCS)
동작(NRM, ARM, ABM)
SDLC`,image:["static/images/cellImage_1186147548_543.jpg"]},{index:594,topic:"TCP (Transmission Control Protocol)",define:`128회 응용 3교시
129회 응용 4교시
130회 관리 3교시
132회 응용 1교시
133회 관리 1교시`,head:`신뢰성 있는  송수신간 세그먼트를 
전달하기 위한 연결지향 프로토콜`,remark:`연결지향, 신뢰성, 가상회선, 전이중
기능(혼잡제어, 흐름제어, 오류제어, 연결
제어, 순서제어)
연결(3-way handshake, 4-way handshake)
구조(Tcp Header, Tcp Flag)
활용(MQTT, SCTP, RTCP, TLS)`,image:[]},{index:595,topic:"> 헤더 (Header)",define:"128회 응용 3교시",head:`TCP 로 데이터를 송수신시 전송제어 
위해 발신지,목적지주소와 포트, 
윈도우사이즈, Flag 등의 정보를 
가지고 있는 헤더`,remark:`Source, Destination, Sequence Number, 
Control Flags, Options 
기본 20 ~ 최대 60 바이트`,image:[]},{index:596,topic:"> 제어 플래그(Control Flag)",define:"128회 응용 3교시",head:`긴급성, 승인번호, 상대방의 연결, 
종료를 위해 현재 세그먼트의 속성을 
나타내는 비트 플래그`,remark:"NS, CWR, ECE, URG, ACK, PSH, RST, SYN, FIN",image:[]},{index:597,topic:"> 혼잡제어",define:"130회 관리 3교시",head:`네트워크로 유입되는 사용자 
트래픽의 양이 네트워크의 용량을 
초과하지 않도록 유지하는 메커니즘`,remark:`트래픽용량 유지
윈도우(AWND, RWND, CWND)
감지(SSthresh, 3-Ack, time-out, RTT)
매커니즘(slow start, congestion avoidance, 
fast retransmit, fast recovery)
사례(tahoe, reno, new-reno, vegas)`,image:["static/images/cellImage_1186147548_544.jpg"]},{index:598,topic:"> 4-way handshake",define:`132회 응용 1교시
133회 관리 1교시`,head:`TCP/IP 네트워크 환경에서 서버와 
클라이언트의 연결을 해제하는데 
필요한 프로세스`,remark:`세션종료, FIN, ACK, Fin-wait, Close-wait, 
Lask-Ack, Time-wait`,image:[]},{index:599,topic:"> 3-way handshake",define:"133회 관리 1교시",head:`tcp/ip 네트워크 환경에서 서버와 
클라이언트의 연결 프로세스`,remark:`세션연결, Ack, Syn, Syn, Syn+Ack, Ack, Listen,
Syn-Sent, Syn-Received, Established
Half open/close, syn flooding 문제`,image:[]},{index:600,topic:"UDP (User Datagram Protocol)",define:"129회 응용 4교시",head:`연결과정없이 빠르게 데이터를 
전송하는 프로토콜`,remark:`비연결, RFC768, 비신뢰, 빠른 처리
데이터그램
헤더(송신포트, 수신포트, 길이, 체크섬)
활용(CoAP, SCTP, DTLS)`,image:[]},{index:601,topic:"SCTP (Streaming Control Transmission Protocol)",define:`129회 응용 4교시
132회 관리 3교시`,head:`TCP의 신뢰성과 UDP의 메시지지향을 
융합한 전송 프로토콜`,remark:`TCP+UDP, RFC 2960
특징(멀티호밍, 멀티스트리밍)
보안(Tcp Half closed 문제 개선)
연결(4-way, 3-way, SACK)
패킷(Type, Flag, Length, TSN, SSN)
동작(세션초기화, 데이터전송, 세션종료)
확장(PR-SCTP, Mobile SCTP)`,image:[]},{index:602,topic:"부호화",define:`129회 응용 1교시
132회 응용 3교시`,head:`일련의 규칙이나 방법을 사용하여 
입력 데이터를 다른 형태로 변환`,remark:`부호화, Encoding
종류(소스, 채널, 암호화, 라인)`,image:[]},{index:603,topic:"> 소스코딩 (Source Coding)",define:"129회 응용 1교시",head:`전송효율을 높이고 압축하는 부호화 
기법`,remark:`효율증가, 압축
기법(MPEG, JPEG, PCM, DM, ASCII, MOS, 
RLC, VLC)`,image:[]},{index:604,topic:"> 채널코딩 (Channel Coding)",define:"129회 응용 1교시",head:`오류를 검출, 정정하기 위해 
잉여비트를 추가하는 기법`,remark:`오류정정, 잉여비트
(CRC, CheckSum, FEC, 선형, 순회, 
Convolutional, Turbo, Polar, LDPC)`,image:[]},{index:605,topic:"> 맨체스터 코딩 (Manchester Coding)",define:"132회 응용 3교시",head:`수신측 동기화의 용이성을 강조하기 
위해 비트 중간에 극성을 반전하는 
부호화 방식`,remark:`중간극성반전, 수신동기화
클럭, 상향전이, 하향전이, 동기화, 
대역폭 2배, IEEE 802.3
차등 맨체스터 코딩방식`,image:[]},{index:606,topic:"네트워크 스위치 (Network Switch)",define:"129회 응용 3교시",head:`소규모 통신을 위해 네트워크 
단위들을 연결하는 장비`,remark:`기술(Learning, Flooding, Forwarding, 
Filtering, Aging)
종류(L2, L3, L4, L7)
기능(VLAN, Link 연결, STP, Port Mirroring)`,image:["static/images/cellImage_1186147548_545.jpg","static/images/cellImage_1186147548_546.jpg"]},{index:607,topic:"> L4스위치",define:`129회 응용 3교시
135회 응용 4교시`,head:`전송계층에서 TCP, UDP 등을 이용한 
스위치`,remark:`전송계층, TCP, UDP, 부하분산, 포트기반 
필터링, 미러링`,image:["static/images/cellImage_1186147548_547.jpg"]},{index:608,topic:"> L7스위치",define:"129회 응용 3교시",head:"응용계층에서 활용하는 스위치",remark:`응용계층, Http, FTP, 트래픽차단, WAF,
컨텐츠기반`,image:[]},{index:609,topic:"이더넷(Ethernet) 표준",define:"129회 응용 3교시",head:`48비트 MAC 주소를 기반으로 NW의 
기기들의 데이터 교환 표준`,remark:`Cable(UTP, FTP, STP, SFTP)
속도(Mbps, Gbps)
방식(1000-Base-T, 100Base-T)
IEEE 802.3, CSMA/CD
IEEE 802.3 frame(preamble, 구분자, 송신,
수신, 데이터)`,image:[]},{index:610,topic:"Ad-hoc 라우팅 프로토콜",define:"129회 응용 4교시",head:`동적 토폴로지로 구성된 Ad-hoc 
NW에서의 라우팅 프로토콜`,remark:`Ad-hoc NW
유형(Proactive(DSDV), Reactive(AODV), 
Hybrid(ZIP))
활용(FANET)`,image:["static/images/cellImage_1186147548_548.jpg","static/images/cellImage_1186147548_549.jpg"]},{index:611,topic:"> AODV (Ad-hoc On-Demand Vector)",define:"129회 응용 4교시",head:`필요한 경로로 RREQ, RREP 패킷을 
이용한 Ad hoc 라우팅 프로토콜`,remark:`Reactive, RREQ, RREP, On-Demand, 
Control Message`,image:[]},{index:612,topic:"RIP (Routing Information Protocol)",define:"134회 관리 1교시",head:`전체 네트워크에서 라우팅 테이블의 
Hop Count를 비교, 설정하여 최적의 
경로를 탐색하여 설정 프로토콜`,remark:`Hop Count, Distance Vector, Bellman-Ford,
소규모`,image:[]},{index:613,topic:"OSPF (Open Shortest Path First)",define:"134회 관리 1교시",head:`Hop Count 와 Link State, 대역폭을 
확인하여 최적의 경로를 설정하는
프로토콜`,remark:`Link State, 대역폭, 속도, 대규모, Dijkstra
IS-IS`,image:[]},{index:614,topic:"VXLAN (Virtual eXtensible LAN)",define:"130회 관리 1교시",head:`VLAN이 가지고 있는 한계를 극복하고
클라우드 환경에서의 요구사항을 
충족 시키기 위해 만들어진 기술`,remark:`VLAN 확장, VTEP, VNI, NVE, Gateway, 
Segment,24bit VLAN ID, SDN 기반 기술`,image:[]},{index:615,topic:"네트워크 서브네팅 (Subnetting)",define:"130회 관리 2교시",head:`각 IP주소의 Broadcasting 범위를 
지정하기 위해 사용되며 하나의 
네트워크 Class를 여러 개의 네트워크 
Segment로 분리하여 IP 주소를 
효율적으로 사용할 수 있게 하는 방법`,remark:`NW 분리
절차(네트워크 수, 서브넷마스크 결정, 
계산, 호스트)
VLSM`,image:[]},{index:616,topic:"수퍼네팅(Supernetting)",define:"130회 관리 2교시",head:`네트워크 정보를 요약하여 라우팅 
테이블의 크기 축소 및 라우터 수를 
줄이는 방법`,remark:"CIDR, NW 통합",image:[]},{index:617,topic:"NFC (Near Field Communication)",define:"131회 관리 1교시",head:`13.56MHz 주파수를 이용하여 약 
10cm 이내의 거리에서 개인 간 
통신을 지원하는 기술`,remark:`13.56MHz, 10cm, 424Kbps,  ASK
RFID, 
HCE, Read/Write, Peer-to-peer,
NFC 칩, SE
Active, Passive
ISO 18092, ISO 21481
Zing`,image:[]},{index:618,topic:"소켓(Socket) 통신",define:"131회 관리 2교시",head:`네트워크에서 컴퓨터나 장치 
사이에서 데이터를 주고받을 수 있게
해주는 표준 통신 방법`,remark:`양방향, 실시간성, 바이트, 메시지
구조(server - client)
유형(tcp, udp, web)
tcp(bind, listen, accept, read, write)
web(handshake, send, receive)`,image:[]},{index:619,topic:"> http (Hyper Text Transfer Protocol)통신",define:"131회 관리 2교시",head:`HTML5 표준 기술로, HTTP 환경에서 
클라이언트와 서버 사이에 하나의 
TCP 연결을 통해 실시간으로 전이중 
통신을 가능하게 하는 프로토콜`,remark:`HTML5, 단방향, stateless, request, response,
텍스트
web socket`,image:[]},{index:620,topic:"네트워크 실시간 측위 (NRTK, Network RealTime Kinematic)",define:"132회 응용 1교시",head:`위성 내비게이션 시스템의 일반적인 
오류를 수정하기 위한 측량 기술`,remark:`실시간 측위, GNSS, RTK, 초정밀측위
보정신호(VRS, FKP, MAC)`,image:[]},{index:621,topic:"인터넷 제어 메시지 프로토콜 (ICMP, Internet Control Message Protocol)",define:"132회 응용 2교시",head:`IP 네트워크에서 데이터 패킷을 
전송하는 데 문제가 발생했을 때 오류 
메시지를 전송하는데 사용 프로토콜`,remark:`오류보고메시지, 질의메시지
헤더(type, code, checksum, message)
사례(Ping, Traceroute)`,image:["static/images/cellImage_1186147548_550.jpg"]},{index:622,topic:"인터넷 그룹 관리 프로토콜 (IGMP, Internet Group Management Protocol)",define:"132회 응용 2교시",head:`인터넷 프로토콜 스위트의 일부로, 
호스트가 멀티캐스트 그룹에 가입, 
탈퇴하는데 사용되는 통신 프로토콜`,remark:`멀티캐스팅, D Class
동작(그룹가입, 모니터링, 응답, 탈퇴)
메시지(report, query)
멀티캐스트 라우팅 프로토콜`,image:["static/images/cellImage_1186147548_551.jpg"]},{index:623,topic:"개방형 무선 접속망 (Open RAN, Open Radio Access Network)",define:"132회 응용 2교시",head:`네트워크 장비 운용에 필요한 RAN 
구간에 가상화 기술을 적용하여 
Hardware와 Software를 분리하기 위한
개방형 아키텍처`,remark:`벤더 종속성 제거, 
O-CU, O-DU, O-RU, O-CP, O-UP`,image:[]},{index:624,topic:"Wi-Fi 7(=IEEE 802.11be)",define:"134회 응용 1교시",head:`30Gbps의 최대 전송률과 2.4GHz, 
5GHz, 6GHz 무선 주파수에서의 
초실감 미디어 컨텐츠를 안정적으로 
전송하는 차세대 무선통신 기술`,remark:`IEEE 802.11be, 2.4GH, 5GH, 6GH, MLO
다중 AP 조정, 16개 공간 스트림,
MIMO 프로토콜, 혼합 빔포밍, 
HARQ, 4096-QAM`,image:[]},{index:625,topic:"IEEE 802.11bn(WiFi 8)",define:"135회 관리 1교시",head:"WiFi8로서, 최대 23Gbps 전송 속도를 달성하고, Ultra High Reliability (UHR) 사양의 전송 성능과 연결 안정성 향상에 중점을 둔 차세대 WiFi 표준 기술",remark:`- 2.4GHz, 5GHz 및 6GHz 주파수 대역
- 4096 QAM 인코딩, 8개 공간 스트림
- MU-MIMO, 여러 OFDMA 
- 최대 320MHz의 채널 대역폭 지원`,image:["static/images/cellImage_1186147548_552.jpg","static/images/cellImage_1186147548_553.jpg"]},{index:626,topic:"PoE (Power of Ethernet)",define:"134회 응용 2교시",head:`네트워크에 연결된 장비들에 별도 
전원 공급 라인 없이, 이더넷 케이블 
하나로 데이터와 전원을 동시에 
공급하는 기술`,remark:`네트워크라인, 데이터+전력
구성(injector, picker)
위치(endspan, midspan, splitter)
전원(PD, PSE)
라인(Spare, Phantom)
표준(IEEE 802.3af PoE, IEEE 802.3at PoE+, 
IEEE 802.3bt PoE++)`,image:[]},{index:627,topic:"채널용량(샤논 제3정리, Information Capacity Theorem)",define:"135회 응용 1교시",head:`- 샤논의 채널 용량 정리는 노이즈가 존재하는 통신 채널에서 최대 데이터 전송 속도(채널 용량, 𝐶)를 정의하는 이론
- 정보 전송률의 한계를 3 개의 파라미터들로 정의함`,remark:null,image:["static/images/cellImage_1186147548_554.jpg","static/images/cellImage_1186147548_555.jpg"]},{index:628,topic:"European Telecommunications Standards Institute(ETSI)의 Zero-touch network and Service Management(ZSM)",define:"135회 응용 1교시",head:"네트워크 자동화 및 서비스 관리를 위한 표준화된 접근 방안을 제시하는 이니셔티브",remark:"목표 : ZSM은 5G, IoT, 클라우드 네이티브 서비스 등에서 요구되는 고도의 자동화와 효율적인 서비스 관리를 실현",image:["static/images/cellImage_1186147548_556.jpg","static/images/cellImage_1186147548_557.jpg"]},{index:629,topic:"트래픽 폴리싱(Traffic Policing)",define:"135회 응용 2교시",head:"미리 정의된 기준을 초과하는 트래픽을 Meter, Maker 기반으로 분류하여 트래픽을 버림으로써 트래픽의 대역폭을 제어하는 QoS 기술",remark:null,image:["static/images/cellImage_1186147548_558.jpg","static/images/cellImage_1186147548_559.jpg"]},{index:630,topic:"트래픽 쉐이핑(Traffic Shaping)",define:"135회 응용 2교시",head:`네트워크 내부로 유입되고 유출되는 트래픽의 양을 대역폭, 전송률을
조절하여 트래픽의 속도를 조절하는 QoS 기술`,remark:null,image:["static/images/cellImage_1186147548_560.jpg","static/images/cellImage_1186147548_561.jpg","static/images/cellImage_1186147548_562.jpg"]},{index:631,topic:"IBN(IntentBased Networking)",define:"135회 관리 1교시",head:"수동적인 네트워크 설정 및 관리방식에서 벗어나 사용자의 의도를 네트워크 정책으로 변환하고, 이를 자동으로 실행 및 최적화하는 네트워크 관리 기술",remark:null,image:["static/images/cellImage_1186147548_563.jpg","static/images/cellImage_1186147548_564.jpg","static/images/cellImage_1186147548_565.jpg"]},{index:632,topic:"IGP(Inter Gateway Protocol)EGP(Outer Gateway Protocol)",define:"137회 관리 1교시",head:`IGP(Inter Gateway Protocol)
: 하나의 자율 시스템(AS, Autonomous
System) 내부에서 라우팅 정보를 교환
하는 프로토콜
EGP(Outer Gateway Protocol)
: 서로 다른 자율 시스템(AS) 간 라우팅
정보를 교환하는 프로토콜`,remark:null,image:["static/images/cellImage_1186147548_566.jpg","static/images/cellImage_1186147548_567.jpg"]},{index:633,topic:"MODBUS 프로토콜",define:"137회 관리 1교시",head:`산업 자동화와 SCADA 환경에서의 PLC, RTU, HMI 등 장치 간 데이터 교환
을 위해 1979년 Modicon이 개발한 오픈 표준 통신 프로토콜`,remark:null,image:["static/images/cellImage_1186147548_568.jpg","static/images/cellImage_1186147548_569.jpg"]},{index:634,topic:"마이데이터",define:`126회 응용 3교시
128회 관리 2교시
132회 관리 2교시`,head:`흩어진 개인 정보를 한 사업자가 
모아서 그에 따른 소비자 맞춤형 
상품이나 정보를 제공할 수 있도록 
하는 서비스`,remark:`서비스절차(전송요구 > 인증 > 정보 전송
> 마이데이터 서비스 제공 > 서비스 관리)
기과간 인증(상호인증), 
본인인증(개별, 통합)
보안문제(사이버공격, 과도한 정보, 유출)
대응(가이드라인, 강력한 인증, 정기검사)
보호책임자지정(자격, 역할, 직무분리)
접근관리(권한, 기록, 시스템보안)
개인정보관리(기록, 파기, 활용)
재난대비(위기대응, 백업 및 복구)`,image:[]},{index:635,topic:"무선충전기술",define:`126회 응용 3교시
129회 응용 4교시`,head:`전송선 없이 특정 주파수 신호로 
에너지 전달 및 충전기술`,remark:`전송선 없이 충전
유형(자기유도, 자기공명, 전자파, 초음파)
거리(유도 --> 전자파 길어짐)
효율(유도 --> 전자파 낮아짐)
보안문제(탈취, 위협, bot, m2m공격)
대응(암호화, 전파인증, 허가된 기기만 
사용)
표준화(WPC, ITU-T SG20, 스마트전력전송)`,image:[]},{index:636,topic:"지능형 검침인프라 (AMI, Advanced Metering Infrastructure)",define:"126회 응용 4교시",head:`유무선 통신을 이용, 전력 소비자와 
공급자 사이를 연결, 양방향 원격검침 
시스템`,remark:`구성(스마트 미터, DCU, IHD)
네트워크(WAN, MAN, HAN)
취약점(평문, 부채널, 적외선통신, 펌웨어)
보안공격(부채널, 계정탈취, DoS, 도청)
대응(암호화, ACL, NMS, PKI 기반 인증)`,image:[]},{index:637,topic:"데이터센터",define:`126회 응용 4교시
129회 응용 2교시
134회 관리 2교시`,head:`서버 컴퓨터와 네트워크 회선 등을 
제공하는 건물이나 시설`,remark:`등급표준(TIA-942), 전력(UPS)
기능(백업전원, 재해복구, 온도제어)
기술(저지연, 스케일링, DCI)
저지연(CDN, Edge, infiniband)
인프라(SDN, NFV, HCI, 스케일링)
스케일링(Auto Scaling, Scale Out, Scale Up)
DCI(MPLS, SD-WAN, DWDM, NVMe, DRS, 
복제, 동기화)`,image:[]},{index:638,topic:"> UPS (Uninterruptible Power Supply)",define:"126회 응용 4교시",head:`정전 시 배터리에서 DC → AC로 
일정시간 공급되다 전원이 공급되면 
배터리에 전원을 공급하는 장치`,remark:`전력확인, 공급
교체방안(현황 > 계획 > 모의 훈련 > 교체)`,image:[]},{index:639,topic:"> TIA-942 가이드라인",define:"129회 응용 2교시",head:`데이터 센터의 신뢰성, 효율을 위한 
최소 요구사항을 기술한 표준 
가이드라인`,remark:`품질등급(tier 1, 2, 3, 4)
효율성, 신뢰성, 표준준수`,image:[]},{index:640,topic:"인터미턴트 컴퓨팅 (Intermittent Computing)",define:"134회 관리 1교시",head:`전원이 지속적으로 공급되지 않는 
환경에서 컴퓨팅 작업을 안정적으로
수행하는 기술`,remark:`전원 제약환경
IoT, 에너지 하베스팅, 비휘발성 메모리,
체크포인팅, 스케쥴링
Chain, Alpaca`,image:[]},{index:641,topic:"이진트리",define:"126회 응용 4교시",head:`각각의 노드가 최대 두 개의 자식 
노드를 가지는 트리 자료 구조`,remark:`자식 2개 이하
순회방식(전위, 후위, 중위, 레벨)
유형(full, complete, degenerate, perfect, 
balanced)`,image:[]},{index:642,topic:"> 이진트리 순회방식",define:"126회 응용 4교시",head:`트리 구조에서 각각의 노드를 정확히 
한 번만 방문하는 과정`,remark:`전위(root -> left -> right)
중위(left -> root -> right)
후위(left -> right -> root)`,image:[]},{index:643,topic:"정렬 알고리즘",define:`129회 관리 1교시
131회 관리 4교시`,head:`데이터Set이 주어졌을 때, 이를 
사용자가 지정한 기준에 맞게 
순서대로 나열하여 재배치하는 기법`,remark:`기준에 맞게 출력
유형(버블, 삽입, 퀵, 트리, 병합, 팀, 셸., 
기수, 카운팅)
성능(최악, 평균, 최선), O-notation`,image:["static/images/cellImage_1186147548_572.jpg","static/images/cellImage_1186147548_573.jpg"]},{index:644,topic:"> 트리정렬 (Tree Sort)",define:"129회 관리 1교시",head:`원소들을 이진 탐색 트리로 구성한 후 
중위 순회 방법으로 순회하면서 
오름차순으로 정렬하는 방법`,remark:"이진탐색트리, 중위순회, O(nlog2n)",image:[]},{index:645,topic:"> 버블정렬",define:"131회 관리 4교시",head:`인접하는 두 항목의 값을 비교하여 
원하는 순서로 되어있지 않으면 
서로 위치를 교환하는 정렬방법`,remark:"간단, 느림, 인접 두 항목, Flag",image:[]},{index:646,topic:"> 삽입정렬",define:"131회 관리 4교시",head:`정렬 부분에 새로운 레코드를 적절한 
위치에 삽입하는 과정을 반복하는 
알고리즘`,remark:"적절한 위치 삽입, Swap",image:[]},{index:647,topic:"> 퀵정렬",define:"131회 관리 4교시",head:`작은 값을 갖는 자료들과 큰 값을 갖는 
자료들로 분할하여 정렬하며, 분할된 
각 부분 리스트에 대해 반복적으로 
퀵 정렬을 수행하는 정렬 알고리즘`,remark:"기준데이터(Pivot), 분할과 정복",image:[]},{index:648,topic:"데이터 구조 (Data Structure)",define:`131회 관리 3교시
132회 관리 2교시`,head:`데이터를 구조적으로 표현하는 
방식과 이를 구현하는 데 필요한 
알고리즘 이론`,remark:`유형(단순, 선형, 비선형)
선형(배열, 리스트, 스택, 큐)
비선형(그래프, 트리, 힙)`,image:["static/images/cellImage_1186147548_574.jpg"]},{index:649,topic:"> 선형 구조 (Linear Structure)",define:"131회 관리 3교시",head:`자료 뒤에 한 개의 자료가 존재하며, 
순차적으로 연결된 자료구조`,remark:`한개 자료, 1:1, 순차적
유형(Array, List, Stack, Queue)`,image:[]},{index:650,topic:">> 스택",define:"132회 관리 2교시",head:`먼저 들어간 요소가 가장 나중에 
나오는 자료구조`,remark:"FILO, Push, Pop, Top, Bottom",image:["static/images/cellImage_1186147548_575.jpg"]},{index:651,topic:">> 큐",define:"132회 관리 2교시",head:`먼저 들어간 데이터가 먼저 나오는 
자료구조`,remark:"FIFO, Enqueue, Dequeue, Rear, Front",image:["static/images/cellImage_1186147548_576.jpg"]},{index:652,topic:">> 리스트",define:"132회 관리 2교시",head:`데이터 요소들이 순서대로 나열된 
자료 구조`,remark:"연결, insert, delete",image:[]},{index:653,topic:">> 링크드리스트(Linked List)",define:"135회 응용 3교시",head:"연노드와 포인터로 구성된 동적 자료구조로 각 노드는 데이터와 다음 노드를 가르키는 주소를 포함한 자료구조",remark:`적용분야 
 - 배열보다 유동적, 동적 데이터 삽입, 삭제 많은 경우 사용
 - 메모리 효율적 사용 가능`,image:["static/images/cellImage_1186147548_577.jpg"]},{index:654,topic:"> 비선형 구조 (Non-Linear Structure)",define:"131회 관리 3교시",head:`자료 뒤에 여러 개의 자료가 존재하는 
자료구조`,remark:`여러 자료, 1:N, M:N, 비순차
유형(Tree, Graph, Heap)`,image:[]},{index:655,topic:"알고리즘 복잡도",define:`131회 응용 1교시
134회 관리 3교시`,head:`알고리즘의 성능을 평가하기 위해, 
수행 시간 및 메모리 사용량 등을 
나타내는 척도`,remark:`성능평가, 재귀적, 탐욕적, 동적계획
평가기법(정확성, 적합성, 효율성)
효율성(시간, 공간), O-Notation`,image:["static/images/cellImage_1186147548_578.jpg"]},{index:656,topic:"> 시간복잡도 (Time Complexity)",define:`131회 응용 1교시
134회 관리 3교시`,head:`알고리즘의 성능을 평가하기 위해, 
수행 시간 및 메모리 사용량 등을 
나타내는 척도`,remark:`실행횟수, 시간, O-Notation
유형(빅오, 빅오메가 빅세타)`,image:[]},{index:657,topic:"> 공간복잡도 (Space Complexity)",define:`131회 응용 1교시
134회 관리 3교시`,head:`프로그램을 실행 및 완료하는데 
필요한 저장공간을 확인하는 복잡도`,remark:"저장공간(고정, 가변), O-Notation",image:[]},{index:658,topic:"> O-Notation",define:"134회 관리 3교시",head:`데이터 수 N에 대해 복잡도가 어떤 
함수로 나타나는가를 간단히 표현 
위한 알고리즘 표현법`,remark:`알고리즘 성능 평가
O(1), O(logN), O(N)`,image:[]},{index:659,topic:"이진 탐색 트리",define:"137회 관리 1교시",head:`이진 트리이면서 루트를 기준으로
왼쪽 값은 더 작고, 
오른쪽 값은 더 큰 조건을 만족하는
탐색 최적화 트리

시간복잡도
균형 O(log n), 불균형 O(n)`,remark:null,image:["static/images/cellImage_1186147548_579.jpg","static/images/cellImage_1186147548_580.jpg"]},{index:660,topic:"WBS (Work Breakdown Structure)",define:`128회 관리 1교시
129회 관리 3교시`,head:`프로젝트 목표 달성 위해 필요한 
인도물과 실행작업들을 관리 가능한 
요소로 분할한 계층구조 체계`,remark:`구성(Work Package, Code of Account, 
Control Account)
원칙(100% rule, 3~5레벨, one week, 
two week)
장점(명확, 관리용이)
일정 지연 시 만회 필요(범위축소, 
일정단축, 추가자원투입)`,image:[]},{index:661,topic:"정보시스템 감리",define:"131회 관리 1교시",head:`정보시스템 구축 및 운영에 관한 
사항을 종합적 관리, 점검, 개선 행위`,remark:`「전자정부법」 제57조: 행정기관등 의 정보시스템 감리,
정보시스템 감리기준(행안부 고시)

독립기관, 문제점 개선, 제3자관점, 품질보증
유형(현장, 상주, 설계, 종료)
절차(예비 > 현장 > 시정)
의무`,image:[]},{index:662,topic:"> 현장감리",define:"129회 관리 1교시",head:`감리대상사업이 수행중인 현장에서 
분석, 시험, 검토 등 통해 문제점 
확인, 개선방향 도출 활동`,remark:"활동(시작, 착수, 수행, 보고서, 종료)",image:[]},{index:663,topic:"> 지능정보기술 감리 실무 가이드",define:`130회 관리 3교시
134회 응용 3교시`,head:`빅데이터를 구축하고 분석하는 
정보화 사업에 대한 감리를 수행함에 
있어서 필요한 사업의 단계별로 감리 
점검항목을 제시하기 위한 실무지침`,remark:`단계(분석, 설계, 구현, 시험, 전개)
영역(시스템구조, 응용시스템, 
데이터베이스)
빅데이터분석(요구사항정의, 수집가능성, 
활용서비스)
클라우드계획(전략수립, 계획수립, 
품질보증)`,image:[]},{index:664,topic:"> 운영감리",define:"137회 관리 3교시",head:`개발완료 후 인도된 정보시스템에 대해 유지보수를 제외한
운영기획 및 관리, 모니터링, 테스트, 사용자 지원을 포함한
정보시스템의 정상적 운영에 필요한 제반 활동`,remark:null,image:["static/images/cellImage_1186147548_581.jpg","static/images/cellImage_1186147548_582.jpg"]},{index:665,topic:"> 유지보수 감리",define:"137회 관리 3교시",head:`정보시스템 개발, 구축 완료 후 기능변경, 추가, 보완, 폐기, 사용
방법의 개선, 문서 보완 등의 정보시스템 개선에 필요한 제반 활동`,remark:null,image:["static/images/cellImage_1186147548_583.jpg","static/images/cellImage_1186147548_584.jpg","static/images/cellImage_1186147548_585.jpg"]},{index:666,topic:"PMO (Project Management Office)",define:`131회 관리 1교시
132회 응용 1교시 
136회 관리 2교시`,head:`기업 내 프로젝트 관리 전담 조직. 
프로젝트 업무 범위 내에서 
프로젝트를 관장하고 조정 관리하는 
다양한 책임이 부과된 조직체`,remark:`「전자정부법」제64조의2: 전자정부사업관리의 위탁

발주자관점, 권고, 프로젝트 전 범위
조직위치(내부, 외부)
역할(기상대, 지도, 관제탑)
투여시간(part-time, full-time)`,image:[]},{index:667,topic:"> PMO와 상주감리 비교",define:"136회 관리 2교시",head:"",remark:null,image:["static/images/cellImage_1186147548_586.jpg"]},{index:668,topic:"ISO 21500",define:"130회 관리 1교시",head:`국제적인 프로젝트 관리에 대한 
원칙과 절차를 정립하기 위한 
ISO의 국제 표준`,remark:`프로젝트관리
주제(통합, 이해관리자, 범위, 자원, 일정, 
원가, 리스크, 품질, 조달, 의사소통)
절차(착수,기획,통제,이행,종료)`,image:[]},{index:669,topic:"ISO 31000",define:`132회 관리 1교시
134회 관리 4교시`,head:`조직의 효과적인 리스크 관리를 위한 
세부 원칙, 프레임워크, 프로세스를 
제시하고 가이드라인을 제공하는 
국제표준`,remark:`리스크 기반 사고
구성(원칙, 프레임워크 프로세스)
원칙(통합, 포용, 유동, 개선)
프로세스(의사소통, 리스크 평가, 처리)`,image:["static/images/cellImage_1186147548_587.jpg"]},{index:670,topic:"> IT 프로젝트 리스크 관리",define:"134회 관리 4교시",head:`프로젝트 위험 식별, 분석 이에 대한 
대응책 마련하여 프로젝트를 
성공적으로 완료하기 위한 관리 활동`,remark:`위험 식별, 대응, 관리, ISO 31000
프로세스(계획, 식별, 정성분석, 정량분석,
대응, 통제)
분석(PI, 민감도, 의사결정)
위협대응(에스컬레이션, 회피, 전가, 
완화, 수용)
기회대응(에스컬레이션, 활용, 공유,
증대, 수용)`,image:["static/images/cellImage_1186147548_588.jpg","static/images/cellImage_1186147548_589.jpg","static/images/cellImage_1186147548_590.jpg"]},{index:671,topic:"터크만 사다리 모델(Tuckman Ladder Model)(=터크만 그룹 개발 모델)",define:"134회 관리 1교시",head:`팀이 형성되고 발달되어 가는 과정을 
5단계로 나누어 설명하고 있는 모델`,remark:`팀 관리
Forming, Storming, Norming, Performing +
Adjouring / Terminal / End`,image:["static/images/cellImage_1186147548_591.jpg"]},{index:672,topic:"갈등과 프로젝트 성과와의 관계",define:"136회 관리 3교시",head:"갈등이 없는 경우보다 적절한 갈등이 존재하는 경우에 성과가 극대화",remark:null,image:["static/images/cellImage_1186147548_592.jpg","static/images/cellImage_1186147548_593.jpg"]},{index:673,topic:"갈등의 요인과 해결 전략",define:"136회 관리 3교시",head:"",remark:null,image:["static/images/cellImage_1186147548_594.jpg","static/images/cellImage_1186147548_595.jpg"]},{index:674,topic:"병원정보시스템 (HIS, Hospital Information System)",define:"129회 응용 3교시",head:`병원 운영의 모든 측면을 관리할 수 
있도록 설계된 포괄적인 통합 정보 
시스템`,remark:`EMR, HL7, PACS, EHR, EDW, CDW,
병원정보+내외부연계+장비
ISAC`,image:["static/images/cellImage_1186147548_596.jpg"]},{index:675,topic:"스마트양식장 (Smart Fish Farm)",define:"129회 응용 1교시",head:"수산양식에 ICT 기술을 결합한 양식장",remark:"순환여과양식, IoT, 클라우드, AI, 스마트",image:["static/images/cellImage_1186147548_597.jpg","static/images/cellImage_1186147548_598.jpg","static/images/cellImage_1186147548_599.jpg"]},{index:676,topic:"RPA (Robotic Process Automation)",define:"131회 응용 1교시",head:`단순 반복 업무를 사람이 처리하지 
않고, 로봇 자동화 솔루션을 통해 
처리하는 혁신 시스템`,remark:`워크플로우, OCR, 객체인식, 자동화, 
생산성`,image:["static/images/cellImage_1186147548_600.jpg","static/images/cellImage_1186147548_601.jpg"]},{index:677,topic:"이동형 로봇 대인 충돌 안전성 평가",define:"132회 응용 2교시",head:`이동형 로봇과 더미가 충돌 발생할 때 
신체의 피해 등을 예방하기 이한 충돌 
평가하여 안전성을 평가`,remark:`요구사항(0.2초이내)
방법(바퀴, 소요시간, 영상기록)
인체모형(성인남성, 여성, 소아형)
시험(환경, 충돌시나리오)`,image:[]},{index:678,topic:"Iot 보안",define:"",head:"",remark:null,image:["static/images/cellImage_1186147548_602.jpg","static/images/cellImage_1186147548_603.jpg","static/images/cellImage_1186147548_604.jpg"]},{index:679,topic:"미라이 봇넷 (Mirai Botnet)",define:"126회 관리 4교시",head:`사물인터넷 기기를 활용하여 봇넷을 
구축하고, 서비스거부 공격을 
가능하게 하는 트로이목마 유형의 
악성코드`,remark:`공격대상(IoT, CCTV, IP-Camera)
Dictionary Attack, DDoS
대응(초기비번변경, IoT공통보안 준수)`,image:["static/images/cellImage_1186147548_605.jpg","static/images/cellImage_1186147548_606.jpg"]},{index:680,topic:"IoT 공통보안 7원칙",define:"126회 관리 4교시",head:`IoT 장치의 설계/개발 단계에서부터 
폐기까지 전 주기에 공통적으로 
적용할 원칙 제시`,remark:`서비스 생애주기(설치 > 활용 > 폐기)
단계(설계 개발, 배포설치, 운영관리)
7원칙(프라이버시강화, 안전한기술적용, 
초기보안설정, 안전한파라미터, 패치
업데이트, 관리체계, 책임추적성)`,image:["static/images/cellImage_1186147548_607.jpg"]},{index:681,topic:"매터 (Matter)",define:"131회 응용 4교시",head:`스마트홈 기기들의 제조사 의존적인 
한계를 극복하기 위해 만든, 모든 
디바이스 호환이 가능한 스마트홈 
연동 표준`,remark:`상호연동성, 단순성, 신뢰성, 안전성, 
구성(플랫폼, 허브, 디바이스)
스택(물리, 데이터링크, 네트워크, 전송, 
응용)
통신(tcp, ipv6, ble, wifi, thread, Zigbee)
IoT, 스마트홈`,image:["static/images/cellImage_1186147548_608.jpg"]},{index:682,topic:"지능형 IoT(=AIoT)",define:"132회 응용 2교시",head:`인공지능과 사물인터넷의 결합으로, 
IoT 기기가 데이터를 수집하고 
분석하여 스스로 판단하고 행동할 수 
있는 스마트 시스템`,remark:`인공지능(AI)+사물인터넷 (IoT)
구성(딥러닝, 서비스, 게이트웨이, Iot, 
빅데이터)
관리적 취약점, 물리적 취약점, 기술적 
취약점, 개인정보 유출, 
암호화, 접근제어, trust zone, tpm, se, hsm`,image:["static/images/cellImage_1186147548_609.jpg"]},{index:683,topic:"앰비언트 컴퓨팅 (Ambient Computing)(=사용자 비인지 컴퓨팅)",define:"132회 응용 3교시",head:`사용자가 의식하지 않아도 주변 
컴퓨팅 환경을 통해 사용자와
기기가 상호작용하여 스스로 
동작하는 컴퓨팅 시스템`,remark:`비인지, 무의식, 센서, AI, 
Zero UI, UI/UX, VR/AR, 5G
데이터센싱, 전송, 저장/처리, IoT
업(up)가전, 스마트홈`,image:[]}],i={subject:e,topics:n};export{i as default,e as subject,n as topics};
