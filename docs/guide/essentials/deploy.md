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

本项目使用 2 个数据源(当然你可以在启动时覆盖配置指向同一个库) [数据库脚本链接](https://github.com/attemper/attemper/tree/master/docs/database)

| 库名     | 脚本地址                                     | 用途                                   |
| -------- | -------------------------------------------- | -------------------------------------- |
| attemper | {mysql/oracle/sqlserver/postgresql}/attemper | 调度配置(camunda/quartz)、执行记录等表 |
| log      | {mysql/oracle/sqlserver/postgresql}/log      | 操作日志、归档日志等                   |

SQL 执行步骤:  
1.创建相应的数据库，根据不同的数据库类型，选择上述地址的建表语句执行  
2.在`attemper`库中执行初始化数据的脚本[attemper_init_data.sql](https://github.com/attemper/attemper/tree/master/docs/database/attemper_init_data.sql)

## 启动程序

### 本地启动

- 适用 Eclipse/Idea 等开发工具

::: tip 项目源码地址
GitHub [https://github.com/attemper/attemper](https://github.com/attemper/attemper)
:::

- 下载项目源码，在完成编译后，启动项目
  - 调度中心-前端:`attemper-admin`  
    使用`npm`命令下载依赖后启动，参考前端的 README
  - 调度中心-后端:`attemper-web`  
    修改配置:`attemper-web/src/main/resources/application.yml`  
    启动类：`com.github.attemper.web.WebApplication`
  - 执行器:`attemper-executor`  
    修改配置:`attemper-executor/src/main/resources/application.yml`  
    启动类：`com.github.attemper.executor.ExecutorApplication`
  - 调度器:`attemper-scheduler`  
    修改配置:`attemper-scheduler/src/main/resources/application.yml`  
    启动类：`com.github.attemper.scheduler.SchedulerApplication`

::: warning 注意
请注意(可能需要)修改相关配置，包括但不限于:

- 前端调用后端的地址，在 attemper-admin/vue.config.js
- 数据库连接、账号、密码
- 注册中心的地址
- 告警邮箱信息(源码是以 xxx 占位的)
  :::

### Docker 镜像

::: tip Docker Hub 镜像仓库
Docker [https://hub.docker.com/u/attemper](https://hub.docker.com/u/attemper)
:::

- 各 Docker 仓库

  - [调度中心-前端](https://hub.docker.com/r/attemper/attemper-admin/tags)  
    **注**:前端项目由于需要连后台，镜像一般需要自己定制
  - [调度中心-后端](https://hub.docker.com/r/attemper/attemper-web/tags)
  - [执行器](https://hub.docker.com/r/attemper/attemper-executor/tags)
  - [调度器](https://hub.docker.com/r/attemper/attemper-scheduler/tags)

  启动命令参考

  ```bash
  docker run --net host -e JAVA_OPTS="-Xms1024m -Xmx2048m --spring.datasource.hikari.first.jdbc-url=jdbc:mysql://xxx:3306/attemper?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false --spring.datasource.hikari.second.jdbc-url=jdbc:mysql://xxx:3306/log?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false" attemper/attemper-web或executor或scheduler:1.0.0
  ```

## 验证

1.启动正常
::: warning 注意
内网启动时，可能会报邮箱(java mail)相关的报错，不影响正常启动，但影响邮件告警
:::

2.使用默认的超管账号登录

|   账号   |      密码      |
| :------: | :------------: |
| attemper | admin@Attemper |
