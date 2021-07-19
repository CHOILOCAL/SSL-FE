# SSL PJT Front-End (SSL-FE)

## 개발환경

```
|  구분         |  설명                                                                 |
|--------------|----------------------------------------------------------------------|
| NodeJS       | v12.16.1                                                             |
| NPM          | 6.13.4~                                                              |
| YARN         | 1.22.4~                                                              |
| bitbucket    | https://bitbucket.hist.co.kr/projects/HX-SELHTUG/repos/ssl-fe/browse |
```

## 개발 환경 셋팅 (for Window, Mac)

```
1. Node.js / NPM 다운로드

1-1. https://nodejs.org/en/download/ 접속 후 위에 명시되어있는 버전의 node.js 다운로드
1-2. 터미널 접속 후 'npm -v' 확인

2. 에디터 열기

2-1. 본인이 주로 사용하는 개발 에디터 오픈 (*본 글에서는 VS CODE 참조)
2-2. 시작 화면에서 'Git 리포지토리 복제...' 선택 후 해당 git 레포지토리 URL 입력
   (URL : https://bitbucket.hist.co.kr/scm/hx-selhtug/ssl-fe.git)
2-3. 저장하고자 하는 로컬 폴더 경로 선택

3. Git

3-1. 터미널 접속 후 'git remote -v'명령어를 통해 해당 연결된 원격 저장소 확인
3-2. 연결된 원격 저장소가 없을시 'git remote add origin 빗버킷_레포지토리_URL'
3-3. 'git branch -a' 명령어를 통해 현재 브랜치 확인
  ( * develop
    remote/origin/develop
    remote/origin/master ) 와 같은 형식

4. NPM

4-1 'npm install' 명령어를 통해 해당 프로젝트의 'package.json'에 명시되어있는 패키지 다운로드
4-2 'npm run start' 명령어를 통해 3000포트로 브라우저 오픈

```

```
* Tip.

VS Code 사용시, React에 어울리는 확장팩 추가 가능.
- ESLint : 자바스크립트 문법 및 코드 스타일 검사 플러그인
- Reactjs Code Snippets : 리액트 컴포넌트, 라이프사이클 함수 작성시 단축 단어를 통해 코드 자동생성 플러그인
  : 설치 후, 만들고자 하는 컴포넌트 파일 생성 후 'rcc'를 입력하면 클래스형 컴포넌트, 'rsc'를 입력하면 함수형 컴포넌트 자동 생성
- Prettier-Code formatter : 코드 스타일 자동 정리 플러그인

VSC 한국어 설정 방법
1. 마켓플레이스에서 Korean Language Pack for Visual Studio Code 설치
2. VS Code에서 'F1'을 누른 후, Configure Display Language 입력
3. local.json 파일 내에서 local값을 'ko'로 설정
4. VS Code 재시작
```

## 참고 문서

### [바로가기](https://app.spaceli.io/space/1hosTH2bzRt1f3tW15dLnJXQIjn8DuPgl/page/1oQ1V-ywOFRAFhvg6yYd2my2avsnF8fSG)

### 파일 구조

```
※ 본 프로젝트는 PC용 layout, mobile용 layout을 따로 가지고 있으며,
layout > view >= component의 구조를 따르고 있다.
모든 layout, view, component는 'index.js'에서 다른 함수 컴포넌트를 불러오거나 그 자체로 사용된다.

├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── _redirects
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── static
│       └── images
├── src
│   ├── App.js
│   ├── assets
│   │   ├── icons
│   │   ├── images
│   │   └── styles
│   ├── components
│   ├── index.js
│   ├── layouts // URL 변경이 반영되지 않는 컴포넌트
│   │   ├── DesktopLayout // Desktop 버전 Layout
│   │   │   ├── NavBar
│   │   │   │   ├── NavItem.js
│   │   │   │   └── index.js
│   │   │   ├── TopBar.js
│   │   │   └── index.js // DesktopLayout 컴포넌트를 구성하는 최상단
│   │   └── MobileLayout // Mobile 버전 Layout
│   │       ├── NavBar
│   │       │   ├── NavItem.js
│   │       │   └── index.js
│   │       ├── TopBar.js
│   │       └── index.js // MobileLayout 컴포넌트를 구성하는 최상단
│   ├── routes.js // 라우터, URL PATH 설정
│   ├── setupProxy.js // API CORS proxy 설정
│   ├── theme // 전역 CSS
│   ├── utils // 유틸리티
│   └── views // URL 변경 단위로 호출되는 컴포넌트
│       ├── account // 계정
│       │   ├── AccountView // 내 프로필
│       │   │   ├── Profile.js
│       │   │   ├── ProfileDetails.js
│       │   │   └── index.js
│       │   ├── FindId // 아이디 찾기
│       │   │   └── index.js
│       │   ├── FindPwd // 비밀번호 찾기
│       │   │   └── index.js
│       │   ├── Login // 로그인
│       │   │   └── index.js
│       │   └── SignUp // 회원가입
│       │       └── index.js
│       ├── auth // 권한 관리
│       │   └── AuthView
│       │       └── index.js
│       ├── board // 게시판
│       │   ├── BoardListView // 게시판 리스트
│       │   │   ├── Results.js
│       │   │   ├── Toolbar.js
│       │   │   └── index.js
│       │   └── ContentView // 게시판 글 상세보기
│       │       ├── Comments.js
│       │       ├── Content.js
│       │       └── index.js
│       ├── code // 공통코드 관리
│       │   └── CommCodeView // 공통코드 관리 리스트
│       │       └── index.js
│       ├── company // 회사 관리
│       │   └── companyListDetailView // 회사 관리 리스트 상세보기
│       │   └── CompanyListView // 회사 관리 리스트
│       │       ├── Results.js
│       │       ├── Toolbar.js
│       │       └── index.js
│       ├── dashboard // 대시보드
│       │   └── DashboardListView // 대시보드 리스트
│       │       └── index.js
│       ├── dept // 부서 관리
│       │   └── DeptView // 부서 관리 리스트
│       │       └── index.js
│       ├── errors // 에러 페이지
│       │   └── NotFoundView.js
│       ├── example // 예제 페이지
│       │   └── ExampleView
│       │       ├── Cards.js
│       │       ├── Notifications.js
│       │       ├── Password.js
│       │       └── index.js
│       ├── menu // 메뉴 관리
│       │   └── MenuListView // 메뉴 관리 리스트
│       │       └── index.js
│       └── user // 사용자 관리
│           └── UserListView // 사용자 관리 리스트
│               ├── Results.js
│               ├── Toolbar.js
│               └── index.js


```

## 브랜치 규칙

- 브랜치 종류

  - master: 메인 유지관리 브랜치 릴리즈 시 태깅추가, 운영환경
  - develop: 실행 가능한, 에러 없는 최신 소스, 개발자 공유
  - mybranch : 개발자 개인 작업

- 브랜치 [그래프][1] 예)

  ```
  -  master ------------------------------(merge & taging)
         \                                     /
       develope ------------------------(merge)

              --- mybranch(localPC)------

  ```

- 개발 작업 순서

1.  local PC에 develop 에서 소스를 당겨 온다. (clone)
2.  개인이름의 branch를 만든다. (예. feature/local, feature/local_0712...)
3.  개발 작업 수행
4.  로컬에 commit 한다.
5.  develop 전환한다.
6.  타인이 develop 브랜치에 사전에 작업한 내역이 존재한다면 pull 한다.
7.  다시 개인 branch로 전환한다.
8.  개인 브랜치를 중심으로 develop 브랜치를 머지한다.
9.  개인 브랜치에 충돌을 해결하여 커밋한다.
10. 다시 develop 브랜치로 이동한다.
11. develop 브랜치를 중심으로 개인브랜치를 다시 머지한다.
12. develop 브랜치를 서버에 push 한다.

- 개인브랜치를 중심을 수시로 develop 브랜치를 당겨서 머지해야 나중에 충돌해결하는데 어려움이 없다.

[git branch 정책 참고 문서](https://techblog.woowahan.com/2553/)

<br>

## <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> 개발 Tip.

##### 리액트에서 만드는 컴포넌트에는 두가지의 종류가 있다.

##### 1. 클래스형 컴포넌트

##### 2. 함수형 컴포넌트

##### 이전에는 함수형 컴포넌트에서는 state, 라이프싸이클 API, 임의 메서드 정의가 불가하여 함수형 컴포넌트와 클래스 컴포넌트를 적절히 혼용하여 사용하였지만, 현재 Hooks의 등장으로 함수형 컴포넌트에서도 클래스 컴포넌트와 같은 기능을 구현할 수 있다. 또한 코드의 간결성, 메모리 자원이 더 작고, 빌드 배포 결과물의 크기도 작으며 리액트 개발 팀이 함수형 컴포넌트와 Hooks를 사용하는 것이 주요 컴포넌트 개발 방식이 될 것이라 공지한 바 있기 때문에 **함수형 컴포넌트 사용**을 권장한다
#####

<br >

## Designed License

- Licensed under MIT (https://github.com/devias-io/react-material-dashboard/blob/master/LICENSE.md)
  ![license](https://img.shields.io/badge/license-MIT-blue.svg)
