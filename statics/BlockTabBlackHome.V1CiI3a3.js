1import{d as x,a0 as b,r as v,v as c,x as V,z as C,A as i,fl as R,t as a,H as h,V as w,O as N,B as E,y as H,fk as O,_ as S}from"./entry.U1878MSe.js";const T={style:{display:"flex","justify-content":"center",margin:"15px 0"}},j={class:"wrapper-tabs"},q=x({__name:"BlockTabBlackHome",props:{titles:{type:Array,required:!0},isRouter:{type:Boolean,default:!0}},emits:["radioClick"],setup(o,{emit:d}){const s=o,u=b(),n={index:"realtime_quotes",categories:"category",ranking:"gainerList",globaltrend:"global_metrics",news:"news"},m=u.name,_=Object.keys(n).find(r=>m.indexOf(r)>-1),p=n[_],t=v(s.isRouter?p:s.titles[0].key),k=d,f=()=>{k("radioClick",t.value)};return(r,l)=>{const y=O,B=R;return a(),c("div",T,[V("div",j,[C(B,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),onChange:f},{default:i(()=>[(a(!0),c(h,null,w(o.titles,(e,g)=>(a(),N(y,{key:g,label:e.key},{default:i(()=>[E(H(e.text),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])])}}}),L=S(q,[["__scopeId","data-v-cfab3dd7"]]);export{L as B};
