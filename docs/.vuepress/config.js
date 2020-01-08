var nav = require('./nav.js')
var { UsageNav } = nav

var utils = require('./utils.js')
var { genNav, deepClone } = utils

module.exports = {
  title: 'Attemper',
  description: '--',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  port: 80,
  themeConfig: {
    repo: 'attemper/attemper',
    docsRepo: 'ldang264/attemper-document',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'attemper'
    },
    locales: {
      '/': {
        label: '中文',
        selectText: 'Language',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '模块',
            items: genNav(deepClone(UsageNav), 'ZH')
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '简介',
              collapsable: false,
              children: genGuideSidebar()
            }
          ],
          '/feature/': [
            {
              title: '调度管理',
              collapsable: false,
              children: genDispatchSidebar()
            },
            {
              title: '应用管理',
              collapsable: false,
              children: genApplicationSidebar()
            },
            {
              title: '监控管理',
              collapsable: false,
              children: genMonitorSidebar()
            },
            {
              title: '系统管理',
              collapsable: false,
              children: genSystemSidebar()
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '多租户、弹性伸缩、异步的分布式任务调度应用'
    },
    '/en/': {
      lang: 'en-US',
      description:
        'Multi-tenancy,elastic,asynchronous-distributed scheduling application'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    lineNumbers: true
  }
}

function genGuideSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/deploy.md',
    '/guide/essentials/use.md',
    '/guide/essentials/config.md',
    '/guide/essentials/demo.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genDispatchSidebar(type = '') {
  const mapArr = [
    '/feature/dispatch/job.md',
    '/feature/dispatch/delay-job.md',
    '/feature/dispatch/arg.md',
    '/feature/dispatch/datasource.md',
    '/feature/dispatch/calendar.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genApplicationSidebar(type = '') {
  const mapArr = [
    '/feature/application/project.md',
    '/feature/application/gist.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genMonitorSidebar(type = '') {
  const mapArr = ['/feature/monitor/monitor.md', '/feature/monitor/retry.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genSystemSidebar(type = '') {
  const mapArr = ['/feature/system/tenant.md']
  return mapArr.map(i => {
    return type + i
  })
}
