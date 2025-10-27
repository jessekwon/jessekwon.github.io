const e="보안",n=[{index:1,topic:"해킹",define:"- 남의 컴퓨터 시스템에 침입하여 장난이나 범죄를 저지르는 일",head:`* 핵티비즘 : 해커 + 액티비즘(사회행동주의)
- 정치 사회적 목적을 이루기 위해 해킹을 하거나 목표 컴퓨터를 무력화하고 이런 기술을 만드는 운동`,remark:`* 절차
1. Footprinting(정보 수집)
2. Scanning(스캔)
3. Enumeration(열거)
4. Gaining Access(접근 권한 획득)
5. DoS Attack(서비스 거부공격)
6. Escalating Privilege(권한 상승)
7. Pilfering(정보 유출)
8. Covering Tracks(침입 흔적 삭제)
9. Make Backdoors(백도어 설치)`,image:[]},{index:2,topic:"보안(Security)",define:"- 정보 자산의 기밀성, 무결성, 가용성을 유지하고 위협으로부터 보호하기 위한 활동",head:`* 3요소(CIA) 기무가
기밀성(Confidentiality), 
무결성(Integrity), 
가용성(Availability)`,remark:null,image:[]},{index:3,topic:"ㄴ보안통제정책",define:`- 관리적: 보안정책, 지침, 교육, 거버넌스
- 물리적: 출입통제
- 기술적: 정보보호시스템 구축/운영/통제`,head:"관물기",remark:null,image:[]},{index:4,topic:"ㄴ변조(Modification)",define:"- 정당한 권한 없이 데이터의 내용, 구조, 속성 등을 변경하거나 조작하는 행위",head:`- 유형: key/정보/데이터/시간/대상 변조
- 대응방안: 무결성 검증, 접근통제, 로그감사, MPC/블록체인 적용`,remark:"무결성(Integrity) 침해",image:[]},{index:5,topic:"ㄴ위조(Fabrication)",define:"- 인가받지 않은 제3자가 존재하지 않았던 데이터를 새롭게 만들어내는 행위",head:`- 유형: 복제/특징/내용/인증 위조
- 대응방안: 전자서명, 타임스탬프+해시체인, 이중인증(2FA), IDS/로그 무결성 검증 시스템`,remark:"무결성(Integrity)+인증(Authentication) 침해",image:[]},{index:6,topic:"ㄴ계층적 방어(Defense In Depth)",define:"- 하나의 보안 장치가 뚫리더라도 다음 단계에서 방어할 수 있도록 여러 계층의 보안 통제를 중첩 적용하는 전략",head:"거버넌스 > 물리적통제 > 네크워크보안 > host보안 > 데이터보안",remark:`* 적용기술
- 네트워크 경계 보안: 방화벽(Firewall), IDS/IPS, DMZ, VPN
- 내부 네트워크 분리: VLAN, 망분리, 서브넷 구성, 내부 방화벽
- 호스트/단말 보안: 백신, 보안 패치 관리, EPP/EDR, 호스트 기반 방화벽
- 애플리케이션 보안: 웹 방화벽(WAF), 코드 보안 점검, API 접근 제어
- 데이터 보안: 암호화, DB 접근 제어, DLP
- 사용자 접근 통제: IAM, SSO, 다단계 인증(MFA), 권한 분리
- 모니터링 및 대응: SIEM, 로그 분석, 보안관제센터(SOC), 침해사고 대응(CERT)`,image:[]},{index:7,topic:"정보통신망법",define:"- 정보통신망의 안전한 이용과 정보 보호를 위하여 필요한 사항을 정한 법률",head:`(4장 제23조의2) 주민등록번호의 사용 제한 
(4장 제32조의5) 국내대리인의 지정 
(6장 제47조) 정보보호 관리체계의 인증`,remark:null,image:[]},{index:8,topic:"정보통신기반보호법",define:"- ISP등 국가 주요정보통신 기반시설의 보호체계 구축 및 운용, 사이버 위협대응 및 침해사고 예방을 위한 법률",head:`(2장 제5조) 주요 정보통신 기반시설 보호대책의 수립 등
(3장 제8조) 주요정보통신기반시설의 지정 등
(4장 제13조) 침해사고의 통지, (4장 제14조) 복구조치`,remark:null,image:[]},{index:9,topic:"개인정보보호법",define:"- 개인정보의 수집·이용·보관·제공 등 처리에 대한 기준과 절차를 정해 개인의 자유와 권리 보호하는 법률",head:`- 개인정보: 살아 있는 개인에 관한 정보(가명정보 포함)
- 가명정보: 추가 정보 없이는 특정 개인을 알아볼 수 없는 정보`,remark:null,image:[]},{index:10,topic:"ㄴOECD 개인정보 보호 8대 원칙",define:"- 개인정보 보호에 관한 국제적 기본 원칙",head:`* 수정목이안공참책
수집제한, 정보정확성, 목적명확화, 이용제한, 안전성확보, 처리방침 공개, 정보주체 참여, 책임의 원칙`,remark:null,image:[]},{index:11,topic:"ㄴ 개인정보 보호 원칙의 주요내용",define:"- OECD원칙을 법률로 구체적 의무화",head:"목적 명확성 및 최소 수집 원칙, 목적 내 처리 및 목적 외 사용금지 원칙, 사생활 침해 최소화 원칙, 익명/가명 처리 우선 원칙 등",remark:null,image:[]},{index:12,topic:"ㄴ개인정보보호 처리단계",define:"- 수집/이용, 저장/관리, 제공/위탁, 파기 + 보호,보장",head:"수저제파 + 보보",remark:null,image:[]},{index:13,topic:"ㄴ(3장) 개인정보의 처리",define:`(제1절16조) 개인정보의 수집 제한 
(제1절17조) 개인정보의 제공 
(제2절24조) 고유식별 정보의 처리 제한 
(제2절25조) 고정형 영상정보처리기기의 설치ㆍ운영 제한 
(제2절25조의2) 이동형 영상정보처리기기의 운영 제한 
(제3절 28조의2) 가명정보의 처리에 관한 특례 
(제4절30조) 개인정보 처리방침의 수립 및 공개
(제30조의2) 개인정보 처리방침의 평가 및 개선권고
(제31조) 개인정보 보호책임자의 지정
(제31조의2) 국내대리인의 지정`,head:`(3장 제3절) 가명정보처리에 관한 특례: 통과공 
통계적 목적, 과학연구 목적, 공익적 기록보존을 위해서는 가명정보 사용가능`,remark:null,image:[]},{index:14,topic:"ㄴ23.9.15 개정 주요내용",define:`- 데이터 경제 시장 견인
- 개인정보 신뢰사회 구축
- 글로벌 스탠다스 선도`,head:`- 개인정보 전송 요구권, 이동형 영상정보처리기기(드론, 자율주행차 등)
- 자동화된 결정에 대해 정보주체가 거부하거나 설명 요구할 권리
- 국외 이전 요건 완화`,remark:null,image:[]},{index:15,topic:"통신비밀보호법",define:"- 통신 비밀을 보호하고 통신의 자유를 신장함을 목적",head:`- 사생활의 비밀과 통신의 자유 보장(헌법 제18조 기반)
- 불법 감청·녹음·채취 금지`,remark:null,image:[]},{index:16,topic:"정보보호산업진흥법",define:"- 정보보호산업의 기반을 조성하고 그 경쟁력을 강화하여 안전한 정보통신 이용환경 조성 및 발전에 기여하기 위한 법률",head:`- (2장 제13조) 정보보호공시제도
- 정보보호 준비도 평가: 민간자율, 30개 항목, 5등급 (AAA, AA, A, BB, B)`,remark:null,image:[]},{index:17,topic:"ㄴ정보보호준비도평가, ISMS, PIMS, PIPL",define:"",head:`- ISMS-P: 통합 운영 중(ISMS+PIMS 통합) 
- PIMS: 2023년 ISMS-P로 통합됨
- PIPL: 2018년 PIMS로 통합`,remark:null,image:[]},{index:18,topic:"ㄴ정보보호 공시제도(2021.06)",define:"- 기업이나 기관이 자율적으로 수행한 정보보호 수준과 정보보호 투자 현황 등을 외부에 공개하는 제도",head:`- 유형: 자율공시, 의무공시 
- 공시내용: 정보보호 투자현황, 인력현황, 인증/평가, 활동사항
- 혜택:  ISMS 인증 수수료 할인, 정보보호 우수기업 표창`,remark:`* 의무공시 대상(매년 6.30까지)
- (사업분야) ISP, IDC, 상급종합병원, 클라우드 컴퓨팅 서비스 제공자
- (매출액) 매출액3000억이상
- (이용자수) 일일이용자수 100만명 이상
- 공공기관, 소기업, 금융회사, 전자금융업자는 제외
- 의무 공시 안하면! 최대 1,000만원 과태료 부과`,image:[]},{index:19,topic:"클라우드컴퓨팅 발전 및 이용자 보호에 관한 법률",define:"- 2012년 국정원법을 개정 하여, 클라우드 컴퓨팅의 육성/지원 환경을 구축하고, 정부 주도의 지원체계를 정의 한 특별법",head:"제23조의2(클라우드컴퓨팅서비스의 보안인증)",remark:null,image:[]},{index:20,topic:"클라우드 보안 인증제도(CSAP)",define:`- 클라우드컴퓨팅 서비스의 정보보호 수준을 정부가 인증하는 제도로, 공공기관이 안전한 클라우드 서비스를 이
용하도록 보장하기 위한 제도`,head:`* 정보보호 기준 및 서비스 품질 성능 기준 고시: 가응확신지지고 
- 가용성, 응답성, 확장성, 신뢰성, 서비스 지속성, 서비스 지원, 고객대응`,remark:null,image:[]},{index:21,topic:"ㄴCSAP 인증종류 및 체계",define:`- 유효기간 5년으로 확정
- 상중하 등급제`,head:`* 최사갱
- 최초평가->사후평가(4회)->갱신평가`,remark:null,image:[]},{index:22,topic:"ㄴCSAP 인증 등급",define:"- 서비스 중요도에 따라 상(높음), 중(보통), 하(낮음) 등급으로 나뉘며, 요구되는 보안조치가 등급별로 달라짐",head:`- 상(물리적분리): 국가 중대 이익(안보, 국방, 통일, 외교 등)이나 수사·재판, 행정 내부 업무 등 운영하는 시스템
- 중(물리적분리): 대량의 업무자료를 포함 또는 운영하는 시스템 
- 하(물리적/논리적분리): 개인정보를 포함하지 않고 공개된 공공데이터를 포함하거나 단순 운영 시스템`,remark:`- (2023.1.31) 클라우드 컴퓨팅 서비스 보안 인증에 관한 고시 개정 
- 상중 등급에 대한 평가기준 반영 : 2024.2.6
- 논리적 망분리 허용 => 공공시장에 민간 기업 클라우드 도입 발판`,image:[]},{index:23,topic:"ㄴCSAP 인증 기준",define:`- IaaS: 관물기+공공추가 116개 
- SaaS: 관기+공공추가 표준 79개, 간편 31개
- DaaS: 관물기+공공추가 110개 
- 하등급(공통): 관기+공공추가 64개
- 하등급(SaaS): 관기+공공추가 30개`,head:"정조인자 공침연 준물가접 네암개보",remark:"1)정보보호 정책 및 조직 2)인적보안 3)자산관리 4)서비스 공급망관리 5)침해사고관리 6)서비스 연속성 관리 7)준거성 8)물리적보안 9)가상화보안 10)접근통제 11)네트워크보안 12)암호화 13)개발 및 도입보안 14)국가기관등 보안 요구사항",image:[]},{index:24,topic:"ㄴCSAP 평가 인증 절차",define:"사전컨설팅 -> 평가신청 -> 서면/현장평가 -> 취약점 점검 -> 모의침투테스트 -> 보완요청/조치 -> 이행점검 -> 인증서 발급",head:"",remark:null,image:[]},{index:25,topic:"클라우드 관련 표준",define:`- ISO/IEC 27017: 보안통제 지침
- ISO/IEC 27018: 퍼블릭, 개인정보보호 
- ISO/IEC 27036-4: 조약/계약단계 보안
- NIST SP 800-144: 가이드라인
- CSA CCM: 통제 매트릭스 
- ENISA Risk Assessment: 보안리스크 
- FedRAMP: 미연방정부 대상 보안 
- CIS Controls for Cloud: 통제프레임워크`,head:"",remark:null,image:[]},{index:26,topic:"ㄴISO27017",define:"- 클라우드 서비스 제공자와 이용자 모두를 위한 정보보호 통제 지침 표준",head:"범참정부-정조인자-접암물서통-개공사비법",remark:"1)범위 2)표준 참조 3)정의 및 약어 4)클라우드부문별개념 5)정보보호 정책6)정보보호조직 7)인적자원 보안 8)자산관리 9)접근통제 10)암호화 11)물리적 보안 12)서비스운영보안 13)통신보안 14)시스템 개발 및 유지보수 15)공급업체 관계 16)정보보안 사고 관리 17)BCM에 의한 정보 보호 연속성 18)법률 및 규정",image:[]},{index:27,topic:"ㄴISO27018",define:"- Public Cloud 환경에서 개인식별정보(PII)를 보호하기 위한 최초의 국제 표준",head:"일동합수-데사정투-참책정규",remark:"1)일반 2)동의와 선택 3)합법성 및 사용목적 4)수집제한 5)데이터 최소화 6)사용 및 공개제한 7)정책작성과 훈련 8)개방성,투명성 9)개인참여와 접근 10)정확성 11)정보보호 12)개인정보 보호규정",image:[]},{index:28,topic:"ㄴISO/IEC 27017, ISO/IEC 27018, GDPR 비교",define:"",head:`- 분야: 정보보호 통제/ 퍼블릭 클라우드 상 개인정보 보호 / 모든조직 개인정보보호 법적 규제
- 대상: 클라우드 제공자 + 이용자(공통)/ 퍼블릭 클라우드 제공자 중심/EU내 모든 조직 등
- 책임: 선택/권고 수준/ PII보호 수준/ 법적책임(최대글로벌매출4%)`,remark:null,image:[]},{index:29,topic:"양자과학기술 및 양자산업 육성에 관한 법(약칭.양자기술산업법)",define:"- 양자과학기술(통신·센서·컴퓨터 등)의 연구기반 조성과 양자 산업의 체계적 육성을 위한 종합체계를 구축하기 위한 법('24.11.1.시행)",head:`- 제2장 양자과학기술 및 양자산업 육성을 위한 추진체계
- 제3장 양자과학기술 및 양자산업에 대한 지원 및 기반조성
- 제4장 양자과학기술 및 양자산업 분야의 인력 양성
- 제5장 양자클러스터 지정 등
- 제6장 협력 강화`,remark:null,image:[]},{index:30,topic:"전자서명법",define:"- 전자문서 날인한 전자서명이 사용인감이나 서명과 같은 효력을 발휘할 수 있도록 규정한 법률",head:`- 제6조(다양한 서명수단 활성화)
- 다양한 전자서명수단(생체인증, PIN, 패턴 등)도 법적 효력 인정
- 저장매체, 클라우드 기반, 앱기반 기술
- 공동인증서/사설인증서/금융인증서`,remark:null,image:[]},{index:31,topic:"시스템보안",define:"- 권한 없는(허가받지 않은) 사용자에 의한 파일, 폴더 및 장치 등의 사용을 제한하여 보호하는 시스템 기능(운영체제 중심)",head:`* 계세접권로취
- 계정과 패스워드 관리, 세션관리, 접근제어, 권한관리, 로그관리, 취약점 관리`,remark:null,image:[]},{index:32,topic:"ㄴ계정과 패스워드 관리",define:"- 적절한 권한을 가진 사용자를 식별하기 위한 가장 기본적인 인증 수단",head:`- 아이디: 사용자를 식별(Identification)
- 패스워드: 사용자 인증을 위한 비밀 문자열(지소생특)`,remark:`- 지식: 머릿속 기억 정보
- 소유: 신분증, OTP
- 생체: 홍채, 지문 등
- 특징: 위치 정보`,image:[]},{index:33,topic:"OSI 7 Layer",define:"- 다양한 네트워크의 호환을 위한 표준 7계층 네트워크 모델(ISO)",head:"아파서티내다피",remark:"어플리케이션 계층, 프레젠테이션(표현) 계층, 세션계층, 트랜스포트(전송) 계층, 네트워크 계층, 데이터링크 계층, 물리계층",image:[]},{index:34,topic:"ㄴTCP 연결/해제",define:"TCP(Transmission Control Protocol)는 인터넷 프로토콜 스위트의 핵심 프로토콜 중 하나로, 신뢰성 있는 데이터 전송을 보장하는 연결 지향적 프로토콜",head:`- 3Way Handshake
- 4Way Handshake`,remark:null,image:[]},{index:35,topic:"ㄴ3Way Handshake",define:"(연결) syn -> sys+ack -> ack",head:"",remark:null,image:[]},{index:36,topic:"ㄴ4Way Handshake",define:"(해제) fin -> ack , fin -> ack",head:"",remark:null,image:[]},{index:37,topic:"서비스 거부 공격(DoS)",define:"- 시스템을 악의적으로 공격, 해당 시스템의 자원을 부족하게 하여 원래 의도된 용도로 사용하지 못하게 하는 공격",head:`- 취약점 공격형: Bonk, Boink, TearDrop, Land 공격
- 자원고갈 공격형(분산 서비스 공격형): Ping of Death, SYN Flooding, HTTP CC 공격, Smurf 공격, Mail Bomb 공격`,remark:"대응방안: 단시간 내 SYN 요청 수 제한, 동일 클라이언트 요청 제한(DROP), SYN 쿠키(세션생성 안하고 SYN+ACK 전송)",image:[]},{index:38,topic:"ㄴ취약점 공격형",define:"- 패킷의 시퀀스 번호를 조작하여 보냄으로써, 시스템은 순서를 맞추기 위한 과부하 발생",head:"패치적용, 반복적인 패킷 무시",remark:null,image:[]},{index:39,topic:"ㄴ자원고갈 공격형",define:`- Ping of Death: 수신측에서 나누어진 ping 재조합 시 부하 발생 
- SYN Flooding: 존재하지 않는 클라이언트가 서버에 접속한 것처럼 속여 다른사용자의 서비스 제공을 막는 공격 
- HTTP GET Flooding: HTTP Get 요청을 지속적으로 요청하여 시스템에 과부하`,head:`- HTTP CC 공격: Cache Control 메시지를 이용하여 캐시서버를 거치지 않고 직접 웹서버에 HTTP 요청. 부하증가
- Smurf 공격: 위조 된 시작 IP 주소로 ICMP Request ICMP Reply를 다시 받게 하여, 과부하 상태
- Mail Bomb: 메일함을 가득 채워, 더이상의 메일을 받지 못하게 하는 공격`,remark:"대응방안: 방화벽 패킷 필터링, IDS, IPS, 캐시 사용 옵션, 스팸 필터링",image:[]},{index:40,topic:"ㄴ분산 서비스 거부 공격(DDoS)",define:`- 다수의 공격자(좀비 PC, 봇넷 등)를 이용해 동시에 특정 서버나 네트워크에 과도한 트래픽을 발생시켜 정상적
인 서비스를 방해하는 공격`,head:"분산된 공격원(좀비/에이전트 등 여러 시스템 활용), 대규모 트래픽",remark:"절차:  악성코드 은닉 -> 악성코드 감염 -> 감염사실 은폐 및 명령대기 -> DDoS 공격수행",image:[]},{index:41,topic:"ㄴDDoS 대응방안",define:`- PPS 증가 : 비정상 IP에 대한 ACL 적용, 공격 IP차단, SYN Proxy 사용, 보안 패치 및 장비 교체 
- 웹서비스 지연 : 서버 설정 변경, 웹 서버 증설, 공격 IP 차단 
- 대용량 트래픽 전송: 불필요한 서비스 차단, 공격자 IP 차단, DNS 서버 다중화, DNS 전용회선 준비`,head:`- 봇넷 유입 차단: IP 필터링, 지리적 차단, 의심 트래픽 필터링
- 행위기반탐지: 트래픽 이상 감지, AI기반 분석 도입
- Blackhole/Sinkhole 라우팅`,remark:`* 진화된 DDoS공격
- DRDoS, Ransom DDoS(RDoS)
- Application Layer DDoS
- Multi-Vector DDoS
- IoT DDoS (Botnet 기반)
- Encrypted DDoS
- PDoS (Permanent DoS)
- Slowloris Attack(Slowly DDos), Carpet Bombing DDoS`,image:[]},{index:42,topic:"ㄴDRDoS",define:"- 공격자가 제3의 서버(중계 서버)를 이용해 피해자에게 공격 트래픽을 전달하도록 유도하는 DDoS 변형 공격",head:`* 주요 특징 
- 출처 은폐(공격자 숨김), 대규모 증폭(작은 요청 → 큰 응답)
- 정상 서버 이용(공개 서버 악용), IP 스푸핑(IP 위조)
- 반사서버: DNS, NTP, SNMPM, SSDP, LDAP서버, CHARGEN 서비스 

* 대응방안
- Victim 서버의 IP, Port 필터링 
- 반사서버의 무차별 이용방지 
- ISP 필터링 
- 공격플랫폼 제한`,remark:null,image:["static/images/cellImage_1969927744_0.jpg"]},{index:43,topic:"스니핑(sniffing)",define:`- 컴퓨터 네트워크상에 흘러다니는 트래픽을 엿듣는 공격기법 (ID, PW 등 주요 정보 탈취)
- 프러미스큐어스 모드 사용`,head:`- 유형: 패스워드, 하이재킹, 이메일, FTP, DNS, VoIP, Telnet/SSH 스니핑
- 대응방안: 탐지 도구 사용, ARP 모니터링, 이상 트래픽 분석, 강제 인증/암호화, VPN 도입, 패킷 감시 정책 강화`,remark:null,image:[]},{index:44,topic:"세션하이재킹",define:`- 사용자의 세션 식별 정보(Session ID 등)를 탈취하여 공격자가 정상 사용자로 위장해 인증 없이 서비스에 접근하는
공격`,head:`- 특징: 스니핑/XSS 연계(타 기법과 조합)
- 대응방안: HTTPS 적용(세션ID 암호화), 세션 타임아웃 설정(비활성 시 자동 만료), 세션 고정 방지(로그인 시 세션 ID 재발급), 2차 인증(MFA 적용)`,remark:null,image:[]},{index:45,topic:"스푸핑(spoofing)",define:"- 공격자가 허위 정보를 조작하거나 위조하여 자신을 다른 사용자나 시스템으로 가장하는 공격 기법",head:`- 특징: 2차 공격 유도(연계 공격 가능)
- 유형: IP, ARP, DNS, ICMP Redirect, 이메일, 웹사이트, MAC 스푸핑`,remark:null,image:[]},{index:46,topic:"ARP 스푸핑",define:`- 공격자가 위조된 ARP 메시지를 전송해 네트워크 내 장비들의 ARP 캐시를 변조, 자신의 MAC 주소를 다른 장비의
IP에 대응시키는 공격(두 서버 간의 트래픽을 가로채는 방식의 중간자(MITM) 공격)`,head:`- 특징: 신뢰 기반 악용(ARP는 검증 없음), 간단한 수행(로컬에서 가능), MITM 가능(중간자 위치)
- 대응방안: 정적 ARP 설정(고정 맵핑), 암호화 사용(HTTPS, SSH, VPN 등)`,remark:null,image:[]},{index:47,topic:"IP 스푸핑",define:"- 출발지 IP 주소를 위조하여 공격자가 마치 신뢰받는 시스템인 것처럼 속이는 공격 방식",head:`- 특징: 실제 클라이언트처럼 패스워드 없이 서버에 접근
- 대응방안: Ingress/Egress 필터링(IP 위조 차단), 패킷 인증 필드 적용(IPSec 등으로 무결성 검증)`,remark:null,image:[]},{index:48,topic:"ICMP 리다이렉트 공격",define:`- ICMP Redirect 메시지를 위조하여 피해자로 하여금 잘못된 경로(공격자 경유)로 트래픽을 보내게 만드는 라
우팅 공격`,head:"- 대응방안: ICMP Redirect 허용 금지(클라이언트/서버 메시지 무시), 정적 라우팅 사용(동적 경로 학습 차단), 라우터 보안 설정(리다이렉트 메시지 차단)",remark:"ICMP Redirect 메시지 : 라우팅 최적화, 네트워크 트래픽 감소 등 활용",image:[]},{index:49,topic:"DNS 스푸핑",define:"- 실제 DNS 서버보다 빨리 공격 대상에게 DNS Response 패킷을 보내, 공격 대상이 잘못된 IP 주소로 웹 접속을 하도록 유도하는 공격",head:"- 대응방안: DNSSEC 적용(응답 위조 방지), 암호화 DNS 사용(DoH/DoT로 감청 차단)",remark:null,image:[]},{index:50,topic:"무선랜 네트워크",define:"- 무선접속장치(AP)가 설치된 곳의 일정 거리 안에서 초고속 인터넷을 할 수 있는 근거리 통신망(LAN)",head:"802.11x",remark:"802.11i: 보안 강화(WPA2 등 적용)",image:[]},{index:51,topic:"AP(Access Point) 보안",define:`- 기술적 취약점: 도청, 서비스 거부, 불법 AP, 비인가 접근
- 관리적 취약점: 장비관리 미흡, 사용자 의식 결여 
- 물리적 취약점: 도난 및 파손, 설정 초기화, 전원차단`,head:`* 보안요소
- 인증 절차 강화: WPA2/3, 802.1X 등 사용자 인증 방식 도입
- 강력한 암호화 적용: WPA2/3(802.11i), VPN 등 강력한 암호화 기술 적용`,remark:null,image:[]},{index:52,topic:"IEEE 802.1x(포트 기반 네트워크 접근 제어)",define:"- 사용자 또는 단말이 네트워크에 접속할 때 인증 절차를 수행해 접근을 제어하는 포트 기반 네트워크 접근 제어 방식(무선 AP 사전 인증, TCP/IP 이전 인증 수행: L2 수준에서 인증 후 IP 부여)",head:`* 특징
- 강력한 인증 제공 
- RADIUS 연동 
- 동적 키 관리
- 네트워크 접근 제어
- 보안 정책 통합`,remark:null,image:[]},{index:53,topic:"ㄴEAP(Extensible Authentication Protocol)",define:"- 다양한 인증 방식을 유연하게 지원할 수 있도록 만든 확장 가능한 인증 프로토콜",head:`- 인증 처리나 암호화는 EAP 방식에서 사용되는 알고리즘에서 수행
- EAP 방식(인증 방법): EAP-TLS, EAP-TTLS , PEAP, EAP-FAST, EAP-MD5`,remark:null,image:[]},{index:54,topic:"ㄴAAA 프로토콜",define:"- 네트워크 접속 사용자에 대해 인증, 권한 부여, 계정 관리 기능을 제공하는 보안 프레임워크 및 프로토콜 체계(중앙 집중식 사용자 관리)",head:`- RADIUS: 원격 접속 사용자의 인증, 권한, 계정 관리를 수행하는 AAA 프로토콜
- TACACS+ : Cisco가 개발한 AAA 프로토콜로, 인증, 권한, 계정을 분리하여 처리
- Diameter: RADIUS의 단점을 보완한 차세대 AAA 프로토콜`,remark:null,image:[]},{index:55,topic:"IEEE 802.11i",define:`- WPA2의 기술적 기반이며, 인증, 암호화, 키 관리, 무결성 검증을 종합적으로 규정한 무선 LAN의 보안
강화를 위해 IEEE가 제정한 보안 표준(2004)`,head:`- 인증: PSK (Pre-Shared Key), IEEE 802.1X / EAP
- 암호화: TKIP, CCMP
- 키교환: 4-Way Handshake, Group Key Handshake, Key Hierarchy 구조`,remark:null,image:[]},{index:56,topic:"ㄴWEP",define:"- RC4 스트림 암호화 + 고정 키 방식을 사용하는 초창기 무선랜 보안 프로토콜",head:`* 특징
- RC4 스트림 암호(빠르지만 취약함), 고정 키 방식(키를 계속 재사용)
- 초기화 벡터 사용(짧아 충돌 발생), 인증 방식 단순(우회 쉬움), 보안 취약`,remark:"절차 요약: IV + 공유키로 암호화 → RC4 적용 → CRC 포함 전송",image:[]},{index:57,topic:"ㄴWPA",define:"- WEP의 키 재사용·충돌·암호화·무결성 문제를 보완한 임시 보안 프로토콜",head:`* 특징
- PSK와 Enterprise 인증 모드를 지원
- 동적 키(TKIP), 무결성 강화(MIC), RC4 유지(한계 존재)`,remark:"TKIP: EAP에 의한 사용자 인증결과로부터 단말과 AP간 채널 보호용 임시 비밀키를 동적으로 생성하여 무선구간 패킷 암호화",image:[]},{index:58,topic:"ㄴWPA2",define:`- 기존 WPA의 취약점을 개선하고 AES 기
반의 강력한 암호화(CCMP)를 도입한 정식 보안 표준`,head:`* 특징
- AES-CCMP 채택(강력한 암호화), 802.11i 기반(정식 표준화)
- PSK/Enterprise 지원, 4-Way Handshake(보안 키 교환 절차)`,remark:"CCMP: 메시지에 대한 무결성 처리 후 암호 실행. AES 블록 암호화 방식 사용",image:[]},{index:59,topic:"ㄴWPA3",define:`- WPA2의 취약점을 보완하고, 최신 Wi-Fi 환경에서 더욱 강력한 보안성과 개인정보 보호를 제공하기 위해
2018년 Wi-Fi Alliance가 발표한 차세대 무선랜 보안 표준`,head:`* 특징
- SAE 도입(딕셔너리 공격 차단), GCMP 적용
- PMF 필수(프레임 보호), Forward Secrecy(세션 노출 방어), 192bit 모드(고보안 환경)`,remark:null,image:[]},{index:60,topic:"HTTP",define:"- 웹 브라우저와 웹 서버 간에 하이퍼텍스트 문서를 주고받기 위한 통신 프로토콜",head:"",remark:`GET : 보안취약 
POST : 헤더에 데이터 전송`,image:[]},{index:61,topic:"웹 서비스",define:"- 서로 다른 컴퓨팅 환경에서 사용되는 모든 애플리케이션들이 직접 소통하고 실행될 수 있도록 동적 시스템 환경을 구현해 주는 소프트웨어 컴포넌트",head:`- HTML: 웹 서버에 HTML 문서를 저장하고 있다가 클라이언트가 특정 HTML 페이지를 요청하면 해당문서를 전송하는 방식 
- SSS: 좀 더 동적인 웹페이지 제공(JSP, ASP)
- CSS: 클라이언트 측의 웹 브라우저에 의해 해석되고 적용(자바스크립트 등)`,remark:null,image:[]},{index:62,topic:"OWASP TOP 10",define:"- 웹 애플리케이션의 보안 취약점 중 가장 위험한 10가지를 선정하여 공개하는 프로젝트",head:"- 전 세계 보안 전문가의 데이터 기반, 3~4년 주기로 갱신",remark:`- 2013년 : 취약점 중심의 초기 리스트 (코딩 취약점 중심)
- 2017년 : 실제 위험도와 발생빈도 기반의 리스트로 진화
- 2021년 : 보안이 설계·운영 단계까지 확장, 복합적 보안 이슈 반영`,image:[]},{index:63,topic:"ㄴOWASP TOP 10(2013)",define:"",head:"인취X 객보중접 CCRF",remark:"- 인젝션, 취약한 인증과 세션관리, XSS, 직접 객체 참조, 잘못된 보안 구성, 민감 데이터 노출, 기능 수준 검증되지 않은 리디렉션 및 포워드근 통제 누락, CSRF, 취약한 컴포넌트 사용, 검증되지 않은 리디렉션 및 포워드",image:[]},{index:64,topic:"ㄴOWASP TOP 10(2017)",define:"",head:"인인민X접 보크디컴로",remark:"- 인젝션, 취약한 인증, 민감 데이터 노출, XML 외부 개체, 취약한 접근 통제, 잘못된 보안 구성, XSS, 안전하지 않은 역직렬화, 취약한 컴포넌트 사용, 로깅 및 모니터링 부족",image:[]},{index:65,topic:"ㄴOWASP TOP 10(2021)",define:"",head:"접암인설오취식소로위",remark:"- 취약한 접근 제어, 암호화 실패, 인젝션, 불안전한 설계, 잘못된 보안 구성, 취약하고 오래된 컴포넌트, 식별 및 인증 실패, 소프트웨어 및 데이터 무결성 실패, 로깅 및 모니터링 실패, 서버 측 요청 위조(SSRF)",image:[]},{index:66,topic:"ㄴ인젝션 (Injection)",define:"- 사용자의 입력값이 신뢰되지 않은 상태로 명령문 또는 쿼리에 삽입되어 실행되는 취약점",head:`* 인젝션의 유형
- SQL 인젝션: 에러 기반 SQL 인젝션, 블라인드 SQL 인젝션, 매스 인젝션
- OS 명령어 인젝션(Command Injection)
- LDAP 인젝션
- XML 인젝션
- HTML/Script 인젝션`,remark:null,image:[]},{index:67,topic:"ㄴㄴSQL 인젝션",define:"- 사용자 입력값이 SQL 쿼리에 삽입되어 데이터베이스 명령이 조작되는 보안 취약점",head:'- 로그인 입력란에 "or 1=1 --` 같은 SQL 조작 코드를 삽입\n- ID : "or 1=1 --`\n- PW : (아무 값이든 입력하거나 비워도 됨)',remark:`* 보안대책
- Prepared Statement / Parameterized Query 사용
- 입력값 검증
- 최소 권한 원칙 적용
- DB 오류 메시지 숨김`,image:[]},{index:68,topic:"ㄴㄴㄴBlind SQL Injection",define:`- 오류 메시지가 출력되지 않는 환경에서, 무작위로 문자를 삽입하여, 나오는 참,거짓에 따라 DB정보를
취득하는 공격 기법(추론)`,head:"- 조건이 참일 경우와 거짓일 경우 응답 차이를 분석(Brute-force 방식)",remark:`* 보안대책
- Prepared Statement / Parameterized Query 사용
- 입력값 검증
- 최소 권한 원칙 적용
- DB 오류 메시지 숨김`,image:[]},{index:69,topic:"ㄴXSS(Cross-Site Scripting)",define:"- 웹 애플리케이션에서 사용자 입력값을 검증 없이 출력할 때, 악성 스크립트가 삽입되어 실행되는 보안 취약점",head:`- 특징: 쿠키/세션 탈취 가능(사용자 정보 유출)
- 유형: Stored XSS (저장형), Reflected XSS (반사형)`,remark:`* 대응 방안
- 입력값 검증(스크립트, 태그, 특수문자 제외)
- 출력 시 이스케이프(< → &lt;)
- Content Security Policy
- HTTPOnly, Secure 속성 설정`,image:[]},{index:70,topic:"ㄴCSRF(Cross-Site Request Forgery)",define:"- 로그인된 사용자의 세션을 악용해 의도하지 않은 요청을 자동 전송하는 공격",head:"- 특징: 인증된 사용자 대상(세션 존재 필요), 브라우저 신뢰 악용(자동 쿠키 포함)",remark:"- 대응방안: CSRF 토큰 사용, Referer / Origin 헤더 검증, SameSite 쿠키 설정, 중요 요청에 추가 인증 요구",image:[]},{index:71,topic:"ㄴSSRF(Server-Side Request Forgery)",define:`- 공격자가 서버 측에서 실행되는 요청 기능(예: URL 호출)을 조작하여, 서버가 내부 또는 외부 자원에 요청
을 보내도록 유도하는 공격`,head:"- 특징: 서버가 요청 주체(탐지 어려움), 내부망 접근 가능(보안경계 우회), 메타데이터 접근(클라우드 취약점), 보안 장비 우회, 응답 기반 정보 수집",remark:`* 대응방안
- 입력값 검사: Whitelist Filtering, Blacklist Filtering
- OS / 네트워크: ACL 설정, 망분리
- 접속기록/알람: 공격징후 탐지, 로그/모니터링 강화, 최소권한 사용`,image:[]},{index:72,topic:"애플리케이션 보안 (Application Security)",define:`- 애플리케이션의 기획, 설계, 개발, 배포, 운영 전 과정에서 발생할 수 있는 보안 위협을 예방하고 보호하기 위
한 기술, 절차, 활동의 집합`,head:`- 특징: SDLC 전 과정 연계, 다계층 접근, 자동화와 통합 중요, 개발자 참여 필요
- 보안활동: 보안 요구사항 분석, 보안설계, 코드수준 보안구현, 운영중 보호`,remark:null,image:[]},{index:73,topic:"ㄴ보안 취약점·공격 관련 대표 분류 체계",define:"- CVE로 식별 → CPE로 영향 분석 → CVSS로 위험도 판단 → CWE로 원인 분석 → CAPEC으로 공격 대응 설계",head:`- CVE: 소프트웨어·하드웨어 보안 취약점의 식별 번호 체계
- CWE: 소프트웨어 구조/설계 상의 결함
- CAPEC: 공격자의 입장에서의 공격 시나리오/패턴
- CVSS: 취약점의 위험도/심각도(0~10점)
- CPE: 취약점이 영향을 미치는소프트웨어/하드웨어 플랫폼 명세`,remark:`- 취약점은 CVE-연도-번호 형식으로 표기(CVE-2023-12345)
- CWE-89: SQL Injection
- CAPEC-137: Parameter Injection
- CVSS: 8.6 (HIGH)
- cpe:/a:apache:http_server:2.4.49`,image:[]},{index:74,topic:"ㄴ코드보안(Secure Coding)",define:`- IT 시스템 개발 단계에서 주요 보안 취약점을 고려하여 소스코드 레벨에서 사전에 제거하여 안전한
소프트웨어를 개발하는 기법`,head:`- 2015년 1월 감리대상 전 사업으로 확대 적용
- CWE(Common Weakness Enumeration)7 Pernicious Kingdoms
- CWE 7가지 치명적인 취약점: 입보시에코캡A`,remark:"- 입력 데이터 검증 및 표현, 보안기능, 시간 및 상태, 에러처리, 코드품질, 캡슐화, API악용",image:[]},{index:75,topic:"ㄴSAST(Static Application Security Test)- 화이트 박스 보안 테스트",define:`- 소스코드를 실행하지 않고 정적으로 분석하여 SQL Injection, 취약한 API 등 잠재적 보안 취약점을 사전에 탐지
하는 보안 테스트 방식`,head:`- 대상: 어플리케이션의 소스 코드, 바이트코드, 바이너리 등
- 기법: 코드 내의 취약점 패턴 탐지, 규칙 기반 분석
- 특징: 코드 실행 없이 분석
- 도구: Snyk, SonarQube 등`,remark:null,image:[]},{index:76,topic:"ㄴDAST(Dynamic Application Security Test)- 블랙 박스 보안 테스트",define:"- 애플리케이션을 실제 실행한 후, 외부 공격 시뮬레이션을 통해 런타임 기반 취약점을 탐지하는 블랙박스 테스트 기법",head:`- 기법: HTTP 요청/응답을 기반으로 SQL Injection, XSS, 인증 우회 등 동적 취약점 탐지
- 특징: 동적 테스트
- 도구: 국내(Sparrow DAST), 해외(OWASP ZAP, Burp Suite 등)`,remark:null,image:[]},{index:77,topic:"ㄴIAST (Interactive Application Security Testing)- 정적 + 동적 분석 테스트",define:"- 애플리케이션 실행 중 내부 코드 흐름과 외부 요청/응답을 동시에 분석하여 정적 + 동적 분석을 결합한 보안 테스트 기법",head:`- 기법: 런타임 시 애플리케이션 내부에 센서(Agent)를 삽입해 코드 수준 추적 + 요청
이벤트 분석을 병행
- 특징: 정적(SAST) + 동적(DAST) 통합 분석
- 도구: Contrast Security, Seeker (Synopsys), Veracode IAST 등`,remark:"DevOps 친화적",image:[]},{index:78,topic:"ㄴSECURE SDLC",define:"- 안전한 소프트웨어를 개발하기 위해 SDLC 상에서 보안을 강화한 개발 프로세스",head:`*방법론
- MS SDL: Windows OS 와 SQL Server 의 개발에 적용
- Secure SW CLASP: 시스템의 코드를 작성하기 전에 적절한 접근
- Seven TouchPoint: Gary Mcgraw 가 제안한, 실무적 검증
- BSIMM: 7 TouchPoint
- Open SAMM: 개방을 원칙으로 소규모,중/대규모로 점진적인 확대`,remark:null,image:[]},{index:79,topic:"사회공학(Social Engineering)",define:"- 인간 상호 작용의 깊은 신뢰를 바탕으로 사람들을 속여, 정상 보안 절차를 깨뜨리고 비기술적인 수단으로 정보를 얻는 행위",head:"- 절차: 정보 수집->관계형성->공격->실행",remark:`*유형
- 인간 기반: 도청 / 훔쳐보기, 휴지통 뒤지기
- 컴퓨터 기반: 피싱, 스미싱, 파밍, 악성소프트웨어, 디지털 포렌식 악용
- 물리적 수법: 베이팅(Baiting), USB 드롭 공격`,image:[]},{index:80,topic:"ㄴ피싱(Phishing)",define:"- 공격자가 신뢰할 수 있는 기관이나 사람으로 위장하여 이메일, 웹사이트, 메시지 등을 통해 사용자를 속이고 민감한 정보를 입력하게 유도하는 사회공학 공격 기법",head:`- 절차: 콘텐츠 제작->피해유도->정보 입력 유도->정보탈취, 악용
* 유형
- 스피어 피싱: 맞춤형 피싱
- 웨일링: CEO, 임원 등 고위 인사 겨냥
- 스미싱: 문자 메시지 이용
- 비싱: 전화를 이용해 금융기관 등을 사칭
- 큐싱: QR코드(QR + Phishing)
- 파밍: DNS나 hosts 파일을 조작`,remark:`*대응방안
- 출처 확인 습관화
- 보안 교육 강화
- 이메일 필터링 및 URL 차단
- 신뢰 인증 강화
- 2단계 인증(MFA)
- 보안 솔루션 도입`,image:[]},{index:81,topic:"ㄴ큐싱(Qshing)",define:`- QR코드(QR + Phishing)를 악용해 사용자를 가짜 사이트로 유도하여 개인정보, 인증정보 등을 입력하게
만드는 피싱 공격의 일종`,head:"- 절차: 악성 QR코드 생성->QR코드 유포->사용자 스캔 유도->악성 사이트 접속->정보 탈취 또는 기기 감염",remark:`* 대응방안
- 관리적: 사용자 교육, QR코드 내 다중인증(MFA), 모바일 기기 보안 강화
- 기술적: 피싱 방지 매커니즘 도입, 자동 필터링·스캔 시스템 적용

* 큐싱 1.0->2.0 차이점
- 악성 앱 설치·감염 유도, 앱 설치 후 악성 행위 자동 실행`,image:[]},{index:82,topic:"ㄴ파밍(Pharming)",define:"- 사용자가 정상적인 웹사이트에 접속한 것처럼 보이지만, 실제로는 악성 DNS 조작 등을 통해 공격자가 만든 가짜 사이트로 유도하여 개인정보를 탈취하는 공격",head:`- 절차: 가짜 사이트 설치->DNS해킹->IP 조회 및 제공->접근 및 개인정보 노출
- 유형: DNS 서버 파밍, Hosts 파일 조작, 악성코드 기반 파밍, 웹 프록시 파밍`,remark:"- 대응방안: DNS 보안 강화(DNSSEC), Hosts 파일 보호, 악성코드 차단, HTTPS 사용 확인, 보안 교육 및 훈련",image:[]},{index:83,topic:"악성코드(Malware)",define:"- 사용자의 동의 없이 시스템에 침투하여 정보를 탈취하거나 시스템을 파괴, 또는 권한을 탈취해 악의적 행위를 수행하는 프로그램",head:"- 유형: 트로이목마, 바이러스, 웜, 스파이웨어, 악성봇, 루트킷, 백도어, Key-logger, Ad-ware, 크립토재킹 (Cryptojacking)",remark:`* 보안대책
- 관리적: 보안 정책 및 기준 수립, 신종 악성코드 정보 숙지
- 물리적: 출입통제 강화, USB 등 저장매체 제어
- 기술적: 최신 백신 사용 및 자동 감시 설정, 이메일 첨부파일 검증, SIEM 통합 보안관제 적용`,image:[]},{index:84,topic:"ㄴ바이러스",define:"- 자기 복제 능력을 가진 악성코드로, 다른 파일·프로그램에 기생하여 감염 확산시키는 코드",head:"(1)부트,파일바이러스->(2)암호형바이러스->(3)은폐바이러스->(4)다형성바이러스->(5)매크로바이러스",remark:null,image:[]},{index:85,topic:"ㄴ웜(Worm)",define:"- 자신을 복제하여 기존 파일에 감염되지 않고 독립적으로 실행되며, 네트워크를 통해 확산되는 악성 프로그램",head:`- 유형: Mass Mailer형 , 시스템 공격형 , 네트워크 공격형
- 기법: 포트 스캐닝, 이메일 링크/파일 전송, 네트워크 폭주 유발 (DoS)`,remark:"- 보안대책: 보안 패치 최신화(OS 취약점 방어), 방화벽 및 포트 통제(웜 확산 차단), 트래픽 이상 모니터링(감염 탐지)",image:[]},{index:86,topic:"ㄴㄴ스턱스넷(Stuxnet)",define:"- 폐쇄망을 USB로 뚫고, 제로데이와 루트킷으로 은폐 확산한 뒤, PLC 코드를 변조해 이란 핵시설을 실제 파괴한 고도화된 산업 제어 시스템 (ICS/SCADA) 공격 악성코드",head:`- 특징: 웜 + 루트킷 + 드로퍼 + 제로데이 + PLC 파괴 코드가 결합된 멀티모듈형
- 단계: USB 감염 전파->산업시스템 탐색->PLC시스템 감염 및 확산->물리 시스템 교란`,remark:`* 대응방안
- 기술적: 저장매체 보안관리, 시스템 패치 적용, ICS/SCADA 전용 탐지 솔루션
- 관리적: 보안 인식 교육, 전사 보안 정책 수립, 공급망 보안 강화`,image:[]},{index:87,topic:"ㄴ랜섬웨어(Ransomeware)",define:"- 컴퓨터에 저장된 파일들을 암호화하여 사용자가 읽을 수 없는 문자들로 바꿔버린 후, 암호화를 풀어주는 (복호화) 대가로 금전(몸값)을 요구하는 악성프로그램",head:`- 특징: 지능적, 비표적화, 특정 타겟으로 진화, 몸값요구(비트코인 등)
- 공격방식: 암호화(Crypto 랜섬웨어), 비암호화(스크린 락, Locker 랜섬웨어)`,remark:`- 암호화 기술 고도화 → 취약점 자동 전파 → RaaS 서비스화→ 이중 협박 + APT화
- 크립토락커 (CryptoLocker), 워너크라이 (WannaCry), 페트야 (Petya), 낫페트야 (NotPetya), 배드래빗 (Bad Rabbit), 갠드크랩 (GandCrab)`,image:[]},{index:88,topic:"ㄴㄴRaaS(Ransomware as a Service)",define:"- 전문 해커가 개발한 랜섬웨어 도구를 다른 범죄자에게 서비스 형태로 제공하고, 감염 수익을 공유하는 사이버 범죄 비즈니스 모델",head:`- 특징: 툴 제공(SaaS형 툴킷 제공), 비기술자 사용, 익명성(암호화폐·다크웹)
- 방식: 구독형, 수익공유형, 혼합형
- 사례: 갠드크랩 (GandCrab), REvil (Sodinokibi), LockBit, BlackCat`,remark:`*KISA 백업 가이드 라인
- 3중 저장 원칙 적용 (본 시스템+백업+클라우드 등)
- 오프라인 저장장치 보관 및 자동화 시스템 백업 사용`,image:[]},{index:89,topic:"ㄴㄴㄴ토르 네트워크 (Tor Network)",define:"- 사용자의 인터넷 트래픽을 여러 중계 노드를 거쳐 암호화 경로로 우회시켜 익명성 보장을 위해 설계된 다단계 경유 네트워크 시스템(IP 추적을 어렵게 만듦)",head:`- 범죄 악용(다크웹과 연계됨)
- 구성요소: Cell, Circuit, OP(Onion Proxy), Directory 서버, OR (Onion Router), Exit Node`,remark:null,image:[]},{index:90,topic:"ㄴㄴ랜섬웨어 대응방안",define:"- 백업, KISA 118",head:`- 관리적: 보안 정책 및 백업 체계 수립, 버그바운티
- 기술적: 방화벽, IDS/IPS, 보안관제체계, 행위 기반 탐지 (EDR, SandBox 등)`,remark:null,image:[]},{index:91,topic:"ㄴㄴㄴ랜섬웹",define:"- 웹 서버 또는 웹 애플리케이션의 데이터베이스를 암호화하고, 웹 서비스 중단을 유도한 뒤 복호화 대가로 금전을 요구하는 공격 기법",head:`* 특징
- 장기적 침투와 정찰 후 실행되는 지능형 공격(APT 성격)
- DB 암호화(데이터베이스 직접 암호화 또는 삭제)`,remark:`* 대응방안
- 사전대응: DB 접근 로그 분석 및 이상 행위 감시, 정기 백업 + 백업 무결성 점검
- 탐지대응: 쿼리 이상 패턴 탐지 시스템 운영, DB 암호화 및 접근 감사 
- 사후대응: 백업 체계 구축, 랜섬노트 수집 및 법적 조치 준비`,image:[]},{index:92,topic:"ㄴㄴ악성 봇 (Malicious Bot)",define:"- 공격자(C&C 서버)의 명령을 받아 자동화된 악의적 행위를 수행하는 감염된 시스템 또는 프로그램",head:`- 특징: 자동화, 은밀성, 대규모 제어, 다기능성, 자기복제
- Bot 종류: 미라이봇넷, Qbot(Qakbot), Emotet, Zbot(Zeus), Necurs`,remark:"- 공격절차: 악성코드 유포->봇 감염->C&C 서버 접속->해커에 의한 명령 수신->공격실행",image:[]},{index:93,topic:"ㄴㄴMirai(미라이 봇넷)",define:"- 디지털카메라나 라우터 등의 IoT Device를 좀비로 활용하여, 대규모 DDos 공격을 수행하는 악성 봇넷",head:"- 특징 : IoT 대상, 기본 계정 공격(초기 비밀번호 이용), DDoS 전문 봇넷, 소스코드 공개(변종 확산), 빠른 확산성",remark:"- 대응방법: 기기 기본 비밀번호 변경, IoT 보안 설정 강화, 네트워크 접근 제어, IPS/IDS 활용, 통신 제한 설정, 소스코드 분석 및 변종 대응",image:[]},{index:94,topic:"ㄴㄴㄴIoT 공통 보안 가이드",define:"- IoT 제품 및 서비스의 기획·개발·운영 전 단계에 걸쳐 필요한 보안 요구사항을 제시하는 기준 문서",head:"- 기획 → 설계 → 개발 → 배포/설치 → 운영 → 폐기까지 모든 단계별 보안 지침 제공",remark:"IoT 보안 인증, 정보보호 인증제도 등과 연계",image:[]},{index:95,topic:"ㄴㄴㄴIoT 보안인증제도(CIC, Certification of IoT Cybersecurity)",define:"- IoT 제품이 정보보호인증기준에 적합함을 시험하여 인증서를 발급하는 제도",head:`- 등급: Lite(10개), Basic(23개), Standard(41개)
- 분류: 식별 및 인증, 데이터 보호, 암호, SW보안, 업데이트 및 기술지원, OS 및 NW보안, HW보안`,remark:"정보통신망 이용촉진 및 정보보호 등에 관한 법률 제 48조 6",image:[]},{index:96,topic:"ㄴ악성코드 분석 방법",define:"- 악성코드의 행위, 구조, 의도 등을 파악하기 위해 수행하는 기법",head:`*분석방법
- 정적분석: 실행하지 않고 내부코드 분석
- 동적 분석: 격리된 환경에서 실행(애뮬레이터, 가상머신)
- 하이브리드 분석: 정적 + 동적 분석
- 자동화 분석: 자동분석시스템
- 상세분석: 리버스 엔지니어링, 메모리 추적`,remark:null,image:[]},{index:97,topic:"ㄴ안티리버싱",define:"- 분석자가 악성코드를 분석하지 못하게 방해하기 위한 기법",head:`- 폴메암난코압
- 기법: Polymorphic(다형성), Metamorphic(변조), 암호화, 난독화, 코드가상화, 압축기법`,remark:"- 난독화 : 배치, 자료, 제어, 방지",image:[]},{index:98,topic:"ㄴㄴ악성코드 분석 방해 탐지 기법",define:"- 지능화된 공격 탐지는 시그니처, 행위, 유사도, 평판, 기계학습, 샌드박스를 복합 활용하여 정적+동적+지능형 탐지를 결합한 정밀 대응",head:"- 기법: 시그니처 기반 탐지, 행위 기반 탐지, 유사도 분석 기반 탐지, 평판 기반 탐지, 기계학습 기반 탐지, 샌드박스 기반 탐지",remark:null,image:[]},{index:99,topic:"ㄴ 악성코드를 이용한 대표 공격 기법",define:"- 사회공학 기반 공격, 사용자 유도 방식 (Fake AV 등), 대량 봇 감염 (Botnet), 표적공격(Targeted Attack), APT, 드라이브바이 다운로드",head:"",remark:null,image:[]},{index:100,topic:"ㄴㄴAPT(Advanced Persistent Threat)",define:"- 특수목적을 가진 공격자가 피해 대상을 표적으로 삼고 다양한 IT기술과 방식들을 이용해 지속적으로 정보를 수집하고 취약점을 파악하여 이를 바탕으로 피해를 끼치는 공격",head:`- 특징: 지능성, 지속성, 목표지향성, 조직성
* 공격 절차
- 침입: 침투, 사회공학, 제로데이 취약점, 수동공격
- 탐색: 관찰, 탐색, 다중벡터, 은밀한활동, 연구 및 분석
- 수집: 수집, 은닉, 권한상승
- 유출: 유출, 중단`,remark:`* 대응방안
- 관리적: 보안관리 및 운영, 위협 인텔리전스 활용
- 기술적: 엔드포인트 보안, EDR/XDR 도입, DLP 및 중요정보 암호화
- 접근 권한 및 관리: 다단계 인증 (MFA), 네트워크 접근 제어(NAC)`,image:[]},{index:101,topic:"ㄴㄴ인포스틸러(InfoStealer)",define:`- 사용자의 민감 정보(정보자산, 계정,비밀번호, 쿠키 등)를 몰래 수집하고 외부로 유출하는 악성코드
- APT 구성 요소, 트로이 목마 계열 악성코드`,head:`- 특징: 자동화, 2차 피해 유발, 공격 방식의 진화
- 절차: ID/PW 저장 여부->DPAPI 호출->OS Master Key를 통해 AES
Key 생성 및 BLOB 저장->암호화된 데이터가 저장->AES 키로 암호화된 PW 복호화 시도->최종적으로 ID/PW 유출`,remark:`* 대응방안
- 탐지 및 초기 대응: 악성코드 탐지, 브라우저 보호, 계정보호
- 침해 대응: 탈취정보 변경, 삭제
- 복구조치: 자격증명 재생성, 시스템 정비
- 재발 방지: 원인 분석 및 대응 프로세스 수립`,image:[]},{index:102,topic:"ㄴㄴBYOVD(Bring Your Own Vulnerable Driver)",define:"- 공격자가 취약점이 있는 서명된 드라이버를 시스템에 설치해 이를 악용하여 커널 권한 획득, 보안 우회, 루트킷 설치등을 수행하는 공격 기법",head:`- 특징: 합법적 서명사용, Rootkit 활용, 커널 접근권한 획득
- 절차: Initial Access->Privilege Escalation->Vulnerable Driver
Installation->Modify Kernel Structures->Disabled Security Controls`,remark:"- 대응방안: 취약한 드라이버 관련 IoC 차단, 윈도우 보안 업데이트, MS가 서명한 드라이버만 로드 허용",image:[]},{index:103,topic:"ㄴㄴ다중벡터 공격(Multi-Vector Attack)",define:`- 사이버 범죄자가 피싱, 악성코드, DDoS 등 다양한 공격 수단을 동시에 또는 연계하여 사용함으로써 조직 보안시스
템 침투 성공률을 높이는 공격 방식`,head:`- 특징: 다양한 공격경로, 탐지회피, 복잡한 대응
- 절차: 탐색->공격실행->은밀한 접근->권한유지->목표수행`,remark:`- 대응방안: 지능형 위협 차단 (ATP), 예방 중심 보안, 중앙 집중식 가시성 및
관리, 자동화된 인시던트 대응`,image:[]},{index:104,topic:"ㄴㄴLOTL (Living off the Land, 시스템 내 자원 활용 공격)",define:`- 공격자가 외부 악성코드 없이, 운영체제(OS)나 시스템에 기본적으로 존재하는 정식 도구(예: PowerShell,
WMI, certutil 등)를 이용해 공격을 수행하는 방식`,head:`- 특징: 탐지 회피(정상 도구 사용, 자급 자족 공격), 무기화(PowerShell등 악용)
- 절차: 초기 접근->도구악용->내부확산->은밀한 활동->흔적제거`,remark:"- 대응방안: 권한 최소화, 사용도구 통제, 행위기반 탐지, 로그 정밀 분석, EDR/XDR 활용, SBOM·정책 적용, 사용자 보안교육",image:[]},{index:105,topic:"암호 방식의 분류",define:"",head:`- 1세대: Password (인증 기술)
- 2세대: 대칭키 암호 (Symmetric)
- 3세대: 공개키 암호 (Asymmetric
- 4세대: 동형암호 / 함수암호
- 5세대: 양자내성암호 (PQC)`,remark:null,image:[]},{index:106,topic:"암호화",define:"- 정보를 인가되지 않은 사용자로부터 보호하기 위해 읽을 수 없는 형태로 변환하는 정보보호 기법",head:`인기무부가
- 인증, 기밀성, 무결성, 부인봉쇄, 가용성`,remark:null,image:[]},{index:107,topic:"ㄴ암호화 알고리즘",define:`- 치환(Substitution), S-Box, 혼돈: 원 문자를 다른 문자로 치환(다른 형태로)하는 암호화 기술
- 전치(Permutation), P-Box, 확산: 원 문자의 다른 위치로 변경하는 암호화 기술`,head:`치솔혼: 문자변경
전피확: 위치변경`,remark:null,image:["static/images/cellImage_1969927744_1.jpg"]},{index:108,topic:"ㄴ암호문 공격(Cryptanalysis)",define:`- 암호분석을 하는 방법 
- 암호문과 평문을 가지고 평문과 암호문을 알아내거나 암호화 하는데 쓰인 알고리즘이나 키를 알아내는 방법`,head:`- 암호문 단독공격(Ciphertext Only Attack, COA): 암호문을 알 때
- 알려진 평문공격(Known Plaintext Attack,KPA): 특정개수의 평문과 대응된 암호문을 알 때
- 선택 평문 공격(Chosen Plain text Attack, CPA): 원하는 평문에 대응되는 암호문을 계속 알 수 있을 때
- 선택 암호문 공격(Chosen Ciphertext Attack, CCA): 원하는 암호문에 대응되는 평문을 알 수 있을 때`,remark:null,image:[]},{index:109,topic:"ㄴ커크호프의 원리 (Kerckhoff’s Principle)",define:"- 암호 시스템의 안전성은 알고리즘이 아니라‘키의 비밀성’에 의존해야 한다는 보안 원칙",head:`- 키를 제외한 시스템의 다른 모든 내용이 알려지더라도 암호체계가 안전해야한다는 원리
- 원리: 공개 알고리즘 사용 가능, 키만 비밀로 관리, 알고리즘 검증성 확보, 보안의 투명성/신뢰성 확보`,remark:"- 적용 예시: AES / RSA 등 국제표준, 자체 암호 알고리즘",image:[]},{index:110,topic:"암호화 방식의 분류",define:`* 양방향(기밀성) 
- 대칭키 - Stream방식(Random), Block방식(Festel, SPN)
- 비대칭키 - 인수분해(RSA), 이산대수(디피헬만, 엘가멜), 타원곡선방정식(ECC)
* 단방향(무결성) - Hash - MDC, MAC`,head:`*양방향 : 대칭키 (stream,Block)/ 비대칭키 (인수분해, 이산대수, 타원곡선)
*단방향 : HASH`,remark:null,image:["static/images/cellImage_1969927744_2.jpg"]},{index:111,topic:"ㄴ대칭키 암호화",define:`- 스트림암호: 평문을 일정한 블록 단위로 나누어 처리하며, 각 블록마다 암호화 과정 수행
- 블록암호: 평문과 같은 길이의 키 스트림(Key Stream)을 생성하여, 비트 단위 XOR 연산으로 암호문 생성`,head:`* 블록 암호화
- Feistel: 데이터를 두 블록으로 나누고 S-Box를 통한 연산과, XOR로 비선형 변환을 적용하는 구조(DES, 더블DES, 트리플DES, SEED)
- SPN: S-Box와 P-Box를 반복적으로 사용하는 구조(AES-서시미아, ARIA)
* 평문 -> SBOX -> PBOX -> 암호문`,remark:null,image:["static/images/cellImage_1969927744_3.jpg"]},{index:112,topic:"ㄴㄴAES(Advanced Encryption Standard)",define:"- 미국 국립표준기술연구소(NIST)가 제정한128비트 블록, 128/192/256비트 키 길이를 지원하는 대칭키 블록 암호화 알고리즘",head:`- 특징: SPN 기반, 10, 12, 14 라운드(128/192/256비트 키에 따라)
- 원리: AddRoundKey, SubBytes, ShiftRows, MixColumns`,remark:"미국 표준(FIPS PUB 197), ISO/IEC 18033-3",image:[]},{index:113,topic:"ㄴㄴARIA(아리아)",define:"- 대한민국 정부가 개발한 128비트 블록, 128/192/256비트 키를 지원하는 대칭키 블록 암호화 알고리즘",head:`- 특징:  SPN 기반, Involutional 구조(복호화 구조 동일)
- 원리: AddRoundKey → Substitution Layer→ Diffusion Layer → AddRoundKey
(반복)`,remark:"국가표준(KS X 1213), ISO/IEC 18033-3",image:[]},{index:114,topic:"ㄴㄴLEA(Light Weight Encryption Algorithm)",define:`- 한국에서 개발된 128비트 블록 암호 알고리즘으로, 경량 환경(IoT, 모바일 등)에서도 빠르고 안전하게 작
동하도록 설계된 대칭키 암호 방식`,head:"- 특징: 128비트 블록 암호(고정된 블록 단위 처리), 다양한 키 길이 지원(128~256비트 선택 가능), ARX 기반 구조(간단한 연산만 사용), 고속 성능(빠른 암호화 수행)",remark:"경량 환경 최적화(IoT 등에 적합), 한국 국가표준(KISA 개발 : KS X 3246)",image:[]},{index:115,topic:"ㄴㄴ블록 암호화 운영모드",define:"- 고정 크기의 블록 암호 알고리즘(예: AES, DES 등)을 실제 데이터 암호화에 적용하기 위한 방식",head:`- ECB : 가장 간단, 성능빠름, 각 블록을 Key로 독립 암호화
- CBC : 이전 암호문 블록과 XOR 후 암호화 
- PCBC:  이전 평문 + 암호문 블록을 XOR해 다음 블록 암호화
- CFB : 블록 암호를 스트림처럼 동작 
- OFB : 키 스트림을 사전 생성, XOR 처리
- CTR : Nonce(고유값) + 카운터 값을 암호화해 키 스트림 생성, 평문과 XOR`,remark:`P
 |
BCE <--key
 |
 C`,image:[]},{index:116,topic:"ㄴㄴ스트림 암호화(Stream Cipher)",define:"- 평문을 1비트 또는 1바이트 단위로 처리하며, 키 스트림(Key Stream)과 비트 단위 XOR 연산을 통해 암호문을 생성하는 대칭키 기반의 순차 암호화 방식",head:"- RC4(Rivest Cipher 4): 로널드 리베스트(Ron Rivest)가 개발한 스트림 암호화 알고리즘, 키 스트림 + XOR",remark:"RC5(Rivest Cipher 5): 블록 암호, Feistel 구조",image:[]},{index:117,topic:"ㄴ비대칭키 암호화",define:"- 서로 다른 두 개의 키(공개키, 개인키)를 사용하는 암호화 방식으로, 한 키로 암호화하면 다른 키로만 복호화 가능한 구조",head:"- 특징: 키 쌍 사용(공개·개인키 분리), 기밀성 보장(상호 보완 복호화), 서명 가능(인증 및 부인방지), 키 분배 용이(공개키 자유 배포), 속도 느림(대칭보다 연산량 큼)",remark:`* 유형
- 인수분해 기반: RSA, Rabin, 윌리엄스 암호
- 이산대수 기반: Diffie-Hellman, DSA, ElGamal, KCDSA
- 타원곡선 기반: ECC, ECDH, ECIES, ECDSA`,image:[]},{index:118,topic:"ㄴㄴRSA(Rivest, Sharmir, Adleman)",define:"- 큰 소수 두 개의 곱에 대한 인수분해의 어려움을 기반으로 설계된 비대칭키 암호화 알고리즘",head:`- 특징 : 비대칭 구조(공개/개인키), 수학 기반 안정성(소인수분해 문제), 암호화/서명 인증 가능, 키 분배 용이, 속도 느림
* 키생성과정
1) 두 개의 서로 다른 소수를 선택(p, q)
2) n 계산 (모듈러스) n = p × q
3) 오일러 함수 φ(n) = (p - 1)(q - 1)
4) 암호화 지수 e 선택 
5) 복호화 지수 d 계산`,remark:null,image:["static/images/cellImage_1969927744_4.jpg"]},{index:119,topic:"ㄴㄴDSA (Digital Signature Algorithm)",define:"- 데이터를 위조하거나 변조되지 않았음을 검증하기 위해 사용되는 전자서명 전용 알고리즘",head:`* 특징
- 전자서명 전용(암호화는 불가), 무작위성 사용(서명 결과가 매번 달라짐),
- 비대칭 키 구조(개인키로 서명, 공개키로 검증), 변조 방지(위조 시 검증 실패), 공식 표준(NIST 정의)`,remark:`- (r, s) 서명 생성 → 수학적 연산 통해 검증
- 서명 생성은 (r, s) 계산 → 검증은 (r, s) 기반으로 v를 구해 r과 비교`,image:[]},{index:120,topic:"ㄴㄴ디피-헬만(Diffie-Hellman)",define:`- 암호화되지 않은 통신망을 통해 공통의 비밀 키를 공유할 수 있도록 하는 알고리즘

- 중간자 공격 취약 ---> 전자서명, 인증서 기반(PKI) 인증`,head:"",remark:null,image:["static/images/cellImage_1969927744_5.jpg","static/images/cellImage_1969927744_6.jpg"]},{index:121,topic:"ㄴㄴ엘가멜",define:`- 이산로그 문제의 어려움을 기반으로 한 공개키 암호화 방식
- Diffie-Hellman 키 교환을 바탕
- 암호문 길이가 평문의 2배가 되는 결점`,head:"",remark:`- 키암복
1)키생성  
y= g^x mod p(y,g,p 공개키, x비밀)
2) 암호화
- C1 = g^k mod P(k:난수)
- C2 = My^k mod P(M:메세지)
3) 복호화
- C2/ C1^x mod p => M 복호화`,image:["static/images/cellImage_1969927744_7.jpg"]},{index:122,topic:"ㄴㄴECC",define:`- 타원곡선 위의 수학적 연산을 기반으로 하는 공개키 암호화 방식
- RSA나 DSA보다 짧은 키를 가지고 경량 암호 시스템
- RSA 1024bit <--> ECC 160bit`,head:"",remark:null,image:["static/images/cellImage_1969927744_8.jpg","static/images/cellImage_1969927744_9.jpg"]},{index:123,topic:"ㄴ단방향 암호화",define:"- 한 방향으로만 변환 가능하고, 역방향(복호화)은 사실상 불가능한 암호화 방식",head:`* 특징
- 복호화 불가(복원 불가능), 입력 변화 민감(한 글자만 달라도 완전 다른 값)
- 출력 고정 길이(항상 같은 비트), 무결성 검증(데이터 위변조 탐지)
- 충돌 저항성(다른 값이 같은 출력 방지), 빠른 속도(고속 처리 가능)`,remark:"정보의 무결성을 확인",image:[]},{index:124,topic:"ㄴㄴ해시함수",define:`- 입력 데이터를 고정된 길이의 해시값(Hash Value)으로 변환하는 단방향 함수

- 고정 크기, 복호화 불가`,head:`- 특징: 압효저(압축성, 효율성, 저항성)

* 저항성 : 역이충
1) 역상저항성:
- 주어진 y값에 대해 h(x)=y를 만족하는 x값을 찾는것이 힘든 특성 
2) 제2역상저항성
- 주어진 x에 대해 h(x)=h(x')를 만족하는 x를 찾기 힘든 특성 
3) 충돌저항성 
- h(x)=h(x')를 만족하는 임의의 두 입력값 x, x'를 찾기 힘든 특성`,remark:null,image:["static/images/cellImage_1969927744_10.jpg"]},{index:125,topic:"ㄴㄴㄴMDC(무결성 검출 코드)",define:"- 입력 데이터의 무결성을 검증하기 위해 해시 함수를 이용해 생성되는 코드(누구나 계산 가능)",head:`- 암호화: 메시지 M --> 해시값 H(M) 
- 종류: MD5, SHA-2, SHA-3 등`,remark:null,image:[]},{index:126,topic:"ㄴㄴㄴㄴLSH(Lightweight Secure Hash)",define:"- 한국의 국가표준(KS X 3262)으로 제정 된, 128비트 보안 수준 이상을 제공하고, SHA-2 계열의 대안으로 설계 된 고속·고안전성 해시 함수",head:`* 특징
- 국산 해시 알고리즘(KISA 개발), 병렬 처리 최적화(SIMD 활용), 고속 연산(512/1024 입력),
- 다양한 출력 길이(224~512), 충돌 저항성 확보(보안성 보장), SHA-2 대비 고성능`,remark:"초기화->압축(덧셈(Add), 비트 회전(Rotation), XOR을 조합한 ARX 연산)->종료",image:[]},{index:127,topic:"ㄴㄴㄴMAC(무결성 인증 코드)",define:"- 메시지의 무결성과 송신자의 인증을 동시에 보장하기 위해, 메시지와 비밀키를 함께 사용해 생성되는 인증 코드",head:`- 특징: 무결성 + 인증
- 암호화: 메시지 M + 비밀키 K --> 인증코드 MAC(K,M)
- 종류: NMAC, HMAC (HMAC-SHA256, HMAC-SHA1 등), CMAC, KMAC`,remark:"비밀키 공유->메시지와 비밀키 입력->MAC 생성->MAC + 메시지 전송->수신자 측에서 MAC 재계산-> MAC 비교",image:[]},{index:128,topic:"ㄴㄴㄴㄴHMAC",define:"- MAC의 한 종류로, 해시 함수(SHA-1, SHA-256 등)를 이용해서 비밀키와 메시지를 섞어 MAC을 생성하는 방식",head:`- 비밀키 기반 : 해시값 생성 시 비밀키 사용 → MAC과 달리 키 없이는 위조 불가
- 중첩 구조(2번 해시) : 내부해시, 외부해시`,remark:null,image:[]},{index:129,topic:"ㄴㄴㄴ해시 안정성 강화 기법",define:`- 솔팅(Salting)
- 키 스트레칭(Key Stretching)
- 페퍼링(Peppering)
- 느린 해시 함수 사용
-  복합 적용`,head:"",remark:null,image:[]},{index:130,topic:"동형암호화",define:"- 기존 암호화 방법과 달리 암호화 상태에서 데이터를 결합하고 연산/분석 등이 가능한 4세대 암호화 기법",head:`* 특징
- 보안성과 연산 가능성 확보(암호 상태로 연산), 프라이버시 보존
- 복호화 불필요, 계산 비용 높음, 다양한 수준 존재(완전/제한 동형암호)

- 종류: 부분 동형암호화, 준 동형암호화, 완전 동형암호화
- 유형: Gen09, DGHV10, CRT-Based
- 알고리즘: Paillier, RSA, BGV, BFV, CKKS, TFHE`,remark:null,image:["static/images/cellImage_1969927744_11.jpg"]},{index:131,topic:"양자(Quantum)",define:"- 고전 물리학으로 설명할 수 없는 미시 세계에서의 물리적 단위로, 에너지나 물질의 최소 단위",head:`중얽불
- 기본성질: 중첩, 불확정성, 파동-입자이중성
- 상호작용 및 연결성: 얽힘, 측정문제
- 현상 및 응용: 양자터널링, 스핀`,remark:null,image:[]},{index:132,topic:"ㄴ양자 컴퓨터(Quantum Computer)",define:"- 양자역학의 원리(중첩, 얽힘 등)를 활용하여 정보를 처리하는 컴퓨터 시스템",head:`- 특징: 큐비트, 중첩, 얽힘, 양자간섭, 암호해독능력, 에러율 및 제어 어려움
- 용어: 이중슬릿 실험, 결맺음, 결잃음, 관측, 양자간섭, 터널링
- 유형: 게이트 기반, 양자 어닐링 컴퓨터 측정 기반 양자 컴퓨터, 위상 양자 컴퓨터`,remark:`- 큐비트 생성 기법: 초전도 큐비트, 이온트랩 큐비트, 광자 큐비트, 반도체 큐비트, 다이아몬드 큐비트
- 연산알고리즘: 쇼어 알고리즘, 그로버 알고리즘`,image:[]},{index:133,topic:"ㄴ양자내성암호(PQC)",define:"- Shor/Grover 알고리즘이 효율적으로 해결할 수 없는 수학적 문제(예: 격자 기반 문제, 부호 기반 문제 등)를 이용해 양자 환경에서도 공개키 암호의 보안성을 유지할 수 있도록 설계된 암호 방식",head:`다코격아해 
다변수기반: Rainbow, Gui
코드기반: QC-MCPC, Wild McEliece (암호화)
격자기반: Kyber (암호화), Dilithium (서명), SS- NTRU, FrodoKEM
아이소제니기반: SIDH
해시기반: SPHINCS+ (서명, 무 상태형), XMSS(상태 유지형)`,remark:null,image:[]},{index:134,topic:"ㄴ양자 통신(양자암호통신)",define:"- 양자역학의 원리를 이용해 정보를 생성, 전송, 저장, 처리하는 차세대 정보통신 기술",head:`- 특징: 절대보안성(측정 시 탐지), 양자 키 분배(QKD 안전한 키 공유)
* 주요기술
- 광원기술: 양자광원, 양자검출기
- 기반네트워크: Optical-Fiber QKD, Free-Space QKD
- 양자암호 프로토콜 (QKD 프로토콜): BB84, COW04
- 난수생성: 의사난수, 양자난수생성기(QRNG)`,remark:null,image:[]},{index:135,topic:"ㄴㄴQKD(양자 키 분배)",define:"- 양자역학의 원리를 이용해 두 사용자 간에 절대적으로 안전한 암호 키를 공유하는 기술",head:`- 특징: 도청 탐지 가능, 무작위성 기반 보안, 비대칭 암호 대체 가능
*유형
- BB84: 최초의 QKD 프로토콜, 양자 채널 + 고전 채널, 편광 상태 (0°, 90°, 45°, 135°), 절대보안
- COW04: 단방향(One-Way), 레이저 펄스 간 간격, 신호 펄스 + 기준 펄스 조합, 보안성은 낮지만, 구현이 간단하고 실용성 높음`,remark:null,image:[]},{index:136,topic:"전자상거래",define:"- 인터넷상 홈페이지로 개설된 상점을 통해 실시간으로 상품을 거래하는 것",head:`- 공격유형: 인기무부
- 인증에 대한 공격, 송/수신 부인공격, 기밀성에 대한 공격, 무결성에 대한 공격`,remark:null,image:[]},{index:137,topic:"ㄴPKI(Public Key Infrastructure)",define:"- 공개키 암호화 기법을 기반으로, 안전한 전자 인증과 데이터 통신을 위한 키 관리 및 인증 체계",head:`- 구분: 정책승인기관(PAA), 정책인증기관(PCA), 인증기관(CA), 등록기관(RA)
- 공동인증서 구조: X.509 인증서 표준
- 발급절차: RA에 신청->CA에 발급요청->암호화키쌍생성->개인키 전달,공개키 포함 인증서 저장`,remark:`* 인증서 검증 매커니즘
1) CRL(Cerificate Revocation List): 인증서에 대한 폐지 목록 
2) OCSP(Online Certificate Status Protocol): 실시간으로 인증서의 유효성을 검증할 수 있는 프로토콜 
3) SCVP(Simple Cerificate Validation Protocol): 인증서의 유효성 여부와 특정 인증서까지의 인증서 체인을 제공`,image:[]},{index:138,topic:"전자서명",define:"- 서명자의 신원을 확인하고, 전자문서의 위변조 여부를 검증하기 위해 전자적 방식(공개키 암호 기반)으로 생성된 데이터",head:"- 특징: 위조불가, 서명자 인증, 부인방지, 변경 불가, 재사용 불가, 분쟁해결 가능",remark:"- 적용알고리즘: RSA, ECDSA, KCDSA, Dilithium, SPHINCS+",image:[]},{index:139,topic:"ㄴ생성절차/확인절차",define:"",head:`서개봉공

- 생성절차: 1)원문 작성 2)해시 함수 적용 3)해시값 암호화(전자서명 생성) 4)원문 + 서명전송
- 확인절차: 1)원문 해시값 계산 2)서명 복호화 3)해시값 비교 4)확인 결과 판단`,remark:null,image:[]},{index:140,topic:"전자봉투",define:"- 데이터를 비밀키(대칭키, 세션키)로 암호화하고, 해당 대칭키를 수신자의 공개키로 암호화하여 안전하게 전달하는 하이브리드 암호화 방식",head:`- 특징: 복합 암호 구조(대칭+공개키 결합), 속도와 보안성 동시 확보(효율적암호)
- 전자서명(무결성, 부인방지, 인증성) + 기밀성`,remark:`* 활용
- 전자상거래: 결제 정보 보호
- 이메일 보안: 기밀 메일 전송
- 전자정부: 민원/세금 데이터 보안 전송
- 전자문서 유통: 계약서·보고서 보안 전달`,image:[]},{index:141,topic:"ㄴ생성절차",define:`1) 원문 작성
2) 비밀키 생성
3) 원문 암호화
4) 비밀키 암호화
5) 전자봉투 구성
6) 전송`,head:"",remark:null,image:["static/images/cellImage_1969927744_12.jpg"]},{index:142,topic:"ㄴ확인절차",define:`1) 비밀키 복호화
2) 원문 복호화
3) 문서 확인`,head:"",remark:null,image:["static/images/cellImage_1969927744_13.jpg"]},{index:143,topic:"SET(Secure Electronic Transaction, 안전한 전자거래 프로토콜)",define:"- 온라인 신용카드 거래의 안전성을 확보하기 위해 Visa와 MasterCard가 공동으로 개발한 전자결제 보안 프로토콜",head:`- 특징: 보안성, 구매자, 판매자, 카드사 간 상호 인증, 이중서명
* 기술요소 
- 공개키 기반 구조 (PKI), 디지털 인증서(X.509 기반 인증서), 전자서명, 이중서명, 전자봉투, 메시지 무결성 검증`,remark:null,image:[]},{index:144,topic:"ㄴ이중서명",define:"- SET 프로토콜에서 주문 정보(OI)와 지불 정보(PI)의 연결은 유지하면서 내용은 분리시켜 각각의 수신자만 해당 내용을 볼 수 있도록 하는 전자서명 방식",head:`*목적
- 판매자는 지불 정보 열람 불가
- 카드사는 주문 정보 열람 불가
- 정보 유출 방지 + 무결성 검증

* 절차 
이중서명 생성>전자봉투 생성 > 구매정보 확인(판매자) > 결제 정보 확인(PG사) 
- 구매정보/결제정보를 송신자의 개인키로 전자서명하고 수신자의 공개키로 암호화하여 전자봉투와 함께 전송`,remark:null,image:["static/images/cellImage_1969927744_14.jpg"]},{index:145,topic:"전자우편 암호화",define:"- 전자우편 내용을 제3자가 볼 수 없도록 암호화 알고리즘을 이용해 메일 본문과 첨부파일 등을 보호하는 기술 또는 방식",head:`- 특징: 기밀성, 무결성, 부인방지
- 구분: PGP, S/MIME, PEM`,remark:null,image:[]},{index:146,topic:"ㄴDMARC(Domain-based Message Authentication, Reporting and Conformance)",define:"- 도메인 기반 메일 인증 프로토콜로, SPF·DKIM을 기반으로 메일 발신 도메인을 인증하고 그 결과를 보고·조정할 수 있는 체계",head:`- 특징: 의심메일 차단 , 차단메일 리포팅
- 구성요소: RFC 7489, SPF, DKIM 기반 메일 검증, DNS, 보고서 생성, 정책전달`,remark:null,image:[]},{index:147,topic:"네트워크 암호화",define:`- 데이터가 네트워크를 통해 전송되는 중간 과정에서 도청, 위·변조, 재전송 공격 등으로부터 보호하기 위해 데이터를
암호화하는 기술`,head:`- 7계층: HTTPS, S/MIME / PGP, SSH, FTPS / SFT
- 4계층: TLS/SSL
- 3계층: IPSec, VPN
- 2계층: MACSec (802.1AE)
- 무선: WPA2 / WPA3, EAP`,remark:null,image:[]},{index:148,topic:"ㄴIPSec",define:"- 네트워크 계층(3계층)에서 IP 패킷을 암호화하고 인증하여 안전한 네트워크 통신을 보장하는 프로토콜 집합",head:`* 구성요소
- 인증구성: SH, AH(인증, 무결성), ESP(인증, 무결성,기밀성), IKE
- 정책구성: SAD, SPD

* 운영모드
- 전송모드: Host-to-Host (종단 간) 
- 터널모드: Gateway-to-Gateway / Host-to-Gateway 통신`,remark:`* 정책
- SP: 보안정책 
- SPD: 보안정책 DB 
- SA: 보안연관 파라미터 정의 
- SAD: 보안연관 DB 
* 키관리
- IKE: 키 교환 관련 SA 생성 
- ISAKMP: 키 교환/인증 프로토콜`,image:[]},{index:149,topic:"ㄴㄴ키교환 절차(IKE)",define:"- IKEv1:  IKE SA 설정-> IPSec SA 설정",head:`- IKEv2: RFC 7296 (최신) 
1)1단계(IKE_SA_INIT): DH 교환 시작
2)2단계(IKE_SA_INIT Response): 공통 마스터 키 생성
3)3단계(IKE_AUTH): 사용자 인증 및 IPSec SA 제안
4)4단계(IKE_AUTH Response): IKE SA + IPSec SA 최종 설정`,remark:null,image:[]},{index:150,topic:"ㄴSSL(Secure Socket Layer)",define:"- TCP/IP 계층과 애플리케이션 계층 사이에 위치하여 인증, 암호화, 무결성을 보장하는 업계 표준 프로토콜",head:`- 구성요소: Handshake, Change CipherSpec, Alert, Record
* SSL 핸드쉐이크
1) ClientHello(클라이언트 시작 메시지)
2) ServerHello(서버 응답 메시지)
3) ServerKeyExchange(서버 키 교환 정보 제공)
4) ServerHelloDone(서버 메시지 완료 알림)
5) ClientKeyExchange (클라이언트 키 교환 정보 전송)
6) ChangeCipherSpec(암호화 전환 통지)
7) Finished(세션 완료 메시지)`,remark:"* 특징(공삼암핸) : 공개기기반, 3가지인증모드, 다양한 암호화 알고리즘, 핸드쉐이크 통신",image:[]},{index:151,topic:"ㄴㄴTLS 1.3",define:"- 인터넷 상에서 안전한 통신을 보장하기 위해 이전 버전인 TLS 1.2의 보안 취약점과 성능 문제를 개선하여 더 빠르고 안전한 통신을 제공하기 위한 프로토콜(2018년 RFC 8446에 의해 표준화)",head:`* 주요변경사항 
- 1-RTT 핸드셰이크
- 0-RTT 데이터 전송 (옵션)
- 전체 연결과정 단축
- 암호 스위트 단순화(AEAD 방식만 허용)
- Perfect Forward Secrecy(PFS) 기본 적용(ECDHE 키 교환만 허용)
- 레거시 알고리즘 제거(RSA 키 교환, SHA-1, RC4, 3DES 등 모두 제거)`,remark:null,image:[]},{index:152,topic:"ㄴDNS(Domain Name System)",define:"- 네트워크에서 도메인이나 호스트 이름을 숫자로 된 IP주소로 해석해주는 TCP/IP 네트워크 서비스",head:"",remark:null,image:[]},{index:153,topic:"ㄴㄴDNSSEC(DNS Security)",define:"- DNS 응답에 디지털 서명을 추가하여, 응답이 변조되지 않았음을 검증할 수 있도록 확장한 DNS 보안 기술",head:`* 특징
- 무결성 보장(변조 방지), 출처 인증(서버 확인), 전자서명 기반(공개키 구조)
- 신뢰 체인 구조(루트 → TLD → 도메인까지 공개키를 체인으로 검증)`,remark:`* 구성요소
- ZSK: 특정 도메인 영역(zone)의 레코드에 서명 키
- KSK: ZSK의 공개키에 서명하는 상위 키
- RRSIG: 디지털 서명 데이터
- DNSKEY: 공개키를 저장하는 레코드
- DS: DNSKEY를 상위 서버에 등록
- NSEC/NSEC3: 부재 증명 레코드`,image:[]},{index:154,topic:"ㄴDRM",define:"- 디지털 콘텐츠의 생성과 이용까지 유통 전 과정에 걸쳐 디지털콘텐츠를 안전하게 관리 및 보호하고, 부여된 권한 정보에 따라 디지털콘텐츠의 이용을 통제하는 기술",head:"- 구성요소: 콘텐츠 제공자, 분배자, 소비자, 클리어링 하우스, DRM 컨트롤러, 보안 컨테이너",remark:"- 세부기술: 콘텐츠 패키징 기술, 권리 표현 기술, 워터마킹/핑거프린팅, 복제 방지 기술, 콘텐츠 식별 체계, 클리어링 하우스 기술",image:[]},{index:155,topic:"ㄴㄴDOI(Digital Object Identifier)",define:`- 디지털 콘텐츠에 대한 영구적인 식별자(ID)를 부여하여 위치(URL)가 바뀌더라도 언제든 접근 가능하도록 하
는 국제표준 식별체계`,head:"- Prefix(제작자기호)와 Suffix(제작자가 부여한 아이템ID)로 나누어짐",remark:`* 단계
1) 이용자가 DOI를 요청
2) 등록관리 시스템이 매핑된 URL확인->최초 등록된 URL로 연결(URL1)
3) 콘텐츠 위치(URL) 변경 발생
4) 등록관리 시스템에서 URL만 갱신
5) 사용자 재접근 시 최신 콘텐츠 연결`,image:[]},{index:156,topic:"ㄴㄴINDECS (Interoperability of Data in E-Commers System)",define:"- 디지털 콘텐츠 유통과 전자상거래 환경에서 다양한 메타데이터 간 상호운용성을 보장하기 위해 제안된 메타데이터 프레임워크",head:"- 디지털 저작물의 권리 관리, 거래 이력, 사용 이력 등 메타데이터를 표준화하고 연결하기 위한 구조",remark:`* 단계
1) 콘텐츠의 메타데이터 등록 요청
2) INDECS 서버는 메타데이터 등록, 정책설정
3) INDECS 등록 콘텐츠에 대해 DOI(영구 식별자) 발급 및 연결
4) DOI가 연결된 콘텐츠를 E-commerce 플랫폼에 연계하여 유통
5) 콘텐츠에 워터마크 삽입 등 불법 복제 방지 기술 적용
6) 사용자 콘텐츠 다운로드`,image:[]},{index:157,topic:"ㄴㄴ디지털워터마킹 - 보호",define:`- 디지털 컨텐츠에 저작권을 표시할 수 있는 워터마크를 사용자가 지각적으로 인지하지 못하도록 은닉하여 삽입하
는 기술 (저작권 보호)`,head:`- 기술: 디지털 워터마킹, 스테가노그래피, 핑거프린팅
- 강인성: 강성워터마킹, 연성워터마킹`,remark:`- 시각화: 보이는 워터마킹, 보이지 않는 워터마킹 
- 저작물: 이미지, 오디오, 비디오, 텍스트, 벡터`,image:[]},{index:158,topic:"ㄴㄴ핑거프린트 - 추적",define:"- 디지털 콘텐츠에 각 사용자별로 고유한 식별 정보(구매자 관련 정보)를 삽입하여콘텐츠가 불법 복제·유출되었을 때 해당 유출자를 추적할 수 있도록 설계된 기술",head:"- 비가시성, 견고성, 공모허용, 비대칭성",remark:`* 공모 허용 공격
- 다수의 정품 사용자가 핑거프린트가 삽입된 부분을 식별/제거/수정 후 복제본을 생성
- 핑거프린팅 시스템이 공모에 약할 경우, 유출자 추적 불가능
- 평균화, 최대 최소, 상관계수 음수화/제로화, 모자이크 공격`,image:[]},{index:159,topic:"ㄴㄴMPEG-21",define:"- MPEG(Moving Picture Experts Group)에서 제정한 디지털 콘텐츠의 통합 유통, 거래, 보호를 위한 멀티미디어 프레임워크",head:"- 목적 : 디지털 콘텐츠의 식별, 관리, 거래, 보호, 사용 통제 등 전체 생애주기 관리",remark:null,image:[]},{index:160,topic:"인증시스템",define:"- 사용자 또는 시스템의 신원을 확인하고, 접근 권한 부여를 위한 기준을 확인하는 보안 메커니즘",head:`- 인증(Authentication): 사용자의 신원을 확인하고 정당한 접근자인지 검증하는 과정(누구인지 결정)
- 인가(Authorization): 인증된 사용자에게 어떤 리소스나 기능에 접근할 수 있는 권한이 있는지 결정하는 보안 절차( ‘무엇을 할 수 있는지’ 결정)
- 인증요소: 지소생특
- 인증방식: 싱글팩터 인증, 멀티팩터(MFA), 멀티채널 인증`,remark:`* 인증기술: 비밀번호 기반 인증, OTP, 토큰기반, 생체인증, SSO, FIDO
* 인가기술: 접근통제정책, OAuth 2.0, SAML, XACML`,image:[]},{index:161,topic:"ㄴOTP(One Time Password)",define:`- 원격 사용자 인증 시 유발되는 패스워드 재사용 공격을 차단하기 위해 사용시마다 매번 바뀌는 1회성의 사용
자 인증 암호 및 체계`,head:"- 유형 : HOTP(HMAC-based One-Time Password: 카운트 기반), TOTP (Time-based One-Time Password : 시간 기반)",remark:null,image:[]},{index:162,topic:"ㄴSSO(Single Sign On)",define:"- 사용자가 한 번의 로그인으로 여러 시스템 또는 서비스에 접근할 수 있도록 해주는 인증 방식",head:`- 특징: 한 번의 로그인, 사용자 편의성 향상, 중앙 집중 관리, 취약 시 영향 큼
- 구성: Client, 서비스제공자, 인증제공자(서버, IdP), 토큰, LDAP(디렉토리)
- 유형: 인증대행 모델(Delegation), 인증정보 전달 모델(Propagation)`,remark:null,image:[]},{index:163,topic:"ㄴㄴSAML (Security Assertion Markup Language)",define:"- XML 기반의 인증 및 권한 부여를 위한 표준 프로토콜(인증/인가)",head:`- 특징: SSO 지원, 플랫폼 독립성(XML 기반으로 호환성 높음)
- 구성: 서비스제공자, 인증제공자(서버, IdP), SAML Assertion, Protocol`,remark:null,image:[]},{index:164,topic:"ㄴOAuth 2.0(인가)",define:"- 사용자가 서비스 제공자에게 로그인 정보(비밀번호 등)를 제공하지 않고, 제3자 애플리케이션이 사용자의 자원 접근을 위임받을 수 있게 해주는 인가(Authorization) 프로토콜",head:`- 특징: 비밀번호 미노출, 액세스 토큰 기반, 역할 분리
- 구성요소: Resource�Owner, Client�(클라이언트), 권한서버, 자원서버, 액세스 토큰, 리프레시 토큰`,remark:`*인가 절차
1) 서비스 접근 요청 
2) 인가 요청
3) 로그인 페이지 표시
4) 로그인 및 권한 승인 
5) Authorization Code 전달
6) 토큰 요청 
7)Access Token 발급 
8) 리소스 요청 
9) 리소스 응답 
10) 사용자에게 서비스 제공`,image:[]},{index:165,topic:"ㄴ세션기반 인증과 토큰기반 인증",define:`- 세션기반 인증: 세션 정보를 서버에 저장
- 토큰기반 인증: 서버가 토큰(JWT 등)을
생성하여 클라이언트에 전달`,head:`- 저장: 서버 (세션 저장소)/클라이언트 (토큰을 로컬스토리지, 쿠키 등에 저장)
- 상태유지: Stateful (서버가 상태 기억함)/Stateless (서버는 상태 기억 안 함)
- 예시: JSP, PHP, Spring Session/JWT, OAuth, OpenID Connect 등`,remark:null,image:[]},{index:166,topic:"ㄴPasskey",define:"- 공개키 기반을 활용하여 비밀번호 없이 사용자 인증을 수행하는 인증 방식",head:`- 보안방식: 공개키-비공개키 기반 인증
- 사용방식: 디바이스에 저장된 키 자동 사용
- 표준문서: FIDO2 (WebAuthn, CTAP)
- 사례: Apple/Google Passkey`,remark:null,image:[]},{index:167,topic:"생체 인증(Biometric Authentication, 생체 인식)",define:"- 지문, 얼굴, 홍채, 정맥 등 개인이 가진 고유의 생체 정보를 이용해 신원을 확인하는 인증 방식",head:`- 특징: 고유성, 편의성, 변하지 않음, 비가역성, 비접촉 가능
- 분류: 정적 생체 정보(지문,얼굴,홍채,망막), 동적 생체 정보(타이핑, 걸음인식)

* 정확성 판단기준 
- 오거부율(FRR): 잘못된 거부의 비율 
- 오인식율(FAR): 잘못된 허용의 비율 
- CER: FRR과 FAR의 교차점, 낮을 수록 성능 우수`,remark:`* 절차
1) 생체 정보 수집
2) 데이터 전송
3) 신호 처리 및 특징 추출
4) 품질 확인
5) 템플릿 생성/매칭
6) 신뢰도 판단
7) 인증 결과 확인`,image:[]},{index:168,topic:"ㄴFIDO(Fast Identity Online)",define:"- 생체 인식, 보안키, 디바이스 기반 인증 등을 통해 안전하고 간편한 비밀번호 없는 인증을 목표로 하는 웹 인증 표준 프레임워크",head:`* 구성요소
- 사용자측: User Device, User Agent, FIDO Client, Authenticator Abstraction, FIDO Authenticators
- 서비스측: Relying Party, Web Application, FIDO Server, OS/Server보안모듈
- 프로토콜: UAF/U2F, FIDO2`,remark:null,image:[]},{index:169,topic:"ㄴFIDO2(Fast Identity Online2)",define:"- FIDO 1.0의 모바일 앱 중심에서, PC 운용체계(OS)나 웹 브라우저에서 FIDO 인증 장치를 인식해 서비스하는 형태",head:`* 구성요소
- WebAuthn, CTAP, Relying Party (RP), Authenticator (인증자), Client`,remark:"운영체제(ASM) <----> 외부인증장치 CTAP",image:[]},{index:170,topic:"ㄴ텔레바이오 인증",define:"- 원격 환경에서 생체정보(지문, 얼굴, 음성 등)를 IT 기기를 통해 추출, 저장하고 네트워크로 전송하여 인증하는 기술",head:`- 기반기술: 광학, 정전용량, 초음파, 적외선, 딥러닝 (CNN, PCA)
- 지원기술: PbD, PIA, 안전한 암호화 기술, 전송구간 암호화`,remark:"- 활용사례: 디지털 헬스케어 인증 서비스, 자율주행 인증 및 운전자 보호, 반려동물 개체식별 인증 서비스, 스마트 시티",image:[]},{index:171,topic:"ㄴEAM(Enterprise Access Management)",define:"- 기업 내부 및 외부 사용자(파트너, 협력사 등)가 기업 리소스(시스템, 애플리케이션, 데이터 등)에 안전하게 접근할 수 있도록 관리하는 통합 접근 제어 시스템",head:"EAM=SSO+권한관리+자원관리+보안정책",remark:null,image:["static/images/cellImage_1969927744_15.jpg"]},{index:172,topic:"ㄴIAM(Identity Access Management)",define:"- 사용자의 신원(Identity)을 확인하고, 해당 사용자에게 적절한 자원 접근 권한을 부여 및 관리하는 보안 프레임워크",head:`IAM=EAM+Provisioning(사용자 계정과 권한의 생성·배포·회수·삭제 자동화)

- 주요 기능: 계정관리·인증관리·프로비저닝·워크플로우·셀프서비스 → 권한관리(RBAC·권한 위임) → 감사(로깅·모니터링) → 시스템(서버·엔진·저장소·에이전트)`,remark:`* 클라우드 IAM
- 클라우드 환경에서 사용자·애플리케이션·서비스의 신원(Identity)을 관리하고, 자원(Resource)에 대한 접근 권한을 제어하는 보안 관리 체계 

* 클라우드 IAM 주요 기능
- Authentication(인증)
- Authorization(인가)
- RBAC / ABAC (역할/속성 기반 접근 제어)
- SSO(싱글사인온)
- MFA(다단계 인증)
- Federation(연합 인증, 예: SAML, OIDC)`,image:[]},{index:173,topic:"보안시스템(Security System)",define:"- 정보시스템의 무결성, 기밀성, 가용성을 보호하기 위해, 위협 탐지·차단·대응을 수행하는 기술 및 장비의 집합",head:"- 영역: 인증/인가, 네트워크, 어플리케이션, 데이터 ,단말, 보안관제 대응, 물리 보안, 클라우드 보안",remark:null,image:[]},{index:174,topic:"ㄴ방화벽",define:"- 내부 네트워크와 외부 네트워크 사이에서 트래픽을 제어하여, 비인가 접근이나 공격을 차단하는 보안 시스템",head:`구축유형: 스베듀스스 
스크리닝 라우터, 베스천 호스트, 듀얼홈드 게이트웨이, 스크린드 호스트 게이트 웨이, 스크린드 서브넷 게이트웨이`,remark:`* 기능: 접사감프주 
- 접근제어, 사용자인증, 감사 및 로그, 프록시 기능, 주소변환(NAT) 

* 한계(침백바내부)
- 침입알람부재, 백도어방어불가, 바이러스탐색 불가, 내부사용자에 의한 침해, nw부하

* 기술, 기능 측면유형
- 패킷 필터링 방화벽, 상태 기반 방화벽, 프록시 방화벽, 차세대 방화벽 (NGFW), 웹방화벽, 호스트 기반 방화벽`,image:[]},{index:175,topic:"ㄴㄴ차세대 방화벽 (NGFW: Next-Generation Firewall)",define:"- 기존 방화벽의 기능(IP/포트 필터링 + 상태 검사)에 더해, 애플리케이션/사용자/콘텐츠 기반의 보안 제어를 제공하는 고급 통합 보안 장비",head:`* 주요기능 
- 애플리케이션 식별 및 제어 
- 실시간 SSL 세션 해독 
- 고성능 보안기능 
- 알려지지 않은 위협대응 
- URL 필터링 
- 기존 보안 기술 제공`,remark:"기존방화벽 + 실시간 + 어플리케이션 + 기본에 알려지지 않은 anomaly까지 detection + 행위기반",image:[]},{index:176,topic:"ㄴㄴWAF (Web Application Firewall, 웹 방화벽)",define:"- 웹 애플리케이션을 대상으로 하는 공격(예: SQL Injection, XSS 등)을 탐지하고 차단하는 HTTP/HTTPS 기반 전용 방화벽 시스템",head:`- WAF는 웹 요청 내용(URI, 파라미터, 쿠키 등)을 검사
* 주요기능
- 웹 공격 탐지 및 차단
- HTTP/HTTPS 트래픽 분석
- 정책 기반 필터링
- 세션 쿠키 보호
- SSL 복호화 처리(SSL Offloading)
- 실시간 경보 및 차단
- 로깅 및 감사 기능
- OWASP Top 10 대응
- API 보호 기능, 우회 공격 대응`,remark:null,image:[]},{index:177,topic:"ㄴIDS(Intrusion Detect System)",define:"- 비인가된 사용자가 자원의 기밀성, 무결성, 가용성을 저해하는 일련의 행동들과 보안 정책을 위반하는 행위, 즉 침입(Intrusion)을 실시간으로 탐지하는 시스템",head:`- 구성: 정보수집기(Sensor), 정보분석기, 로그 저장소, 이벤트 보고기, 패턴 생성기, 패턴 DB
- 유형: 호스트기반(HIDS), 네트워크기반(NIDS), 하이브리드 IDS
- 탐지방식: 시그니처 기반 IDS, 행위기반 IDS`,remark:`탐지, 알림만 
사전차단, 능동 대처 불가`,image:[]},{index:178,topic:"ㄴIPS(Intrusion Protection System)",define:`- 침입 시도나 이상 행위를 실시간으로 탐지하고, 탐지 즉시 자동으로 차단하는 능동형 보안 시스템
- IDS의 탐지 기능 + 차단 기능`,head:`- 구성: 패킷 캡처 엔진, 탐지 분석 엔진, 정책 제어 모듈, 로깅 및 경보 모듈, 관리자 인터페이스
- 유형: 호스트기반(HIPS), 네트워크기반(NIPS) 
- 탐지방식: 시그니처 기반 IDS, 행위기반 IDS`,remark:"패킷 하나하나 실시간 검사, 방어",image:[]},{index:179,topic:"ㄴWIPS(Wireless Intrusion Protection System)",define:"- 무선 네트워크(Wi-Fi)에 대한 침입을 탐지하고 차단하는 보안 시스템",head:`- 기능: 불법 접근, 도청, 공격 등을 탐지 → 차단 → 대응
- 구성요소: WIPS센서, WIPS서버, WIPS콘솔`,remark:`WIDS(Wireless Intrusion Detection System)
- 탐지만 수행 (수동 모니터링),  실시간 경고만 발생`,image:[]},{index:180,topic:"ㄴVPN(Virtual Private Network)",define:"- 터널링 기법을 사용해 인터넷과 같은 공중망에서 전용회선을 구성한 것과 같은 효과를 내는 가상 네트워크",head:`- 기능: 암호화 통신, 터널링, 데이터 무결성 보호, 사용자 인증
- 구현기술: 터널링, 암호화, 인증, 키관리, 복수 프로토콜 지원
- 구성방식: Point-to-Point, Hub-and-Spoke, Full Mesh, Partial Mesh, Overlay VPN, Peer-to-Peer
* 구성유형
- 본사-지사 간 통신: Lan to Lan (Site-to-Site VPN), IPSec 기반 VPN
- 출장자, 재택 근무자, 모바일 사용자: Lan to Client (Remote Access VPN, SSL VPN 또는 IPSec + Client 방식`,remark:`Layer4: SSL
Layer3: IPSec
Layer2: L2F, L2TP, PPP, MPLS`,image:[]},{index:181,topic:"ㄴMPLS(MultiProtocol Label Switching)",define:"- IP 주소 기반 라우팅 대신, 짧은 라벨(Label)을 사용해 패킷을 빠르고 효율적으로 전달하는 네트워크 전송 기술",head:`- 특징: 고속 전송(라벨 기반), QoS 지원(우선순위/지연 제어), VPN 구현 가능
* 구성요소
- 네트워크 장비: LER, LSR, LSP
- 프로토콜: LDP, FEC, LABEL`,remark:null,image:[]},{index:182,topic:"ㄴㄴMPLS VPN",define:"- 인터넷 VPN이 아닌, 통신사업자의 MPLS 전용망을 통해 구성되는 고성능 네트워크 VPN",head:"- 특징: 고속 전송(MPLS라벨링), 논리적 분리(VRF 사용)",remark:null,image:["static/images/cellImage_1969927744_16.jpg"]},{index:183,topic:"ㄴㄴSSL VPN",define:"- 웹 브라우저와 SSL/TLS 프로토콜을 이용해 안전한 원격 접속을 제공하는 VPN 방식",head:`- 별도의 전용 클라이언트 없이, HTTPS 환경에서 터널링 기능
- 특징: 웹 기반 접속(설치 없이 사용), HTTPS 암호화(SSL/TLS 보안)`,remark:null,image:["static/images/cellImage_1969927744_17.jpg"]},{index:184,topic:"ㄴNAC(Network Access Control)",define:`- 네트워크에 접속하려는 사용자나 단말(End point)의 보안 상태를 검사하고, 정책에 따라 접근을 허용·차단·격리
하는 네트워크 접근 제어 시스템`,head:`*특징
- 보안 상태 기반 제어(단말 상태 평가), 접속 전후 제어(Pre/Post 통제),
- 유연한 정책 설정(조건 기반 제어), 인증 연동(AD·LDAP 등 연계 : ID 기반 접근 제어)`,remark:null,image:["static/images/cellImage_1969927744_18.jpg"]},{index:185,topic:"ㄴ망분리",define:"- 외부의 악성코드 침입을 막고 내부 정보의 유출을 막기 위해 내외부 인터넷 사용 공간을 다른 네트워크로 분리한 환경",head:`- 근거: 정보통신망법 시행령 제15조의2 
* 유형
- 물리적 망분리: 2대의 PC나 망 전환 장치를 이용, 업무용/인터넷용 PC를 구분
- 논리적 망분리: 가상화 머신 서버(SBC) 및 PC(CBC)을 두고 업무 처리시 가상화`,remark:`* 망연계 기술
- 소켓 방식, 스토리지 방식, 시리얼 방식(IEEE 1394)`,image:[]},{index:186,topic:"ㄴSecure OS",define:`- 운영체제 차원에서 내부자·악성 행위·침입 위협으로부터 시스템을 보호하기 위해, 커널 수준에서 강제 접근제
어, 무결성 보호, 감사 기능 등을 내장한 보안 강화 운영체제`,head:`- 보안 커널이 정책 기준으로 평가
- 구성요소: 보안 커널, 정책관리자, 무결성 보호모듈, 감사로그 모듈, 보안도구 및 콘솔
- 접근제어 방식: MAC (강제적 접근제어)
- 통제범위: 프로세스, 파일, 네트워크 등 전체 자원에 보안 정책 적용
- 예시: SELinux, AppArmor, Trusted Solaris 등`,remark:null,image:[]},{index:187,topic:"ㄴ스팸 메일(Spam Mail) 차단 시스템",define:"- 사이메일을 통해 수신되는 스팸·광고·피싱·악성코드 포함 메일 등을 자동으로 탐지하고 차단하는 시스템",head:`- 특징: 실시간 필터링, 다계층 분석(헤더·본문·URL), 정책 적용, 지능형 학습(AI 기반 탐지), 통계 제공
- 구성요소: 메일 필터링 엔진, 스팸/피싱 패턴 DB, 정책관리모듈, AI/ML 탐지 모듈, 로그리포트 시스템, 관리자 콘솔`,remark:`* 차단기술
- 기술적 차단엔진: 도메인 차단, 메시지 필터링, DKIM, SPF, SIDF
- 사회적 정책: Opt-out, Opt-in, 메일 등급제`,image:[]},{index:188,topic:"ㄴDLP(Data Loss Prevention)",define:"- 중요 데이터(기밀 정보, 개인정보 등)의 유출을 방지하고, 조직 내에서 데이터의 흐름을 감시·통제하는 정보 보안 기술 또는 시스템",head:`- 기능: 정보 유출 차단(실시간 유출 방지), 콘텐츠 분석(내용 기반 식별), 경로 차단(USB, 이메일, 프린터 등)
- 구성요소: DLP 정책 서버, 에이전트, 콘텐츠 분석엔진, 유출경로 제어 모듈, 로깅 및 감사모듈, 관리자 콘솔`,remark:`* 유형
- Network DLP, Endpoint DLP, Storage DLP, Cloud DLP`,image:[]},{index:189,topic:"ㄴEDR(Endpoint Detection and Response)",define:`- 단말(Endpoint)에서 발생하는 이상행위나 침해 징후를 탐지하고, 조사·분석·대응까지 수행하는 지능형
위협 대응 솔루션`,head:`- 특징: 이상 행위 탐지(비정상 활동 감지), 파일/프로세스 추적(공격 흐름 파악),
단말 격리(즉시 차단), 자동 대응/경고(정책 기반 조치), 분석 시각화(공격 경로 리포트)
* 주요기능: 예탐방대
- 예측, 탐지, 방어, 대응`,remark:null,image:[]},{index:190,topic:"ㄴㄴEDR, EPP, XDR, SIEM 관계",define:`- EPP: 기존 백신, 방화벽, HIPS 등 단말 보호 솔루션 통합 플랫폼
- EDR: 단말 위협 탐지 + 사고 분석 + 자동 대응 수행`,head:`- XDR: EDR + NDR + Email 등 다양한 보안 데이터를 통합 분석
- SIEM: 다양한 보안 로그를 수집·분석·시각화하는 보안 관제 시스템`,remark:null,image:["static/images/cellImage_1969927744_19.jpg"]},{index:191,topic:"ㄴ보안관제",define:"- 기업이나 기관의 정보 시스템, 네트워크, 단말 등에서 발생하는 보안 이벤트를 24시간 실시간 모니터링하고 위협을 탐지·대응하는 보안 활동",head:`- 3원칙: 무중단, 전문성, 정보공유의 원칙
- 업무절차: 예방>탐지>대응>보고>공유 및 개선
- 유형: 원격관제, 파견관제, 자체관제, 클라우드 관제`,remark:null,image:["static/images/cellImage_1969927744_20.jpg"]},{index:192,topic:"ㄴESM(Enterprise Security Management)",define:"- 보안 로그와 이벤트 정보를 실시간으로 수집·분석·상관 연계하여 보안 위협을 탐지하고 대응하는 통합 보안관리 시스템",head:`- 특징: 이벤트 통합 수집(로그 집중), 상관 분석(기초 연계 분석), 모니터링 중심(정적 룰)
- 구성요소: Agent, Manager, Console`,remark:null,image:["static/images/cellImage_1969927744_21.jpg"]},{index:193,topic:"ㄴSIEM(Security Information & Event Management)",define:`- 보안 정보 및 이벤트 관리
- 사후추적이 가능하도록 상관분석과 포렌식 기능을 제공해 주는 지능협 위협에 대한 조기 경고 모니터링 체계`,head:`- 특징: 로그 통합 수집(이기종 장비 연결), 실시간 상관 분석(다중 이벤트 연계),
탐지 정밀도 향상(고도화 기법), 모니터링 체계(대시보드/경고)
- 구성요소: 로그 수집기, 로그 저장소, 상관분석 엔진, 경고 및 알림 모듈, 관제콘솔
- 유형: 솔루션 명 : Splunk Enterprise Security, Azure Sentinel`,remark:null,image:["static/images/cellImage_1969927744_22.jpg"]},{index:194,topic:"ㄴUEBA(User and Entity Behavior Analytics, 사용자/엔터티 행위 분석)",define:"- 사용자 및 엔터티(시스템, 장치 등)의 행위 패턴을 분석해 이상행위를 탐지하는 보안 분석 기술",head:`- 특징: 비정상 행위 탐지(룰 기반 아님), 머신러닝 분석(패턴 학습)
- 기능: 행위 프로파일링, 이상행위 탐지, 위협점수화, 사고조사지원,정책없는탐지`,remark:`* 기술요소
- 머신러닝(ML)
- 시간 기반 통계 모델링
- 이상치 탐지 알고리즘 (Anomaly Detection)
- 행동기반 비교 분석
- 리스크 스코어링 엔진
- 정책 기반 가중치 모델`,image:[]},{index:195,topic:"ㄴSOAPA (Security Operations and Analytics Platform Architecture)",define:"- 보안 운영(Security Operations)과 보안 분석(Security Analytics)을 하나의 통합 아키텍처로 구성해 탐지, 분석, 대응, 보고를 전사적 수준에서 유기적으로 연결하는 차세대 보안 프레임워크",head:`- 기능: 도구 간 통합, 데이터 중심 분석, 위협 인텔리전스 통합, 자동화된 대응
- SOAPA : SIEM + SOAR + Threat Intelligence + EDR + NDR
- 4계층: 공통 분산 데이터 서비스, 소프트웨어 서비스 및 통합 계층, 분석계층, 보안 운영 플랫폼 계층`,remark:null,image:["static/images/cellImage_1969927744_23.jpg"]},{index:196,topic:"ㄴSOAR(Security Orchestration, Automation and Response)",define:`- 보안 운영 팀이 다양한 보안 시스템, 이벤트, 대응 프로세스를 자동화·통합·조정(Orchestration)하여
효율적인 보안 위협 대응을 가능하게 하는 플랫폼`,head:`- SOAR = SOA(기술적 자동화) + SIRP(사고 처리 프로세스 자동화) + TIP(외부 위협 정보 기반 분석·강화)
- 특징: 자동화(수작업 제거), 통합 대응(보안 시스템 연결), 분석 효율화, 신속 대응, 운영자 부담 감소`,remark:`*주요 기능
- 오케스트레이션(EDR. SIEM 보안 시스템 연동 협업), 
- 자동화(플레이북 기반 대응 자동 실행)
- 사고 대응(격리·차단 등 조치 수행)
- 플레이북 관리(자동화 대응 시나리오 구성)
- 대시보드 및 리포트(위협 현황 시각화 및 통계 제공)`,image:[]},{index:197,topic:"ㄴXDR (Extended Detection and Response)",define:"- Endpoint, Network, Email, Server 등 다양한 보안 영역의 데이터를 통합 분석하여 위협을 탐지하고 대응까지 수행하는 확장형 보안 플랫폼",head:`* 특징
- 다영역 데이터 통합(보안 데이터 전방위 수집), 확장형 아키텍처(유연한 구성)
- 자동화된 탐지 및 대응(머신러닝 기반), 중앙 집중 분석(단일 시야 제공), EDR 포함 확장(엔드포인트 너머까지 보호)`,remark:`* 기능
- 데이터 수집 및 통합
- 이벤트 정규화 및 저장
- 상관관계 분석 및 탐지
- 위협 인텔리전스 연계 
- 시각화 및 가시성 제공 
- 자동대응 및 조치
- 타임라인 기반 포렌식`,image:[]},{index:198,topic:"ㄴ공격표면 관리(ASM, Attack Surface Management)",define:"- 인터넷 등 외부에서 수집 가능한 모든 디지털 정보(자산, 서비스, 취약점 등)를 분류·분석·우선순위 지정하여 지속적으로 모니터링하고 위험을 사전에 식별·차단하는 보안 프로세스",head:`- 목표: 알려지지 않은 IT 자산 및 위협을 식별하고, Zero Trust 환경에서 위험 경고(Alarm) 체계

* 공격 표면 관리 유형
- 사이버 자산 공격표면 관리(CAASM)
- 외부 공격 표면 관리(EASM)
- 디지털 위험 보호 서비스(DRPS)`,remark:null,image:["static/images/cellImage_1969927744_24.jpg"]},{index:199,topic:"ㄴㄴ관리방법",define:`① 공격 표면 식별
② 공격 표면 관리 자동화
③ 공격 표면 최소화`,head:`* 관리방안  발자보 사감
- 1단계 디지털 발자국 발견 
- 2단계 자산 재고 및 분류
- 3단계 지속적인 보안 모니터링
- 4단계 자산 사칭 및 사고 모니터링
- 5단계 위험 감지 및 식별`,remark:null,image:[]},{index:200,topic:"SecaaS(Security as a service)",define:"- 기업이 자체적으로 보안 솔루션을 구축·운영하지 않고, 외부 제공업체의 보안 기능을 서비스 형태(SaaS)로 이용하는 모델",head:`* 특징
- 클라우드 기반(인터넷 제공), 구독형 모델(요금 유연), 빠른 배포(즉시 적용)
- 유지보수 감소(운영 부담↓), 다양한 서비스 형태(IAM~DLP까지 커버)`,remark:`* CSA가 선정한 10가지 SecaaS
1) 신원 및 접근 관리(IAM)
2) 데이터 유출 방지(DLP)
3) 웹 보안
4) 이메일 보안
5) 보안점검
6) 침입관리
7) 보안 정보 이벤트 관리(SIEM)
8) 암호화
9) 업무 연속성/재해복구(BC/DR)
10) 네트워크 보안`,image:[]},{index:201,topic:"ㄴCASB(Cloud Access Security Broker)",define:`- 기업과 클라우드 서비스 간 중간에 위치하여, 사용자·디바이스·데이터에 대한 보안 정책을 적용하고, 가시성, 위협
방지, 규제 준수를 보장하는 보안 중개 시스템`,head:`* 특징
- 중간자 역할(클라우드 접근 통제 지점), 가시성 확보(Shadow IT 탐지),
- 정책 기반 통제(상황별 세분화된 제어), 데이터 보호(DLP·암호화 적용), 클라우드 특화 보안(IaaS~SaaS 지원)

* 주요기능
- 가시성 모듈 , 정책엔진, DLP 모듈, 위협 방지 모듈, 암호화/토큰화 엔진  로깅/분석 시스템`,remark:`* CASB 유형
- 에이전트형, 프라이빗형, 퍼블릭형, API형`,image:[]},{index:202,topic:"CSPM(Cloud Security Posture Management)",define:"- 클라우드 환경에서 설정 오류, 정책 미준수, 보안 취약점을 자동으로 점검·분석하고 수정하여, 보안 상태(Posture)를 지속적으로 관리하는 솔루션 또는 기능 체계",head:`* 특징
- 설정 기반 보안 점검(IAM 등 설정오류 탐지), 규정 준수 자동화(표준 매핑 점검),
- 멀티 클라우드 지원(다양한 CSP 대응), 자동 수정 지원(가이드 제공 또는 리소스 자동 복구), 지속 모니터링(실시간 상태 확인)`,remark:`* 핵심기능
- Compliance Monitoring(컴플라이언스 모니터링)
- DevOps Integration(DevOps 통합)
- Configuration Monitoring(설정 모니터링)
- Asset Inventory(자산 인벤토리 관리)
- Risk Assessment(위험도 평가)
- Incident Response(사고 대응)`,image:[]},{index:203,topic:"CWPP(Cloud Workload Protection Platform)",define:"- 클라우드 환경에서 실행되는 워크로드(가상머신, 컨테이너, 서버리스 등)에 대해 보안 가시성 확보, 위협 탐지 및 보호 기능을 제공하는 워크로드 전용 보안 플랫폼",head:`* 특징
- 워크로드 기반 보호(실행 단위별 대응), 에이전트 기반(실시간 감시),
- DevSecOps 통합(개발-보안 연계), 런타임 보호(실행 중 위협 대응), 하이브리드 지원(모든 환경 대응)

- 구성요소: 워크로드 에이전트, 취약점 분석기, 런타임 보호모듈, 정책 제어/적용 엔진, 무결성 검사기, 관리자 콘솔`,remark:null,image:[]},{index:204,topic:"SASE(Secure Access Service Edge, 보안 접속 서비스 엣지)",define:"- 네트워크와 보안 기능을 클라우드에서 통합 제공하는 아키텍처 모델",head:"- 특징: 클라우드 통합(네트워크+보안), 위치 무관 보호, 엣지 적용, 제로 트러스트 기반, 멀티환경 유연성",remark:`* 구성요소
- 네트워크 보안: CASB, SWG, FWaaS, ZTNA, VPN
- 네트워크: SD-WAN, CDN, Carrier, Bandwidth Aggregation, NetworkingVendors`,image:[]},{index:205,topic:"ㄴㄴSSE(Secure Service Edge, 보안 서비스 엣지)",define:"- SASE에서 보안 기능만 분리한 보안 전용 구성 요소",head:`- 특징 : 보안 중심(SASE 분리), POP기반 클라우드 보안, 제로 트러스트 구현, SaaS 보호 특화
- 구성요소: ZTNA, CASB, SWG, DLP`,remark:`* SSE 구성요소
- CASB: 클라우드 앱 사용 가시성 확보 및 통제 
- SWG: 웹 사용 중 악성 콘텐츠 차단(브라우저 기반) 
- FWaaS: 방화벽 기능을 클라우드에서 제공(L3~L7)
- ZTNA: 인증된 사용자만 최소 권한으로 앱 접근`,image:[]},{index:206,topic:"ㄴCNAPP(Cloud Native Application Protection Platform)",define:`- 클라우드 네이티브 애플리케이션의 전체 수명주기(개발~운영)에서 보안을 통합 관리하는 플랫폼
- 여러 클라우드 보안 기능을 하나의 통합 플랫폼으로 제공`,head:`- 특징: 클라우드 네이티브 보호, 전체 수명주기 커버, 통합 플랫폼, 실시간 위협탐지, 자동화 중심
- 구성요소: CSPM, CWPP, CIEM, Container/Serverless Security, IaC 보안, SBOM/Compliance`,remark:null,image:["static/images/cellImage_1969927744_25.jpg"]},{index:207,topic:"침해사고 대응 절차",define:"사전대응-사고탐지-대응-제거 및 복구-후속조치/보고",head:"예방-대비-대응-복구",remark:null,image:[]},{index:208,topic:"포렌식",define:"- 디지털 증거를 수집, 분석, 보존하여 법적 증거로 활용하기 위한 과학적 조사 절차",head:`- 원칙: 정재신연무 
- 단계: 준증보분보`,remark:`- 정당성, 재현, 신속성, 연계보관성, 무결성의 원칙 
- 수사준비, 증거수집, 보관/이송, 증거분석, 보고서 및 증거제출`,image:[]},{index:209,topic:"ㄴ포렌식 주요기술",define:`- 수집 기술 : 네트워크, 모바일, 클라우드, USB, BIOS등 환경대응
- 분석 기술 : 레지스트리, 브라우저, 가상환경 등 심층추적`,head:`* 수집기술: 디메무 
- 디스크 이미징, 메모리 덤프, 무결성 입증, 시스템 상태 수집, 분산 포렌식 인덱싱

* 분석기술: 타삭비 이슬암덤
- Timeline 분석, 삭제된 파일복구, 비정상 파일검색, 이메일 분석, 슬랙공간 분석, 암호복구, 덤프 메모리 분석, 파일카빙`,remark:null,image:[]},{index:210,topic:"ㄴㄴ디스크 이미징(Disk Imaging)",define:"- 하드디스크나 저장장치의 전체 내용을 바이트 단위로 복사해 동일한 이미지 파일을 만드는 작업",head:`- 특징: 포렌식 분석, 백업 및 복구, 악성코드 분석
* 방식
- Disk to Disk: 원본디스크를 그대로 복제(하드카피)
- Disk to File: 이미지 파일로 저장
- File to File: 논리적 파일단위 선택 복사`,remark:`* 증거수집 절차
1) 사전 준비
2) 원본보호
3) 디스크 이미징 수행
 - FTK Imager, dd, EnCase 등 사용, 비트단위 전체 이미지 작성
4) 무결성 검증
5) 백업 및 보관
6) 분석 및 보고서 작성`,image:[]},{index:211,topic:"ㄴㄴ파일 슬랙 (File Slack)",define:"- 디스크의 파일 시스템에서 파일이 저장될 때 사용되는 마지막 클러스터의 사용되지 않은 공간",head:`- 특징: 디지털 포렌식 대상, 의도적 제거 불가
- 구성요소: 섹터, 클러스터, 램슬랙, 드라이브 슬랙
* 유형
- 파일시스템 슬랙: 파일시스템 마지막 클러스터 미사용 공간
- 볼륨 슬랙: 전체 디스크와 실제 파티션 차이 공간`,remark:null,image:[]},{index:212,topic:"ㄴㄴ파일 카빙 (File Carving, FC)",define:"- 파일 시스템의 메타데이터 없이, 디스크의 순수한 바이너리 데이터를 분석하여 파일을 복원하는 기술",head:`- 특징: 파일 시스템 무관성, 시그니처 기반 복원, 메타데이터 미복원, 법적 증거물 확보용 활용
- 알고리즘: ① 복구 대상 식별 ② 유효성 검증 및 연속성 판단 ③ 카빙 방법 결정`,remark:`* 기법
- 파일 시그니처 기반: Header/Footer, Header/RAM Slack
- 파일 구조체 기반: Header/File Size, File 구조 검증`,image:[]},{index:213,topic:"ㄴ포렌식 유형",define:`- 컴퓨터 포렌식
- 모바일 포렌식
- 네트워크 포렌식
- 메모리 포렌식
- 클라우드 포렌식
- 멀웨어 포렌식
- IoT 포렌식
- 산업제어시스템(ICS) 포렌식
- 영상, 오디오 포렌식`,head:"",remark:null,image:[]},{index:214,topic:"ㄴ안티포렌식(Anti Forensic)",define:"- 디지털 포렌식 분석을 방해하거나 무력화하기 위한 일련의 기술 및 행위",head:`- 특징: 은폐성(증거 숨김), 기만성(정상처럼 위장), 방해성(분석 도구 무력화), 자동화(자동 삭제/은닉)

* 기술: 디와삭 스은암
- 데이터 삭제: 디가우징, 와이핑, 증거 데이터 자동삭제 
- 은닉/변조: 스테가노그래피, 디스크내 데이터 은닉, 데이터 암호화
- 데이터 위조: 타임스탬프 변경, 로그위조
- 분석방해: 포렌식 툴 탐지, 악성코드 삽입 , 자동삭제 스크립트`,remark:null,image:[]},{index:215,topic:"ㄴㄴ안티 안티포렌식(Anti-Anti-Forensic)",define:"- 디지털 포렌식 분석 방해 기법(안티포렌식)에 대응하여 은닉·조작된 데이터를 탐지하고 복구하기 위한 포렌식 대응 기법",head:`* 구분
- 데이터 은닉 탐지: 스테가노그래피 탐지/분석, 슬랙 스페이스 분석, 클러스터 크기 조작 탐지
- 데이터 검색 및 추출: Index 탐색, Bitwise 탐색
- 데이터 복원: 삭제파일 복원, 시스템로그 복원
- 무결성 및 위장탐지: 무결성 검증, 파일 시그니처 분석
- 실시간 증거 확보 및 분석: 메모리 포렌식, 행위기반 분석
- 암호해독: 무작위 공격, 사전 공격`,remark:null,image:[]},{index:216,topic:"정보보안 거버넌스",define:"- 조직의 보안 목표와 전략을 정의하고, 리스크 관리와 규제 준수를 통해 보안을 조직 전체에 일관성 있게 적용하도록 하는 관리 체계",head:`* 전가위자성 
- 전략적 연계, 가치전달, 위험관리, 자원관리, 성과관리
- EDM(평가, 지시, 모니터 반복수행)`,remark:null,image:[]},{index:217,topic:"ㄴISO/IEC 27014",define:"- 정보보안 거버넌스를 효과적으로 수립·유지·모니터링하기 위한 원칙과 모델을 제공하는 국제 표준",head:`- 전략적 관점 중심(경영 관점에서 접근)
- 5대 원칙: 책임, 전략, 확보, 성과, 준수
- 6대 활동: 평가, 방향설정, 모니터링, 소통, 정책일치, 보증`,remark:null,image:[]},{index:218,topic:"ISO 27000",define:"- 정보보호관리체계 구축과 운영을 위한 국제 표준",head:`- 27000:2018 : 정보보호 관리체계 개요 및 용어
- 27001:2022 : 정보보호 관리체계 요구사항
- 27002:2022 : 정보보호 통제 지침
- 27014:2020 : 정보보호 거버넌스 
- 27017:2015 : 클라우드 보안 가이드 
- 27018:2015 : 개인정보보호 가이드
- 27031:2011 : ICT 연속성 관리 지침`,remark:null,image:[]},{index:219,topic:"ㄴISO 27001:2013",define:"- 정보보호 관리체계(ISMS)의 구축, 구현, 유지 및 지속적인 개선을 위한 요구사항을 규정한 국제 표준",head:"정조자 인물통접 시침사준 암운공",remark:`* ISO 27001: 정조자인 물통접시 침사준 암운공
- 정보보호 정책, 조직, 인적자원보안, 자산관리 
- 접근통제, 암호통제, 물리/환경적보안, 운영보안, 통신보안 
- 정보시스템 개발유지보수, 공급자관계, 침해사고관리, 업무연속성관리, 컴플라이언스`,image:[]},{index:220,topic:"ㄴISO 27001:2022",define:"- 테마그룹: 조직적, 사람, 물리적, 기술적",head:`* 신규추가
- 조직적(37개): 위협 인텔리전스, 정보 삭제, 정보 마스킹, 데이터 누출 방지, 클라우드 서비스 이용 보안 
- 사람(8개): 물리적 보안 모니터링
- 물리적(14개)
- 조직적(34개): 구성관리, 정보삭제, 데이터마스킹, 데이터 누출방지, 모니터링 활용, 웹필터링, 보안코딩`,remark:null,image:[]},{index:221,topic:"ISMS-P(Information Security Management System – Privacy)",define:`- 조직의 정보자산 보호뿐 아니라 개인정보의 수집·이용·보관·파기 등 흐름 전반에 대한 보호체계를 포함한 통합
인증 제도`,head:`* 법적근거
- 정보통신망법 제47조(정보보호 관리체계의 인증)
- 개인정보보호법 제32조의2(개인정보 보호 인증)

* 정책기관(법/정책) : 과기정통부, 개인정보보호위원회
* 인증기관(운영/인증발급): KISA, 금융보안원(금융 분야)
* 심사기관(인증심사)
- 한국정보통신진흥협회(KAIT)
- 한국정보통신기술협회(TTA)
- 개인정보보호협회(OPA)
- 차세대정보보안인증원(NISC)`,remark:`* 추진경과
- 2010년 11월 : 개인정보보호 관리체계(PIMS) 인증 제도 도입 
- 2014년 : 개인정보보호 인증(PIPL) 제도 도입 
- 2016년 1월 : PIMS + PIPL 제도 통합, ISMS 인증 의무대상 확대 (병원, 대학 등)
- 2018년 6월:  ISMS-P 인증 제도 공식 시행, ISMS + PIMS 통합 인증체계
- 2022년 7월: 가상자산사업자 대상 ‘ISMS 예비인증’ 제도 시행 
- 2024년 7월:  ‘ISMS-P 인증의 특례’ 제도 시행 (간편인증)`,image:[]},{index:222,topic:"ㄴ인증유형/인증대상",define:`* 인증유형
- ISMS: 정보보호 관리체계 인증 제도
- ISMS-P : 정보자산 보호 + 개인정보 흐름
전체를 포함한 통합 인증 제도
- ISMS 예비인증: 가상자산사업자가 정식 운영 전
인증 준비 상태를 증명하는 제도`,head:"",remark:"- 심사종류: 최초심사, 사후심사, 갱신심사",image:["static/images/cellImage_1969927744_26.jpg"]},{index:223,topic:"ㄴㄴ인증절차/인증기준",define:`* 인증절차
1) 1단계 준비 및 신청단계
- 예비점검, 인증수수료 납부
2) 2단계 심사단계
- 인증심사, 결함보고서 제출, 이행점검
3) 3단계 인증
- 인증위원회 개최 및 심의, 인증서 발급`,head:`* 인증기준
- 관리체계 수립 및 운영(16)
- 보호대책 요구사항(64)
- 개인정보 처리단계별 요구사항(22)`,remark:null,image:[]},{index:224,topic:"ㄴㄴISMS-P 간편인증제도",define:`- 영세 및 중소기업의 ISMS-P 인증 편입을 촉진하고, '경량화된 인증기준','보다 저렴한 인증수수료','단축된 인증 기간 등' 기업 부담을 완화한 간이 ISMS-P 인증 제도
- 2024년 7월 ‘ISMS-P 인증의 특례’ 제도 시행 (간편인증)`,head:`* 인증대상
- 「중소기업기본법」 제2조제2항에 따른 소기업
- 정보통신서비스 부문 매출액 300억 원 미만인 중기업
- 중기업 중 자체 서비스 제공을 위한 주요 정보통신설비를 보유하지 않은 기업`,remark:null,image:["static/images/cellImage_1969927744_27.jpg"]},{index:225,topic:"CBPR(Cross Border Privacy Rule)",define:"- 국경 간 개인정보 이전 시 개인정보 보호를 보장하기 위해 APEC 회원국 간 운영되는 개인정보 보호 인증제도",head:`- 특징: APEC 기반, 자율인증 방식, 상호국가 인증, 공통 프라이버시 기준, BCR 유사구조, 기업중심인증

* 인증기준
1. 개인정보 관리 체계 수립 2개 
2. 개인정보 수집 9개
3. 개인정보 이용·위탁·제공 7개
4. 정보주체 권리 11개
5. 무결성 5개 
6. 보호 대책 16개`,remark:null,image:["static/images/cellImage_1969927744_28.jpg"]},{index:226,topic:"PIA(Privacy Impact Analysis)",define:"- 개인정보 처리 시스템의 구축·운영·변경이 개인정보에 미치는 영향을 사전에 분석하고 개선방안을 도출하는 체계적 절차",head:`- 법적근거: 개인정보보호법 제33조(개인정보영향평가), 시행령 제35조에 따라 공공기관은 해당 조건 시 영향평가 의무 수행
- 평가 시점 : 시스템 분석 또는 설계 단계

*의무대상
- 100만명 이상의 개인정보파일
- 50만명 이상의 정보주체에 관한 개인정보파일을 내‧외부 시스템과 연계
- 5만명 이상의 정보주체 개인정보 중 민감정보, 고유식별정보 포함
- 개인정보 검색체계 등 운용체계를 변경 시`,remark:`* 수행단계
1. 평가수행 계획수립
2. 평가자료 수집
3. 개인정보 흐름분석
- 개인정보 흐름표/흐름도 작성
4. 개인정보 침해요인 분석
- 위험도 산정
5. 개선계획 수립
6. 영향평가서 작성`,image:[]},{index:227,topic:"정보보호조직",define:"- 정보보호 활동을 전담하거나 관리·조정하기 위해 구성된 조직적 체계",head:"CSO>CPO>정보보안관리자>정보보안담당자>팀별정보보안담당자",remark:null,image:[]},{index:228,topic:"ㄴ정보보호 최고책임자(CSO, Chief Security Officer)",define:"- 조직 내 정보보호 및 보안 전반을 총괄하는 최고 책임자로, 정보보호 정책 수립, 위험관리, 보안 사고 대응, 보호대책 운영 등을 담당하는 임원급 역할",head:`- 근거: 정보통신망법, 제45조의3(정보보호 최고책임자의 지정 등)
- 지정의무: 정보통신서비스 제공자는 정보보호 최고책임자(CSO)를 지정 및
과기정통부에 신고해야 함
- 겸직제한: 대상 기업의 CSO는 다른 업무 겸직 불가
* 주요업무
- 정보보호 계획 수립 및 개선
- 정보보호 실태 감사 및 개선
- 위험 식별 및 대책 마련
- 정보보호 교육·훈련 계획 수립 및 시행`,remark:`* 겸직가능업무
- 정보보호 공시 업무 (정보보호산업법)
- 기반보호법상 정보보호책임자 업무
- 전자금융거래법상 CSO 업무
- 개인정보보호법상 개인정보 보호책임자(CPO) 업무
- 기타 정보보호 관련 법령상 업무`,image:[]},{index:229,topic:"ㄴ개인정보 보호책임자(CPO, Chief Privacy Officer",define:`- 개인정보 보호계획의 수립·시행, 개인정보 처리 실태 점검, 유출 방지, 내부통제, 교육 등 개인정보 보호 업무
전반을 총괄하는 자로서, 조직 내 개인정보 보호 수준을 체계적으로 관리·감독하는 책임자`,head:`- 근거: 개인정보보호법 제31조(개인정보 보호책임자의 지정 등)
* 주요 업무
- 개인정보 보호 계획 수립 및 시행
- 실태 및 관행의 정기 조사 및 개선
- 불만 처리 및 피해 구제
- 주요 업무
- 유출·오용 방지 위한 내부통제시스템 구축
- 교육 계획 수립 및 시행
- 개인정보파일의 보호 및 관리·감독
- 개인정보 처리방침 수립·변경·시행, 개인정보 관련 자원 및 정보 관리
- 개인정보 파기 관리`,remark:`* 독립성 보장
- 개인정보처리자는 정당한 이유 없이 불이익 금지
- CPO는 독립적 업무 수행이 보장되어야 함

* CPO 지정 기준
- 공공기관: 기관 규모·유형별로 고위공무원~4급 이상 또는 관련 부서장
- 민간: 사업주·대표자 또는 개인정보 관련 부서의 임원급 또는 부서장
- 지정예외: 소상공인

* 자격요건 대상
- 다음 중 하나라도 해당하면격요건을 갖춘 자 지정 필요
1. 연간 매출 1,500억 원 이상이면서
   가. 5만명 이상 민감정보/고유식별정보 처리자
   나. 100만명 이상 개인정보 처리자
2. 재학생 2만명 이상 학교
3. 상급종합병원
4. 공공시스템운영기관`,image:[]},{index:230,topic:"디지털 신뢰 기술",define:"- 블록체인, DID(Decentralized Identifier) 등 기술을 활용해 데이터 활용을 극대화고 보안과 프라이버시 문제를 해결하는 기술",head:`* 기술요소
- APP: DAPP, NFT, DID, Web 3.0
- 인프라: 블록체인, 클라우드, SD-WAN
- 보안: ZTM(Zero Trust Model), SASE, 동형암호`,remark:`* 적용사례
- 디지털 자격 및 신원증명
- 데이터 공유 기술, 원산지증명 및 추적 기술
- Web3.0 기반 데이터 보안, 간편 소액 결제 및 거래`,image:[]},{index:231,topic:"사이버 복원력(Cyber Resilience)",define:`- 사이버 공간에서 발생하는 예측 가능한 공격, 알려지지 않았거나 예측 불가능한 위협에 대해 조직의 목표를 달
성하는 능력을 유지하고, 부정적 영향에도 불구하고 회복하는 역량(Ability)`,head:`- 구성요소: 비즈니스 영향 분석, 보안정책통제, 종합적 테스트 정책, 매니지드 보안 도구 설치, 사이버 복구 계획
* 확보단계
① 위협 평가 역량 확보
② 사이버 보안 방법 도입
③ 위협 기반 계획 
④ 외부 위협으로부터 보호
⑤ 내부 위협 최소화`,remark:`* 고려사항
- 참조 프레임워크 모델: 선형·사이클링 모델, 성숙도 모델
- 조직의 임무와 구성: 임무 구성 파악, CMMI, CERT-RMM 기반 Process Area, CISA CRR 도메인
- 성숙도 수준: 성숙도 분야, 성숙도 수준`,image:[]},{index:232,topic:"ㄴ참조모델",define:"",head:"",remark:null,image:["static/images/cellImage_1969927744_29.jpg","static/images/cellImage_1969927744_30.jpg"]},{index:233,topic:"접근통제(Access Control)",define:"- 정보시스템, 자산, 데이터 등에 대한 접근을 인가된 사용자에게만 허용하고, 인가되지 않은 접근을 차단하는 보안 관리 기법",head:`*정매모
정책: 접근통제 규칙 체계
매커니즘: 정책의 표현 및 실행 수단
모델: 접근통제 이론적 기반`,remark:`- 접근통제 정책: MAC, DAC, RBAC, ABAC
- 접근통제 매커니즘: ACL, CL, SL
- 접근통제 모델: BIBA, BLP, Clark-Wilson, 만리장성`,image:[]},{index:234,topic:"ㄴ(정책) DAC(Discretionary Access Control)",define:"- 자원 소유자(Owner)가 해당 자원에 대해 누가 어떤 접근 권한을 가질지 자율적으로 결정할 수 있는 접근통제 방식",head:`- ACL 기반(객체 중심 구현), 일반 시스템 적용(운영체제, DB 등)
- ACL(Access Control List): 객체(Object) 기준, 객체(파일, 폴더)
- CL(Capability List): 주체(Subject) 기준, 정 사용자가 어떤 객체에 어떤 권한`,remark:"신분기반",image:[]},{index:235,topic:"ㄴ(정책) MAC(Mandatory Access Control)",define:"- 보안 등급(Security Label, SL)에 따라 시스템이 접근을 강제적으로 제어하는 방식의 접근통제 모델",head:`- Top Secret, secret, confidenrial, public
- Access Labels: 보안 등급 정보`,remark:"강제적 접근통제",image:[]},{index:236,topic:"ㄴ(정책) RBAC(Role-based)",define:"- 사용자의 역할(Role)에 따라 시스템 자원에 대한 접근 권한을 부여하는 접근통제 모델",head:"- 권한 관리, 계층적인 역할분배, 최소 권한 정책, 직무의 분리, 객체 분류",remark:"역할 기반",image:[]},{index:237,topic:"ㄴ(정책) ABAC�(Attribute-Based�Access�Control)",define:"- 사용자, 자원, 환경 등의 속성(attribute)을 기반으로 접근 허용 여부를 동적으로 판단하는 접근통제 모델",head:`* 특징
- 정적/역할 기반 RBAC보다 더 세밀하고 유연한 통제 가능, 정책 중심, 규칙 기반 접근통제
- 클라우드, IoT, 제로트러스트 환경 등 동적 환경에 적합

* 구성요소
- 정책 결정 지점(PDP)
- 정책 실행 지점(PEP)
- 정책 관리 지점(PAP)
- 정책 정보 제공 지점(PIP)
- 주체, 객체, 행위, 환경 속성`,remark:null,image:["static/images/cellImage_1969927744_31.jpg"]},{index:238,topic:"ㄴ(모델) Bell-Lapadula",define:`- 주체와 객체에 보안등급(SL)을 부여하고,
하향 읽기(Read Down), 상향 쓰기 금지(No Write
Up) 원칙 적용한 모델
- 기밀성`,head:`No-read-up 
No-write-down

SL 등급 :
- 극비(Top Secret),
- 비밀(Secret),
- 미분류(Unclassified) 등`,remark:null,image:["static/images/cellImage_1969927744_32.jpg"]},{index:239,topic:"ㄴ(모델) Biba",define:`- 무결성(Integrity)을 보장하기 위해 정보의 변조 방지와 신뢰성 유지를 목표로 설계된
보안 모델
- 무결성`,head:`No-write-up 
No-read-down

무결성 등급(Integrity
Level) :
- High, Midium, Low`,remark:null,image:["static/images/cellImage_1969927744_33.jpg"]},{index:240,topic:"ㄴ(모델) 클락-윌슨 무결성 모델",define:`- 사용자가 직접 객체에 접근할 수 없고
프로그램(검증된 트랜잭션)을 통해서만
객체에 접근할 수 있게 하는 보안 모델
- 무결성의 3가지 목표를 모델을 통해서
각각 제시
- 무결성
(중점: 상업적 무결성 강화, biba 극복)`,head:"",remark:"상업 환경에 적합 : 금융, 회계, ERP 등 정형 업무 처리 시스템",image:["static/images/cellImage_1969927744_34.jpg"]},{index:241,topic:"ㄴㄴ만리장성 모델(CWM, ChineseWall Model,Brewer-NashModel)(중점: 이론적무결성 모델)",define:"- 사용자가 한 기업의 기밀 정보에 접근한 이후에는 경쟁사의 정보에 접근하지 못하도록 제한하는 방식의 보안 모델(동적 접근 모델)",head:"- 이해 충돌을 방지하기 위해 만리장성이라 불리는 벽을 사용",remark:null,image:["static/images/cellImage_1969927744_35.jpg"]},{index:242,topic:"ㄴLattice모델(중점: 정보흐름기반관리)",define:"- 주체와 객체에 보안 등급을 부여하고 상하비교하여 접근 여부를 판단하기 때문에, 보안 정책이 고정적이고 강제적인 MAC 구조에 매우 적합",head:`- Bell-LaPadula 모델, Biba 모델 등이 Lattice 모델 기반으로 구현됨
- 정보흐름을 안전하게 통제하기 위한 모델`,remark:null,image:["static/images/cellImage_1969927744_36.jpg"]},{index:243,topic:"금융권 망분리 개선",define:`- 금융권의 디지털 전환과 보안 강화를 동시 달성하기 위해, 기존 망분리 규제를 개선하고 장기적으로는 신 금융보안 법
체계 마련을 통한 패러다임 전환 추진`,head:`* 망분리 단계별 추진 과제
- 1단계
① 생성형 AI 활용 허용 (규제샌드박스)
② SaaS 활용도 제고(규제샌드박스)
③ 연구·개발 망분리(감독규정 개정)
- 2단계
④ 규제특례 정규 제도화
⑤ 규제특례 확대·고도화
⑥ 정보처리 위탁제도 정비
- 3단계 
⑦ 자율보안-결과책임 新
금융보안체계 구축`,remark:null,image:[]},{index:244,topic:"금융권 내부망 SaaS 보안대책",define:"- 애플리케이션 실행 중 내부 코드 흐름과 외부 요청/응답을 동시에 분석하여 정적 + 동적 분석을 결합한 보안 테스트 기법",head:`- SaaS 이용불가 범위: 보안관리, IT 개발 및 운영, 고객관리
- SaaS 이용가능 범위: 협업도구, ERP, 기타 내부업무`,remark:`* SaaS 영역별 보안대책
- SaaS 단말기: 단말기 등록 및 해지 관리, 망분리 예외 시 대체통제 적용
- SaaS 연계: 내부망 ↔ SaaS 간 인증 및 통제, 중계서버 운영
- SaaS 관리: 기능별 역할권한 부여, 공유설정 변경
- SaaS 운영정책: 변경사항 사전 보안검토 , 보안취약점 점검 및 패치`,image:[]},{index:245,topic:"다중보안체계 (MLS: Multi-Level Security)",define:`- 국가 망분리 개선안의 일환으로, 정보 보안 수준을 업무 중요도에 따라 기밀(Classified), 민감(Sensitive), 공개(Open)
계층으로 분류하고 차등적 보안통제를 통해 보안 확보와 데이터 공유의 조화를 달성하는 체계`,head:`* MLS 적용 단계
1. 준비
2. C/S/O 등급 분류
3. 서비스 모델링
4. 보안대책 수립
5. 적절성 평가 및 조정`,remark:null,image:["static/images/cellImage_1969927744_37.jpg"]},{index:246,topic:"ㄴ국가 망 보안체계(National Network Security Framework, N2SF)",define:`- 기존 MLS 기반으로 생성형 AI, SaaS 서비스를 공공/금융에 도입하기 위한 체계로 추진 하였으나,
국가 망 보안체계로 정책 변경`,head:"- 정책 방향성: AI·클라우드 등 신기술 활용과 공공데이터의 개방적 활용 확대, 망분리 완화를 추진하면서도 보안은 강화하는 균형 추구",remark:null,image:["static/images/cellImage_1969927744_38.jpg"]},{index:247,topic:"소프트웨어 공급망 공격(SW Supply Chain Attack)",define:"- 소프트웨어 공급망을 구성하는 요소 중 하나 이상이 공격자에 의해 손상되거나 변경되어, 최종적으로 배포되는 소프트웨어가 악성 코드 또는 취약한 상태로 조작되는 공격 방식",head:`* 공격유형
1) SW (소프트웨어)
- 오픈소스/상용 SW, 라이브러리, 업데이트 서버, CI/CD 등에서 악성코드 유입
2) HW (하드웨어)
-제조·조립 과정에서 칩/회로/보드에 악성칩 삽입 또는 하드웨어 백도어 탑재
3) Firmware(펌웨어)
- HW와 SW 중간 계층으로, 초기 부팅·운영에 관여`,remark:`* 대응방안
1) SW (소프트웨어)
- SBOM, 코드 서명 및 무결성 검증, DevSecOps, CI/CD 보안 적용
2) HW (하드웨어)
- 보안 인증 부품 사용, 백도어 탐지 기술 도입, TPRM(3자리스크 관리)
3) Firmware(펌웨어)
- 디지털 서명, 보안부팅 활성화, 정식 채널만 사용

->Zero Trust 보안 적용`,image:[]},{index:248,topic:"ㄴ공급망의 사이버보안 위험관리 (Cybersecurity Supply Chain Risk Management, C-SCRM)",define:`- 공급망 전체에서 사이버보안 위험에 대한 노출을 관리하고 적절하게 대응하기 위한 전략, 정책 및 절차 등의 관리체계
- 다단계 전사적 위험관리(C-SCRM)`,head:`* 레벨별 관리
- 레벨 1: 전사 → C-SCRM 전략·정책 수립 및 거버넌스
- 레벨 2: 프로세스 → 전략 기반의 세부 정책·절차 수립 및 각 비즈니스 영역 반영
- 레벨 3: 운영 → 실제 시스템에 정책 적용 및 운영·보고`,remark:null,image:[]},{index:249,topic:"ㄴSBOM(SW Bill Of Material)",define:`- 소프트웨어 패키지 및 구성 요소 등 고유하게 식별 가능한 메타데이터, 저작권 및 라이선스 등 소프트웨어 콘
텐츠에 대한 정보를 포함하는 공식 명세서`,head:`*항목
- 공급자명, 타임스탬프, 저작권자, 주요요소명, 버전, 고유식별자, 종속성 관계`,remark:`* 주요 자동화 도구
- SPDX: 오픈소스 SW 라이선스 명세 중심 
- CycloneDX : 보안 중심의 SBOM, 취약점 관리에 특화
- SWID: 상용 SW 식별 중심, 설치 정보 관리`,image:[]},{index:250,topic:"제로트러스트 가이드라인 1.0",define:`- 제로트러스트: 신뢰할 수 있는 네트워크 경계는 존재하지 않으며, 모든 네트워크 트랜잭션이 이루어지려면 먼저 인증을 받아야 한다고 가정하는 IT 보안 접근 방식 

- 신뢰도 판단전까지 모든 접근 비신뢰 및 접근 거부`,head:`무중사자논모 인세소

* 기본철학 
1) 모든 종류의 접근에 대해 신뢰하지 않을 것 
2) 일관되고 중앙집중적인 정책 관리 및 접근제어 결정/실행 필요 
3) 사용자, 기기에 대한 관리 및 강력한 인증 
4) 자원 분류 및 관리를 통한 세밀한 접근제어(최소 권한 부여) 
5) 논리 경계 생성 및 세션 단위 접근 허용, 통신 보호 기술 적용 
6) 모든 상태에 대한 모니터링, 로그 기록 등을 통한 신뢰성 지속 검증/제어`,remark:`* 핵심가치
① 인증 체계 강화
② 마이크로 세그멘테이션
③ 소프트웨어 정의 경계(SDP)

* 주요 컴포넌트 
1) 정책결정지점 
- 정책엔진: 신뢰도 평가 알고리즘 기반 
- 정책 관리자: 통신 경로 생성 또는 폐쇄 
2) 정책시행지점`,image:[]},{index:251,topic:"ㄴ제로트러스트 아키텍처 보안 모델",define:`- 접근 요청이 발생할 때마다 사용자·기기·환경을 신뢰하지 않고,
지속적인 검증을 통해 최소 권한으로 리소스 접근을 허용하거나
거부하는 보안 제어 모델`,head:"",remark:null,image:["static/images/cellImage_1969927744_39.jpg","static/images/cellImage_1969927744_40.jpg"]},{index:252,topic:"ㄴ제로트러스트 성숙도 모델 2.0",define:`- 조직의 보안 시스템이 제로트러스트 원칙에 얼마나 성숙하게 대응하고 있는지를 측정하는 도구
- 제로트러스트 도입은 성숙도 모델을 활용해 각 단계별 목표를 점검·평가하고, 순환적 개선을 통해 점진적으로
고도화할 수 있는 보안 전략 수립 방식`,head:`- 성숙도 모델 1.0 : 기존(Traditional) > 향상(Advanced) > 최적화(Optimal)
* 성숙도 수준 4단계
- 최적(Optimal) 
- 고급(Advanced)
- 초기(Initial) 
- 기존 환경 (Traditional)`,remark:null,image:[]},{index:253,topic:"CC인증(Common Criteria, ISO 15408)",define:`- IT제품의 보안 적합성 심사기준
- IT제품의 보안 기능성과 평가과정에서 공통적인 보안 요구사항을 적용하여 평가하는 인증제도
- 국가마다 서로 다른 정보보호 시스템 평가기준을 연동하고 평가 결과를 상호 인증하기 위해 제정된 정보보안 평가기준`,head:"",remark:`* 평가 : EAL 0~7 (숫자높을수록 보증 요구사항 강화)

* 구성: 소기증
part1: CC소개 및 일반모델
part2 : 보안기능 요구사항
part3 : 보증 요구사항

* 인증예시
보호프로파일명 | 인증번호 | 보증등급 | 제품유형 | 인증일`,image:["static/images/cellImage_1969927744_41.jpg"]},{index:254,topic:"신속확인제도",define:`- 신신기술 및 융·복합 정보보호제품에 대해 최소한의 절차와 인증 기준으로 보안 제품을 평가한 뒤 평가 기준이 마련될 때까지 공공부문에 제품을 적용할 수 있도록 하는 제도
- CC 가 너무 오래걸려서`,head:"신속확인 대상검토, 신속확인, 사후관리",remark:null,image:[]},{index:255,topic:"CMMC(Cybersecurity Maturity Model Certification) 2.0",define:`- 국방 계약자가 민감한 국방 정보를 보호하기 위해 현행 보안 요구사항을 준수하는지 확인하기 위한 고안된 평가 표
준(미국 국방 계약자를 위한 사이버보안 프레임워크)`,head:`- 목표: 사이버 공격 및 국가 행위자로부터 민감한 국방 정보 보호
* 수준(Level)
- Level 1 (Foundational): 연방 계약 정보 보호 수준
- Level 2 (Advanced): CUI 관련보호
- Level 3 (Expert): APT 대응역량 강화`,remark:null,image:[]},{index:256,topic:"부채널 공격S(ide Channel Attack)",define:`- 실제 구현 과정에서 발생하는 물리적 정보(시간, 전력, 소리, 전자파 등)를 분석하여 비밀 정보를 추출
하는 공격 방식`,head:"공격유형: 시오메전ETC",remark:"시차공격, 오류공격, 오류메시지 공격, 전력분석 공격, EM공격, Tempest 공격, Cold Boot 공격",image:[]},{index:257,topic:"ㄴ멜트다운, 스펙터",define:"- 커널메모리 혹은 사용자 메모리의 시간차를 분석하여 정보를 탈취하는 공격 기법",head:`CPU 구조적 결함으로 커널 정보를 탈취 
권한이 없어도 조회 가능케 함`,remark:`[대응방안]
KPTI패치, CPU 아키텍처, 칩 교체, 거버넌스 체계, 기타솔루션`,image:[]},{index:258,topic:"산업제어시스템",define:"- 범용 운영체제와 프로토콜이 아닌 시스템 제조사 자체적으로 개발한 운영체제 및 프로토콜(Vendor Proprietary Protocol)을 사용하는 시스템들이 인터넷 연결 없는 별도의 네트워크로 고립된 환경에서 운영되는 시스템",head:`*유형
- SCADA: 모니터링 용도
- DCS: 연속 공정 제어 용도
- PLC: 불연속 공정 제어용도`,remark:`* 구분
- IT : 정보 처리, 데이터 관리, 업무 자동화, 기밀성 > 무결성 > 가용성
- OT: 산업 설비 제어, 생산 공정 운영, 가용성 > 무결성 > 기밀성`,image:[]},{index:259,topic:"ㄴISA/IEC62443",define:"- 산업제어시스템(ICS) 환경에서의 사이버 보안을 위한 국제 표준 시리즈",head:`* 구분
1. 일반(General)
- 전체 표준을 위한 개념 정의와 용어 정리, 모델 설명
2. 정책 및 절차 (Policies Procedures) 수립/운영
- 조직 관점에서 보안 관리 시스템을 수립/운영하는 정책적 요구사항
3. 시스템(System)
-  ICS 전체 시스템에 대안 보안기술, 리스크 평가, 보안 수준 정의
4. 구성요소(Component)
- ICS 구성 요소(장비,모듈 등)의 제품 보안 설계 요건 및 기술 요구사항`,remark:null,image:[]},{index:260,topic:"프라이버시 보호 기술(PET: Privacy Enhancing Technologies)",define:"- 개인정보를 수집·처리·분석·공유하는 과정에서 개인의 프라이버시를 보호하기 위한 기술의 집합",head:`* 기술
- 데이터난독 처리도구: 차분 프라이버시, 합성 데이터생성(SDG), 영지식증명
- 암호화된 개인정보 처리: 동형 암호화(HE), 신원 기반 암호화(IBE), 안전한
다자연산(SMPC), 신뢰받는 실행 환경
- 연합 및 분산분석: 연합 학습(FL), 분산 분석 
- 데이터 책임도구: 책임시스템, 개인정보 관리시스템`,remark:null,image:[]},{index:261,topic:"ㄴ다자간 계산(MPC, Multi-Party Computation)",define:"- 복수의 참여자가 각자의 입력값을 공개하지 않고도 공동 연산을 수행할 수 있도록 하는 암호 기술",head:`- 특징: 프라이버시 보장, 분산신뢰모델, 무결성확보, 보안성
- 원리: Secret Sharing, 연산수행, 결과조합
* 기술종류
- 암호화 기반: Yao의 개릿 서킷, Secret Sharing , 동형암호
- 프로토콜 기반: 소수정밀연산, 블라인드 평가
- 기타: Hybrid MPC`,remark:`* MPC기반 인증서비스
- CURV: 디지털 자산 보안 인프라 (개인)
- Fireblocks: 기업 디지털 자산 보안 인프라
- ZenGo: 암호화폐 지갑 서비스
-Sepior: 클라우드 기반 MPC 솔루션`,image:[]},{index:262,topic:"다크패턴(Dark Pattern)",define:"- 기업이 소비자의 선택을 의도적으로 왜곡해 이익을 얻기 위해 교묘하게 설계한 사용자 인터페이스(UI) 기법",head:`- 특징: 가입 유도, 유료 결제 유도, 탈퇴 방해, 개인정보 수집 등
- 유형: 편취형, 오도형, 방해형, 압박형`,remark:`* 규제동향
- 국내:다크패턴 정책방향 발표, 신유형 규제체계 정비, 온라인 4대 분야 예방점검
- 국외: 미국 다크패턴 금지법안, EU 디지털 서비스법, EU 인공지능 규제안, 데이터법 (Data Act), 디지털 서비스법 (DSA), 디지털 시장법`,image:[]},{index:263,topic:"LC/NC 플랫폼 취약점- LowCode No Code Platform",define:`- 코딩을 최소화하거나 아예 사용하지 않고, 직관적인 그래픽 도구, Drag & Drop, AI 제안 코드 등을 활용하여
애플리케이션을 개발할 수 있도록 지원하는 플랫폼`,head:`* 기술 요소 
1. 시각적 개발 도구
2. 워크플로우/프로세스 자동화
3. 통합 및 API 연결 기능
4. 데이터 모델링 및 관리
5. 보안 및 접근 제어
6. 배포 및 운영 관리 기능
7. 협업 및 공동 개발 환경
8. AI 기반 자동화 기능`,remark:`* LC/NC OWASP TOP 10 취약점 분류
LCNC-SEC-01 계정 가장
LCNC-SEC-02 권한 오용
LCNC-SEC-03 데이터 유출 및 예기치 못한 결과
LCNC-SEC-04 인증 및 안전한 통신 실패
LCNC-SEC-05 보안 구성 오류
LCNC-SEC-06 인젝션 처리 실패
LCNC-SEC-07 신뢰할 수 없는 구성 요소
LCNC-SEC-08 데이터 및 비밀 처리 실패
LCNC-SEC-09 자산 관리 실패
LCNC-SEC-10 보안 로깅 및 모니터링 실패`,image:[]},{index:264,topic:"ㄴ대응방법",define:`- 계정 가장: 강력한 인증, 최소 권한 원칙
- 권한 오용: 공유 연결 비활성화
- 데이터 유출 및 예기치 못한 결과: 커넥터 제한
- 인증 및 안전한 통신 실패: 연결 생성 강력 관리
- 보안구성 오류: 구성 모니터링, 시스템 변경관리
- 인젝션 처리 실패: 입력 정제
- 신뢰할 수 없는 구성 요소: 버전관리
- 데이터 및 비밀 처리 실패: 데이터 분류, 암호화
- 자산 관리 실패: 자산목록화
- 로깅 및 모니터링 실패: 로그 수집 및 보호`,head:"",remark:null,image:[]}],i={subject:e,topics:n};export{i as default,e as subject,n as topics};
