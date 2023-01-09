<template>
    <div class="index-page"></div>
</template>

<script lang="ts" setup>
import { isMobile } from '@/utils/index';
const router = useRouter();
if (process.client) {
    console.log('navigator.userAgent :>> ', navigator.userAgent);
    if (isMobile()) {
        router.replace({ path: '/mobile/home' });
    } else {
        router.replace({ path: '/pc/home' });
    }
}
</script>

<style scoped></style>
