import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.d43aa17c.mjs';
import d from './AreaTitle.b7e09825.mjs';
import { A } from './index.7c6a213b.mjs';
import { s, p } from './shop.4d5e891e.mjs';
import { ElSwitch } from 'element-plus/lib';
import { defineComponent, withAsyncContext, ref, resolveDirective, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import { d as di } from '../server.mjs';
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
import 'vue-uuid';
import 'element-plus';
import 'vue3-clipboard';

const j = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(s2) {
  let v2, h2;
  const { DefaultTagsApi: j2 } = A(), x2 = ([v2, h2] = withAsyncContext(() => j2.getTags()), v2 = await v2, h2(), v2), I2 = JSON.parse(x2), _ = ref(I2.class);
  ref(_.value[0].data), ref(0);
  const S = ref(false), V = ref("");
  s(), p();
  const y = (e2) => {
    V.value = e2;
  };
  return (a2, o2, l2, s3) => {
    const m2 = n, n2 = g, v3 = d, h3 = ElSwitch, j3 = resolveDirective("animate-css");
    o2(`<div${ssrRenderAttrs(mergeProps({ class: "tags-page page" }, s3))} data-v-3b2f8c00>`), o2(ssrRenderComponent(m2, null, null, l2)), o2('<div class="content" data-v-3b2f8c00>'), o2(ssrRenderComponent(n2, { placeholder: "\u641C\u7D22\u6807\u7B7E", onSearchChange: y }, null, l2)), o2(ssrRenderComponent(v3, mergeProps({ title: "\u6807\u7B7E\u7C7B\u522B" }, ssrGetDirectiveProps(a2, j3, { direction: "modifySlideInUp" })), null, l2)), o2('<div class="type-list" data-v-3b2f8c00>'), o2(ssrRenderComponent(m2, null, null, l2)), o2("</div>"), o2(ssrRenderComponent(v3, mergeProps({ title: "\u6807\u7B7E\u5217\u8868" }, ssrGetDirectiveProps(a2, j3, { direction: "modifySlideInUp" })), { titleSide: withCtx((e2, t2, i2, a3) => {
      if (!t2)
        return [createVNode(h3, { modelValue: S.value, "onUpdate:modelValue": (e3) => S.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CFImage", "active-text": "\u5F00\u542FImage", class: "title-side" }, null, 8, ["modelValue", "onUpdate:modelValue"])];
      t2(ssrRenderComponent(h3, { modelValue: S.value, "onUpdate:modelValue": (e3) => S.value = e3, size: "large", "inline-prompt": "", "inactive-text": "\u9690\u85CFImage", "active-text": "\u5F00\u542FImage", class: "title-side" }, null, i2, a3));
    }), _: 1 }, l2)), o2('<div class="tag-list" data-v-3b2f8c00>'), o2(ssrRenderComponent(m2, null, null, l2)), o2("</div></div></div>");
  };
} }), x = j.setup;
j.setup = (e2, t2) => {
  const i2 = useSSRContext();
  return (i2.modules || (i2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/tags/index.vue"), x ? x(e2, t2) : void 0;
};
const I = di(j, [["__scopeId", "data-v-3b2f8c00"]]);

export { I as default };
