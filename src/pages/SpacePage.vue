<template>
    <SpaceLayout>
        <section>
            <Radar class="w-full" />
            <p class="mt-x3 text-center text-paragraph-small text-secondary">
                Waiting for devices to join your space
            </p>
        </section>

        <ButtonGroup :options="options" class="mb-x3 mt-x6" />
    </SpaceLayout>
</template>

<script setup lang="ts">
import ButtonGroup, {
    type ButtonGroupOption,
} from "#src/components/ButtonGroup.vue";
import Radar from "#src/components/Radar.vue";
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
