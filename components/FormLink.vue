<script setup lang="ts">
defineProps<{ preLinkText: string, linkText: string, link?: string, page: string }>()
</script>


<template>
    <div class="font-montserrat text-base pt-5">
        <span class="text-[#71717A] font-normal">{{ preLinkText }}</span>
        <span v-if="page === 'login'"
            @click="$emit('alertMessage')"
            class="text-[#8098F9] font-medium ps-1 cursor-pointer"
        >{{ linkText }}</span>
        <nuxt-link   class="text-[#8098F9] font-medium ps-1 cursor-pointer" v-else :to="link">{{ linkText }}</nuxt-link>
    </div>
</template>