(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(t,e,s){t.exports=s.p+"assets/img/tenant-add.d6a8c6a4.png"},222:function(t,e,s){t.exports=s.p+"assets/img/role-tenant-allocate.ccf904dc.png"},241:function(t,e,s){"use strict";s.r(e);var _=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"接入指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接入指南"}},[this._v("#")]),this._v(" 接入指南")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"申请租户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#申请租户"}},[this._v("#")]),this._v(" 申请租户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("调度中心是一个支持多租户的分布式系统，这里的租户可以理解为一个业务系统或者一个微服务。"),e("br"),this._v("\n使用调度中心的系统，应先向调度中心管理员（超管）申请普通租户，需提供以下信息：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("系统简称\n建议字母、数字、下划线等")]),t._v(" "),s("li",[t._v("系统全称")]),t._v(" "),s("li",[t._v("告警方式配置\n在任务失败时，可通过此配置进行告警\n"),s("ul",[s("li",[t._v("告警邮箱号\n多个则以英文逗号,隔开")]),t._v(" "),s("li",[t._v("告警手机号\n例如 12345678901（可自行定制短信告警等），多个则以英文逗号,隔开")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在我司生产中，我开发了"),e("strong",[this._v("短信")]),this._v("和"),e("strong",[this._v("企业微信")]),this._v("告警，因只有邮件告警有通用解决方案，故默认只支持邮件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置租户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置租户"}},[this._v("#")]),this._v(" 配置租户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("超管登录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[this._v("账号")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("密码")])])]),this._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[this._v("attemper")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("admin@Attemper")])])])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("p",[t._v("配置租户"),_("br"),t._v("\n菜单:"),_("strong",[t._v("系统管理")]),t._v("->"),_("strong",[t._v("租户管理")]),t._v("，按钮:"),_("strong",[t._v("绿色加号")]),_("br"),t._v(" "),_("img",{attrs:{src:s(221),alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("分配角色"),_("br"),t._v("\n菜单:"),_("strong",[t._v("角色管理")]),t._v("，点击角色名称为"),_("code",[t._v("tenants")]),t._v("所在行的"),_("strong",[t._v("租户")]),t._v("按钮"),_("br"),t._v("\n将新增的租户分配给该角色\n"),_("img",{attrs:{src:s(222),alt:""}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"应用开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用开发"}},[this._v("#")]),this._v(" 应用开发")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Spring Boot/MVC 应用"),e("br"),this._v("\n使用调度中心提供的 SDK")]),this._v(" "),e("li",[this._v("其他 Web 应用(比如 J2EE/PHP 等)\n直接配置接口的 URL")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Python")]),this._v(" "),e("li",[this._v("Shell")]),this._v(" "),e("li",[this._v("...")])])}],r=s(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("参考下图配置租户，并为其分配角色")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("至此，完成普通租户的配置操作，该租户可登录系统验证")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("按定时任务的实现语言，分了以下几类接入系统:")]),t._v(" "),s("ul",[s("li",[t._v("Web 应用"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/feature/dispatch/job.html#http-任务"}},[t._v("参见 Http 任务")]),t._v(" "),t._m(10)],1),t._v(" "),s("li",[t._v("脚本应用"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/feature/dispatch/job.html#shell-bash"}},[t._v("参见脚本任务")]),s("br"),t._v("\n此类应用可直接在线编写脚本源码、代码片段或配置文件执行路径\n"),t._m(11)],1)]),t._v(" "),s("p",[t._v("本项目还提供了一系列带批处理逻辑的"),s("strong",[t._v("模板任务")]),t._v("，比如邮件发送任务、SQL 任务、FTP 文件上传下载任务等，详情请参考模块"),s("router-link",{attrs:{to:"/feature/dispatch/job.html#任务节点"}},[t._v("任务")])],1)])}),_,!1,null,null,null);e.default=i.exports}}]);