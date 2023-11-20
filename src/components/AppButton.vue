<template>
    <button
        :type="type"
        class="bg-[#7A5AF8] p-4 font-space-grotesk font-medium capitalize text-white hover:bg-[#633CFF] active:bg-[#5024FF]"
        :class="[
            {
                'w-full': fullWidth,
            },
            [variant === 'rounded' ? 'rounded-full' : 'rounded-lg'],
        ]"
        @click="emit('click')"
    >
        <slot></slot>
    </button>
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
