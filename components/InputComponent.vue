<script setup lang="ts">
defineProps<{ placeholder: string, isPass: boolean, svg: string, type: string }>()
const model = defineModel()
</script>


<template>
    <label class="flex items-center w-[453px] gap-x-2.5 ps-2.5 pe-5 py-4 bg-inputBg rounded-lg border-inputBorder border-2">
        <icons-email-icon v-if="svg === 'email'"></icons-email-icon>
        <icons-pass-icon v-if="svg === 'pass'"></icons-pass-icon>
        <icons-user-icon v-if="svg === 'user'"></icons-user-icon>
        <input
            :type="type"
            v-model="model"
            :placeholder="placeholder"
            class="p-0 font-normal bg-transparent border-0 font-inter text-inputText text-lg focus:ring-0"
        >
        <icons-eye-icon
            @click="$emit('showPass')"
            v-if="isPass"
            class="size-7 ms-auto cursor-pointer pointer-events-visible"
        ></icons-eye-icon>
    </label>
</template>