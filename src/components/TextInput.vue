<template>
    <div class="inline-block">
        <label
            v-if="label && !hideLabel"
            :for="id"
            class="block mb-2 text-white capitalize"
        >
            {{ label }}
        </label>
        <input
            :id="id"
            class="text-input error rounded-lg border border-[#334155] bg-[#0F172A] p-4 text-[#CBD5E1] placeholder:capitalize placeholder:text-[#64748B]"
            :type="type"
            :placeholder="placeholder"
        />

        <div class="flex items-center mt-2">
            <AlertIcon class="mr-1 h-4 w-auto text-[#F26060]" />
            <p v-if="error" class="text-xs text-[#F26060]">{{ error }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import AlertIcon from "#src/icons/AlertIcon.vue";
import { useId } from "radix-vue";

export interface TextInputProps {
    /**
     * Id of the input element
     */
    id?: string;

    /**
     * Label of the text input
     */
    label?: string;

    /**
     * Placeholder of the input element
     */
    placeholder?: string;

    /**
     * Type of the input
     */
    type?: "text" | "number";

    /**
     * Error message to display
     */
    error?: string;

    /**
     * Visually hide label
     *
     * @description
     * Label will be still visible to screen readers
     */
    hideLabel?: string;
}

withDefaults(defineProps<TextInputProps>(), {
    type: "text",
    id: () => useId(),
});
</script>

<style scoped lang="scss">
.text-input {
    &:focus {
        border-color: #7a5af8;
        box-shadow: 0px 0px 4px 2px rgba(122, 90, 248, 0.25);
        @apply outline-none;
    }

    &.error {
        border-color: #f26060;
        box-shadow: 0px 0px 4px 2px rgba(242, 96, 96, 0.25);
    }
}
</style>
