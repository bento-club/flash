import{f as c,o as a,c as n,C as s,O as _,_ as d,a as o,i}from"./index-4f83b02f.js";const p=["type"],g=c({__name:"AppButton",props:{type:{},fullWidth:{type:Boolean,default:!1},variant:{default:"normal"}},emits:["click"],setup(l,{emit:e}){return(t,r)=>(a(),n("button",{type:t.type,class:_(["bg-[#7A5AF8] p-4 font-space-grotek font-medium capitalize text-white hover:bg-[#633CFF] active:bg-[#5024FF]",[{"w-full":t.fullWidth},[t.variant==="rounded"?"rounded-full":"rounded-lg"]]]),onClick:r[0]||(r[0]=b=>e("click"))},[s(t.$slots,"default")],10,p))}});const f={},u={class:"divider"};function m(l,e){return a(),n("hr",u)}const h=d(f,[["render",m],["__scopeId","data-v-bf9c9191"]]),v={class:"flex h-h-screen-d flex-col bg-[#0F172A] px-4 pb-6 pt-3"},y={class:"flex flex-grow flex-col"},k=c({__name:"BaseLayout",setup(l){return(e,t)=>(a(),n("article",v,[o("header",null,[s(e.$slots,"header")]),i(h,{class:"my-3"}),o("main",y,[s(e.$slots,"body")]),o("footer",null,[s(e.$slots,"footer")])]))}});export{g as _,k as a};
