<template>
    <BaseLayout>
        <template #header>
            <section class="py-3">
                <h1 class="font-space-grotek text-2xl font-bold text-[#F1F5F9]">
                    Give yourself a nickname
                </h1>
                <p class="mt-2 text-sm leading-5 text-[#CBD5E1]">
                    Nicknames are like secret agent codenames for devices within
                    a shared file-sharing room.
                </p>
            </section>
        </template>

        <template #body>
            <div class="flex flex-col justify-between flex-grow pt-3">
                <TextInput
                    class="w-full"
                    label="Enter your nickname"
                    placeholder="Enter your nickname"
                    hide-label
                    full-width
                />

                <AppButton full-width>let's go</AppButton>
            </div>
        </template>
    </BaseLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import TextInput from "#src/components/TextInput.vue";
import BaseLayout from "#src/layouts/BaseLayout.vue";
</script>

<style scoped></style>
