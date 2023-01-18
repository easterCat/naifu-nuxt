import n from './client-only.f5bddb5b.mjs';
import g from './AppBanner.0455c2c4.mjs';
import u from './ImageFlur.b6cb8c8a.mjs';
import x from './TemplateDetail.529c9e3c.mjs';
import { U, d as di } from '../server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { p } from './shop.269c075a.mjs';
import { A as A$1 } from './index.7c6a213b.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import de from 'lodash';
import { ID_INJECTION_KEY } from 'element-plus';
import './AppAnimate.b0d9e6d2.mjs';
import 'element-plus/lib';
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
import 'vue-uuid';

const A = defineComponent({ __name: "sfw", __ssrInlineRender: true, setup(n2) {
  U().vueApp.provide(ID_INJECTION_KEY, { prefix: Math.floor(1e3 * Math.random()), current: 0 }), p();
  const { TemplateApi: m2 } = A$1(), _2 = ref(false), A2 = ref(1), $2 = ref(36), y2 = ref(0);
  ref(0);
  const I = ref(false), T = ref([]), S = ref(null), k = ref("high"), F = ref(""), M = computed(() => Array.from({ length: y2.value }, (e2, t2) => t2).slice(A2.value > 3 ? A2.value - 3 : A2.value, A2.value + 3)), V = (e2) => {
    k.value = e2;
  }, X = de.debounce(async (e2) => {
    if (e2 === F.value)
      return;
    T.value = [], F.value = e2, _2.value = true;
    const t2 = await m2.getTemplates({ pageIndex: A2.value, pageSize: $2.value, searchTag: F.value });
    _2.value = false, T.value = (null == t2 ? void 0 : t2.templates) && 0 !== (null == t2 ? void 0 : t2.templates.length) ? null == t2 ? void 0 : t2.templates : [];
  }, 1200);
  return (l2, n3, u2, r2) => {
    const m3 = n, b2 = g, d2 = u, j2 = x;
    n3(`<div${ssrRenderAttrs(mergeProps({ class: "template-page page" }, r2))} data-v-9bfba87e>`), n3(ssrRenderComponent(m3, null, null, u2)), n3('<div class="content" data-v-9bfba87e><div class="banner-con" data-v-9bfba87e>'), n3(ssrRenderComponent(b2, { placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u6807\u7B7E", onSearchChange: unref(X) }, null, u2)), n3("</div>"), n3(ssrRenderComponent(d2, { onGetImageFlur: V }, null, u2)), n3(ssrRenderComponent(m3, null, null, u2)), n3('<div class="demo-pagination-block" data-v-9bfba87e>'), unref(y2) && unref(y2) > 0 ? (n3('<div class="btn-group" data-v-9bfba87e><button class="btn btn-outline" data-v-9bfba87e>\u9996\u9875</button><button class="btn btn-outline" data-v-9bfba87e>\u4E0A\u4E00\u9875</button><!--[-->'), ssrRenderList(unref(M), (e2, t2) => {
      n3(`<button class="${ssrRenderClass([{ "btn-active": e2 === unref(A2) }, "btn"])}" data-v-9bfba87e>${ssrInterpolate(e2)}</button>`);
    }), n3("<!--]-->"), unref(A2) < unref(y2) - 3 ? n3('<button class="btn" data-v-9bfba87e>...</button>') : n3("<!---->"), n3(`<button class="${ssrRenderClass([{ "btn-active": unref(y2) === unref(A2) }, "btn"])}" data-v-9bfba87e>${ssrInterpolate(unref(y2))}</button><button class="btn btn-outline" data-v-9bfba87e>\u4E0B\u4E00\u9875</button><button class="btn btn-outline" data-v-9bfba87e>\u5C3E\u9875</button><input${ssrRenderAttr("value", unref(A2))} type="text" placeholder="go" class="w-24 max-w-xs input input-bordered" data-v-9bfba87e></div>`)) : n3("<!---->"), n3("</div></div>"), n3(ssrRenderComponent(j2, { modelValue: unref(I), "onUpdate:modelValue": (e2) => isRef(I) ? I.value = e2 : null, "current-template": unref(S) }, null, u2)), n3("</div>");
  };
} }), $ = A.setup;
A.setup = (e2, t2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("pages/pc/template/sfw.vue"), $ ? $(e2, t2) : void 0;
};
const y = di(A, [["__scopeId", "data-v-9bfba87e"]]);

export { y as default };
