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
    "revision": "47054ae54f80998f198a231c68c3e439"
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
    "url": "assets/js/1.46c28d2b.js",
    "revision": "9626d03ca431fe59249d52a8ace15d8b"
  },
  {
    "url": "assets/js/10.14d205cf.js",
    "revision": "f365ce346cb6ae7fa713edac0ea58909"
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
    "url": "assets/js/14.722fa0be.js",
    "revision": "709618493aee458e1be0a7da4abfce59"
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
    "url": "assets/js/19.f113e13a.js",
    "revision": "2a99261be7cf2ecb15ceaa03f0be2305"
  },
  {
    "url": "assets/js/20.e3b2e9a9.js",
    "revision": "b3ad194922e39f14bb533cc1beff234d"
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
    "url": "assets/js/24.6d6cbf6c.js",
    "revision": "b974f378fb1acad3859c48d0b3a3bbf4"
  },
  {
    "url": "assets/js/25.01b5dedb.js",
    "revision": "f24b6fdf1cdaf31c35502b02be04dda0"
  },
  {
    "url": "assets/js/26.faf334a2.js",
    "revision": "e5bf4c19289c04909275ba43edd318e4"
  },
  {
    "url": "assets/js/27.819f6530.js",
    "revision": "f25005a0953f0054e3c327bf5509e334"
  },
  {
    "url": "assets/js/28.a806d392.js",
    "revision": "07c6b4fa41737a6a428db2d68a106981"
  },
  {
    "url": "assets/js/29.09c2c568.js",
    "revision": "22aec5cbe700e53d499d50df01eb57fc"
  },
  {
    "url": "assets/js/3.aa0181c9.js",
    "revision": "382276a02eced495637f537e20357c48"
  },
  {
    "url": "assets/js/30.4af30c7b.js",
    "revision": "541bd7019ab9c0ba7cb47bac94344cb8"
  },
  {
    "url": "assets/js/31.ba438ec9.js",
    "revision": "10e395f343f546aa65002c78e41d6b1f"
  },
  {
    "url": "assets/js/32.efa7a917.js",
    "revision": "5cc8a8cb1baa059479e50d788d1c8a38"
  },
  {
    "url": "assets/js/33.3cef8bde.js",
    "revision": "1d58aca275d972395a5652b260a187c2"
  },
  {
    "url": "assets/js/34.0ff6ce1a.js",
    "revision": "2a6154f0239afdb50c2b9bd5e2be5662"
  },
  {
    "url": "assets/js/35.7872f062.js",
    "revision": "b14294e7669cfb955e1b21577a68e743"
  },
  {
    "url": "assets/js/4.3d806ed3.js",
    "revision": "56b7bb9c111f8dee0ae44ba2b1253dd3"
  },
  {
    "url": "assets/js/5.7e0e05eb.js",
    "revision": "85fe3321d248dc3adc9cf1959236595c"
  },
  {
    "url": "assets/js/6.a8af8b6c.js",
    "revision": "faa6517e432e1dad26e26345a0adb9f0"
  },
  {
    "url": "assets/js/7.4ed8b5dc.js",
    "revision": "b14554e723286f498f1e6c5ddc33286d"
  },
  {
    "url": "assets/js/8.93b37612.js",
    "revision": "2611207302f14a0c7649917489256528"
  },
  {
    "url": "assets/js/9.b52de598.js",
    "revision": "d100d1b284c27fd0624fd876c2ec7fd3"
  },
  {
    "url": "assets/js/app.889fe079.js",
    "revision": "d374505d06631560d20908d97becdad2"
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
    "revision": "32dbe67db4cd0fff3968e91d8d7e669e"
  },
  {
    "url": "blogs/all/2021/css_picture.html",
    "revision": "46fb668195626fdd0af04dd0e409e8f1"
  },
  {
    "url": "blogs/all/2021/Git.html",
    "revision": "f6f47b074ffce20f879649970d7b9b46"
  },
  {
    "url": "blogs/all/2021/JavaScriptAll.html",
    "revision": "3f43f0fb128db4e5a0ebfa7f93f04fd4"
  },
  {
    "url": "blogs/all/2021/js_mianshi.html",
    "revision": "ba9571c9524a5d32b259cbccc0eb204d"
  },
  {
    "url": "blogs/all/2021/jsDom.html",
    "revision": "0cf62f1b73afbbd30e695f8c1293efee"
  },
  {
    "url": "blogs/all/2021/mokuaihua.html",
    "revision": "3e88ade40b39bfe048c13eaecc037b06"
  },
  {
    "url": "blogs/all/2021/request.html",
    "revision": "2f39c4beea3cf8315fd0cba6bce002bd"
  },
  {
    "url": "blogs/all/2021/vscode.html",
    "revision": "76e50b8b33b1bcbdd2b9c14931c4d5d1"
  },
  {
    "url": "blogs/all/2021/Vue2.x.html",
    "revision": "841eb1ce8458934c70396169dd23f15d"
  },
  {
    "url": "blogs/all/2021/Vue3.html",
    "revision": "8618d9ade85029685f8348d21cda7626"
  },
  {
    "url": "blogs/all/2022/buju.html",
    "revision": "34df9e172f15b9a2c3f0bdf3db513013"
  },
  {
    "url": "blogs/all/2022/contect.html",
    "revision": "ce6546a638da355a25076617781efe98"
  },
  {
    "url": "blogs/all/2022/daimayouhua.html",
    "revision": "5ebb540afd0ff6665583f9bf7c605008"
  },
  {
    "url": "blogs/all/2022/js_methods.html",
    "revision": "434d17ca7bdcd2bfe3de55589800661e"
  },
  {
    "url": "blogs/all/2022/ku.html",
    "revision": "9ae78f731564578bed6b96ad03356e7e"
  },
  {
    "url": "blogs/all/2022/TypeScript.html",
    "revision": "11e71bbdf5a06c3b50c31c7c77b45aa2"
  },
  {
    "url": "blogs/all/2022/uniappWechatTop.html",
    "revision": "928c5e0323c706d14bdd9c0c7dc5a939"
  },
  {
    "url": "blogs/all/2022/Vue_knowledge.html",
    "revision": "49a58a77d386fc38fadcdfefa56b9526"
  },
  {
    "url": "blogs/all/2022/webRoad.html",
    "revision": "408684940a15eab7dbb7922cac575b70"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "3a59bb0fe7c249f1b0db883698115721"
  },
  {
    "url": "categories/es6/index.html",
    "revision": "030c91ebd1a60808b24522679e3dba7e"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "52c4bd968543a485d88e1cd99849b3f1"
  },
  {
    "url": "categories/index.html",
    "revision": "78085e5852130bf71deafafcab709b5c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "81b22bdfcd297ad6bfe7611e038ce3ed"
  },
  {
    "url": "categories/npm库/index.html",
    "revision": "ce98f539c90ff87ddbd065bd2b8e7e24"
  },
  {
    "url": "categories/request/index.html",
    "revision": "2162a943b90f971eb41de0921aaacd77"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "b5a889473f04b5f93e010df40d4319cf"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "e060ec6bb1500d830b64183748df814a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "375275ac9b5b1cb8fc56e6870a113c1c"
  },
  {
    "url": "categories/WeChat/index.html",
    "revision": "53f36bd8a877cd6080030eaeed40b167"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bce3b7f44e047cd26cb584f4de78f88d"
  },
  {
    "url": "categories/响应式/index.html",
    "revision": "b8dd08c2e20897b26be45094ed9233fe"
  },
  {
    "url": "categories/布局/index.html",
    "revision": "6a1d4a571ea0de43c51c9054804dae3b"
  },
  {
    "url": "docs/tools/index.html",
    "revision": "53f31f8b30405ef652374b15adbf7229"
  },
  {
    "url": "docs/tools/tool.html",
    "revision": "c5d67225037c301f405988e1f73c1373"
  },
  {
    "url": "docs/tools/website.html",
    "revision": "445b80d771e3cba28a5512be6db9712b"
  },
  {
    "url": "index.html",
    "revision": "808a094549ff8c9fcab74ff5c8380864"
  },
  {
    "url": "logo.png",
    "revision": "ce6c1480ff811343030c233a43ace915"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "ec0de586c37d1f9d87d6ecbcb7156120"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "7af362a113964093d715a2baa0c83c35"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "a1ede95202275165985520afe32ad1b8"
  },
  {
    "url": "tag/index.html",
    "revision": "bf01c773bc87a80c68d6ad260370a74d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "305266564242b7a0ec8fb545e7a51256"
  },
  {
    "url": "tag/rem/index.html",
    "revision": "bdc0c6f706877a6b79457976e89d3944"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "3c9292c000913f003038213865a2a328"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "c09c453776628b36ca041e76b2af74e4"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "e04814781be41700eace6352145f8bc8"
  },
  {
    "url": "tag/WeChat/index.html",
    "revision": "0136c4d544030b81a084e69c1804322c"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "6f1e00aacc98a89741dd4123b5c43e1b"
  },
  {
    "url": "tag/图片/index.html",
    "revision": "a0418a44592e13c28121033ca7ab6250"
  },
  {
    "url": "tag/媒体查询/index.html",
    "revision": "10eac79d5fccf5cf62b516b7e2ae0df3"
  },
  {
    "url": "tag/封装方法/index.html",
    "revision": "797fc584c8ee447151c4dc5006ce12a7"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "9254ea1b37088c0c759b4f2e322faea4"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "431c06d54e5c235fd1f47021609a7b7b"
  },
  {
    "url": "tag/模块化/index.html",
    "revision": "afa9cfe93c271e2c4c2f62fc61c4ecaa"
  },
  {
    "url": "tag/请求/index.html",
    "revision": "39314e0aada3cd7086b9ddf209f89e00"
  },
  {
    "url": "tag/资源/index.html",
    "revision": "1ea043ab42e77c88d42cd0af04d293bc"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "bdb0ea38c02b36922b176aabd976bc58"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "77003c94688c7619a0b85916d5eb61a3"
  },
  {
    "url": "timeline/index.html",
    "revision": "2922003933c04bef598aea0357348689"
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
