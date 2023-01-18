import n from './client-only.f5bddb5b.mjs';
import { P as Pt } from './AppHeader.71946bc8.mjs';
import g from './AppBanner.0455c2c4.mjs';
import d from './AreaTitle.512d3722.mjs';
import { a as R$1 } from './AppHeader.1a53bb67.mjs';
import { _ as f } from './nuxt-img.540f6540.mjs';
import x from './TemplateDetail.529c9e3c.mjs';
import { s, p } from './shop.269c075a.mjs';
import { A } from './index.7c6a213b.mjs';
import { d as di, Q } from '../server.mjs';
import { defineComponent, reactive, ref, onUnmounted, resolveDirective, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, unref, withDirectives, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { a } from './document-copy.11fbb28b.mjs';
import { t } from './shopping-trolley.94b396ca.mjs';
import { ElSwitch, ElTooltip } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import de from 'lodash';
import 'vue-uuid';
import './AppAnimate.0c3d74c4.mjs';
import './Icon.221105b5.mjs';
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
import 'element-plus';
import './plus.ff77b18c.mjs';
import 'vuedraggable';
import './AppAnimate.b0d9e6d2.mjs';
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
import './link.0f68c07f.mjs';
import 'vue3-clipboard';
import './copy-document.b505b457.mjs';

const B = defineComponent({ __name: "chitu", __ssrInlineRender: true, setup(r2) {
  const { copy: C2 } = s(), { addShop: L2 } = p(), { TemplateApi: B2 } = A(), D2 = async (e2) => {
    const l2 = (await Q(e2, "$XHYNvCeXRl")).data;
    return JSON.parse(l2._rawValue);
  }, R2 = reactive([{ name: "\u53C2\u8003\u56FE", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_cankaotu.json") }, { name: "\u4EBA\u7269", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_huageren.json") }, { name: "\u7269\u4F53", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_huagewuti.json") }, { name: "\u6784\u56FE", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_goutu.json") }, { name: "\u753B\u98CE", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_huafeng.json") }, { name: "\u6B63\u9762\u8BCD\u7EC4", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_zhengmiantag.json") }, { name: "\u8D1F\u9762\u8BCD\u7EC4", file: D2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_fumiantag.json") }]), Y = ref([]), J = ref(0), M = ref(true), O = ref(""), q = ref({}), G = ref(false), K = ref(1), P = ref(50), Q$1 = ref();
  let W = [], Z = 0;
  const ee = async () => {
    const e2 = await B2.getTemplatesChitu({ pageIndex: K.value, pageSize: P.value });
    Y.value = [...Y.value, ...(null == e2 ? void 0 : e2.templates) ? e2.templates : []];
  }, le = (e2) => {
    J.value ? (q.value = { author: e2.author, n_prompt: e2.n_prompt, preview: e2.preview, model: e2.model, prompt: e2.prompt, prompt_zh: e2.prompt_zh, name: e2.name, desc: e2.desc }, G.value = true) : (q.value = { name: e2.name, author: e2.author, preview: e2.imgbb_url ? e2.imgbb_url : e2.preview, prompt: e2.prompt, prompt_zh: e2.prompt_zh, n_prompt: e2.n_prompt, model: e2.model, desc: e2.desc, like: e2.like }, G.value = true);
  }, te = async (e2) => {
    Z = 0, K.value = 1, (J.value || 0 === J.value) && e2 ? (J.value = e2, Y.value = [], W = await R2[e2].file, ie()) : (J.value = 0, Y.value = [], ee());
  }, ne = (e2) => {
    O.value = e2;
  }, ie = () => {
    Y.value = Y.value.concat(W.slice(50 * Z, 50 * (Z + 1)));
  }, ae = de.throttle(() => {
    const e2 = Q$1.value.scrollTop;
    Q$1.value.scrollHeight - (e2 + (document.documentElement.clientHeight || document.body.clientHeight)) <= 100 && (console.log("\u89E6\u5E95"), J.value ? (Z++, ie()) : (K.value++, ee()));
  }, 1500);
  return onUnmounted(() => {
    Q$1.value.removeEventListener("scroll", ae);
  }), (s2, u2, c2, d2) => {
    const r3 = n, m2 = Pt, p2 = g, v2 = d, F2 = R$1, B3 = ElSwitch, D3 = f, O2 = ElTooltip, K2 = t, P2 = a, Q2 = x, W2 = resolveDirective("animate-css");
    u2(`<div${ssrRenderAttrs(mergeProps({ class: "chitu-tags-page page" }, d2))} data-v-9c346e73>`), u2(ssrRenderComponent(r3, null, { default: withCtx((e2, l2, t2, n2) => {
      if (!l2)
        return [createVNode(m2)];
      l2(ssrRenderComponent(m2, null, null, t2, n2));
    }), _: 1 }, c2)), u2('<div class="content" data-v-9c346e73>'), u2(ssrRenderComponent(p2, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: ne }, null, c2)), u2(ssrRenderComponent(v2, mergeProps({ title: "\u6807\u7B7E\u7C7B\u522B" }, ssrGetDirectiveProps(s2, W2, { direction: "modifySlideInUp" })), null, c2)), u2('<div class="type-list" data-v-9c346e73>'), u2(ssrRenderComponent(r3, null, { default: withCtx((e2, l2, t2, n2) => {
      if (!l2)
        return [(openBlock(true), createBlock(Fragment, null, renderList(unref(R2), (e3, l3) => withDirectives((openBlock(), createBlock(F2, { key: l3, index: l3 + "", "button-style": 1, "button-size": "larger", class: [l3 === J.value ? "btn-accent" : "btn-primary-30"], "button-text": null == e3 ? void 0 : e3.name, onSubmit: (e4) => te(l3) }, null, 8, ["index", "class", "button-text", "onSubmit"])), [[W2, { direction: "modifySlideInUp", delay: 30 * l3 }]])), 128))];
      l2("<!--[-->"), ssrRenderList(unref(R2), (e3, i2) => {
        l2(ssrRenderComponent(F2, mergeProps({ key: i2, index: i2 + "", "button-style": 1, "button-size": "larger", class: [i2 === J.value ? "btn-accent" : "btn-primary-30"], "button-text": null == e3 ? void 0 : e3.name, onSubmit: (e4) => te(i2) }, ssrGetDirectiveProps(s2, W2, { direction: "modifySlideInUp", delay: 30 * i2 })), null, t2, n2));
      }), l2("<!--]-->");
    }), _: 1 }, c2)), u2("</div>"), u2(ssrRenderComponent(v2, mergeProps({ title: "\u6807\u7B7E\u5217\u8868" }, ssrGetDirectiveProps(s2, W2, { direction: "modifySlideInUp" })), { titleSide: withCtx((e2, l2, t2, n2) => {
      if (!l2)
        return [createVNode(B3, { modelValue: M.value, "onUpdate:modelValue": (e3) => M.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CFImage", "active-text": "\u5F00\u542FImage", class: "title-side" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
      l2(ssrRenderComponent(B3, { modelValue: M.value, "onUpdate:modelValue": (e3) => M.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CFImage", "active-text": "\u5F00\u542FImage", class: "title-side" }, null, t2, n2));
    }), _: 1 }, c2)), unref(Z) ? (u2('<div class="tag-list" data-v-9c346e73>'), u2(ssrRenderComponent(r3, null, { default: withCtx((e2, l2, t2, n2) => {
      if (!l2)
        return [(openBlock(true), createBlock(Fragment, null, renderList(Y.value, (e3, l3) => {
          var t3;
          return withDirectives((openBlock(), createBlock("div", { key: l3, class: "tag-item-img ll-media bg-base-100", "data-index": l3 }, [M.value && 5 !== J.value && 6 !== J.value ? (openBlock(), createBlock("div", { key: 0, class: "image-con" }, [(null == e3 ? void 0 : e3.min_imgbb_url) ? (openBlock(), createBlock(D3, { key: 0, src: null != (t3 = null == e3 ? void 0 : e3.min_imgbb_url) ? t3 : "", placeholder: [100, 50, 10], loading: "lazy", onClick: (l4) => le(e3) }, null, 8, ["src", "onClick"])) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("div", { class: "text-con" }, [createVNode(O2, { class: "box-item", effect: "dark", content: null == e3 ? void 0 : e3.promptEN, placement: "top" }, { default: withCtx(() => [(null == e3 ? void 0 : e3.title) ? (openBlock(), createBlock("p", { key: 0, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.title.length) > 24 ? (null == e3 ? void 0 : e3.title.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.title), 1)) : (openBlock(), createBlock("p", { key: 1, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.promptEN.length) > 24 ? (null == e3 ? void 0 : e3.promptEN.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.promptEN), 1))]), _: 2 }, 1032, ["content"])]), createVNode("div", { class: "button-con" }, [createVNode("button", { class: "btn btn-sm btn-circle btn-accent m-r-10", onClick: (l4) => unref(L2)(null == e3 ? void 0 : e3.promptEN) }, [createVNode(K2)], 8, ["onClick"]), createVNode("button", { class: "btn btn-sm btn-circle btn-secondary", onClick: (l4) => unref(C2)(null == e3 ? void 0 : e3.promptEN) }, [createVNode(P2)], 8, ["onClick"])])], 8, ["data-index"])), [[W2, { direction: "modifySlideInUp", delay: 40 * l3 }]]);
        }), 128))];
      l2("<!--[-->"), ssrRenderList(Y.value, (e3, i2) => {
        var a2;
        l2(`<div${ssrRenderAttrs(mergeProps({ key: i2, class: "tag-item-img ll-media bg-base-100", "data-index": i2 }, ssrGetDirectiveProps(s2, W2, { direction: "modifySlideInUp", delay: 40 * i2 })))} data-v-9c346e73${n2}>`), M.value && 5 !== J.value && 6 !== J.value ? (l2(`<div class="image-con" data-v-9c346e73${n2}>`), (null == e3 ? void 0 : e3.min_imgbb_url) ? l2(ssrRenderComponent(D3, { src: null != (a2 = null == e3 ? void 0 : e3.min_imgbb_url) ? a2 : "", placeholder: [100, 50, 10], loading: "lazy", onClick: (l3) => le(e3) }, null, t2, n2)) : l2("<!---->"), l2("</div>")) : l2("<!---->"), l2(`<div class="text-con" data-v-9c346e73${n2}>`), l2(ssrRenderComponent(O2, { class: "box-item", effect: "dark", content: null == e3 ? void 0 : e3.promptEN, placement: "top" }, { default: withCtx((l3, t3, n3, i3) => {
          if (!t3)
            return [(null == e3 ? void 0 : e3.title) ? (openBlock(), createBlock("p", { key: 0, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.title.length) > 24 ? (null == e3 ? void 0 : e3.title.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.title), 1)) : (openBlock(), createBlock("p", { key: 1, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.promptEN.length) > 24 ? (null == e3 ? void 0 : e3.promptEN.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.promptEN), 1))];
          (null == e3 ? void 0 : e3.title) ? t3(`<p class="en" data-v-9c346e73${i3}>${ssrInterpolate((null == e3 ? void 0 : e3.title.length) > 24 ? (null == e3 ? void 0 : e3.title.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.title)}</p>`) : t3(`<p class="en" data-v-9c346e73${i3}>${ssrInterpolate((null == e3 ? void 0 : e3.promptEN.length) > 24 ? (null == e3 ? void 0 : e3.promptEN.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.promptEN)}</p>`);
        }), _: 2 }, t2, n2)), l2(`</div><div class="button-con" data-v-9c346e73${n2}><button class="btn btn-sm btn-circle btn-accent m-r-10" data-v-9c346e73${n2}>`), l2(ssrRenderComponent(K2, null, null, t2, n2)), l2(`</button><button class="btn btn-sm btn-circle btn-secondary" data-v-9c346e73${n2}>`), l2(ssrRenderComponent(P2, null, null, t2, n2)), l2("</button></div></div>");
      }), l2("<!--]-->");
    }), _: 1 }, c2)), u2("</div>")) : u2("<!---->"), J.value ? (u2('<div class="tag-list" data-v-9c346e73>'), u2(ssrRenderComponent(r3, null, { default: withCtx((e2, l2, t2, n2) => {
      if (!l2)
        return [(openBlock(true), createBlock(Fragment, null, renderList(Y.value, (e3, l3) => withDirectives((openBlock(), createBlock("div", { key: l3, class: "tag-item-img ll-media bg-base-100", "data-index": l3 }, [M.value && 5 !== J.value && 6 !== J.value ? (openBlock(), createBlock("div", { key: 0, class: "image-con" }, [(null == e3 ? void 0 : e3.fileUrl) ? (openBlock(), createBlock(D3, { key: 0, src: null == e3 ? void 0 : e3.fileUrl, placeholder: [100, 50, 10], loading: "lazy", onClick: (l4) => le(e3) }, null, 8, ["src", "onClick"])) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("div", { class: "text-con" }, [createVNode(O2, { class: "box-item", effect: "dark", content: null == e3 ? void 0 : e3.promptEN, placement: "top" }, { default: withCtx(() => [(null == e3 ? void 0 : e3.title) ? (openBlock(), createBlock("p", { key: 0, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.title.length) > 24 ? (null == e3 ? void 0 : e3.title.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.title), 1)) : (openBlock(), createBlock("p", { key: 1, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.promptEN.length) > 24 ? (null == e3 ? void 0 : e3.promptEN.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.promptEN), 1))]), _: 2 }, 1032, ["content"])]), createVNode("div", { class: "button-con" }, [createVNode("button", { class: "btn btn-sm btn-circle btn-accent m-r-10", onClick: (l4) => unref(L2)(null == e3 ? void 0 : e3.promptEN) }, [createVNode(K2)], 8, ["onClick"]), createVNode("button", { class: "btn btn-sm btn-circle btn-secondary", onClick: (l4) => unref(C2)(null == e3 ? void 0 : e3.promptEN) }, [createVNode(P2)], 8, ["onClick"])])], 8, ["data-index"])), [[W2, { direction: "modifySlideInUp", delay: 40 * l3 }]])), 128))];
      l2("<!--[-->"), ssrRenderList(Y.value, (e3, i2) => {
        l2(`<div${ssrRenderAttrs(mergeProps({ key: i2, class: "tag-item-img ll-media bg-base-100", "data-index": i2 }, ssrGetDirectiveProps(s2, W2, { direction: "modifySlideInUp", delay: 40 * i2 })))} data-v-9c346e73${n2}>`), M.value && 5 !== J.value && 6 !== J.value ? (l2(`<div class="image-con" data-v-9c346e73${n2}>`), (null == e3 ? void 0 : e3.fileUrl) ? l2(ssrRenderComponent(D3, { src: null == e3 ? void 0 : e3.fileUrl, placeholder: [100, 50, 10], loading: "lazy", onClick: (l3) => le(e3) }, null, t2, n2)) : l2("<!---->"), l2("</div>")) : l2("<!---->"), l2(`<div class="text-con" data-v-9c346e73${n2}>`), l2(ssrRenderComponent(O2, { class: "box-item", effect: "dark", content: null == e3 ? void 0 : e3.promptEN, placement: "top" }, { default: withCtx((l3, t3, n3, i3) => {
          if (!t3)
            return [(null == e3 ? void 0 : e3.title) ? (openBlock(), createBlock("p", { key: 0, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.title.length) > 24 ? (null == e3 ? void 0 : e3.title.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.title), 1)) : (openBlock(), createBlock("p", { key: 1, class: "en" }, toDisplayString((null == e3 ? void 0 : e3.promptEN.length) > 24 ? (null == e3 ? void 0 : e3.promptEN.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.promptEN), 1))];
          (null == e3 ? void 0 : e3.title) ? t3(`<p class="en" data-v-9c346e73${i3}>${ssrInterpolate((null == e3 ? void 0 : e3.title.length) > 24 ? (null == e3 ? void 0 : e3.title.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.title)}</p>`) : t3(`<p class="en" data-v-9c346e73${i3}>${ssrInterpolate((null == e3 ? void 0 : e3.promptEN.length) > 24 ? (null == e3 ? void 0 : e3.promptEN.slice(0, 24)) + "..." : null == e3 ? void 0 : e3.promptEN)}</p>`);
        }), _: 2 }, t2, n2)), l2(`</div><div class="button-con" data-v-9c346e73${n2}><button class="btn btn-sm btn-circle btn-accent m-r-10" data-v-9c346e73${n2}>`), l2(ssrRenderComponent(K2, null, null, t2, n2)), l2(`</button><button class="btn btn-sm btn-circle btn-secondary" data-v-9c346e73${n2}>`), l2(ssrRenderComponent(P2, null, null, t2, n2)), l2("</button></div></div>");
      }), l2("<!--]-->");
    }), _: 1 }, c2)), u2("</div>")) : (u2('<div class="tag-list" data-v-9c346e73><!--[-->'), ssrRenderList(Y.value, (e2, l2) => {
      var t2;
      u2(`<div class="tag-item-img ll-media bg-base-100"${ssrRenderAttr("data-index", l2)} data-v-9c346e73>`), M.value && 5 !== J.value && 6 !== J.value ? (u2('<div class="image-con" data-v-9c346e73>'), (null == e2 ? void 0 : e2.min_imgbb_url) ? u2(ssrRenderComponent(D3, { src: null != (t2 = null == e2 ? void 0 : e2.min_imgbb_url) ? t2 : "", placeholder: [100, 50, 10], loading: "lazy", onClick: (l3) => le(e2) }, null, c2)) : u2("<!---->"), u2("</div>")) : u2("<!---->"), u2('<div class="text-con" data-v-9c346e73>'), u2(ssrRenderComponent(O2, { class: "box-item", effect: "dark", content: null == e2 ? void 0 : e2.prompt, placement: "top" }, { default: withCtx((l3, t3, n2, i2) => {
        if (!t3)
          return [(null == e2 ? void 0 : e2.title) ? (openBlock(), createBlock("p", { key: 0, class: "en" }, toDisplayString((null == e2 ? void 0 : e2.title.length) > 24 ? (null == e2 ? void 0 : e2.title.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.title), 1)) : (openBlock(), createBlock("p", { key: 1, class: "en" }, toDisplayString((null == e2 ? void 0 : e2.prompt.length) > 24 ? (null == e2 ? void 0 : e2.prompt.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.prompt), 1))];
        (null == e2 ? void 0 : e2.title) ? t3(`<p class="en" data-v-9c346e73${i2}>${ssrInterpolate((null == e2 ? void 0 : e2.title.length) > 24 ? (null == e2 ? void 0 : e2.title.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.title)}</p>`) : t3(`<p class="en" data-v-9c346e73${i2}>${ssrInterpolate((null == e2 ? void 0 : e2.prompt.length) > 24 ? (null == e2 ? void 0 : e2.prompt.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.prompt)}</p>`);
      }), _: 2 }, c2)), u2('</div><div class="button-con" data-v-9c346e73><button class="btn btn-sm btn-circle btn-accent m-r-10" data-v-9c346e73>'), u2(ssrRenderComponent(K2, null, null, c2)), u2('</button><button class="btn btn-sm btn-circle btn-secondary" data-v-9c346e73>'), u2(ssrRenderComponent(P2, null, null, c2)), u2("</button></div></div>");
    }), u2("<!--]--></div>")), u2("</div>"), u2(ssrRenderComponent(Q2, { modelValue: G.value, "onUpdate:modelValue": (e2) => G.value = e2, "current-template": q.value }, null, c2)), u2("</div>");
  };
} }), D = B.setup;
B.setup = (e2, l2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/pc/tags/chitu.vue"), D ? D(e2, l2) : void 0;
};
const R = di(B, [["__scopeId", "data-v-9c346e73"]]);

export { R as default };
