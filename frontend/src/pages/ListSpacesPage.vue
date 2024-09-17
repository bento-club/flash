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
                            v-for="room in rooms"
                            :key="room.uuid"
                            type="space"
                            :created-at="room.createdAt"
                            :name="room.name"
                        />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="flex flex-col items-center justify-center">
                        <AppButton
                            id="create-space-btn"
                            variant="rounded"
                            label="create space"
                            @click="openCreateSpaceModal"
                        >
                            <PlusIcon class="h-auto w-8 text-white" />
                        </AppButton>
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
import AppButton from "#src/components/AppButton.vue"
import CreateSpaceDialog from "#src/components/CreateSpaceDialog.vue"
import SpaceCard from "#src/components/SpaceCard.vue"
import PlusIcon from "#src/icons/PlusIcon.vue"
import BaseLayout from "#src/layouts/BaseLayout.vue"
import useRoomsService from "#src/services/rooms"
import useRoomStore from "#src/store/rooms"
import { onMounted, ref } from "vue"

type State = "listing" | "create"

const state = ref<State>("listing")

const { rooms } = useRoomStore()
const roomsService = useRoomsService()

function openCreateSpaceModal() {
    state.value = "create"
    roomsService.getAllRooms()
}

function closeCreateSpaceModal() {
    state.value = "listing"
}

async function createSpace(name: string) {
    roomsService.createRoom({ name })
}

onMounted(async () => {
    await roomsService.getAllRooms()
})
</script>

<style scoped lang="scss"></style>
