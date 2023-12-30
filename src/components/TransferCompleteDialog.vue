<template>
    <AppDialog
        :open="open"
        title="Transfer Complete! 🎉"
        description="Yaay! You have successfully received files."
        @close="emit('close')"
        @update:open="emit('update:open', $event)"
    >
        <div class="px-x4">
            <AppDivider class="mb-x3" />

            <div class="flex justify-evenly gap-x2 pb-x6 pt-x3">
                <div
                    v-for="item in items"
                    :key="item.label"
                    class="flex flex-col justify-center uppercase"
                >
                    <h3
                        class="text-center text-overline uppercase text-secondary"
                    >
                        {{ item.label }}
                    </h3>
                    <div
                        class="mt-x1 text-center text-paragraph-small font-medium"
                    >
                        {{ item.value }}
                    </div>
                </div>
            </div>
        </div>
    </AppDialog>
</template>

<script setup lang="ts">
import AppDialog, { type AppDialogEvents } from "#src/components/AppDialog.vue";
import AppDivider from "#src/components/AppDivider.vue";

export interface TransferCompleteDialogProps {
    open: boolean;
    files: number;
    size: {
        value: number;
        unit: string;
    };
    speed: {
        value: number;
        unit: string;
    };
}

export type TransferCompleteDialogEmits = AppDialogEvents;

const props = defineProps<TransferCompleteDialogProps>();
const emit = defineEmits<TransferCompleteDialogEmits>();

const items = [
    {
        label: "files",
        value: props.files,
    },
    {
        label: "size",
        value: `${props.size.value} ${props.size.unit}`,
    },
    {
        label: "speed",
        value: `${props.speed.value} ${props.speed.unit}`,
    },
];
</script>

<style scoped lang="scss"></style>
