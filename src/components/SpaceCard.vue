<template>
    <button
        class="w-full rounded-medium border p-x4 text-left"
        :class="[
            state === 'active'
                ? 'border-brand shadow-brand-focus-ring'
                : 'border-primary',
        ]"
    >
        <header class="flex items-center justify-between font-space-grotesk">
            <section class="flex items-center">
                <component
                    :is="icon[type]"
                    class="h-6 w-auto"
                    :class="[
                        state === 'active'
                            ? 'text-surface-brand'
                            : 'text-surface-tertiary',
                    ]"
                />
                <h3 class="ml-x2 font-bold capitalize text-primary">
                    {{ name }}
                </h3>
            </section>

            <section
                class="flex h-6 w-6 items-center justify-center rounded-full border text-paragraph-x-small font-bold"
                :class="[
                    state === 'active'
                        ? 'border-brand bg-surface-brand bg-opacity-35 text-brand-purple'
                        : 'border-primary bg-surface-secondary text-placeholder',
                ]"
            >
                {{ count }}
            </section>
        </header>

        <p class="mt-x2 text-paragraph-x-small text-secondary">
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
