(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{JtdR:function(e,a,t){"use strict";t.r(a);var n=t("p0pE"),l=t.n(n),m=t("Y/ft"),c=t.n(m),r=t("q1tI"),i=t.n(r),o=t("D7rQ"),s=t("ZhIB"),u=t.n(s),d=t("uJMD"),E=t("M8b6"),p=t("l3UX"),v=t("zRGG"),g=t("/MKj"),f=t("kP0M"),b=t.n(f);function w(e){var a=e.name,t=e.value;return i.a.createElement("div",{className:"order-item"},i.a.createElement("span",null,a),i.a.createElement("span",null,t))}function M(e){var a=e.data,t=void 0===a?{}:a;return i.a.createElement("div",{className:b.a.gameinfo},i.a.createElement("img",{src:t.gameLogoUrl,alt:"avatar"}),i.a.createElement("div",{className:"txt"},i.a.createElement("div",null,i.a.createElement("span",null,t.gameName),i.a.createElement("time",null,t.time))),i.a.createElement("span",{className:"gb"},i.a.createElement("span",null,t.status),i.a.createElement("br",null),i.a.createElement("i",null,t.coinAmount,t.coinUnit)))}function N(e){var a=e.dispatch,t=e.user,n=(e.global,c()(e,["dispatch","user","global"])),m=t.myTopUps,s=void 0===m?[]:m;return Object(r["useEffect"])(()=>{a({type:"user/getMyTopUps",payload:{page:1,limit:1e3}})},[a]),n.loading.models.user?i.a.createElement(p["a"],null):i.a.createElement(i.a.Fragment,null,i.a.createElement(E["a"],{title:"\u6211\u7684\u5145\u503c"}),i.a.createElement("div",{style:{padding:"60px 0 30px"},className:b.a.record},0===s.length?i.a.createElement(v["a"],null):i.a.createElement(o["a"],{animated:!0,defaultActiveKey:"0"},s.map((e,a)=>{return i.a.createElement(o["a"].Item,{key:a,className:"item",title:i.a.createElement(M,{data:l()({},e,{time:Object(d["c"])(e.time,"YYYY-MM-DD HH:mm:ss")})})},i.a.createElement("div",{className:"order"},i.a.createElement(w,{name:"\u8ba2\u5355\u53f7",value:e.orderId}),i.a.createElement(w,{name:"\u6e38\u620f\u8d26\u53f7",value:e.gameUsername}),i.a.createElement(w,{name:"\u6240\u5728\u533a\u670d",value:e.gameRegion}),i.a.createElement(w,{name:"\u5145\u503c\u91d1\u989d",value:"".concat(Object(d["e"])(e.topUpAmount),"\u5143")}),i.a.createElement(w,{name:"\u5145\u503c\u72b6\u6001",value:e.status}),i.a.createElement(w,{name:"\u5b9e\u9645\u4ed8\u6b3e",value:"".concat(Object(d["e"])(e.priceAmount),"\u5143")}),i.a.createElement(w,{name:"\u6e38\u620f\u5e01",value:"".concat(u()(e.coinAmount).format("0,0")).concat(e.coinUnit)})))}))))}a["default"]=Object(g["c"])(e=>e)(N)},kP0M:function(e,a,t){e.exports={record:"record___3dwLw",gameinfo:"gameinfo___1vqTh"}}}]);