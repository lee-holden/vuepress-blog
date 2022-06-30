module.exports = {
  title: 'DDDHL - 樱花树下',
  description: '个人博客网站,分享前端知识点,记录美好生活~',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'reco',
  themeConfig: {
    // 备案
    record: '湘ICP备2022004764号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    cyberSecurityRecord: '44011702000603',
    cyberSecurityLink:
      'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011702000603',
    subSidebar: 'auto',
    valineConfig: {
      appId: 'iGYBWlc6VJemQLF4K5MPC1rV-9Nh9j0Va',
      appKey: 'xrvYMnfV0uV9j88T9PqjyIwB',
    },
    noFoundPageByTencent: false,
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '实用工具',
        icon: 'reco-other',
        link: '/docs/tools/',
      },
      {
        text: '其它网站',
        icon: 'reco-blog',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/DDDHL',
            icon: 'reco-github',
          },
          {
            text: 'Gitee',
            link: 'https://gitee.com/donghe-li',
            icon: 'reco-mayun',
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/DDDHL_',
            icon: 'reco-csdn',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/tools/': ['', 'website', 'tool'],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    /* friendLink: [
      {
        title: 'CSDN博客',
        desc: '偶尔会发布一些文章',
        email: 'Lyouxiang526@163.com',
        avatar:
          'https://gitee.com/donghe-li/images/raw/master/images/blog/logo.png',
        link: 'https://blog.csdn.net/DDDHL_',
      },
      {
        title: 'Gitee',
        desc: '资源',
        avatar:
          'https://gitee.com/donghe-li/images/raw/master/images/blog/logo.png',
        link: 'https://gitee.com/donghe-li',
      },
    ], */
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'Leander',
    authorAvatar: '/avatar.png',
    startYear: '2021',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功',
        },
      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['shizuku'],
        clean: true,
        modelStyle: {
          position: 'fixed',
          right: '65px',
          bottom: '0px',
          zIndex: 99999,
          pointerEvents: 'none',
        },
      },
    ],
    [
      'cursor-effects',
      {
        size: 2,
        shape: 'star',
        zIndex: 999999999,
      },
    ],
    [
      'dynamic-title',
      {
        showIcon:
          'https://gitee.com/donghe-li/images/raw/master/images/blog/favicon.ico',
        showText: '客官欢迎回来~',
        hideIcon:
          'https://gitee.com/donghe-li/images/raw/master/images/blog/favicon.ico',
        hideText: '客官不要走嘛~',
        recoverTime: 2000,
      },
    ],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功!',
        },
      },
    ],
    [
      'meting',
      {
        meting: {
          // 歌单地址-> 如果输入可忽略server|type|mid
          // 但是不知道为什么不写上这三个会报错, 所以我都写上了
          auto: 'https://music.163.com/#/playlist?app_version=8.6.65&id=7390175823',
          // 当前服务为netease -> 网易
          server: 'netease',
          // 类型为歌单
          type: 'playlist',
          // 歌单id
          mid: '7390175823',
        },
        aplayer: {
          // 歌单为随机
          order: 'random',
          // 0为不显示歌词
          lrcType: 0,
          // 音量
          volume: 0.15,
          // 开启迷你模式
          mini: true,
          // 自动播放
          autoplay: true,
        },
      },
    ],
    [
      'sakura',
      {
        num: 8, // 默认数量
        show: true, //  是否显示
        zIndex: 99999, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...', // 绝对路径
        },
      },
    ],
    [
      'ribbon-animation',
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: '80%',
          // 色带HSL亮度量
          colorBrightness: '60%',
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: 'center',
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
  ],
}
