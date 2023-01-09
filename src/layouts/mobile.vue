<template>
    <div class="mobile-default-layout">
        <slot />
        <ClientOnly>
            <MobileFixMenu></MobileFixMenu>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.mobile-default-layout {
    height: 100%;
    width: 100%;
}
</style>
