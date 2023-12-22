<template>
    <AvatarRoot
        class="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-brand bg-surface-brand bg-opacity-35"
    >
        <AvatarImage class="h-8 w-auto" :src="avatar" :alt="name" />
        <AvatarFallback class="uppercase text-white" :delay-ms="600">
            {{ fallback }}
        </AvatarFallback>
    </AvatarRoot>
</template>

<script setup lang="ts">
import { bottts } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { AvatarRoot, AvatarImage, AvatarFallback } from "radix-vue";

export interface AvatarProps {
    name: string;
}

const props = defineProps<AvatarProps>();

//? Split into words and use only the first letters
const fallback = props.name
    .split(" ")
    .map((el) => el.trim())
    .reduce((str, el) => str + el[0], "");

const avatar = createAvatar(bottts, {
    seed: props.name,
}).toDataUriSync();
</script>

<style scoped lang="scss"></style>
