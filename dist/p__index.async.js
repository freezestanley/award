(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3eXy":function(e,a,t){"use strict";t.d(a,"a",function(){return d}),t.d(a,"g",function(){return u}),t.d(a,"b",function(){return o}),t.d(a,"i",function(){return i}),t.d(a,"h",function(){return _}),t.d(a,"d",function(){return s}),t.d(a,"e",function(){return m}),t.d(a,"f",function(){return f}),t.d(a,"c",function(){return E});var n=t("vDqi"),r=t.n(n),c=t("8+Sn"),l="http://aliyun.eagle711.win:8082";function d(e){return r()({url:"".concat(l,"/total_user"),method:"POST",data:e})}function u(e){return r()({url:"".concat(l,"/login"),method:"POST",data:e})}function o(e){return r()({url:"".concat(l,"/verify_code"),method:"POST",data:e})}function i(e){return r()({url:"".concat(l,"/user_status"),method:"POST",headers:{token:e||c["a"].get("token")}})}function _(e,a){return r()({url:"".concat(l,"/update_token_address"),method:"POST",data:{address:e},headers:{token:a||c["a"].get("token")}})}function s(e){return r()({url:"".concat(l,"/receipt_address"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}function m(e){return r()({url:"".concat(l,"/complete_pay"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}function f(e){return r()({url:"".concat(l,"/share_qr"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}function E(e){return r()({url:"".concat(l,"/transfer_badge_link"),method:"POST",data:{},headers:{token:e||c["a"].get("token")}})}},"5j+T":function(e,a,t){"use strict";var n=t("qIgq"),r=t.n(n),c=t("q1tI"),l=t.n(c),d=t("KGmk"),u=t.n(d);a["a"]=(e=>{var a=Object(c["useState"])(e.disabled),t=r()(a,2),n=t[0];t[1];return l.a.createElement("div",{className:"".concat(n?u.a["award_get_disabled"]:u.a["award_get"]),onClick:e.clickhandle},e.txt)})},"8NDW":function(e,a,t){e.exports={award_txt:"award_txt___3alxF"}},"9LmV":function(e,a,t){e.exports={num:"num___3tWzr"}},DAru:function(e,a,t){"use strict";var n=t("qIgq"),r=t.n(n),c=t("q1tI"),l=t.n(c),d=t("Hlvg"),u=t.n(d),o=t("9LmV"),i=t.n(o),_=e=>{var a=Object(c["useState"])(e.txt.toString()),t=r()(a,2),n=t[0],d=t[1];return Object(c["useEffect"])(()=>{d(e.txt.toString())},[e.txt]),l.a.createElement("span",{className:i.a["num"]},n.split("").map((e,a)=>l.a.createElement("b",{key:a},e)))},s=t("3eXy");a["a"]=(e=>{var a=Object(c["useState"])(0),t=r()(a,2),n=t[0],d=t[1];return Object(c["useEffect"])(()=>{s["a"]().then(e=>{0===e.data.code&&d(e.data.data.total)})},[n]),l.a.createElement("div",{className:u.a["award"]},l.a.createElement("div",{className:u.a["award_content"]},l.a.createElement("div",{className:u.a["award_org"]}),e.title,l.a.createElement("div",{className:u.a["award_tips1"]},"\u57fa\u4e8e\u4ee5\u592a\u574a\u533a\u5757\u94fe\u53d1\u884c"),l.a.createElement("div",{className:u.a["award_tips"]},"\u516c\u5f00\u900f\u660e \u4e0d\u53ef\u7be1\u6539 \u6c38\u4e45\u7559\u5b58"),l.a.createElement("div",{className:u.a["award_ruby"]}),l.a.createElement("div",{className:u.a["award_num"]},l.a.createElement(_,{txt:n}),l.a.createElement("span",null,"\u4eba\u9886\u53d6")),e.children))})},GrO9:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("8NDW"),l=t.n(c);a["a"]=(e=>{return r.a.createElement("div",{className:l.a["award_txt"]},"\u53d1\u653e\u671f\u9650:",r.a.createElement("br",null),"2020.2.1 00:00:00 - 2020.4.1 23:59:59")})},Hlvg:function(e,a,t){e.exports={award:"award___1ifR6",award_content:"award_content___2YozC",award_tips:"award_tips___RtehY",award_tips1:"award_tips1___3Ai9D",award_ruby:"award_ruby___1a8Wu",award_num:"award_num___1uNJV",award_org:"award_org___2cH9f"}},KGmk:function(e,a,t){e.exports={award_get:"award_get___ca5Od",award_get_disabled:"award_get_disabled___3jeTF"}},"N8+v":function(e,a,t){e.exports={info:"info___dzN1k",projectInfo:"projectInfo___2mxJ6",info_block1:"info_block1___3MUCH",info_block2:"info_block2___1SlDt",info_block3:"info_block3___Q-SDz",email:"email___3aI93"}},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("XfOM"),l=t.n(c),d=(t("TSYQ"),t("3a4m")),u=t.n(d),o=t("N8+v"),i=t.n(o),_=e=>{return r.a.createElement("div",{className:i.a["info"]},r.a.createElement("div",{className:i.a["projectInfo"]},"\u9879\u76ee\u8bf4\u660e"),r.a.createElement("div",{className:i.a["info_block1"]},r.a.createElement("div",null,r.a.createElement("h1",null,"2019-nCoV \u65b0\u578b\u51a0\u72b6\u75c5\u6bd2",r.a.createElement("br",null),"\u6ce2\u53ca\u5168\u7403\u5927\u90e8\u5206\u5730\u533a")),r.a.createElement("dl",null,r.a.createElement("dt",null,r.a.createElement("div",null,"5,0000+\u4eba"),r.a.createElement("div",null,"30+\u5929"),r.a.createElement("div",null,"2,0000+\u4ebf\u5143")),r.a.createElement("dd",null,r.a.createElement("div",null,"\u611f\u67d3\u4eba\u6570"),r.a.createElement("div",null,"\u9694\u79bb\u5929\u6570"),r.a.createElement("div",null,"\u9020\u6210\u7684\u7ecf\u6d4e\u635f\u5931")))),r.a.createElement("div",{className:i.a["info_block2"]},r.a.createElement("h2",null,"\u57fa\u4e8e\u4ee5\u592a\u574a\u533a\u5757\u94fe\u53d1\u884c\u5171\u514b\u65f6\u8270",r.a.createElement("br",null),"\u6297\u51fb\u65b0\u51a0\u80ba\u708e\u7eaa\u5ff5\u5fbd\u7ae0"),r.a.createElement("p",null,"\u65b0\u51a0\u7eaa\u5ff5\u5fbd\u7ae0\u662f\u6211\u4eec\u5229\u7528\u533a\u5757\u94fe\u516c\u5f00\u900f\u660e\u3001\u4e0d\u53ef\u7be1\u6539\u7684\u7279\u6027\uff0c\u5728\u5176\u4e0a\u53d1\u884c\u6570\u5b57\u7535\u5b50\u6536\u85cf\u54c1\u7684\u4e00\u6b21\u5c1d\u8bd5\uff0c\u6570\u636e\u6765\u6e90\u4e8e\u516c\u5f00\u4fe1\u606f\uff0c\u9879\u76ee\u7531\u884c\u4e1a\u7231\u597d\u8005\u5fd7\u613f\u8fd0\u8425\uff0c\u4e0d\u4ee5\u76c8\u5229\u4e3a\u76ee\u7684\u3002"),r.a.createElement("p",null,"\u5fbd\u7ae0\u4ec5\u4e3a\u4e2a\u4eba\u6536\u85cf\u548c\u7eaa\u5ff5\u6240\u7528\uff0c\u60a8\u7b80\u5355\u6ce8\u518c\u5373\u53ef\u9886\u53d6\u5fbd\u7ae0\uff0c\u4e5f\u53ef\u70b9\u51fb\u5206\u4eab\u7ed9\u5176\u4ed6\u533a\u5757\u94fe\u7231\u597d\u8005\u3002")),r.a.createElement("div",{className:i.a["info_block3"]},r.a.createElement("div",null,"\u5982\u6709\u7591\u95ee\u6216\u60f3\u4e86\u89e3\u66f4\u591a\u54a8\u8be2,\u8bf7\u4e0e\u6211\u4eec\u4fdd\u6301\u8054\u7cfb"),r.a.createElement("div",{className:i.a["email"]},"huizhang@gmail.com")))},s=t("DAru"),m=t("5j+T"),f=t("GrO9"),E=t("8+Sn"),v=()=>r.a.createElement("div",{className:l.a["award_title"]},"\u6297\u51fb\u65b0\u51a0\u80ba\u708e\u7eaa\u5ff5\u5fbd\u7ae0");a["default"]=function(){var e=()=>u.a.push("/login"),a=E["a"].get("token");return Object(n["useEffect"])(()=>{a?u.a.push("/receive"):u.a.push("/")},[a]),r.a.createElement("div",{className:l.a["page"]},r.a.createElement(s["a"],{title:r.a.createElement(v,null)},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(m["a"],{clickhandle:e,txt:"\u514d \u8d39 \u9886 \u53d6"})),r.a.createElement(f["a"],null)),r.a.createElement(_,null))}},XfOM:function(e,a,t){e.exports={page:"page___1IPmL",award_title:"award_title___2gzuK"}}}]);