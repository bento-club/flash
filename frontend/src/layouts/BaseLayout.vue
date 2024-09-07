<template>
    <article class="h-screen-d bg-[#0F172A]">
        <div class="mx-auto flex h-full max-w-3xl flex-col px-x4 py-x3">
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
        </div>
    </article>
</template>

<script setup lang="ts">
import AppDivider from "#src/components/AppDivider.vue";
</script>

<style scoped lang="scss"></style>
