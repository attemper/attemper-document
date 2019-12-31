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
  使用基于 jsr223 标准开发的各个脚本语言的环境
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

spring boot/mvc 项目开发任务是通用的，原理是调度中心通过调用自己的路由接口，以反射的方式调用 Bean 中的方法<br>
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

- select
  查询的数据作为对象(字符串、整数等单行单列的结果集)、Map(单行多列的结果集)、List(多行多列的结果集)
- insert

- update

- delete

### Ftp 任务

### 邮件任务

### Shell-Bash

### Shell-Cmd

### Groovy

### Python/Perl/Ruby 等

## 触发器

## 参数

## 条件
