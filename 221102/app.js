/*
typeScript

설치 명령어
npm i -D typescript ts-node @types/node

tsconfig.json 만들기
tsc --init

tsconfig.json paths 사용할 거라
npm i -D tsconfig-paths

우리가 필요한 모듈 설치

머클루트 해시값이 필요하니까
crypto-js, merkle 설치
npm i crypto-js merkle

typeScript는 외부 모듈을 사용할 경우에 타입 정의 파일이 필요합니다.
crypto-js, merkle 모듈 타입을 가져올 수 있는 모듈 설치

설치명령어
npm i -D @types/crypto-js
npm i -D @types/merkle
// -D = --save-dev

제네시스 블록 만들기

만든 것들 테스트 \

typeSccipt로 블록체인을 만들어봤는데 객체 지향적인 방법으로 코드를 작성하고 OOP(객체 지향 프로그래밍)

OOP는 프로그램의 설계방법 개념의 하나이다.

OOP는 프로그램을 단순히 실행 데이터 처리 방법만이 아니라

수많은 객체라는 단위를 만들어서 이 객체를 가지고 동작하는 상호작용을 서술한 방식이다.

OOP에서 객체는 하나의 역할을 수행하는 함수와 변수들의 묶음 데이터로 보면 된다.

이런 객체지향 프로그래밍은 프로그램을 만들 때 제일 작은 단위부터 만들어가는 방식을 선호함
하지만 작성된 코드들의 테스트가 어렵다는 단점이 있고 그래서 이런 부분 때문에 라이브러리를 사용해서 테스트 한다.

그냥 개발이 아니라 테스트 코드를 작성하면서 개발해 나가는 것이
TDD(Test_Driven Development) 기법

그래서 우리도 테스트 해보려고 Jest라는 애를 사용해보자

설치 명령어
npm i -D ts-jest @types/jest babel-core
npm i -D @babel/preset-typescript @babel/preset-env

체인 만들기

block 클래스로 만들 블록들을 체인으로 연결시켜줄 chain을 클래스로 만들어보자
chain 클래스에는 생성한 블록을 배열롤 담아서 블록체인을 만들 예정
이미 지금 우리가 만든 블록은 블록의 속성으로 체이닝 이미 이뤄지고 있는데
이전 블록 해시값을 속성으로 가지고 있기 때문에 특정 블록 기준으로 이전 블록 해시값이 달리지면 현재 블록의 이전 해시값과 불일치가 발생해서 연결 고리가 끊긴다.
chain 클래스를 따로 만들어서 생성된 블록을 하나의 배열 안에 담아주는 역할을 할 예정

이렇게 하는 이유는 우리가 마이닝 할 때 난이도 계산을 하기 위해서.

PoW (Prrof of Work : 작업 증명)

작업 증명 역사
작업증의 기본 개념은 1933년도에 고안됐고
알고리즘 적용 후 1993년 모니 나노어이 작업 증명의 기본 개념을 추가 고안?
1997년 영국의 암호학자인 애덤백의 해시캐시고 이후에 2009년 이 기술은 사토시 나카모토 라는 사람이 비트코인에 적용되어 오늘날까지 사용된다.

해시캐시는 대량으로 스팸메일을 방지하고자 고안된 것.
이메일을 보내기 위해서 작업 증명 알고리즘을 이용해서 해시값을 찾고
그 보상으로 발행되는 우표 같은 것
이 과정이 시간과 비용이 많이 들고 대량 발생되는 스팸메일을 막을 수 있는 방법으로 이 방식을 사용했다.

작업 증명 방식을 거래가 발생하면 해당 거래가 유용한지에 대한 합의 검증 방식

논스값을 이제 사용하고

간단하게 설명 : 작업 증명은 어려운 수학 문제를 푸는 것이라고 생각하고 채굴하는데 작업 증명 하는 것이 '채굴이다'라고 할 수 있다.
어려운 수학 문제를 풀게 해서 이 문제를 푼 사람한테 보상으로 코인을 주는 것

여기서 특정 조건을 만족하는 논스값을 찾는 것이다.

블록체인 상의 모든 차명자는 동일한 순서로 블록을 연결하기 위해서
합의 알고리즘이 필요하고
대표적인 합의 알고리즘은 PoW, POS, DPOS, POA 등이 있다.


난이도가 4
논스 ???
0000 이상인 해시값이 나올 때까지 목표값이 나올 때까지
논스를 0에서 계속 하나씩 더하면서 해싱을 해서 목표값을 찾는 것
0000 -> 000000


'작업 증명 방식'은 PoW는 목표값 이하의 해시값을 찾는 과정을 무수히 반복해서 해당 작업에 참여했음을 증명하는 방식의 알고리즘

작업 증명 알고리즘의 필요성은 네트워크 상의 모든 노드가 동시에 블록을 만들 수 없게 하는 것.
작업 증명을 통과해야만 새로운 블록을 추가 생성할 수 있게 된다는 점

작업 증명 알고리즘은 Difficulty 조절 알고리즘을 이용해서 약 10분당 1개의 블록이 생성되는 것을 보장하게 된다.

난이도 조정 블록 범위 => 10
블록의 생성 시간 (단위 : 분) => 10
생성 시간 (단위 : 초) => 60

Difficulty 조절 알고리즘은 다음과 같이 설계하자

블록 한 개가 생성되는 예상 시간 10분으로 설정하고, 10개의 블록을 한 묶음으로 해서 블록 한 묶음이 생성되는 예상 시간을 6000초라는 값을 할당해주고
이후 10개의 블록이 생성되는데 걸리는 시간 timeExpected / 2보다 작을 경우
난이도 조절을 1 증가시키고 timeExpected *2 보다 클 경우에는 난이도를 1 감소 시키자

P2P 네트워크

block 클래스랑 chain을 가지고
P2P 네트워크 https / ws 환경 구성

http / ws 환경 구성

P2P네트워크를 만드는데 http와 ws 웹소켓을 사용해서
api들을 구성하고 블록을 가져올 express모듈로 서버 동작을 하고 P2P 네트워크를 웹소켓으로 구성

설치할 모듈
npm i express
npm i -D @types/express

ws 웹소켓 설치
npm i ws
npm i -D @types/ws

*/

/*
1110 오늘자
머클 트리란 머클 트리는 수많은 트랜잭션을 각각 해싱해서
2개의 짝 지어서 해싱을 계속 반복해서 최종적으로 하나 남을 때까지 해싱한 트리
1. 첫 번째 데이터를 SHA256 형태의 해시값으로 변환
2. 2개의 노드를 한쌍으로 묶어서 해시값 변환
3. 해시값으로 변환을 반복해서 마지막 하나가 남을 때까지 반복
4. 블록의 모든 거래를 합친 해시값이 머클 루트
머클 트리가 필요한 이유는 머클 트리의 목적이
데이터의 간편성과 확실한 인증이기 때문에

블록체인 네트워크 정보를 모두 다운로드 하면 무척 용량이 크기 때문에
최소한의 정보로 인증하기 위해 블록체인을 전부 다운로드 하지 않고
머클 루트값만 가진다.

SHA256 알고리즘으로 256bit로 구성된 64자리 문자열로 암호화 해준다 했고.
머클 루트는 값이 64자 이며,
안전하고 다양한 검증을 빠르게 할 수 있는 것
머클 트리 자체가 해시로 이루어져 있고 하나의 트랜잭션이나
아니면 블록의 값이 변조 되면 머클루트 해시값이 변조되고
잘못된 해시값이 나오게 되면 해당 블록이 잘못된 것으로 블록을 거부하고
블록체인 네트워크를 안정적으로 유지할 수 있다.

블록체인의 동작 방식
비트코인 지갑 설치 -> peer 연결 -> 블록 다운로드 -> 블록의 검증(해시)

비트코인 지갑 생성
Random 값을 만들고 -> 개인키와 공개키 생성(타원곡선 알고리즘 사용 ECC) -> 지갑 주소 생성(SHA258 & Bace58)

블록체인의 동작
브로드 캐스팅(알려준다 내가 새로운 거래를 만들었다라면)
1. 지갑 프로그램에 연결된 peerlist를 확인하고
2. 네트워크 브로드 캐스팅
3. 채굴 시작 (내가 먼저 다른 사람이 만든 거래를 승인(블록 생성)해주고)
4. 채굴 성공 (내가 찾은 nonce를 모두에게 알린다.)
5. 채굴에 성공한 블록을 전달
6. 네트워크 브로드 캐스팅
7. 블록을 검증을 한 후 블록 체인에 연결
8. 롱기스트 블록 체인


P2P기술에서 P peer의 약자
P2P는 서비스에서 모두가 서버가 될 수 있고 클라이언트가 될 수 있다.
P2P는 서로 다른 사용들끼리 자료를 주고 받는다라는 뜻
Peer는 동등한 사용자를 의미

비트코인 화폐를 발행하는 방식이 마이닝이고
비트코인 화폐는 10분에 한 번씩 일정량이 생성되며
마이닝에 참여한 사용자 중 한 명에게 지급된다.
참여자들은 hashcash라는 문제를 풀고, hashcash는 특정한 조건을 가지는 해시값을 찾는 것


*/
