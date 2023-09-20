<template>
  <ProgressRoot
    :model-value="progress"
    class="relative overflow-hidden bg-[#f3f4f6] rounded-full w-full h-2"
    style="transform: translateZ(0)"
  >
    <ProgressIndicator
      class="bg-primary-50 rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
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
