(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{230:function(t,e,r){"use strict";r.r(e);var _=r(0),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("本项目支持 4 种比较主流的数据库:"),r("code",[t._v("MySQL")]),t._v("、"),r("code",[t._v("Oracle")]),t._v("、"),r("code",[t._v("Sql Server")]),t._v("、"),r("code",[t._v("PostgreSQL")]),t._v("，在项目中就已集成相关 JDBC 驱动包，所支持的数据库版本请参考"),r("router-link",{attrs:{to:"/guide/essentials/deploy.html"}},[t._v("部署文档")]),t._v("\n调度中心对数据库厂商的支持限制，主要有以下几方面")],1),t._v(" "),r("ul",[r("li",[r("p",[t._v("所用框架的限制")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("Camunda")]),t._v(":除以上 4 种外还支持"),r("code",[t._v("DB2")]),t._v("、"),r("code",[t._v("H2")]),t._v("、"),r("code",[t._v("Mariadb")]),t._v(" "),r("a",{attrs:{href:"https://github.com/camunda/camunda-bpm-platform/tree/7.12.0/engine/src/main/resources/org/camunda/bpm/engine/db/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("code",[t._v("Quartz")]),t._v(":除以上 4 种外还支持"),r("code",[t._v("DB2")]),t._v("、"),r("code",[t._v("H2")]),t._v("等，"),r("code",[t._v("Quartz")]),t._v("使用原生的 JDBC 操作数据库，未使用框架，故支持的数据库更多 "),r("a",{attrs:{href:"https://github.com/quartz-scheduler/quartz/tree/v2.3.2/quartz-core/src/main/resources/org/quartz/impl/jdbcjobstore",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),r("OutboundLink")],1)])])]),t._v(" "),t._m(2)]),t._v(" "),r("p",[t._v("不过也由于使用 Mybatis 框架，保持了比较好的复用性和扩展性，在添加相关的数据库驱动包后，可以支持其他数据库")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("新增数据源时，请指定以下配置")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("在参数管理中，预置类型"),r("router-link",{attrs:{to:"/feature/dispatch/arg.html#Sql语句-sql"}},[t._v("Sql")]),t._v("，通过指定数据源，可在该数据源中执行 Sql 语句，结果集作为参数值")],1),t._v(" "),t._m(7),t._v(" "),r("p",[r("router-link",{attrs:{to:"/feature/dispatch/job.html#sql-任务"}},[t._v("Sql 任务")]),t._v("使用的数据源是参数"),r("code",[t._v("dbName")]),t._v("的值，如果需要指定数据源，则给任务绑定名称为"),r("code",[t._v("dbName")]),t._v("的参数即可")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据源"}},[this._v("#")]),this._v(" 数据源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据库支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库支持"}},[this._v("#")]),this._v(" 数据库支持")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("p",[t._v("特殊配置")]),t._v(" "),r("ul",[r("li",[t._v("比如 Spring Boot 框架的配置项"),r("code",[t._v("connection-test-query")]),t._v("，用来校验数据库连接，"),r("code",[t._v("Oracle")]),t._v("数据库就不支持"),r("code",[t._v("select 1")]),t._v("，需使用"),r("code",[t._v("select 1 from dual")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("数据源名称")])]),this._v(" "),e("li",[e("p",[this._v("JDBC 连接串")])]),this._v(" "),e("li",[e("p",[this._v("用户名")])]),this._v(" "),e("li",[e("p",[this._v("密码")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sql-任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-任务"}},[this._v("#")]),this._v(" Sql 任务")])}],!1,null,null,null);e.default=s.exports}}]);