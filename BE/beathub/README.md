## 로컬에서 테스트

- 도커로 mysql 띄우기

```bash
$ docker pull mysql
$ docker run -d --name beathub-mysql -p 13306:3306 -e MYSQL_ROOT_PASSWORD=Beathub12! mysql
```

- mysql DB생성

```mysql
create database IF NOT EXISTS `beathub_db` collate utf8mb4_general_ci;
```

