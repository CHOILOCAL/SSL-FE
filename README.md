
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

## 개발 환경 셋팅 (for Window)
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
- Prettier-Code formatter : 코드 스타일 자동 정리 플러그인

VSC 한국어 설정 방법
1. 마켓플레이스에서 Korean Language Pack for Visual Studio Code 설치
2. VS Code에서 'F1'을 누른 후, Configure Display Language 입력
3. local.json 파일 내에서 local값을 'ko'로 설정
4. VS Code 재시작
```

## 개발 환경 셋팅 (for Mac) 추가 예정
```
1. Node 다운로드

2. Npm 혹은 Yarn 다운로드

3.
```

## 참고 문서

### [바로가기](https://app.spaceli.io/space/1hosTH2bzRt1f3tW15dLnJXQIjn8DuPgl/page/1oQ1V-ywOFRAFhvg6yYd2my2avsnF8fSG)

## 파일 구조
```
※ 본 프로젝트는 PC용 layout, mobile용 layout을 따로 가지고 있으며,
layout > view > component의 구조를 따르고 있다

├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── jsconfig.json // 자바스크립트 설정 파일
├── package-lock.json
├── package.json // 패키지 모듈 설정 파일
├── public
│   ├── _redirects
│   ├── favicon.ico // 파비콘
│   ├── index.html // root index 파일
│   ├── manifest.json
│   └── static // 정적 파일 폴더
│       └─── images // 이미지 파일 폴더
│           ├── not_found.png // 404 에러시 노출되는 이미지
│           ├── undraw_page_not_found_su7k.svg // 404 에러시 노출되는 이미지
│           └── undraw_resume_folder_2_arse.svg // 404 에러시 노출되는 이미지
├── src
│   ├── App.js // global js 파일
│   ├── assets // 정적 resource 폴더 (icons, images, icons, css, ...)
│   │   └── images
│   │       ├── hanjin.jpg
│   │       ├── hanjin2.png
│   │       └── hist.png
│   │   └── icons
│   │       ├── Facebook.js
│   │       ├── Google.js
│   ├── components // 컴포넌트
│   │   ├── Account.js
│   │   ├── GlobalStyles.js
│   │   ├── Logo.js
│   │   └── Page.js
│   ├── index.js // root js 파일
│   ├── layouts
│   │   ├── DashboardLayout // PC 버전 Layout
│   │   │   ├── NavBar // 좌측 SideNavBar
│   │   │   │   ├── NavItem.js
│   │   │   │   └── index.js
│   │   │   ├── TopBar.js
│   │   │   └── index.js
│   │   └── MainLayout // 모바일 버전 Layout(~ing)
│   │       ├── TopBar.js
│   │       └── index.js
│   ├── routes.js // 라우터 경로
│   ├── theme // global theme(theme lib)
│   │   ├── index.js 
│   │   ├── shadows.js
│   │   └── typography.js
│   ├── utils
│   │   ├── constants.js // 고정 변수 셋팅 (API root ... 등)
│   │   └── getInitials.js // 정규식 모음
│   └── views // 좌측 SideNavbar에 메뉴들이 가지고 있는 view
│       ├── account // 내 프로필
│       │   └── AccountView
│       │       ├── Profile.js
│       │       ├── ProfileDetails.js
│       │       └── index.js
│       ├── auth // 권한 관리
│       │   ├── AuthView
│       │   │   └── index.js
│       │   ├── LoginView.js
│       │   └── RegisterView.js
│       ├── code // 공통코드 관리
│       │   └── CommCodeView
│       │       └── index.js
│       ├── company // 회사 관리
│       │   └── CompanyView
│       │       └── index.js
│       ├── user // 사용자 관리
│       │   └── UserListView
│       │       ├── Results.js
│       │       ├── Toolbar.js
│       │       ├── data.js
│       │       └── index.js
│       ├── dashboard // 대시보드 관리
│       │   └── dashboardView
│       │       └── index.js
│       ├── dept // 부서 관리
│       │   └── deptView
│       │       └── index.js
│       ├── errors // 에러
│       │   └── NotFoundView.js
│       ├── example // 개발용 예제 views들 모음
│       │   └── ExampleView
│       │       ├── Cards.js
│       │       ├── Notifications.js
│       │       ├── Password.js
│       │       └── index.js
│       ├── board // 게시판 관리
│       │   ├── ContentView // 게시글
│       │   │   ├── Comments.js
│       │   │   ├── Content.js
│       │   │   └── index.js
│       │   └── BoardListView // 게시글 리스트
│       │       ├── Results.js
│       │       ├── Toolbar.js
│       │       ├── data.js
│       │       └── index.js
│       ├── menu // 메뉴 관리
│       │   └── MenuView
│       │       └── index.js
└── yarn.lock

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
	       develope ------------------------(merge)-----
	          \                            /     
               --- mybranch(localPC)------        
                                               
  ```
 - 개발 작업 순서
 1. local PC에 develop 에서 소스를 당겨 온다. (clone)
 2. 개인이름의 branch를 만든다. (예. feature/local, feature/local_0712...)
 3. 개발 작업 수행
 4. 로컬에 commit 한다.
 5. develop 전환한다.
 6. 타인이 develop 브랜치에 사전에 작업한 내역이 존재한다면 pull 한다.
 7. 다시 개인 branch로 전환한다.
 8. 개인 브랜치를 중심으로 develop 브랜치를 머지한다.
 9. 개인 브랜치에 충돌을 해결하여 커밋한다.
 10. 다시 develop 브랜치로 이동한다.
 11. develop 브랜치를 중심으로 개인브랜치를 다시 머지한다.
 12. develop 브랜치를 서버에 push 한다.
 
 - 개인브랜치를 중심을 수시로 develop 브랜치를 당겨서 머지해야 나중에 충돌해결하는데 어려움이 없다.
 
[git branch 정책 참고 문서](https://techblog.woowahan.com/2553/)

## Designed License

- Licensed under MIT (https://github.com/devias-io/react-material-dashboard/blob/master/LICENSE.md)
  ![license](https://img.shields.io/badge/license-MIT-blue.svg)
