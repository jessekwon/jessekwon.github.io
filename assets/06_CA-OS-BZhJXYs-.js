const e="분야",n=[{index:1,topic:"CA",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_0.jpg"]},{index:2,topic:"소프트웨어",define:"- 정보들이 이동하는 방향과 정보 처리의 종류를 지정해주고, 그러한 동작들이 일어나는 시간을 지정해주는 명령들의 집합",head:"",remark:`시스템 소프트웨어: WinXP, Unix, Linux 등
응용 소프트웨어: 브라우저, 워드, 엑셀 등`,image:[]},{index:3,topic:"하드웨어",define:`- 컴퓨터 정보들의 전송 통로를 제공해 주고, 
그 정보에 대한 처리가 실제 일어나게 해주는 물리적인 실체들`,head:"",remark:`중앙처리장치(CPU)
기억장치(Memory)
입출력장치(I/O)
전원공급장치, 냉각기 등`,image:[]},{index:4,topic:"ㄴ중앙처리장치(CPU)",define:`- 프로세서
- '프로그램 실행'과 '데이터 처리'라는 중추적인 기능의 수행을 담당하는 요소`,head:"프로그램 실행, 데이터 처리",remark:"듀얼 코어, 쿼드 코어, 옵테론",image:[]},{index:5,topic:"ㄴ주기억장치",define:`- 고속 엑세스, 반도체 기억장치 칩, 고가
- 영구저장능력이 없기 때문에 일시적 저장장치로만 사용`,head:"일시적 저장장치",remark:"RAM, ROM, DDR SDRAM",image:[]},{index:6,topic:"ㄴ보조기억장치",define:`- 저장 밀도 높음, 저가, 속도 느림 
- 영구 저장능력을 가진 저장장치`,head:"영구 저장장치",remark:"디스크, CD-ROM",image:[]},{index:7,topic:"ㄴ입출력장치",define:"- 사용자와 컴퓨터간의 대화를 위한 입력 및 출력 장치, 유무선 통신 네트워크 인터페이스 장치",head:"입력 및 출력장치",remark:`- 키보드, 마우스
- 프린터, LCD모니터, 스피커`,image:[]},{index:8,topic:"튜링 머신(Turing Machine)",define:`- 계산하는 기계의 일반적인 개념을 설명하기 위한 가상의
기계이며 오토마타의 일종`,head:"제어장치, 입출력헤드, 테이프",remark:null,image:["static/images/cellImage_600070591_1.jpg"]},{index:9,topic:"튜링 동치",define:`- 컴퓨터 P와 Q, P가 할 수 있는 일을 Q가 모두 흉내(simulate)낼 수 있고,�
Q가 할 수 있는 일을 모두 P가 흉내 낼 수 있다면 두 컴퓨터는 튜링 동치`,head:"",remark:null,image:[]},{index:10,topic:"튜링 완전성",define:"- 어떤 컴퓨터 P와 튜링 머신이 동일 기능 수행 시 튜링 완전성(Turing Complete)함",head:"",remark:`예시 : 동형암호
(복호화 연산 = 암호화 연산)`,image:["static/images/cellImage_600070591_2.jpg"]},{index:11,topic:"고급언어",define:"- 영문자와 숫자로 구성되어 사람이 이해하기 쉬운 언어. 컴파일러를 이용하여 기계어로 번역",head:"C, C++, PASCAL, COBOL",remark:"z = x + y",image:[]},{index:12,topic:"어셈블리 언어",define:"- 고급 언어와 기계어 사이의 중간 언어",head:"기계어와 일대일 대응",remark:"Load A, B",image:[]},{index:13,topic:"기계어",define:"- 컴퓨터가 이해할 수 있는 언어로서, 2진 비트들로 구성",head:`연산코드(op code): 수행할 연산 지정
오퍼랜드(operand): 연산에 사용될 데이터 또는 저장되어있는 메모리 주소`,remark:"기계코드(00100101)",image:[]},{index:14,topic:"컴파일러",define:"- 고급언어 프로그램을 기계어 프로그램으로 번역",head:"-",remark:"번역",image:[]},{index:15,topic:"어셈블러",define:"- 어셈블리 프로그램을 기계어 프로그램으로 번역",head:"-",remark:"Load, Add, Stor",image:[]},{index:16,topic:"Loader",define:"- 하드디스크에 있는 OS 및 특정 프로그램을 주기억장치로 적재하는 프로그램",head:"-",remark:"CPU가 명령어 실행",image:[]},{index:17,topic:"시스템버스",define:"- CPU와 시스템 내의 다른 요소들 사이에 정보를 교환하는 통로",head:`주데제
- 주소버스: 주소 전달
- 데이터버스: 데이터 전달
- 제어버스: 동작제어 신호선들의 집합`,remark:null,image:["static/images/cellImage_600070591_3.jpg"]},{index:18,topic:"I/O 장치제어기",define:"- CPU로부터 I/O명령을 받아서 해당 I/O 장치를 제어하고, 데이터를 이동함으로써 명령을 수행하는 전자회로 장치",head:`* 버스
- 상태 레지스터: 현재 상태 비트 저장
- 데이터 레지스터: 이동 데이터 일시 저장`,remark:null,image:["static/images/cellImage_600070591_4.jpg"]},{index:19,topic:"컴퓨터기본기능",define:"",head:`실저이입제
프로그램 실행
데이터 저장 
데이터 이동 
데이터 입력/출력
제어`,remark:null,image:[]},{index:20,topic:"컴퓨터 부품의 발전",define:"릴레이 > 진공관 > 트랜지스터 > 반도체 집적회로(IC)",head:"-",remark:"-",image:[]},{index:21,topic:"컴퓨터 구조의 발전",define:"",head:`ENIAC : 10진수 체계
> EDVAC : 2진수 체계, StoredProgram
> EDSAC : 프로그램 내장,UNIVAC : 정보처리
> IAS : Memory, ALU, CU, 명령 사이클`,remark:"-",image:[]},{index:22,topic:"Stored Program Architecture",define:`- CPU 옆에 기억장치를 붙이고, 
프로그램과 데이터를 기억장치에 저장해 놓았다가 실행명령에 따라 차례로 불러내어 처리하는 방식`,head:"",remark:null,image:["static/images/cellImage_600070591_5.jpg"]},{index:23,topic:"ㄴ폰노이만 아키텍처",define:"- 단일 저장장치(메모리)에 연산의 수행과 관련된 일련의 명령어와 연산에 필요한 또는 연산의 결과로 생성된 데이터를 함께 수용하는 모델",head:`메모리 > FI > DI > Load > 데이터 > 메모리 > EI (순차처리)
* CISC 구현용이`,remark:null,image:["static/images/cellImage_600070591_6.jpg"]},{index:24,topic:"ㄴ하버드 아키텍처",define:`- 폰노이만 병목현상 개선
- 명령어와 데이터 메모리가 분리되어 병렬적으로 작업이 처리되도록 구현한 컴퓨터 아키텍처`,head:`메모리 > FI > DI > EI 
Store > 데이터 (동시처리)
* RISC 구현용이`,remark:null,image:["static/images/cellImage_600070591_7.jpg"]},{index:25,topic:"ㄴ최근 고성능 CPU",define:"- 내부 CPU에 하버드 아키텍처, 외부 CPU에 폰노이만 아키텍처 적용",head:"",remark:null,image:["static/images/cellImage_600070591_8.jpg"]},{index:26,topic:"아키텍처 수행시간",define:`- 기계어 명령어 수 
* 명령어 수행 시 소요 사이클 수 
* 각 사이클 당 걸리는 시간`,head:`- MHz: 클럭 속도를 표시하는 단위
- CPI: 명령어당 소요되는 사이클
- Instruction Count`,remark:`IPS: 초당 명령어 처리율 
FLOPS`,image:[]},{index:27,topic:"연산처리장치",define:"프로그램 실행'과 '데이터 처리'라는 중추적인 기능의 수행을 담당 하는 요소",head:`CPU : 제어장치,�연산장치,�레지스터,�범용 연산
GPU : 다수 ALU, 고속 그래픽 처리에 특화
GPGPU : GPU가 연산 수행
APU : CPU�+�GPU
NPU : 인간의 뇌를 모방`,remark:`최근 
DPU : 데이터 처리 중심 
QPU : 양자`,image:[]},{index:28,topic:"ㄴGPU(Grapic Processing Unit)",define:"- 다수의 ALU, 코어를 기반으로 고속 그래픽 처리에 특화된 프로세서",head:`- control, cache 부분을 간소화한 많은 수의
코어 집적구성
-단순한 병렬계산을 주로 수행`,remark:null,image:["static/images/cellImage_600070591_9.jpg"]},{index:29,topic:"ㄴGPGPU",define:`- 일반적으로 그래픽 처리시 사용했던 GPU를 CPU가 수행하던 응용프로그램의 계산에 사용하는 기술
- GPU를 그래픽 연산 뿐 아니라 일반 컴퓨팅 영역에도 활용하고자 하는 컴퓨팅 체계`,head:`- 여러개의 GPU를 집적하여 벡터연산의 
병렬성을 극대화 수행
- GPU 계산결과를 CPU와 주고받아야 함`,remark:null,image:["static/images/cellImage_600070591_10.jpg"]},{index:30,topic:"ㄴAPU(Accelerated Processing Unit)",define:`- 성능 가속 향상 위해 
CPU와 GPU 기능을 통합 활용하는 프로세서
- 연산을 책임지는 CPU와 그래픽 연산을 책임지는 GPU를 합해서 만든 성능 가속 프로세서`,head:"CPU+GPU",remark:"가속 처리장치",image:[]},{index:31,topic:"ㄴNPU(Neural Processing Unit)",define:"- 다양한 병렬처리, 병목현상 감소 등을 위한 인간의 뇌를 모방하여 생성한 프로세서",head:"뉴런, 시냅스, TPU, NNP, IPU",remark:"신경망 처리장치",image:[]},{index:32,topic:"ㄴCPU(CentralProcessing Unit)",define:"- 명령을 해독하고,�산술논리연산이나 데이터 처리를 실행하는 장치",head:`전기제연제어기능: IR, Decoder, CU
연산기능: ALU, AC, 누산기
기억기능: PC, MAR, MBR
전달기능: BUS`,remark:null,image:["static/images/cellImage_600070591_11.jpg"]},{index:33,topic:"ㄴ제어장치(ControlUnit)",define:"- 명령어를 해독하고 사전에 기술된 제어 신호들을 적당한 순서로 발생시키는 장치",head:`* 구분
Micro-Programmed Control : CISC�
Hardwired Control : RISC`,remark:null,image:["static/images/cellImage_600070591_12.jpg"]},{index:34,topic:"ㄴㄴ산술논리연산(ALU)",define:"- 덧셈, 뺄셈 같은 두 숫자의 산술연산과 논리합, 논리곱 같은 논리연산을 계산하는 디지털 회로",head:`* ALU 구분 : 산논시보상
- 산술연산장치: 덧셈, 뺄셈, 곱셈, 나눗셈 
- 논리연산장치: AND, OR, XOR 등
- 시프트 레지스터: 왼쪽, 오른쪽 이동
- 보수기: 보수값을 취하는 회로
- 상태 레지스터: 연산 결과 상태 플래그`,remark:null,image:["static/images/cellImage_600070591_13.jpg"]},{index:35,topic:"명령어",define:"- 사용자가 원하는 연산, 오퍼랜드, 처리 순서를 프로세서에게 지시하는 명령문",head:`* 명령어 분류 : 전산논시분
데이터 전송 명령어: LOAD, MOVE 등
산술연산 명령어: ADD, SUB, DIV 등
논리연산 명령어: AND, OR, XOR 등
시프트 명령어: SHR, SHL
분기 명령어: JUMP, CALL RETURN 등`,remark:null,image:["static/images/cellImage_600070591_14.jpg"]},{index:36,topic:"ㄴ0주소 명령어(스택)",define:`[연산코드(opcode)]
- 동작코드만 존재, 주소가 없는 형식
- 데이터 기억은 PUSH, 꺼낼때는 POP`,head:"스택",remark:"PUSH A",image:[]},{index:37,topic:"ㄴ1주소 명령어(누산기)",define:`[연산코드(opcode)][자료부(operand)]
- 연산 대상이 되는 두개중 하나만 표현
나머지 하나는 누산기 사용
- 하나의 번지로만 처리`,head:"누산기",remark:"ADD B (AC<-AC+M[B])",image:[]},{index:38,topic:"ㄴ2주소 명령어(범용 레지스터)",define:`[연산코드(opcode)]
[자료1(operand)][자료2(operand)]
- 연산대상이 되는 두개의 주소를 표현
연산결과를 그 중 한곳에 저장`,head:"PC용 레지스터",remark:"ADD R1, B (R1<-R1+B)",image:[]},{index:39,topic:"ㄴ3주소 명령어(범용 레지스터)",define:`[연산코드(opcode)]
[자료1(operand)-결과]
[자료2(operand)][자료3(operand)]
- 연산대상이 두개의 주소와 연산결과를 저장하기 위한 결과주소를 표현`,head:"서버용 레지스터",remark:"ADD R1, A, B (R1<-A+B)",image:[]},{index:40,topic:"ㄴ주소지정방식",define:`- 연산에 사용될 데이터(operand)가 기억장치의 어디에 위치하는지 지정하는 방법
- 직간묵즉레간상인배`,head:`- 직접 주소: 오퍼랜드 내용이 유효 주소
- 간접 주소: 오퍼랜드 내용이 가리키는 곳이 유효 주소
- 묵시적 주소: 묵시적으로 명령어에 포함
- 즉시 주소: Data가 명령어에 포함
- 레지스터 직접: 오퍼렌드가 레지스터에 저장 
- 레지스터 간접: 레지스테어 데이터 주소 저장
- 상대 주소: PC 레지스터 + 오퍼랜드 값
- 인덱스 주소: 인덱스 레지스터 + 오퍼랜드 값
- 베이스 주소: 베이스 레지스터 + 오퍼랜드 값`,remark:null,image:[]},{index:41,topic:"명령어 사이클",define:"- CPU가 한 개의 명령어를 실행하는 과정",head:`인간실인
- 인출 사이클(Fetch)
- 간접 사이클(Indirect)
- 실행 사이클(Execute)
- 인터럽트 사이클(Interrupt)`,remark:null,image:["static/images/cellImage_600070591_15.jpg"]},{index:42,topic:"파이프라인",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_16.jpg"]},{index:43,topic:"명령어 파이프라인",define:"- 명령어를 실행하는 과정을 여러단계로 나누어 여러 명령어를 동시에 실행함으로써 CPU 속도를 향상시키는 기술",head:`- 단일 파이프라인: 각 단계를 한번만 중첩
- 슈퍼 파이프라인: 각 단계 엇갈리게 중첩
- 슈퍼 스칼라: 단일 파이프라인 여러개
- 슈퍼 파이프라인 슈퍼 스칼라: 슈퍼 파이프라인 여러개
- VLIW: 동시 실행 명령어를 하나의 명령어로 압축하여 수행`,remark:null,image:[]},{index:44,topic:"파이프라인 해저드",define:`- 파이프라인의 성능을 저해하는 요인
- CPI(Clock per Cycle)가 1이 되는것을 방해하는 요소`,head:"구데제",remark:"구조적, 데이터, 제어",image:[]},{index:45,topic:"ㄴ구조적 해저드",define:`- 프로세서의 구조적인 문제로 인해 명령어 실행불가 
- 자원충돌로 동시 쓰기 불가`,head:"- (해결방안) 지하자원",remark:`- 해당 기능 사용 할 수 있을 때까지 지연
- 하버드 아키텍처 사용
- 충분한 자원확보`,image:[]},{index:46,topic:"ㄴ데이터 해저드",define:`- 앞에서 실행된 명령어의 결과값이 다음 명령어에 사용되어 발생되는 문제
- RAW, WAR, WAW 발생`,head:"- (해결방안) 지포리체",remark:`- 의존성문제 해결시까지 다음명령어 지연(Stall)
- Forward or By passing: 결과값이 준비되면 바로 전달, 전방전달
- Register Renaming: 다른 레지스터 할당하여 사용
- Change Clock Cycle: 영향없는 범위내에서 변경`,image:[]},{index:47,topic:"ㄴ제어 해저드",define:"- 순차적으로 들어온 명령어가 분기에 의해 버려짐",head:"- (해결방안) 예지조",remark:`- Predict Branch(분기 예측): 타겟 주소 계산 위해 1사이클 손실
- 의존성문제 해결시까지 다음명령어 지연
- 조건문과 관련없는 명령 수행토록 프로그램 순서 재배치`,image:[]},{index:48,topic:"병행성(Concurrency)",define:"- 하나의 프로세서를 이용해 두개 이상의 프로그램을 동시에 실행되는 성질",head:`프로세스 동시수행
세마포어, 모니터`,remark:"프로그램 성질",image:[]},{index:49,topic:"병렬성(Parallelism)",define:"- 복수 프로세서가 여러 개 또는 한 프로그램의 분할된 부분을 동시에 처리하는 성질",head:`연산 동시수행
버스락, 스핀락, 베리어`,remark:"기계 성질",image:[]},{index:50,topic:"ㄴ병렬처리 단위",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_17.jpg"]},{index:51,topic:"ㄴ병렬성 수준",define:"명데대",head:"",remark:"설명 보완",image:["static/images/cellImage_600070591_18.jpg"]},{index:52,topic:"병렬 컴퓨터",define:`- 여러 개의 프로세서들이 
다수의 Task혹은 단일 Task를 분할하여 동시에 처리하는 컴퓨터`,head:"",remark:null,image:[]},{index:53,topic:"병렬 컴퓨터 메모리 공유방식",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_19.jpg"]},{index:54,topic:"ㄴFlynn 분류",define:"- 프로세서들이 처리하는 명령어들과 데이터들의 흐름의 수",head:`SISD: 단일 명령 - 단일 데이터 흐름
SIMD: 단일 명령 - 다중 데이터 흐름
MISD: 다중 명령 - 단일 데이터 흐름
MIMD: 다중 명령 - 다중 데이터 흐름`,remark:"-",image:[]},{index:55,topic:"ㄴ공유 메모리 방식",define:"- 주기억장치가 모든 프로세스들에 의해 공유",head:`SMP: 두개 이상의 프로세서를 공유버스로 연결
UMA: 내부 버스에 연결된 집중 메모리 공유
NUMA: 프로세서별 공유메모리, 시스템 버스 사용없이 데이터 엑세스, 수평적 확장`,remark:"-",image:[]},{index:56,topic:"ㄴ분산 메모리 방식",define:`- 각 프로세서가 기억장치를 
공유하지 않고 고유 기억장치를 별도로 소유`,head:`MPP: 개발 프로세서, 메모리, IO등을 갖는 노드들을 상호 결합
CC-NUMA: 캐시만 있는 메모리 사용
NUMA: 공유메모리를 각 프로세서 모듈에 분산
NORMA: 프로세서들과 기억장치들은 메시지 전송을 지원하는 상호연결망으로 접속
LCMP: SMP를 클러스터 노드로 상호 연결`,remark:"-",image:[]},{index:57,topic:"ㄴCPU 유형에 따른 분류",define:"- 명령어 집합의 구성방식",head:`CISC: 한 명령어의 길이를 줄여 명령어의 디코딩 속도를 높이고 최소의 메모리 구조를 갖는 방식. 복합 명령어
RISC: 사용빈도수 높은 기초 명령어로 구성 고정길이 사용으로 파이프라인 적용
EISC: 확장 레스트어와 확장 플래그 사용으로 operand 확장가능
EPIC: VLIW의 호환성이 약한부분을 개선하고 컴파일러가 병령성을 찾아내는 병렬 명령어 처리 아키텍처`,remark:"-",image:[]},{index:58,topic:"ㄴ메모리접근 방식",define:"- 프로세서들이 메모리에 접근하는 방식에 따른 분류",head:`NORMA:원격기억장치 직접 액세스 불가
COMA:기억장치들 캐쉬로 동작
UMA:상호연결망 이용
NUMA:다수의 UMA 모델 상호 연결`,remark:null,image:[]},{index:59,topic:"멀티코어",define:`- 두 개 이상의 독립적인 프로세서들을 
단일 패키지로 통합한 것
- 하나의 CPU 안에 여러 개의 독립적인 실행코어를 둠으로써 프로그램을 병렬적으로 처리할 수 있게 한 CPU`,head:`* 멀티코어 유형 
SMP: 동종의 코어들을 결합하여 메모리 등의 공유를 통해 성능 향상
AMP: 이종의 코어들을 결합하여 CPU의 용도별 부분 최적화
* 멀티코어 모델
General execution core : 두 개 이상 일반코어
General core&Dedicated DSP 
: 한개 일반코어+가속기
Hybrid Model : 2개이상 일반코어+가속기
* 멀티코어 SW기술
OpenMP
OpenCL
WebCL 
CUDA
OpenACC
C++AMP`,remark:null,image:[]},{index:60,topic:"ㄴCUDA",define:`- 그래픽 처리 장치(GPU)에서 수행하는 병렬처리 알고리즘을 산업표준 언어를
사용하여 작성할 수 있도록 지원하는 GPGPU기술 ,NVIDA에서 개발`,head:`* 구성
SP�(Streaming� processer)�
SM�(Streaming� Multi processer)
TPC(Texture/Processor� Cluster)
GPU(Graphic� Processor� Unit)�`,remark:null,image:["static/images/cellImage_600070591_20.jpg"]},{index:61,topic:"멀티스레딩",define:`- 하나의 프로그램에 동시에 여러 개의 
일을 수행할 수 있도록 해주는 기술 
- 여러 스레드를 병렬로 동시에 실행하는 기법`,head:"",remark:null,image:["static/images/cellImage_600070591_21.jpg"]},{index:62,topic:"하이퍼스레딩",define:`- 하나의 CPU를 사용하는 대신 
스레드라는 작업단위를 동시에 수행함으로써 마치 듀얼 CPU를 쓰는 효과를 갖는 기술`,head:"",remark:null,image:["static/images/cellImage_600070591_22.jpg"]},{index:63,topic:"컴퓨터 관련 법칙",define:`- 병렬성
: 암달의 법칙 <-> 구스타프슨 법칙
: 카프-플랫척도
- 마이크로코즘
: 무어의 법칙 <-> 무어 댄 모어
- 텔레코즘
: 네트워크 3대법칙: 샤노프 법칙, 멧칼프 법칙, 리드 법칙`,head:`마이크로코즘: 부와 권력 창출의 원천은 컴퓨터의 고집적화를 통한 소형화, 경제성, 고성능화를 통해 달성
텔레코즘: CPU 성능보다, 컴퓨터들이 연결되었을 때 발생하는 힘이 더 중요`,remark:null,image:["static/images/cellImage_600070591_23.jpg"]},{index:64,topic:"ㄴ무어의 법칙",define:"- 마이크로프로세서의 집적도는 18개월마다 2배씩 증가함을 증명한 이론",head:"-",remark:"-",image:[]},{index:65,topic:"ㄴ무어 댄 모어",define:"- 반도체 집적 기술의 한계성 보다, 생산하는 공정의 변경비용 증가로 인한 무어의 이론 한계를 증명한 이론",head:"-",remark:"-",image:[]},{index:66,topic:"ㄴ암달의 법칙",define:`- 프로세서를 아무리 병렬화시켜도 
더 이상 성능이 향상되지 않는 한계가 존재한다는 법칙`,head:`시스템 성능향상도
코드 병렬화만 개선시 성능향상도
코드와 프로세서 수를 함께 개선시 성능향상도`,remark:"-",image:[]},{index:67,topic:"ㄴ구스타프슨 법칙",define:`- 대용량 데이터 처리는 효과적으로 
병렬화 할 수 있다는 법칙`,head:"빅데이터 처리 근거",remark:"-",image:[]},{index:68,topic:"ㄴ파레토 법칙",define:`- 전체 결과의 80%가 
전체 원인의 20%에서 일어나는 법칙`,head:"20%의 명령어가 프로그램의 80%를 차지",remark:"-",image:[]},{index:69,topic:"ㄴ롱테일 법칙",define:`- 전체 80%의 매출이 
전통의 20% 고객보다 크다는 것을 표현한 법칙`,head:"-",remark:"-",image:[]},{index:70,topic:"네트워크 3대법칙",define:"사노프, 멧칼프, 리드",head:"사멧리",remark:null,image:["static/images/cellImage_600070591_24.jpg"]},{index:71,topic:"ㄴ샤노프 법칙",define:`- 방송과 매스미디어로 대표되는 전통매체에서 네트워크의 가치는 시청자수에 비례
- 산업화 시대(1:다)`,head:`1세대 Political Network : Broadcasting
네트워크 가치 = n`,remark:"-",image:[]},{index:72,topic:"ㄴ멧칼프 법칙",define:`- 하나의 네트워크 유용성 또는 효용성은 그 네트워크 사용의 제곱에 반비례한다는 법칙
- 정보화 시대(1:1)`,head:`2세대 Social Network : Communication
네트워크 가치 = n^2`,remark:"-",image:[]},{index:73,topic:"ㄴ리드의 법칙",define:`- 컴퓨터 네트워크가 사회적 네트워크와 결합될 때 그 가치는 2의 N제곱으로 증가한다는 규칙
- 지식창조 시대(다:다)`,head:`3세대 Create Network : Collaboration
네트워크 가치 = 2^n`,remark:"-",image:[]},{index:74,topic:"ㄴ폴락의 법칙",define:`반도체 성능은 면적이 2배 증가할 때 
1.4배 증가하며, 전력소모는 면적에 비례`,head:"",remark:null,image:["static/images/cellImage_600070591_25.jpg"]},{index:75,topic:"기억장치",define:"- 컴퓨터의 CPU가 작업을 하기 위해서 일련의 프로그램이나 데이터를 일시적으로 또는 일정기간 저장하기 위한 장치",head:`- 성능분류 : 접근시간, 기억용량, 비트 가격, 접근방법
- 전송단위 : 주기억장치(워드 단위), 보조저장장치(블록 단위)
- 주소지정 단위 : byte 또는 word 단위`,remark:null,image:[]},{index:76,topic:"ㄴ기억장치 유형",define:`- 재료: 반도체 기억장치, 자기-표면 기억장치
- 저장성질: 휘발성, 비휘발성 기억장치
- 삭제여부`,head:"-",remark:"-",image:[]},{index:77,topic:"기억장치 계층구조",define:"- 고가의 고속 메모리와 저가의 저속 메모리를 계층적으로 배치하여 낮은 가격에 컴퓨터 성능을 최적화 시키는 컴퓨터 아키텍처",head:`<내부기억장치(휘발성)>
- CPU 레지스터(L0)
- 캐시 메모리(L1, L2, L3)
- 주기억장치(DRAM)
- 디스크 캐시(SSD)`,remark:`<외부기억장치(비휘발성)>
- 디스크 캐시
- 디스크
- 자기 테이프 및 CD-ROM`,image:[]},{index:78,topic:"ㄴ메모리 반도체",define:`- 메모리 반도체 
: 정보 저장용
- 비메모리 반도체 
: 정보 처리용(기억장치 아님)`,head:"",remark:null,image:["static/images/cellImage_600070591_26.jpg"]},{index:79,topic:"ㄴ계층간 미스(Miss)",define:`콜추용코
- 콜드 미스
: 데이터 최초 read 시 발생 캐시미스
: 해결 : 프리펫칭
- 충돌 미스
:캐시 연관도 부족으로 발생
:해결 : 연관캐시, Mapping 방식 변경`,head:`- 용량 미스
: 캐시 용량 부족으로 발생
: 해결 : 캐시 크기 증설
- Coherence 미스
: 캐시 캐시라인 무효롸로 인해 발생
: 해결 : 스누핑 프로토콜`,remark:null,image:[]},{index:80,topic:"ㄴ계층구조성능향상기법",define:`- CacheAccessTime 최적화
: LUR,LRU,PreFetch
: Direct,Associative,SetAssociative
- MainMemory AccessTime최적화
: 메모리 인터리빙
: PageMode RAM,DDR RAM
- DiskAccessTime 최적화
: WorkingSet,PFF활용
: TLB,전용 레지스터`,head:"",remark:null,image:[]},{index:81,topic:"ㄴ지역성(Locality)",define:"- 프로그램이 기억장치 내 정보 접근 시 한 순간에 특정 영역을 집중적으로 참조하는 특성",head:`시공순
시간적 지역성: 최근 액세스 데이터 참조(루프, 서브루틴)
공간적 지역성: 인접 데이터 연속 참조(Array, Table, 순차코드)
순차적 지역성: 순서대로 참조(구조적 프로그래밍)`,remark:`*활용
- SW관점: 선인출, 예상 paging, 워킹셋
- HW관점: 기억장치 계층구조, 캐시메모리, 
CDN 서버`,image:[]},{index:82,topic:"레지스터(Register)",define:`- 처리 중인 데이터나 처리 결과를 임시 보관하는 기능을 하며 
산술연산이나 정보해석, 전송 등을 할수 있는 
일정길이의 정보를 저장하는 CPU 내부의 초고속 기억장치`,head:`PC: 다음에 인출할 명령어 주소 저장
MAR: 메모리 주소 일시적 저장
MBR: 데이터 일시적 저장(버퍼)
IR: 최근 인출 명령어 저장
AC(누산기): 데이터 일시적 저장`,remark:`* 동작방식에 의한 유형
범용 레지스터, 포인터 레지스터, 인덱스 레지스터, 명령어 포인터, 플래그 레지스터, 세그먼트 레지스터`,image:[]},{index:83,topic:"캐시메모리(Cache Memory)",define:"- CPU와 주기억장치의 속도 차이에 따른 성능저하를 줄이기 위해, CPU와 주기억장치 사이에 설치한 고속 기억장치",head:`* 구성요소
Cache
Block
Mapping Function(사상기법)
Replace Algorithm(교체 알고리즘)
Write Policy(쓰기 정책)`,remark:null,image:["static/images/cellImage_600070591_27.jpg"]},{index:84,topic:"ㄴMapping Function(사상기법)",define:`어떤 주기억장치 블록들이 어느 캐시라인을 공유할 것인지를 결정해 주는 방법
- 직접사상
: 주기억장치의 블록들이 지정된 하나의 캐시 라인으로만 적재 
- 완전/연관사상
: 주기억장치 블록이 캐시의 어떤 라인으로든 적재 가능
- 세트/연관사상
: 직접 + 완전/연관사상`,head:`직완세
태라단 / 태단 / 태세단
① 직접사상: [태그][라인][단어]
② 완전/연관사상: [태그][단어]
③ 세트/연관사상: [태그][세트][단어]`,remark:`① 직접 : 태라단
② 완전 : 태단
③ 세트 : 태세단`,image:[]},{index:85,topic:"ㄴReplace Algorithm(교체기법)",define:`- 캐시메모리 용량이 한계에 다다랐을 때 
내용을 교체하는 알고리즘
- 어떤 주기억장치 블록들이 어느 캐시라인을 공유할 것인지를 결정해 주는 방법`,head:`랜피오프리
랜덤: 임의 선택 교체
FIFO: 가장 오래된 블록 교체
최적(OPT): 향후 참조되지 않을 블록 교체
LFU: 적게 참조한 블록 교체
LRU: 오래 사용하지 않은 블록 교체`,remark:`NUR: 최근에 사용하지 않은 페이지 교체 
SCR: FIFO방식에 기회를 한번 더 주는 방식`,image:[]},{index:86,topic:"ㄴCache Coherence(캐시 일관성)",define:"- 공유 메모리 멀티 프로세서에서, 프로세서의 연산에 따른 정확한 메모리 동작을 위해, 특정 프로세서에서 변경된 캐시정보가 주기억장치 및 각 프로세서의 캐시에 동일하게 적용, 유지되는 매커니즘",head:"* 캐시 일관성 유지기법 : 공변버디",remark:`- 공유캐시 사용
- 공유변수 캐시 미저장
- 버디감시 매커니즘
- 디렉토리 기반 일관성유지 프로토콜`,image:[]},{index:87,topic:"ㄴWrite Policy(쓰기 정책)",define:"- 캐시 블록이 변경되었을 때 그 내용을 주기억장치에 갱신하는 시기와 방법",head:`-Write-through: 
: 모든 쓰기 동작들이 캐시와 주기억장치에 동시 수행, 
: VI
-Write-back
: 캐시에만 갱신하고 해당 데이터가 swap-out 될 때 주기억장치에 복사
: MESI`,remark:null,image:["static/images/cellImage_600070591_28.jpg"]},{index:88,topic:"ㄴ캐시와 메모리간 불일치 해결기법",define:`① Cache Flush: 캐시 데이터가 유효하지 않아 cache line 초기화 기법. Valid bit Clear. 캐시 초기화
[D-bit 1][V-bit 1] => [D-bit 1][V-bit 0]
- V-bit Clear
- 메모리, 주기억 Clear`,head:`② Cache Clean: 캐시 데이터를 메모리로 저장
- Dirty bit Clear. 캐시 동기화
- V-bit Clear
[D-bit 1][V-bit 1] => [D-bit 0][V-bit 1]
- 캐시내용 -> 주기억장치로 변경`,remark:`① 플러시 : 데이터 무효화
② 클린 : 데이터를 주기억장치로 쓰기`,image:[]},{index:89,topic:"ㄴRAM",define:"- CPU가 컴퓨터의 전체적인 연산처리와 제어를 하기 위해 데이터를 저장하는 주기억장치",head:`SDR, DDR, DDR2, DDR3, DDR4, DDR5
GDDR,�LPDDR`,remark:"-",image:[]},{index:90,topic:"ㄴ플래시 메모리(Flash�Memory)",define:`- 기계적인 동작이 없는 순수 반도체로 이루어진 고속, 저전력, 비휘발성 저장매체 
노병난직`,head:`* 셀 유형
NOR: 병렬연결, Random Access, 빠름
NAND: 직렬연결, Sequential Access, 느림`,remark:`* NAND Flash 메모리 종류
SLC: Single Level Cell
MLC: Multi Level Cell
TCL: Triple Level Cell`,image:[]},{index:91,topic:"ㄴSCM(Storage Class Memory)",define:"- 플래시 메모리처럼 비휘발성 속성을 제공하면서 동시에 RAM처럼 고속의 바이트 단위 랜덤 접근을 지원하는 메모리",head:`-PRAM: 물질의 상변환 이용
-MRAM: 전자의 자화현상 이용
-FeRAM: 분극 특성 이용`,remark:"-",image:[]},{index:92,topic:"메모리 인터리빙",define:`- 메모리 접근시간을 최소화
- 메모리를 복수개의 모듈로 나누고 각 모듈에 연속적인 주소를 부여하여 동시에 접근이 가능하게 하는 방식`,head:`하상혼
하위 인터리빙: 하위비트에 모듈선택  
상위 인터리빙: 상위비트에 모듈선택
혼합 인터리빙: 그룹선택시 상위 인터리빙, 모듈 선택시 하위인터리빙`,remark:null,image:["static/images/cellImage_600070591_29.jpg"]},{index:93,topic:"메모리 인터리빙방식",define:"하위, 상위, 혼합 인터리빙",head:"",remark:null,image:["static/images/cellImage_600070591_30.jpg"]},{index:94,topic:"메모리 인터리빙엑세스",define:`C-엑세스 : 순차 접근
S-엑세스 : 동시 접근`,head:"",remark:null,image:["static/images/cellImage_600070591_31.jpg"]},{index:95,topic:"Endian(엔디안)",define:`- 메모리 저장방식
- 컴퓨터의 메모리와 같은 1차원 공간에 여러 개의 연속된 대상을 배열하는 방법
- Byte ordering(바이트를 배열화는 방법)`,head:`-빅 엔디안
: 큰 단위가 앞에 나오는 것. 최상위 바이트(MSB)부터 차례대로 저장 
-리틀 엔디안
: 작은 단위가 앞에 나오는것. 최하위 바이트(LSB)부터 차례대로 저장
-미들 엔디안
:�두 경우에 속하지 않거나 둘을 모두 지원하는 것`,remark:null,image:["static/images/cellImage_600070591_32.jpg"]},{index:96,topic:"슬랙공간",define:"- 저장매체의 물리적인 구조와 논리적인 구조의 차이로 발생하는 낭비 공간",head:`램드파볼
램 슬랙: 섹터에 남는 비할당 영역
드라이브 슬랙: 클러스터의 사용시 남는곳
파일시스템 슬랙: 램슬랙+드라이브슬랙
볼륨 슬랙: 전체 볼륨 크기와 파티션 크기 차이

* 섹터, 클러스터, 램슬랙, 드라이브슬랙`,remark:null,image:["static/images/cellImage_600070591_33.jpg"]},{index:97,topic:"비메모리 반도체",define:`- 시스템 산업의 기틀
- 데이터 저장하는 메모리 반도체와 달리
 중앙처리장치(CPU)처럼 데이터를 해석, 계산, 처리하는 반도체
- 데이터의 연산이나 제어 등 정보처리 역할을 수행하는 목적으로 제작된 반도체`,head:`목적: 정보처리
생산방식: 다품종 소량 생산
기술성: 설계 및 SW 기술력`,remark:`* 활용
스마트기술: 5G 이동통신, 스마트 자동차, 
지능형 로봇, 실감형 컨텐츠
신사업부문: 심해저 플랜트, 맞춤형 웰니스케어, 재신관리스마트시스템`,image:[]},{index:98,topic:"ㄴ반도체산업Value Chain",define:"- 디자인 > 생산 > 패키징 > 테스팅",head:"",remark:`기업유형 : 팹리스, 파운드리, 조립, 검사
IDM: 전체공정 수행`,image:["static/images/cellImage_600070591_34.jpg"]},{index:99,topic:"인공지능 반도체, 뉴로모픽 반도체",define:`- 인간의 뇌구조를 닮은 저전력 인공지능
- 인간의 두뇌를 모방하여 데이터의 저장과 처리요소를 통합한 뉴런을 병렬로 구성함으로써 확장성과 초저전력을 가진 차세대 아키텍처 기술
- IT 융합제품에서 지능형 서비스를 수행하는 소프트웨어와 시스템반도체가 융합된 지능형 전자 부품`,head:`시냅스 모방소자, 회로기술
스파이킹 뉴럴 네트워크`,remark:`* 딥러닝 프로세스 및 관련 반도체
- 데이터소스>트레이닝>추론`,image:[]},{index:100,topic:"HBM(HighBandwidthMemory)",define:`- 차세대 초고성능 컴퓨팅 지원
- 3차원 TSV 기술을 적용해 D램 칩에 수천개의 홀을 뚫고 상하를 연결함으로써 데이터 처리속도를 혁신적 개선한 메모리 프로덕트
- 고대역폭 메모리로 메모리 다이를 
적층해 대역폭을 크게 높이는 기술 사용`,head:`-메모리 적층화
:TSV,DRAM� Die, Base Die, Micro�Bum
-칩셋구성
:SoC, PHY, Silicon�Interpose,Package�Substrate
-적층화 기법
:TSV, CoW, TCB, TN-CNF, MR-MUF
:하이브리드 본딩`,remark:`- 장점 
: 짧은 레이턴시,높은 대역폭,작은 면적,저전력
- 단점 
: 높은 구현 난이도, 메모리 용량 확장성 한계`,image:[]},{index:101,topic:"PIM(ProcessingInMemory)",define:"프로세싱 유닛이 메모리 셀과 같이 패키징되어 메모리 반도체와 시스템 반도체의 기능을 합한 지능형 반도체",head:"반도체 시장이 AI 중심으로 재편되어가며 전력 손실이나 데이터 지연을 극복하는 기술로 PIM 관심 지속 상승",remark:"메모리 벽(Memory Wall) 문제 해결",image:[]},{index:102,topic:"PNM(ProcessingNearMemory)",define:`- 메모리와 프로세서가 서로 다른 다이 
위에 구현되어 다이 차원에서 연결되는 구조
- 몇 개의 단으로 적층된 메모리 다이들 
중 하나가 연산을 담당하게 되는 방식의 융합형 반도체`,head:`-특징
: 고속 연산 처리
: 메모리 벽(Memory Wall) 문제 극복`,remark:"빅데이터 환경에서 인공지능 연산에 특히 유용하게 활용",image:[]},{index:103,topic:"VHDL(VHSIC�Hardware�Description�Language)",define:`- 디지털 회로 및 혼합 신호(mixed-signal, 아날로그 신호 포함)를 표현하는 하드웨어 기술 언어
(IEEE1076)`,head:`PEAC
-구성요소
:Package, Entity, Architecture, Configuration`,remark:null,image:[]},{index:104,topic:"Packaging(패키징)",define:"- 반도체 칩의 데이터 입력, 출력 단자를 외부와 연결하는 작업으로서 반도체 칩을 물리적으로 보호하고 상호 배선 및 전력 공급을 위해 필요한 공정",head:`SoB: CPU와 구체적인 물리 계층을 보드하나에 올리는 방식
SoC: 시스템 레벨의 모든 기능을 하나의 단일 칩에 집적하는 방식
SiP: 서로 다른 부품이나 IC를 하나의 패키지로 통합하는 방식`,remark:null,image:["static/images/cellImage_600070591_35.jpg"]},{index:105,topic:"PLD(Programmable Logic Device)",define:`- 프로그래머블 반도체
- 소자에 설계 데이터를 저장할 수 있는 메모리를 탑재하고 외부로부터 전달받은 데이터에 맞춰 반도체 회로를 구성해서 동작함`,head:`CPLD: 블럭조합 
FPGA: 회선에 로직구현`,remark:null,image:["static/images/cellImage_600070591_36.jpg"]},{index:106,topic:"Chiplet(칩렛)",define:`- 반도체 미세공정 한계 극복
- 프로세서를 구성하는 작은 구성 단위로 각기 다른 기능을 수행하는 반도체를 하나의 패키지로 만드는 기술`,head:"",remark:null,image:["static/images/cellImage_600070591_37.jpg"]},{index:107,topic:"SSD(Solid State Disk)",define:"- NAND 플래시 또는 DRAM 등 초고속 반도체 메모리를 이용한 대용량 저장장치",head:`- SSD Controller
- DRAM
- Host Interface
- Memory Block`,remark:null,image:["static/images/cellImage_600070591_38.jpg"]},{index:108,topic:"ㄴWrite Cliff(쓰기 절벽)",define:"- 새로운 쓰기 부하가 블록을 지워 나가는 SSD의 능력을 넘어서는 경우, 성능이 갑자기 크게 떨어져 버리는 쓰기절벽현상 발생",head:"",remark:`* 해결방안
메모리 셀 오버 프로비저닝, 
웨어-레벨링, 
가비지 컬렉션, 
FMD(플래스 모듈 드라이브)`,image:["static/images/cellImage_600070591_39.jpg"]},{index:109,topic:"RAID(Redundant Array of Independent Disks)",define:"- 처리속도, 데이터 보호를 목적으로 여러 DISK를 중복성을 가진 하나의 논리적인 Disk로 변환하는 저장장치",head:`* 원리
Data Stripping: 데이터를 나누어 분산저장하고 동시 Access 지원
Redundancy(Mirroring): Data 중복 저장`,remark:`영스, 일미, 이비, 삼바, 사블, 5분, 6패, 
0+1, 1+0`,image:[]},{index:110,topic:"RAID 원리",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_40.jpg"]},{index:111,topic:"RAID 원리",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_41.jpg"]},{index:112,topic:"NW Storage",define:`- 다양한 NW기반 환경을 이용하여 데이터의 입출력 및 스토리지를 관리하는 기술
- DAS : 서버가 채널통해 스토리지 직접연결
- NAS : 인터넷을 통해 스토리지 연결
- SAN : 서버가 Fiber 채널 스위치를 통해 Any-to-Any 연결`,head:"",remark:null,image:["static/images/cellImage_600070591_42.jpg"]},{index:113,topic:"ㄴIP-SAN",define:`- IP 프로토콜 기반으로 SAN 스토리지에 연결하여 데이터를 접근하는 기술
- 캡슐화 통신, 표준기반, 원거리 구축, 저렴한 비용, 보안성(IPSec지원)`,head:`FCIP
: 광역FC, TCP/IP내에 FC프레임 캡슐화
iFCP
: iFCP 게이트웨이 사용
iSCSI
: SCSI명령을 IP패킷 캡슐화
: IO블록 Data는 TCP/IP 네트워크 통해 전달`,remark:"-",image:[]},{index:114,topic:"ㄴSDS(Software Data Storage)",define:"- 데이터센터 차원에서 소프트웨어로 구현된 컨트롤러가 전체 저장장치 시스템을 관리하는 방식",head:`가용성: Erasure coding, Replication, RAID,
Checksum
호환성: Restful API, Standard Interface`,remark:`사용자 편의성: 오브젝트, 파일, 블록 저장장치 인터페이스
관리 편의성: 자동화 정책기반, 중앙 집중형`,image:[]},{index:115,topic:"가상 테이프 라이브러리 (Virtual TapeLibrary,VTL)",define:`- 디스크 테이프처럼 사용할 수 있도록 테이프 라이브러리로 에뮬레이션 한 솔루션으로
백업/복구의 성능 및 안정성의 향상을 목적으로 한 백업 저장 솔루션`,head:`유형
- 일체형 VTL
- 분리형 VTL`,remark:null,image:["static/images/cellImage_600070591_43.jpg"]},{index:116,topic:"데이터 접근방식",define:"",head:"토픽 추가",remark:null,image:["static/images/cellImage_600070591_44.jpg"]},{index:117,topic:"I/O 장치제어기",define:"- CPU로부터 I/O명령을 받아서 해당 I/O 장치를 제어하고, 데이터를 이동함으로써 명령을 수행하는 전자회로 장치",head:"",remark:null,image:["static/images/cellImage_600070591_45.jpg"]},{index:118,topic:"ㄴ메모리I/O",define:`Memory Mapped IO: 주기억장치 일부 주소릴 입출력장치에 할당
IO Mapped IO: 인터페이스 주소와 메모리 주소를 구별하여 지정`,head:"-",remark:null,image:[]},{index:119,topic:"ㄴBlocking 여부",define:`Blocked I/O: I/O작업이 진행되는 동안 유저 프로세스는 자신의 작업을 중단한 채 대기
Non-Blocked I/O: 커널에게 I/O요청 함수를 호출하면, 함수는 I/O를 요청한 다음 진행 상황과 상관없이 바로 결과 반환`,head:"-",remark:null,image:[]},{index:120,topic:"인터페이스",define:"- 컴퓨터 시스템의 입출력 장치와 내부 시스템 간의 Data 전송 및 입출력을 담당하는 장치 및 기술",head:`- 노스브릿지: 소수의 고 대역폭 통신이 필요한 장치 사이 연결
- 사우스브릿지: 저속 I/O 장치와 Data 버스들과 노스브릿지 사이 연결`,remark:null,image:["static/images/cellImage_600070591_46.jpg"]},{index:121,topic:"ㄴPCI(Peripheral�Component�Interconnection)�Express",define:`- Device간 데이터 전송bus를 Serial로 구현한 Interface로서 Differentia�구조를 채 택하여 송신과 수신을
각각 별도의 회선을 이용함으로써 고속의 데이터 전송을 지원 하는 I/O�연결 방식`,head:"",remark:null,image:[]},{index:122,topic:"ㄴCXL(Compute�Express�Link)",define:"- CPU, GPU, 메모리, 가속기 등 이종(heterogeneous) 컴퓨팅 자원을 고속·저지연으로 연결하기 위한 개방형 인터커넥트 표준",head:`-Protocol
:CXL.io,CXL.cache, CXL.memory 
-Device Type
:Type 1  메모리 없는 CXL디바이스와 호스트 프로세서가 연결
:Type 2  메모리 연결된 CXL디바이스와 호스트 프로세서가 연결
:Type 3  호스트 프로세서가 메모리 풀에 접근
-Version
:1.0 단일 호스트와 단일 장치 간 일대일 통신
:2.0 메모리 풀 시스템에 연결 가능
:3.0 CPU와 메모리 풀 간 통로들이 일원화`,remark:null,image:["static/images/cellImage_600070591_47.jpg"]},{index:123,topic:"ㄴ썬더볼트5",define:`- 최대 120Gbps 데이터와 디지털 영상을 동시에 전송 가능한 코드명 라이트피크로 시작된 인텔의 차세대
데이터 전송규격, (Type C interface 채용)`,head:"",remark:"설명 보완",image:["static/images/cellImage_600070591_48.jpg"]},{index:124,topic:"ㄴDMA(Direct MemoryAccess)",define:`- 메모리 버퍼, 포인터, 카운터를 사용하여 장치 제어기가 CPU의 개입 없이 DMA컨트롤러를 이용하여 IO장치와 메모리 사이의 데이터를 전송하는 입출력 방식

- 인터럽트 최소화, 데이타 직접 전송`,head:`* 동작모드 : 사버인
사이클스틸링: 짧은 시간 권한 부여 후 스틸
버스트모드: DMA가 버스 사용권 획득하면 데이터 전송완료 시까지 사이클 독점
인터리브드: CPU가 시스템 미사용시 사용

CDIM`,remark:null,image:["static/images/cellImage_600070591_49.jpg"]},{index:125,topic:"Fault Tolerance(내고장성)",define:"- 하드웨어적, 소프트웨어적 고장이 발생하더라도 이에 영향을 받지 않고 설계상에 명시된 기능을 수행할 수 있는 능력",head:`* 결함 해결 단계
탐진통복: 결함탐지, 결함진단, 결함통제, 결함복구`,remark:`* 가용성 확보전략
-HW(듀스티와셀)
: Duplication with Comparison, StandbySparing
:TMR, WDT, SelfPurgingRedundancy
- DB(로체그)
:Rollback,CheckPoint, ShadowPaging 
-SW: 첵레컨디NN
:Checkpointing,RecoveryBlock ,Conversation
:Distributed RecoveryBlock,
:NSelf-checkingProgramming, NversionProgramming
-데이터: 파티 M C 햄 버거
:Parity Code ,M of N Code ,Checksum
:Berger Code ,Hamming ErrorCorrecting Code`,image:[]},{index:126,topic:"ㄴWDT(Watchdog Timer)",define:`- 시스템 문제 발생시 스스로 복구하지 못하면, 일정시간 지난 후 자동으로 특정 연산을 수행하도록 프로그램된 장치 
- Kick을 날려서 확인`,head:`Kick: Timer의 시작 및 종료
Timeout: 시간이 0이되면 예정된 동작 수행
Corrective Action: Timer 의해 가동되는 동작들
Enable: 후행 타이머 동작 리셋
Reset: 컴퓨터 리셋 동작 지시
Clock: clock 주기에 맞춰 카운트다운`,remark:null,image:["static/images/cellImage_600070591_50.jpg"]},{index:127,topic:"HA(High Availability)",define:`- 두 대 이상의 시스템을 하나의 
클러스터로 묶어서 한 시스템의 장애시 클러스터내의 다른 시스템이 신속하게 서비스를 Failover해 최소한의 서비스 중단을 이루려는 기능
- failover time: 30~300초`,head:`Hot Standby: 운영 시스템과 백업 시스템으로 구성
Mutual Takeover: 2개의 시스템이 각각 고유한 업무 수행, 한 서버 장애시 상대 시스템 자원을 failover하여 동시에 2개 업무 수행
Concurrent Access: 여러시스템이 동시에 업무를 나누어 병렬처리 하는 방식, 참여 시스템 전체가 Active 한 상태로 업무 수행`,remark:null,image:["static/images/cellImage_600070591_51.jpg"]},{index:128,topic:"가상화(Virtualization)",define:"- 물리적으로 서비스, 장비 등을 통합하고 논리적으로 재구성하여 다른 물리적인 객체와 호환되도록 만드는 기술",head:`* 가상화 원리
Sharing: 물리적으로 위치한 자원을 사용자에게 나누어 사용할 수 있도록 함(파티셔닝, VLAN)
Aggregation: 분산자원을 통합하여 논리적으로 단순화, 활용성 향상, 관리 용이(클러스터링)
Emulation: 논리적 객체는 물리적 객체와 동일한 수행 가능(VTL, 에뮬레이터)
Insulation: 물리적인 자원의 교체나 변경에도 안정적 서비스 유지(RAID, HA, L4)`,remark:`* 가상화 종류
- 서버 가상화: 서버내 가상화, 서버들 간 가상화
- 스토리지 가상화: 블록 가상화, 파일 가상화, 테이프 가상화
- 네트워크 가상화`,image:[]},{index:129,topic:"서버 가상화",define:`- 서버의 물리적 자원들을 논리적 통합
하나의 서버를 통해 서비스를 받는 것처럼 느껴지게 하는 기술`,head:`- 하이퍼바이저 가상화: 전가상화, 반가상화
- OS Level 가상화(Host기반)`,remark:"-",image:[]},{index:130,topic:"ㄴ하이퍼바이저",define:`- 논리적 가상화 플랫폼
- 하나의 호스트 컴퓨터 상에서 동시에 다수의 OS를 구동시킬 수 있는 HW와 OS사이의 얇은 SW가상화 플랫폼`,head:`Type1(Bare-metal/Native)
- Host OS가 따로 없이 하이퍼바이저가 해당 하드웨어에서 직접 실행`,remark:null,image:["static/images/cellImage_600070591_52.jpg"]},{index:131,topic:"ㄴ하이퍼바이저",define:`- 논리적 가상화 플랫폼
- 하나의 호스트 컴퓨터 상에서 동시에 다수의 OS를 구동시킬 수 있는 HW와 OS사이의 얇은 SW가상화 플랫폼`,head:`Type2(Hosted)
- 호스트OS에 의해 OS가 관리되는 구조`,remark:null,image:["static/images/cellImage_600070591_53.jpg"]},{index:132,topic:"ㄴㄴ하이퍼바이저 Type1",define:`- type1=native=bear metal 
하이퍼바이저는 전가상화, 반가상화 방식으로 세분화가 가능`,head:`* 전가상화
- 게스트 os를 호스트와 완전히 분리
- 게스트 OS는 하드웨어 자원을 요청하기 위해 반드시 하이퍼바이저가 중재해야함 
- 하드웨어 모두 가상화`,remark:null,image:["static/images/cellImage_600070591_54.jpg"]},{index:133,topic:"ㄴㄴ하이퍼바이저 Type1",define:`- type1=native=bear metal 
하이퍼바이저는 전가상화, 반가상화 방식으로 세분화가 가능`,head:`* 반가상화
- 게스트os 커널을 일부 수정하여 하드웨어와 인터렉션 
- 게스트OS 일부 수정하여 필요한 하드웨어 자원 직접 요구 가능`,remark:null,image:["static/images/cellImage_600070591_55.jpg"]},{index:134,topic:"ㄴOS Level 가상화Type�- 2",define:`- 하나의 운영체제 환경을 
복수의 운영체제 환경으로 분할하는 서버 가상화 기술
- Virtual Machine으로 가상환경 구성`,head:`* 전가상화: 
반가상화: 게스트os 직접 수정`,remark:null,image:["static/images/cellImage_600070591_56.jpg"]},{index:135,topic:"데스크탑 가상화(VDI)",define:"- 중앙 데이터센터의 서버 자원을 이용해 데스크탑 업무환경을 개발 사용자에게 네트워크 상에서 제공하는 컴퓨팅 환경",head:"-",remark:"DaaS : 클라우드 기반의 데스크탑 가상화",image:[]},{index:136,topic:"컨테이너 가상화",define:"- 가상화 계층이 호스트의 운영체제 내에 임베디드 형태로 구성되고 각 애플리케이션 별로 컨테이너를 생성해 격리하는 가상화 방식",head:`특징 
: 격리와 컨테이너, 경량성, OS 레벨(리눅스)`,remark:"-",image:[]},{index:137,topic:"리눅스 컨테이너(LXC)",define:`- 리눅스 커널 가상화 구현
- 단일 컨트롤 호스트 상에서 여러 개의 고립된 리눅스 시스템들을 실행하기 위한 운영 시스템 레벨 가상화 지원 환경`,head:`Libvirt: 실제 가상화 수행
cgroups: cpu, 메모리, nw 자원할당
namespace: 격리시키는 기준
PAM, SELinux: 보안통제기법`,remark:null,image:[]},{index:138,topic:"도커(Docker)",define:`- 워크로드의 빠른 배포 지원
- 하이퍼바이저 없이 리눅스 컨테이너(LXC) 기술을 바탕으로 애플리케이션을 격리된 상태에서 실행하는 가상화 솔루션
- OS레벨 가상화`,head:`* 구성요소 
- 이미지: 필요한 프로그램과 라이브러리, 소스를 설치한 뒤 파일로 만든 것
- 컨테이너: 이미지를 실행한 상태
- LXC(리눅스 컨테이너)
- 도커 엔진
- 도커 허브
* 도커 관리도구
도커 스웜 모드, 쿠버네티스, 메소스피어 마라톤`,remark:null,image:["static/images/cellImage_600070591_57.jpg"]},{index:139,topic:"도커",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_58.jpg"]},{index:140,topic:"쿠버네티스",define:`- 컨테이너 오케스트레이션 플랫폼
- 컨테이너화된 애플리케이션의
배포, 확장 및 관리의 자동화를 지원하는 오픈 소스 기반 플랫폼`,head:`* 구성요소
Master, Node(Worker Node), Pod
Replication controller,
Kube-proxy, kubelet, kubectl`,remark:"서비스 디스커버리, 스케쥴링, 로드밸런싱, 클러스터링, 로깅, 모니터링",image:[]},{index:141,topic:"쿠버네티스",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_59.jpg"]},{index:142,topic:"컨버지드 인프라(CI)",define:`- IT 인프라의 민첩성과 유연성 확보
- 서버, 스토리지, 네트워크 등 인프라 통합하고 이를 프로비저닝하고 관리할 수 있는 소프트웨어를 함께 제공하여 효율적인 물리적 인프라 관리를 가능하게 하는 통합 어플라이언스`,head:"Server Pool, Storage Pool, Network, Management SW, Power&Cooling",remark:null,image:["static/images/cellImage_600070591_60.jpg"]},{index:143,topic:"하이퍼컨버지드(HCI)",define:`- 컨버지드 인프라와 SDDC의 결합
- 컨버지드 인프라에 SDDC 개념이 추가되어 가상화 자원의 Scale-sout 등의 효율적인 관리가 가능한 어플라이언스
- 랙 서버에 수 많은 내장 디스크를 탑재 후 가상화 클러스터화하여 랙 서버 형태로 제공되는 스케일 아웃 인프라 솔루션`,head:`인프라를 함수처럼 호출해서 사용
유동자원풀
소프트웨어 정의 인텔리전스
통합 API`,remark:null,image:["static/images/cellImage_600070591_61.jpg"]},{index:144,topic:"컴포저블 인프라",define:`- Infrastructure as a Code
- 소프트웨어 정의 인프라를 이용하는 어떠한 워크로드에 대해서도 신속하게 IT 리소스를 배포할 수 있게 해주는 아키텍처
- 가상화 환경 구축없이 HW, SW 자원 유연하게 사용
- 안전한 자체 데이터센터에서 클라우드의 속도와 유연성 제공`,head:`* 핵심기능(유소통)
유동자원풀, 소프트웨어 정의 인텔리전스, 통합API

* 벤터종속성 탈피`,remark:"* 코드형 인프라(IaC)는 인프라 관리를 데이터 센터의 물리적 하드웨어에서 가상화, 컨테이너, 클라우드 컴퓨팅으로 전환할 수 있도록 지원",image:[]},{index:145,topic:"컨피덴셜 컴퓨팅(Confidential�Computing)",define:`- 데이터 저장(atrest)및 전송(intransit)시 암호화에 이어 처리 과정 중(inuse)에도 암호화를 유지하는 기술
- 메모리 내 데이터 보호,신뢰 실행 환경(TEE)활용`,head:`* 구성요소
신뢰실행 환경 : TEE
실행증명 : 검증자/증명자 무결성 확인 기술
주변 장치 : HW 칩, GPU,NIC. FPGA
시스템 소프트웨어 : ECALL/OCALL
응용 암호화 : 완전동형암호, SMPC`,remark:null,image:["static/images/cellImage_600070591_62.jpg"]},{index:146,topic:"운영체제",define:"",head:"",remark:null,image:["static/images/cellImage_600070591_63.jpg"]},{index:147,topic:"운영체제",define:"- 사용자가 컴퓨터를 원할히 사용할 수 있도록 시스템을 제어하며 컴퓨터와 사용자간의 상호교신을 담당하는 시스템 소프트웨어",head:`- 사용자: 프로그램 수행, 입출력 연산, 
파일 시스템 조작, 통신, 오류탐지
- 시스템: 자원할당, Accounting, 보호`,remark:"프로세스 관리, 보조기억장치관리, 파일관리, 장치관리, 메모리관리, 시스템보호, 네트워킹, 명령어 해석",image:[]},{index:148,topic:"OS 주요기능",define:"시스템 자원관리와 프로그램을 위한 인터페이스 역할 수행",head:"프보파장메시네명",remark:"프로세스관리, 보조기억장치관리, 파일관리, 장치관리, 메모리관리, 시스템보호, 네트워킹, 명령어 해석",image:[]},{index:149,topic:"임베디드 OS",define:"임베디드 시스템의 HW와 SW를 제어하고 인터페이스 역할을 하면서CPU, 주기억장치, 입출력장치 등의 컴퓨터 자원을 관리하는 시스템 프로그램",head:`* 임베디드OS 특징 
: 소형커널, 저전력/빠른 부팅, 
고신뢰성/실시간성, 성능 최적화`,remark:`* 활용사례 
: ROS, 타이젠OS, Tiny OS, NanoQplus, ccOS, NEOS`,image:[]},{index:150,topic:"커널(Kernel)",define:"- 시스템 하드웨어와 User Application 연동을 위하여 보안, 자원관리, 추상화를 수행하는 운영체제 제공서비스 프로그램",head:`모마하
모놀리식 커널: 모든 기능 구현 커널
마이크로 커널: 핵심기능 구현 커널
하이브리드 커널`,remark:null,image:["static/images/cellImage_600070591_64.jpg"]},{index:151,topic:"커널 종류",define:"모놀리식, 마이크로, 하이브리드, 유니커널",head:`① 모놀리식 커널 : 커널 ↔ SW
② 마이크로 커널 : 커널 ↔ Server / SW
③ 하이브리드 커널 : Server(커널) ↔ SW
④ 유니 커널 : 독립적 커널`,remark:null,image:[]},{index:152,topic:"ㄴ유니커널",define:`- 응용프로그램의 독립 커널 지원
- 필요한 운영체제의 기능을 라이브러리 형태로 포함하여 개별 응용만의 독립적인 커널을 제공하는 환경
- 클라우드 환경에서 유용`,head:`* 기술유형
OSv
MirageOS
includeOS
Rumprun`,remark:null,image:["static/images/cellImage_600070591_65.jpg"]},{index:153,topic:"시스템 콜",define:`- 사용자에게 커널 레벨의 작업을 수행할 수 있도록 특권을 부여하는 인터페이스 함수

- 커널모드: 특권 명령어 실행과 원하는 작업 수행을 위한 자원 접근 가능 모드
- 사용자모드: 사용자별 프로그램 실행`,head:`사라소시가 : 사용자 프로그램 > 라이브러리 > SW인터럽트 > 시스템호출 > 가상파일시스템

<시스템 콜 종류>
프로세스 관리 : fork(), execve(), getpid(), signal()
메모리 관리 : brk()
파일시스템 : open(), read(), write(), close()`,remark:null,image:["static/images/cellImage_600070591_66.jpg"]},{index:154,topic:"부팅절차",define:"주기억장치에 운영체제를 적재하여 사용자가 컴퓨터 시스템을 이용할수 있도록 하는 절차",head:`* 절차(전보자주부운)
전원공급>BIOS실행>자체진단수행>주기억장치에 부트로더 적재>부트로더가 운영체제 적재>운영체제 구동

* 유닉스 부팅절차 : ROM-BIOS 실행 > 부트로더 로딩 > 커널 로딩 > init 프로세스 생성`,remark:null,image:["static/images/cellImage_600070591_67.jpg"]},{index:155,topic:"부트로더",define:`운영체제가 시동되기 이전에 미리 실행되면서 커널이 올바르게 시동되기 위해 필요한 모든 관련
 작업을 마무리하고 최종적으로 운영체제를 시동시키기 위한 프로그램`,head:"-",remark:`* 유형(LGBU)
-(X86) LILO, GRUB
-(ARM) BLOB, U-BOOT`,image:[]},{index:156,topic:"UEFI(Unified Extensible Firmware Interface)",define:"- 운영체제와 HW 플랫폼 내의 펌웨어 사이에 존재하여 Fast Booting을 하기위한 Application",head:"OS 추상화, GUID 파티션 Table, Secure Boot, 확장형 Platform 환경, GUI 환경",remark:null,image:["static/images/cellImage_600070591_68.jpg"]},{index:157,topic:"프로세스",define:`- 메모리에 로드되어 CPU에 의해 
실행되고 있는 프로그램
- 레지스터, 스택, 포인트, 프로그램, 
데이터 등의 집합체`,head:"- 특징 : 우선순위, 상태전이",remark:null,image:["static/images/cellImage_600070591_69.jpg"]},{index:158,topic:"ㄴ프로세스 상태",define:`- 프로세스가 실행되는 생애 주기 동안 운영체제 내부에서 가지는 현재의 처리 단계를 구분한 실행 흐름상의 구분

- 활성 상태(Active State)
: 생성중(new), 준비상태(ready), 실행상태(excute), 보류상태(wait), 종료(terminate)
- 보류 상태(SuspendedState)
: SuspendedReady,SuspendedWaiting`,head:"",remark:null,image:["static/images/cellImage_600070591_70.jpg"]},{index:159,topic:"ㄴ 프로세스 문맥(Process�Context)",define:`- 프로세스가 실행되던 중 특정 시점에서 
실행 상태를 구성하는 모든 정보의 집합(문맥교환 시 사용 되는 정보)`,head:`- 하드웨어 문맥
: Program�Counter, Register
- 메모리 문맥
: Code, Data, Heap, Stack
- 커널 문맥
: Data-PCB, Stack�-Kernel�Stack
- 공통 자원
: Kernel� Stack, Code�, �Data`,remark:null,image:[]},{index:160,topic:"ㄴ프로세스 제어블록(PCB)",define:`- 특정한 프로세스를 관리할 필요가 있는 정보를 포함하는 운영 체제 커널의 자료 구조
- 모든 프로세스는 고유 PCB 보유`,head:"상식부자 할메카레",remark:"상태, 식별자, 부모포인터, 자식포인터, 할당I/O정보, 메모리, 카운터, 레지스터",image:[]},{index:161,topic:"PCB 구성정보",define:`- 문맥교환은 PC 교체 과정
- 과도한 멀티프로그래밍은 오버헤드 초래`,head:"",remark:null,image:["static/images/cellImage_600070591_71.jpg"]},{index:162,topic:"ㄴ프로세스 스케줄링",define:`- 프로세스를 빈번하게 바꾸어 가면서 실행하여, 사용자들이 프로그램과 상호 작용하게 하는 일련의 활동
- CPU 효율을 높이기 위해 프로세스 항상 실행 될 수 있도록 
실행시간, 우선순위 등을 정하는 행동`,head:`스케줄링 큐 : 작준장대 
스케줄러 : 장중단`,remark:`- 작업, 준비, 장치, 대키큐
- 장기, 중기, 단기`,image:[]},{index:163,topic:"ㄴㄴ스케줄링 큐",define:`- 종류 : 작준장대 
- 큐의 노드는 PCB, 링크드 리스트 구조`,head:`- 작업 큐: 시스템 도착하여 대기하는 큐
- 준비완료 큐: 주기억장치에 적재되어 실행 대기 큐
- 장치 큐: 장치를 사용하기 위해 기다리는 큐
- 대기 큐: 특정한 사건마다 사건을 기다리는 프로세스 유지 큐`,remark:"각 큐마다 다음 차례의 프로세스를 결정하여 주는 스케줄러 존재",image:[]},{index:164,topic:"ㄴㄴ스케줄러",define:`장중단
장기: 메모리와 디스크 사이(보류>준비)
중기: 메모리와 디스크 사이(대기>보류)
단기: CPU와 메모리 사이(준비>실행)`,head:"",remark:null,image:["static/images/cellImage_600070591_72.jpg"]},{index:165,topic:"ㄴㄴㄴ프로세스 상태전이도",define:"- 멀티프로세스 시스템 사용시 프로세스 생성부터 종료까지 성능 최적화를 위한 프로세스 제어기법",head:`* 상태 전이 
1) Dispatch(준비->실행)
- 프로세스 생성상태에서 자원 할당시 실행상태로 전이 
2) Timeout(실행->준비)
- 일정 시간이 지나면 스케쥴러에 의해 자원반납 후 준비상태로 전이
3) Block/Sleep(실행->대기)
- 자원요청 후 즉시 할당 불가시, 할당받을때까지 기다리고 있는 상태로 전이
4) Wake up(대기->준비)
- 필요자원이 할당되면 프로세스는 준비상태로 전이`,remark:`5) Swap-out(준비/대기->지연)
- 자원부족, 기억장치 손실시 자원회수 후 중단 
- 메모리에서 디스크로 swap-out 
6) Swap-in(지연->준비/대기)
- 기억장치가 다시 할당되는 경우 준비상태로 전이 
- 디스크에서 메모리로 swap-in`,image:[]},{index:166,topic:"ㄴㄴ문맥교환(Context Switching)",define:`- 멀티프로세스 환경에서 실행중인 프로세스 상태를 PCB에 보관하고 새로운 프로세스의 상태를 CPU에 적재하는 과정

- 비자발적 문맥 교환(실행>준비) 
: 타임슬라이스 소진, 인터럽트 발생 시

- 자발적 문맥 교환(실행>대기) 
: Sleep, Exit, Wait 시, 
캐시와 TLB 많은 미스 발생`,head:"",remark:null,image:["static/images/cellImage_600070591_73.jpg"]},{index:167,topic:"문맥교환 최소화",define:"잦은 문맥교환은 PCB에 저장, 복귀하는 작업이 반복되어 오버헤드 발생",head:`<오버헤드 최소화 방안>
① 다중 프로그래밍 최소화
② 스택 포인터 변경하여 프로세스간 문맥교환 수행(스택 중심 시스템)
③ 스레드(경량 프로세스) 이용하여 문맥교환 부하 최소화`,remark:null,image:[]},{index:168,topic:"스레드(Thread)",define:"- 하나의 프로세스에 포함되어 프로세스의 특성 중 일부 기능만을 수행하도록 된 Light Weight 프로세스",head:"* 특징 : 문맥교환 부담 줄여 성능향상, 병렬성, 독립적 스케줄링",remark:`- 장점 : 모든 스레드는 커널이 관리(문맥교환 최소화) 
- 단점 : 스레드 전환을 위한 커널 스케줄링 정책 필요`,image:[]},{index:169,topic:"멀티스레드",define:"- 여러 개의 스레드를 사용해 하나의 수행 업무를 동시에 처리하자는 개념",head:"* 특징 : 힙, 공유데이터, 코드 등을 모든 스레드가 공유",remark:`- 장점 : 프로세스 통신, PCB 등 발생이 최소화
- 단점 : 문맥교환, 병목현상 발생 가능성`,image:[]},{index:170,topic:"스레드 제어 블록(TCB)",define:"- 스레드의 실행시간 동안 상태정보를 유지하기 위해 관리되는 데이터 구조",head:"상식카레포",remark:"식별자, 상태, 프로그램 카운터, 레지스터, 상/하위 포인터",image:[]},{index:171,topic:"PCB / TCB 비교",define:`PCB : 특정한 프로세스를 관리할 필요가 있는 정보를 포함하는 운영체제 커널의 자료구조, 자원할당

TCB : Thread의 실행시간 동안 상태정보를 유지하기 위해 관리되는 데이터 구조, CPU이용

-> Thread 하나 생성시 PCB내에서 TCB가 확장되며 PCB내 TCB를 수용하는 것으로 커널은 Thread를 실현`,head:"",remark:null,image:["static/images/cellImage_600070591_74.jpg"]},{index:172,topic:"인터럽트(Interrupt)",define:`- 컴퓨터시스템 외부, 내부, SW적인 원인으로 CPU가 처리하던 프로그램을 중단하고 컴퓨터 제어를 특수사건이나 환경을 처리할 수 있도록 보내는 제어신호
- 우선순위: 전기외입프스`,head:`전기외입프스
외부HW: 전원이상, 기계착오, 외부신호, 입출력
내부HW: 프로그램 검사
SW: SVC`,remark:null,image:["static/images/cellImage_600070591_75.jpg"]},{index:173,topic:"ㄴ인터럽트 처리방식",define:`<SW적 방식> 
- 인터럽트처리루틴 사용(IPR)
- 폴링: 우선순위가 높은 인터럽트 자원부터 요청 플래그 검사 후 처리 

<HW적 방식>
- 인터럽트 벡터 테이블 사용(IVT)
- 직렬연결(Daisy-Chain): 한 개 회선으로 연결
- 병렬연결(Multiple Interrupt): 개별 회선 연결`,head:`* 인터럽트 수행여부 결정 
- 마스커블 인터럽트: 인터럽트 제어 선택
- 넌마스커블 인터럽트: 무조건 인터럽트 우선처리

- 중첩인터럽트: 인터럽트 처리루틴 실행 중 새로운 인터럽트 발생하는 경우`,remark:null,image:["static/images/cellImage_600070591_76.jpg"]},{index:174,topic:"ㄴ중첩 인터럽트",define:"인터럽트 처리루틴을 실행하는 도중 새로운 인터럽트가 발생하는 경우에 처리 방법",head:"",remark:null,image:["static/images/cellImage_600070591_77.jpg"]},{index:175,topic:"프로세스스케줄링",define:`- 멀티프로세서 환경하에서 프로세스 작업수행을 위해 언제, 어느 프로세스에 CPU를 할당할 것인지를 결정하는 작업 
- 단기 스케줄러가 수행`,head:"스케줄링 기준 : 반대응처CFD",remark:`- 최소화 : 반환시간, 대기시간, 응답시간
- 최대화 : 처리능력, CPU 사용률, Fairness, Deadline`,image:[]},{index:176,topic:"ㄴ프로세스 스케줄링 큐(ProcessSchedulingQueues)",define:"- 운영체제 내에서 프로세스들이 상태에 따라 분류되어 대기하는 자료구조",head:`작업 큐(Job�Queue)
준비 큐(Ready�Queue)
장치 큐(Device�Queue)
대기 큐(Waiting�Queue)`,remark:null,image:["static/images/cellImage_600070591_78.jpg"]},{index:177,topic:"ㄴ프로세스 스케줄러(Process�Scheduler)",define:"프로세스를 선택하여 CPU�등 자원 할당을 결정하는 운영체제의 핵심 모듈",head:`장기 스케줄러(Long-Term� Scheduler)
: 보류→준비
중기 스케줄러(Medium-Term� Scheduler)
: 대기↔보류
단기 스케줄러(Short-Term� Scheduler�)
: 준비↔실행,�실행→대기,�대기→준비`,remark:null,image:[]},{index:178,topic:"ㄴ선점 스케줄링",define:`- 한 프로세스가 CPU를 차지하고 있을 때 우선순위가 높은 다른프로세스가 현재 프로세스를 중지시키고 자신이 CPU를 선점하는 방식
- 프로세스 중단 가능
- 대화식 시분할 시스템 적합`,head:`RR: 동일시간 할당
SRT: 잔여시간이 짧은 작업 우선
MLQ(다단계 큐): 큐별 우선순위 할당
MFQ(다단계 피드백 큐): 큐마다 다른 타임 슬라이스 설정, 큐간 이동 가능
RM, EDF`,remark:"-",image:[]},{index:179,topic:"ㄴㄴRR(Round Robin)",define:"- FCFS의 선점형 변형방식",head:"",remark:"FCFS + Time Slice",image:["static/images/cellImage_600070591_79.jpg"]},{index:180,topic:"ㄴㄴSRT(ShortestRemaining Time)",define:"- 가장 적은 남은 시간 프로세스 교체",head:"",remark:"준비큐에서 잔여 실행시간이 가장 짧은 프로세스를 우선처리",image:["static/images/cellImage_600070591_80.jpg"]},{index:181,topic:"ㄴㄴMLQ",define:"- 준비큐를 여러개 사용하는 스케쥴링 기법",head:"",remark:`- 작업들을 여러종류의 그룹으로 분할
- 준비큐는 개별 큐로 분할`,image:["static/images/cellImage_600070591_81.jpg"]},{index:182,topic:"ㄴㄴMLFQ",define:"- MLQ에서 큐사이를 프로세스가 이동할수 있도록 구성된 기법",head:"",remark:`- 큐마다 서로다른 CPU Time Slice 부여
- 큐 대기시간이 길어질 수록 에이징(Aging)에 의해 우선순위 높아짐`,image:["static/images/cellImage_600070591_82.jpg"]},{index:183,topic:"ㄴ비선점 스케줄링",define:`- 한 프로세스가 CPU를 차지하고 있으면 작업 종료시 까지 다른 프로세스는 CPU 선점 불가
- 프로세스 중단 불가
- 처리편차가 적은 특정 프로세스 환경`,head:`FCFS: 도착 순서에 따라 할당
Priority, DeadLIne, 
SJF: 실행시간이 가장 짧은 작업 우선
HRN(대서서): 우선순위=(대기시간+서비스시간) / 서비스시간`,remark:"-",image:[]},{index:184,topic:"ㄴㄴFCFS",define:"- 도착순서에 따라 CPU할당",head:"",remark:"선입선출 방식",image:["static/images/cellImage_600070591_83.jpg"]},{index:185,topic:"ㄴㄴSJF(Short Job First)",define:"- 실행시간이 짧은 프로세스 우선",head:"",remark:"준비큐에서 작업 실행시간이 가장 짧은 프로세스를 우선처리",image:["static/images/cellImage_600070591_84.jpg"]},{index:186,topic:"ㄴㄴHRN(Highest Respense Ratio Next)",define:`- 서비스시간 + 대기시간 고려한 우선순위
- 우선순위 = (대기시간+서비스시간)/서비스시간`,head:"",remark:"SJF + Aging 기법",image:["static/images/cellImage_600070591_85.jpg"]},{index:187,topic:"ㄴ실시간 스케쥴링",define:`- 실시간 운영체제에서 사용하는 스케줄링 알고리즘
- 실시간 처리 불가능한 작업을 거부함`,head:`*정적
RM : 짧은 주기
DMS : 짧은 마감시간
POSIX FIFO/RR : 우선순위,시간분할(RR)
*동적
EDF : 짧은 마감시간
LLF :적은 여유 시간(Laxity)
MLFQ :피드백 기반`,remark:"* 비교 문제 또는 계산 문제",image:[]},{index:188,topic:"ㄴ멀티 프로세서 환경 스케쥴링",define:`- 여러 태스크를 병렬로 실행하는 
스케쥴링 방식`,head:`SQMS
: 단일 큐, GlobalScheduling
MQMS
: 다중 큐(CPU별), PartitionedScheduling`,remark:null,image:[]},{index:189,topic:"프로세스 동기화",define:"- 하나 이상의 프로그램들이 한 순간에 하나의 CPU에서 처리 될 경우, 각 프로세스 간의 처리 순서 및 상호배제를 통한 자원의 정보를 일치시키는 것",head:"-",remark:`① 병행처리 문제점
② Race Condition
③ 임계영역(Critical Section)
④ 상호배제(Mutual Exclusive)`,image:[]},{index:190,topic:"ㄴRace Condition",define:`- 두 개 이상의 명령어가 동시에 같은 기억장소를 액세스 할 때 그들 사이의 경쟁에 의해 수행결과를 예측할 수 없는 상태
- 동시에 같은 자원을 두 개 이상의 프로세스가 경쟁적으로 사용하려는 상황`,head:`상한진동
- 상호배제 조건
- 한계 대기 조건
- 진행 조건
- 동일조건`,remark:`* 해결방안
① 상호배제
-SW방법:데커,�피터슨,�램포트
-HW방법:Test-and-Set,�Compare-and-Swap
② 동기화
-세마포어, 모니터, 스핀락`,image:[]},{index:191,topic:"ㄴ임계영역(Critical Section)",define:"- 둘 이상의 프로세스가 공유할 수 없는 자원을 임계자원이라고 하며 프로그램에서 임계자원을 이용하는 부분을 임계영역이라 함",head:`상호배제 구현필요
- 뮤텍스
- 세마포어`,remark:null,image:["static/images/cellImage_600070591_86.jpg"]},{index:192,topic:"ㄴ상호배제(Mutual Exclusive)",define:`- 시스템이 어떠한 자원을 한 시점에 한 개의 프로세스 만이 사용할 수 있도록 하는 것
이 자원 부분을 임계영역 내에서 구현함
* 구현방법 : 인사테스 데피빵포`,head:`① [HW적 기법]
- 인터럽트 사용금지
- Test and Set
- Swap`,remark:`② [SW적 기법]
- 데커 알고리즘 
- 피터슨 알고리즘: flag 사용
- 램포트 베이커리 알고리즘: 순서번호 부여
- 세마포어: 변수S, P연산, V연산`,image:[]},{index:193,topic:"ㄴ세마포어(Semaphores)",define:`- 운영체제 자원을 경쟁적으로 사용하는 다중 프로세스에서 행동을 조정 또는 동기화 시키는 기술
- 다중 프로세스 운영체계, 프로그램 작성 내에서 상호배제를 지원하는 매커니즘`,head:`초기화: s=1
P연산: s--, s=0
V연산: s++, s=1

유형 : 이진 세마포어, 카운터 세마포어`,remark:null,image:["static/images/cellImage_600070591_87.jpg"]},{index:194,topic:"ㄴ뮤텍스(Mutex)",define:`- Critical Section을 갖는 스레드들의 동기화를 보장하기 위해 Locking/Unlocking을 사용하여 단독으로 실행하는 기법
- 상호배제`,head:`- Locking, Unlocking
- wait 임계 signal

이진 세마포어 방식과 유사`,remark:null,image:["static/images/cellImage_600070591_88.jpg"]},{index:195,topic:"ㄴ모니터(Monitor)",define:`- 모니터 내의 공유자원을 사용하려면 프로세스는 반드시 모니터의 진입부를 호출해야하는 방법
- 세마포어 타이밍 문제 해결`,head:"",remark:null,image:["static/images/cellImage_600070591_89.jpg"]},{index:196,topic:"ㄴ스핀락",define:`- 임계구역에 진입이 불가능할 때 진입기 가능할 때 까지 루프를 돌면서 재시도 하는 방식으로 구현하는 매커니즘
- Busy Waiting(바쁜 대기) 일종
- 락부담이 적고 사용시간이 짧은 경우 사용`,head:"",remark:null,image:["static/images/cellImage_600070591_90.jpg"]},{index:197,topic:"우선순위 역전",define:`- 우선순위가 높은 태스크가 준비 상태가 되었지만, 우선순위가 더 낮은 타스크가 CPU를 점유하고 있어 실행되지 못하는 상태
- 원인 : 스케줄링과 동기화의 상호작용
(비선점 스케줄링에서 낮은 우선순위 태스크가 자원을 점유할 시 발생)`,head:"",remark:"위치 변경",image:["static/images/cellImage_600070591_91.jpg"]},{index:198,topic:"우선순위 역전 해결기법",define:`상속: 동일자원 공유 시 우선순위 상속
올림: 특정 우선순위 한정
랜덤 Boosting: 무작위로 우선순위 올림
자원공유 금지: 공유자원 자체를 막음
제한기간 허용: 제한된 기간만 허용`,head:"상올랜자제",remark:`- 상속 : 세마포어 획득 작업에 자신의 
우선순위를 부여하여 선점 안되게 처리
- 올림 : 자원 우선순위를 올려 세마포어 작업 우선순위 올림(원천적 문제 해결)`,image:[]},{index:199,topic:"IPC(Inter�Process�Communication)",define:`- 프로세스가 같은 주소 공간을 공유 하지 않아도,�프로세스들 사이에 서로 데이터를 주고받는 행위 또는 그에 대한
방법이나 경로 (동기화)`,head:`- 파일기반
: File, FIFO, Pipe
- 메모리 기반
: Shared Memory,Message Queue,MemoryMap
- 네트워크 기반
: Soket, RPC
- 동기화 전용 
: 세마포어`,remark:null,image:["static/images/cellImage_600070591_92.jpg"]},{index:200,topic:"교착상태(Deadlock)",define:"- 다중 프로그램 환경에서 두 개 이상의 프로세스가 서로 상대방의 자원을 요구하면서 양쪽 모두 작업 수행을 할 수 없는 대기상태",head:"",remark:null,image:["static/images/cellImage_600070591_93.jpg"]},{index:201,topic:"ㄴ교착상태발생조건",define:`① 상호배제: 프로세스가 자원을 배타적으로 점유하여 다른 프로세스가 그 자원을 사용할 수 없음
② 점유와 대기: 한 프로세스가 자원을 점유하고 있으면서 또 다른 자원을 요청하여 대기하고 있는 상태
③ 비선점: 한 프로세스가 점유한 자원에 대해 다른 프로세스가 선점할 수 없음
④ 환형대기: 두개 이상의 프로세스간 자원의 점유와 대기가 하나의 원형을 구성한 상태`,head:"* 발생조건: 상점비환",remark:null,image:["static/images/cellImage_600070591_94.jpg"]},{index:202,topic:"ㄴ교착상태 해결방안",define:`① 예방
- 상호배제를 제외한 나머지 교착상태 발생조건을 부정하는 방안 
-> 점유 자원 해제 후 새 자원 요청
② 회피
- 안전한 상태를 유지할 수 있는 요구만 수락 
-> 뱅커스 알고리즘, Wait-Die/Wound-Wait
③ 발견 
- 시스템의 상태를 감시 알고리즘 통해 교착상태 검사
-> 자원할당 그래프
④ 회복
- 데드락이 없어질때 까지 프로세스를 순차적으로 Kill
- 프로세스 kill, 자원선점`,head:"* 해결방안: 예피발복",remark:`<예시>
① 예방 : 점유자원 해제 후 새 자원 요청
② 회피 : 은행가 Alg, Wait-Die/Wound-Wait
③ 발견 : 자원할당 그래프
④ 회복 : 프로세스 Kill, 자원선점`,image:[]},{index:203,topic:"ㄴㄴ뱅커스 알고리즘(Banker's Algorithm)",define:`- 교착상태 회피기법
- 운영체제는 자원의 상태를 감시하고 사용자 프로세스는 사전에 자기작업에서 필요한 자원의 수를 제시하는 교착상태 회피 알고리즘`,head:`* 상태 
Safe: 모든 프로세스 할당가능 
UnSafe: 모든 프로세스 할당 불가
판단불가: 일부 프로세스만 할당 가능`,remark:`* 판단기준: AMAN
Allocation: 할당 자원 수
Max: 최대 필요 자원
Available: 사용 가능 자원
Need: 현재 필요 자원 수(Max-Allocation)

MAT NA(Max, Allocation, TotalResource, Needs, Available)`,image:[]},{index:204,topic:"ㄴㄴWait-Die(비선점)",define:`- 교착상태 회피기법
- Wait Die
- 프로세스 간의 타임스탬프를 기준으로, 먼저 시작한 프로세스는 대기하고, 나중에 시작한 프로세스는 종료시키는 방식으로 자원 경쟁 시 비선점 기반 교착상태 회피 기법`,head:"",remark:`T1이 T2가 점유하고 있는 자원을 기다리고, 새로온 T3는 Die 시킴
고참은 Wait, 신참은 Die`,image:["static/images/cellImage_600070591_95.jpg"]},{index:205,topic:"ㄴㄴWound-Wait(선점)",define:`- 교착상태 회피기법Wound Wait
- 타임스탬프가 빠른 선행 프로세스가 자원을 선점할 수 있도록 허용하고, 나중에 시작한 프로세스는 자원을 점유한 선행 프로세스에게 양보하며 대기하도록 만드는 선점 기반 교착상태 회피 기법`,head:"",remark:`T1이 T2가 점유하고 있는 자원을 선점하고 T2를 Die, T3는 Wait
고참은 Wound(선점) 신참은 Wait, 현프로세스트 Die`,image:["static/images/cellImage_600070591_96.jpg"]},{index:206,topic:"ㄴㄴ자원할당그래프",define:`- 교착상태 탐지기법
- 교착상태를 쉽게 탐지하기 위해, 유도된 방향으로 표시된 그래프를 이용, 자원 할당 사항과 요구사항을 표현하는 기법`,head:`* 구성
Vertex: 프로세스, 자원
Edge: 요청선, 할당선`,remark:null,image:["static/images/cellImage_600070591_97.jpg"]},{index:207,topic:"ㄴㄴ대기 그래프(Wait-forGraph)",define:"자원 할당 그래프에서 자원 노드를 제거하고,�프로세스 간 대기 관계만 표현한 그래프",head:`* 구성
노드(프로세스 표현),
간선(대기 관계),�
자원 노드 없음(단순화 구조)`,remark:null,image:["static/images/cellImage_600070591_98.jpg"]},{index:208,topic:"ㄴ라이브락(Livelock)",define:"- 둘 이상의 프로세스가 상대 프로세스의 자원 요구에 서로 양보하며 무한 대기하는 상태",head:"",remark:"의미없는 Lock 획득과 해제가 끝없 반복돼서 헛도는 어정쩡한 상태",image:["static/images/cellImage_600070591_99.jpg"]},{index:209,topic:"동기화 문제추상화 이론",define:"",head:`-생산자-소비자 문제
: 버퍼 접근 동기화,세마포어로 상태 제어
- 철학자 식사 문제
: 교착 상태 발생,자원 요청 전략으로 회피
- 독자-작가 문제
: 읽기/쓰기 접근 제어,우선순위 정책 필요`,remark:null,image:[]},{index:210,topic:"멀티태스킹(Multitasking)",define:`하나의 시스템에서 여러 작업을
동시에 처리하는 방식`,head:`- 병행성
: 논리적 동시 실행을 설계하는 방식 
: 스레드/이벤트 기반
- 병렬성
: 하드웨어 자원을 이용한 실제 동시 실행
: 멀티코어/멀티스레드`,remark:null,image:["static/images/cellImage_600070591_100.jpg"]},{index:211,topic:"프로세스(Process)vs스레드(Thread)",define:`프로세스 (Process)
실행 중인 독립된 프로그램 단위 

스레드 (Thread)
프로세스 내부의 작업 실행 흐름 단위`,head:"",remark:"토픽 추가",image:["static/images/cellImage_600070591_101.jpg"]},{index:212,topic:"주기억장치 관리",define:"- 메모리 공간을 프로세스들에게 할당하고 회수하는 기법",head:`* 관리정책: 반배할교
반입: 언제 가져올 것인가 
배치: 어디에 배치할 것인가
할당: 어떤영역을 분할할 것인가
교체: 어떤걸 제거할 것인가`,remark:"-",image:[]},{index:213,topic:"ㄴ반입정책",define:"- 실행할 프로그램이나 참조할 데이터를 보조기억장치에서 주기억장치로 언제 가져올 것인지 결정하는 것",head:`- 요구 : 수행중인 프로세스에 의해 호출
- 예상 : 프로세스 요청이전에 예측하여 적재`,remark:"-",image:[]},{index:214,topic:"ㄴ배치정책",define:`- 새로 가져온 프로그램이나 데이터를 주기억장치의 어디에 배치할 것인지를 결정하는 것
- 동적할당(가변)에서만 사용`,head:`- 최초 적합(first-fit)
- 최적 적합(best-fit)
- 최악 적합(worst-fit)
- 다음 적합(next-fit)`,remark:"고정할당은 동일한 메모리 분할이기 때문에 상관없음",image:[]},{index:215,topic:"ㄴ할당정책",define:"- 메모리의 어느 영역을 분할 할 것인지 결정하는 것",head:`- 연속할당: 고정분할, 가변분할
- 불연속할당: 페이징, 세그먼테이션, 페이지드 세그멘테이션`,remark:"-",image:[]},{index:216,topic:"ㄴ교체정책",define:"- 주기억장치에 빈 공간이 없을때, 배치 공간을 마련하기 위해 어떤 프로그램이나 데이터를 주기억장치에서 제거할 것인지 결정하는 것",head:`- FIFO: 가장 먼저 들어온 페이지 교체
- LFU: 사용빈도가 가장 적은 페이지 교체
- LRU: 가장 오랫동안 사용되지 않은 페이지 교체
- OPT: 가장 오랫동안 사용되지 않을 페이지 교체`,remark:null,image:["static/images/cellImage_600070591_102.jpg"]},{index:217,topic:"ㄴㄴ연속할당",define:"- 프로세스를 물리적 메모리 한곳에 연속적으로 적재하는 방식",head:`- 고정분할 : 내/외부 단편화 발생
- 가변분할 : 외부 단편화 발생`,remark:`* 해결방법
오버레이, swap-in, swap-out`,image:[]},{index:218,topic:"ㄴㄴ불연속할당",define:"- 하나의 프로그램이 여러 개의 블록 또는 세그먼트로 나누어져 주기억장치 내에 분산배치 되도록 적재하는 방식",head:`- 페이징 : 고정크기
- 세그먼테이션 : 가변크기
- 페이지드 세그먼테이션 : 세그먼트 하나 다수 페이지`,remark:null,image:[]},{index:219,topic:"단편화(Fragmentation)",define:"- 주기억 장치 상에서 프로그램에 의해 사용되지 못하고 낭비되는 부분적인 기억 공간을 의미",head:`- 내부 단편화: 작업 할당후 남은 공간
- 외부 단편화: 분할이 작아 작업 할당이 불가한 공간`,remark:null,image:["static/images/cellImage_600070591_103.jpg"]},{index:220,topic:"단편화 해결기법",define:`* 해결기법
통합, 압축, 프레임, 버디 알고리즘, Slab Allocation`,head:"통압프버슬",remark:null,image:["static/images/cellImage_600070591_104.jpg"]},{index:221,topic:"FIFO Anomaly",define:`- FIFO 방식 에서 페이지 프레임 개수를 늘렸는데도 불구하고 page fault 발생이 오히려 증가하는 현상
- 012301401234`,head:`* 해결방안
- 페이지 교체정책 변경: LRU 사용, OPT 사용
- 최적화 원칙 설계: 지역성, Working set, Second Chance Replacement, PFF(PageFaultFrequency)`,remark:`- (SCR)Second Chance Replacement: 참조비트를 두어 1일 경우 0으로 지정한 후 FIFO 리스트 마직막으로 피드백 시켜 다음 순서를 기다리게 하는 알고리즘
- (WorkingSet) 일정기간 동안 참조되는 페이지집합을 주기억장치에 유지
- (PFF) 프로세스 페이지 폴트 빈도에 따라 ResidenceSet 조절`,image:[]},{index:222,topic:"Second�Chance�Replacement�",define:`- FIFO�의 잦은 페이지 교체의 단점을 방지하기 위해,�참조비트를 두어,�1일 경우 0으로 지정한 후
FIFO리스트의 마지막으로 피드백 시켜 다음 순서를 기다리게 하는 알고리즘`,head:"",remark:null,image:["static/images/cellImage_600070591_105.jpg"]},{index:223,topic:"가상메모리(Virtual Memory)",define:"- 주기억장치 안의 프로그램 양이 많아질 때 사용하지 않는 프로그램을 보조기억장치 안의 특별한 영역으로 옮겨서, 그 보조기억장치 부분을 주기억장치처럼 사용할 수 있는데 이때 사용하는 보조기억장치",head:`* 관리정책: 반배교할사
반입: 언제 가져올 것인가 
배치: 어디에 배치할 것인가
교체: 어떤걸 제거할 것인가
할당: 어떤영역을 분할할 것인가(기본적으로 불연속할당)
사상: (직연직)주기억장치의 물리주소와 가상메모리 논리주소의 매핑`,remark:`불연속 할당정책
① 페이징 
② 세그먼테이션 
③ 페이징/세그멘테이션`,image:[]},{index:224,topic:"ㄴ주소변환과정",define:`- 페이징
[페이지번호(p), 변위(d)]
가상주소 V = (p, d)

- 세그멘테이션
[세그먼트 번호(s), 변위(d)]
가상주소 V = (s, d)

- 페이징/세그멘테이션
[세그먼트 번호(s), 페이지번호(p), 변위(d)]
가상주소 V = (s, p, d)`,head:"",remark:null,image:["static/images/cellImage_600070591_106.jpg","static/images/cellImage_600070591_107.jpg"]},{index:225,topic:"ㄴ사상기법",define:`- 직접사상
Page table을 주기억장치에 위치
(프로세스는 하나의 페이지 테이블 소유)
두 번 접근하는 문제점, 부하증가`,head:`- 연관사상
Page table을 Associative buffer에 저장
속도가 빠르고 가격이 비쌈`,remark:`- 직접연관사상
Page table을 주기억장치와 Associative buffer에 분산 저장
경제성과 성능 절충`,image:[]},{index:226,topic:"스레싱(Thrashing)",define:`- 잦은 페이지 교체로 인해 성능에 영향 미침(쓰레싱)
- 가상메모리에서 페이지 부재가 비정상적으로 많이 발생하여 페이지 교체에 따른 프로세스 처리가 급격히 저하되는 현상 

* 발생원인 
- Locality 부족성(리소스 부족): CPU 성능부족, 저용량 메모리 
- 부적절한 페이지 교체: 요구기반 페이지, 페이지 교체문제 
- 과도한 멀티프로그래밍: 다중 프로세스, 할당 프로세스`,head:"",remark:`- CPU 이용율이 급격히 저하되는 현상

* 발견방법
- Page Fault 조사
- Swapping 조사`,image:["static/images/cellImage_600070591_108.jpg"]},{index:227,topic:"스레싱 해결기법",define:`* 해결기법
① Working set Model: 시간적 지역성을 이용하여 워킹셋 구성 
② Page Fault Frequency(PFF): 페이지 부재율에 따라 프레임 개수 조정 
③ 다중프로그래밍 최소화`,head:"",remark:null,image:["static/images/cellImage_600070591_109.jpg"]},{index:228,topic:"MMU(Memory Management Unit)",define:`- 프로그램 상의 논리적 주소를 
실제 물리적 주소로 변환하여 실행시키는 장치
TLB가 없으면 MMU는 메모리에 
항상 두번 접근`,head:`가상주소 
> 물리주소 검색 
> 주소신호발생 
> 해당 주소 데이터 출력`,remark:null,image:["static/images/cellImage_600070591_110.jpg"]},{index:229,topic:"TLB(Translation Look-aside Buffer)",define:"- 페이지 테이블 접근에 따른 지연 문제 해결을 위한 cache memory",head:`TLB 우선검색 
> TLB Hit 
> TLB Miss 
> Page fault`,remark:null,image:["static/images/cellImage_600070591_111.jpg"]},{index:230,topic:"디스크 스케쥴링",define:`- 디스크 입출력을 위해 대기하고 있는 요구들 중에서 어느 요구를 먼저 처리할 것인가를 결정

탐회전접 
- 탐색시간, 회전지연시간, 전송시간, 접근시간`,head:"",remark:null,image:["static/images/cellImage_600070591_112.jpg"]},{index:231,topic:"ㄴFCFS 스케쥴링",define:`- 디스크 입출력 요구들이 
도착한 순서대로 서비스 하는 기법`,head:"-",remark:"디스크 입출력에 대한 부하가 적을경우 적합",image:[]},{index:232,topic:"ㄴSSTF 스케쥴링",define:`- 현재 헤드의 위치부터 가장 가까운 
요구를 먼저 서비스 하는 방식`,head:"-",remark:"기아상태 발생가능",image:[]},{index:233,topic:"ㄴSCAN 스케쥴링(엘리베이터)",define:"- 현재 헤드 진행방향으로 마지막까지 요청을 서비스 하면서 진행, 마지막 실린더에 도착했을 때 방향 전환",head:"-",remark:`헤드 진행 도중 새로 도착한 요청도 함께 서비스
C-SCAN : 바깥에서 안쪽으로만 이동`,image:[]},{index:234,topic:"ㄴLOOK 스케쥴링",define:"- 헤드가 진행하는 방향의 앞쪽으로 더 이상의 요구가 없으면 그 자리에서 방향을 바꾸어 진행하는 방식",head:"-",remark:"C-LOOK : 바깥에서 안쪽으로만 이동",image:[]},{index:235,topic:"ㄴN-STEPSCAN/FSCAN",define:`- 디스크헤드가 방향을 바꾸는 시점에서 큐에 대기 중인 요구들
만을 대상으로 서비스 진행`,head:"",remark:null,image:[]},{index:236,topic:"ㄴ(Circular)C-SCAN",define:`- 각 요청에 걸리는 시간을 좀더 균등하게 하기
위한 SCAN변형`,head:"",remark:null,image:[]},{index:237,topic:"ㄴ(Circular)C-LOOK",define:`- LOOK�기법처럼 헤드의
진행방향을 더 이상 요구가 없다면 즉시 방향
을 바꿈`,head:"",remark:null,image:[]},{index:238,topic:"ㄴ회전최적화 디스크 스케쥴링 알고리즘",define:`- SLTF: 회전지연시간이 짧은 요청 우선 수행
- SPTF: 탐색시간과 회전지연시간 합이 짧은 요청 우선 수행
- SATF: 탐색시간, 회전지연시간, 전송시간의 합이 가장 짧은 요청 수행
- 에션바흐: 헤드 진행시 새로운 요청은 큐에 저장후 다음 진행때 서비스`,head:`- SLTF(Shortest Latency Time First)
- SPTF(Shortest Positioning Time First)
- SATF(Shortest Access Time First)`,remark:null,image:["static/images/cellImage_600070591_113.jpg"]}],i={subject:e,topics:n};export{i as default,e as subject,n as topics};
