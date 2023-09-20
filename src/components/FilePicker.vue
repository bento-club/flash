<template>
  <label
    class="file-picker border border-neutral-200 rounded-md flex flex-col items-center justify-center p-4"
  >
    <div class="font-medium">Upload a file</div>
    <div class="mt-1 text-neutral-500">PNG, JPG, PDF, GIF etc</div>
    <input class="sr-only" type="file" :name="name" />
  </label>
</template>

<script setup lang="ts">
export interface FilePickerProps {
  name?: string;
}

withDefaults(defineProps<FilePickerProps>(), {
  name: "fileInput",
});
</script>

<style scoped lang="scss">
.file-picker {
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
</style>
