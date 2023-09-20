<template>
  <div>
    <div>
      <div class="text-sm">
        {{ name }}
      </div>

      <ProgressBar class="mt-2" :progress="progress" />

      <div class="text-xs mt-2 text-[#6B7280]">
        {{ progressText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from "#src/components/ProgressBar.vue";
import { computed } from "vue";

export interface FileProgressProps {
  name: string;
  size: string;
  progress?: number | null;
}

const props = defineProps<FileProgressProps>();

const progressText = computed(() => {
  return `${props.size} • ${props.progress}% uploaded`;
});
</script>

<style scoped></style>
