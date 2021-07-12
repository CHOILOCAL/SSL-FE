<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======

# SSL PJT Front-End (SSL-FE)

## 개발환경    
```
|  구분         |  설명                                                                |
|------------- |----------------------------------------------------------------------|
| 개발서버      | http://업데이트 예정                                                   |  
| NodeJS       | v12.16.1                                                             |
| NPM          | 6.13.4~                                                              |
| YARN         | 1.22.4~                                                              |
| bitbucekt    | https://bitbucket.hist.co.kr/projects/HX-SELHTUG/repos/ssl-fe/browse |
```

## 개발 환경 셋팅 (for Window)
```
1. Node.js / NPM 다운로드
 
1-1. https://nodejs.org/en/download/ 접속 후 위에 명시되어있는 버전의 node.js 다운로드
1-2. 터미널 접속 후 'npm -v' 확인

2. 에디터 열기

2-1. 본인이 주로 사용하는 개발 에디터 오픈 (본 글에서는 VS CODE 참조)
2-2. 시작 화면에서 'Git 리포지토리 복제...' 선택 후 해당 git 레포지토리 URL 입력
   (URL : https://bitbucket.hist.co.kr/scm/hx-selhtug/ssl-fe.git)
2-3. 저장하고자 하는 로컬 폴더 경로 선택

3. Git

3-1. 터미널 접속 후 'git remove -v'명령어를 통해 해당 연결된 원격 저장소 확인
3-2. 연결된 원격 저장소가 없을시 'git remote add origin 빗버킷_레포지토리_URL'
3-3. 'git branch -a' 명령어를 통해 현재 브랜치 확인
  ( * develop
    remote/origin/develop
    remote/origin/master ) 와 같은 형식

4. NPM

4-1 'npm install' 명령어를 통해 해당 프로젝트의 'package.json'에 명시되어있는 패키지 다운로드
4-2 'npm run start' 명령어를 통해 3000포트로 브라우저 오픈

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
## 개발 환경 셋팅 (for Mac) 추가예
```
1. Node 다운로드

2. Npm 혹은 Yarn 다운로드

3.
```

## 참고 문서

### [바로가기](https://app.spaceli.io/space/1hosTH2bzRt1f3tW15dLnJXQIjn8DuPgl/page/1oQ1V-ywOFRAFhvg6yYd2my2avsnF8fSG)

## 파일 구조
```
SSL-FE

불필요한 파일/폴더 삭제 후 업데이트 예정

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
>>>>>>> 7250c36339f99522cdd97f9f569736b45cedee9b
