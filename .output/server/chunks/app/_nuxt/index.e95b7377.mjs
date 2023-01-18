import { d as di, n as ni } from '../server.mjs';
import n from './client-only.f5bddb5b.mjs';
import { ElRow } from 'element-plus/lib';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { s } from './sYw7uX71Xe.38399cea.mjs';
import p from 'dayjs';
import { c } from './index.7c6a213b.mjs';
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

const y = defineComponent({ __name: "index", __ssrInlineRender: true, setup(t2) {
  const e2 = c(), o2 = () => p(p().format("YYYY-MM-DD")).diff(e2.userInfo.create_time, "day"), y2 = () => {
    if (!e2.roleId)
      return "";
    return { 1: "\u7BA1\u7406\u5458", 2: "\u5F00\u53D1\u8005", 3: "\u8D21\u732E\u8005", 4: "\u6E38\u5BA2" }[e2.roleId];
  };
  return (t3, p2, $2, g2) => {
    const h2 = ni, x = n, _ = ElRow;
    p2(`<div${ssrRenderAttrs(mergeProps({ class: "profile-page page" }, g2))} data-v-defdb703>`), p2(ssrRenderComponent(h2, { name: "mobile" }, { default: withCtx((a2, t4, s2, d2) => {
      if (!t4)
        return [createVNode(x), createVNode("div", { class: "content" }, [createVNode("div", { class: "banner-con" }, [createVNode("div", { class: "banner-image" }, [createVNode("img", { src: s, alt: "" })])]), createVNode("div", { class: "profile-con" }, [createVNode("div", { class: "avatar-con" }, [createVNode("div", { class: "avatar" }, [createVNode("div", { class: "w-32 rounded-full" }, [createVNode("img", { src: "https://placeimg.com/192/192/people" })])])]), createVNode("div", { class: "info-con" }, [createVNode("div", { class: "left" }, [createVNode("div", { class: "shadow stats" }, [createVNode("div", { class: "stat place-items-center" }, [createVNode("div", { class: "stat-title" }, "\u5173\u6CE8"), createVNode("div", { class: "stat-value" }, "999"), createVNode("div", { class: "stat-desc" }, "\u622A\u6B62 January 1st to February 1st")]), createVNode("div", { class: "stat place-items-center" }, [createVNode("div", { class: "stat-title" }, "\u8FFD\u968F"), createVNode("div", { class: "stat-value text-secondary" }, "4,200"), createVNode("div", { class: "stat-desc text-secondary" }, " \u622A\u6B62 January 1st to February 1st ")])])]), createVNode("div", { class: "center" }, [createVNode("div", { class: "shadow stats" }, [createVNode("div", { class: "stat place-items-center" }, [createVNode("div", { class: "stat-title" }, "\u6635\u79F0"), createVNode("div", { class: "stat-value" }, toDisplayString(unref(e2).nickname), 1), createVNode("div", { class: "stat-desc" }, "\u622A\u6B62 January 1st to February 1st")])])]), createVNode("div", { class: "right" }, [createVNode("div", { class: "shadow stats" }, [createVNode("div", { class: "stat place-items-center" }, [createVNode("div", { class: "stat-title" }, "\u7528\u6237\u7B49\u7EA7"), createVNode("div", { class: "stat-value" }, toDisplayString(y2()), 1), createVNode("div", { class: "stat-desc" }, "\u622A\u6B62 January 1st to February 1st")]), createVNode("div", { class: "stat place-items-center" }, [createVNode("div", { class: "stat-title" }, "\u52A0\u5165\u5929\u6570"), createVNode("div", { class: "stat-value text-secondary" }, toDisplayString(o2()), 1), createVNode("div", { class: "stat-desc text-secondary" }, " \u622A\u6B62 January 1st to February 1st ")])])])])]), createVNode("div", { class: "tabs-con" }, [createVNode("div", { class: "tabs" }, [createVNode("a", { class: "tab tab-lg tab-bordered tab-active" }, "\u6536\u85CF")])]), createVNode("div", { class: "collect-con" }, [createVNode(_, { class: "list-con", gutter: 20 }, { default: withCtx(() => [createVNode(x)]), _: 1 })])])];
      t4(ssrRenderComponent(x, null, null, s2, d2)), t4(`<div class="content" data-v-defdb703${d2}><div class="banner-con" data-v-defdb703${d2}><div class="banner-image" data-v-defdb703${d2}><img${ssrRenderAttr("src", s)} alt="" data-v-defdb703${d2}></div></div><div class="profile-con" data-v-defdb703${d2}><div class="avatar-con" data-v-defdb703${d2}><div class="avatar" data-v-defdb703${d2}><div class="w-32 rounded-full" data-v-defdb703${d2}><img src="https://placeimg.com/192/192/people" data-v-defdb703${d2}></div></div></div><div class="info-con" data-v-defdb703${d2}><div class="left" data-v-defdb703${d2}><div class="shadow stats" data-v-defdb703${d2}><div class="stat place-items-center" data-v-defdb703${d2}><div class="stat-title" data-v-defdb703${d2}>\u5173\u6CE8</div><div class="stat-value" data-v-defdb703${d2}>999</div><div class="stat-desc" data-v-defdb703${d2}>\u622A\u6B62 January 1st to February 1st</div></div><div class="stat place-items-center" data-v-defdb703${d2}><div class="stat-title" data-v-defdb703${d2}>\u8FFD\u968F</div><div class="stat-value text-secondary" data-v-defdb703${d2}>4,200</div><div class="stat-desc text-secondary" data-v-defdb703${d2}> \u622A\u6B62 January 1st to February 1st </div></div></div></div><div class="center" data-v-defdb703${d2}><div class="shadow stats" data-v-defdb703${d2}><div class="stat place-items-center" data-v-defdb703${d2}><div class="stat-title" data-v-defdb703${d2}>\u6635\u79F0</div><div class="stat-value" data-v-defdb703${d2}>${ssrInterpolate(unref(e2).nickname)}</div><div class="stat-desc" data-v-defdb703${d2}>\u622A\u6B62 January 1st to February 1st</div></div></div></div><div class="right" data-v-defdb703${d2}><div class="shadow stats" data-v-defdb703${d2}><div class="stat place-items-center" data-v-defdb703${d2}><div class="stat-title" data-v-defdb703${d2}>\u7528\u6237\u7B49\u7EA7</div><div class="stat-value" data-v-defdb703${d2}>${ssrInterpolate(y2())}</div><div class="stat-desc" data-v-defdb703${d2}>\u622A\u6B62 January 1st to February 1st</div></div><div class="stat place-items-center" data-v-defdb703${d2}><div class="stat-title" data-v-defdb703${d2}>\u52A0\u5165\u5929\u6570</div><div class="stat-value text-secondary" data-v-defdb703${d2}>${ssrInterpolate(o2())}</div><div class="stat-desc text-secondary" data-v-defdb703${d2}> \u622A\u6B62 January 1st to February 1st </div></div></div></div></div></div><div class="tabs-con" data-v-defdb703${d2}><div class="tabs" data-v-defdb703${d2}><a class="tab tab-lg tab-bordered tab-active" data-v-defdb703${d2}>\u6536\u85CF</a></div></div><div class="collect-con" data-v-defdb703${d2}>`), t4(ssrRenderComponent(_, { class: "list-con", gutter: 20 }, { default: withCtx((a3, t5, s3, d3) => {
        if (!t5)
          return [createVNode(x)];
        t5(ssrRenderComponent(x, null, null, s3, d3));
      }), _: 1 }, s2, d2)), t4("</div></div>");
    }), _: 1 }, $2)), p2("</div>");
  };
} }), g = y.setup;
y.setup = (a2, t2) => {
  const s2 = useSSRContext();
  return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/profile/index.vue"), g ? g(a2, t2) : void 0;
};
const h = di(y, [["__scopeId", "data-v-defdb703"]]);

export { h as default };
