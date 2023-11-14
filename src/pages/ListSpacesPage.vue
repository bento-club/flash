<template>
    <BaseLayout>
        <template #header>
            <h1 class="font-space-grotesk text-xl font-bold text-[#F1F5F9]">
                Hey, Shadow! 👋
            </h1>
            <p class="mt-2 text-sm text-[#CBD5E1]">
                Share files by joining or creating a room
            </p>
        </template>

        <template #body>
            <div class="flex flex-col justify-between flex-grow">
                <div>
                    <h2 class="text-overline text-placeholder py-x3 uppercase">
                        your spaces
                    </h2>

                    <div class="gap-x6 mt-x3 flex flex-col">
                        <SpaceCard
                            type="local"
                            :created-at="new Date()"
                            name="local network space"
                        />
                        <SpaceCard
                            state="active"
                            name="Milky way galaxy"
                            :created-at="new Date()"
                            :count="14"
                        />
                        <SpaceCard
                            state="active"
                            name="andromeda"
                            :created-at="new Date()"
                            :count="69"
                        />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <AppButton
                            id="create-space-btn"
                            variant="rounded"
                            @click="openCreateSpaceModal"
                        >
                            <PlusIcon class="w-8 h-auto text-white" />
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

            <CreateSpaceDialog
                :open="state === 'create'"
                @close="closeCreateSpaceModal"
            />
        </template>
    </BaseLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import CreateSpaceDialog from "#src/components/CreateSpaceDialog.vue";
import SpaceCard from "#src/components/SpaceCard.vue";
import PlusIcon from "#src/icons/PlusIcon.vue";
import BaseLayout from "#src/layouts/BaseLayout.vue";
import { ref } from "vue";

type State = "listing" | "create";

const state = ref<State>("listing");

function openCreateSpaceModal() {
    state.value = "create";
}

function closeCreateSpaceModal() {
    state.value = "listing";
}
</script>

<style scoped lang="scss"></style>
