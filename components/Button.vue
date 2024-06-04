<script setup lang="ts">
defineProps<{disabled: boolean}>()
</script>

<template>
   <button :disabled="disabled" class="font-inter font-bold text-xl text-white bg-[#8098F9] rounded-xl w-[28.300rem] py-5 disabled:bg-slate-600">
      <slot></slot>
   </button>
</template>