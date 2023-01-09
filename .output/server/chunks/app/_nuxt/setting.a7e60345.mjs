import { G as Ge } from '../server.mjs';

const t = Ge({ id: "setting-store", state: () => ({ drawNumber: 1, tagImageVisible: false }), getters: { getTagImageVisible: (e2) => e2.tagImageVisible }, actions: { setDrawNumber(e2) {
  this.drawNumber = e2;
}, setTagImageVisible(e2) {
  this.tagImageVisible = e2;
} } });

export { t };
