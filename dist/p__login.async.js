(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2hfb":function(e,t,a){e.exports={login:"login___1whLd",login_title:"login_title___2aelP",login_title1:"login_title1___2sDxV",login_code:"login_code___dSZPF",login_input:"login_input___1UCAL",login_box:"login_box___35EjA",login_resend:"login_resend___3vmcB",login_send:"login_send___2d9iv"}},ClOl:function(e,t,a){e.exports={close:"close___3D3q_"}},TZdb:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=a("ClOl"),i=a.n(c),o=a("3a4m"),r=a.n(o),s=a("8+Sn");t["a"]=(e=>{var t=()=>{var e=s["a"].get("token");e?r.a.push("/receive"):r.a.push("/")};return l.a.createElement("b",{className:i.a["close"],onClick:t})})},gqXj:function(e,t,a){"use strict";a.r(t);var n=a("qIgq"),l=a.n(n),c=a("q1tI"),i=a.n(c),o=a("2hfb"),r=a.n(o),s=a("TZdb"),_=a("3a4m"),g=a.n(_),u=a("/MKj"),d=e=>{var t,a=Object(c["useState"])(!1),n=l()(a,2),o=n[0],s=n[1],_=Object(c["useState"])(!1),g=l()(_,2),u=g[0],d=g[1],m=Object(c["useState"])(),p=l()(m,2),v=(p[0],p[1],Object(c["useState"])()),b=l()(v,2),h=b[0],f=b[1],j=Object(c["useState"])("\u83b7\u53d6\u9a8c\u8bc1\u7801"),E=l()(j,2),O=E[0],y=E[1],k=Object(c["useState"])(!1),x=l()(k,2),S=x[0],N=x[1],C=Object(c["useRef"])(0),w=Object(c["useRef"])(),q=60;Object(c["useEffect"])(()=>{return()=>{clearInterval(C.current)}},[]);var I=e=>{var t=e.target.value.trim();S&&s(!!/^[0-9a-zA-Z]{6}$/.test(t)),f(t)},L=a=>{d(!1),N(!0),t=setInterval(()=>{q--,q<0?(clearInterval(t),q=60,y("\u83b7\u53d6\u9a8c\u8bc1\u7801"),d(!0)):y("\u91cd\u65b0\u53d1\u9001".concat(q))},1e3),C.current=t,e.verifyHandler()},Z=e=>{var t=e.target.value.trim();d(!!/^1[3456789]\d{9}$/.test(t))};return i.a.createElement("div",null,i.a.createElement("div",{className:r.a["login_box"]},i.a.createElement("input",{className:r.a["login_input"],placeholder:"\u624b\u673a\u53f7",type:"text",ref:w,maxLength:"11",onChange:e=>Z(e)}),i.a.createElement("input",{className:r.a["login_code"],placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",maxLength:"6",type:"text",onChange:e=>I(e)}),i.a.createElement("div",{className:r.a["login_resend"],style:{background:u?"#fff":"#eee"},onClick:u?e=>L(e):()=>{}},O)),i.a.createElement("div",{className:r.a["login_send"],onClick:o?t=>e.clickhandle(h):()=>{},style:{background:o?"#000":"#eee"}},"\u786e\u8ba4\u9886\u53d6"))},m=e=>{var t=Object(c["useState"])(!0),a=l()(t,2),n=(a[0],a[1]),o=Object(c["useState"])(),_=l()(o,2),u=(_[0],_[1],t=>{e.dispatch({type:"login/submitVert",payload:{phone:e.login.phone,verify_code:t},callback:e=>{console.log(e),g.a.push("/receive")}})}),m=t=>{e.dispatch({type:"login/getverify",payload:{phone:e.login.phone}}),n(!1)};return i.a.createElement("div",{className:r.a["login"]},i.a.createElement(s["a"],null),i.a.createElement("div",{className:r.a["login_title"]},"\u624b\u673a\u52a8\u6001\u7801\u767b\u9646"),i.a.createElement("div",{className:r.a["login_title1"]},"\u672a\u6ce8\u518c\u7684\u624b\u673a\u53f7\u9a8c\u8bc1\u540e\u5c06\u81ea\u52a8\u521b\u5efa\u65b0\u8d26\u53f7"),i.a.createElement(d,{clickhandle:e=>u(e),verifyHandler:e=>m(e)}),console.log(e))};t["default"]=Object(u["c"])(e=>e)(m)}}]);