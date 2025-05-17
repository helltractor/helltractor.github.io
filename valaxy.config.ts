import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'

import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonMeting } from 'valaxy-addon-meting'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonWaline } from 'valaxy-addon-waline'


export default defineValaxyConfig<ThemeUserConfig>({
  theme: 'sakura',
  devtools: true,

  themeConfig: {
    ui: {
      primary: '#fe9500',

      toggleDarkButton: {
        lightIcon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
        darkIcon: 'i-line-md-sunny-outline-to-moon-loop-transition',
      },
      pinnedPost: {
        icon: 'i-fa-anchor',
      },
      postList: {
        icon: 'i-fa-envira',
      },
      scrollDown: {
        icon: 'i-fa-chevron-down',
      },
    },

    hero: {
      title: 'HI, SAKURA!',
      motto: 'You got to put the past behind you before you can move on.',
      urls: [
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-858k3j.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3l2vm3.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3z9dz9.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-rrdgp1.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-zyxq6j.jpg',
        // Source: https://www.pixiv.net/artworks/72203573
        'https://valaxy-theme-sakura.s3.bitiful.net/home-wallpaper.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper/yae-miko-sunset-sakura-genshin-impact-moewalls-com.mp4',
      ],
      randomUrls: true,
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/563098369-1-208.mp4',
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/theming-demos/mashiro/The Pet Girl of Sakurasou.mp4',
      playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/Original PV Little love song MONGOL 800 cover by Amatsuki.mp4',
      style: 'filter-grid',
      fixedImg: true,
      typewriter: true,
      enableHitokoto: true,
      waveTheme: 'horizontal',
    },

    notice: {
      message: '注定敢爱的人一生伤 --《月光》胡彦斌',
    },

    // pinnedPost: {
    //   text: 'START:DASH!!',

    //   entries: [
    //     {
    //       title: 'Docs',
    //       desc: '主题文档',
    //       link: 'https://sakura.valaxy.site',
    //       img: 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg',
    //     },
    //   ],
    // },

    pagination: {
      animation: true,
      infiniteScrollOptions: {
        preload: true,
      },
    },

    postList: {
      text: 'Discovery',

      isImageReversed: true,
      // defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://www.loliapi.com/acg/pc/?random'],
      defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://img.xjh.me/random_img.php?random?type=bg&return=302'],
    },

    postFooter: {
      navigationMerge: true,
    },

    navbar: [
      {
        icon: 'i-fa-fort-awesome',
        locale: 'menu.home',
        link: '/',
      },
      {
        icon: 'i-line-md-folder-twotone',
        locale: 'menu.categories',
        link: '/categories',
      },
      {
        icon: 'i-fa-archive',
        locale: 'menu.archives',
        link: '/archives',
      },
      // {
      //   icon: 'i-ri-folder-image-line',
      //   text: '相册集',
      //   link: '/albums',
      // },
      // {
      //   icon: 'i-ri-bilibili-fill',
      //   text: '追番列表',
      //   link: '/bangumi',
      // },
      // {
      //   icon: 'i-ri-open-source-line',
      //   text: '资源列表',
      //   link: '/sources',
      // },
      // {
      //   icon: 'i-ri-booklet-line',
      //   text: '生活记录',
      //   link: '/records',
      // },
      // {
      //   icon: 'i-ri-briefcase-line',
      //   text: '求职记录',
      //   link: '/jobs',
      // },
      // {
      //   icon: 'i-simple-icons-thealgorithms',
      //   text: '编程学习',
      //   link: '/program',
      // },
      // {
      //   icon: 'i-ri-leaf',
      //   text: '关于',
      //   link: '/about',
      // },
      {
        icon: 'i-ri-rss-line',
        text: 'RSS',
        link: '/atom.xml',
        target: '_blank',
      }
    ],

    navbarOptions: {
      title: ['Helltractor', 'Blog'],
      subTitle: '夏日可畏 冬日可爱',
      offset: 0,
      invert: ['home'],
      showMarker: false,
      autoHide: ['home'],
    },

    sidebar: [
      {
        text: '🌈',
        locale: 'menu.home',
        link: '/',
      },
      {
        text: '🗂️',
        locale: 'menu.archives',
        link: '/archives/',
      },
      {
        text: '📂',
        locale: 'menu.categories',
        link: '/categories/',
      },
      {
        text: '🏷️',
        locale: 'menu.tags',
        link: '/tags/',
      },
      // {
      //   text: '🎯 清单',

      //   items: [
      //     {
      //       text: '电影 🎞️',
      //       link: '/movie',
      //     },
      //     {
      //       text: '番剧 🍨',
      //       link: '/anime',
      //     },
      //     {
      //       text: '游戏 🎮',
      //       link: '/game',
      //     },
      //     {
      //       text: '歌单 🎵',
      //       link: '/music',
      //     },
      //   ],
      // },
      {
        text: '📝 留言板',
      },
      // {
      //   text: '🍻 朋友圈',
      // },
      // {
      //   text: '❤️ 打赏',
      // },
      {
        text: '📌',
        locale: 'menu.about',
      },
    ],

    sidebarOptions: {
      position: 'left',
    },

    tags: {
      rainbow: true,
    },

    footer: {
      since: 2024,

      icon: {
        enable: true,
        name: 'i-ri-github-line',
        animated: true,
        url: 'https://github.com/helltractor',
        title: 'GitHub',
      },
    },

    scrollToTop: true,
    scrollIndicator: true,
    scrollLock: false,
  },

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
    addonLive2d({
      enableLive2D: ['Tia', 'Pio', 'XiaoYun'],
      live2DCollection: {
        // https://github.com/AdingApkgg/live2d-api
        // https://cdn.jsdelivr.net/gh/adingapkgg/live2d-api/
        Asuna: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_01/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_02/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_03/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_04/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_05/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_06/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_07/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_08/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_09/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_10/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_11/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_12/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_13/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_14/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_15/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_16/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_17/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_18/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_19/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_20/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_21/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_22/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_23/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_24/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_25/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_26/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_27/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_28/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_29/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_30/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_31/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_32/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_33/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_34/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_35/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_36/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_37/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_38/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_39/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_40/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_41/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_42/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_43/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_44/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_45/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_46/index.json',
          ],
        },
        Type95: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/destroy/index.json',
          ],
        },
        HK416: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/destroy/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/destroy/index.json',
          ],
        },
      },
    }),
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
      options: {
        autoHidden: true,
        animationIn: true,
        lyricHidden: true,
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

  vite: {
    optimizeDeps: {
      include: [
        'd3',
        'lodash-es',
      ],
    },
  },
})
