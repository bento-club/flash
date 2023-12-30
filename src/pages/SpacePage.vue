<template>
    <SpaceLayout>
        <div class="flex flex-col justify-between h-full">
            <div class="flex-grow">
                <Radar class="w-full" />

                <div class="px-x4">
                    <p
                        class="mt-x3 text-paragraph-small text-secondary text-center"
                    >
                        Waiting for devices to join your space
                    </p>

                    <ButtonGroup :options="options" class="mb-x3 mt-x6" />
                </div>
            </div>

            <div class="flex justify-center">
                <FilePicker>
                    <AppButton label="add file" variant="rounded">
                        <PlusIcon class="w-auto h-8" />
                    </AppButton>
                </FilePicker>
            </div>
        </div>
    </SpaceLayout>
</template>

<script setup lang="ts">
import AppButton from "#src/components/AppButton.vue";
import ButtonGroup, {
    type ButtonGroupOption,
} from "#src/components/ButtonGroup.vue";
import FilePicker from "#src/components/FilePicker.vue";
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
