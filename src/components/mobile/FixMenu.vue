<template>
    <div class="page-fix-menu">
        <button class="hover-anime-btn btn btn-sm btn-accent btn-circle" @click="draw">
            <Icon name="entypo:brush"></Icon>
        </button>
        <button
            class="hover-anime-btn btn btn-sm btn-secondary btn-circle"
            @click="() => (themeVivible = !themeVivible)"
        >
            <Icon name="ant-design:skin-outlined" size="16" />
        </button>

        <ClientOnly>
            <el-drawer v-model="themeVivible" title="主题" :with-header="false" size="75%">
                <div class="m-b-20">daisyUI 主题</div>
                <ul class="flex flex-wrap">
                    <li
                        v-for="theme of themes"
                        :key="theme"
                        class="theme-select-btn"
                        @click="() => (colorMode.preference = theme)"
                    >
                        <div class="left">
                            {{ theme }}
                        </div>
                        <div class="right">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </el-drawer>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { ClientOnly, Icon } from '#components';

const colorMode = useColorMode();
const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'Sunset',
];
const drawer = ref(false);
const themeVivible: Ref<boolean> = ref(false);

const draw = () => {
    const router = useRouter();
    router.push('/mobile/draw');
};
</script>

<style lang="scss" scoped>
.page-fix-menu {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1002;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 76px;
}
:deep(.el-overlay) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.5s linear;

    .el-drawer {
        background: hsl(var(--b2) / 1);
    }
}
</style>
