import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  mode: 'auto',
  url: 'https://blog.helltractor.top',
  lang: 'zh-CN',

  title: 'helltractor blog',
  timezone: 'Asia/Shanghai',
  subtitle: '夏日可畏，冬日可爱',
  description: '',

  lastUpdated: true,
  favicon: 'https://blog.helltractor.top/favicon.svg',

  author: {
    name: 'helltractor',
    email: 'mail@helltractor.top',
    avatar: '/avatar.png',
    status: {
      emoji: '😅',
      message: '屮(゜Д゜)屮',
    }
  },

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/helltractor',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode-cn.com/u/helltractor/',
      icon: 'i-simple-icons-leetcode',
      color: '#FFA116',
    },
    {
      name: 'Codeforces',
      link: 'https://codeforces.com/profile/helltractor',
      icon: 'i-simple-icons-codeforces',
      color: '#b73535',
    },
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/id/helltractor/',
      icon: 'i-ri-steam-line',
      color: '#06182d',
    },
    {
      name: 'E-Mail',
      link: 'mailto:mail@helltractor.top',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  // 警告
  frontmatter: {
    time_warning: true,
  },

  // 搜索
  search: {
    enable: true,
    type: 'algolia',
  },

  // 加密
  encrypt: {
    enable: true,
  },

  // 阅读统计
  statistics: {
    enable: true,
    readTime: {
      // 阅读速度（字/分钟）
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  // 设置代码块高度限制
  codeHeightLimit: 300,

  // 赞助
  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  // 重定向
  redirects: {
    useVueRouter: true,
    rules: [
      {
        from: '/foo',
        to: '/about',
      },
    ],
  },

  // 图片预览
  // mediumZoom: {
  //   enable: true,
  // },
})
