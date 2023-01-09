import n from './client-only.f5bddb5b.mjs';
import { c, A } from './index.7c6a213b.mjs';
import { G as Ge, U, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, useSSRContext, nextTick } from 'vue';
import { ElMessage, ElDialog, ElForm, ElFormItem, ElInput, ElSwitch, ElButton } from 'element-plus/lib';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { ID_INJECTION_KEY } from 'element-plus';
import 'vue-uuid';
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

Ge({ id: "link-store", state: () => ({ links: [], types: [] }), getters: { linkList: (e2) => e2.links, typeList: (e2) => e2.types }, actions: { setLinks(e2) {
  this.links = e2;
}, setTypes(e2) {
  this.types = e2;
} } });
const C = defineComponent({ __name: "LinkList", __ssrInlineRender: true, props: { filter: String, showLeftMenu: Boolean }, emits: ["editEvent", "deleteEvent"], setup(u2) {
  const { LinkApi: t2 } = A();
  U().vueApp.provide(ID_INJECTION_KEY, { prefix: Math.floor(1e3 * Math.random()), current: 0 }), c(), ref(false), ref(0), ref(false);
  const V2 = ref(false), x2 = ref(""), C2 = ref(), j2 = ref(""), I2 = ref(""), $ = ref(""), F = ref(false), M = ref(""), R = ref(null);
  const S = async () => {
    const { links: e2 } = await t2.getLinks();
    null.setLinks(e2), null.setTypes([...new Set(e2.map((e3) => e3.link_type))]);
  }, A$1 = () => {
    V2.value = false, x2.value = "", nextTick(() => {
      var e2;
      null == (e2 = C2.value) || e2.resetFields();
    });
  }, E = () => {
    "add" === x2.value && T(), "edit" === x2.value && q();
  }, T = async () => {
    if (200 === (await t2.addLink({ name: j2.value, href: I2.value, type: $.value, hot: F.value, icon: M.value })).code)
      return A$1(), nextTick(() => {
        S();
      }), ElMessage({ showClose: true, message: "\u65B0\u5EFA\u6210\u529F", type: "success" });
  }, q = async () => {
    if (200 === (await t2.updateLink({ name: j2.value, href: I2.value, type: $.value, hot: F.value, id: R.value, icon: M.value })).code)
      return A$1(), nextTick(() => {
        S();
      }), ElMessage({ showClose: true, message: "\u66F4\u65B0\u6210\u529F", type: "success" });
  };
  return (l2, a2, u3, o2) => {
    const t3 = n, d2 = ElDialog, f2 = ElForm, v2 = ElFormItem, g2 = ElInput, R2 = ElSwitch, S2 = ElButton;
    a2(`<div${ssrRenderAttrs(mergeProps({ class: "link-con" }, o2))} data-v-19f38af2>`), a2(ssrRenderComponent(t3, null, null, u3)), a2(ssrRenderComponent(t3, null, null, u3)), a2(ssrRenderComponent(d2, { modelValue: unref(V2), "onUpdate:modelValue": (e2) => isRef(V2) ? V2.value = e2 : null, title: "add" === unref(x2) ? "\u65B0\u589E" : "\u7F16\u8F91", width: "600px", "destroy-on-close": "", "before-close": A$1 }, { footer: withCtx((e2, l3, a3, u4) => {
      if (!l3)
        return [createVNode("span", { class: "dialog-footer" }, [createVNode(S2, { onClick: A$1 }, { default: withCtx(() => [createTextVNode("\u53D6\u6D88")]), _: 1 }), createVNode(S2, { type: "primary", onClick: E }, { default: withCtx(() => [createTextVNode("\u786E\u5B9A")]), _: 1 })])];
      l3(`<span class="dialog-footer" data-v-19f38af2${u4}>`), l3(ssrRenderComponent(S2, { onClick: A$1 }, { default: withCtx((e3, l4, a4, u5) => {
        if (!l4)
          return [createTextVNode("\u53D6\u6D88")];
        l4("\u53D6\u6D88");
      }), _: 1 }, a3, u4)), l3(ssrRenderComponent(S2, { type: "primary", onClick: E }, { default: withCtx((e3, l4, a4, u5) => {
        if (!l4)
          return [createTextVNode("\u786E\u5B9A")];
        l4("\u786E\u5B9A");
      }), _: 1 }, a3, u4)), l3("</span>");
    }), default: withCtx((e2, l3, a3, u4) => {
      if (!l3)
        return [createVNode("div", null, [createVNode(f2, { ref_key: "ruleFormRef", ref: C2, "label-width": "110px" }, { default: withCtx(() => [createVNode(v2, { label: "\u94FE\u63A5\u540D\u79F0" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref(j2), "onUpdate:modelValue": (e3) => isRef(j2) ? j2.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(v2, { label: "\u94FE\u63A5" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref(I2), "onUpdate:modelValue": (e3) => isRef(I2) ? I2.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(v2, { label: "Icon" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref(M), "onUpdate:modelValue": (e3) => isRef(M) ? M.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(v2, { label: "\u7C7B\u522B" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref($), "onUpdate:modelValue": (e3) => isRef($) ? $.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode("div", { style: { float: "right" } }, "(hot,prompt,online,other)"), createVNode(v2, { label: "\u70ED\u95E8" }, { default: withCtx(() => [createVNode(R2, { modelValue: unref(F), "onUpdate:modelValue": (e3) => isRef(F) ? F.value = e3 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 })]), _: 1 }, 512)])];
      l3(`<div data-v-19f38af2${u4}>`), l3(ssrRenderComponent(f2, { ref_key: "ruleFormRef", ref: C2, "label-width": "110px" }, { default: withCtx((e3, l4, a4, u5) => {
        if (!l4)
          return [createVNode(v2, { label: "\u94FE\u63A5\u540D\u79F0" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref(j2), "onUpdate:modelValue": (e4) => isRef(j2) ? j2.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(v2, { label: "\u94FE\u63A5" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref(I2), "onUpdate:modelValue": (e4) => isRef(I2) ? I2.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(v2, { label: "Icon" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref(M), "onUpdate:modelValue": (e4) => isRef(M) ? M.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode(v2, { label: "\u7C7B\u522B" }, { default: withCtx(() => [createVNode(g2, { modelValue: unref($), "onUpdate:modelValue": (e4) => isRef($) ? $.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }), createVNode("div", { style: { float: "right" } }, "(hot,prompt,online,other)"), createVNode(v2, { label: "\u70ED\u95E8" }, { default: withCtx(() => [createVNode(R2, { modelValue: unref(F), "onUpdate:modelValue": (e4) => isRef(F) ? F.value = e4 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 })];
        l4(ssrRenderComponent(v2, { label: "\u94FE\u63A5\u540D\u79F0" }, { default: withCtx((e4, l5, a5, u6) => {
          if (!l5)
            return [createVNode(g2, { modelValue: unref(j2), "onUpdate:modelValue": (e5) => isRef(j2) ? j2.value = e5 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])];
          l5(ssrRenderComponent(g2, { modelValue: unref(j2), "onUpdate:modelValue": (e5) => isRef(j2) ? j2.value = e5 : null }, null, a5, u6));
        }), _: 1 }, a4, u5)), l4(ssrRenderComponent(v2, { label: "\u94FE\u63A5" }, { default: withCtx((e4, l5, a5, u6) => {
          if (!l5)
            return [createVNode(g2, { modelValue: unref(I2), "onUpdate:modelValue": (e5) => isRef(I2) ? I2.value = e5 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])];
          l5(ssrRenderComponent(g2, { modelValue: unref(I2), "onUpdate:modelValue": (e5) => isRef(I2) ? I2.value = e5 : null }, null, a5, u6));
        }), _: 1 }, a4, u5)), l4(ssrRenderComponent(v2, { label: "Icon" }, { default: withCtx((e4, l5, a5, u6) => {
          if (!l5)
            return [createVNode(g2, { modelValue: unref(M), "onUpdate:modelValue": (e5) => isRef(M) ? M.value = e5 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])];
          l5(ssrRenderComponent(g2, { modelValue: unref(M), "onUpdate:modelValue": (e5) => isRef(M) ? M.value = e5 : null }, null, a5, u6));
        }), _: 1 }, a4, u5)), l4(ssrRenderComponent(v2, { label: "\u7C7B\u522B" }, { default: withCtx((e4, l5, a5, u6) => {
          if (!l5)
            return [createVNode(g2, { modelValue: unref($), "onUpdate:modelValue": (e5) => isRef($) ? $.value = e5 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])];
          l5(ssrRenderComponent(g2, { modelValue: unref($), "onUpdate:modelValue": (e5) => isRef($) ? $.value = e5 : null }, null, a5, u6));
        }), _: 1 }, a4, u5)), l4(`<div style="${ssrRenderStyle({ float: "right" })}" data-v-19f38af2${u5}>(hot,prompt,online,other)</div>`), l4(ssrRenderComponent(v2, { label: "\u70ED\u95E8" }, { default: withCtx((e4, l5, a5, u6) => {
          if (!l5)
            return [createVNode(R2, { modelValue: unref(F), "onUpdate:modelValue": (e5) => isRef(F) ? F.value = e5 : null }, null, 8, ["modelValue", "onUpdate:modelValue"])];
          l5(ssrRenderComponent(R2, { modelValue: unref(F), "onUpdate:modelValue": (e5) => isRef(F) ? F.value = e5 : null }, null, a5, u6));
        }), _: 1 }, a4, u5));
      }), _: 1 }, a3, u4)), l3("</div>");
    }), _: 1 }, u3)), a2("</div>");
  };
} }), j = C.setup;
C.setup = (e2, l2) => {
  const a2 = useSSRContext();
  return (a2.modules || (a2.modules = /* @__PURE__ */ new Set())).add("components/pc/LinkList.vue"), j ? j(e2, l2) : void 0;
};
const I = di(C, [["__scopeId", "data-v-19f38af2"]]);

export { I as default };
