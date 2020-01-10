# 部署启动

## 数据库脚本

::: tip 说明

当前，本项目支持以下数据库

| 数据库     | 项目使用        | 版本支持                         | 驱动包                      |
| :--------- | --------------- | -------------------------------- | --------------------------- |
| Mysql      | Mysql 5.7       | 5.5+                             | mysql-connector-java@5.1.48 |
| Oracle     | Oracle 11.2     | 11g/12c...                       | ojdbc6@11.2.0.3             |
| SQLServer  | SQL Server 2019 | 2008/2012/2014/2016/2017/2019... | mssql-jdbc@6.2.2.jre8       |
| PostgreSQL | PostgreSQL 12   | 8.2+                             | postgresql&42.2.8           |

:::

本项目使用双数据源(当然你可以在启动时覆盖配置指向同一个库)

- attemper

用来放置调度配置、执行记录等表

- log

用来放置操作日志、归档日志等

在部署时，请先创建相应的数据库，然后根据不同的数据库，执行不同的建表和初始化脚本

## 部署程序

### docker

::: tip Docker Hub 镜像仓库

Docker [https://hub.docker.com/u/attemper](https://hub.docker.com/u/attemper)

:::

### jar

::: tip Jar 包下载地址

GitHub Release [https://github.com/attemper/attemper/releases](https://github.com/attemper/attemper/releases)

:::

### war

::: tip War 资源地址

GitHub Release [https://github.com/attemper/attemper/releases](https://github.com/attemper/attemper/releases)

:::

### idea/eclipse...

::: tip 项目源码地址

GitHub [https://github.com/attemper/attemper](https://github.com/attemper/attemper)

:::

## 验证

1.启动正常
::: warning 注意
内网启动时，可能会报邮箱(java mail)相关的报错，不影响正常启动，但影响邮件告警
:::

2.使用默认的超管账号登录

|   账号   |      密码      |
| :------: | :------------: |
| attemper | admin@Attemper |
