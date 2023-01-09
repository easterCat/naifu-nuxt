import I$1 from './Icon.1f05ab14.mjs';
import d from './AreaTitle.b7e09825.mjs';
import { A as A$1 } from './index.7c6a213b.mjs';
import { R, U, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { p } from './shop.4d5e891e.mjs';
import { c } from './upload-filled.195f95e8.mjs';
import { ElUpload } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ofetch';
import 'ohash';
import 'h3';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import 'store';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'vue-uuid';
import 'element-plus';
import 'vue3-clipboard';

const A = defineComponent({ __name: "imageAnalysis", __ssrInlineRender: true, emits: ["setPreview"], setup(i2, { emit: b2 }) {
  A$1();
  const C2 = R();
  U(), p();
  const A2 = ref(`${C2.public.FLASK_BASE_API}/danbooru/upload`);
  ref([]), ref(0);
  const z2 = ref([]), I2 = ref(""), S = ref([]), w = ref(false), P = (e2, a2, t2) => {
    const { code: s2, data: i3 } = e2, n2 = R().public.IP_ADDRESS;
    if (200 === s2) {
      const { file_name: e3, file_path: a3 } = i3, l2 = t2.length;
      t2[l2 - 1].name = e3, t2[l2 - 1].url = n2 + a3, z2.value = t2;
    }
  }, D = (e2) => {
    b2("setPreview", e2.url);
  }, E = (e2) => {
    console.log(e2);
    const a2 = z2.value.findIndex((a3) => a3.name === e2.name);
    a2 >= 0 && z2.value.splice(a2, 1);
  };
  return (t2, l2, s2, i3) => {
    const n2 = I$1, b3 = ElUpload, v2 = c, C3 = d;
    l2(`<div${ssrRenderAttrs(mergeProps({ class: "tranfer-con" }, i3))} data-v-833aebf1><div class="button-con" data-v-833aebf1><button class="btn btn-secondary btn-sm m-r-10 m-b-10" data-v-833aebf1> \u6E05\u7A7A `), l2(ssrRenderComponent(n2, { class: "m-l-6", name: "ant-design:delete-filled" }, null, s2)), l2('</button><button class="btn btn-accent btn-sm m-r-10 m-b-10" data-v-833aebf1> \u5BFC\u51FA\u8D2D\u7269\u8F66 '), l2(ssrRenderComponent(n2, { class: "m-l-6", name: "clarity:shopping-cart-solid-badged" }, null, s2)), l2(`</button><button class="btn btn-primary btn-sm m-r-10 m-b-10" data-v-833aebf1>${ssrInterpolate(unref(w) ? "\u56FE\u7247\u89E3\u6790\u4E2D" : "\u89E3\u6790\u56FE\u7247")} `), unref(w) ? l2(ssrRenderComponent(n2, { class: "m-l-6", name: "line-md:loading-twotone-loop" }, null, s2)) : l2(ssrRenderComponent(n2, { class: "m-l-6", name: "mdi:comment-edit" }, null, s2)), l2("</button></div><div data-v-833aebf1>"), l2(ssrRenderComponent(b3, { "file-list": unref(z2), "onUpdate:file-list": (e2) => isRef(z2) ? z2.value = e2 : null, class: "upload-demo", drag: "", action: unref(A2), accept: "image/png, image/jpeg, image/jpg", multiple: "", "list-type": "picture", "on-success": P }, { file: withCtx(({ file: e2 }, a2, t3, l3) => {
      if (!a2)
        return [createVNode("div", { class: "upload-image-list-item" }, [createVNode("span", { onClick: (a3) => ((e3) => {
          I2.value = e3.name;
        })(e2) }, [createVNode("img", { class: "el-upload-list__item-thumbnail", src: e2.url, alt: "" }, null, 8, ["src"]), createVNode("span", { class: "m-l-6" }, toDisplayString(e2.name), 1), createVNode("input", { class: "checkbox m-l-10", type: "checkbox", checked: unref(I2) === e2.name }, null, 8, ["checked"])], 8, ["onClick"]), createVNode("span", { class: "el-upload-list__item-actions" }, [createVNode("span", null, [createVNode(n2, { name: "material-symbols:image", size: "28", onClick: (a3) => D(e2) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-10" }, [createVNode(n2, { name: "ic:baseline-delete", size: "28", onClick: (a3) => E(e2) }, null, 8, ["onClick"])])])])];
      a2(`<div class="upload-image-list-item" data-v-833aebf1${l3}><span data-v-833aebf1${l3}><img class="el-upload-list__item-thumbnail"${ssrRenderAttr("src", e2.url)} alt="" data-v-833aebf1${l3}><span class="m-l-6" data-v-833aebf1${l3}>${ssrInterpolate(e2.name)}</span><input class="checkbox m-l-10" type="checkbox"${ssrIncludeBooleanAttr(unref(I2) === e2.name) ? " checked" : ""} data-v-833aebf1${l3}></span><span class="el-upload-list__item-actions" data-v-833aebf1${l3}><span data-v-833aebf1${l3}>`), a2(ssrRenderComponent(n2, { name: "material-symbols:image", size: "28", onClick: (a3) => D(e2) }, null, t3, l3)), a2(`</span><span class="m-l-10" data-v-833aebf1${l3}>`), a2(ssrRenderComponent(n2, { name: "ic:baseline-delete", size: "28", onClick: (a3) => E(e2) }, null, t3, l3)), a2("</span></span></div>");
    }), tip: withCtx((e2, a2, t3, l3) => {
      if (!a2)
        return [createVNode("div", { class: "el-upload__tip" }, "jpg/png\u6587\u4EF6\u683C\u5F0F")];
      a2(`<div class="el-upload__tip" data-v-833aebf1${l3}>jpg/png\u6587\u4EF6\u683C\u5F0F</div>`);
    }), default: withCtx((e2, a2, t3, l3) => {
      if (!a2)
        return [createVNode("i", { class: "el-icon el-icon--upload" }, [createVNode(v2)]), createVNode("div", { class: "el-upload__text" }, [createTextVNode(" \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 "), createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")])];
      a2(`<i class="el-icon el-icon--upload" data-v-833aebf1${l3}>`), a2(ssrRenderComponent(v2, null, null, t3, l3)), a2(`</i><div class="el-upload__text" data-v-833aebf1${l3}> \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 <em data-v-833aebf1${l3}>\u70B9\u51FB\u4E0A\u4F20</em></div>`);
    }), _: 1 }, s2)), l2("</div>"), l2(ssrRenderComponent(C3, { title: "\u89E3\u6790\u6807\u7B7E " }, { titleSide: withCtx((e2, a2, t3, l3) => {
      if (!a2)
        return [createVNode("span", { style: { "font-size": "12px" } }, "(\u57FA\u4E8Edeepdanbooru\u89E3\u6790)")];
      a2(`<span style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-833aebf1${l3}>(\u57FA\u4E8Edeepdanbooru\u89E3\u6790)</span>`);
    }), _: 1 }, s2)), l2('<div class="tags-con" data-v-833aebf1><!--[-->'), ssrRenderList(unref(S), (e2, a2) => {
      var t3;
      l2(`<button class="btn btn-sm btn-secondary m-r-10 m-b-10" data-v-833aebf1><span data-v-833aebf1>${ssrInterpolate(null == (t3 = e2.key) ? void 0 : t3.toLowerCase())}</span><div class="badge m-l-8" data-v-833aebf1>${ssrInterpolate(e2.value)}</div></button>`);
    }), l2("<!--]--></div></div>");
  };
} }), z = A.setup;
A.setup = (e2, a2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/utils/components/imageAnalysis.vue"), z ? z(e2, a2) : void 0;
};
const I = di(A, [["__scopeId", "data-v-833aebf1"]]);

export { I as default };
