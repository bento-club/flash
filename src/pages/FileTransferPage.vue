<template>
    <SpaceLayout>
        <section v-if="selectedFiles?.length">
            <h2
                class="flex items-center justify-between px-x4 py-x3 text-overline text-secondary"
            >
                <div class="uppercase">added files</div>
                <div
                    class="flex h-6 w-6 items-center justify-center rounded-full border border-primary"
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

        <FilePicker v-model="selectedFiles">
            <AppButton> Pick file </AppButton>
        </FilePicker>

        <div class="fixed bottom-0 left-0 w-full px-x4 py-x3">
            <SwipeButton label="Slide to Send File" class="w-full" />
        </div>
    </SpaceLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import FileItem from "#src/components/FileItem.vue";
import FilePicker from "#src/components/FilePicker.vue";
import SwipeButton from "#src/components/SwipeButton.vue";
import SpaceLayout from "#src/layouts/SpaceLayout.vue";
import { ref } from "vue";

const selectedFiles = ref<FileList>();

const slided = ref(false);
</script>

<style scoped lang="scss"></style>
