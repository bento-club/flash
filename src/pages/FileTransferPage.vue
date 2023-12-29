<template>
    <SpaceLayout>
        <FileItem
            v-for="file in selectedFiles"
            :key="file.name"
            :file="file"
            state="base"
        />

        <FilePicker v-model="selectedFiles">
            <AppButton> Pick file </AppButton>
        </FilePicker>

        <div class="mt-9">
            <SlideButton v-model="slided" />
        </div>
    </SpaceLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import FileItem from "#src/components/FileItem.vue";
import FilePicker from "#src/components/FilePicker.vue";
import SlideButton from "#src/components/SlideButton.vue";
import SpaceLayout from "#src/layouts/SpaceLayout.vue";
import { ref } from "vue";

const selectedFiles = ref<FileList>();
const slided = ref(false);
</script>

<style scoped lang="scss"></style>
