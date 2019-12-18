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

<!--
[![Build Status](https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master)](https://travis-ci.org/PanJiaChen/vue-element-admin)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg)](https://github.com/PanJiaChen/vue-element-admin/releases)
[![donate](https://img.shields.io/badge/%24-donate-ff69b4.svg)](https://panjiachen.gitee.io/vue-element-admin-site/zh/donate)
[![GitHub stars](https://img.shields.io/github/stars/PanJiaChen/vue-element-admin.svg?style=social&label=Stars)](https://github.com/PanJiaChen/vue-element-admin)
-->

Attemper 是一个分布式任务调度应用，基于 Java 语言实现（前端是 Vue）。
本项目基于 quartz 实现分布式任务调度（定时、API）；引入 camunda 作为任务执行框架，支持工作流式任务编排、并行批量调度，支持任务参数传递和数据质量统计分析。

## 功能

```
- 调度
  - 基于数据库锁(quartz原生)实现分布式任务调度
  - 使用disruptor来加速任务分发和执行
  - 支持延迟调度（由业务系统运行时调用API）
  - 可作为远程服务或者Agent来部署
  - 支持手工触发、重试和终止
    - 任务流的重试支持从指定的错误节点开始
  - 扩展季度和半年作为quartz的周期单位(比如可以每季度(半年)第一个交易日执行)

- 任务
  - 增删改查
  - 启用、禁用、逻辑删除
  - 任务复制、导入、导出
  - 任务流式编排（串并行、依赖关系）
  - 支持Http/Shell/Python/Groovy等(其他脚本语言可通过java.lang.Process调用)
  - Http任务支持同步和异步两种执行方式
  - 支持在线编写脚本和配置本地脚本扫描路径两种方式
  - 任务支持超时设置
  - 任务可设置是否能够并行的开关
  - 版本管理（版本迭代、版本切换）
  - 支持手工触发任务(调试、补采)

- 触发器
  - Cron表达式触发器（quartz）：支持Linux的Crontab的触发器
  - 每日周期触发器（quartz）：支持形如每个交易日09:15到15:00每90s执行一次
  - 日历周期触发器（quartz）：支持形如每月第1天开始，每隔2周执行一次
  - 日程偏移触发器（扩展）：支持形如每周第一个交易日07:00执行一次

- 参数管理
  - 支持String,Boolean,Inetger,Double,Long,Date,Time,DateTime,List,Map,Sql,TradeDate等格式的参数定义
  - 任务支持参数的传递
  - 支持任务参数和任务节点参数设置

- 日历管理
  - 支持证券交易日、自然日、工作日、法定节假日等
  - 可自定义并导入日历
  - 扩展季度和半年作为quartz的周期单位(比如可以每季度(半年)第一个交易日执行)

- 数据源管理
  - 支持Mysql、Oracle、Sqlserver、Posgresql数据库的数据源管理
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
  - 支持服务以域名、IP端口和服务发现的方式对接
```
