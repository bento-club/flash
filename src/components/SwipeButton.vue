<template>
    <SliderRoot
        :model-value="sliderValue"
        :max="100"
        :min="1"
        class="slide-to-action relative inline-flex h-14 min-w-75 items-center justify-center rounded-full bg-surface-brand p-x1 text-primary"
        @update:model-value="handleSliding"
    >
        <SliderThumb
            :id="id"
            class="thumb inline-block h-12 w-12 overflow-clip rounded-full bg-surface-brand focus:outline-none"
            :class="{
                'transition-thumb': isTransitionsEnabled && !isThumbActive,
            }"
            aria-label="Volume"
            @pointerdown="handleThumbPointerDown"
            @pointerup="handleThumbPointerUp"
        >
            <SubtractIcon class="h-full w-auto text-white" />
        </SliderThumb>

        <label v-if="label" :for="id">
            {{ label }}
        </label>
    </SliderRoot>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { SliderRoot, SliderThumb, useId } from "radix-vue";
import SubtractIcon from "#src/icons/SubtractIcon.vue";
import { clamp } from "lodash";

export interface SwipeButtonProps {
    id?: string;
    label?: string;
    modelValue?: boolean;
    textTransform?:
        | "capitalize"
        | "uppercase"
        | "none"
        | "lowercase"
        | "full-width"
        | "full-size-kana";
    reversible?: boolean;
}

export type SwipeButtonEmits = {
    /**
     * Emit the model value as `true` or `false`
     */
    "update:modelValue": [value: boolean];

    /**
     * Emitted when starting the swipe
     */
    start: [value: number];

    /**
     * Emitted when the user has stopped
     * the swiping. This is emitted even
     * when swiping is not complete
     */
    end: [value: number];

    /**
     * Emitted when the user has
     * fully swiped the button
     */
    swipe: [value: number];
};

const props = withDefaults(defineProps<SwipeButtonProps>(), {
    id: () => useId(),
    textTransform: "none",
    reversible: true,
});
const emit = defineEmits<SwipeButtonEmits>();

onMounted(() => {
    setTimeout(() => {
        isTransitionsEnabled.value = true;
    }, 500);
});

const isTransitionsEnabled = ref(false);

const MIN_SLIDE_VALUE = 2;
const MAX_SLIDE_VALUE = 99;
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

    if (sliderValue.value[0] === MAX_SLIDE_VALUE && !props.reversible) {
        return;
    }

    payload[0] = clamp(payload[0], MIN_SLIDE_VALUE, MAX_SLIDE_VALUE);

    sliderValue.value = payload;
}

function watchThumbClick() {
    watch(isThumbActive, () => {
        if (sliderValue.value[0] < COMPLETE_MIN_SLIDE_VALUE) {
            sliderValue.value = [MIN_SLIDE_VALUE];
            emit("update:modelValue", false);
        } else {
            sliderValue.value = [MAX_SLIDE_VALUE];
            emit("update:modelValue", true);
        }

        if (isThumbActive.value) {
            emit("start", normaliseValue(sliderValue.value[0]));
        } else {
            emit("end", normaliseValue(sliderValue.value[0]));
        }

        if (sliderValue.value[0] === MAX_SLIDE_VALUE && !isThumbActive.value) {
            emit("swipe", normaliseValue(sliderValue.value[0]));
        }
    });
}
watchThumbClick();

function normaliseValue(value: number) {
    if (value <= MIN_SLIDE_VALUE) {
        return 0;
    }

    if (value >= MAX_SLIDE_VALUE) {
        return 100;
    }

    return value;
}

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
        transition: left 1200ms cubic-bezier(0.16, 1, 0.3, 1);
    }
}
</style>
