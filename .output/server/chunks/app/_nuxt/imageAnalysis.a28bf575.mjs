import I from './Icon.1f05ab14.mjs';
import d from './AreaTitle.b7e09825.mjs';
import { A } from './index.7c6a213b.mjs';
import { R, U as U$1, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, isRef, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { p, s } from './shop.4d5e891e.mjs';
import { c } from './upload-filled.195f95e8.mjs';
import { ElRow, ElCol, ElUpload } from 'element-plus/lib';
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

const S = defineComponent({ __name: "imageAnalysis", __ssrInlineRender: true, emits: ["setPreview"], setup(t2, { emit: r2 }) {
  A();
  const I2 = R();
  U$1(), p(), s();
  const S2 = ref(`${I2.public.FLASK_BASE_API}/danbooru/upload`);
  ref([]), ref(0);
  const w2 = ref([]), U2 = ref(""), P = ref([]), D = ref(false), E = (l2) => {
    U2.value = l2.name, P.value = l2.tags || [];
  }, L = (l2, e2, a2) => {
    const { code: i2, data: t3 } = l2, n2 = R().public.IP_ADDRESS;
    if (200 === i2) {
      const { file_name: l3, file_path: e3 } = t3, s2 = a2.length;
      a2[s2 - 1].name = l3, a2[s2 - 1].url = n2 + e3, w2.value = a2;
    }
  }, R$1 = (l2) => {
    F(l2.url);
  }, B = (l2) => {
    F(l2.url);
  }, F = (l2 = "") => {
    const { $viewerApi: e2 } = U$1();
    e2({ images: [l2] });
  }, K = (l2) => {
    console.log(l2);
    const e2 = w2.value.findIndex((e3) => e3.name === l2.name);
    e2 >= 0 && w2.value.splice(e2, 1);
  };
  return (a2, s2, i2, t3) => {
    const n2 = I, r3 = ElRow, v2 = ElCol, f2 = ElUpload, I3 = c, T = d;
    s2(`<div${ssrRenderAttrs(mergeProps({ class: "tranfer-con" }, t3))} data-v-0d85bdbb><div class="button-con" data-v-0d85bdbb><button class="btn btn-secondary m-r-10 m-b-10" data-v-0d85bdbb> \u6E05\u7A7A `), s2(ssrRenderComponent(n2, { class: "m-l-6", name: "ant-design:delete-filled" }, null, i2)), s2('</button><button class="btn btn-accent m-r-10 m-b-10" data-v-0d85bdbb> \u5BFC\u51FA\u8D2D\u7269\u8F66 '), s2(ssrRenderComponent(n2, { class: "m-l-6", name: "clarity:shopping-cart-solid-badged" }, null, i2)), s2(`</button><button class="btn btn-primary m-r-10 m-b-10" data-v-0d85bdbb>${ssrInterpolate(unref(D) ? "\u56FE\u7247\u89E3\u6790\u4E2D" : "\u89E3\u6790\u56FE\u7247")} `), unref(D) ? s2(ssrRenderComponent(n2, { class: "m-l-6", name: "line-md:loading-twotone-loop" }, null, i2)) : s2(ssrRenderComponent(n2, { class: "m-l-6", name: "mdi:comment-edit" }, null, i2)), s2("</button></div>"), s2(ssrRenderComponent(r3, { gutter: 20 }, { default: withCtx((l2, e2, a3, s3) => {
      if (!e2)
        return [createVNode(v2, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx(() => [createVNode(f2, { "file-list": unref(w2), "onUpdate:file-list": (l3) => isRef(w2) ? w2.value = l3 : null, class: "upload-demo", drag: "", action: unref(S2), accept: "image/png, image/jpeg, image/jpg", multiple: "", "list-type": "picture", "on-success": L }, { file: withCtx(({ file: l3 }) => [createVNode("div", { class: "upload-image-list-item" }, [createVNode("span", { onClick: (e3) => E(l3) }, [createVNode("img", { class: "el-upload-list__item-thumbnail", src: l3.url, alt: "", onClick: (e3) => F(l3.url) }, null, 8, ["src", "onClick"]), createVNode("span", { class: "m-l-6" }, toDisplayString(l3.name), 1), createVNode("input", { class: "checkbox m-l-10", type: "checkbox", checked: unref(U2) === l3.name }, null, 8, ["checked"])], 8, ["onClick"]), createVNode("span", { class: "el-upload-list__item-actions" }, [createVNode("span", null, [createVNode(n2, { name: "material-symbols:image", size: "28", onClick: (e3) => B(l3) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-10" }, [createVNode(n2, { name: "material-symbols:content-copy", size: "28", onClick: (e3) => R$1(l3) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-8" }, [createVNode(n2, { name: "ic:baseline-delete", size: "28", onClick: (e3) => K(l3) }, null, 8, ["onClick"])])])])]), tip: withCtx(() => [createVNode("div", { class: "el-upload__tip" }, "jpg/png\u6587\u4EF6\u683C\u5F0F")]), default: withCtx(() => [createVNode("i", { class: "el-icon el-icon--upload" }, [createVNode(I3)]), createVNode("div", { class: "el-upload__text" }, [createTextVNode(" \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 "), createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")])]), _: 1 }, 8, ["file-list", "onUpdate:file-list", "action"])]), _: 1 })];
      e2(ssrRenderComponent(v2, { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 }, { default: withCtx((l3, e3, a4, s4) => {
        if (!e3)
          return [createVNode(f2, { "file-list": unref(w2), "onUpdate:file-list": (l4) => isRef(w2) ? w2.value = l4 : null, class: "upload-demo", drag: "", action: unref(S2), accept: "image/png, image/jpeg, image/jpg", multiple: "", "list-type": "picture", "on-success": L }, { file: withCtx(({ file: l4 }) => [createVNode("div", { class: "upload-image-list-item" }, [createVNode("span", { onClick: (e4) => E(l4) }, [createVNode("img", { class: "el-upload-list__item-thumbnail", src: l4.url, alt: "", onClick: (e4) => F(l4.url) }, null, 8, ["src", "onClick"]), createVNode("span", { class: "m-l-6" }, toDisplayString(l4.name), 1), createVNode("input", { class: "checkbox m-l-10", type: "checkbox", checked: unref(U2) === l4.name }, null, 8, ["checked"])], 8, ["onClick"]), createVNode("span", { class: "el-upload-list__item-actions" }, [createVNode("span", null, [createVNode(n2, { name: "material-symbols:image", size: "28", onClick: (e4) => B(l4) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-10" }, [createVNode(n2, { name: "material-symbols:content-copy", size: "28", onClick: (e4) => R$1(l4) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-8" }, [createVNode(n2, { name: "ic:baseline-delete", size: "28", onClick: (e4) => K(l4) }, null, 8, ["onClick"])])])])]), tip: withCtx(() => [createVNode("div", { class: "el-upload__tip" }, "jpg/png\u6587\u4EF6\u683C\u5F0F")]), default: withCtx(() => [createVNode("i", { class: "el-icon el-icon--upload" }, [createVNode(I3)]), createVNode("div", { class: "el-upload__text" }, [createTextVNode(" \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 "), createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")])]), _: 1 }, 8, ["file-list", "onUpdate:file-list", "action"])];
        e3(ssrRenderComponent(f2, { "file-list": unref(w2), "onUpdate:file-list": (l4) => isRef(w2) ? w2.value = l4 : null, class: "upload-demo", drag: "", action: unref(S2), accept: "image/png, image/jpeg, image/jpg", multiple: "", "list-type": "picture", "on-success": L }, { file: withCtx(({ file: l4 }, e4, a5, s5) => {
          if (!e4)
            return [createVNode("div", { class: "upload-image-list-item" }, [createVNode("span", { onClick: (e5) => E(l4) }, [createVNode("img", { class: "el-upload-list__item-thumbnail", src: l4.url, alt: "", onClick: (e5) => F(l4.url) }, null, 8, ["src", "onClick"]), createVNode("span", { class: "m-l-6" }, toDisplayString(l4.name), 1), createVNode("input", { class: "checkbox m-l-10", type: "checkbox", checked: unref(U2) === l4.name }, null, 8, ["checked"])], 8, ["onClick"]), createVNode("span", { class: "el-upload-list__item-actions" }, [createVNode("span", null, [createVNode(n2, { name: "material-symbols:image", size: "28", onClick: (e5) => B(l4) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-10" }, [createVNode(n2, { name: "material-symbols:content-copy", size: "28", onClick: (e5) => R$1(l4) }, null, 8, ["onClick"])]), createVNode("span", { class: "m-l-8" }, [createVNode(n2, { name: "ic:baseline-delete", size: "28", onClick: (e5) => K(l4) }, null, 8, ["onClick"])])])])];
          e4(`<div class="upload-image-list-item" data-v-0d85bdbb${s5}><span data-v-0d85bdbb${s5}><img class="el-upload-list__item-thumbnail"${ssrRenderAttr("src", l4.url)} alt="" data-v-0d85bdbb${s5}><span class="m-l-6" data-v-0d85bdbb${s5}>${ssrInterpolate(l4.name)}</span><input class="checkbox m-l-10" type="checkbox"${ssrIncludeBooleanAttr(unref(U2) === l4.name) ? " checked" : ""} data-v-0d85bdbb${s5}></span><span class="el-upload-list__item-actions" data-v-0d85bdbb${s5}><span data-v-0d85bdbb${s5}>`), e4(ssrRenderComponent(n2, { name: "material-symbols:image", size: "28", onClick: (e5) => B(l4) }, null, a5, s5)), e4(`</span><span class="m-l-10" data-v-0d85bdbb${s5}>`), e4(ssrRenderComponent(n2, { name: "material-symbols:content-copy", size: "28", onClick: (e5) => R$1(l4) }, null, a5, s5)), e4(`</span><span class="m-l-8" data-v-0d85bdbb${s5}>`), e4(ssrRenderComponent(n2, { name: "ic:baseline-delete", size: "28", onClick: (e5) => K(l4) }, null, a5, s5)), e4("</span></span></div>");
        }), tip: withCtx((l4, e4, a5, s5) => {
          if (!e4)
            return [createVNode("div", { class: "el-upload__tip" }, "jpg/png\u6587\u4EF6\u683C\u5F0F")];
          e4(`<div class="el-upload__tip" data-v-0d85bdbb${s5}>jpg/png\u6587\u4EF6\u683C\u5F0F</div>`);
        }), default: withCtx((l4, e4, a5, s5) => {
          if (!e4)
            return [createVNode("i", { class: "el-icon el-icon--upload" }, [createVNode(I3)]), createVNode("div", { class: "el-upload__text" }, [createTextVNode(" \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 "), createVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")])];
          e4(`<i class="el-icon el-icon--upload" data-v-0d85bdbb${s5}>`), e4(ssrRenderComponent(I3, null, null, a5, s5)), e4(`</i><div class="el-upload__text" data-v-0d85bdbb${s5}> \u62D6\u52A8\u56FE\u7247\u5230\u5F53\u524D\u533A\u57DF \u6216 <em data-v-0d85bdbb${s5}>\u70B9\u51FB\u4E0A\u4F20</em></div>`);
        }), _: 1 }, a4, s4));
      }), _: 1 }, a3, s3));
    }), _: 1 }, i2)), s2(ssrRenderComponent(T, { title: "\u89E3\u6790\u6807\u7B7E " }, { titleSide: withCtx((l2, e2, a3, s3) => {
      if (!e2)
        return [createVNode("span", { style: { "font-size": "12px" } }, "(\u57FA\u4E8Edeepdanbooru\u89E3\u6790)")];
      e2(`<span style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-0d85bdbb${s3}>(\u57FA\u4E8Edeepdanbooru\u89E3\u6790)</span>`);
    }), _: 1 }, i2)), s2('<div class="tags-con" data-v-0d85bdbb><!--[-->'), ssrRenderList(unref(P), (l2, e2) => {
      var a3;
      s2(`<button class="btn btn-sm btn-secondary m-r-10 m-b-10" data-v-0d85bdbb><span data-v-0d85bdbb>${ssrInterpolate(null == (a3 = l2.key) ? void 0 : a3.toLowerCase())}</span><div class="badge m-l-8" data-v-0d85bdbb>${ssrInterpolate(l2.value)}</div></button>`);
    }), s2("<!--]--></div></div>");
  };
} }), w = S.setup;
S.setup = (l2, e2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/pc/utils/components/imageAnalysis.vue"), w ? w(l2, e2) : void 0;
};
const U = di(S, [["__scopeId", "data-v-0d85bdbb"]]);

export { U as default };
