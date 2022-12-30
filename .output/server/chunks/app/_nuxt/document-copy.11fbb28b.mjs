import { createElementVNode, openBlock, createElementBlock } from 'vue';

const o = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, t = [createElementVNode("path", { fill: "currentColor", d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z" }, null, -1)];
const a = { name: "ep-document-copy", render: function(v2, a2) {
  return openBlock(), createElementBlock("svg", o, t);
} };

export { a };
