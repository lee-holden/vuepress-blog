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
    "revision": "a1382f716aca2fb95234e29c3c142438"
  },
  {
    "url": "assets/css/0.styles.823edd33.css",
    "revision": "9ba414fe6f8e1f972ad5256c6ea54f84"
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
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/js_mianshi.a3764635.png",
    "revision": "a37646352d2810129683d67b6aa04245"
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
    "url": "assets/js/1.bffbf46e.js",
    "revision": "9626d03ca431fe59249d52a8ace15d8b"
  },
  {
    "url": "assets/js/10.72a26f5a.js",
    "revision": "68b2dff51a76c686230093cbc353768c"
  },
  {
    "url": "assets/js/11.52011e0e.js",
    "revision": "47c1e4f7742ceb01663e868001160c03"
  },
  {
    "url": "assets/js/12.bf2bfeac.js",
    "revision": "e9784f5b350f1ce24a100ee9409fcf8f"
  },
  {
    "url": "assets/js/13.66d2df33.js",
    "revision": "3cc445af83f78e867ea63b4d99ee47a4"
  },
  {
    "url": "assets/js/14.34b2e61f.js",
    "revision": "34490ad26a39c32ece107f37e04bc7cd"
  },
  {
    "url": "assets/js/15.66c7f2dc.js",
    "revision": "30ba276f17d297b5f51feb5dc27bd974"
  },
  {
    "url": "assets/js/16.3d450bd8.js",
    "revision": "8bbb04034bce38a39957b60b8ccc1aed"
  },
  {
    "url": "assets/js/17.4dbef28f.js",
    "revision": "81f6e51673feacd50c6b9486fd475711"
  },
  {
    "url": "assets/js/18.8ae65eae.js",
    "revision": "4dbac3ce2da0b5530d9003b6880b342a"
  },
  {
    "url": "assets/js/19.b9e9af8e.js",
    "revision": "7dcde195f3cd767e3fc27ad04cbcd141"
  },
  {
    "url": "assets/js/20.69cbd0e7.js",
    "revision": "d734dd9b66b2224f0cac84a30b82d2d1"
  },
  {
    "url": "assets/js/21.a6957e00.js",
    "revision": "7e5adb7b25c92c20b50f0539454689e0"
  },
  {
    "url": "assets/js/22.06a72e64.js",
    "revision": "154b0f3f6907458df8c393afae431dbf"
  },
  {
    "url": "assets/js/23.d4947d33.js",
    "revision": "9347dfc327295fccc93c2c96ec9429d6"
  },
  {
    "url": "assets/js/24.e564fe05.js",
    "revision": "27f41ce6c183d8030e9aafd695c98ffe"
  },
  {
    "url": "assets/js/25.7e182d37.js",
    "revision": "1da6776055f006fbdabfa0a20b07623c"
  },
  {
    "url": "assets/js/26.35a62084.js",
    "revision": "8e5e2aef192078942725b962c19c42cb"
  },
  {
    "url": "assets/js/27.05098207.js",
    "revision": "c0f3af7628b20444c1b17fb69b543252"
  },
  {
    "url": "assets/js/28.f1ffa53d.js",
    "revision": "1f64ea234ef56a9ce115b2be6ec19eac"
  },
  {
    "url": "assets/js/29.0dae047b.js",
    "revision": "ca9b4962d5fb3fedc3d40aa7cfda0a0d"
  },
  {
    "url": "assets/js/3.b67aaccb.js",
    "revision": "382276a02eced495637f537e20357c48"
  },
  {
    "url": "assets/js/30.9932131c.js",
    "revision": "b1f07ae9ac4d052ece36f53dddaa5d00"
  },
  {
    "url": "assets/js/31.4c12adcf.js",
    "revision": "6b41d576c1cc04324239e85fc7b95f68"
  },
  {
    "url": "assets/js/32.a8af8562.js",
    "revision": "93c232a25a5778cc95f383c79e86c5ca"
  },
  {
    "url": "assets/js/33.a4ae5691.js",
    "revision": "58051aaa0dbbf9590debed06df79fc8b"
  },
  {
    "url": "assets/js/34.3902da2c.js",
    "revision": "1335d4701913031b2173fd539411478b"
  },
  {
    "url": "assets/js/4.555de328.js",
    "revision": "56b7bb9c111f8dee0ae44ba2b1253dd3"
  },
  {
    "url": "assets/js/5.5873de76.js",
    "revision": "85fe3321d248dc3adc9cf1959236595c"
  },
  {
    "url": "assets/js/6.a8af8b6c.js",
    "revision": "faa6517e432e1dad26e26345a0adb9f0"
  },
  {
    "url": "assets/js/7.4767b329.js",
    "revision": "1b0acbc947e60f197d4372c9da8e20ab"
  },
  {
    "url": "assets/js/8.93b37612.js",
    "revision": "2611207302f14a0c7649917489256528"
  },
  {
    "url": "assets/js/9.00950b5a.js",
    "revision": "a0c82462ed0d47f9033517fba76369f0"
  },
  {
    "url": "assets/js/app.b79d5b13.js",
    "revision": "f54dcab5b51ae572c30d157d1a4a96a5"
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
    "revision": "69a3c8031d35b04bb6dde3a543d507c2"
  },
  {
    "url": "blogs/all/2021/css_picture.html",
    "revision": "e9299353be412eedaed37b0558e5801e"
  },
  {
    "url": "blogs/all/2021/Git.html",
    "revision": "5d51d31bee97c6f68b510e848104fd7c"
  },
  {
    "url": "blogs/all/2021/JavaScriptAll.html",
    "revision": "7f6b7bbc6a2e099501bdf69362453902"
  },
  {
    "url": "blogs/all/2021/js_mianshi.html",
    "revision": "2fe53299e49772fb7af91314e306fe01"
  },
  {
    "url": "blogs/all/2021/jsDom.html",
    "revision": "8249589526a17e02d07a5123d94d9be2"
  },
  {
    "url": "blogs/all/2021/mokuaihua.html",
    "revision": "5ac9c28773eef4e053bd3d637ddcfd72"
  },
  {
    "url": "blogs/all/2021/request.html",
    "revision": "683cdd81e3fade90b07e4796fcd2343e"
  },
  {
    "url": "blogs/all/2021/vscode.html",
    "revision": "8d6871787f4fe3401a837e08a3a15704"
  },
  {
    "url": "blogs/all/2021/Vue2.x.html",
    "revision": "0f1d38937819cbbbd99c994c5258e43e"
  },
  {
    "url": "blogs/all/2021/Vue3.html",
    "revision": "2438b4a785d20bcf8f961fa4cdc90b94"
  },
  {
    "url": "blogs/all/2022/buju.html",
    "revision": "6e3dd55dfaad46241480dd8f7c7e6aad"
  },
  {
    "url": "blogs/all/2022/contect.html",
    "revision": "48bed471e3881b1e7ab1890b96587d74"
  },
  {
    "url": "blogs/all/2022/daimayouhua.html",
    "revision": "80050216c9419e70f3409e464f3a950a"
  },
  {
    "url": "blogs/all/2022/js_methods.html",
    "revision": "451dc21cd734229b74adbcca5dcd09f1"
  },
  {
    "url": "blogs/all/2022/ku.html",
    "revision": "e1fe7505b1c67e41f65da6df678c0723"
  },
  {
    "url": "blogs/all/2022/TypeScript.html",
    "revision": "98e8761cb0229f8c0ab2e4f380c9eca3"
  },
  {
    "url": "blogs/all/2022/Vue_knowledge.html",
    "revision": "e691dd6516d8ea598719136181e4c816"
  },
  {
    "url": "blogs/all/2022/webRoad.html",
    "revision": "8389f20cf19c1f2a80a23866b0fe815e"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "20baf355c5c7ef1d91c5739ee384fc62"
  },
  {
    "url": "categories/es6/index.html",
    "revision": "b37d42880292b76c3d5605c4e68cfd34"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "046f39274e0c34f50b56d52dbcb54786"
  },
  {
    "url": "categories/index.html",
    "revision": "cf568a2240ad8d5c0e3f616ac983e2aa"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5f2357f37ba916e137eb0ebc8009bf71"
  },
  {
    "url": "categories/npm库/index.html",
    "revision": "4d5266a402bf57e0f94eb41dec06c075"
  },
  {
    "url": "categories/request/index.html",
    "revision": "69e579db17ca9535a9602323287f9fb1"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "d941dd921eb770aae4ee9040b5822ae7"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "e06abba68ef45debeb8c8be24a2951e5"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "ce68dc30d925a11c69ebdb623aebbc8b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "023047c8ea711b9cf92e956d0df27d11"
  },
  {
    "url": "categories/响应式/index.html",
    "revision": "ebabea91848c07f47c9af8ed7b12ab56"
  },
  {
    "url": "categories/布局/index.html",
    "revision": "e220778d328ec161af27f789ca559323"
  },
  {
    "url": "docs/tools/index.html",
    "revision": "2a4ded5c4bbef9f472b42be9f541d2dd"
  },
  {
    "url": "docs/tools/tool.html",
    "revision": "c55029532b77e037e498716ef30364b0"
  },
  {
    "url": "docs/tools/website.html",
    "revision": "6659caa72fb2a2021adc9c52ce1884f4"
  },
  {
    "url": "index.html",
    "revision": "9ff7aa8d76004bc9aed2e777b129fc77"
  },
  {
    "url": "logo.png",
    "revision": "ce6c1480ff811343030c233a43ace915"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "1767e65c30eb961093c00870ab53c6dc"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "3e8fb3b2feaca4e6bc55ee98bc80806b"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "b4483b5c76d046d833bf364c31376421"
  },
  {
    "url": "tag/index.html",
    "revision": "484d2d8d43a9186edc0c7498b5afde2d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "d333101530f5b5c4b3468f7bbe29b1ce"
  },
  {
    "url": "tag/rem/index.html",
    "revision": "f1a1a764b062bfd1cfab607845412cd9"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "bec6f66d9540146d67f5aa69d2334378"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "fbc8f8c05a59580baa2b560c8f3582a2"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "27d8d39e6ce87885272b413036507800"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "9eef2ae3c62e0c56bb276735d553e218"
  },
  {
    "url": "tag/图片/index.html",
    "revision": "3d1b4eadc877960c508cbca9e8a1298d"
  },
  {
    "url": "tag/媒体查询/index.html",
    "revision": "fe711acb3d8573854469a03964050a5a"
  },
  {
    "url": "tag/封装方法/index.html",
    "revision": "a6b451708c7aae2a91c82c694a2b66f1"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "376fc1cbacc4d87b0bc7d6fd54eb4708"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "1606ec1e60347351575baae76f091a92"
  },
  {
    "url": "tag/模块化/index.html",
    "revision": "073f3b70c4ee1c5be892236f0a2cbc4b"
  },
  {
    "url": "tag/请求/index.html",
    "revision": "06ce5016b032f0de409a2379632d7120"
  },
  {
    "url": "tag/资源/index.html",
    "revision": "b9bc7b91f4ba45a4fb959230fd98cb15"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "93ac0adb6140bdbca59e4383a67adab1"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "a9357b940363ccbb889fd1c48b306a09"
  },
  {
    "url": "timeline/index.html",
    "revision": "b9de74db8a9bcfbcf63198e69ef1f973"
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
