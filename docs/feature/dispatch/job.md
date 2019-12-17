# 任务

## 任务

任务是调度中心执行的入口，任务由 `bpmn-js` 通过拖拽的方式对任务节点进行设计，对任务形成流式编排。

通过任务，可以实现以下一些典型的需求

- 串行<br>
  节点按线条指向先后执行

- 并行<br>
  一批节点可以同时执行后汇聚

- 分支判断<br>
  根据参数判断条件，改变后续调用的节点

## 任务节点

任务节点，指任务中的一个节点，是调度中心的基本执行单元，它是由 `bpmn2.0` 的基本元素以及本项目的一些扩展定制的元素实现的。

当前，我们支持以下任务节点类型

- 服务任务节点
  - Http 任务
    - 同步任务
    - 异步任务
  - 通知任务
- 脚本任务节点
  使用基于 jsr223 标准开发的各个脚本语言的环境
  - `Shell`
    - `Bash`<br>
      Linux 上的 shell 脚本
    - `Cmd`<br>
      Windows 上的命令行脚本
  - `Python`
  - `Groovy`
  - `Perl`

### Http任务
#### spring(boot/mvc)框架 <Badge text="sdk0.9.5"/>
使用此类框架的任务，应使用调度中心提供的sdk<br>
- spring boot

[Spring Boot项目对接示例](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring-boot)
::: tip 框架依赖
JDK:1.8
SpringBoot:&gt;=1.3.x
:::
*引入依赖*<br>
[查看pom.xml配置](http://196.123.135.6:8001/attemper/attemper-samples/blob/master/attemper-samples-spring-boot/pom.xml)
``` Markup {7}
<properties>
    <sdk.version>0.9.5</sdk.version>
</properties>

<dependency>
    <groupId>com.github.attemper</groupId>
    <artifactId>attemper-java-sdk-micro-executor</artifactId>
    <version>${sdk.version}</version>
</dependency>
```

*注入自动配置类*<br> 
[查看启动类配置](http://196.123.135.6:8001/attemper/attemper-samples/blob/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/SampleApplication.java)
在启动类上加上如下配置

``` Java
import com.github.attemper.java.sdk.micro.executor.conf.ExecutorAutoConfiguration;
@Import({
        ExecutorAutoConfiguration.class
})
```

- spring mvc

[Spring MVC项目对接示例](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring)
::: tip 框架依赖
JDK:&gt;=1.6
Spring:&gt;=3.x
:::
*引入依赖*<br>
[查看pom.mxl配置](http://196.123.135.6:8001/attemper/attemper-samples/blob/master/attemper-samples-spring/pom.xml)
``` Markup {7} 
<properties>
    <sdk.version>0.9.5</sdk.version>
</properties>

<dependency>
    <groupId>com.github.attemper</groupId>
    <artifactId>attemper-java-sdk-rest-executor</artifactId>
    <version>${sdk.version}</version>
</dependency>
```
*在配置类中引入自动配置类*<br>
[查看配置类]([查看xml配置](http://196.123.135.6:8001/attemper/attemper-samples/blob/master/attemper-samples-spring/pom.xml))
``` Java 
import com.github.attemper.java.sdk.rest.conf.RestConfiguration;
import com.github.attemper.java.sdk.rest.executor.conf.RestExecutorConfiguration;
@Import({
        RestConfiguration.class,
        RestExecutorConfiguration.class
})
```

spring boot/mvc项目开发任务是通用的，原理是调度中心通过调用自己的路由接口，以反射的方式调用Bean中的方法<br>
同步调用<br>
::: tip 调用机制
调度中心与被调用系统保持双向连接，直到任务执行结束或超时
:::
``` Java
// /api/router/sync
com.github.attemper.java.sdk.rest.executor.controller.SyncRouterController
com.github.attemper.java.sdk.rest.executor.service.RouterService
```
异步调用<br>
::: tip 调用机制
调度中心在调用后，即进行锁等待，被调用系统需在任务执行结束或超时后，通知调度中心
:::
``` Java
// /api/router/async
com.github.attemper.java.sdk.rest.executor.controller.AsyncRouterController
com.github.attemper.java.sdk.rest.executor.service.RouterService
```

sdk中为接入的系统提供了四个任务模板接口<br>
所在包：`com.github.attemper.java.sdk.rest.executor.template`

|接口名                     |  参数 |  返回值  |使用例子                                      |
|:--------------------------|-------|----------|----------------------------------------------|
|Executing                  |无     |无        |[ExecutingDemo](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/demo06/ExecutingDemo.java)|
|ExecutingWithParam         |有     |无        |[ExecutingWithParamDemo](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/demo06/ExecutingWithParamDemo.java)|
|ExecutingWithResult        |无     |有        |[ExecutingWithResultDemo](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/demo06/ExecutingWithResultDemo.java)|
|ExecutingWithParamAndResult|有     |有        |[ExecutingWithParamAndResultDemo](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/demo06/ExecutingWithParamAndResultDemo.java)|

而如果需要在一个Bean中调用多个方法，则可不使用这四个接口之一<br>
请参考[一个Bean中多个方法需被调度的例子](http://196.123.135.6:8001/attemper/attemper-samples/blob/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/demo05/NoParamDemo.java)

在完成被调用系统的配置和一个接入的Bean的编写后，需要在调度中心配置它，让它能够成功被调起<br>
以[ExecutingWithParamAndResultDemo](http://196.123.135.6:8001/attemper/attemper-samples/tree/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/demo06/ExecutingWithParamAndResultDemo.java)为例
``` Java
/**
 * bean=executingWithParamAndResultDemo
 */
@Service
public class ExecutingWithParamAndResultDemo implements ExecutingWithParamAndResult<Void> {

    /**
     * method=execute
     */
    @Override
    public LogResult execute(TaskParam<Void> param) {
        System.out.println("executing with param and result");
        return new LogResult();
    }
}
```

#### 其他(非java语言web项目)

### 通知任务

### Shell-Bash

### Shell-Cmd

### Python

## 触发器

## 参数

## 条件