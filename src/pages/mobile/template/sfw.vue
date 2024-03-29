<template>
    <div class="template-page page">
        <NuxtLayout name="mobile">
            <ClientOnly><MobileAppHeader /></ClientOnly>
            <div class="content">
                <div class="banner-con">
                    <MobileAppBanner placeholder="请输入关键标签"></MobileAppBanner>
                </div>
                <ClientOnly>
                    <div v-animate-css="{ direction: 'modifySlideInUp' }" class="control-blur-btns">
                        <button
                            class="btn btn-sm m-r-10"
                            :class="[openImageFlur ? 'btn-accent' : 'btn-secondary-30']"
                            @click="() => (openImageFlur = true)"
                        >
                            模糊
                        </button>
                        <button
                            class="btn btn-sm"
                            :class="[!openImageFlur ? 'btn-accent' : 'btn-secondary-30']"
                            @click="() => (openImageFlur = false)"
                        >
                            原图
                        </button>
                    </div>
                </ClientOnly>
                <ClientOnly>
                    <el-row
                        v-if="templatesList && templatesList.length"
                        class="list-con"
                        :gutter="20"
                    >
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
                            <div v-if="tem" class="shadow-xl card card-compact bg-base-100">
                                <figure>
                                    <nuxt-img
                                        class="image"
                                        :src="
                                            tem?.min_imgbb_url
                                                ? tem?.min_imgbb_url
                                                : tem?.minify_preview
                                        "
                                        loading="lazy"
                                        :class="{ 'image-blur': !!openImageFlur }"
                                    />
                                </figure>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        {{ tem?.name }}
                                    </h2>
                                    <p>{{ tem?.author }}</p>
                                    <div class="justify-end card-actions">
                                        <button
                                            class="btn btn-accent btn-sm"
                                            @click="cardClick(tem)"
                                        >
                                            模板详情
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </ClientOnly>
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
                        <button v-if="pageIndex < totalPage - 3" class="btn">...</button>
                        <button
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

            <MobileTemplateDetail
                v-model="showPreview"
                :current-template="currentTemplate"
            ></MobileTemplateDetail>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import { ID_INJECTION_KEY } from 'element-plus';

definePageMeta({
    layout: false,
});

const nuxtApp = useNuxtApp();
nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 1000),
    current: 0,
});

const openImageFlur = ref(true);
const loading = ref(false);
const pageIndex = ref(1);
const pageSize = ref(36);
const totalPage = ref(0);
const total = ref(0);
const showPreview = ref(false);
const templatesList: Ref<any[] | null> = ref([]);
const currentTemplate: Ref<any | null> = ref(null);

const currentList = computed(() => {
    const arr = Array.from({ length: totalPage.value }, (element, index) => index).slice(
        pageIndex.value > 3 ? pageIndex.value - 3 : pageIndex.value,
        pageIndex.value + 3,
    );
    return arr;
});

const cardClick = (tem: any) => {
    currentTemplate.value = { ...tem, preview: tem?.imgbb_url ? tem?.imgbb_url : tem?.preview };
    showPreview.value = true;
};

const loadData = async () => {
    if (loading.value) return;
    loading.value = true;
    const { TemplateApi } = useApi();
    const result: any = await TemplateApi.getTemplates({
        pageIndex: pageIndex.value,
        pageSize: pageSize.value,
    });
    loading.value = false;
    templatesList.value = result?.templates;
    total.value = result.total;
    totalPage.value = Math.ceil(total.value / pageSize.value);
};

onMounted(() => {
    loadData();
});

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

const goTo = (e: any) => {
    currentPage(Number(e.target.value));
};

const nextPage = () => {
    if (pageIndex.value >= totalPage.value) return;
    pageIndex.value = pageIndex.value + 1;
    loadData();
};
</script>

<style lang="scss" scoped>
.image-blur {
    filter: blur(10px);
}
.template-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;

    .content {
        padding: 15px;
    }

    .control-blur-btns {
        padding: 10px 0;
        .btn {
            color: #fff;
        }
    }

    .btn-secondary-30 {
        background-color: hsl(var(--s) / 0.3);
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
}
</style>
