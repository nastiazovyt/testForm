<script setup lang="ts">
const props = defineProps<{ firstSpan: string, secondSpan: string }>()
</script>


<template>
    <div class="bg-[#6172F3] basis-1/2 relative pb-20 flex flex-col">
        <slot></slot>
        <svg
            class="absolute size-[37.875rem] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            width="606"
            height="606"
            viewBox="0 0 606 606"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="303"
                cy="303"
                r="303"
                fill="url(#paint0_radial_3401_35)"
                fill-opacity="0.2"
            />
            <circle
                cx="303"
                cy="303"
                r="303"
                fill="url(#paint1_linear_3401_35)"
                fill-opacity="0.2"
            />
            <circle
                cx="303"
                cy="302"
                r="264"
                fill="url(#paint2_radial_3401_35)"
                fill-opacity="0.2"
            />
            <circle
                cx="303"
                cy="302"
                r="264"
                fill="url(#paint3_linear_3401_35)"
                fill-opacity="0.2"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_3401_35"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(303 303) rotate(90) scale(303)"
                >
                    <stop
                        stop-color="#444CE7"
                        stop-opacity="0.81"
                    />
                    <stop
                        offset="1"
                        stop-color="#444CE7"
                        stop-opacity="0.29"
                    />
                </radialGradient>
                <linearGradient
                    id="paint1_linear_3401_35"
                    x1="175.047"
                    y1="1.87602e-06"
                    x2="360.757"
                    y2="597.559"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop
                        stop-color="#444CE7"
                        stop-opacity="0.81"
                    />
                    <stop
                        offset="1"
                        stop-opacity="0"
                    />
                </linearGradient>
                <radialGradient
                    id="paint2_radial_3401_35"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(303 302) rotate(90) scale(264)"
                >
                    <stop
                        stop-color="#444CE7"
                        stop-opacity="0.81"
                    />
                    <stop
                        offset="1"
                        stop-color="#444CE7"
                        stop-opacity="0.29"
                    />
                </radialGradient>
                <linearGradient
                    id="paint3_linear_3401_35"
                    x1="303"
                    y1="38"
                    x2="356.333"
                    y2="536.667"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#A4BCFD" />
                    <stop
                        offset="1"
                        stop-color="#444CE7"
                        stop-opacity="0.81"
                    />
                </linearGradient>
            </defs>
        </svg>
        <div class="font-montserrat flex flex-col items-center text-[#E0EAFF] mt-auto">
            <span class="font-bold text-xl">{{ firstSpan }}</span>
            <span class="font-medium text-base opacity-75">{{ secondSpan }}</span>
        </div>
    </div>
</template>