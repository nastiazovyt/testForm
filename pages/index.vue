<script setup lang="ts">
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore()
</script>

<template>
    <div class="flex max-h-[64rem] h-screen max-w-[90rem] rounded-[3.125rem] m-auto overflow-hidden">
        <div class="flex justify-center items-center flex-col basis-1/2">
            <div class="w-fit m-auto">
                <div class="flex gap-y-6 flex-col items-center mb-6">
                    <MainTitle>Login to your Account</MainTitle>
                    <div class="flex flex-row items-center justify-between w-full px-3">
                        <svg
                            class="w-[7.5rem]"
                            width="120"
                            height="1"
                            viewBox="0 0 120 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                y1="0.5"
                                x2="120"
                                y2="0.5"
                                stroke="#71717A"
                            />
                        </svg>
                        <span class="font-medium text-sm font-montserrat text-[#71717A]">with email</span>
                        <svg
                            class="w-[7.5rem]"
                            width="120"
                            height="1"
                            viewBox="0 0 120 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                y1="0.5"
                                x2="120"
                                y2="0.5"
                                stroke="#71717A"
                            />
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex gap-y-2.5 flex-col mb-6">
                        <InputComponent
                            v-for="el in authStore.authInputs"
                            :key="el.placeholder"
                            v-model="el.inputValue"
                            :svg="el.svg"
                            :is-pass="el.isPass"
                            :placeholder="el.placeholder"
                            :type="el.inputType"
                        >
                        </InputComponent>
                    </div>
                    <Button
                        @click="authStore.postAuthForm()"
                        :disabled="!authStore.authInputsAreValid"
                    >LOG IN</Button>
                    <FormLink
                        :preLinkText="'  Don’t have account? '"
                        :page="'index'"
                        :linkText="'Create an account'"
                        :link="'/login'"
                    />

                </div>
            </div>
        </div>
        <RightSide
            :firstSpan="'Connect with any device.'"
            :secondSpan="'Everything you need is an internet connection.'"
        >
            <NuxtImg
                class="z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[36.625rem] h-[23.063rem]"
                src="pic-1.png"
            ></NuxtImg>
        </RightSide>
    </div>
</template>