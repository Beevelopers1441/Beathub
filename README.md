# Beathub

<img src="./assets/img/beathub_logo.png" style="width: 200px" />

> 프론트엔드 : [김지윤](), [서민수](), [전선규](https://github.com/sungyujeon)
>
> 백엔드 : [류영석](), [한상진](https://github.com/SangjinH)

## :information_desk_person: Introduction

- 기간 

  - 21.08.30 - 21.10.08 ( 6 weeks )

- 목적

  - 같이 소통하고, 나만의 음악 파일을 만들 수 있는 서비스를 구현했습니다.

- 내용

  - 나의 음악 `연주파일을 공유`하고, 다른 사람의 음악 파일에 맞춰 내가 연주하며

    `온라인으로도 합주`할 수 있는 경험을 제공하고자 하였고, 

    또한, 팀을 구할 수 있는 `커뮤니티를 구성해`,

    음악에 대한 `열정을 이어갈 수 있도록` 서비스를 만들었습니다.



## Project Architecture

![](./assets/img/beathub_sa.png)



## :file_folder: Tech Stack

- **:art: Front-End**

  - Language
    - <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> ~~typescript 추가~~

  - Framework / Library
    - <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/redux-6f43b5?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/styled components-d56ead?style=for-the-badge&logo=styled components&logoColor=white">
  - Design
    - <img src="https://img.shields.io/badge/material ui-1976d2?style=for-the-badge&logo=material ui&logoColor=white"> 
  - open API
    - <img src="https://img.shields.io/badge/kakao-fae100?style=for-the-badge&logo=kakao&logoColor=3b1e1e">  >> ~~구글로 수정~~

- :computer:  __Back-End__

  - Language
    - <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=black"> 
  - Framework / Library
    - <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=green"><img src="https://img.shields.io/badge/JPA-black?style=for-the-badge&logo=JPA&logoColor=white">

- :house_with_garden: __Common__

  - Co-work

    - <img src="https://img.shields.io/badge/notion-black?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/jira-0052cc?style=for-the-badge&logo=jira&logoColor=white"> <img src="https://img.shields.io/badge/git-f05032?style=for-the-badge&logo=git&logoColor=white">

  - DevOps

    - AWS, Jenkins ~~아이콘~~

  - Database

    - <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black"> ~~firebase~~ 

    

## Database Model

![](./assets/img/beathub_erd.png)



## Service

> gif에 설명

### 메인 페이지

메인 페이지 입니다. 왼쪽부분에는 이 달의 음악이 추천으로 뜨고 오른쪽 부분에는 최근 업로드된 오디오 목록이 있습니다.



### 소셜 로그인

- 구글 로그인

해당 버튼을 누르게 되면 OAuth2와 연동되어 자동으로 저희 서비스에 회원 가입할 수 있습니다.



### Beathub





### 커뮤니티

- 글 작성

- 밴드 가입
- 채팅



### 프로필

- 개인 프로필
- 그룹 프로필

- 검색

