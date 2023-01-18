import a from"./Icon.b50eae24.js";import{_ as e}from"./AppAnimate.vue_vue_type_script_setup_true_lang.2fe52f8d.js";import{u as l}from"./index.131f7cc9.js";import{h as s,C as t,r as i}from"./pinia.17670579.js";import{e as o,U as n,r as c,a as d,w as u,f as r,G as m,H as v,Z as p,J as k,u as y,L as f,Y as C,$ as b,a0 as h,a1 as g,i as _,a4 as j,a5 as x,a6 as z,_ as S,W as w,I as E,a2 as V,a3 as T}from"./element-plus.fe53e503.js";import{u as O,a as A}from"./shop.d3010ead.js";import{_ as G}from"./document-copy.d0e58c3c.js";import{_ as I}from"./shopping-trolley.ded7af5a.js";import{_ as N,a as U,b as $}from"./plus.c0ce5731.js";import{_ as B,a as L,b as H}from"./arrow-left-bold.258d4eb7.js";import{d as R}from"./vuedraggable.03145536.js";import{u as J}from"./uuid.d56aad75.js";import{_ as D}from"./entry.0f1f4d34.js";import"./lodash.cb875ed5.js";import"./dayjs.3bf4ac2a.js";import"./store.e5acb8cd.js";import"./vue3-clipboard-es.62b9b053.js";import"./sortablejs.91a11583.js";const K=a=>(x("data-v-3bd31888"),a=a(),z(),a),W={class:"header"},Y={class:"back"},Z={class:"header-center"},q={class:"header-right"},F={class:"body"},M={class:"left"},P={class:"left-layer1"},Q=K((()=>p("div",{class:"layer-top"},"数据来源",-1))),X={class:"layer-bottom"},aa=K((()=>p("div",{class:"layer-top"},"标签类别",-1))),ea={key:0,class:"type-list"},la=["onClick"],sa={key:1,class:"type-list"},ta=["onClick"],ia={class:"center"},oa={class:"shop-card-con"},na={class:"shop-item"},ca={class:"tran-text"},da={class:"right"},ua={class:"tag-list"},ra={class:"text-con"},ma={class:"zh"},va={class:"text-con"},pa={class:"zh"},ka={key:0,class:"import-wrapper"},ya={class:"import-layer"},fa={class:"import-button"},Ca=D(o({__name:"index",props:["modelValue"],async setup(o){let x,z;const{DefaultTagsApi:D}=l(),K=([x,z]=n((()=>D.getTags())),x=await x,z(),x),Ca=JSON.parse(K),ba=s().public.GELBOORU_TOKEN,ha=c({animation:400,group:"people",disabled:!1,ghostClass:"ghost"}),{GelbooruApi:ga,ShopApi:_a}=l(),ja=t(),xa=i(),za=d("1"),Sa=d(""),wa=d(!1),Ea=d(1),Va=d(0),{copy:Ta}=O(),{addShop:Oa,renameShopName:Aa,shopList:Ga,shop:Ia,onlySetShop:Na,initShop:Ua,setShop:$a,clearShop:Ba,removeShopByName:La,copyShop:Ha,addOneCircle:Ra,removeOneCircle:Ja,createNewShopItem:Da}=A(),Ka=d(Ca.class),Wa=d(Ka.value[0].data),Ya=d([]),Za=d([]);u(Ga,(a=>{"pc-design"===ja.name&&Na(a.map((a=>a.text)).join(", "))}));const qa=()=>{xa.go(-1)},Fa=()=>{xa.replace("/pc/home")},Ma=()=>{wa.value=!0},Pa=()=>{$a(Sa.value),wa.value=!1},Qa=async()=>{var a;const e=await _a.translate({text:Ia.value,type:1});(null==(a=null==e?void 0:e.data)?void 0:a.translateText).split("，").forEach(((a,e)=>{Ga.value[e].translateText=a}))},Xa=a=>{Ea.value=a,Va.value=0,2===a&&(async()=>{const a=await ga.getList();Ya.value=a.data})()},ae=async(a,e)=>{if(1===Ea.value)Wa.value=Ka.value[a].data,Va.value=a;else if(2===Ea.value){const l=await ga.getTagsById({token:ba,page:1,limit:100,category_id:e});Va.value=a,Za.value=l.data}};return r((()=>{Ua()})),(l,s)=>{const t=B,i=L,o=a,n=j.ElRadio,c=j.ElRadioGroup,d=N,u=U,r=H,x=$,z=I,O=j.ElButton,A=G,D=e;return m(),v("div",{class:C(["design-page page",{white:"2"===za.value}])},[p("div",W,[p("div",Y,[k(t,{onClick:qa}),k(i,{onClick:Fa})]),p("div",Z,[k(o,{size:"20",name:"material-symbols:shopping-cart",onClick:Ma}),k(o,{size:"24",name:"material-symbols:new-label-rounded",onClick:y(Da)},null,8,["onClick"]),k(o,{size:"20",name:"material-symbols:content-copy-rounded",onClick:y(Ha)},null,8,["onClick"]),k(o,{size:"19",name:"majesticons:translate",onClick:Qa}),k(o,{size:"20",name:"material-symbols:delete",onClick:y(Ba)},null,8,["onClick"])]),p("div",q,[k(c,{modelValue:za.value,"onUpdate:modelValue":s[0]||(s[0]=a=>za.value=a),class:"ml-4"},{default:f((()=>[k(n,{label:"1",size:"large"},{default:f((()=>[S("深色")])),_:1}),k(n,{label:"2",size:"large"},{default:f((()=>[S("浅色")])),_:1})])),_:1},8,["modelValue"])])]),p("div",F,[p("div",M,[p("div",P,[Q,p("div",X,[p("div",{class:C(["left-menu",{"item-active":1===Ea.value}]),onClick:s[1]||(s[1]=a=>Xa(1))}," 常规标签 ",2),p("div",{class:C(["left-menu",{"item-active":2===Ea.value}]),onClick:s[2]||(s[2]=a=>Xa(2))}," Gelbooru标签 ",2),p("div",{class:C(["left-menu",{"item-active":3===Ea.value}]),onClick:s[3]||(s[3]=a=>Xa(3))}," EH标签(500个) ",2),p("div",{class:C(["left-menu",{"item-active":4===Ea.value}]),onClick:s[4]||(s[4]=a=>Xa(4))}," EH标签(31000个) ",2)]),aa,1===Ea.value?(m(),v("div",ea,[(m(!0),v(b,null,h(Ka.value,((a,e)=>(m(),v("div",{key:e,class:C(["type-item",{"type-item-active ":e===Va.value}]),onClick:a=>ae(e)},w(null==a?void 0:a.name),11,la)))),128))])):g("",!0),2===Ea.value?(m(),v("div",sa,[(m(!0),v(b,null,h(Ya.value,((a,e)=>(m(),v("div",{key:e,class:C(["type-item",{"type-item-active ":e===Va.value}]),onClick:l=>ae(e,null==a?void 0:a.id)},w(null==a?void 0:a.name)+"("+w(null==a?void 0:a.level)+") ",11,ta)))),128))])):g("",!0)])]),p("div",ia,[p("div",oa,[k(y(R),{modelValue:y(Ga),"onUpdate:modelValue":s[5]||(s[5]=a=>_(Ga)?Ga.value=a:null),"component-data":{name:"list"},"drag-options":y(ha),"item-key":a=>{(a=>{J.v4()})(a)}},{item:f((({element:a})=>[p("div",na,[p("div",null,[p("span",null,w(a.text),1),p("span",ca,w(a.translateText),1),k(d,{class:"add",onClick:e=>y(Ra)(a.text)},null,8,["onClick"]),k(u,{class:"minus",onClick:e=>y(Ja)(a.text)},null,8,["onClick"]),k(r,{class:"remove",onClick:e=>y(Aa)(a.text)},null,8,["onClick"]),k(x,{class:"remove",onClick:e=>y(La)(a.text)},null,8,["onClick"])])])])),_:1},8,["modelValue","drag-options","item-key"])])]),p("div",da,[p("div",ua,[1===Ea.value?(m(!0),v(b,{key:0},h(Wa.value,((a,e)=>(m(),v("div",{key:e,class:"tag-item"},[p("div",ra,[p("p",ma,w(null==a?void 0:a.zh)+" "+w(null==a?void 0:a.en),1)]),p("div",null,[k(O,{size:"small",circle:"",onClick:e=>y(Oa)(null==a?void 0:a.en)},{default:f((()=>[E(l.$slots,"icon",{},(()=>[k(z)]),!0)])),_:2},1032,["onClick"]),k(O,{size:"small",circle:"",onClick:e=>y(Ta)(null==a?void 0:a.en)},{default:f((()=>[E(l.$slots,"icon",{},(()=>[k(A)]),!0)])),_:2},1032,["onClick"])])])))),128)):g("",!0),2===Ea.value?(m(!0),v(b,{key:1},h(Za.value,((a,e)=>(m(),v("div",{key:e,class:"tag-item"},[p("div",va,[p("p",pa,w(null==a?void 0:a.t_name)+" "+w(null==a?void 0:a.name),1)]),p("div",null,[k(O,{size:"small",circle:"",onClick:e=>y(Oa)(null==a?void 0:a.en)},{default:f((()=>[E(l.$slots,"icon",{},(()=>[k(z)]),!0)])),_:2},1032,["onClick"]),k(O,{size:"small",circle:"",onClick:e=>y(Ta)(null==a?void 0:a.en)},{default:f((()=>[E(l.$slots,"icon",{},(()=>[k(A)]),!0)])),_:2},1032,["onClick"])])])))),128)):g("",!0)])])]),k(D,null,{default:f((()=>[wa.value?(m(),v("div",ka,[p("div",ya,[V(p("textarea",{"onUpdate:modelValue":s[6]||(s[6]=a=>Sa.value=a),type:"text"},null,512),[[T,Sa.value]])]),p("div",fa,[p("button",{onClick:s[7]||(s[7]=()=>wa.value=!1)},"取消"),p("button",{onClick:Pa},"确定")])])):g("",!0)])),_:1})],2)}}}),[["__scopeId","data-v-3bd31888"]]);export{Ca as default};