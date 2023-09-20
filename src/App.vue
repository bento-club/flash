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

    <div class="flex flex-col items-center justify-center mt-6">
      <div class="relative w-full">
        <h3
          class="uppercase bg-white px-1 text-xs text-[#D1D5DB] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          or scan
        </h3>
        <hr class="w-full" />
      </div>

      <QRCode class="mt-6" text="https://google.com" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilePicker from "#src/components/FilePicker.vue";
import FileProgress from "#src/components/FileProgress.vue";
import QRCode from "#src/components/QRCode.vue";
</script>

<style scoped lang="scss"></style>
