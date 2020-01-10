---
pageClass: getting-started
---

# 系统简介

[![spring-boot](https://img.shields.io/badge/spring--boot-2.2.2.RELEASE-brightgreen.svg)](https://github.com/spring-projects/spring-boot/releases/tag/v2.1.5.RELEASE)
[![spring-cloud](https://img.shields.io/badge/spring--cloud-Greenwich.SR4-brightgreen.svg)](https://github.com/spring-projects/spring-cloud/wiki/Spring-Cloud-Greenwich-Release-Notes)
[![quartz](https://img.shields.io/badge/quartz-2.3.2-brightgreen.svg)](https://github.com/quartz-scheduler/quartz/releases/tag/quartz-2.3.1)
[![camunda](https://img.shields.io/badge/camunda-7.12.0-brightgreen.svg)](https://github.com/camunda/camunda-bpm-platform/releases/tag/7.11.0)
[![disruptor](https://img.shields.io/badge/disruptor-3.4.2-brightgreen.svg)](https://github.com/LMAX-Exchange/disruptor/releases/tag/3.4.2)
[![vue](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg)](https://github.com/vuejs/vue)
[![element-ui](https://img.shields.io/badge/element--ui-2.13.0-brightgreen.svg)](https://github.com/ElemeFE/element)

Attemper 是一个分布式任务调度应用，基于 Java 语言实现（前端是 Vue）。
本项目基于 quartz 实现分布式任务调度（定时、API）；引入 camunda 作为任务执行框架，支持工作流式任务编排、并发批量调度和参数传递。

## 功能特性

```bash
- 调度
  - 基于数据库锁(quartz 原生)实现分布式任务调度
  - 使用 disruptor 来加速任务分发和执行
  - 支持延迟调度(由业务系统运行时调用 API)
  - 可作为远程服务或者 Agent 来部署
  - 可手工触发任务
  - 可重试(支持从指定的错误节点开始)
  - 可终止任务执行
  - 扩展季度和半年作为 quartz 的周期单位(比如可以每季度(半年)第一个交易日执行)

- 任务
  - 启用/禁用
  - 任务复制/导入/导出
  - 任务流式编排（串行/并发/父子任务）
  - 支持 Http/Shell/Python/Groovy 等
  - Http 任务支持同步和异步
  - 脚本任务支持在线编写和本地文件路径
  - 任务支持超时设置
  - 任务可设置是否能够并行的开关
  - 版本管理（版本迭代、版本切换）
  - 支持手工触发任务(调试、补采)

- 触发器
  - Cron 表达式触发器（quartz）：支持 Linux 的 Crontab 的触发器
  - 每日周期触发器（quartz）：支持形如每个交易日 09:15 到 15:00 每 90s 执行一次
  - 日历周期触发器（quartz）：支持形如每月第 1 天开始，每隔 2 周执行一次
  - 日程偏移触发器（扩展）：支持形如每周第一个交易日 07:00 执行一次

- 参数
  - 支持 String,Boolean,Inetger,Double,Long,Date,Time,DateTime,List,Map,Sql,Gist,TradeDate 等类型
  - 任务及其节点可绑定参数
  - 参数可在任务间传递

- 日历
  - 支持证券交易日、自然日、工作日、法定节假日等
  - 可自定义并导入日历
  - 扩展季度和半年作为 quartz 的周期单位(比如可以每季度(半年)第一个交易日执行)

- 数据源
  - 支持 Mysql、Oracle、Sqlserver、Posgresql 数据库的数据源管理
  - 支持测试数据源的连接

- 监控
  - 支持实时、历史和全量监控
  - 支持终止执行中的任务实例
  - 支持重试失败的任务实例
  - 支持在线查看日志

- 告警
  - 告警方式支持邮件（可自己扩展）
  - 告警条件：执行报错

- 统计与分析
  - 支持任务执行实例的统计

- 多租户
  - 不同业务系统以租户分割权限(数据、菜单)

- 多服务
  - 一个租户下，多个分布式服务均可使用该租户
  - 支持以服务发现、IP 端口和域名的方式对接
```

## 服务模块

- 本项目自身模块结构

```bash
├── attemper                     # 根项目，管理根pom
│   ├── attempepr-admin          # 前端-调度中心
│   ├── attempepr-common         # POJO、工具类和异常信息定义
│   ├── attempepr-config         # 数据源、全局异常等配置
│   ├── attempepr-sys            # 系统管理模块(租户、角色等)
│   ├── attempepr-core           # 封装核心功能模块(调度、监控、告警等)
│   ├── attempepr-security       # 登录、token等处理
│   ├── attempepr-invoker        # 封装调用执行器的功能
│   ├── attempepr-web            # 后端-调度中心
│   ├── attempepr-scheduler      # 调度器
│   ├── attempepr-executor       # 执行器
```

### 调度中心

调度中心由前端和后端组成

- 前端`attemper-admin`  
  在线管理调度任务、触发器的配置和监控的查看

```bash
attemper-admin
├── build                      # 构建相关
├── nginx                      # 打包docker镜像时覆盖的nginx配置
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── constant               # 静态全局变量(数组)
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── permission.js          # 权限管理
│   └── settings.js            # 全局配置
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── babel.config.js            # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
```

- 后端`attemper-web`  
  后端服务除了管理功能外，还兼容调度器的所有功能，若此服务启用调度功能，可无需部署调度器

内部模块和外部依赖:

```bash
├── attemper-web
│   ├── camunda                                            # 任务执行框架(管理任务)
│   ├── eureka                                             # 注册中心客户端依赖
│   ├── attemper-invoker
│   ├──── quartz                                           # 调度框架
│   ├──── attemper-security
│   ├────── shiro                                          # 安全框架
│   ├────── attemper-core
│   ├──────── mail                                         # 邮件
│   ├──────── commons-exec                                 # java调用命令行的工具包
│   ├──────── oshi                                         # java读取主机信息、jvm指标的工具包
│   ├──────── attemper-sys
│   ├────────── jwt                                        # json web token工具包
│   ├────────── attemper-config
│   ├──────────── spring-boot                              # spring-boot-starter-web/aop/jdbc...
│   ├──────────── mysql/oracle/sql server/postgresql       # 4个数据源的驱动包
│   ├──────────── swaggger                                 # 在线API文档管理
│   ├──────────── attemper-common
│   └────────────── lombok                                 # 类代码优化工具(get/set等)
```

### 执行器

执行器(`attemper-executor`)是任务执行的载体，处理任务日志的收集、错误日志的告警等

内部模块和外部依赖:

```bash
├── attemper-executor
│   ├── camunda                                           # 任务执行框架(执行任务)
│   ├── eureka                                            # 注册中心客户端依赖
│   ├── disruptor                                         # 无锁并行计算框架，用作任务分发
│   ├── groovy                                            # java调用groovy的工具包
│   ├── jsr223-shell                                      # java调用shell(支持python等)脚本的工具包
│   ├── attemper-security
│   ├──── shiro                                           # 安全框架
│   ├──── attemper-core
│   ├────── mail                                          # 邮件
│   ├────── commons-exec                                  # java调用命令行的工具包
│   ├────── oshi                                          # java读取主机信息、jvm指标的工具包
│   ├────── attemper-sys
│   ├──────── jwt                                         # json web token工具包
│   ├──────── attemper-config
│   ├────────── spring-boot                               # spring-boot-starter-web/aop/jdbc...
│   ├────────── mysql/oracle/sql server/postgresql        # 4个数据源的驱动包
│   ├────────── swaggger                                  # 在线API文档管理
│   ├────────── attemper-common
│   └──────────── lombok                                  # 类代码优化工具(get/set等)
```

### 调度器

调度器(`attemper-scheduler`)是简化调度中心后端的服务，它只管对定时任务的调用，可以独立部署并低频启停

内部模块和外部依赖:

```bash
├── attemper-scheduler
│   ├── eureka                                             # 注册中心客户端
│   ├── attemper-invoker
│   ├──── quartz                                           # 调度框架
│   ├──── attemper-security
│   ├────── shiro                                          # 安全框架
│   ├────── attemper-core
│   ├──────── mail                                         # 邮件
│   ├──────── commons-exec                                 # java调用命令行的工具包
│   ├──────── oshi                                         # java读取主机信息、jvm指标的工具包
│   ├──────── attemper-sys
│   ├────────── jwt                                        # json web token工具包
│   ├────────── attemper-config
│   ├──────────── spring-boot                              # spring-boot-starter-web/aop/jdbc...
│   ├──────────── mysql/oracle/sql server/postgresql       # 4个数据源的驱动包
│   ├──────────── swaggger                                 # 在线API文档管理
│   ├──────────── attemper-common
│   └────────────── lombok                                 # 类代码优化工具(get/set等)
```
