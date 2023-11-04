<template>
    <canvas class="w-full max-w-full" :id="id" ref="el"></canvas>
</template>

<script setup lang="ts">
import { uniqueId } from "lodash";
import { toCanvas } from "qrcode";
import { onMounted, ref, watch } from "vue";

export interface QRCodeProps {
    id?: string;
    text: string;
}

const props = withDefaults(defineProps<QRCodeProps>(), {
    id: () => uniqueId("qr-code"),
});

const el = ref<HTMLCanvasElement>();

onMounted(() => {
    setHeightToWidth();
});

function setHeightToWidth() {
    if (!el.value) {
        return;
    }

    el.value.height = el.value.width;
}

async function generateQR(text: string, el: HTMLCanvasElement) {
    try {
        await toCanvas(el, text, { width: el.width });
    } catch {
        console.error("canvas generation failed");
    }
}

function watchAndRefreshQR() {
    watch(
        () => props.text,
        async () => {
            if (!el.value) {
                return;
            }

            await generateQR(props.text, el.value);
        },
    );
}

watchAndRefreshQR();
</script>

<style scoped lang="scss"></style>
