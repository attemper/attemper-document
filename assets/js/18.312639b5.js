(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{238:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("本项目使用 2 个数据源(当然你可以在启动时覆盖配置指向同一个库) "),r("a",{attrs:{href:"https://github.com/attemper/attemper/tree/master/docs/database",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库脚本链接"),r("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("SQL 执行步骤:"),r("br"),t._v("\n1.创建相应的数据库，根据不同的数据库类型，选择上述地址的建表语句执行"),r("br"),t._v("\n2.在"),r("code",[t._v("attemper")]),t._v("库中执行初始化数据的脚本"),r("a",{attrs:{href:"https://github.com/attemper/attemper/tree/master/docs/database/attemper_init_data.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("attemper_init_data.sql"),r("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("项目源码地址")]),t._v(" "),r("p",[t._v("GitHub "),r("a",{attrs:{href:"https://github.com/attemper/attemper",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/attemper/attemper"),r("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("Docker Hub 镜像仓库")]),t._v(" "),r("p",[t._v("Docker "),r("a",{attrs:{href:"https://hub.docker.com/u/attemper",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/u/attemper"),r("OutboundLink")],1)])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("各 Docker 仓库")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/attemper/attemper-admin/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("调度中心-前端"),r("OutboundLink")],1),r("br"),t._v(" "),r("strong",[t._v("注")]),t._v(":前端项目由于需要连后台，镜像一般需要自己定制")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/attemper/attemper-web/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("调度中心-后端"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/attemper/attemper-executor/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("执行器"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/attemper/attemper-scheduler/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("调度器"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("启动命令参考")]),t._v(" "),t._m(10)])]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("1.启动正常")]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("2.使用默认的超管账号登录")]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"部署启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据库脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库脚本")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),r("p",[t._v("当前，本项目支持以下数据库")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("数据库")]),t._v(" "),r("th",[t._v("项目使用")]),t._v(" "),r("th",[t._v("版本支持")]),t._v(" "),r("th",[t._v("驱动包")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Mysql")]),t._v(" "),r("td",[t._v("Mysql 5.7")]),t._v(" "),r("td",[t._v("5.5+")]),t._v(" "),r("td",[t._v("mysql-connector-java@5.1.48")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Oracle")]),t._v(" "),r("td",[t._v("Oracle 11.2")]),t._v(" "),r("td",[t._v("11g/12c...")]),t._v(" "),r("td",[t._v("ojdbc6@11.2.0.3")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("SQLServer")]),t._v(" "),r("td",[t._v("SQL Server 2019")]),t._v(" "),r("td",[t._v("2008/2012/2014/2016/2017/2019...")]),t._v(" "),r("td",[t._v("mssql-jdbc@6.2.2.jre8")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("PostgreSQL")]),t._v(" "),r("td",[t._v("PostgreSQL 12")]),t._v(" "),r("td",[t._v("8.2+")]),t._v(" "),r("td",[t._v("postgresql&42.2.8")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("库名")]),t._v(" "),r("th",[t._v("脚本地址")]),t._v(" "),r("th",[t._v("用途")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("attemper")]),t._v(" "),r("td",[t._v("{mysql/oracle/sqlserver/postgresql}/attemper")]),t._v(" "),r("td",[t._v("调度配置(camunda/quartz)、执行记录等表")])]),t._v(" "),r("tr",[r("td",[t._v("log")]),t._v(" "),r("td",[t._v("{mysql/oracle/sqlserver/postgresql}/log")]),t._v(" "),r("td",[t._v("操作日志、归档日志等")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启动程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动程序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"本地启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("适用 Eclipse/Idea 等开发工具")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("下载项目源码，在完成编译后，启动项目\n"),r("ul",[r("li",[t._v("调度中心-前端:"),r("code",[t._v("attemper-admin")]),r("br"),t._v("\n使用"),r("code",[t._v("npm")]),t._v("命令下载依赖后启动，参考前端的 README")]),t._v(" "),r("li",[t._v("调度中心-后端:"),r("code",[t._v("attemper-web")]),r("br"),t._v("\n修改配置:"),r("code",[t._v("attemper-web/src/main/resources/application.yml")]),r("br"),t._v("\n启动类："),r("code",[t._v("com.github.attemper.web.WebApplication")])]),t._v(" "),r("li",[t._v("执行器:"),r("code",[t._v("attemper-executor")]),r("br"),t._v("\n修改配置:"),r("code",[t._v("attemper-executor/src/main/resources/application.yml")]),r("br"),t._v("\n启动类："),r("code",[t._v("com.github.attemper.executor.ExecutorApplication")])]),t._v(" "),r("li",[t._v("调度器:"),r("code",[t._v("attemper-scheduler")]),r("br"),t._v("\n修改配置:"),r("code",[t._v("attemper-scheduler/src/main/resources/application.yml")]),r("br"),t._v("\n启动类："),r("code",[t._v("com.github.attemper.scheduler.SchedulerApplication")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("请注意(可能需要)修改相关配置，包括但不限于:")]),t._v(" "),r("ul",[r("li",[t._v("前端调用后端的地址，在 attemper-admin/vue.config.js")]),t._v(" "),r("li",[t._v("数据库连接、账号、密码")]),t._v(" "),r("li",[t._v("注册中心的地址")]),t._v(" "),r("li",[t._v("告警邮箱信息(源码是以 xxx 占位的)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"docker-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 镜像")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("docker run --net "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" -e JAVA_OPTS"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Xms1024m -Xmx2048m --spring.datasource.hikari.first.jdbc-url=jdbc:mysql://xxx:3306/attemper?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false --spring.datasource.hikari.second.jdbc-url=jdbc:mysql://xxx:3306/log?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false"')]),t._v(" attemper/attemper-web或executor或scheduler:1.0.0\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("p",[this._v("内网启动时，可能会报邮箱(java mail)相关的报错，不影响正常启动，但影响邮件告警")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[this._v("账号")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("密码")])])]),this._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[this._v("attemper")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("admin@Attemper")])])])])}],!1,null,null,null);e.default=s.exports}}]);