<template>
    <AppDialog
        :open="open"
        title="create space"
        :icon="SpaceIcon"
        description="Create a custom space to start sharing files to any devices connected on the internet"
        @update:open="emitModalState"
        @close="emit('close')"
    >
        <div class="py-x3 px-x4">
            <TextInput
                label="Space name"
                placeholder="Space name"
                hide-label
                full-width
            />
        </div>

        <div class="px-x4 py-x3">
            <AppButton full-width @click="emitModalState(false)">
                create space
            </AppButton>
        </div>
    </AppDialog>
</template>

<script setup lang="ts">
import AppDialog from "#src/components/AppDialog.vue";
import TextInput from "#src/components/TextInput.vue";
import SpaceIcon from "#src/icons/SpaceIcon.vue";
import AppButton from "#src/components/AppButton.vue";

export interface CreateSpaceDialogProps {
    open: boolean;
}

export type CreateSpaceDialogEvents = {
    close: [];
    "update:open": [state: boolean];
};

defineProps<CreateSpaceDialogProps>();
const emit = defineEmits<CreateSpaceDialogEvents>();

function emitModalState(value: boolean) {
    emit("update:open", value);

    if (!value) {
        emit("close");
    }
}
</script>

<style scoped></style>
