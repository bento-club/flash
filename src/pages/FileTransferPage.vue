<template>
    <SpaceLayout>
        <FileItem v-for="file in selectedFiles" :file="file" state="base" />

        <FilePicker v-model="selectedFiles">
            <AppButton> Pick file </AppButton>
        </FilePicker>
    </SpaceLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import FileItem from "#src/components/FileItem.vue";
import FilePicker from "#src/components/FilePicker.vue";
import SpaceLayout from "#src/layouts/SpaceLayout.vue";
import { ref } from "vue";

const selectedFiles = ref<FileList>();
</script>

<style scoped lang="scss"></style>
