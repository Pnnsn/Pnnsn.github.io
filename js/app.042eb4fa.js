(function(t){function e(e){for(var o,l,a=e[0],s=e[1],d=e[2],h=0,c=[];h<a.length;h++)l=a[h],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&c.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(e);while(c.length)c.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},i=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("f195"),r=n.n(o);r.a},"41df":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Layout",[n("Header",{staticStyle:{padding:"0 8px",height:"60px","z-index":"99"},style:{position:"fixed",width:"100%"}},[n("nav",{staticClass:"text-center"},[n("i-row",[n("i-col",{attrs:{span:"6"}},[n("a",{staticStyle:{color:"#fff","font-size":"2em"},attrs:{href:"#"}},[t._v("PNav")])]),n("i-col",{attrs:{span:"18"}},[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"home"}},t._l(t.sites,(function(e){return n("MenuItem",{key:t.sites.indexOf(e),attrs:{name:e.name}},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.label))])])})),1)],1)],1)],1)]),n("main",[n("Content",{style:{margin:"64px 16px 0",minHeight:"580px"}},[n("List",t._l(t.apps,(function(e){return n("ListItem",{key:t.apps.indexOf(e)},[n("ListItemMeta",[n("template",{slot:"avatar"},[n("a",{attrs:{href:e.homeUrl}},[n("img",{staticStyle:{"border-radius":"2px",width:"48px",height:"48px"},attrs:{src:e.brandUrl}})])]),n("template",{slot:"title"},[n("a",{staticStyle:{"font-size":"1.2em"},attrs:{href:e.homeUrl}},[t._v(t._s(e.name))])]),n("template",{slot:"description"},[n("p",[t._v(t._s(e.description))])])],2),n("template",{slot:"action"},[n("Button",{attrs:{type:"primary",shape:"circle",to:e.downloadUrl}},[n("Icon",{attrs:{type:"md-download"}})],1)],1)],2)})),1)],1)],1),n("Footer",{staticClass:"text-center"},[n("p",{staticClass:"text-center"},[t._v("2019 © PNav")])])],1)],1)},a=[],s={name:"Home",props:{},data:function(){return{carousel:0,sites:[{label:"首页",name:"home",url:"#"},{label:"优惠",name:"sales",url:"/sales"},{label:"更多",name:"more",url:"/more"}],apps:[{name:"含羞草",description:"成人短片线上看，永久免费，无需翻墙。",keywords:"hxc,含羞草,短片,在线,高清",brandUrl:"https://i.loli.net/2019/11/14/OLQA7dTgEeJb2DF.png",homeUrl:"http://akhxc.com/?AgentID=143121",inviteCode:"143121",downloadUrl:"http://akhxc.com/?AgentID=143121"},{name:"抖阴",description:"抖阴小视频，抖阴国产短视频，万部热门成人视频各种分类全都有！支持原创，与百万用户分享视频，拥有顶级流量现金红利！还有部分城市线下微信交友群等你加入！",keywords:"抖阴,推荐,主编,日本,每日,有爱,帖子,视频,爱v,艾薇儿",brandUrl:"https://i.loli.net/2019/11/14/IhaSMHXPAsFEuvl.png",homeUrl:"http://sharedy.me/share/KQTOB",inviteCode:"KQTOB",downloadUrl:"http://sharedy.me/share/KQTOB"},{name:"91AV",description:"给你的永远是经典，100万部精品，每日更新300部。",keywords:"91,推荐,主编,日本,每日,有爱,帖子,视频,爱v,艾薇儿",brandUrl:"https://i.loli.net/2019/11/14/BZmqxF2unJrHR8i.png",homeUrl:"http://a.i91av.org//index/aff/cpJ8",inviteCode:"cpJ8",downloadUrl:"http://a.i91av.org//index/aff/cpJ8"},{name:"Fulao2",description:"最强福利视频神器免费看到爽！Fulao2扶佬二视频APP是一款无码步兵福利资源最丰富的好东西。每天更新你懂的福利视频，免费看片，数百部日本女星作品，骑兵步兵任君挑选，拿起手机痛快解放，还在求上车吗？快来下载老司机都推荐的看片神器吧！",keywords:"步兵,福利资源,福利视频,免费看片,上车,老司机,看片神器",brandUrl:"https://i.loli.net/2019/11/14/Q3RP2zdDp5vtgWK.png",homeUrl:"https://lihi1.com/K4qxU",inviteCode:"uf571f4",downloadUrl:"https://lihi1.com/K4qxU"},{name:"大番号",description:"环球约炮，就上大番号！华人“兴趣”社交，“约炮”看片神器，100万+AV无码资源免费看。精主大佬手把手教约，撩妹成功率翻倍。",keywords:"步兵,福利资源,福利视频,免费看片,上车,老司机,看片神器",brandUrl:"https://i.loli.net/2019/11/14/83PuA9GWpr4jSHO.png",homeUrl:"https://share.33dfh.site/?code=D2338F109H",inviteCode:"D2338F109H",downloadUrl:"https://share.33dfh.site/?code=D2338F109H"},{name:"鲍鱼TV",description:"免費高清急速秒播,提供最新最快最全的高清H片免费在线秒播。",keywords:"baoyu baoyutv 鲍鱼 鲍鱼TV tese tesetv 特色 特色TV 自拍 无码 有码 欧美 情色 动漫 猎奇 种子 番号",brandUrl:"https://i.loli.net/2019/11/14/ym7v92pAtXfabg8.png",homeUrl:"baoyu16.com",inviteCode:"",downloadUrl:"baoyu16.com"},{name:"春水堂",description:"春水堂视频播放器APP，亚洲最强安卓苹果看片神器，一款老司机观看在线视频必备的看片神器，提供海量高画质你懂的视频，汇聚精彩福利短片，手机在线每日更新，打飞机专用的宅男福利视频软件。",keywords:"春水堂手机版下载,春水堂,春水堂最新地址,春水堂进不去,春水堂公众号,春水堂最新发布地址,春水堂最新下载地址,https://春水堂,春水堂永久下载地址,春水堂打不开,春水堂会员,春水堂下载不了,xp10.app,黄瓜视频,黄瓜视频最新地址,红杏视频,红杏视频最新地址",brandUrl:"https://i.loli.net/2019/11/14/vdaxVl8hMUOWCzP.png",homeUrl:"http://zbsccj.com/share?code=EVPXC",inviteCode:"EVPXC",downloadUrl:"http://zbsccj.com/share?code=EVPXC"},{name:"国语对白大全",description:"草榴社区官方精选视频APP",keywords:"91,草榴,推荐,主编,日本,每日,有爱,帖子,视频,爱v,艾薇儿",brandUrl:"https://i.loli.net/2019/11/14/q2KnLWvyS83UTha.png",homeUrl:"https://www.clxxx.me/index.html?code=K8C8MJ",inviteCode:"K8C8MJ",downloadUrl:"https://www.clxxx.me/index.html?code=K8C8MJ"},{name:"樱桃视频",description:"午夜降临看点爽的",keywords:"岛国大片,国产爽片",brandUrl:"https://i.loli.net/2019/11/14/4CpxfWGVhzXy5v3.png",homeUrl:"http://yt05.top/?i=MUIN2D",inviteCode:"MUIN2D",downloadUrl:"http://yt05.top/?i=MUIN2D"},{name:"大长精",description:"高清视频，海量资源，你想看的，这里都有",keywords:"dcj,大长精,国产高清",brandUrl:"https://i.loli.net/2019/11/14/XstLQaWdEKn1S5O.png",homeUrl:"https://share.dcj6.site/?code=MHTY2ADB",inviteCode:"MHTY2ADB",downloadUrl:"https://share.dcj6.site/?code=MHTY2ADB"},{name:"红粉视频",description:"红粉高清福利视频app绿色无毒，永久免费在线观看，无需翻墙！CDN加速，全网最快告别等待缓存！",keywords:"hf,红粉,视频,小视频,大长精,国产高清",brandUrl:"https://i.loli.net/2019/11/14/o1WdKZBCJHhL8tR.png",homeUrl:"https://share.hfsp01.xyz?channel=invite&code=7996I4",inviteCode:"7996I4",downloadUrl:"https://share.hfsp01.xyz?channel=invite&code=7996I4"},{name:"爱私欲",description:"每日更新海量视频，无需翻墙，永久免费，7000万用户共同选择。",keywords:"爱私欲,爱私欲app,爱私欲下载,爱私欲app",brandUrl:"https://i.loli.net/2019/11/14/GlgR24YCvAPeBTd.png",homeUrl:"http://isiyu.me/share/16Q3Y",inviteCode:"16Q3Y",downloadUrl:"http://isiyu.me/share/16Q3Y"},{name:"Lutube",description:"Lutube视频播放器APP是一款非常精彩便捷的手机视频影音播放器手机软件，这款播放器绝对是老司机的最爱。为你提供大量福利视频，还有多种分类，海量的热门电影电视剧及综艺节目和原创的短视频在线高清极速观看更清晰流畅。",keywords:"lutube官方网址下载地址,lutube官方网址下载,Lutube下载,Lutube安装,lutube官网ios下载,lutube苹果版下载app",brandUrl:"https://i.loli.net/2019/11/14/BoUt8gei3TSAKQN.png",homeUrl:"https://lihi1.com/tjxT4",inviteCode:"uk27510090",downloadUrl:"https://lihi1.com/tjxT4"},{name:"工口君",description:"韩漫、H漫、工口漫；里番、肉番、宅福利。同人志原创精选，歪漫污漫的天堂。做任务分享赢C币，可永久免费看。",keywords:"韩漫,H漫,工口漫,里番,肉番,宅福利",brandUrl:"https://i.loli.net/2019/11/14/E63nti4apXfyJPM.png",homeUrl:"https://erokun.me/share/DFU4N",inviteCode:"DFU4N",downloadUrl:"https://erokun.me/share/DFU4N"},{name:"迷妹漫画",description:"老司机专用动漫软件，海量资源，告诉免费看。谜妹漫画 Mimei 是最火的动漫软件，拥有丰富资源，包括漫画、动画、小说，每天更新最优质的内容，带你一起进入动漫世界",keywords:"谜妹,迷妹,h动漫,h漫画,污漫画,成人漫画,色情动漫,成人动漫,老司机,在线动漫,免费漫画,免费动画,免费小说,免费看片,二次元线上看,动漫线上看,动漫软件,动漫神器,看片神器,老司机,高清在线观看,安卓版动漫, 苹果版动漫",brandUrl:"https://i.loli.net/2019/11/14/C9oDZFU2ilt86pH.png",homeUrl:"http://mimei.app",inviteCode:"",downloadUrl:"http://mimei.app"},{name:"蜜桃视频",description:"宅男必备神器，赏AV、观自拍、撸H漫，永久免费无广告",keywords:"",brandUrl:"https://i.loli.net/2019/11/14/MCs2tegSaz1VJIK.png",homeUrl:"http://mt05.cc",inviteCode:"",downloadUrl:"http://mt05.cc"},{name:"柠檬视频",description:"高清流畅 上千小视频每日免费看，苍老师等你。",keywords:"网红视频,嫩模写真,X爱实录,绅士福利,色情次元,Pr福利姬",brandUrl:"https://i.loli.net/2019/11/14/lFzIUij4kqR3LNA.png",homeUrl:"https://video.lvhd99.com//index/register/register/invite_code/82487898.html",inviteCode:"82487898",downloadUrl:"https://video.lvhd99.com//index/register/register/invite_code/82487898.html"},{name:"水蜜桃",description:"随时随地想看就看，独家资源每日更新。",keywords:"",brandUrl:"https://i.loli.net/2019/11/14/VwErS9ZtnjofTqc.jpg",homeUrl:"http://www.51smt1.xyz/?smt=Bs6c",inviteCode:"Bs6c",downloadUrl:"http://www.51smt1.xyz/?smt=Bs6c"},{name:"天使视频",description:"无广告在线看片",keywords:"",brandUrl:"https://i.loli.net/2019/11/14/hNDsf2lgELRaXvK.png",homeUrl:"http://tt.flyjumpol.com/?yqm=CD5E",inviteCode:"CD5E",downloadUrl:"http://tt.flyjumpol.com/?yqm=CD5E"}]}}},d=s,p=(n("d8f4"),n("2877")),h=Object(p["a"])(d,l,a,!1,null,"bb19febe",null),c=h.exports,m={name:"App",components:{Home:c}},u=m,f=(n("034f"),Object(p["a"])(u,r,i,!1,null,null,null)),v=f.exports,U=n("f825"),y=n.n(U);n("f8ce");o["default"].use(y.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(v)}}).$mount("#app")},d8f4:function(t,e,n){"use strict";var o=n("41df"),r=n.n(o);r.a},f195:function(t,e,n){}});
//# sourceMappingURL=app.042eb4fa.js.map