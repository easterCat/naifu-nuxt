import{_ as e}from"./AppHeader.c04b879b.js";import a from"./AppBanner.6fb6f63e.js";import t from"./index.d0c7a81e.js";import l from"./TemplateDetail.33142682.js";import{u as s}from"./index.180d84d9.js";import{I as n,r as o,a_ as u,x as p,J as r,K as i,a2 as c,_ as d,u as m,Z as v,aZ as b}from"./entry.ac71e7d2.js";import{l as _}from"./lodash.ea4d81e6.js";import"./AppAnimate.vue_vue_type_script_setup_true_lang.e5a0a712.js";import"./shop.c4e62d1a.js";import"./element-plus.ff0be31b.js";import"./plus.6d20b090.js";import"./vuedraggable.b6dc714b.js";import"./sortablejs.8210fcbe.js";import"./FixMenu.vue_vue_type_style_index_0_scoped_5afae692_lang.b1b754b9.js";/* empty css                                                                  */import"./copy-document.fff7f18a.js";const g={class:"home-page page"},f={class:"content"},j={class:"banner-con"},h={class:"control-blur-btns"},x=b(n({__name:"index",setup(n){const{TemplateApi:b}=s(),x=o(!0),{$store:y}=u(),T=o(!1),I=o(null),A=o(!1),S=o(1),w=o(50),k=o(""),z=o(""),C=o([]),M=e=>{I.value={...e},T.value=!0},V=_.exports.debounce((async e=>{if(e===z.value)return;z.value=e,A.value=!0;const a=await b.getTemplates({pageIndex:S.value,pageSize:w.value,searchTag:z.value});A.value=!1,(null==a?void 0:a.templates)&&0!==(null==a?void 0:a.templates.length)&&(C.value=(null==a?void 0:a.templates)?null==a?void 0:a.templates:[])}),1200),B=async e=>{(await b.likeTemplateById({id:e})).like&&console.log(" 喜爱成功:>> ")},F=async e=>{if(A.value)return;A.value=!0;const a=await b.getTemplates({pageIndex:e.pageIndex,pageSize:e.pageSize,searchTag:z.value});A.value=!1;const t=(null==a?void 0:a.templates)?null==a?void 0:a.templates:[];C.value=C.value.concat([...t])};return p((()=>{k.value=y.get("ip"),(async()=>{b.setIp();const e=Math.ceil(80*Math.random()),a=await b.getTemplates({pageIndex:e||1,pageSize:50});C.value=(null==a?void 0:a.templates)?null==a?void 0:a.templates:[]})()})),(s,n)=>{const o=e,u=a,p=t,b=l;return r(),i("div",g,[c(o),d("div",f,[d("div",j,[c(u,{placeholder:"请输入关键标签",onSearchChange:m(V)},null,8,["onSearchChange"])]),d("div",h,[d("button",{class:v(["btn btn-sm m-r-10",[x.value?"btn-accent":"btn-secondary"]]),onClick:n[0]||(n[0]=()=>x.value=!0)}," 模糊 ",2),d("button",{class:v(["btn btn-sm",[x.value?"btn-secondary":"btn-accent"]]),onClick:n[1]||(n[1]=()=>x.value=!1)}," 原图 ",2)]),c(p,{datas:C.value,flur:x.value,loading:A.value,"search-text":z.value,onLoad:F,onPreview:M,onFavorite:B},null,8,["datas","flur","loading","search-text"])]),c(b,{modelValue:T.value,"onUpdate:modelValue":n[2]||(n[2]=e=>T.value=e),"current-template":I.value},null,8,["modelValue","current-template"])])}}}),[["__scopeId","data-v-e67c7c1c"]]);export{x as default};
