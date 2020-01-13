# 延迟任务

## 概述

- 延迟任务是本项目对*运行时*设置执行计划的支持，它的实现也完全依赖于`quartz`，而非消息队列之延迟队列。

- 配置与使用步骤 1.首先，必须新建一个任务，但不要为其配置触发器，触发器应当有业务操作通过调用接口触发  
  2.其次，在业务操作时，通过业务系统的一系列操作后，调用调度中心后台接口，给任务设置触发器

## 实现

### spring(boot/mvc)框架 <Badge text="sdk1.0.0"/>

使用此类框架的任务，应使用调度中心提供的 sdk

- spring boot

::: tip 框架依赖
JDK1.8 SpringBoot&gt;=1.3.x
:::

```Markup {7}
<properties>
    <sdk.version>1.0.0</sdk.version>
</properties>

<dependency>
    <groupId>com.github.attemper</groupId>
    <artifactId>attemper-java-sdk-micro-web</artifactId>
    <version>${sdk.version}</version>
</dependency>
```

引入自动配置类:[参考启动类配置](https://github.com/attemper/attemper-samples/blob/master/attemper-samples-spring-boot/src/main/java/com/github/attemper/samples/SampleApplication.java)

```Java
import com.github.attemper.java.sdk.micro.web.conf.WebAutoConfiguration;
@Import({
        WebAutoConfiguration.class
})
```

参考配置文件

```yaml
dispatch:
  user-name: sample # 此处为租户的账号
  password: 7ZXF+IWQUpHhG93taoynzM6izTDS8Rc1zm2JwaMeM9E= # 此处为租户的加密密码
  web:
    service-name: attemper-web # 调度中心后端服务的服务名
```

- spring mvc

::: tip 框架依赖
JDK&gt;=1.6 Spring&gt;=3.x
:::

```Markup {7}
<properties>
    <sdk.version>1.0.0</sdk.version>
</properties>

<dependency>
    <groupId>com.github.attemper</groupId>
    <artifactId>attemper-java-sdk-rest-web</artifactId>
    <version>${sdk.version}</version>
</dependency>
```

引入自动配置类:[参考配置类](https://github.com/attemper/attemper-samples/blob/master/attemper-samples-spring/src/main/java/com/github/attemper/samples/spring/conf/WebConfiguration.java)

### 其他 Web 项目

- 请直接调用 Http 接口，参考上文传参

## 开发

开发时请使用`DelayJobService`,参考注释使用
[延迟任务 Demo](https://github.com/attemper/attemper-samples/tree/master/attemper-samples-task/src/main/java/com/github/attemper/samples/task/demo300)
