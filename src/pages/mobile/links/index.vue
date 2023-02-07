<template>
    <div class="links-page page bg-base-100">
        <NuxtLayout name="mobile">
            <ClientOnly><MobileAppHeader /></ClientOnly>
            <MobileAppAnimate>
                <div class="content">
                    <pc-link-list :show-left-menu="true"></pc-link-list>
                </div>
            </MobileAppAnimate>
            <PcAppFooter />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: false,
});
</script>

<style lang="scss" scoped></style>
