import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.d43aa17c.mjs';
import d from './AreaTitle.b7e09825.mjs';
import { _ as f } from './nuxt-img.fed184f3.mjs';
import z from './TemplateDetail.57da46ce.mjs';
import { s, p } from './shop.4d5e891e.mjs';
import { A } from './index.7c6a213b.mjs';
import { d as di, Q } from '../server.mjs';
import { defineComponent, reactive, ref, onUnmounted, resolveDirective, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { a } from './document-copy.11fbb28b.mjs';
import { t } from './shopping-trolley.94b396ca.mjs';
import { ElSwitch, ElTooltip } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import se from 'lodash';
import './AppAnimate.0c3d74c4.mjs';
import './sYw7uX71Xe.38399cea.mjs';
import '@element-plus/icons-vue';
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
import './copy-document.b505b457.mjs';
import 'vue3-clipboard';
import 'element-plus';
import 'vue-uuid';

const T = defineComponent({ __name: "chitu", __ssrInlineRender: true, setup(r2) {
  s(), p();
  const { TemplateApi: j2 } = A(), U2 = async (e2) => {
    const t2 = (await Q(e2, "$1vuEopxJgr")).data;
    return JSON.parse(t2._rawValue);
  };
  reactive([{ name: "\u53C2\u8003\u56FE", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_cankaotu.json") }, { name: "\u4EBA\u7269", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_huageren.json") }, { name: "\u7269\u4F53", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_huagewuti.json") }, { name: "\u6784\u56FE", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_goutu.json") }, { name: "\u753B\u98CE", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_huafeng.json") }, { name: "\u6B63\u9762\u8BCD\u7EC4", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_zhengmiantag.json") }, { name: "\u8D1F\u9762\u8BCD\u7EC4", file: U2("https://raw.githubusercontent.com/easterCat/nuxt-utils-assets/main/json/NovelAI_fumiantag.json") }]);
  const T2 = ref([]), E2 = ref(0), H2 = ref(true), J = ref(""), X = ref({}), B = ref(false), D = ref(1), L = ref(50), O = ref();
  let R = [], Y = 0;
  const q = (e2) => {
    J.value = e2;
  }, F = () => {
    T2.value = T2.value.concat(R.slice(50 * Y, 50 * (Y + 1)));
  }, G = se.throttle(() => {
    const e2 = O.value.scrollTop;
    O.value.scrollHeight - (e2 + (document.documentElement.clientHeight || document.body.clientHeight)) <= 100 && (console.log("\u89E6\u5E95"), E2.value ? (Y++, F()) : (D.value++, (async () => {
      const e3 = await j2.getTemplatesChitu({ pageIndex: D.value, pageSize: L.value });
      T2.value = [...T2.value, ...(null == e3 ? void 0 : e3.templates) ? e3.templates : []];
    })()));
  }, 1500);
  return onUnmounted(() => {
    O.value.removeEventListener("scroll", G);
  }), (n2, i2, s2, u2) => {
    const r3 = n, m2 = g, p2 = d, d2 = ElSwitch, j3 = f, $2 = ElTooltip, U3 = t, J2 = a, D2 = z, L2 = resolveDirective("animate-css");
    i2(`<div${ssrRenderAttrs(mergeProps({ class: "chitu-tags-page page" }, u2))} data-v-d19472b3>`), i2(ssrRenderComponent(r3, null, null, s2)), i2('<div class="content" data-v-d19472b3>'), i2(ssrRenderComponent(m2, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: q }, null, s2)), i2(ssrRenderComponent(p2, mergeProps({ title: "\u6807\u7B7E\u7C7B\u522B" }, ssrGetDirectiveProps(n2, L2, { direction: "modifySlideInUp" })), null, s2)), i2('<div class="type-list" data-v-d19472b3>'), i2(ssrRenderComponent(r3, null, null, s2)), i2("</div>"), i2(ssrRenderComponent(p2, mergeProps({ title: "\u6807\u7B7E\u5217\u8868" }, ssrGetDirectiveProps(n2, L2, { direction: "modifySlideInUp" })), { titleSide: withCtx((e2, t2, l2, a2) => {
      if (!t2)
        return [createVNode(d2, { modelValue: H2.value, "onUpdate:modelValue": (e3) => H2.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CFImage", "active-text": "\u5F00\u542FImage", class: "title-side" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
      t2(ssrRenderComponent(d2, { modelValue: H2.value, "onUpdate:modelValue": (e3) => H2.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CFImage", "active-text": "\u5F00\u542FImage", class: "title-side" }, null, l2, a2));
    }), _: 1 }, s2)), unref(Y) ? (i2('<div class="tag-list" data-v-d19472b3>'), i2(ssrRenderComponent(r3, null, null, s2)), i2("</div>")) : i2("<!---->"), E2.value ? (i2('<div class="tag-list" data-v-d19472b3>'), i2(ssrRenderComponent(r3, null, null, s2)), i2("</div>")) : (i2('<div class="tag-list" data-v-d19472b3><!--[-->'), ssrRenderList(T2.value, (e2, t2) => {
      var l2;
      i2(`<div class="tag-item-img ll-media bg-base-100"${ssrRenderAttr("data-index", t2)} data-v-d19472b3>`), H2.value && 5 !== E2.value && 6 !== E2.value ? (i2('<div class="image-con" data-v-d19472b3>'), (null == e2 ? void 0 : e2.min_imgbb_url) ? i2(ssrRenderComponent(j3, { src: null != (l2 = null == e2 ? void 0 : e2.min_imgbb_url) ? l2 : "", placeholder: [100, 50, 10], loading: "lazy", onClick: (t3) => ((e3) => {
        E2.value ? (X.value = { author: e3.author, n_prompt: e3.n_prompt, preview: e3.preview, model: e3.model, prompt: e3.prompt, prompt_zh: e3.prompt_zh, name: e3.name, desc: e3.desc }, B.value = true) : (X.value = { name: e3.name, author: e3.author, preview: e3.imgbb_url ? e3.imgbb_url : e3.preview, prompt: e3.prompt, prompt_zh: e3.prompt_zh, n_prompt: e3.n_prompt, model: e3.model, desc: e3.desc, like: e3.like }, B.value = true);
      })(e2) }, null, s2)) : i2("<!---->"), i2("</div>")) : i2("<!---->"), i2('<div class="text-con" data-v-d19472b3>'), i2(ssrRenderComponent($2, { class: "box-item", effect: "dark", content: null == e2 ? void 0 : e2.prompt, placement: "top" }, { default: withCtx((t3, l3, a2, o2) => {
        if (!l3)
          return [(null == e2 ? void 0 : e2.title) ? (openBlock(), createBlock("p", { key: 0, class: "en" }, toDisplayString((null == e2 ? void 0 : e2.title.length) > 24 ? (null == e2 ? void 0 : e2.title.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.title), 1)) : (openBlock(), createBlock("p", { key: 1, class: "en" }, toDisplayString((null == e2 ? void 0 : e2.prompt.length) > 24 ? (null == e2 ? void 0 : e2.prompt.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.prompt), 1))];
        (null == e2 ? void 0 : e2.title) ? l3(`<p class="en" data-v-d19472b3${o2}>${ssrInterpolate((null == e2 ? void 0 : e2.title.length) > 24 ? (null == e2 ? void 0 : e2.title.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.title)}</p>`) : l3(`<p class="en" data-v-d19472b3${o2}>${ssrInterpolate((null == e2 ? void 0 : e2.prompt.length) > 24 ? (null == e2 ? void 0 : e2.prompt.slice(0, 24)) + "..." : null == e2 ? void 0 : e2.prompt)}</p>`);
      }), _: 2 }, s2)), i2('</div><div class="button-con" data-v-d19472b3><button class="btn btn-sm btn-circle btn-accent m-r-10" data-v-d19472b3>'), i2(ssrRenderComponent(U3, null, null, s2)), i2('</button><button class="btn btn-sm btn-circle btn-secondary" data-v-d19472b3>'), i2(ssrRenderComponent(J2, null, null, s2)), i2("</button></div></div>");
    }), i2("<!--]--></div>")), i2("</div>"), i2(ssrRenderComponent(D2, { modelValue: B.value, "onUpdate:modelValue": (e2) => B.value = e2, "current-template": X.value }, null, s2)), i2("</div>");
  };
} }), E = T.setup;
T.setup = (e2, t2) => {
  const l2 = useSSRContext();
  return (l2.modules || (l2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/chitu.vue"), E ? E(e2, t2) : void 0;
};
const H = di(T, [["__scopeId", "data-v-d19472b3"]]);

export { H as default };
