<template>
    <div class="p-4">
        <h1 class="mb-4 text-lg font-medium">Share files from {{ ip }}</h1>
        <FilePicker name="test-new" @select="seedFile" />

        <FileProgress
            v-if="torrent"
            class="mt-4"
            :name="torrent.name"
            :size="`${uploadProgress.bytes / 1024 / 1024}`"
            :progress="uploadProgress.progress"
        />

        <div class="mt-6">
            <h2 class="text-lg font-medium">File link</h2>

            <CopyLink class="mt-4" :link="shareLink" />
        </div>

        {{ uploadProgress }}

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
import { reactive, ref, unref, watch } from "vue";
import { useRoute } from "vue-router";
import WebTorrent from "webtorrent";

const shareLink = ref("");
function setShareLink(magnetURI: string) {
    const link = new URL(
        `${window.location.protocol}//${import.meta.env.VITE_HOST}:${
            window.location.port
        }`,
    );
    link.searchParams.set("magnet", magnetURI);

    shareLink.value = link.toString();

    console.log("Go to link for download: ", unref(shareLink.value));
}

const torrent = ref<WebTorrent.Torrent>();

const ip = import.meta.env.VITE_HOST;

const uploadProgress = reactive({
    progress: 0,
    uploaded: 0,
    speed: 0,
    bytes: 0,
});

function seedFile(files: FileList) {
    torrent.value = services.torrent.seed(files[0]);

    torrent.value.on("upload", (bytes) => {
        uploadProgress.progress = torrent.value?.progress || 0;
        uploadProgress.uploaded = torrent.value?.uploaded || 0;
        uploadProgress.speed = torrent.value?.uploadSpeed || 0;
        uploadProgress.bytes = bytes;
    });

    torrent.value.once("ready", () => {
        if (!torrent.value) {
            return;
        }

        console.log("torrents: ", services.torrent.torrents);

        console.log(torrent.value.magnetURI);

        setShareLink(torrent.value.magnetURI);
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

            console.log("start downloading: ", route.query.magnet);

            downloadFromMagnetURI(route.query.magnet);
        },
        { immediate: true },
    );
}

watchAndDownloadFromURI();

const progress = reactive({
    progress: 0,
    downloaded: 0,
    speed: 0,
    bytes: 0,
});
function downloadFromMagnetURI(magnetURI: string) {
    const downloadingTorrent = services.torrent.add(magnetURI);

    console.log(downloadingTorrent);

    downloadingTorrent.on("done", () => {
        console.log("download complete: ", downloadingTorrent.files);

        const file = downloadingTorrent.files[0];

        console.log("fileBlob: ", file, file.getBlob);

        // file.getBlob((_err, blob) => {
        //     if (!blob || !downloadEl.value) {
        //         return;
        //     }

        //     downloadEl.value.href = URL.createObjectURL(blob);

        //     downloadEl.value.click();
        // });
    });

    downloadingTorrent.on("download", (bytes) => {
        progress.bytes = bytes;
        progress.downloaded = torrent.value?.downloaded || 0;
        progress.progress = torrent.value?.progress || 0;
        progress.speed = torrent.value?.downloadSpeed || 0;
    });
}
</script>

<style scoped lang="scss"></style>
