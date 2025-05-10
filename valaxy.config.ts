import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { addonMeting } from 'valaxy-addon-meting'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonWaline } from 'valaxy-addon-waline'


// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-bilibili-fill',
  'i-ri-open-source-line',
  'i-ri-booklet-line',
  'i-simple-icons-thealgorithms',
  'i-ri-folder-image-line',
  'i-ri-briefcase-line',
  'i-ri-github-line',
  'i-carbon-thumbs-up',
  'i-carbon-warning-alt',
  'i-carbon-warning',
  'i-carbon-information',
  'i-carbon-chevron-down-outline',
  'i-simple-icons-leetcode',
  'i-simple-icons-codeforces',
  'i-ri-steam-line',
  'i-ri-mail-line',
  'i-ri-train-line',
]

export default defineValaxyConfig<UserThemeConfig>({

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '人上人中人下人',
    },
    pages: [
      {
        name: '相册集',
        url: '/albums',
        icon: 'i-ri-folder-image-line',
        color: '#98dfe8',
      },
      {
        name: '追番列表',
        url: '/bangumi',
        icon: 'i-ri-bilibili-fill',
        color: '#ff8e8e',
      },
      {
        name: '资源列表',
        url: '/sources',
        icon: 'i-ri-open-source-line',
        color: '#f5cd6c',
      },
      {
        name: '生活记录',
        url: '/records',
        icon: 'i-ri-booklet-line',
        color: '#5ea8c2',
      },
      {
        name: '求职记录',
        url: '/jobs',
        icon: 'i-ri-briefcase-line',
        color: '#5e6fc2',
      },
      {
        name: '编程学习',
        url: '/program',
        icon: 'i-simple-icons-thealgorithms',
        color: '#5ec2a8',
      }
    ],
    footer: {
      since: 2024,
      icon: {
        enable: true,
        name: 'i-ri-github-line',
        animated: true,
        color: 'var(--va-c-primary)',
        url: 'https://github.com/helltractor',
        title: 'GitHub',
      },
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
    fireworks: {
      enable: true,
      colors: ['#f5cd6c', '#f83434', '#00ff99'],
    },
  },

  markdown: {
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'tip',
        langs: {
          'zh-CN': '提示',
        },
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: 'warning',
        langs: {
          'zh-CN': '注意',
        },
      },
      danger: {
        icon: 'i-carbon-warning',
        text: 'danger',
        langs: {
          'zh-CN': '警告',
        },
      },
      info: {
        icon: 'i-carbon-information',
        text: 'info',
        langs: {
          'zh-CN': '信息',
        },
      },
      details: {
        icon: 'i-carbon-chevron-down-outline',
        text: 'details',
        langs: {
          'zh-CN': '详情',
        },
      },
    },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
    ],
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  unocss: { safelist },

  // 插件配置
  addons: [
    // 设置 valaxy-addon-algolia 配置项，实现搜索功能
    addonAlgolia({
      appId: '4ZOLUZA8YK',
      apiKey: '03d1d46b4781384fe121f684cda3c6fd',
      indexName: 'helltractor',
    }),
    // 设置 valaxy-addon-bangumi 配置项，实现番剧列表功能
    addonBangumi({
      // 后端 api 地址，参考 https://github.com/yixiaojiu/bilibili-bangumi-component/
      api: 'https://helltractor-bangumi.web.val.run',
      // api: 'https://cartoon.helltractor.top',
      bilibiliUid: '480575647',
      bgmUid: '890723',
    }),
    // 设置 valaxy-addon-lightgallery 配置项，实现图片画廊功能
    addonLightGallery(),
    // 设置 valaxy-addon-meting 配置项，实现全局音乐播放功能
    addonMeting({
      global: true,
      // 参考 https://github.com/metowolf/MetingJS
      props: {
        // id: '2049540645', // 不怕
        // id: '108428',
        id: '1477727243',
        server: 'netease',
        type: 'song',
      },
    }),
    // 设置 valaxy-addon-vercount 配置项，实现访问统计功能
    addonVercount({
      api: 'cn',
    }),
    // 设置 valaxy-addon-waline 配置项，实现评论功能
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline-server-five-swart.vercel.app/',
      pageview: true,
      comment: true,
    }),
  ],

  // 评论功能
  siteConfig: {
    comment: {
      enable: true
    },
  },
})
