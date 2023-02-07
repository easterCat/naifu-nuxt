<template>
    <div class="links-page page bg-base-100">
        <ClientOnly>
            <PcAppShadow />
            <PcAppHeader />
        </ClientOnly>
        <PcAppAnimate>
            <div class="content">
                <pc-link-list :show-left-menu="true"></pc-link-list>
            </div>
        </PcAppAnimate>
        <PcAppFooter />
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.links-page {
    .content {
        padding: 20px;
    }
}
</style>
