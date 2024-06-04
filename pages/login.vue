<script setup lang="ts">
import { useAuthStore } from '../store/authStore';
import { isInputValid } from "~/helpers/isInputValid"

const authStore = useAuthStore()

const alertMessage = () => {
    if (isInputValid(authStore.createInputs)) {
        if (confirm('Введённые данные будут стёрты. Подтвердите переход')) {
            authStore.createInputs.forEach(elem => elem.inputValue = '')
            navigateTo('/')
        }
    } else {
        navigateTo('/')
    }
}
</script>

<template>
    <div class="flex max-h-[64rem] h-screen max-w-[90rem] rounded-[3.125rem] m-auto overflow-hidden">
        <div class="flex justify-center flex-col basis-1/2">
            <div class="w-fit m-auto">
                <div class="flex flex-col mb-6 gap-y-1">
                    <MainTitle>Create your account</MainTitle>
                    <span class="text-[#71717A] text-base font-montserrat font-normal leading-6">Unlock all
                        Features!</span>
                </div>
                <div class="flex flex-col items-center px-3 w-fit">
                    <div class="flex gap-y-2.5 flex-col mb-6">
                        <InputComponent
                            v-for="el in authStore.createInputs"
                            :key="el.placeholder"
                            :svg="el.svg"
                            :type="el.inputType"
                            v-model="el.inputValue"
                            :is-pass="el.isPass"
                            :placeholder="el.placeholder"
                        >
                        </InputComponent>

                        <label
                            class="flex flex-row items-center gap-x-2 font-montserrat text-base text-[#71717A] font-normal"
                        >
                            <input
                                v-model="authStore.termsCheckboxValue"
                                class="border-[#8098F9] rounded-sm size-5 border-2 cursor-pointer focus:ring-offset-0 focus:ring-0 checked:bg-none"
                                type="checkbox"
                            >
                            <span>Accept</span>
                            <nuxt-link
                                class=" text-[#8098F9] font-medium"
                                to="/"
                            >terms and conditions</nuxt-link>
                        </label>

                    </div>
                    <Button
                        @click="navigateTo('/otp'), authStore.postCreateForm()"
                        :disabled="!authStore.createInputsAreValid || !authStore.termsCheckboxValue || !authStore.passIsCorrect"
                    >SIGN UP</Button>
                    <FormLink
                        @alertMessage="alertMessage"
                        :page="'login'"
                        :preLinkText="'You have account?'"
                        :linkText="'Login now'"
                    />
                </div>
            </div>
        </div>
        <RightSide
            :firstSpan="'Join us!'"
            :secondSpan="'Just go through the boring process of creating an account.'"
        >
            <NuxtImg
                class="z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[36.625rem] h-[23.063rem]"
                src="pic-2.png"
            ></NuxtImg>
        </RightSide>
    </div>
</template>