(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"3eXy":function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"g",function(){return u}),a.d(t,"b",function(){return s}),a.d(t,"i",function(){return _}),a.d(t,"h",function(){return l}),a.d(t,"d",function(){return i}),a.d(t,"e",function(){return m}),a.d(t,"f",function(){return p}),a.d(t,"c",function(){return f});var n=a("vDqi"),r=a.n(n),c=a("8+Sn"),o="http://aliyun.eagle711.win:8082";function d(e){return r()({url:"".concat(o,"/total_user"),method:"POST",data:e})}function u(e){return r()({url:"".concat(o,"/login"),method:"POST",data:e})}function s(e){return r()({url:"".concat(o,"/verify_code"),method:"POST",data:e})}function _(e){return r()({url:"".concat(o,"/user_status"),method:"POST",headers:{token:e||c["a"].get("token")}})}function l(e,t){return r()({url:"".concat(o,"/update_token_address"),method:"POST",data:{address:e},headers:{token:t||c["a"].get("token")}})}function i(e){return r()({url:"".concat(o,"/receipt_address"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}function m(e){return r()({url:"".concat(o,"/complete_pay"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}function p(e){return r()({url:"".concat(o,"/share_qr"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}function f(e){return r()({url:"".concat(o,"/transfer_badge_link"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}},"4xYk":function(e,t,a){e.exports={payment:"payment___3j-mg",login_title:"login_title___2j6zP",payment_content:"payment_content___144xH",shadow_box:"shadow_box___1ivrH",payment_link:"payment_link___2xIP9",payment_qr:"payment_qr___2qU69",payment_qrtxt:"payment_qrtxt___3Jf46",copy_link:"copy_link___189Sw",pay_done:"pay_done___1sfUE"}},ClOl:function(e,t,a){e.exports={close:"close___3D3q_"}},TZdb:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("ClOl"),o=a.n(c),d=a("3a4m"),u=a.n(d),s=a("8+Sn");t["a"]=(e=>{var t=()=>{var e=s["a"].get("token");e?u.a.push("/receive"):u.a.push("/")};return r.a.createElement("b",{className:o.a["close"],onClick:t})})},eN13:function(e,t,a){"use strict";a.r(t);var n=a("qIgq"),r=a.n(n),c=a("q1tI"),o=a.n(c),d=a("4xYk"),u=a.n(d),s=a("TZdb"),_=a("3a4m"),l=a.n(_),i=a("+QRC"),m=a.n(i),p=a("pf/J"),f=a("3eXy");t["default"]=(e=>{var t=()=>{f["e"]().then(e=>{0===e.data.code&&l.a.push("/pay")})},a=Object(c["useState"])(),n=r()(a,2),d=n[0],_=n[1],i=Object(c["useState"])(),k=r()(i,2),y=k[0],h=k[1],g=Object(c["useState"])(),v=r()(g,2),b=v[0],q=v[1];Object(c["useEffect"])(()=>{f["d"]().then(e=>{0===e.data.code&&(h(e.data.data.address),_(e.data.data.qr_url),q(e.data.data.fee))})},[]);var O=()=>{m()(y,{debug:!0,message:"Press #{key} to copy"}),p["a"].show("\u8bf7\u7c98\u8d34\u5206\u4eab\u7ed9\u4ed6\u4eba")};return o.a.createElement("div",{className:u.a["payment"]},o.a.createElement(s["a"],null),o.a.createElement("div",{className:u.a["login_title"]},"\u652f\u4ed8\u4e2d"),o.a.createElement("div",{className:u.a["payment_content"]},"\u533a\u5757\u5fbd\u7ae0\u9879\u76ee\u76ee\u524d\u7531\u7231\u597d\u8005\u5fd7\u613f\u8fd0\u8425\uff0c\u65e0\u5546\u4e1a\u5316\u6536\u5165\uff0c\u56e0\u6b64\uff0c\u8f6c\u51fa\u5fbd\u7ae0\u65f6\u9700\u8981\u60a8\u5411\u4ee5\u4e0b\u5730\u5740\u652f\u4ed8",o.a.createElement("span",null,b),",\u4ee5\u8986\u76d6\u533a\u5757\u94fe\u8f6c\u8d26\u8d39\u7528"),o.a.createElement("div",{className:u.a["shadow_box"]},o.a.createElement("div",{className:u.a["payment_link"]},y,o.a.createElement("div",{className:u.a["copy_link"],onClick:O},"\u590d\u5236\u94fe\u63a5")),o.a.createElement("img",{className:u.a["payment_qr"],src:d}),o.a.createElement("div",{className:u.a["payment_qrtxt"]},"\u957f\u6309\u4fdd\u5b58\u6536\u6b3e\u4e8c\u7ef4\u7801")),o.a.createElement("div",{className:u.a["pay_done"],onClick:t},"\u652f\u4ed8\u5b8c\u6210"))})}}]);