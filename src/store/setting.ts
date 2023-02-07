import { defineStore } from 'pinia';

export const useSettingStore = defineStore({
    id: 'setting-store',
    state: () => {
        return {
            // draw页面的默认生成图片数量
            drawNumber: 1,
            // 标签界面默认开始图片显示
            tagImageVisible: true,
        };
    },
    getters: { getTagImageVisible: (state) => state.tagImageVisible },
    actions: {
        setDrawNumber(num: any) {
            this.drawNumber = num;
        },
        setTagImageVisible(visible: boolean) {
            this.tagImageVisible = visible;
        },
    },
});
