::: warning 请注意
只要有[Http 任务](/feature/dispatch/job.md#http-任务)的，必须配置项目，否则无法正常调用接入的系统
:::

# 项目管理

::: tip 场景 1
一个租户拥有多个微服务，在不同的微服务中均有批处理任务
:::

::: tip 场景 2
在开发或测试时，因为涉及多人协作，一个租户内同一个服务会启动多个不同名称的服务
:::

调度中心通过项目树的管理来支持此类需求

## 配置

- contextPath

  - 如果是 Spring Boot 项目，则是`server.servlet.context-path`的值
  - 其他 Web 项目，则为端口后的相对路径

- 项目地址
  支持三种方式配置项目地址

|   配置方式    |           配置值           |
| :-----------: | :------------------------: |
|   服务发现    |     接入的系统的服务名     |
| IP 地址和端口 | <b>http(s):</b>//IP:端口号 |
|     域名      | <b>http(s):</b>//xxxx.xxx  |

### 服务发现

执行器会从自己注册的注册中心中，根据服务名取出被调系统的可用地址，进行调用

(包括但不限于)以下中间件可作为注册中心(只要能与本项目所使用的的 Spring Boot/Cloud 框架集成的，理论上都支持)

- [Eureka](https://spring.io/projects/spring-cloud-netflix)
- [Zookeeper](https://spring.io/projects/spring-cloud-zookeeper)
- [Nacos](https://spring.io/projects/spring-cloud-alibaba)
- [Consul](https://spring.io/projects/spring-cloud-consul)

::: tip 提示
本项目使用 Eureka 作为服务发现，如需使用其他注册中心，请自行引入相关 jar 包，并修改调度中心、执行器、调度器的`application.yml`文件的配置
:::

## 绑定执行器
