import a from"./AreaTitle.1e0e7e18.js";import{h as e}from"./pinia.7ac5f2a7.js";import{u as l}from"./index.c0d6e22f.js";import{u as t,a as s}from"./shop.8f25176c.js";import{e as o,a as i,Q as r,w as n,f as u,F as d,G as p,H as c,I as v,W as m,$ as f,Y as g,Z as b,L as _,U as h,u as y,a3 as j,a2 as w,a0 as k,a1 as z}from"./element-plus.3e7898c2.js";import{_ as T}from"./document-copy.9ed563a4.js";import{_ as C}from"./shopping-trolley.5f2a9482.js";import{d as E,_ as x}from"./entry.cf5e7fb4.js";/* empty css                                                                  */import"./lodash.93025024.js";import"./dayjs.3bf4ac2a.js";import"./store.e5acb8cd.js";import"./uuid.d56aad75.js";const S={class:"eh-con"},U=(a=>(k("data-v-5620b196"),a=a(),z(),a))((()=>m("span",{class:"eh-title-side-tip"},"(分类不好用,用搜索)",-1))),$={class:"flex justify-between m-b-10"},G={class:"m-r-12"},O={class:"demo-pagination-block"},A=x(o({__name:"gelbooru",props:{searchText:{type:String,default:""}},async setup(o){let k,z;const x=o,A=e().public.GELBOORU_TOKEN,{GelbooruApi:B}=l(),{copy:I}=t(),{addShop:L}=s(),V=i([]),F=i([]),N=i([]),W=i(1100),H=i(1),K=i(100),P=i(0),Q=([k,z]=r((()=>B.getList())),k=await k,z(),k);V.value=Q.data,n((()=>x.searchText),(a=>{q(a)})),n(W,(async a=>{var e;if(a){const l=await B.getTagsById({token:A,page:1,limit:100,category_id:a});F.value=l.data,P.value=null==(e=null==l?void 0:l.data)?void 0:e.length,Z()}}));const R=a=>{K.value=a,H.value=1,Z()},Y=a=>{H.value=a,Z()},Z=()=>{N.value=F.value.slice((H.value-1)*K.value,H.value*K.value)},q=E((async a=>{W.value=null;const e=await B.searchTags({token:"b8d9e7d1fa1dcc3e5116760c093be229",keyword:a,page:2,limit:100});F.value=e.data,100==e.data.length?P.value=e.data.length+1:P.value=e.data.length,Z()}),1500);return u((()=>{Z()})),(e,l)=>{const t=a,s=f.ElOption,o=f.ElSelect,i=C,r=f.ElButton,n=T,u=f.ElTableColumn,k=f.ElTable,z=f.ElPagination;return d(),p("div",S,[c(t,{title:"Gelbooru标签列表"},{titleSide:v((()=>[U])),_:1}),m("div",$,[c(o,{modelValue:W.value,"onUpdate:modelValue":l[0]||(l[0]=a=>W.value=a),placeholder:"类别",size:"large"},{default:v((()=>[(d(!0),p(g,null,b(V.value,(a=>(d(),_(s,{key:a.value,label:`${null==a?void 0:a.name}-${null==a?void 0:a.level}`,value:null==a?void 0:a.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),c(k,{class:"m-b-10",data:N.value,border:"",stripe:"",size:"large",style:{width:"100%"}},{default:v((()=>[c(u,{prop:"name",label:"原始标签",width:"320"},{default:v((a=>{var l;return[m("span",G,h((null==(l=a.row)?void 0:l.name)||""),1),c(r,{size:"small",circle:"",onClick:e=>{var l;return y(L)((null==(l=a.row)?void 0:l.name)||"")}},{default:v((()=>[j(e.$slots,"icon",{},(()=>[c(i)]),!0)])),_:2},1032,["onClick"]),c(r,{size:"small",circle:"",onClick:e=>{var l;return y(I)((null==(l=a.row)?void 0:l.name)||"")}},{default:v((()=>[j(e.$slots,"icon",{},(()=>[c(n)]),!0)])),_:2},1032,["onClick"])]})),_:3}),c(u,{prop:"t_name",label:"名称",width:"250"}),c(u,{prop:"t_name",label:"NSFW",width:"100"},{default:v((a=>[w(h(a.row.is_nsfw?"是":"否"),1)])),_:1}),c(u,{prop:"desc",label:"描述"}),c(u,{prop:"remarks",label:"详细"})])),_:3},8,["data"]),m("div",O,[c(z,{"current-page":H.value,"onUpdate:current-page":l[1]||(l[1]=a=>H.value=a),"page-size":K.value,"onUpdate:page-size":l[2]||(l[2]=a=>K.value=a),"page-sizes":[10,20,50,100],background:!0,layout:"total, sizes, prev, pager, next, jumper",total:P.value,onSizeChange:R,onCurrentChange:Y},null,8,["current-page","page-size","total"])])])}}}),[["__scopeId","data-v-5620b196"]]);export{A as default};
