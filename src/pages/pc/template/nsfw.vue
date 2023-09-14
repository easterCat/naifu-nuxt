<template>
    <div class="nsfw-page page">
        <PcAppShadow />
        <PcAppHeader />
        <div class="content">
            <div class="banner-con">
                <PcAppBanner
                    placeholder="请输入关键标签"
                    @search-change="searchChange"
                ></PcAppBanner>
            </div>
            <PcImageFlur @get-image-flur="getImageFlur">
                <template #right>
                    <select
                        class="w-32 max-w-xs select select-bordered select-sm"
                        :disabled="loading"
                        @change="dataFromChange"
                    >
                        <option :selected="curDataFrom === 'Noval'">Noval</option>
                        <option :selected="curDataFrom === 'Gelbooru'">Gelbooru</option>
                    </select>
                </template>
            </PcImageFlur>
            <el-row v-if="!loading" class="list-con" :gutter="20">
                <el-col
                    v-for="(tem, tIndex) in templatesList"
                    :key="tIndex"
                    v-animate-css="{
                        direction: 'modifySlideInUp',
                        delay: tIndex * 30,
                    }"
                    :xs="24"
                    :sm="12"
                    :md="6"
                    :lg="4"
                    :xl="4"
                >
                    <div v-if="tem" class="shadow-xl card card-compact bg-base-100 glass">
                        <figure>
                            <nuxt-img
                                class="image"
                                :src="tem?.minify_preview"
                                loading="lazy"
                                :class="{
                                    'high-image-blur': imageFlur === 'high',
                                    'low-image-blur': imageFlur === 'low',
                                }"
                                :alt="tem?.name"
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {{
                                    tem?.name?.length > 20
                                        ? tem?.name.slice(0, 20) + '...'
                                        : tem?.name
                                }}
                            </h2>
                            <p>{{ tem?.author }}</p>
                            <div class="justify-end card-actions">
                                <button class="btn btn-neutral btn-sm" @click="copyTem(tem)">
                                    复制
                                </button>
                                <button class="btn btn-secondary btn-sm" @click="generate(tem)">
                                    生成
                                </button>
                                <button class="btn btn-accent btn-sm" @click="cardClick(tem)">
                                    详情
                                </button>
                                <button
                                    class="btn btn-primary btn-sm"
                                    @click="exportPromptToShop(tem)"
                                >
                                    购物车
                                </button>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div v-if="loading" class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>

            <div class="demo-pagination-block">
                <div v-if="totalPage && totalPage > 0" class="btn-group">
                    <button class="btn btn-outline" @click="firstPage">首页</button>
                    <button class="btn btn-outline" @click="prevPage">上一页</button>
                    <button
                        v-for="(item, index) in currentList"
                        :key="index"
                        class="btn"
                        :class="{ 'btn-active': item === pageIndex }"
                        @click="currentPage(item)"
                    >
                        {{ item }}
                    </button>
                    <button v-if="pageIndex < totalPage - 3 && totalPage > 5" class="btn">
                        ...
                    </button>
                    <button
                        v-if="totalPage > 5"
                        class="btn"
                        :class="{ 'btn-active': totalPage === pageIndex }"
                        @click="currentPage(totalPage)"
                    >
                        {{ totalPage }}
                    </button>
                    <button class="btn btn-outline" @click="nextPage">下一页</button>
                    <button class="btn btn-outline" @click="endPage">尾页</button>
                    <input
                        :value="pageIndex"
                        type="text"
                        placeholder="go"
                        class="w-24 max-w-xs input input-bordered"
                        @keyup.enter="goTo"
                    />
                </div>
            </div>
        </div>

        <PcTemplateDetail
            v-model="showPreview"
            :current-template="currentTemplate"
        ></PcTemplateDetail>
        <PcGenerateImageModal
            v-model="showGenerate"
            :current-template="currentTemplate"
        ></PcGenerateImageModal>
    </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { ID_INJECTION_KEY } from 'element-plus';
import lodash from 'lodash';

const nuxtApp = useNuxtApp();
nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 1000),
    current: 0,
});
const { setShop } = useShop();
const { copy } = useCopy();
const { fps } = useFPS();
const { TemplateApi, DanbooruApi } = useApi();

const loading = ref(false);
const pageIndex = ref(1);
const pageSize = ref(100);
const totalPage = ref(0);
const total = ref(0);
const showPreview = ref(false);
const showGenerate = ref(false);
const templatesList: Ref<any[] | null> = ref([]);
const currentTemplate: Ref<any | null> = ref(null);
const curDataFrom = ref('Gelbooru');
const searchText = ref('');
const imageFlur = ref('high');

const { data } = await useAsyncData('templatesList', () =>
    DanbooruApi.searchBooruList({
        pageIndex: pageIndex.value,
        pageSize: pageSize.value,
        searchText: searchText.value,
    }),
);
templatesList.value = data.value?.templates;
total.value = data.value?.total;
totalPage.value = Math.ceil(total.value / pageSize.value);

onMounted(() => {
    fps();
});

const currentList = computed(() => {
    let arr = [];
    if (totalPage.value > 5) {
        arr = Array.from({ length: totalPage.value }, (element, index) => index).slice(
            pageIndex.value > 3 ? pageIndex.value - 3 : pageIndex.value,
            pageIndex.value + 3,
        );
    } else {
        arr = Array.from({ length: totalPage.value }, (element, index) => index).map((i) => i + 1);
    }
    return arr;
});

const getImageFlur = (value: any) => {
    imageFlur.value = value;
};

const cardClick = (tem: any) => {
    if (curDataFrom.value === 'Noval') {
        currentTemplate.value = { ...tem };
    } else {
        currentTemplate.value = {
            ...tem,
            prompt: `masterpiece, best quality, ${tagsAddComma(tem.prompt)}`,
        };
    }

    showPreview.value = true;
};

const copyTem = (tem: any) => {
    const prompt = `masterpiece, best quality, ${tagsAddComma(tem.prompt)}`;
    copy(prompt);
};

const generate = (tem: any) => {
    exportPromptToShop(tem);

    if (curDataFrom.value === 'Noval') {
        currentTemplate.value = { ...tem };
    } else {
        currentTemplate.value = {
            ...tem,
            prompt: `masterpiece, best quality, ${tagsAddComma(tem.prompt)}`,
        };
    }

    showGenerate.value = true;
};

const tagsAddComma = (value: string) => {
    return value.replace(/\s+/g, ', ').replace(/\s*(，+|,+)\s*/g, ', ');
};

const searchChange = lodash.debounce(async (val: any) => {
    // if (val === searchText.value) return;
    searchText.value = val;
    pageIndex.value = 1;
    loadData();
}, 2000);

const loadData = async () => {
    if (loading.value) return;
    try {
        templatesList.value = [];
        loading.value = true;

        let result: any = null;
        if (curDataFrom.value === 'Noval') {
            result = await TemplateApi.getTemplatesNoval({
                pageIndex: pageIndex.value,
                pageSize: pageSize.value,
            });
        } else {
            result = await DanbooruApi.searchBooruList({
                pageIndex: pageIndex.value,
                pageSize: pageSize.value,
                searchText: searchText.value,
            });
        }
        if (result) {
            loading.value = false;
            templatesList.value = result?.templates;
            total.value = result.total;
            totalPage.value = Math.ceil(total.value / pageSize.value);
        } else {
            loading.value = false;
        }
    } catch (error) {
        loading.value = false;
    }
};

const exportPromptToShop = (tem: any) => {
    if (tem?.prompt.includes('masterpiece') || tem?.prompt.includes('Masterpiece')) {
        setShop(tem?.prompt);
    } else {
        setShop(`masterpiece, best quality, ${tagsAddComma(tem?.prompt)}`);
    }
};

const goTo = (e: any) => {
    currentPage(Number(e.target.value));
};

const currentPage = (val: number) => {
    pageIndex.value = val;
    loadData();
};

const prevPage = () => {
    if (pageIndex.value <= 1) return;
    pageIndex.value = pageIndex.value - 1;
    loadData();
};

const firstPage = () => {
    pageIndex.value = 1;
    loadData();
};

const endPage = () => {
    pageIndex.value = totalPage.value;
    loadData();
};

const nextPage = () => {
    if (pageIndex.value >= totalPage.value) return;
    pageIndex.value = pageIndex.value + 1;
    loadData();
};

const dataFromChange = (e: any) => {
    curDataFrom.value = e.target.value;
    if (e.target.value === 'Gelbooru') {
        pageIndex.value = 1;
        pageSize.value = 100;
        loadData();
    } else {
        pageIndex.value = 1;
        pageSize.value = 36;
        loadData();
    }
};
</script>

<style lang="scss" scoped>
.high-image-blur {
    filter: blur(8px);
}
.low-image-blur {
    filter: blur(4px);
}
.nsfw-page {
    height: 100vh;
    overflow-y: auto;

    .content {
        padding: 20px;
    }

    .list-con {
        min-height: 50vh;
    }
    .time {
        font-size: 12px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button {
        padding: 0;
        min-height: auto;
    }

    .card-title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .image {
        width: 100%;
        height: 360px;
        display: block;
        background: rgb(148, 148, 148);
        object-fit: cover;
        object-position: center center;
    }

    :deep(.el-col) {
        margin-bottom: 20px;
        border-radius: var(--rounded-box, 1rem);
    }

    :deep(.description-label) {
        width: 120px;
    }

    .card {
        border-radius: 10px;
    }

    .demo-pagination-block {
        padding: 30px 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .spinner {
        margin: 50px auto;
        width: 80px;
        height: 80px;
        position: relative;
        text-align: center;
        animation: rotate 2s infinite linear;
    }

    .dot1,
    .dot2 {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: hsl(var(--p) / 1);
        border-radius: 100%;
        animation: bounce 2s infinite ease-in-out;
    }

    .dot2 {
        top: auto;
        bottom: 0px;
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }
}
</style>
