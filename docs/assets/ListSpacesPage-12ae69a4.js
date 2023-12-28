import{e as k,Z as D,t as j,D as M,o as A,a as B,P as V,_ as g}from"./AppDivider-9df87067.js";import{X as I}from"./XIcon-31f22569.js";import{d as _,o as i,c as f,w as n,b as a,u as l,a as t,f as v,g as P,e as y,t as m,h as N,_ as w,i as C,j as $,k as z,n as x,l as T}from"./index-415df3d3.js";import{T as U,_ as E}from"./BaseLayout.vue_vue_type_script_setup_true_lang-6f4d2e32.js";import{S}from"./SpaceIcon-2be2dda8.js";import{P as F}from"./PlusIcon-5a612592.js";const H={class:"px-x4 py-x3"},X={class:"flex items-center justify-between"},Z={class:"flex items-center"},L=_({__name:"AppDialog",props:{open:{type:Boolean},title:{},description:{},icon:{}},emits:["update:open","close"],setup(d,{emit:s}){const o=s;function c(e){o("update:open",e),e||o("close")}return(e,p)=>(i(),f(l(V),{open:e.open,"onUpdate:open":c},{default:n(()=>[a(l(B),null,{default:n(()=>[a(l(k),{class:"overlay"}),a(l(D),{as:"article",class:"content rounded-medium bg-surface-primary text-primary py-x3 border-primary border"},{default:n(()=>[t("header",H,[t("div",X,[t("div",Z,[e.icon?(i(),f(v(e.icon),{key:0,class:"text-surface-brand h-6 w-auto"})):P("",!0),a(l(j),{class:"text-heading-small font-space-grotesk ml-2 font-bold capitalize"},{default:n(()=>[y(m(e.title),1)]),_:1})]),a(l(M),{class:"flex items-center",type:"button"},{default:n(()=>[a(I,{class:"text-surface-tertiary h-6 w-auto"})]),_:1})]),a(l(A),{class:"mt-x2 text-paragraph-small text-secondary"},{default:n(()=>[y(m(e.description),1)]),_:1})]),t("section",null,[N(e.$slots,"default",{},void 0,!0)])]),_:3})]),_:3})]),_:3},8,["open"]))}});const R=w(L,[["__scopeId","data-v-2b16aac0"]]),W={class:"px-x4 py-x3"},Y={class:"px-x4 py-x3"},q=_({__name:"CreateSpaceDialog",props:{open:{type:Boolean}},emits:["close","create","update:open"],setup(d,{emit:s}){const o=s;function c(r){o("update:open",r),r||o("close")}const e=C("");function p(){o("close"),o("create",e.value)}return(r,u)=>(i(),f(R,{open:r.open,title:"create space",icon:S,description:"Create a custom space to start sharing files to any devices connected on the internet","onUpdate:open":c,onClose:u[1]||(u[1]=b=>o("close"))},{default:n(()=>[t("div",W,[a(U,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=b=>e.value=b),label:"Space name",placeholder:"Space name","hide-label":"","full-width":""},null,8,["modelValue"])]),t("div",Y,[a(g,{"full-width":"",onClick:p},{default:n(()=>[y(" create space ")]),_:1})])]),_:1},8,["open"]))}}),G={},J={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=t("g",null,[t("path",{d:"M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),O=[K];function Q(d,s){return i(),$("svg",J,O)}const ee=w(G,[["render",Q]]),te={class:"font-space-grotesk flex items-center justify-between"},ae={class:"flex items-center"},se={class:"ml-x2 text-primary font-bold capitalize"},oe={class:"text-paragraph-x-small mt-x2 text-secondary"},h=_({__name:"SpaceCard",props:{state:{default:"base"},name:{default:"---"},type:{default:"space"},createdAt:{},count:{default:0}},setup(d){const s=d,o={local:ee,space:S},c=z(()=>s.createdAt?`${s.createdAt.getDate()}/${s.createdAt.getMonth()+1}/${s.createdAt.getFullYear()}`:"---");return(e,p)=>(i(),$("button",{class:x(["rounded-medium p-x4 w-full text-left border",[e.state==="active"?"shadow-brand-focus-ring border-brand":"border-primary"]])},[t("header",te,[t("section",ae,[(i(),f(v(o[e.type]),{class:x(["w-auto h-6",[e.state==="active"?"text-surface-brand":"text-surface-tertiary"]])},null,8,["class"])),t("h3",se,m(e.name),1)]),t("section",{class:x(["text-paragraph-x-small flex items-center justify-center w-6 h-6 font-bold border rounded-full",[e.state==="active"?"border-brand text-brand-purple bg-opacity-35 bg-surface-brand":"text-placeholder bg-surface-secondary border-primary"]])},m(e.count),3)]),t("p",oe," Space created on "+m(c.value),1)],2))}}),ne=t("div",{class:"mb-x3"},[t("h1",{class:"font-space-grotesk text-heading-medium font-bold text-primary"}," Hey, Shadow! 👋 "),t("p",{class:"mt-x2 text-sm text-[#CBD5E1]"}," Share files by joining or creating a room ")],-1),ce={class:"flex flex-grow flex-col justify-between"},re=t("h2",{class:"py-x3 text-overline uppercase text-placeholder"}," your spaces ",-1),le={class:"mt-x3 flex flex-col gap-x6"},ie={class:"flex justify-center"},de={class:"flex flex-col items-center justify-center"},he=_({__name:"ListSpacesPage",setup(d){const s=C("listing");function o(){s.value="create"}function c(){s.value="listing"}const e=T();function p(r){e.push({name:"space",params:{name:r}})}return(r,u)=>(i(),f(E,null,{header:n(()=>[ne]),body:n(()=>[t("div",ce,[t("div",null,[re,t("div",le,[a(h,{type:"local","created-at":new Date,name:"local network space"},null,8,["created-at"]),a(h,{state:"active",name:"Milky way galaxy","created-at":new Date,count:14},null,8,["created-at"]),a(h,{state:"active",name:"andromeda","created-at":new Date,count:69},null,8,["created-at"])])]),t("div",ie,[t("div",de,[a(g,{id:"create-space-btn",variant:"rounded",label:"create space",onClick:o},{default:n(()=>[a(F,{class:"h-auto w-8 text-white"})]),_:1})])])]),a(q,{open:s.value==="create",onClose:c,onCreate:p},null,8,["open"])]),_:1}))}});export{he as default};
