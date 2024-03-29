<template>
    <div class="tags-page page">
        <NuxtLayout name="mobile">
            <ClientOnly><MobileAppHeader /></ClientOnly>
            <div class="content">
                <MobileAppBanner placeholder="搜索标签" @search-change="searchChange" />
                <mobile-area-title
                    v-animate-css="{
                        direction: 'modifySlideInUp',
                    }"
                    title="标签类别"
                ></mobile-area-title>
                <div class="type-list">
                    <ClientOnly>
                        <MobileAnimationButton
                            v-for="(m, mIndex) in tagsMenus"
                            :key="mIndex"
                            v-animate-css="{
                                direction: 'modifySlideInUp',
                                delay: mIndex * 30,
                            }"
                            :index="mIndex + ''"
                            :button-style="1"
                            button-size="larger"
                            :class="[mIndex === tagActive ? 'btn-accent' : 'btn-secondary']"
                            :button-text="m?.name"
                            @submit="menuItemClick(mIndex)"
                        ></MobileAnimationButton>
                    </ClientOnly>
                </div>
                <mobile-area-title
                    v-animate-css="{
                        direction: 'modifySlideInUp',
                    }"
                    title="标签列表"
                >
                    <template #titleSide>
                        <el-switch
                            v-model="imageVisible"
                            size="large"
                            inline-prompt
                            inactive-text="隐藏"
                            active-text="开启"
                            class="title-side"
                        />
                    </template>
                </mobile-area-title>

                <div class="tag-list">
                    <ClientOnly>
                        <div
                            v-for="(o, oIndex) in tagsLists"
                            :key="o?.en + oIndex"
                            v-animate-css="{
                                direction: 'modifySlideInUp',
                                delay: oIndex * 30,
                            }"
                            class="tag-item"
                        >
                            <div class="left">
                                <div v-if="imageVisible" class="image-con">
                                    <nuxt-img
                                        :src="o?.preview + ''"
                                        loading="lazy"
                                        @click="previewURL(o?.preview ? o?.preview : '')"
                                    />
                                </div>
                            </div>

                            <div class="right">
                                <div class="text-con">
                                    <p class="zh">{{ o?.zh }}</p>
                                    <p class="en">{{ o?.en }}</p>
                                </div>
                                <div>
                                    <el-button size="small" circle @click="addShop(o?.en)">
                                        <slot name="icon">
                                            <i-ep-shopping-trolley></i-ep-shopping-trolley>
                                        </slot>
                                    </el-button>
                                    <el-button size="small" circle @click="copy(o?.en)">
                                        <slot name="icon">
                                            <i-ep-document-copy></i-ep-document-copy>
                                        </slot>
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </ClientOnly>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useSettingStore } from '@/store/setting';

definePageMeta({
    layout: false,
});

const settingStore = useSettingStore();
const { DefaultTagsApi } = useApi();
const { copy } = useCopy();
const { addShop } = useShop();

const result = await DefaultTagsApi.getTags();
const tags = JSON.parse(result);
const tagsMenus = ref(tags.class);
const tagsLists = ref(tagsMenus.value[0].data);
const tagActive: Ref<number> = ref(0);
const imageVisible: Ref<boolean> = ref(true);
const searchText: Ref<string> = ref('');

watch(imageVisible, (newValue: boolean) => {
    settingStore.setTagImageVisible(newValue);
});

const menuItemClick = (key: number) => {
    tagsLists.value = tagsMenus.value[key].data;
    tagActive.value = key;
};

const searchChange = (val: any) => {
    searchText.value = val;
};

const previewURL = (image = '') => {
    const { $viewerApi } = useNuxtApp();
    const $viewer = $viewerApi({
        images: [image],
    });
};

onMounted(() => {
    imageVisible.value = settingStore.getTagImageVisible;
});
</script>

<style lang="scss" scoped>
.image {
    width: calc(20% - 10px);
    cursor: pointer;
    margin: 5px;
    display: inline-block;
}

.tags-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;
    .content {
        padding: 15px;
    }
}

.type-list .animation-button {
    margin-bottom: 10px;
}

.title-side {
    margin-left: 10px;
    --el-switch-on-color: hsl(var(--a) / 1);
    --el-switch-off-color: hsl(var(--s) / 1);
}

.eh-title-side-tip {
    font-size: 12px;
    color: rgb(138, 138, 138);
    margin-left: 10px;
}

.tag-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .tag-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 49%;
        padding: 10px;
        background: #fafaf8;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 2px 8px;
        border-radius: 10px;
        margin-bottom: 10px;
        cursor: pointer;

        .text-con {
            margin-bottom: 4px;
        }

        .image-con {
            width: 100%;
            height: auto;
            object-fit: cover;
            margin-bottom: 4px;
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.5s ease;
        }

        img {
            width: 100%;
            height: 100%;
        }

        .zh {
            color: rgb(49, 49, 49);
            margin-bottom: 4px;
        }
    }

    .tag-item:nth-child(even) {
        margin-right: 0px;
    }
    .tag-item:nth-child(odd) {
        margin-right: 2%;
    }
}
</style>
