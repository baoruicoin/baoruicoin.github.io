import{E as g}from"./el-divider.5H5nnzhV.js";import{d as C,r as N,F as b,o as x,M as L,N as $,t as n,v as a,x as s,y as o,G as m,P as q,Q as B,H as d,V as v,z as D,L as E,_ as V}from"./entry.U1878MSe.js";const F={class:"wrapper-news"},M={class:"wrapper-header"},P={class:"check-all"},R=["href"],S={class:"news"},z=["onClick"],A={class:"title"},G={class:"desc"},H={class:"news-row"},I=["onClick"],Q={class:"title"},T={class:"desc"},j=C({__name:"LatestNews",props:{limit:{type:Number,required:!0},offset:{type:Number,required:!0}},async setup(w){let _,p;const h=w,r=N(),f=async(e,i)=>{try{const c=await E.get("topic/",{limit:e,offset:i,state:"published"});r.value=c.results}catch{}},k=async()=>{const e=[f(h.limit,h.offset)];await Promise.all(e)};[_,p]=b(()=>k()),await _,p(),x(async()=>{await L()}),$();const u=(e,i)=>{window.location.href=e+(e==="/newsdetail"?"/"+i.toString():"")};return(e,i)=>{const c=g;return n(),a(d,null,[s("div",F,[s("div",M,[s("h2",null,o(e.$t("home.latest_news")),1),s("div",P,[s("a",{href:("scheme"in e?e.scheme:m(q))+("domain"in e?e.domain:m(B))+"/newslist/"},o(e.$t("home.check_all")),9,R)])]),s("div",S,[(n(!0),a(d,null,v(r.value.slice(0,3),(t,l)=>(n(),a("div",{class:"block",key:l,onClick:y=>u("/newsdetail",t.id)},[s("div",A,o(t.title),1),D(c,{style:{margin:"17px 0 20px 24px",width:"360px"}}),s("div",G,o(t.desc),1)],8,z))),128))])]),s("div",H,[(n(!0),a(d,null,v(r.value.slice(0,3),(t,l)=>(n(),a("div",{class:"block",key:l,onClick:y=>u("/newsdetail",t.id)},[s("div",Q,o(t.title),1),s("div",T,o(t.desc),1)],8,I))),128))])],64)}}}),O=V(j,[["__scopeId","data-v-079cd072"]]);export{O as _};
