<template>
    <ProgressRoot
        :model-value="progress"
        class="relative h-2 w-full overflow-hidden rounded-full bg-[#f3f4f6]"
        style="transform: translateZ(0)"
    >
        <ProgressIndicator
            class="bg-primary-50 ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full rounded-full transition-transform"
            :style="`transform: translateX(-${100 - (progress || 0)}%)`"
        />
    </ProgressRoot>
</template>

<script setup lang="ts">
import { ProgressRoot, ProgressIndicator } from "radix-vue";

export interface ProgressBarProps {
    progress?: number | null;
}

withDefaults(defineProps<ProgressBarProps>(), { progress: 0 });
</script>

<style scoped lang="scss"></style>
