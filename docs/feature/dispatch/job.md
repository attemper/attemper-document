# 任务

## 任务

任务是调度中心执行的入口，任务由 `bpmn-js` 通过拖拽的方式对任务节点进行设计，对任务形成流式编排。

通过任务编排，可以实现以下一些典型的需求

- 串行<br>
  节点按线条指向先后执行

- 并行<br>
  一批节点可以并发执行后汇聚

- 分支判断<br>
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
    - `Bash`<br>
      Linux 上的 shell 脚本
    - `Cmd`<br>
      Windows 上的命令行脚本
  - `Groovy`
  - `Python`/`Perl`/`Ruby`等

### Http 任务

#### spring(boot/mvc)框架 <Badge text="sdk1.0.0"/>

使用此类框架的任务，应使用调度中心提供的 sdk

_引入依赖_<br>
[参考 pom.xml 配置](https://gitee.com/attemper/attemper-samples/blob/master/attemper-samples-task/pom.xml)

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

- spring boot

[Spring Boot 项目对接示例](https://gitee.com/attemper/attemper-samples/tree/master/attemper-samples-spring-boot)
::: tip 框架依赖
JDK:1.8
SpringBoot:&gt;=1.3.x
:::

_注入自动配置类_<br>
[参考启动类配置](https://gitee.com/attemper/attemper-samples/blob/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/SampleApplication.java)
在启动类上加上如下配置

```Java
import com.github.attemper.java.sdk.micro.executor.conf.ExecutorAutoConfiguration;
@Import({
        ExecutorAutoConfiguration.class
})
```

- spring mvc

[Spring MVC 项目对接示例](https://gitee.com/attemper/attemper-samples/tree/master/attemper-samples-spring)
::: tip 框架依赖
JDK:&gt;=1.6
Spring:&gt;=3.x
:::

_在配置类中引入自动配置类_<br>
[参考配置类](https://gitee.com/attemper/attemper-samples/blob/master/attemper-samples-spring/src/main/java/com/github/attemper/samples/spring/conf/SampleConfiguration.java)

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

spring boot/mvc 项目开发任务是通用的，原理是执行器通过调用 sdk 暴露的路由接口，以反射的方式调用 Bean 中的方法<br>
同步调用<br>
::: tip 调用机制
调度中心与被调用系统保持双向连接，直到任务执行结束或超时
:::

```Java
// /api/router/sync
com.github.attemper.java.sdk.rest.executor.controller.SyncRouterController
com.github.attemper.java.sdk.rest.executor.service.RouterService
```

异步调用<br>
::: tip 调用机制
调度中心在调用后，即进行锁等待，被调用系统需在任务执行结束或超时后，通知调度中心
:::

```Java
// /api/router/async
com.github.attemper.java.sdk.rest.executor.controller.AsyncRouterController
com.github.attemper.java.sdk.rest.executor.service.RouterService
```

sdk 中为接入的系统提供了四个任务模板接口<br>
所在包：`com.github.attemper.java.sdk.rest.executor.template`

| 接口名                      | 参数 | 返回值 |
| :-------------------------- | ---- | ------ |
| Executing                   | 无   | 无     |
| ExecutingWithParam          | 有   | 无     |
| ExecutingWithResult         | 无   | 有     |
| ExecutingWithParamAndResult | 有   | 有     |

而如果需要在一个 Bean 中调用多个方法，则不需要使用这些接口，直接声明 public 方法即可<br>

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

- select <br>
  查询的结果集为
  - 对象 <br>
    字符串、整数等单行单列
  - Map <br>
    单行多列
  - List <br>
    多行多列
- insert <br>
  执行插入语句
- update <br>
  执行更新语句
- delete <br>
  执行删除语句

### Ftp 任务

执行器内置 Ftp 任务，主要有一下功能

- 上传 <br>
  将本地文件上传至 FTP 服务器
- 下载 <br>
  将 FTP 服务器上的文件下载到本地磁盘

### 邮件任务

执行器内置邮件任务，抽取发送邮件的功能，有以下配置项<br>

- 发送方 <br>
  发送方的邮箱账号，为空时取系统级配置`spring.mail.username`的值
- 接收方 <br>
  接收方的邮箱账号，多个以,隔开
- 邮件主题 <br>
  邮件的标题
- 邮件内容 <br>
  邮件的正文内容，支持`Html`和模板语言`FreeMarker`

::: warning 请注意
使用时请接收方注意邮件是否被视作垃圾邮件而存入垃圾箱中
:::

### Shell-Bash

支持执行 Linux 的 Bash 脚本 <br>

### Shell-Cmd

支持执行 Windows 的 Cmd 脚本 <br>

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

## 参数

## 条件
