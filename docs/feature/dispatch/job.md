# 任务

## 定义

任务是调度中心执行的入口，任务由 `bpmn-js` 通过拖拽的方式对任务节点进行设计，对任务形成流式编排。

通过任务编排，可以实现以下一些典型的需求

- 串行
  节点按线条指向先后执行

- 并发
  一批节点可以并发执行后汇聚

- 分支判断
  根据参数判断条件，改变后续执行的走向

## 任务节点

任务节点，指任务中的一个节点，是调度中心的基本执行单元，它是由 `bpmn2.0` 的基本元素以及本项目的一些扩展定制的元素实现的。

当前，我们支持以下任务节点类型

- 服务任务节点
  - Http 任务
    - 同步任务
    - 异步任务
  - Sql 任务
  - Ftp 任务
  - 邮件任务
- 脚本任务节点
  可以直接执行脚本内容或文件
  - `Shell`
    - `Bash`
      Linux 上的 shell 脚本
    - `Cmd`
      Windows 上的命令行脚本
  - `Groovy`
  - `Python`/`Perl`/`Ruby`等

### Http 任务

#### spring(boot/mvc)框架 <Badge text="sdk1.0.0"/>

使用此类框架的任务，应使用调度中心提供的 sdk

- spring boot

[Spring Boot 项目对接示例](https://gitee.com/attemper/attemper-samples/tree/master/attemper-samples-spring-boot)
::: tip 框架依赖
JDK1.8 SpringBoot&gt;=1.3.x
:::

```Markup {7}
<properties>
    <sdk.version>1.0.0</sdk.version>
</properties>

<dependency>
    <groupId>com.github.attemper</groupId>
    <artifactId>attemper-java-sdk-micro-executor</artifactId>
    <version>${sdk.version}</version>
</dependency>
```

引入自动配置类:[参考启动类配置](https://gitee.com/attemper/attemper-samples/blob/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/SampleApplication.java)

```Java
import com.github.attemper.java.sdk.micro.executor.conf.ExecutorAutoConfiguration;
@Import({
        ExecutorAutoConfiguration.class
})
```

- spring mvc

[Spring MVC 项目对接示例](https://gitee.com/attemper/attemper-samples/tree/master/attemper-samples-spring)
::: tip 框架依赖
JDK&gt;=1.6 Spring&gt;=3.x
:::

```Markup {7}
<properties>
    <sdk.version>1.0.0</sdk.version>
</properties>

<dependency>
    <groupId>com.github.attemper</groupId>
    <artifactId>attemper-java-sdk-rest-executor</artifactId>
    <version>${sdk.version}</version>
</dependency>
```

引入自动配置类:[参考配置类](https://gitee.com/attemper/attemper-samples/blob/master/attemper-samples-spring/src/main/java/com/github/attemper/samples/spring/conf/SampleConfiguration.java)

```Java
import com.github.attemper.java.sdk.rest.conf.RestConfiguration;
import com.github.attemper.java.sdk.rest.executor.conf.RestExecutorConfiguration;
@Import({
        RestConfiguration.class,
        RestExecutorConfiguration.class
})

@Bean
public ExecutorRestClient executorRestClient() {
    return new ExecutorRestClient();
}
```

spring boot/mvc 项目开发任务是通用的，原理是执行器通过调用 sdk 暴露的路由接口，以反射的方式调用 Bean 中的方法  
::: tip 调用机制
同步调用:调度中心与被调用系统保持双向连接，直到任务执行结束或超时  
异步调用:调度中心在调用后，即进行锁等待，被调用系统需在任务执行结束或超时后，通知调度中心
:::

sdk 中为接入的系统提供了四个任务模板接口  
所在包：`com.github.attemper.java.sdk.rest.executor.template`

| 接口名                      | 参数 | 返回值 |
| :-------------------------- | ---- | ------ |
| Executing                   | 无   | 无     |
| ExecutingWithParam          | 有   | 无     |
| ExecutingWithResult         | 无   | 有     |
| ExecutingWithParamAndResult | 有   | 有     |

而如果需要在一个 Bean 中调用多个方法，则不需要使用这些接口，直接声明 public 方法即可

#### 其他 Http 任务(非 java 语言的 spring 框架的 web 项目)

支持以配置 http 的 url 的方式接入

- 请求类型
  - POST
  - GET
  - PUT
  - DELETE

[URI 接入例子](https://gitee.com/attemper/attemper-samples/blob/master/attemper-samples-task/src/main/java/com/github/attemper/samples/task/demo003/UriTaskController.java)

### Sql 任务

执行器内置 Sql 任务，配置相应的数据源后，可在运行时执行 Sql 语句，目前支持

- select
  查询的结果集为
  - 对象
    字符串、整数等单行单列
  - Map
    单行多列
  - List
    多行多列
- insert
  执行插入语句
- update
  执行更新语句
- delete
  执行删除语句

[Sql 参数](/feature/dispatch/arg.md#sql-语句-sql)

### Ftp 任务

执行器内置 FTP 任务，主要有一下功能

- 上传
  将本地文件上传至 FTP 服务器
- 下载
  将 FTP 服务器上的文件下载到本地磁盘

### 邮件任务

执行器内置邮件任务，抽取发送邮件的功能，有以下配置项

> 发送方:发送方的邮箱账号，为空时取系统级配置`spring.mail.username`的值  
> 接收方:接收方的邮箱账号，多个以,隔开  
> 邮件主题:邮件的标题  
> 邮件内容:邮件的正文内容，支持`Html`和模板语言`FreeMarker`

::: warning 注意
使用时请接收方注意邮件是否被视作垃圾邮件而存入垃圾箱中
:::

### Shell-Bash

支持执行 Linux 的 Bash 脚本

### Shell-Cmd

支持执行 Windows 的 Cmd 脚本

### Groovy

支持执行 Groovy 脚本

### Python/Perl/Ruby 等

通过指定开发语言，支持执行其他脚本语言，如 Python/Perl/Ruby 等
::: warning 注意
若执行器在非容器环境启动，则应当在系统中安装相应的脚本执行环境  
若执行器以镜像方式启动，则必须自制包含 JRE8+和相应脚本执行环境的镜像
:::

## 触发器

目前本项目支持 4 种触发器

- Cron 触发器
  - Quartz 框架原生支持，使用广泛
  - 配置 Cron 表达式，比如`0 0 12 * * ?` `0 0/5 * * * ?`
  - 调度中心提供在线配置工具，辅助配置 Cron 表达式
- 日程偏移触发器
  - 本项目扩展，主要用来支持与日历相关的时间节点调度，比如每周/月/年的第一个交易日等
  - 应用场景：周报、月报、半年报、年报的发送；定点推送等
- 每日周期触发器
  - Quartz 框架原生支持，主要是解决 Cron 表达式的局限
  - 支持在每一天设置开始和结束时刻，如上午 9:30 到下午 15:00
  - 支持跨越时间单位，如每 90 分钟
- 日历周期触发器

  - Quartz 框架原生支持，使用较少
  - 支持比如从设置的开始时间起，每隔一天/周/月/年执行一次

## 项目

对于 HTTP 任务来说，因为需要调用接入的系统，所以要绑定被调系统的配置(地址)，调度中心支持为任务绑定 1 个项目。

参见[项目管理](/feature/application/project.md)

## 参数

在任务中使用参数，有以下一些场景:

- 参数注入

  - 运行时执行器将参数传递给接入的系统(HTTP 任务)
  - 运行时将参数传递给脚本任务(比如 Shell、Python 任务)

- 参数传递
  - 运行时替换任务的配置(比如按日期生成的文件目录)
  - 前置任务执行结果作为参数，传递给后置任务

参见[参数管理](/feature/dispatch/arg.md)

## 条件

::: warning 注意
在某些场景，每日只执行一次的任务配置成轮询是不得已的，因为任务上下游或者自身的依赖在起初并不满足。
:::
本项目将这种需求抽取为依赖**条件**，目前抽取了三种依赖条件:

- SQL
  在所配数据源中，执行 SQL 语句，能够查到数据则视为满足条件
- FTP 文件
  在所配服务器中检测文件是否存在(生成)，存在则视为满足条件
- 本地文件
  在执行该任务的执行器本地(若执行器由 Docker 启动，可能需要挂载)检测文件是否存在，存在则视为满足条件
