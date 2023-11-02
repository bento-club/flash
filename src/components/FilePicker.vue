<template>
    <label
        class="file-picker border-neutral-200 flex flex-col items-center p-4 border rounded-md cursor-pointer"
    >
        <FolderPlusIcon class="w-8 h-auto text-[#6941C6]" />

        <div class="flex flex-col items-center w-full mt-3">
            <div class="font-medium">Upload a file</div>
            <div class="text-neutral-500 mt-1">PNG, JPG, PDF, GIF etc</div>
        </div>
        <input class="sr-only" type="file" :name="name" @input="onSelectFile" />
    </label>
</template>

<script setup lang="ts">
import FolderPlusIcon from "#src/icons/FolderPlusIcon.vue";

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

function onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement;

    if (!target.files) {
        return;
    }

    emit("select", target.files);
}
</script>

<style scoped lang="scss">
.file-picker {
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
</style>
