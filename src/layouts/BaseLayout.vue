<template>
    <article class="h-screen-d bg-[#0F172A]">
        <div class="px-x4 py-x3 flex flex-col h-full max-w-3xl mx-auto">
            <header>
                <slot name="header"></slot>
            </header>

            <AppDivider class="my-3" />

            <main class="flex flex-col flex-grow">
                <slot name="body"></slot>
            </main>

            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </article>
</template>

<script setup lang="ts">
import AppDivider from "#src/components/AppDivider.vue";
</script>

<style scoped lang="scss"></style>
