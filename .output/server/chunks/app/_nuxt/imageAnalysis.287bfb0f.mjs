import I$1 from './Icon.221105b5.mjs';
import d from './AreaTitle.512d3722.mjs';
import { A as A$1 } from './index.7c6a213b.mjs';
import { R, U, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { p } from './shop.269c075a.mjs';
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

const A = defineComponent({ __name: "imageAnalysis", __ssrInlineRender: true, emits: ["setPreview"], setup(i2, { emit: v2 }) {
  A$1();
  const C2 = R();
  U(), p();
  const A2 = ref(`${C2.public.FLASK_BASE_API}/danbooru/upload`);
  ref([]), ref(0);
  const z2 = ref([]), I2 = ref(""), S = ref([]), w = ref(false), P = (a2, e2, t2) => {
    const { code: s2, data: i3 } = a2, n2 = R().public.IP_ADDRESS;
    if (200 === s2) {
      const { file_name: a3, file_path: e3 } = i3, l2 = t2.length;
      t2[l2 - 1].name = a3, t2[l2 - 1].url = n2 + e3, z2.value = t2;
    }
  }, D = (a2) => {
    v2("setPreview", a2.url);
  }, E = (a2) => {
    console.log(a2);
    const e2 = z2.value.findIndex((e3) => e3.name === a2.name);
    e2 >= 0 && z2.value.splice(e2, 1);
  };
  return (t2, l2, s2, i3) => {
    const n2 = I$1, v3 = ElUpload, b2 = c, C3 = d;
    l2(`<div${ssrRenderAttrs(mergeProps({ class: "tranfer-con" }, i3))} data-v-486005d5><div class="button-con" data-v-486005d5><button class="btn btn-secondary btn-sm m-r-10 m-b-10" data-v-486005d5> \u6E05\u7A7A `), l2(ssrRenderComponent(n2, { class: "m-l-6", name: "ant-design:delete-filled" }, null, s2)), l2('</button><button class="btn btn-accent btn-sm m-r-10 m-b-10" data-v-486005d5> \u5BFC\u51FA\u8D2D\u7269\u8F66 '), l2(ssrRenderComponent(n2, { class: "m-l-6", name: "clarity:shopping-cart-solid-badged" }, null, s2)), l2(`</button><button class="btn btn-primary btn-sm m-r-10 m-b-10" data-v-486005d5>${ssrInterpolate(unref(w) ? "\u56FE\u7247\u89E3\u6790\u4E2D" : "\u89E3\u6790\u56FE\u7247")} `), unref(w) ? l2(ssrRenderComponent(n2, { class: "m-l-6", name: "line-md:loading-twotone-loop" }, null, s2)) : l2(ssrRenderComponent(n2, { class: "m-l-6", name: "mdi:comment-edit" }, null, s2)), l2("</button></div><div data-v-486005d5>"), l2(ssrRenderComponent(v3, { "file-list": unref(z2), "onUpdate:file-list": (a2) => isRef(z2) ? z2.value = a2 : null, class: "upload-demo", drag: "", action: unref(A2), accept: "image/png, image/jpeg, image/jpg", multiple: "", "list-type": "picture", "on-success": P }, { file: withCtx(({ file: a2 }, e2, t3, l3) => {
      if (!e2)
        return [createVNode("div", { class: "upload-image-list-item" }, [createVNode("span", { onClick: (e3) => ((a3) => {
          I2.value = a3.name;
        })(a2) }, [createVNode("img", { class: "el-upload-list__item-thumbnail", src: a2.url, alt: "" }, null, 8, ["src"]), createVNode("span", { class: "m-l-6" }, toDisplayString(a2.name), 1), createVNode("input", { class: "checkbox m-l-10", type: "checkbox", checked: unref(I2) === a2.name }, null, 8, ["checked"])], 8, ["onClick"]), createVNode("span", { class: "el-upload-list__item-actions" }, [createVNode("span", null, [createVNode(n2, { name: "material-symbols:image", size: "28", onClick: (e3) => D(a2) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-10" }, [createVNode(n2, { name: "ic:baseline-delete", size: "28", onClick: (e3) => E(a2) }, null, 8, ["onClick"])])])])];
      e2(`<div class="upload-image-list-item" data-v-486005d5${l3}><span data-v-486005d5${l3}><img class="el-upload-list__item-thumbnail"${ssrRenderAttr("src", a2.url)} alt="" data-v-486005d5${l3}><span class="m-l-6" data-v-486005d5${l3}>${ssrInterpolate(a2.name)}</span><input class="checkbox m-l-10" type="checkbox"${ssrIncludeBooleanAttr(unref(I2) === a2.name) ? " checked" : ""} data-v-486005d5${l3}></span><span class="el-upload-list__item-actions" data-v-486005d5${l3}><span data-v-486005d5${l3}>`), e2(ssrRenderComponent(n2, { name: "material-symbols:image", size: "28", onClick: (e3) => D(a2) }, null, t3, l3)), e2(`</span><span class="m-l-10" data-v-486005d5${l3}>`), e2(ssrRenderComponent(n2, { name: "ic:baseline-delete", size: "28", onClick: (e3) => E(a2) }, null, t3, l3)), e2("</span></span></div>");
    }), tip: withCtx((a2, e2, t3, l3) => {
      if (!e2)
        return [createVNode("div", { class: "el-upload__tip" }, "jpg/png\u6587\u4EF6\u683C\u5F0F")];
      e2(`<div class="el-upload__tip" data-v-486005d5${l3}>jpg/png\u6587\u4EF6\u683C\u5F0F</div>`);
    }), default: withCtx((a2, e2, t3, l3) => {
      if (!e2)
        return [createVNode("i", { class: "el-icon el-icon--upload" }, [createVNode(b2)]), createVNode("div", { class: "el-upload__text" }, [createTextVNode(" \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 "), createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")])];
      e2(`<i class="el-icon el-icon--upload" data-v-486005d5${l3}>`), e2(ssrRenderComponent(b2, null, null, t3, l3)), e2(`</i><div class="el-upload__text" data-v-486005d5${l3}> \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 <em data-v-486005d5${l3}>\u70B9\u51FB\u4E0A\u4F20</em></div>`);
    }), _: 1 }, s2)), l2("</div>"), l2(ssrRenderComponent(C3, { title: "\u89E3\u6790\u6807\u7B7E " }, { titleSide: withCtx((a2, e2, t3, l3) => {
      if (!e2)
        return [createVNode("span", { style: { "font-size": "12px" } }, "(\u57FA\u4E8Edeepdanbooru\u89E3\u6790)")];
      e2(`<span style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-486005d5${l3}>(\u57FA\u4E8Edeepdanbooru\u89E3\u6790)</span>`);
    }), _: 1 }, s2)), l2('<div class="tags-con" data-v-486005d5><!--[-->'), ssrRenderList(unref(S), (a2, e2) => {
      var t3;
      l2(`<button class="btn btn-sm btn-secondary m-r-10 m-b-10" data-v-486005d5><span data-v-486005d5>${ssrInterpolate(null == (t3 = a2.key) ? void 0 : t3.toLowerCase())}</span><div class="badge m-l-8" data-v-486005d5>${ssrInterpolate(a2.value)}</div></button>`);
    }), l2("<!--]--></div></div>");
  };
} }), z = A.setup;
A.setup = (a2, e2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/utils/components/imageAnalysis.vue"), z ? z(a2, e2) : void 0;
};
const I = di(A, [["__scopeId", "data-v-486005d5"]]);

export { I as default };
