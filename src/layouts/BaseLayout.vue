<template>
    <article class="flex h-h-screen-d flex-col bg-[#0F172A] px-4 pb-6 pt-3">
        <header>
            <slot name="header"></slot>
        </header>

        <AppDivider class="my-3" />

        <main class="flex flex-grow flex-col">
            <slot name="body"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </article>
</template>

<script setup lang="ts">
import AppDivider from "#src/components/AppDivider.vue";
</script>

<style scoped lang="scss"></style>
