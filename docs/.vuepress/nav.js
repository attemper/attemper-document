var EcosystemNav = [
  {
    textEN: 'Repositories',
    textZH: '项目',
    items: [
      {
        text: 'vue-element-admin',
        link: 'https://github.com/PanJiaChen/vue-element-admin'
      },
      {
        text: 'vue-admin-template',
        link: 'https://github.com/PanJiaChen/vue-admin-template'
      },
      {
        text: 'electron-vue-admin',
        link: 'https://github.com/PanJiaChen/electron-vue-admin'
      },
      {
        text: 'vue-typescript-admin-template',
        link: 'https://github.com/Armour/vue-typescript-admin-template'
      },
      {
        text: 'vue-countTo',
        link: 'https://github.com/PanJiaChen/vue-countTo'
      },
      {
        text: 'vue-split-pane',
        link: 'https://github.com/PanJiaChen/vue-split-pane'
      },
      {
        text: 'awesome-bookmarks',
        link: 'https://github.com/PanJiaChen/awesome-bookmarks',
        type: 'ZH'
      }
    ]
  },
  {
    textEN: 'Help',
    textZH: '帮助',
    items: [
      {
        textZH: '国内文档(解决Github.io访问慢的问题)',
        link: 'https://panjiachen.gitee.io/vue-element-admin-site/zh'
      },
      /*{
        text: 'Gitter',
        textZH: 'Gitter讨论组',
        link: 'https://gitter.im/vue-element-admin/discuss'
      },
      {
        textZH: '作者Blog',
        link: 'https://jianshiapp.com/circles/1209',
        type: 'ZH'
      },*/
      {
        textZH: '常见问题',
        link: '/guide/other/faq.md',
        type: 'ZH'
      },
      /*{
        textZH: 'QQ群',
        link: 'https://github.com/PanJiaChen/vue-element-admin/issues/602',
        type: 'ZH'
      },
      {
        textZH: '作者个人微博',
        link: 'https://weibo.com/u/3423485724',
        type: 'ZH'
      },*/
      {
        text: 'Changelog',
        textZH: '更新记录',
        link: 'https://github.com/PanJiaChen/vue-element-admin/releases'
      }
    ]
  }
]

var ComponentNav = [
  {
    text: 'Component',
    textZH: '调度管理',
    items: [
      {
        text: 'Job',
        textZH: '任务流',
        link: '/feature/component/job.md'
      },
      {
        text: 'Trigger',
        textZH: '触发器',
        link: '/feature/component/markdown-editor.md'
      },
      {
        text: 'Arg',
        textZH: '参数',
        link: '/feature/component/svg-icon.md'
      },
      {
        text: 'Calendar',
        textZH: '日历',
        link: '/feature/component/clipboard.md'
      },
      {
        text: 'DataSource',
        textZH: '数据源',
        link: '/feature/component/excel.md'
      }
    ]
  },
  {
    text: 'Monitor',
    textZH: '监控告警',
    items: [
      {
        text: 'Monitor',
        textZH: '监控',
        link: '/feature/component/pagination.md'
      },
      {
        text: 'Alarm',
        textZH: '告警',
        link: '/feature/script/new.md'
      }
    ]
  },
  {
    text: 'Analysis',
    textZH: '统计分析',
    items: [
      {
        text: 'Chart',
        textZH: '图表',
        link: '/feature/component/pagination.md'
      },
      {
        text: 'Report',
        textZH: '报表',
        link: '/feature/script/new.md'
      }
    ]
  },
  {
    text: 'System',
    textZH: '系统管理',
    items: [
      {
        text: 'Tenant',
        textZH: '多租户',
        link: '/feature/component/pagination.md'
      },
      {
        text: 'Service',
        textZH: '多服务',
        link: '/feature/script/new.md'
      }
    ]
  }
]

module.exports = {
  EcosystemNav,
  ComponentNav
}
