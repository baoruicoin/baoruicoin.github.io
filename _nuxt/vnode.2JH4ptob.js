import{f$ as A,ft as N}from"./entry.U1878MSe.js";var o=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(o||{});const e=E=>{const _=A(E)?E:[E],S=[];return _.forEach(T=>{var r;A(T)?S.push(...e(T)):N(T)&&A(T.children)?S.push(...e(T.children)):(S.push(T),N(T)&&((r=T.component)!=null&&r.subTree)&&S.push(...e(T.component.subTree)))}),S};export{o as P,e as f};
