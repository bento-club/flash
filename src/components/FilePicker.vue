<template>
  <label
    class="border border-neutral-200 rounded-md flex flex-col items-center justify-center p-4"
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

<style scoped lang="scss"></style>
