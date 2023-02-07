<template>
    <div class="pc-default-layout">
        <slot />
        <ClientOnly>
            <PcFixMenu></PcFixMenu>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.pc-default-layout {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
