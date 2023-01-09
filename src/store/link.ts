import { defineStore } from 'pinia';

export const useLinkStore = defineStore({
    id: 'link-store',
    state: () => {
        return {
            links: [],
            types: [],
        };
    },
    getters: {
        linkList: (state) => state.links,
        typeList: (state) => state.types,
    },
    actions: {
        setLinks(value: any) {
            this.links = value;
        },
        setTypes(value: any) {
            this.types = value;
        },
    },
});
