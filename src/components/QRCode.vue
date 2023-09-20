<template>
  <div>
    <canvas :id="id" ref="el"></canvas>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from "lodash";
import { toCanvas } from "qrcode";
import { onMounted, ref } from "vue";

export interface QRCodeProps {
  id?: string;
  text: string;
}

const props = withDefaults(defineProps<QRCodeProps>(), {
  id: () => uniqueId("qr-code"),
});

const el = ref<HTMLCanvasElement>();

onMounted(async () => {
  if (!el) {
    return;
  }

  try {
    await toCanvas(el.value, props.text);
  } catch {
    console.error("canvas generation failed");
  }
});
</script>

<style scoped lang="scss"></style>
