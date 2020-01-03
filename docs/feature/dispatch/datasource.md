# 数据源

## 数据库支持

本项目支持 4 种比较主流的数据库:`MySQL`、`Oracle`、`Sql Server`、`PostgreSQL`，在项目中就已集成相关 JDBC 驱动包，所支持的数据库版本请参考[部署文档](/guide/essentials/deploy.md)
调度中心对数据库厂商的支持限制，主要有以下几方面

- 所用框架的限制
  - `Camunda`:除以上 4 种外还支持`DB2`、`H2`、`Mariadb` [详情](https://github.com/camunda/camunda-bpm-platform/tree/7.12.0/engine/src/main/resources/org/camunda/bpm/engine/db/create)
  - `Quartz`:除以上 4 种外还支持`DB2`、`H2`等，`Quartz`使用原生的 JDBC 操作数据库，未使用框架，故支持的数据库更多 [详情](https://github.com/quartz-scheduler/quartz/tree/v2.3.2/quartz-core/src/main/resources/org/quartz/impl/jdbcjobstore)
- 特殊配置

  - 比如 Spring Boot 框架的配置项`connection-test-query`，用来校验数据库连接，`Oracle`数据库就不支持`select 1`，需使用`select 1 from dual`

不过也由于使用 Mybatis 框架，保持了比较好的复用性和扩展性，在添加相关的数据库驱动包后，可以支持其他数据库

## 用法

新增数据源时，请指定以下配置

- 数据源名称

- JDBC 连接串

- 用户名

- 密码
