<template>
    <div class="mobile-default-layout"><slot /></div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.mobile-default-layout {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
