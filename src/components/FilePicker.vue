<template>
    <label class="file-picker cursor-pointer" @click="inputEl?.click()">
        <slot></slot>
        <input
            ref="inputEl"
            class="sr-only"
            type="file"
            :name="name"
            @input="onSelectFile"
        />
    </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface FilePickerProps {
    name?: string;
}

export type FilePickerEvents = {
    select: [files: FileList];
};

withDefaults(defineProps<FilePickerProps>(), {
    name: "fileInput",
});

const emit = defineEmits<FilePickerEvents>();

const inputEl = ref<HTMLInputElement>();

function onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;

    if (!target.files) {
        return;
    }

    emit("select", target.files);
}
</script>

<style scoped lang="scss"></style>
