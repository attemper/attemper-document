(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("调度中心通过项目树的管理来支持此类需求")]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("只要有"),r("router-link",{attrs:{to:"/feature/dispatch/job.html#http-任务"}},[t._v("Http 任务")]),t._v("的，必须配置项目，否则无法正常调用接入的系统")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("执行器会从自己注册的注册中心中，根据服务名取出被调系统的可用地址，进行调用")]),t._v(" "),r("p",[t._v("(包括但不限于)以下中间件可作为注册中心(只要能与本项目所使用的的 Spring Boot/Cloud 框架集成的，理论上都支持)")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-netflix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eureka"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-zookeeper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zookeeper"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-alibaba",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-consul",target:"_blank",rel:"noopener noreferrer"}},[t._v("Consul"),r("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"项目管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("场景 1")]),this._v(" "),e("p",[this._v("一个租户有多个微服务有批处理任务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("场景 2")]),this._v(" "),e("p",[this._v("在开发或测试时，因为涉及多人协作，同一个微服务会启动多个不同名称的服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("contextPath")]),t._v(" "),r("ul",[r("li",[t._v("如果是 Spring Boot 项目，则是"),r("code",[t._v("server.servlet.context-path")]),t._v("的值")]),t._v(" "),r("li",[t._v("其他 Web 项目，则为端口后的相对路径")])])]),t._v(" "),r("li",[r("p",[t._v("项目地址\n支持三种方式配置项目地址")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("配置方式")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("配置值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("服务发现")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("接入的系统的服务名")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("IP 地址和端口")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("b",[t._v("http(s):")]),t._v("//IP:端口号")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("域名")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("b",[t._v("http(s):")]),t._v("//xxxx.xxx")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"服务发现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务发现","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务发现")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("本项目使用 Eureka 作为服务发现，如需使用其他注册中心，自行引入相关 jar 包，并修改调度中心、执行器、调度器与此相关的配置，需要修改的文件如下")]),t._v(" "),r("p",[r("strong",[t._v("调度中心")]),t._v(":"),r("br"),t._v(" "),r("code",[t._v("attemper-web\\pom.xml")]),r("br"),t._v(" "),r("code",[t._v("attemper-web\\src\\main\\resources\\application.yml")]),r("br"),t._v(" "),r("strong",[t._v("执行器")]),t._v(":"),r("br"),t._v(" "),r("code",[t._v("attemper-executor\\pom.xml")]),r("br"),t._v(" "),r("code",[t._v("attemper-executor\\src\\main\\resources\\application.yml")]),r("br"),t._v(" "),r("strong",[t._v("调度器")]),t._v(":"),r("br"),t._v(" "),r("code",[t._v("attemper-scheduler\\pom.xml")]),r("br"),t._v(" "),r("code",[t._v("attemper-scheduler\\src\\main\\resources\\application.yml")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"绑定执行器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绑定执行器","aria-hidden":"true"}},[this._v("#")]),this._v(" 绑定执行器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("场景 1")]),this._v(" "),e("p",[this._v("假设一个"),e("strong",[this._v("执行器")]),this._v("集群有 5 台机器，另外 2 台分配(因为依赖主机环境)给运维跑脚本(如 Python)，微服务则可跑在 5 台机器。\n此时必须要求运维任务必须在指定的机器上跑，则需要绑定"),e("strong",[this._v("执行器")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("场景 2")]),this._v(" "),e("p",[this._v("可能存在手工指定执行器进行负载控制的需求")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在打开"),e("strong",[this._v("绑定执行器")]),this._v("的开关，选择需要绑定的执行器(支持多选)。在下次执行时，任务只会在选中的执行器内执行")])}],!1,null,null,null);e.default=i.exports}}]);