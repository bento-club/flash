<template>
    <article class="flex h-screen flex-col bg-[#0F172A] px-4 pb-6 pt-3">
        <header>
            <slot name="header"></slot>
        </header>

        <hr class="divider my-3" />

        <main class="flex flex-col flex-grow">
            <slot name="body"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.divider {
    border: none;
    background-image: radial-gradient(
        closest-side,
        rgba(51, 65, 85, 0.25),
        rgba(51, 65, 85, 1),
        rgba(51, 65, 85, 0.25)
    );
    height: 1px;
    width: 100%;
}
</style>
