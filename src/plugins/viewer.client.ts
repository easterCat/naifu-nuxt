import 'viewerjs/dist/viewer.css';
import VueViewer, { api } from 'v-viewer';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueViewer as any, {
        property: {
            id: 'VUE_VIEWER_ID',
        },
    });

    return {
        provide: {
            viewerApi: api,
        },
    };
});
