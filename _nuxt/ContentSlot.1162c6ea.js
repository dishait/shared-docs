import{a as h,ah as g,M as c,a8 as p,ai as y,N as w}from"./entry.a43e537d.js";import"./entry.4b40e708.js";const S=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=w(),{between:o,default:l}=g(),u=c(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:o,parent:i}},render({use:e,unwrap:i,fallbackSlot:o,between:l,tags:u,parent:n}){var a;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((a=n==null?void 0:n.parent)==null?void 0:a.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return o?o():p("div");if(!i)return[s()];const{flatUnwrap:d}=y(),f=d(s(),u);return l?f.flatMap((t,r)=>r===0?[t]:[l(),t]):f.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{S as default};