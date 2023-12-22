<template>
    <div ref="containerEl" class="relative">
        <img
            :src="radarBg"
            alt="Radar background"
            class="relative z-0 h-auto w-full"
        />

        <img
            :src="scannerImg"
            alt="Scanner image"
            class="scanner absolute left-0 top-0 h-auto w-full"
        />

        <svg
            class="absolute left-0 top-0"
            viewBox="0 0 1260 1260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g class="lines">
                <g class="Vertical crosshair">
                    <g class="Frame 52">
                        <rect
                            width="32"
                            height="40"
                            transform="translate(613.999 1220)"
                            fill="#0F172A"
                        />
                        <line
                            class="Line 10"
                            x1="630.499"
                            y1="1228"
                            x2="630.499"
                            y2="1252"
                            stroke="#7A5AF8"
                        />
                    </g>
                    <g class="Frame 53">
                        <rect
                            width="32"
                            height="40"
                            transform="translate(613.999 -0.000488281)"
                            fill="#0F172A"
                        />
                        <line
                            class="Line 10_2"
                            x1="630.499"
                            y1="7.99951"
                            x2="630.499"
                            y2="31.9995"
                            stroke="#7A5AF8"
                        />
                    </g>
                </g>
                <g class="Horizontal crosshair">
                    <g class="Frame 52_2">
                        <rect
                            width="32"
                            height="40"
                            transform="translate(40 614) rotate(90)"
                            fill="#0F172A"
                        />
                        <line
                            class="Line 10_3"
                            x1="32"
                            y1="630.5"
                            x2="8"
                            y2="630.5"
                            stroke="#7A5AF8"
                        />
                    </g>
                    <g class="Frame 53_2">
                        <rect
                            width="32"
                            height="40"
                            transform="translate(1260 614) rotate(90)"
                            fill="#0F172A"
                        />
                        <line
                            class="Line 10_4"
                            x1="1252"
                            y1="630.5"
                            x2="1228"
                            y2="630.5"
                            stroke="#7A5AF8"
                        />
                    </g>
                </g>
                <g class="Overlay Shapes" style="mix-blend-mode: difference">
                    <g class="Lines">
                        <line
                            class="Line 4"
                            x1="630.501"
                            y1="65.9995"
                            x2="630.501"
                            y2="1194"
                            stroke="#7A5AF8"
                        />
                        <line
                            class="Line 5"
                            x1="1194"
                            y1="630.5"
                            x2="66.002"
                            y2="630.499"
                            stroke="#7A5AF8"
                        />
                        <line
                            class="Line 6"
                            x1="141.752"
                            y1="911.566"
                            x2="1118.63"
                            y2="347.566"
                            stroke="#7A5AF8"
                        />
                        <line
                            class="Line 7"
                            x1="348.007"
                            y1="1118.19"
                            x2="912.007"
                            y2="141.312"
                            stroke="#7A5AF8"
                        />
                        <line
                            class="Line 8"
                            x1="912.007"
                            y1="1118.69"
                            x2="348.007"
                            y2="141.812"
                            stroke="#7A5AF8"
                        />
                        <line
                            class="Line 9"
                            x1="1118.63"
                            y1="912.433"
                            x2="141.752"
                            y2="348.433"
                            stroke="#7A5AF8"
                        />
                    </g>
                    <g class="Circles">
                        <g class="cirlcles">
                            <circle
                                class="dot"
                                cx="629.999"
                                cy="780.999"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point"
                                cx="630.999"
                                cy="905.999"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_2"
                                cx="629.999"
                                cy="1042"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="Ellipse 17"
                                cx="629.999"
                                cy="1194"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="Ellipse 18"
                                cx="629.999"
                                cy="65.999"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_3"
                                cx="630.999"
                                cy="216.999"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_4"
                                cx="629.999"
                                cy="353.999"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="dot_2"
                                cx="629.999"
                                cy="478.999"
                                r="5.5"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_5"
                                cx="492"
                                cy="391"
                                r="5.5"
                                fill="rgba(248, 90, 90, 0)"
                                stroke="rgba(248, 90, 90, 0)"
                            />
                        </g>
                        <g class="cirlcles_2">
                            <circle
                                class="dot_3"
                                cx="479.499"
                                cy="629.499"
                                r="5.5"
                                transform="rotate(90 479.499 629.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_6"
                                cx="354.499"
                                cy="630.499"
                                r="5.5"
                                transform="rotate(90 354.499 630.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_7"
                                cx="218.498"
                                cy="629.499"
                                r="5.5"
                                transform="rotate(90 218.498 629.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="Ellipse 17_2"
                                cx="66.499"
                                cy="629.499"
                                r="5.5"
                                transform="rotate(90 66.499 629.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="Ellipse 18_2"
                                cx="1194.5"
                                cy="629.499"
                                r="5.5"
                                transform="rotate(90 1194.5 629.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_8"
                                cx="1043.5"
                                cy="630.499"
                                r="5.5"
                                transform="rotate(90 1043.5 630.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="intersection-point_9"
                                cx="906.499"
                                cy="629.499"
                                r="5.5"
                                transform="rotate(90 906.499 629.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                            <circle
                                class="dot_4"
                                cx="781.499"
                                cy="629.499"
                                r="5.5"
                                transform="rotate(90 781.499 629.499)"
                                fill="#7A5AF8"
                                stroke="#7A5AF8"
                            />
                        </g>
                    </g>
                    <circle
                        class="intersection-point_10"
                        cx="423"
                        cy="273"
                        r="5.5"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_11"
                        cx="272"
                        cy="424"
                        r="5.5"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_12"
                        cx="391"
                        cy="493"
                        r="5.5"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_13"
                        cx="272.119"
                        cy="836.119"
                        r="5.5"
                        transform="rotate(-61.9015 272.119 836.119)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_14"
                        cx="423.049"
                        cy="987.049"
                        r="5.5"
                        transform="rotate(-89.5326 423.049 987.049)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_15"
                        cx="836.155"
                        cy="987.155"
                        r="5.5"
                        transform="rotate(-151.037 836.155 987.155)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_16"
                        cx="987.119"
                        cy="837.118"
                        r="5.5"
                        transform="rotate(-178.858 987.119 837.118)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_17"
                        cx="987.319"
                        cy="423.319"
                        r="5.5"
                        transform="rotate(123.651 987.319 423.319)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_18"
                        cx="836.274"
                        cy="272.273"
                        r="5.5"
                        transform="rotate(92.6726 836.274 272.273)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_19"
                        cx="391.306"
                        cy="768.07"
                        r="5.5"
                        transform="rotate(-61.9015 391.306 768.07)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_20"
                        cx="492.049"
                        cy="869.049"
                        r="5.5"
                        transform="rotate(-89.5326 492.049 869.049)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_21"
                        cx="768.155"
                        cy="868.155"
                        r="5.5"
                        transform="rotate(-151.037 768.155 868.155)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_22"
                        cx="868.119"
                        cy="768.118"
                        r="5.5"
                        transform="rotate(-178.858 868.119 768.118)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_23"
                        cx="868.319"
                        cy="491.319"
                        r="5.5"
                        transform="rotate(123.651 868.319 491.319)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                    <circle
                        class="intersection-point_24"
                        cx="768.274"
                        cy="391.273"
                        r="5.5"
                        transform="rotate(92.6726 768.274 391.273)"
                        fill="rgba(248, 90, 90, 0)"
                        stroke="rgba(248, 90, 90, 0)"
                    />
                </g>
            </g>
        </svg>

        <Avatar
            v-for="coord in coords"
            :key="coord.x + coord.y"
            :style="{
                left: coord.x,
                top: coord.y,
            }"
            class="absolute -translate-x-1/2 -translate-y-1/2"
            :name="useId()"
        />
    </div>
</template>

<script setup lang="ts">
import radarBg from "#src/assets/radar-bg.svg";
import scannerImg from "#src/assets/radar-scanner.png";
import Avatar from "#src/components/Avatar.vue";
import { useId } from "radix-vue";
import { onMounted, ref } from "vue";

const containerEl = ref<HTMLElement>();

interface AvatarCoord {
    /**
     * x coord as `npx`
     */
    x: string;
    /**
     * y coord as `npx`
     */
    y: string;
}

const coords = ref<AvatarCoord[]>([]);

function getAllAvatarCoords(el: HTMLElement) {
    const pointStartingPattern = "intersection-point";

    const points = el.querySelectorAll<HTMLElement>(
        `circle[class*='${pointStartingPattern}']`,
    );

    const coords: AvatarCoord[] = [];

    for (const point of points.values()) {
        const { x, y } = point.getBoundingClientRect();

        coords.push({ x: `${Math.round(x)}px`, y: `${Math.round(y)}px` });
    }

    console.log("coordinates: ", coords);

    // return coords;

    return coords.filter((__, index) => {
        return index % 2 === 0 && index % 5 === 0;
    });
}

onMounted(() => {
    if (!containerEl.value) {
        return;
    }

    coords.value = getAllAvatarCoords(containerEl.value);
});
</script>

<style scoped lang="scss">
.scanner {
    animation: scanning 4s linear infinite;
}

@keyframes scanning {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
