<template>
    <ClientOnly>
        <div
            v-animate-css="{ direction: 'modifySlideInUp' }"
            class="flex justify-between control-blur-btns"
        >
            <div>
                <button
                    class="btn btn-sm m-r-10"
                    :class="[curImageFlur === 'high' ? 'btn-accent' : 'btn-secondary-30']"
                    @click="setImageFlur('high')"
                >
                    高
                </button>
                <button
                    class="btn btn-sm m-r-10"
                    :class="[curImageFlur === 'low' ? 'btn-accent' : 'btn-secondary-30']"
                    @click="setImageFlur('low')"
                >
                    低
                </button>
                <button
                    class="btn btn-sm"
                    :class="[curImageFlur === 'original' ? 'btn-accent' : 'btn-secondary-30']"
                    @click="setImageFlur('original')"
                >
                    原
                </button>
            </div>
            <slot name="right"></slot>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
const curImageFlur = ref('high'); // high or low or original

const emit = defineEmits(['get-image-flur']);

const setImageFlur = (value: string) => {
    curImageFlur.value = value;
    emit('get-image-flur', value);
};
</script>

<style scoped lang="scss">
.control-blur-btns {
    padding: 10px 0px 10px 2px;
    .btn {
        color: #fff;
    }
    .btn-secondary-30 {
        background-color: hsl(var(--s) / 0.3);
    }
}
</style>
