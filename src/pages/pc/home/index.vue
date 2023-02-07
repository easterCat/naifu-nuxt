<template>
    <div class="home-page page">
        <ClientOnly>
            <PcAppShadow />
            <PcAppHeader />
        </ClientOnly>
        <ClientOnly>
            <div
                v-animate-css="{
                    direction: 'modifySlideInUp',
                    delay: 0,
                }"
                class="content"
            >
                <div class="banner-con">
                    <PcAppBanner
                        placeholder="请输入关键标签"
                        @search-change="searchChange"
                    ></PcAppBanner>
                </div>
                <div class="btn-con">
                    <PcImageFlur @get-image-flur="getImageFlur"></PcImageFlur>
                </div>
                <common-water-fall
                    :loading="loadingStatus"
                    :datas="imageList"
                    :flur="imageFlur"
                    :search-text="searchText"
                    :favorite-ids="indexStore.favoriteIds"
                    @load="scrollLoad"
                    @preview="showDetail"
                    @favorite="likeTemplate"
                    @loaded="loadingFinish"
                ></common-water-fall>
            </div>
        </ClientOnly>

        <PcTemplateDetail
            v-model="showPreview"
            :current-template="currentTemplate"
        ></PcTemplateDetail>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import lodash from 'lodash';
import { useIndexStore } from '~~/src/store/index';
import { warnNotification } from '@/utils/notification';

interface ImageItem {
    name: string;
    author: string;
    category: string;
    desc: boolean;
    height: number;
    id: number;
    like_address: string;
    like: number;
    model: boolean;
    prompt: string;
    prompt_zh: string;
    n_prompt: string;
    n_prompt_zh: string;
    seed: string;
    preview: string;
    minify_preview: string;
    sampler: string;
    skip: string;
    size: string;
    step: string;
    scale: string;
    _width?: number;
    _height?: number;
    _top?: number;
    _left?: number;
    _error?: boolean;
}

let indexStore: any = null;
const { TemplateApi } = useApi();
const { $store }: any = useNuxtApp();
const showPreview = ref(false);
const currentTemplate: Ref<any | null> = ref(null);
const loadingStatus: Ref<boolean> = ref(false);
const pageIndex = ref(1);
const pageSize = ref(50);
const ip = ref('');
const searchText = ref('');
const imageList: Ref<ImageItem[]> = ref([]);
const imageFlur = ref('high');

const getImageFlur = (value: any) => {
    imageFlur.value = value;
};

const initList = async () => {
    TemplateApi.setIp();
    const initPageIndex = Math.ceil(Math.random() * 100);
    loadingStatus.value = true;
    const result = await TemplateApi.getTemplates({
        pageIndex: initPageIndex ? initPageIndex : 1,
        pageSize: 50,
    });
    imageList.value = result?.templates ? result?.templates : [];
};

const showDetail = (tem: any) => {
    currentTemplate.value = { ...tem };
    showPreview.value = true;
};

const searchChange = lodash.debounce(async (val: any) => {
    if (val === searchText.value) return;
    imageList.value = [];
    searchText.value = val;
    loadingStatus.value = true;
    const result: any = await TemplateApi.getTemplates({
        pageIndex: pageIndex.value,
        pageSize: pageSize.value,
        searchTag: searchText.value,
    });
    imageList.value = result?.templates && result?.templates.length !== 0 ? result?.templates : [];
}, 1200);

const likeTemplate = async (id: number) => {
    const result: any = await TemplateApi.likeTemplateById({
        templateId: id,
        userId: indexStore?.userId,
    });
    if (result.code === 200) {
        indexStore.addFavoriteById(result.data);
    }
};

const scrollLoad = async (page: any) => {
    if (loadingStatus.value) return;
    loadingStatus.value = true;
    const result: any = await TemplateApi.getTemplates({
        pageIndex: page.pageIndex,
        pageSize: page.pageSize,
        searchTag: searchText.value,
    });
    if (result?.templates && result?.templates.length > 0) {
        const lists = result?.templates ? result?.templates : [];
        imageList.value = imageList.value.concat([...lists]);
    } else {
        loadingStatus.value = false;
        return warnNotification('没有更多数据!');
    }
};

const loadingFinish = () => {
    loadingStatus.value = false;
};

onMounted(() => {
    indexStore = useIndexStore();
    ip.value = $store.get('ip');
    initList();
});
</script>

<style lang="scss" scoped>
.home-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;
    .content {
        padding: 20px 12px 20px 12px;
    }
    .banner-con {
        padding-left: 8px;
        padding-right: 8px;
    }

    .btn-con {
        padding-left: 8px;
    }

    .btn-s-30 {
        background-color: hsl(var(--s) / 0.3);
    }
}
</style>
