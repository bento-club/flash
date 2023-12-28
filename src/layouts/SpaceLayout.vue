<template>
    <article
        class="h-screen-d bg-surface-primary pt-x4 text-primary flex flex-col w-screen overflow-x-hidden"
    >
        <header class="px-x4 py-x4 relative flex items-center justify-between">
            <button @click="onBackBtnClick">
                <ArrowLeft class="w-auto h-6" />
            </button>
            <div class="flex items-center mx-auto">
                <SpaceIcon class="text-surface-brand w-auto h-6" />
                <h1 class="ml-x2 font-space-grotesk font-bold capitalize">
                    Design Space
                </h1>
            </div>
        </header>

        <AppDivider class="my-x2" />

        <section class="pb-x3 flex-grow">
            <slot></slot>
        </section>
    </article>
</template>

<script setup lang="ts">
import AppDivider from "#src/components/AppDivider.vue";
import ArrowLeft from "#src/icons/ArrowLeft.vue";
import SpaceIcon from "#src/icons/SpaceIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function onBackBtnClick() {
    router.back();
}
</script>

<style scoped></style>
