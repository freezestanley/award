(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{Dtc0:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("AXeg"),o=t("/MKj"),m=t("COQZ"),c=t("uJMD"),i=t("l3UX"),s=t("zRGG"),u=t("3a4m"),d=t.n(u),g=t("XfOM"),p=t.n(g);function E(e){var a=e.dispatch,t=e.gameList,o=void 0===t?[]:t,u=e.loading,g=e=>{d.a.push("/recharge?gameId=".concat(e.gameId))};return Object(n["useEffect"])(()=>{var e=c["a"].get("promotorId");e&&window.sessionStorage.setItem("promotorId",e),a({type:"global/gameList",payload:{page:1,limit:1e3}})},[a]),u?l.a.createElement(i["a"],null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:p.a.normal},0===o.length&&l.a.createElement(s["a"],null),o.map((e,a)=>l.a.createElement("div",{key:a,className:p.a.item},l.a.createElement(r["a"],{data:e}),l.a.createElement("button",{onClick:()=>g(e)},"\u5145\u503c")))),l.a.createElement(m["a"],null))}a["default"]=Object(o["c"])(e=>{return e.global})(E)},XfOM:function(e,a,t){e.exports={normal:"normal___2EbG1",item:"item___1tUJs"}}}]);