<template>
    <AppDialog
        :open="open"
        title="create space"
        :icon="SpaceIcon"
        description="Create a custom space to start sharing files to any devices connected on the internet"
        @update:open="emitModalState"
        @close="emit('close')"
    >
        <div class="px-x4 py-x3">
            <TextInput
                v-model="name"
                label="Space name"
                placeholder="Space name"
                hide-label
                full-width
            />
        </div>

        <div class="px-x4 py-x3">
            <AppButton full-width @click="onCreateSpace">
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
import { ref } from "vue";

export interface CreateSpaceDialogProps {
    open: boolean;
}

export type CreateSpaceDialogEvents = {
    close: [];
    create: [name: string];
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

const name = ref("");

function onCreateSpace() {
    emit("close");
    emit("create", name.value);
}
</script>

<style scoped></style>
