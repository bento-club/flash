<template>
    <SliderRoot
        :model-value="sliderValue"
        :max="100"
        :min="1"
        class="slide-to-action min-w-75 h-14 bg-surface-brand p-x1 text-primary relative inline-block rounded-full"
        @update:model-value="handleSliding"
    >
        <SliderThumb
            class="thumb focus:outline-none block w-12 h-12"
            :class="{
                'transition-thumb': isTransitionsEnabled && !isThumbActive,
            }"
            aria-label="Volume"
            @pointerdown="handleThumbPointerDown"
            @pointerup="handleThumbPointerUp"
        >
            <SubtractIcon class="w-auto h-full text-white" />
        </SliderThumb>
    </SliderRoot>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { SliderRoot, SliderThumb } from "radix-vue";
import SubtractIcon from "#src/icons/SubtractIcon.vue";
import { clamp } from "lodash";

export interface SlideButtonProps {
    modelValue: boolean;
}

export type SlideButtonEmits = {
    "update:modelValue": [value: boolean];
};

const props = defineProps<SlideButtonProps>();
const emit = defineEmits<SlideButtonEmits>();

onMounted(() => {
    setTimeout(() => {
        isTransitionsEnabled.value = true;
    }, 500);
});

const isTransitionsEnabled = ref(false);

const MIN_SLIDE_VALUE = 3;
const MAX_SLIDE_VALUE = 97;
const COMPLETE_MIN_SLIDE_VALUE = Math.round(0.6 * MAX_SLIDE_VALUE);

const sliderValue = ref([MIN_SLIDE_VALUE]);

const isThumbActive = ref<boolean>(false);

function handleThumbPointerDown() {
    isThumbActive.value = true;
}

function handleThumbPointerUp() {
    isThumbActive.value = false;
}

function handleSliding(payload: number[] | undefined) {
    if (!payload) {
        return;
    }

    if (!isThumbActive.value) {
        return;
    }

    if (payload[0] < sliderValue.value[0]) {
        return;
    }

    payload[0] = clamp(payload[0], MIN_SLIDE_VALUE, MAX_SLIDE_VALUE);

    sliderValue.value = payload;
}

function watchAndStickSlider() {
    watch(isThumbActive, () => {
        if (sliderValue.value[0] < COMPLETE_MIN_SLIDE_VALUE) {
            sliderValue.value = [MIN_SLIDE_VALUE];
            emit("update:modelValue", false);
        } else {
            sliderValue.value = [MAX_SLIDE_VALUE];
            emit("update:modelValue", true);
        }
    });
}
watchAndStickSlider();

function syncSliderValue() {
    watch([() => props.modelValue], () => {
        if (props.modelValue) {
            sliderValue.value = [MAX_SLIDE_VALUE];
        } else {
            sliderValue.value = [MIN_SLIDE_VALUE];
        }
    });
}
syncSliderValue();
</script>

<style lang="scss" scoped>
.slide-to-action {
    .transition-thumb {
        transition: left 100ms linear;
    }
}
</style>
