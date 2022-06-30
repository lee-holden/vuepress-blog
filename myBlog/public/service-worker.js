/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0fb33a96593ed108ae008701b8a553d3"
  },
  {
    "url": "assets/css/0.styles.b346d585.css",
    "revision": "c60bdb2c651682f635204af0dff870ae"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/css_picture1.25d35559.jpg",
    "revision": "25d35559f9ef2434b85637f391a5a85c"
  },
  {
    "url": "assets/img/css_picture2.3902af03.jpg",
    "revision": "3902af03d88f73daff0f76e65cc510f7"
  },
  {
    "url": "assets/img/css_picture3.d378de88.jpg",
    "revision": "d378de88a64ea3562c6cac3061a3e178"
  },
  {
    "url": "assets/img/css_picture4.3679adf2.jpg",
    "revision": "3679adf2201ab6e63d299df2178ead0a"
  },
  {
    "url": "assets/img/css_picture5.e573be2a.jpg",
    "revision": "e573be2a6f537d74183a53143b334858"
  },
  {
    "url": "assets/img/electron.8ce42424.png",
    "revision": "8ce424245e9412b2166b2bfb831e797c"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/js_mianshi.a3764635.png",
    "revision": "a37646352d2810129683d67b6aa04245"
  },
  {
    "url": "assets/img/nodejs.2ef462cc.jpg",
    "revision": "2ef462cc8a945eb31320bdfaa2f44b63"
  },
  {
    "url": "assets/img/nodejs.9fcf153a.png",
    "revision": "9fcf153a29bb8cd1bd6c10a9cd9a1309"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/Vue_knowledge1.18dc1911.png",
    "revision": "18dc1911f0e636547b9a1965c3604344"
  },
  {
    "url": "assets/img/Vue_knowledge2.ff91e5af.png",
    "revision": "ff91e5af8c61e80ca01c404fc8dc22fb"
  },
  {
    "url": "assets/img/Vue_knowledge3.3353bd68.png",
    "revision": "3353bd684888f8e0c8fab8b9cc8cec54"
  },
  {
    "url": "assets/img/Vue_knowledge4.f9f68eeb.png",
    "revision": "f9f68eeb244ec48e39e3ec339601d552"
  },
  {
    "url": "assets/img/Vue_knowledge5.edd6f557.png",
    "revision": "edd6f557284aa8b72b4211026e1733e8"
  },
  {
    "url": "assets/img/vue2_1.3a1c0281.png",
    "revision": "3a1c028107c4e4b745051949f91b272e"
  },
  {
    "url": "assets/img/vue2_2.6d1926f4.png",
    "revision": "6d1926f44266b063ec0a1a95bc7db8fb"
  },
  {
    "url": "assets/img/vue2_3.9f83d88e.png",
    "revision": "9f83d88edec9c8b8bc7b85d6f65fac7c"
  },
  {
    "url": "assets/img/vue2_4.2d911305.png",
    "revision": "2d91130552f8d4e3f0c5a70b42c4f90b"
  },
  {
    "url": "assets/img/vue3_1.4e3ef9d4.png",
    "revision": "4e3ef9d454d7fab4ba5d925fba7c5640"
  },
  {
    "url": "assets/img/vue3_2.a22eaf46.png",
    "revision": "a22eaf465d13b016e3c1d91ef5a3d6f9"
  },
  {
    "url": "assets/img/vue3_3.dcec3634.png",
    "revision": "dcec3634369527b7731e6ac7fb7f8a96"
  },
  {
    "url": "assets/img/vue3_4.bde445e7.jpg",
    "revision": "bde445e7ef85f07d94bfd799a93788cf"
  },
  {
    "url": "assets/img/vue3_7.02b5cd4b.gif",
    "revision": "02b5cd4b8963b4b13009c8bc5ac25eaf"
  },
  {
    "url": "assets/img/vue3_8.015fe43a.gif",
    "revision": "015fe43a56729ca36854f6765b4788b9"
  },
  {
    "url": "assets/img/vue3_9.9d073ff7.gif",
    "revision": "9d073ff76753a9cd7280800599b6b937"
  },
  {
    "url": "assets/js/1.067554a8.js",
    "revision": "2e95244eaa69bb6df83050bb7f6b21c4"
  },
  {
    "url": "assets/js/10.ae62669f.js",
    "revision": "9f1ffee222405a92a82f56394f5042d1"
  },
  {
    "url": "assets/js/11.c4c838bd.js",
    "revision": "df0e646aac1c7f558b8595f5136c313a"
  },
  {
    "url": "assets/js/12.2a02150a.js",
    "revision": "06f5a97f3649d3d9b5f54bb5471562db"
  },
  {
    "url": "assets/js/13.fb418f81.js",
    "revision": "a4e9da82811810e2de28f719a3d738ab"
  },
  {
    "url": "assets/js/14.8382f884.js",
    "revision": "b8dc2643ea54586a340461e0c8b54f41"
  },
  {
    "url": "assets/js/15.bb2fdf57.js",
    "revision": "809bf8cc5e6de2b05d0e13d6e77b49a2"
  },
  {
    "url": "assets/js/16.17f271a8.js",
    "revision": "9044cc005bc2addcc8abdb953df7d806"
  },
  {
    "url": "assets/js/17.9efb5e44.js",
    "revision": "0ffdbf780e4b2f2bb31121c0d67831eb"
  },
  {
    "url": "assets/js/18.6d145c7b.js",
    "revision": "bbe6ddea61566941e0158f2bf65e37cc"
  },
  {
    "url": "assets/js/19.0193e33d.js",
    "revision": "e29ab28191996fc3e60a410b1f84d1dc"
  },
  {
    "url": "assets/js/20.7796e12e.js",
    "revision": "68ff65a03ec2da04fc0e2a1341d4ea8c"
  },
  {
    "url": "assets/js/21.59d814c9.js",
    "revision": "23668c502576ed015b740e00c2fc721a"
  },
  {
    "url": "assets/js/22.291215d1.js",
    "revision": "8089d88b8a7978547dbc315f74ed2704"
  },
  {
    "url": "assets/js/23.026c1223.js",
    "revision": "be13161f086b70a1dba15798a556e4e4"
  },
  {
    "url": "assets/js/24.64e6ca9f.js",
    "revision": "2115366e3fbbc267fb3c5b0bfb016ebf"
  },
  {
    "url": "assets/js/25.618e512e.js",
    "revision": "e01ed9cec4d7bc56610e2034536e90b9"
  },
  {
    "url": "assets/js/26.4fc67709.js",
    "revision": "b45399e576d44f508ac046cb45f935d8"
  },
  {
    "url": "assets/js/27.8b45ec0b.js",
    "revision": "d5fede1a03f82cdfe7c16e6513445c24"
  },
  {
    "url": "assets/js/28.bb4db927.js",
    "revision": "d2e1571475db2e9f3cb5ed3e8ccd43f6"
  },
  {
    "url": "assets/js/29.de22a95d.js",
    "revision": "b2862327c289afdec6832a82e5dbd16b"
  },
  {
    "url": "assets/js/3.6e9b9c3d.js",
    "revision": "cbe41575213dd9f8d4f34f37eddcecb5"
  },
  {
    "url": "assets/js/30.4a6dda51.js",
    "revision": "12ede559e3d4db71ec2c26c947f545a3"
  },
  {
    "url": "assets/js/31.ef537def.js",
    "revision": "9c5015c050bb3bb9511f82d67ba945b9"
  },
  {
    "url": "assets/js/32.b2c12db0.js",
    "revision": "3399ad49ab1a8d7b1a53c5cb6b2441db"
  },
  {
    "url": "assets/js/33.bad2d864.js",
    "revision": "15e3e88ada7ada513279cf75ad5ba544"
  },
  {
    "url": "assets/js/34.558b8e5e.js",
    "revision": "d08dee35c5709b8fb02c60fbba204b5d"
  },
  {
    "url": "assets/js/35.1c207797.js",
    "revision": "abc996f66ae9c7126f0a5c8dbe5449e6"
  },
  {
    "url": "assets/js/36.6c46efa4.js",
    "revision": "6c3a985ef4db13e6c0a69fe96cd4772d"
  },
  {
    "url": "assets/js/37.efcb5336.js",
    "revision": "ef77a1966d198ae90c10f06a4c0e7dc6"
  },
  {
    "url": "assets/js/38.86feeb38.js",
    "revision": "110041523d758086f7bbd6d450129de7"
  },
  {
    "url": "assets/js/39.97180b1b.js",
    "revision": "b8072b3d4ff08d731388be98d864d7e1"
  },
  {
    "url": "assets/js/4.fc7f2f97.js",
    "revision": "30c91a9da6d2d343847a0a72ffa58024"
  },
  {
    "url": "assets/js/5.c7894286.js",
    "revision": "9de2d7fdc0cf10ccc82cc9f783664605"
  },
  {
    "url": "assets/js/6.f7617569.js",
    "revision": "c4e4340c7736e62f6893c98aef2f0fce"
  },
  {
    "url": "assets/js/7.a5e3b983.js",
    "revision": "17c4f24bfe4fb5807e74b82c82531a98"
  },
  {
    "url": "assets/js/8.272411fc.js",
    "revision": "e6752caf5aff0533f566ad78f9664c13"
  },
  {
    "url": "assets/js/9.0870240b.js",
    "revision": "4006c388c9899622b926ba89a2f9a3f1"
  },
  {
    "url": "assets/js/app.8ea28485.js",
    "revision": "1f312447db81c7679f38d68a3f4a57aa"
  },
  {
    "url": "avatar.png",
    "revision": "ce6c1480ff811343030c233a43ace915"
  },
  {
    "url": "bg.jpg",
    "revision": "43db542279af0322c0c5605122d2f458"
  },
  {
    "url": "blogs/all/2021/axios.html",
    "revision": "53e30154b9860a8467ed27d1050d81ec"
  },
  {
    "url": "blogs/all/2021/css_picture.html",
    "revision": "73ba8477f1c01a8bdabc2359424d5384"
  },
  {
    "url": "blogs/all/2021/Git.html",
    "revision": "7679d9ff034b74227796be4f3ef39e04"
  },
  {
    "url": "blogs/all/2021/JavaScriptAll.html",
    "revision": "944d20e135e6f5bc8e691325ac0f89f6"
  },
  {
    "url": "blogs/all/2021/js_mianshi.html",
    "revision": "aa13530e383ca6904fb7ef6dbb887bd6"
  },
  {
    "url": "blogs/all/2021/jsDom.html",
    "revision": "2fae29677648eefada252da7e5427b1b"
  },
  {
    "url": "blogs/all/2021/Leecode.html",
    "revision": "5fb1c2b469236d409b787a642e36e39e"
  },
  {
    "url": "blogs/all/2021/mokuaihua.html",
    "revision": "b91870cfbe387ae317a52c0414859b03"
  },
  {
    "url": "blogs/all/2021/request.html",
    "revision": "423269d50e32bd390aa6fc6d915e5ada"
  },
  {
    "url": "blogs/all/2021/vscode.html",
    "revision": "2553cde702948d84d7fdb2e6aa69e923"
  },
  {
    "url": "blogs/all/2021/Vue2.x.html",
    "revision": "dbc93d19bdeee66acc90d0a004fd1f85"
  },
  {
    "url": "blogs/all/2021/Vue3.html",
    "revision": "65da523234869fb4e46ad3045b466172"
  },
  {
    "url": "blogs/all/2022/buju.html",
    "revision": "6d9f70e1dba66622f4eb5869026938d0"
  },
  {
    "url": "blogs/all/2022/contect.html",
    "revision": "a00ed01a64bef18d26e290f64f55cd53"
  },
  {
    "url": "blogs/all/2022/daimayouhua.html",
    "revision": "a2ef3bebdc708783602673f2f23ab796"
  },
  {
    "url": "blogs/all/2022/electron.html",
    "revision": "8a0aac86a084ad0a57585606aeb88f8b"
  },
  {
    "url": "blogs/all/2022/js_methods.html",
    "revision": "f4e0606b66322e65fdc0b1509bfa2066"
  },
  {
    "url": "blogs/all/2022/ku.html",
    "revision": "ce9a0ea82b55fd98d77ebb9bef205720"
  },
  {
    "url": "blogs/all/2022/lazy1.html",
    "revision": "ff3e3d3445551ad674483e63f69a46f5"
  },
  {
    "url": "blogs/all/2022/nodejs.html",
    "revision": "9254426680d330b89c85f1a56da64e56"
  },
  {
    "url": "blogs/all/2022/TypeScript.html",
    "revision": "230ec2be9a5bd097fe07f5fd24b9721b"
  },
  {
    "url": "blogs/all/2022/uniappWechatTop.html",
    "revision": "a83c0b489f4f5c8f988174c9306a4a79"
  },
  {
    "url": "blogs/all/2022/Vue_knowledge.html",
    "revision": "6f35c99e7bf465d0a4fbb0becdf932a8"
  },
  {
    "url": "blogs/all/2022/webRoad.html",
    "revision": "ff9df45f0995ffb5fc4d5acc9bc2e434"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "f606f4ac459e6e9149cb30411147433c"
  },
  {
    "url": "categories/electron/index.html",
    "revision": "cc9723c8046c9ede87ae5f60d6955724"
  },
  {
    "url": "categories/elementUi/index.html",
    "revision": "02963344ebc5758dfd5b14bf3ace22f9"
  },
  {
    "url": "categories/es6/index.html",
    "revision": "200c70c1118c4edbe44b2e600624e33b"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "ce4e68ddcfc8b031b9fb5620892f2958"
  },
  {
    "url": "categories/index.html",
    "revision": "fcbe338a977f3d52ebe112b73d9645c1"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e6a0b62c1129a084937d0072b6eead4c"
  },
  {
    "url": "categories/LeeCode/index.html",
    "revision": "311c6558c699183097946ea75c31598d"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "7ada5afc0dd499411da0ceddb890b353"
  },
  {
    "url": "categories/npm库/index.html",
    "revision": "b7237991cc6d1973a9309eeb005f448f"
  },
  {
    "url": "categories/request/index.html",
    "revision": "69e008418d5fa0b277b9bec17df9316f"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "27b3761f81388b02e215cd3f246f826d"
  },
  {
    "url": "categories/Uniapp/index.html",
    "revision": "2bacdc57ccd2f15f234e5f8c9516b658"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "728f297edb029c45a8e3966f0721ce94"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "fb9c13897fabfefec190c6703e9ebf01"
  },
  {
    "url": "categories/WeChat/index.html",
    "revision": "0d4df7f5460b7a714dcca419eae09913"
  },
  {
    "url": "categories/前端路线/index.html",
    "revision": "e38f24526da9fa2cf57f32d499877181"
  },
  {
    "url": "categories/响应式/index.html",
    "revision": "c9fe4ccf36189b6aa03237ab848001eb"
  },
  {
    "url": "categories/布局/index.html",
    "revision": "45602a00b086b98019bc1c1648e9ea4d"
  },
  {
    "url": "docs/tools/index.html",
    "revision": "99c1a45d5516968faa8ab2e66a3b8517"
  },
  {
    "url": "docs/tools/tool.html",
    "revision": "cd1974b177c60190322124ebff601334"
  },
  {
    "url": "docs/tools/website.html",
    "revision": "dd994673dd39e5d35fd5503d52bd37b7"
  },
  {
    "url": "index.html",
    "revision": "ebee7405e86d49c4bd2e5e4ea843e73b"
  },
  {
    "url": "logo.png",
    "revision": "ce6c1480ff811343030c233a43ace915"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "089daa203a2c69ef361a1cc9a1976c94"
  },
  {
    "url": "tag/electron/index.html",
    "revision": "369355e6913e55dafe9487abe9173e9f"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "d43287d09450eee6e905d7f959813de1"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "5eef3c2e0064162d8544ae86138ad0ff"
  },
  {
    "url": "tag/index.html",
    "revision": "96d33df60f35ee79794aacd624511115"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "abeb117e83dbe91d98c394e05c7fbcc7"
  },
  {
    "url": "tag/LeeCode/index.html",
    "revision": "4e4a583b32ab4faa109e6c49b8bc9f00"
  },
  {
    "url": "tag/node.js/index.html",
    "revision": "85d44829e8546b4b98cb13be8212a783"
  },
  {
    "url": "tag/rem/index.html",
    "revision": "4d5b8d83c871e9ac1f685a4766d9718e"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "b3740a604499aa6fd9404b00c84d0548"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "15bea0003bc00a501d1319bb64c1e32b"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "5f00ffc10cb13bbe8ee3e5f23056f9ea"
  },
  {
    "url": "tag/WeChat/index.html",
    "revision": "0c4c1845659f389fe2ca930585b4dc6d"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "0d7f928fae6108a107ea50bf960fec41"
  },
  {
    "url": "tag/图片/index.html",
    "revision": "f06646bdfb7c73a1774ab072ec17b1de"
  },
  {
    "url": "tag/媒体查询/index.html",
    "revision": "fb02e04dafb8fa5ca4891bdb9b83846a"
  },
  {
    "url": "tag/封装方法/index.html",
    "revision": "0a050ec8062f25256a8060c24bcf8444"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "fd0b42acfc3d2edf9cfc2dc805e984ea"
  },
  {
    "url": "tag/懒加载/index.html",
    "revision": "043fa6931d95351c84c2392ea678a232"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "5ca68fbefbc8a844005244896ede017a"
  },
  {
    "url": "tag/框架/index.html",
    "revision": "778ac63c03b3d23e8cbd83916f0facaa"
  },
  {
    "url": "tag/模块化/index.html",
    "revision": "c58e3307769efa86e89de83e33ab6f47"
  },
  {
    "url": "tag/请求/index.html",
    "revision": "55915ee56e3b61575e795782071494c2"
  },
  {
    "url": "tag/资源/index.html",
    "revision": "480b201199792fd5389437b7ae6987fc"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "2b75bd4cfbbebe254664c6d92ddba6d4"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "bc6419d7030b63ae93971f9775e95cfb"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1f0c7e9e9b3a5df2ac95522ef78be4d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
