<template>
    <BaseLayout>
        <template #header>
            <section class="py-3">
                <h1 class="font-space-grotesk text-2xl font-bold text-[#F1F5F9]">
                    Give yourself a nickname
                </h1>
                <p class="mt-2 text-sm leading-5 text-[#CBD5E1]">
                    Nicknames are like secret agent codenames for devices within
                    a shared file-sharing room.
                </p>
            </section>
        </template>

        <template #body>
            <form class="flex flex-grow flex-col justify-between pt-3" @submit.prevent="handleChooseName">
                <TextInput
v-model="name" class="w-full" label="Enter your nickname" placeholder="Enter your nickname"
                    hide-label full-width />

                <AppButton full-width glow type="submit">
                    Create Nickname
                </AppButton>
            </form>
        </template>
    </BaseLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue"
import TextInput from "#src/components/TextInput.vue"
import BaseLayout from "#src/layouts/BaseLayout.vue"
import { useUserService } from "#src/services/user"
import useAppStore from "#src/store/app"
import { watch } from "vue"
import { useRouter } from "vue-router"

const { name, token } = useAppStore()
const userService = useUserService()
const router = useRouter()

async function handleChooseName() {
    if (name.value) {
        await userService.identify(name.value)
    }
}

watch(
    [name, token],
    () => {
        if (name.value && token.value) {
            router.replace({ name: "listSpaces" })
        }
    },
    { immediate: true },
)
</script>

<style scoped></style>
