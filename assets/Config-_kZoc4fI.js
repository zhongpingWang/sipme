import{u as d,p as k}from"./util-slVEs6qk.js";import{_ as S,r as C,a as O,o as n,c as i,b,u as s,d as r,F as y,e as _,n as g,t as u,p as I,f as A}from"./index-DxgsaWoP.js";const h=f=>(I("data-v-1da914a6"),f=f(),A(),f),N=h(()=>r("a",{href:"#"},[r("i",{class:"arrow_left"})],-1)),J=h(()=>r("div",{class:"title"},"练习配置",-1)),B={class:"config-mode"},E=["onClick"],$={class:"config-mode"},j=["onClick"],w={class:"config"},D=["onClick"],F={class:"config-mode",style:{"justify-content":"center"}},V={href:"#/process/exists"},z={__name:"Config",setup(f){let e=C({color:localStorage.getItem("config-color")||"#409eff",selectKey:d.getSelectKey(),config:{process:k.keyDefine},modeArr:[{key:"read",text:"阅读"},{key:"recite",text:"背诵"}],sortArr:[{key:"sort",text:"顺序"},{key:"auto",text:"随机"}]});function x(l){e.color=l.rgba,localStorage.setItem("config-color",e.color)}function m(l){let t=e.selectKey;const a=t.indexOf(l);a>-1?t.splice(a,1):t.push(l),d.setSelectKey(JSON.stringify(t))}function v(l){let t=e.selectKey;e.sortArr.map(o=>o.key).forEach(o=>{const c=t.indexOf(o);c>-1&&t.splice(c,1)}),t.push(l),d.setSelectKey(JSON.stringify(t))}function K(l){let t=e.selectKey;e.modeArr.map(o=>o.key).forEach(o=>{const c=t.indexOf(o);c>-1&&t.splice(c,1)}),t.push(l),localStorage.setItem("config-test-key",JSON.stringify(t)),d.setSelectKey(JSON.stringify(t))}return(l,t)=>{const a=O("color-picker");return n(),i(y,null,[N,J,b(a,{class:"s-color",onChange:x,value:s(e).color},null,8,["value"]),r("div",B,[(n(!0),i(y,null,_(s(e).modeArr,(o,c)=>(n(),i("div",{onClick:p=>K(o.key),class:"config-item",style:g({backgroundColor:s(e).selectKey.indexOf(o.key)>-1?s(e).color:"",color:s(e).selectKey.indexOf(o.key)>-1?"#fff":""})},u(o.text),13,E))),256))]),r("div",$,[(n(!0),i(y,null,_(s(e).sortArr,(o,c)=>(n(),i("div",{onClick:p=>v(o.key),class:"config-item",style:g({backgroundColor:s(e).selectKey.indexOf(o.key)>-1?s(e).color:"",color:s(e).selectKey.indexOf(o.key)>-1?"#fff":""})},u(o.text),13,j))),256))]),r("div",w,[(n(!0),i(y,null,_(s(e).config.process,(o,c)=>(n(),i("div",{onClick:p=>m(c),class:"config-item",style:g({backgroundColor:s(e).selectKey.indexOf(c)>-1?s(e).color:"",color:s(e).selectKey.indexOf(c)>-1?"#fff":""})},u(s(k).keyText[o]),13,D))),256))]),r("div",F,[r("a",V,[r("div",{class:"config-item",style:g({backgroundColor:s(e).color,color:"#fff"})}," 开始 ",4)])])],64)}}},T=S(z,[["__scopeId","data-v-1da914a6"]]);export{T as default};
