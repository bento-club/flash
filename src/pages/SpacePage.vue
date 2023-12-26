<template>
    <SpaceLayout>
        <div class="flex h-full flex-col justify-between">
            <div class="flex-grow">
                <section>
                    <Radar class="w-full" />
                    <p
                        class="mt-x3 text-center text-paragraph-small text-secondary"
                    >
                        Waiting for devices to join your space
                    </p>
                </section>

                <ButtonGroup :options="options" class="mb-x3 mt-x6" />
            </div>

            <AppButton label="add file" variant="rounded">
                <PlusIcon class="h-8 w-auto" />
            </AppButton>
        </div>
    </SpaceLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import ButtonGroup, {
    type ButtonGroupOption,
} from "#src/components/ButtonGroup.vue";
import Radar from "#src/components/Radar.vue";
import PlusIcon from "#src/icons/PlusIcon.vue";
import QRCodeIcon from "#src/icons/QRCodeIcon.vue";
import ShareIcon from "#src/icons/ShareIcon.vue";
import SpaceLayout from "#src/layouts/SpaceLayout.vue";

const options: ButtonGroupOption[] = [
    {
        label: "share link",
        icon: ShareIcon,
        value: "shareLink",
    },
    {
        label: "QR code",
        icon: QRCodeIcon,
        value: "qrCode",
    },
];
</script>

<style scoped></style>
