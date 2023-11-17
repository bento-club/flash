<template>
    <BaseLayout>
        <template #header>
            <div class="mb-x3">
                <h1
                    class="font-space-grotesk text-heading-medium font-bold text-primary"
                >
                    Hey, Shadow! 👋
                </h1>
                <p class="mt-x2 text-sm text-[#CBD5E1]">
                    Share files by joining or creating a room
                </p>
            </div>
        </template>

        <template #body>
            <div class="flex flex-grow flex-col justify-between">
                <div>
                    <h2 class="py-x3 text-overline uppercase text-placeholder">
                        your spaces
                    </h2>

                    <div class="mt-x3 flex flex-col gap-x6">
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

            <CreateSpaceDialog
                :open="state === 'create'"
                @close="closeCreateSpaceModal"
                @create="createSpace"
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
import { useRouter } from "vue-router";

type State = "listing" | "create";

const state = ref<State>("listing");

function openCreateSpaceModal() {
    state.value = "create";
}

function closeCreateSpaceModal() {
    state.value = "listing";
}

const router = useRouter();

function createSpace(name: string) {
    console.log("space: ", name);
    router.push({ name: "space", params: { name: name } });
}
</script>

<style scoped lang="scss"></style>
