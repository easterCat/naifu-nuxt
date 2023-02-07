<template>
    <div class="area-title">
        <span>{{ title }}</span>
        <slot name="titleSide"></slot>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped>
.area-title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 1px;
}
</style>
