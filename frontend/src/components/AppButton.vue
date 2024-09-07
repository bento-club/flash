<template>
    <div
        :id="id"
        class="inline-flex flex-col items-center justify-center"
        :class="{
            'w-full': fullWidth,
        }"
    >
        <button
            :type="type"
            class="p-4 font-space-grotesk font-medium capitalize text-white transition-all duration-300 hover:bg-[#633CFF] active:bg-[#5024FF]"
            :class="[
                [variant === 'rounded' ? 'rounded-full' : 'rounded-lg'],
                { 'w-full': fullWidth, glow },
            ]"
            @click="emit('click')"
        >
            <slot></slot>
        </button>

        <label
            v-if="label"
            :for="id"
            class="mt-x2 text-paragraph-x-small capitalize text-primary"
        >
            {{ label }}
        </label>
    </div>
</template>

<script setup lang="ts">
import { type ButtonHTMLAttributes, useId } from "vue"

export interface AppButtonProps {
    type?: ButtonHTMLAttributes["type"]

    /**
     * When `true` button will take the full width
     * of the parent container
     */
    fullWidth?: boolean

    /**
     * Variant of button
     */
    variant?: "rounded" | "normal"

    /**
     * When `true` glow effect is added
     */
    glow?: boolean

    /**
     * Label for the button
     */
    label?: string
}

export type AppButtonEvents = {
    /**
     * When user clicks on the button
     */
    click: []
}

withDefaults(defineProps<AppButtonProps>(), {
    fullWidth: false,
    variant: "normal",
})

const emit = defineEmits<AppButtonEvents>()
const id = useId()
</script>

<style scoped>
button {
    background: linear-gradient(
        180deg,
        #7a5af8 0%,
        rgba(122, 90, 248, 0.75) 100%
    );
    border: 1px solid #ffffff1a;

    &.glow {
        box-shadow: 0px 0px 8px 2px #ffffff4d inset;
    }
}
</style>
