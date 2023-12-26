<template>
    <article
        class="flex h-screen-d w-screen flex-col overflow-x-hidden bg-surface-primary px-x4 pt-x4 text-primary"
    >
        <header class="relative flex items-center justify-center py-x4">
            <button class="absolute left-0 top-x4" @click="onBackBtnClick">
                <ArrowLeft class="h-6 w-auto" />
            </button>
            <div class="flex items-center">
                <SpaceIcon class="h-6 w-auto text-surface-brand" />
                <h1 class="ml-x2 font-space-grotesk font-bold capitalize">
                    Design Space
                </h1>
            </div>
        </header>

        <AppDivider class="my-x2" />

        <section class="flex-grow pb-x3">
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
