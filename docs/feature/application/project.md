# 项目管理

::: tip 场景 1
一个租户有多个微服务有批处理任务
:::

::: tip 场景 2
在开发或测试时，因为涉及多人协作，同一个微服务会启动多个不同名称的服务
:::

调度中心通过项目树的管理来支持此类需求

## 配置

::: warning 注意
只要有[Http 任务](/feature/dispatch/job.md#http-任务)的，必须配置项目，否则无法正常调用接入的系统
:::

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
本项目使用 Eureka 作为服务发现，如需使用其他注册中心，自行引入相关 jar 包，并修改调度中心、执行器、调度器与此相关的配置，需要修改的文件如下

**调度中心**:  
`attemper-web\pom.xml`  
`attemper-web\src\main\resources\application.yml`  
**执行器**:  
`attemper-executor\pom.xml`  
`attemper-executor\src\main\resources\application.yml`  
**调度器**:  
`attemper-scheduler\pom.xml`  
`attemper-scheduler\src\main\resources\application.yml`
:::

## 绑定执行器

::: tip 场景 1
假设一个**执行器**集群有 5 台机器，另外 2 台分配(因为依赖主机环境)给运维跑脚本(如 Python)，微服务则可跑在 5 台机器。
此时必须要求运维任务必须在指定的机器上跑，则需要绑定**执行器**
:::
::: tip 场景 2
可能存在手工指定执行器进行负载控制的需求
:::

在打开**绑定执行器**的开关，选择需要绑定的执行器(支持多选)。在下次执行时，任务只会在选中的执行器内执行
