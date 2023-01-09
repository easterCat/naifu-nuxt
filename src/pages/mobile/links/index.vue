<template>
    <div class="links-page page bg-base-100">
        <ClientOnly><MobileAppHeader /></ClientOnly>
        <MobileAppAnimate>
            <div class="content">
                <pc-link-list :show-left-menu="true"></pc-link-list>
            </div>
        </MobileAppAnimate>
        <PcAppFooter />
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
