<template>
    <div class="p-4">
        <h1 class="mb-4 text-lg font-medium">Share files from {{ ip }}</h1>
        <FilePicker name="test-new" @select="seedFile" />

        <FileProgress
            class="mt-4"
            name="Portfolio.png"
            size="525KB"
            :progress="30"
        />

        <div class="mt-6">
            <h2 class="text-lg font-medium">File link</h2>

            <CopyLink class="mt-4" :link="shareLink" />
            <div>
                {{ decodeURIComponent(magnetURI) }}
            </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-6">
            <div class="relative w-full">
                <h3
                    class="uppercase bg-white px-1 text-xs text-[#D1D5DB] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                >
                    or scan
                </h3>
                <hr class="w-full" />
            </div>

            <div class="mx-auto mt-6">
                <QRCode :text="shareLink" />
            </div>

            <a
                ref="downloadEl"
                download="torrented-file.pdf"
                class="sr-only"
            ></a>
        </div>
    </div>
</template>

<script setup lang="ts">
import CopyLink from "#src/components/CopyLink.vue";
import FilePicker from "#src/components/FilePicker.vue";
import FileProgress from "#src/components/FileProgress.vue";
import QRCode from "#src/components/QRCode.vue";
import services from "#src/services";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import WebTorrent from "webtorrent";

const shareLink = ref("");
const magnetURI = computed(() => {
    if (!shareLink.value) {
        return "";
    }

    try {
        return new URL(shareLink.value).searchParams.get("magnet") || "";
    } catch {
        return "";
    }
});

function setShareLink(magnetURI: string) {
    const link = new URL(
        `http://${import.meta.env.VITE_HOST}:${window.location.port}`,
    );
    link.searchParams.set("magnet", magnetURI);

    shareLink.value = link.toString();
}

let torrent: WebTorrent.Torrent | undefined;

const ip = import.meta.env.VITE_HOST;

function seedFile(files: FileList) {
    torrent = services.torrent.seed(files[0]);

    torrent.once("ready", () => {
        if (!torrent) {
            return;
        }

        console.log(torrent.magnetURI);

        setShareLink(torrent.magnetURI);
    });
}

const downloadEl = ref<HTMLAnchorElement>();

const route = useRoute();

function watchAndDownloadFromURI() {
    watch(
        () => route.query.magnet,
        () => {
            if (typeof route.query.magnet !== "string") {
                return;
            }

            downloadFromMagnetURI(route.query.magnet);
        },
    );
}

watchAndDownloadFromURI();

function downloadFromMagnetURI(magnetURI: string) {
    services.torrent.add(magnetURI, (torrent) => {
        const file = torrent.files[0];

        file.getBlob((_err, blob) => {
            if (!blob || !downloadEl.value) {
                return;
            }

            downloadEl.value.href = URL.createObjectURL(blob);

            downloadEl.value.click();
        });
    });
}
</script>

<style scoped lang="scss"></style>
