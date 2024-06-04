<script setup lang="ts">
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore()

const emailInputValue = authStore.createInputs.find(elem => {
    return elem.placeholder === 'Email'
})

const clearPass = () => {
   const passInputs = authStore.createInputs.filter(elem => {
        return elem.isPass
    })
    passInputs.forEach(input => {
        input.inputValue = ''
    })
}


</script>

<template>
    <div class="flex max-h-[64rem] h-screen max-w-[90rem] rounded-[3.125rem] m-auto overflow-hidden">
        <div class="flex justify-center flex-col basis-1/2">
            <div class="w-fit m-auto">
                <div class="flex flex-col mb-6 gap-y-1">
                    <MainTitle>Enter OTP</MainTitle>
                    <span class="text-xl font-montserrat text-[#71717A] font-normal">Sent OTP on
                        <span class="font-semibold text-[#8098F9]">{{ emailInputValue?.inputValue }}</span> </span>
                    <nuxt-link
                        @click="clearPass"
                        class="text-[#8098F9] font-montserrat text-base font-bold"
                        to="/login"
                    >Change email</nuxt-link>
                </div>
                <div class="flex flex-col items-center w-fit">
                    <div class="flex flex-row items-center w-full justify-between mb-6">
                        <label
                            v-for="n in 6"
                            class="size-16 flex justify-center bg-inputBg rounded-lg border-inputBorder border-2"
                        >
                            <input
                                maxlength="1"
                                placeholder="-"
                                class="p-0 font-normal bg-transparent border-0 font-inter text-inputText text-lg focus:ring-0 text-center size-16"
                            >
                        </label>
                    </div>
                    <Button
                        :disabled="false"
                        class="mx-3"
                    >SUBMIT</Button>
                </div>
            </div>
        </div>
        <RightSide
            :firstSpan="'It is just OTP verification'"
            :secondSpan="'You are one step away from recovering your password.'"
        >
            <NuxtImg
                class="z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[36.625rem] h-[23.063rem]"
                src="pic-3.png"
            ></NuxtImg>
        </RightSide>
    </div>
</template>