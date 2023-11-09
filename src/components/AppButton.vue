<template>
    <button
        :type="type"
        class="font-space-grotek bg-[#7A5AF8] p-4 font-medium capitalize text-white hover:bg-[#633CFF] active:bg-[#5024FF]"
        :class="[
            {
                'w-full': fullWidth,
            },
            [variant === 'rounded' ? 'rounded-full' : 'rounded-lg'],
        ]"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from "vue";

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

withDefaults(defineProps<AppButtonProps>(), {
    fullWidth: false,
    variant: "normal",
});
</script>

<style scoped></style>
