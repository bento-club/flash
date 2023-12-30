<template>
    <SpaceLayout>
        <section v-if="selectedFiles?.length">
            <h2
                class="flex items-center justify-between px-x4 py-x3 text-overline text-secondary"
            >
                <div class="uppercase">added files</div>
                <div
                    class="flex h-6 w-6 items-center justify-center rounded-full border border-primary font-space-grotesk text-paragraph-x-small font-bold"
                >
                    {{ selectedFiles?.length }}
                </div>
            </h2>

            <FileItem
                v-for="file in selectedFiles"
                :key="file.name"
                :file="file"
                state="base"
            />
        </section>

        <FilePicker v-if="!selectedFiles?.length" v-model="selectedFiles">
            <AppButton> Pick file </AppButton>
        </FilePicker>

        <div class="fixed bottom-0 left-0 w-full px-x4 py-x3">
            <SwipeButton
                label="Slide to Send File"
                class="w-full"
                @swipe="onSwipe"
            />
        </div>

        <TransferCompleteDialog
            v-model:open="isTransferComplete"
            :files="4"
            :size="{ value: 32.4, unit: 'mb' }"
            :speed="{ value: 68, unit: 'mb/s' }"
        />
    </SpaceLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import FileItem from "#src/components/FileItem.vue";
import FilePicker from "#src/components/FilePicker.vue";
import SwipeButton from "#src/components/SwipeButton.vue";
import TransferCompleteDialog from "#src/components/TransferCompleteDialog.vue";
import SpaceLayout from "#src/layouts/SpaceLayout.vue";
import { ref } from "vue";

const selectedFiles = ref<FileList>();

const isTransferComplete = ref(false);

function onSwipe() {
    setTimeout(() => {
        isTransferComplete.value = true;
    }, 500);
}
</script>

<style scoped lang="scss"></style>
