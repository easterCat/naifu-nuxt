<template>
    <div class="draw-page page">
        <NuxtLayout name="mobile">
            <ClientOnly><MobileAppHeader /></ClientOnly>
            <ClientOnly>
                <div v-animate-css="{ direction: 'modifySlideInUp' }" class="content">
                    <PcAreaTitle title="生成图片"></PcAreaTitle>
                    <GenerateImage
                        v-animate-css="{ direction: 'modifySlideInUp', delay: 60 }"
                    ></GenerateImage>
                </div>
            </ClientOnly>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GenerateImage from './components/generateImage.vue';
import { utilMenus } from '~/assets/json/utils.js';

definePageMeta({
    layout: false,
});

const initActive = 0;
const menuList = ref(utilMenus);
</script>

<style lang="scss" scoped>
.draw-page {
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;

    .content {
        padding: 15px;
    }
}
.menu-list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-left: 2px;

    .menu-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100px;
        height: 100%;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        margin-right: 30px;
        border-radius: 10px;
        --tw-text-opacity: 0.5;
        --tab-color: hsla(var(--bc) / var(--tw-text-opacity));
        color: var(--tab-color);

        > img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            margin-bottom: 4px;
            margin-right: 8px;
        }

        &-active {
            --tw-text-opacity: 1;
            --tab-color: hsla(var(--bc) / var(--tw-text-opacity));
            color: var(--tab-color);
        }
    }
}
</style>
