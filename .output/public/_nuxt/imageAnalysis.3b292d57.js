import e from"./Icon.b50eae24.js";import a from"./AreaTitle.d2cca97e.js";import{u as s}from"./index.131f7cc9.js";import{h as l,u as t}from"./pinia.17670579.js";import{a as n,e as i}from"./shop.d3010ead.js";import{e as o,a as c,f as m,G as d,H as u,Z as p,_ as r,J as b,W as v,u as f,N as _,L as g,i as y,$ as j,a0 as k,a4 as h,a5 as C,a6 as x}from"./element-plus.fe53e503.js";import{_ as A}from"./upload-filled.e21dedde.js";import{_ as S}from"./entry.0f1f4d34.js";import"./lodash.cb875ed5.js";import"./dayjs.3bf4ac2a.js";import"./store.e5acb8cd.js";/* empty css                                                                  */import"./uuid.d56aad75.js";import"./vue3-clipboard-es.62b9b053.js";const I=e=>(C("data-v-486005d5"),e=e(),x(),e),w={class:"tranfer-con"},P={class:"button-con"},z={class:"el-icon el-icon--upload"},D=I((()=>p("div",{class:"el-upload__text"},[r(" 拖动图片到当前区域 或 "),p("em",null,"点击上传")],-1))),E={class:"upload-image-list-item"},L=["onClick"],$=["src"],J={class:"m-l-6"},N=["checked"],T={class:"el-upload-list__item-actions"},U={class:"m-l-10"},B=I((()=>p("div",{class:"el-upload__tip"},"jpg/png文件格式",-1))),F=I((()=>p("span",{style:{"font-size":"12px"}},"(基于deepdanbooru解析)",-1))),G={class:"tags-con"},H={class:"badge m-l-8"},K=S(o({__name:"imageAnalysis",emits:["setPreview"],setup(o,{emit:C}){const x="prompt_history",{DanbooruApi:S}=s(),I=l(),{$store:K}=t(),{setShop:O}=n(),R=c(`${I.public.FLASK_BASE_API}/danbooru/upload`),W=c([]),Z=c(0),q=c([]),M=c(""),Q=c([]),V=c(!1);m((()=>{se()}));const X=(e,a,s)=>{const{code:t,data:n}=e,i=l().public.IP_ADDRESS;if(200===t){const{file_name:e,file_path:a}=n,l=s.length;s[l-1].name=e,s[l-1].url=i+a,q.value=s}},Y=async()=>{if(!M.value)return i("请选择需要解析的图片");if(V.value)return;V.value=!0;const e=await S.analysisImage({name:M.value});V.value=!1;const{code:a,data:s}=e;if(200===a){const{tags:e}=s;Q.value=e}},ee=()=>{M.value="",q.value=[],Q.value=[]},ae=()=>{const e=Q.value.map((e=>e.key)).join(", ");O(e)},se=()=>{K.get(x)&&(W.value=JSON.parse(K.get(x)),Z.value=W.value.length)};return(s,l)=>{const t=e,n=A,i=h.ElUpload,o=a;return d(),u("div",w,[p("div",P,[p("button",{class:"btn btn-secondary btn-sm m-r-10 m-b-10",onClick:ee},[r(" 清空 "),b(t,{class:"m-l-6",name:"ant-design:delete-filled"})]),p("button",{class:"btn btn-accent btn-sm m-r-10 m-b-10",onClick:ae},[r(" 导出购物车 "),b(t,{class:"m-l-6",name:"clarity:shopping-cart-solid-badged"})]),p("button",{class:"btn btn-primary btn-sm m-r-10 m-b-10",onClick:Y},[r(v(f(V)?"图片解析中":"解析图片")+" ",1),f(V)?(d(),_(t,{key:0,class:"m-l-6",name:"line-md:loading-twotone-loop"})):(d(),_(t,{key:1,class:"m-l-6",name:"mdi:comment-edit"}))])]),p("div",null,[b(i,{"file-list":f(q),"onUpdate:file-list":l[0]||(l[0]=e=>y(q)?q.value=e:null),class:"upload-demo",drag:"",action:f(R),accept:"image/png, image/jpeg, image/jpg",multiple:"","list-type":"picture","on-success":X},{file:g((({file:e})=>[p("div",E,[p("span",{onClick:a=>(e=>{M.value=e.name})(e)},[p("img",{class:"el-upload-list__item-thumbnail",src:e.url,alt:""},null,8,$),p("span",J,v(e.name),1),p("input",{class:"checkbox m-l-10",type:"checkbox",checked:f(M)===e.name},null,8,N)],8,L),p("span",T,[p("span",null,[b(t,{name:"material-symbols:image",size:"28",onClick:a=>{C("setPreview",e.url)}},null,8,["onClick"])]),p("span",U,[b(t,{name:"ic:baseline-delete",size:"28",onClick:a=>(e=>{console.log(e);const a=q.value.findIndex((a=>a.name===e.name));a>=0&&q.value.splice(a,1)})(e)},null,8,["onClick"])])])])])),tip:g((()=>[B])),default:g((()=>[p("i",z,[b(n)]),D])),_:1},8,["file-list","action"])]),b(o,{title:"解析标签 "},{titleSide:g((()=>[F])),_:1}),p("div",G,[(d(!0),u(j,null,k(f(Q),((e,a)=>{var s;return d(),u("button",{key:a,class:"btn btn-sm btn-secondary m-r-10 m-b-10"},[p("span",null,v(null==(s=e.key)?void 0:s.toLowerCase()),1),p("div",H,v(e.value),1)])})),128))])])}}}),[["__scopeId","data-v-486005d5"]]);export{K as default};