<template>
    <label class="file-picker cursor-pointer" @click="inputEl?.click()">
        <slot></slot>
        <input
            ref="inputEl"
            class="sr-only"
            type="file"
            :name="name"
            :value="modelValue"
            multiple
            @input="onSelectFile"
        />
    </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface FilePickerProps {
    /**
     * Name of the input element
     */
    name?: string;

    /**
     * Model value of the file input
     */
    modelValue?: FileList | null;

    /**
     * Allow selecting multiple files
     */
    multiple?: boolean;
}

export type FilePickerEvents = {
    "update:modelValue": [files: FileList];
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

    emit("update:modelValue", target.files);
}
</script>

<style scoped lang="scss"></style>
