import { createElementVNode, openBlock, createElementBlock } from 'vue';

const r = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, t = [createElementVNode("path", { fill: "currentColor", d: "m199.04 672.64l193.984 112l224-387.968l-193.92-112l-224 388.032zm-23.872 60.16l32.896 148.288l144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112l56.704-98.112l-193.984-112l-56.64 98.112zM104.32 708.8l384-665.024l304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z" }, null, -1)];
const o = { name: "ep-edit-pen", render: function(n2, o2) {
  return openBlock(), createElementBlock("svg", r, t);
} }, h = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, i = [createElementVNode("path", { fill: "currentColor", d: "M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z" }, null, -1)];
const a = { name: "ep-home-filled", render: function(n2, r2) {
  return openBlock(), createElementBlock("svg", h, i);
} }, m = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, u = [createElementVNode("path", { fill: "currentColor", d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z" }, null, -1)];
const d = { name: "ep-arrow-left-bold", render: function(n2, r2) {
  return openBlock(), createElementBlock("svg", m, u);
} };

export { a, d, o };
