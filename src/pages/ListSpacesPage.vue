<template>
    <BaseLayout>
        <template #header>
            <h1 class="font-space-grotek text-xl font-bold text-[#F1F5F9]">
                Hey, Shadow! 👋
            </h1>
            <p class="mt-2 text-sm text-[#CBD5E1]">
                Share files by joining or creating a room
            </p>
        </template>

        <template #body>
            <div class="flex flex-grow flex-col justify-between">
                <div>
                    <h2 class="text-xs uppercase text-[#64748B]">
                        your spaces
                    </h2>
                </div>

                <div class="flex justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <AppButton id="create-space-btn" variant="rounded">
                            <PlusIcon class="h-auto w-8 text-white" />
                        </AppButton>

                        <label
                            for="create-space-btn"
                            class="mt-2 text-xs capitalize text-[#CBD5E1]"
                        >
                            create space
                        </label>
                    </div>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import PlusIcon from "#src/icons/PlusIcon.vue";
import BaseLayout from "#src/layouts/BaseLayout.vue";
</script>

<style scoped lang="scss"></style>
