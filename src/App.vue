<template>
  <div class="p-4">
    <h1 class="font-medium text-lg mb-4">Share files</h1>
    <FilePicker name="test-new" />

    <FileProgress
      class="mt-4"
      name="Portfolio.png"
      size="525KB"
      :progress="30"
    />
  </div>
</template>

<script setup lang="ts">
import FilePicker from "#src/components/FilePicker.vue";
import FileProgress from "#src/components/FileProgress.vue";
</script>

<style scoped lang="scss"></style>
