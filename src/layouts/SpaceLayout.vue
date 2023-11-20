<template>
    <article
        class="h-screen-d bg-surface-primary px-x4 pt-x4 text-primary w-screen overflow-x-hidden"
    >
        <header class="py-x4 relative flex items-center justify-center">
            <button class="top-x4 absolute left-0" @click="onBackBtnClick">
                <ArrowLeft class="w-auto h-6" />
            </button>
            <div class="flex items-center">
                <SpaceIcon class="text-surface-brand w-auto h-6" />
                <h1 class="ml-x2 font-space-grotesk font-bold capitalize">
                    Design Space
                </h1>
            </div>
        </header>

        <AppDivider class="my-x2" />

        <section>
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
