<template>
    <div
        class="btn-group flex h-13 items-center rounded-medium border border-border-primary bg-surface-primary text-paragraph-small"
        role="group"
        :aria-label="label || 'Button group'"
    >
        <div
            v-for="(option, index) in options"
            class="flex h-full w-full flex-grow items-center justify-between"
        >
            <button
                type="button"
                class="mx-auto flex h-full items-center justify-center gap-x1 px-x4 py-x3"
                @click="emit('click', index, option)"
            >
                <div class="capitalize">
                    {{ option.label }}
                </div>

                <component
                    v-if="option.icon"
                    :is="option.icon"
                    class="h-x4 w-auto text-surface-brand"
                ></component>
            </button>

            <div
                v-if="index !== options.length - 1"
                class="divider h-9 bg-border-primary"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

export interface ButtonGroupProps {
    label?: string;
    hideLabel?: boolean;
    options: ButtonGroupOption[];
}

export interface ButtonGroupOption {
    label: string | number;
    value: any;
    icon?: Component;
}

export type ButtonGroupEvents = {
    click: [index: number, option: ButtonGroupOption];
};

defineProps<ButtonGroupProps>();
const emit = defineEmits<ButtonGroupEvents>();
</script>

<style scoped>
.divider {
    width: 1px;
}
</style>
