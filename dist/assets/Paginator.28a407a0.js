import{J as z,cb as p,q as h,c as t,as as $,S as s,G as l,ah as S,K as d}from"./index.124d7191.js";import{i as w,j as k}from"./index.47a4ef2c.js";const b=P=>{var m;const e=z({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},P),[n,g]=p({pageSize:e.defaultPageSize,current:e.defaultCurrent});(m=e.setResetCallback)==null||m.call(e,()=>{g("current",e.defaultCurrent)});const a=h(()=>Math.ceil(e.total/n.pageSize)),f=h(()=>{const r=n.current,o=Math.max(2,r-Math.floor(e.maxShowPage/2));return Array.from({length:r-o},(x,u)=>o+u)}),C=h(()=>{const r=n.current,o=Math.min(a()-1,r+Math.floor(e.maxShowPage/2));return Array.from({length:o-r},(x,u)=>r+1+u)}),c={"@initial":"sm","@md":"md"},i=r=>{var o;g("current",r),(o=e.onChange)==null||o.call(e,r)};return t(s,{get when(){return!e.hideOnSinglePage||a()>1},get children(){return t($,{spacing:"$1",get children(){return[t(s,{get when(){return n.current!==1},get children(){return[t(l,{size:c,get colorScheme(){return e.colorScheme},onClick:()=>{i(1)},px:"$3",children:"1"}),t(S,{size:c,get icon(){return t(w,{})},"aria-label":"Previous",get colorScheme(){return e.colorScheme},onClick:()=>{i(n.current-1)},w:"2rem !important"})]}}),t(d,{get each(){return f()},children:r=>t(l,{size:c,get colorScheme(){return e.colorScheme},onClick:()=>{i(r)},px:r>10?"$2_5":"$3",children:r})}),t(l,{size:c,get colorScheme(){return e.colorScheme},variant:"solid",get px(){return n.current>10?"$2_5":"$3"},get children(){return n.current}}),t(d,{get each(){return C()},children:r=>t(l,{size:c,get colorScheme(){return e.colorScheme},onClick:()=>{i(r)},px:r>10?"$2_5":"$3",children:r})}),t(s,{get when(){return n.current!==a()},get children(){return[t(S,{size:c,get icon(){return t(k,{})},"aria-label":"Next",get colorScheme(){return e.colorScheme},onClick:()=>{i(n.current+1)},w:"2rem !important"}),t(l,{size:c,get colorScheme(){return e.colorScheme},onClick:()=>{i(a())},get px(){return a()>10?"$2_5":"$3"},get children(){return a()}})]}})]}})}})};export{b as P};
