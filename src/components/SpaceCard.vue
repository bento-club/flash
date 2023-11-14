<template>
    <button
        class="rounded-medium p-x4 w-full text-left border"
        :class="[
            state === 'active'
                ? 'shadow-brand-focus-ring border-brand'
                : 'border-primary',
        ]"
    >
        <header class="font-space-grotesk flex items-center justify-between">
            <section class="flex items-center">
                <component
                    :is="icon[type]"
                    class="w-auto h-6"
                    :class="[
                        state === 'active'
                            ? 'text-surface-brand'
                            : 'text-surface-tertiary',
                    ]"
                />
                <h3 class="ml-x2 text-primary font-bold capitalize">{{ name }}</h3>
            </section>

            <section
                class="text-paragraph-x-small flex items-center justify-center w-6 h-6 font-bold border rounded-full"
                :class="[
                    state === 'active'
                        ? 'border-brand text-brand-purple bg-opacity-35 bg-surface-brand'
                        : 'text-placeholder bg-surface-secondary border-primary',
                ]"
            >
                {{ count }}
            </section>
        </header>

        <p class="text-paragraph-x-small mt-x2 text-secondary">
            Space created on {{ formattedDate }}
        </p>
    </button>
</template>

<script setup lang="ts">
import SpaceIcon from "#src/icons/SpaceIcon.vue";
import WiFiIcon from "#src/icons/WiFiIcon.vue";
import { computed, type Component } from "vue";

export interface SpaceCardProps {
    /**
     * State of the space card
     */
    state?: "base" | "active";

    /**
     * Name of the space
     */
    name?: string;

    /**
     * Type of space
     */
    type?: "local" | "space";

    /**
     * When the space was created at
     */
    createdAt?: Date;

    /**
     * Count of people in the room
     */
    count?: number;
}

const props = withDefaults(defineProps<SpaceCardProps>(), {
    state: "base",
    type: "space",
    count: 0,
    name: "---",
});

const icon: Record<(typeof props)["type"], Component> = {
    local: WiFiIcon,
    space: SpaceIcon,
};

const formattedDate = computed(() => {
    if (!props.createdAt) {
        return "---";
    }

    return `${props.createdAt.getDate()}/${
        props.createdAt.getMonth() + 1
    }/${props.createdAt.getFullYear()}`;
});
</script>

<style scoped></style>
