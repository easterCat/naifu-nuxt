import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.0455c2c4.mjs';
import d from './AreaTitle.512d3722.mjs';
import { A } from './index.7c6a213b.mjs';
import { s, p } from './shop.269c075a.mjs';
import { defineComponent, withAsyncContext, ref, watch, resolveDirective, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ElSwitch } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import { t } from './setting.a7e60345.mjs';
import { d as di } from '../server.mjs';
import './AppAnimate.b0d9e6d2.mjs';
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
import 'vue-uuid';
import 'element-plus';
import 'vue3-clipboard';

const _ = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(s2) {
  let v2, x2;
  const _2 = t(), { DefaultTagsApi: V2 } = A();
  s(), p();
  const S2 = ([v2, x2] = withAsyncContext(() => V2.getTags()), v2 = await v2, x2(), v2), y = JSON.parse(S2), A$1 = ref(y.class);
  ref(A$1.value[0].data), ref(0);
  const I = ref(false), U = ref("");
  watch(I, (e2) => {
    _2.setTagImageVisible(e2);
  });
  const T = (e2) => {
    U.value = e2;
  };
  return (a2, o2, l2, s3) => {
    const r2 = n, n2 = g, p2 = d, v3 = ElSwitch, j2 = resolveDirective("animate-css");
    o2(`<div${ssrRenderAttrs(mergeProps({ class: "tags-page page" }, s3))} data-v-6913cb0a>`), o2(ssrRenderComponent(r2, null, null, l2)), o2('<div class="content" data-v-6913cb0a>'), o2(ssrRenderComponent(n2, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: T }, null, l2)), o2(ssrRenderComponent(p2, mergeProps({ title: "\u6807\u7B7E\u7C7B\u522B" }, ssrGetDirectiveProps(a2, j2, { direction: "modifySlideInUp" })), null, l2)), o2('<div class="type-list" data-v-6913cb0a>'), o2(ssrRenderComponent(r2, null, null, l2)), o2("</div>"), o2(ssrRenderComponent(p2, mergeProps({ title: "\u6807\u7B7E\u5217\u8868" }, ssrGetDirectiveProps(a2, j2, { direction: "modifySlideInUp" })), { titleSide: withCtx((e2, t2, i2, a3) => {
      if (!t2)
        return [createVNode(v3, { modelValue: I.value, "onUpdate:modelValue": (e3) => I.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CF", "active-text": "\u5F00\u542F", class: "title-side" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
      t2(ssrRenderComponent(v3, { modelValue: I.value, "onUpdate:modelValue": (e3) => I.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CF", "active-text": "\u5F00\u542F", class: "title-side" }, null, i2, a3));
    }), _: 1 }, l2)), o2('<div class="tag-list" data-v-6913cb0a>'), o2(ssrRenderComponent(r2, null, null, l2)), o2("</div></div></div>");
  };
} }), V = _.setup;
_.setup = (e2, t2) => {
  const i2 = useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("pages/pc/tags/index.vue"), V ? V(e2, t2) : void 0;
};
const S = di(_, [["__scopeId", "data-v-6913cb0a"]]);

export { S as default };
