<template>
    <DialogRoot :open="open" @update:open="emitState">
        <DialogPortal>
            <DialogOverlay class="overlay" />
            <DialogContent
                as="article"
                class="content rounded-medium border border-primary bg-surface-primary py-x3 text-primary"
            >
                <header class="px-x4 py-x3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <component
                                :is="icon"
                                v-if="icon"
                                class="mr-2 h-6 w-auto text-surface-brand"
                            ></component>

                            <DialogTitle
                                class="font-space-grotesk text-heading-small font-bold capitalize"
                            >
                                {{ title }}
                            </DialogTitle>
                        </div>

                        <DialogClose class="flex items-center" type="button">
                            <XIcon class="h-6 w-auto text-surface-tertiary" />
                        </DialogClose>
                    </div>

                    <DialogDescription
                        class="mt-x2 text-paragraph-small text-secondary"
                    >
                        {{ description }}
                    </DialogDescription>
                </header>

                <section :class="$attrs.class">
                    <slot></slot>
                </section>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<script setup lang="ts">
import XIcon from "#src/icons/XIcon.vue";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
} from "radix-vue";
import { type Component } from "vue";

export interface AppDialogProps {
    /**
     * When `true` dialog will be opened
     */
    open: boolean;

    /**
     * Title of the dialog
     */
    title?: string;

    /**
     * Description text shown under title
     */
    description?: string;

    icon?: Component;
}

export type AppDialogEvents = {
    "update:open": [state: boolean];
    close: [];
};

defineProps<AppDialogProps>();
const emit = defineEmits<AppDialogEvents>();

function emitState(val: boolean) {
    emit("update:open", val);

    if (!val) {
        emit("close");
    }
}
</script>

<style scoped lang="scss">
.overlay {
    background: rgba(122, 90, 248, 0.2);
    backdrop-filter: blur(4px);
    position: fixed;
    inset: 0;
    animation: overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &[data-state="closed"] {
        animation: overlay-hide 300ms cubic-bezier(0.16, 1, 0.3, 1);
    }
}

.content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95vw;
    max-width: 450px;
    max-height: 85vh;
    animation: content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &[data-state="closed"] {
        animation: content-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
}

@keyframes overlay-show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes overlay-hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes content-show {
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes content-hide {
    from {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    to {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
}
</style>
