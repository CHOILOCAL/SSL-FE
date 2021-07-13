
# SSL PJT Front-End (SSL-FE)

## 개발환경    
```
|  구분         |  설명                                                                |
|------------- |----------------------------------------------------------------------|
| 개발서버      | http://업데이트 예정                                                   |  
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

2-1. 본인이 주로 사용하는 개발 에디터 오픈 (본 글에서는 VS CODE 참조)
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
