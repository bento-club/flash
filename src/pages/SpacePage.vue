<template>
    <SpaceLayout>
        <Radar class="w-full" />

        <ButtonGroup :options="options" class="my-x3" />
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
