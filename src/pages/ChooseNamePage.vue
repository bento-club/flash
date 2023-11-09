<template>
    <div class="p-7 bg-black">
        <TextInput
            label="Title"
            placeholder="placeholder"
            error="Error message"
        />

        <AppButton> continue </AppButton>

        <AppButton variant="rounded">
            <FolderPlusIcon class="w-auto h-4" />
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import TextInput from "#src/components/TextInput.vue";
import FolderPlusIcon from "#src/icons/FolderPlusIcon.vue";
</script>

<style scoped></style>
