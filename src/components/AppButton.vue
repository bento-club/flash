<template>
    <div
        class="inline-flex flex-col items-center justify-center"
        :class="{
            'w-full': fullWidth,
        }"
    >
        <button
            :type="type"
            class="bg-surface-brand p-4 font-space-grotesk font-medium capitalize text-white hover:bg-[#633CFF] active:bg-[#5024FF]"
            :class="[
                [variant === 'rounded' ? 'rounded-full' : 'rounded-lg'],
                { 'w-full': fullWidth },
            ]"
            @click="emit('click')"
        >
            <slot></slot>
        </button>

        <p
            v-if="label"
            class="mt-x2 text-paragraph-x-small capitalize text-primary"
        >
            {{ label }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

export interface AppButtonProps {
    type?: ButtonHTMLAttributes["type"];

    /**
     * When `true` button will take the full width
     * of the parent container
     */
    fullWidth?: boolean;

    /**
     * Variant of button
     */
    variant?: "rounded" | "normal";

    /**
     * Label for the button
     */
    label?: string;
}

export type AppButtonEvents = {
    /**
     * When user clicks on the button
     */
    click: [];
};

withDefaults(defineProps<AppButtonProps>(), {
    fullWidth: false,
    variant: "normal",
});

const emit = defineEmits<AppButtonEvents>();
</script>

<style scoped></style>
