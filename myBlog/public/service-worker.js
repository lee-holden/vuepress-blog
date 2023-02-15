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
    "revision": "77dcd852a31c7a6dc669d4da30bd5f6c"
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
    "url": "assets/img/electronOpenServer.b8617182.gif",
    "revision": "b861718230c23f1263b8492863649f85"
  },
  {
    "url": "assets/img/electronOpenServer1.48d90b2e.png",
    "revision": "48d90b2e4bc831005b7599aa45c68e99"
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
    "url": "assets/js/1.843244bb.js",
    "revision": "2e95244eaa69bb6df83050bb7f6b21c4"
  },
  {
    "url": "assets/js/10.9a382eba.js",
    "revision": "0a3518b6dd7918e33894a3bbb2e604cc"
  },
  {
    "url": "assets/js/11.7ff70763.js",
    "revision": "af95478c9c649bea756ffd1f1159a379"
  },
  {
    "url": "assets/js/12.e9f94929.js",
    "revision": "2e993347c95651b6ebd9b3dc99a0b41a"
  },
  {
    "url": "assets/js/13.5200e8ed.js",
    "revision": "506be2eb7ab6f63e9621a28f8084d64e"
  },
  {
    "url": "assets/js/14.d4a880ed.js",
    "revision": "2276029004ad57d80cec255f66c513eb"
  },
  {
    "url": "assets/js/15.d60aef1c.js",
    "revision": "9657abb7e312964e48dcc29826b43685"
  },
  {
    "url": "assets/js/16.e3f0c204.js",
    "revision": "e0c2d62c3652b432afa3c582d535627e"
  },
  {
    "url": "assets/js/17.16b26061.js",
    "revision": "e2ba0b48f125010e101894e248588ec4"
  },
  {
    "url": "assets/js/18.62591075.js",
    "revision": "5f9333d954afefb71e8fd9b11144209c"
  },
  {
    "url": "assets/js/19.3820e37f.js",
    "revision": "91285b8c1419b80dcb03a998de7eb555"
  },
  {
    "url": "assets/js/20.7bb07784.js",
    "revision": "0ce96f171def4252a87d18ab69f32d5f"
  },
  {
    "url": "assets/js/21.5cf140ac.js",
    "revision": "068decf55b0546bab5af36631989b2df"
  },
  {
    "url": "assets/js/22.9ebb03c0.js",
    "revision": "d63c049719872d92ca6da0b1d77878a6"
  },
  {
    "url": "assets/js/23.173bea19.js",
    "revision": "6c21990384f67ffa0d32341aafee565f"
  },
  {
    "url": "assets/js/24.dd8a7f30.js",
    "revision": "13fe51f4a0a86df2ac539f8ebf198df2"
  },
  {
    "url": "assets/js/25.aff54031.js",
    "revision": "5f56ea122a88f5ee82d18ffe33723ac8"
  },
  {
    "url": "assets/js/26.5329c195.js",
    "revision": "8272440e76974fd426c2a02f7d8f9174"
  },
  {
    "url": "assets/js/27.1defa2de.js",
    "revision": "efe4a95d7584c54ccf93cb33cb37ae06"
  },
  {
    "url": "assets/js/28.f6fdbaa3.js",
    "revision": "d023e08292671d030c3ec11d43bba1a9"
  },
  {
    "url": "assets/js/29.e02c8483.js",
    "revision": "1fbc4671add098407197196301734efc"
  },
  {
    "url": "assets/js/3.eff7a30d.js",
    "revision": "0d62e33bdebc3581ffe2ff993b1c1ef9"
  },
  {
    "url": "assets/js/30.787c285b.js",
    "revision": "eb54527803a0888b8bed98580c955346"
  },
  {
    "url": "assets/js/31.c2f4ccee.js",
    "revision": "1daf88743933bad5ab810d1dbf47b14f"
  },
  {
    "url": "assets/js/32.f71376c8.js",
    "revision": "fd8e2befcd23779bef26e1aaf8fe0177"
  },
  {
    "url": "assets/js/33.2e53b3b3.js",
    "revision": "270145f7d0bb6423f0cc568519574d24"
  },
  {
    "url": "assets/js/34.13e5b6d4.js",
    "revision": "54e313b677cdfe5b96cc71bfd9330d94"
  },
  {
    "url": "assets/js/35.ccbe740d.js",
    "revision": "7273462704602af64b9b81771a14358a"
  },
  {
    "url": "assets/js/36.29a44a3c.js",
    "revision": "ea01a296c13c521d531f80289856de80"
  },
  {
    "url": "assets/js/37.cc4b4dc3.js",
    "revision": "c32a56fa981826e6b72d11ef2e71d8a1"
  },
  {
    "url": "assets/js/38.0add3972.js",
    "revision": "8d30e7f8d3459f12b15b67fb736bf7cb"
  },
  {
    "url": "assets/js/39.8182930c.js",
    "revision": "c6351c0f76d7eeec4e6e85d8cc43b3cd"
  },
  {
    "url": "assets/js/4.7963137f.js",
    "revision": "6ccc6618900f240f3fc3c89316312ae4"
  },
  {
    "url": "assets/js/40.f393af62.js",
    "revision": "1cf18b6800f8f41963acd54d4ce1f6ee"
  },
  {
    "url": "assets/js/5.bb35f964.js",
    "revision": "ba9cfad463e214a11de9f0e8f31b16b9"
  },
  {
    "url": "assets/js/6.c092f356.js",
    "revision": "0d3298a1a58440b435a8daa058393ead"
  },
  {
    "url": "assets/js/7.fa3cac07.js",
    "revision": "1b2dc513c20ec3bbbdb34e7f44c6282a"
  },
  {
    "url": "assets/js/8.f3f97fe2.js",
    "revision": "c108cdea36229a896b8802a07b38489d"
  },
  {
    "url": "assets/js/9.57cf4385.js",
    "revision": "08c19317795beb11d7ce5b4816b2ef20"
  },
  {
    "url": "assets/js/app.80ef0963.js",
    "revision": "145406c1de2f84a5a0765934e82d87ec"
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
    "revision": "42f66fd349f7ae38c08d1ce2053da587"
  },
  {
    "url": "blogs/all/2021/css_picture.html",
    "revision": "9e15aaf766c1ab5df8b50a29ee28c285"
  },
  {
    "url": "blogs/all/2021/Git.html",
    "revision": "bb3b9487f411b2ef7194a9fcf4cfb50a"
  },
  {
    "url": "blogs/all/2021/JavaScriptAll.html",
    "revision": "7e5e4d2c1bd47d59cb6bc7bcee65e3d2"
  },
  {
    "url": "blogs/all/2021/js_mianshi.html",
    "revision": "f03f26ff71cd49070feb770382c69f23"
  },
  {
    "url": "blogs/all/2021/jsDom.html",
    "revision": "9751bf209d1712a3d4b1845ad869abdf"
  },
  {
    "url": "blogs/all/2021/Leecode.html",
    "revision": "202d966d369bfc84dee052faf78663ba"
  },
  {
    "url": "blogs/all/2021/mokuaihua.html",
    "revision": "fbbd38c2d505fd9c35abde46823bf00e"
  },
  {
    "url": "blogs/all/2021/request.html",
    "revision": "c5621980b3f62e2f040387a1ebdc50eb"
  },
  {
    "url": "blogs/all/2021/vscode.html",
    "revision": "3f00033238dc82ec5e95dbf4d9211d4c"
  },
  {
    "url": "blogs/all/2021/Vue2.x.html",
    "revision": "ccfdea98ce36f219a96deb0e4eab7042"
  },
  {
    "url": "blogs/all/2021/Vue3.html",
    "revision": "ba865c93ec50cf2d72ae4bc9d40616e2"
  },
  {
    "url": "blogs/all/2022/buju.html",
    "revision": "6be2dcb74a71c823bf4b7857d54f4a70"
  },
  {
    "url": "blogs/all/2022/contect.html",
    "revision": "0e82a2367a3f0c667cc5ee9c575aab0e"
  },
  {
    "url": "blogs/all/2022/daimayouhua.html",
    "revision": "a8a2b9fe761416e0950f86259c651c00"
  },
  {
    "url": "blogs/all/2022/electron.html",
    "revision": "36d360bcdb88c6a776bfa9556de650cf"
  },
  {
    "url": "blogs/all/2022/electronOpenServer.html",
    "revision": "6a34d987b52d9c8c14152ec6b4ae450d"
  },
  {
    "url": "blogs/all/2022/js_methods.html",
    "revision": "6bd2d078df07d18c58b44a74722467be"
  },
  {
    "url": "blogs/all/2022/ku.html",
    "revision": "466bb8c8ec6b187f9a814c5552b93d44"
  },
  {
    "url": "blogs/all/2022/lazy1.html",
    "revision": "ee29b5f34e91dc6584dbb7e514e6fda5"
  },
  {
    "url": "blogs/all/2022/nodejs.html",
    "revision": "eb021ecee15a5ab2fddb88b6cb9d79cd"
  },
  {
    "url": "blogs/all/2022/TypeScript.html",
    "revision": "74adfb1f91eef195ed0c1334edb26442"
  },
  {
    "url": "blogs/all/2022/uniappWechatTop.html",
    "revision": "04cae3e336acc6146dc6e2b30cc3a70f"
  },
  {
    "url": "blogs/all/2022/Vue_knowledge.html",
    "revision": "a3251d7cec217734f4a009c5d7d925b8"
  },
  {
    "url": "blogs/all/2022/webRoad.html",
    "revision": "5a9900c7dbd85e0d2d9994e612f9f553"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "16239c8fce1fb3b78d17845c701999bc"
  },
  {
    "url": "categories/electron/index.html",
    "revision": "34b8969a8764935f14bc2e3f091377ff"
  },
  {
    "url": "categories/elementUi/index.html",
    "revision": "4984845981771f84831599b66f0f6d29"
  },
  {
    "url": "categories/es6/index.html",
    "revision": "4d3c4e39984330b9bed3a29137ff7084"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "a2ed06dafa4f27a39c4262b89f6a27ed"
  },
  {
    "url": "categories/index.html",
    "revision": "ccd6461de68205c6b8969d6d02c1b941"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "411f40a176cec1bdc6b81b6760436765"
  },
  {
    "url": "categories/LeeCode/index.html",
    "revision": "892dd3fdaae240ea8f14197aa8a14560"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "cff709ba975921db958d7f2fa6372b56"
  },
  {
    "url": "categories/npm库/index.html",
    "revision": "d7ebee7c192844875f2b6e25266f1371"
  },
  {
    "url": "categories/request/index.html",
    "revision": "bd962b80687c0c3b58f1d6f6ddf29eef"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "dfad05523f47195c605bf0eeee09829b"
  },
  {
    "url": "categories/Uniapp/index.html",
    "revision": "766a8813decc865e57c41521d8115aee"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "8d5e02d3df8b80420824cd673400c4fa"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "df5083e7bcd8ed12cb833c5778408877"
  },
  {
    "url": "categories/WeChat/index.html",
    "revision": "76d012ebaa051886dad73bfeb894423e"
  },
  {
    "url": "categories/前端路线/index.html",
    "revision": "16c5ffb173fb4d4cb41f63b72e119779"
  },
  {
    "url": "categories/响应式/index.html",
    "revision": "7dbfb75d9a1959d9c7d4888f749fc87a"
  },
  {
    "url": "categories/布局/index.html",
    "revision": "916c28b6b4a002cf5f3f31575762817e"
  },
  {
    "url": "docs/tools/index.html",
    "revision": "9ae9c4eec82147be0ed83d1e8ba86a4a"
  },
  {
    "url": "docs/tools/tool.html",
    "revision": "6d757e6168fa1a120746ae2d7f046476"
  },
  {
    "url": "docs/tools/website.html",
    "revision": "5b7dc4c74fd6ac047974b63125af9887"
  },
  {
    "url": "index.html",
    "revision": "84cbcc8ddd0a2bc7790a8c555d4fe154"
  },
  {
    "url": "logo.png",
    "revision": "ce6c1480ff811343030c233a43ace915"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "0baa63bf540ad73304a4209cd1bf264e"
  },
  {
    "url": "tag/electron/index.html",
    "revision": "41de8bf073f498f16b0ffc20158eda0a"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "7376cb9b46f94947615376f053b1120d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "4ccc53f6f7e016ae676a63175dd3980d"
  },
  {
    "url": "tag/index.html",
    "revision": "55a7f1dcd1270477f2b6f71ec54b219b"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "85a276aac851d14bbdec0e2665d6aa61"
  },
  {
    "url": "tag/LeeCode/index.html",
    "revision": "352873701b2fa5d19d9f121612ddf8fc"
  },
  {
    "url": "tag/node.js/index.html",
    "revision": "acb74b3bc4aa9ff9f30071bffa3f195e"
  },
  {
    "url": "tag/rem/index.html",
    "revision": "2f4d16c189cd30a1597e8324a807f120"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "aab1aa29346717d6fb25ea359430dba5"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "22d8390bba32cf4ee84ab4e8025588a4"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "5eeca9ff8c6c3e3bbd2219fbf7f49fa6"
  },
  {
    "url": "tag/WeChat/index.html",
    "revision": "ccd4627011a8042e9ef924b665862c04"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "6f47bde2f65184e183b8405fa7c17a17"
  },
  {
    "url": "tag/后端/index.html",
    "revision": "acf6e06cad8dbd06e8e6144dfe6bad16"
  },
  {
    "url": "tag/图片/index.html",
    "revision": "b889ad9dba3e48e793b4d2568fffc9e4"
  },
  {
    "url": "tag/媒体查询/index.html",
    "revision": "3bb84cb94665b448f940e32d2560fc3c"
  },
  {
    "url": "tag/封装方法/index.html",
    "revision": "7922192a3e3788d22f751750d18a14dc"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "0a417ac1335ef5d4262509cf8f74266f"
  },
  {
    "url": "tag/懒加载/index.html",
    "revision": "d9bda1e6803cca823afba6d18499b61e"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "abf902754b7cbce176fdf8e6b9c0206b"
  },
  {
    "url": "tag/框架/index.html",
    "revision": "91af1fa1b3ce03598bdcc326880a8e40"
  },
  {
    "url": "tag/模块化/index.html",
    "revision": "b5630b6dbc9324fa3c7fb1a02817878a"
  },
  {
    "url": "tag/请求/index.html",
    "revision": "4cb17db32b0118f6dc200bc6c7de281c"
  },
  {
    "url": "tag/资源/index.html",
    "revision": "6fc252426d6c2ede853c760a11734b6c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "917e155efc7c959aff2015e4937f677d"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "ab6e556226fe503608b24ec5337d3973"
  },
  {
    "url": "timeline/index.html",
    "revision": "c664766f6ee8fdfb2f5d2e03b139362e"
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
