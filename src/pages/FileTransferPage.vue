<template>
    <SpaceLayout>
        <section v-if="selectedFiles?.length">
            <h2
                class="px-x4 py-x3 text-overline text-secondary flex items-center justify-between"
            >
                <div class="uppercase">added files</div>
                <div
                    class="border-primary flex items-center justify-center w-6 h-6 border rounded-full"
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

        <div class="mt-9 px-x4">
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
