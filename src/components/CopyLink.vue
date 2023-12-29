<template>
    <div
        class="copy-link cursor-pointer truncate rounded-md border border-neutral-300 px-3 py-2.5 text-xs"
        @click="copyLink()"
    >
        {{ link }}
    </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

export interface CopyLinkProps {
    link: string;
}

const props = defineProps<CopyLinkProps>();

const { copy } = useClipboard({ source: props.link, legacy: true });

async function copyLink() {
    await copy(props.link);
}
</script>

<style scoped lang="scss">
.copy-link {
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    color: #6b7280;
}
</style>
