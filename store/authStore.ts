import { isInputValid } from "~/helpers/isInputValid"

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            authInputs: [
                {
                    placeholder: 'Email',
                    isPass: false,
                    svg: 'email',
                    inputValue: '',
                    inputType: 'email'
                },
                {
                    placeholder: 'Password',
                    isPass: true,
                    svg: 'pass',
                    inputValue: '',
                    inputType: 'password'
                }
            ],
            createInputs: [
                {
                    placeholder: 'Username',
                    isPass: false,
                    svg: 'user',
                    inputValue: '',
                    inputType: 'text'
                },
                {
                    placeholder: 'Email',
                    isPass: false,
                    svg: 'email',
                    inputValue: '',
                    inputType: 'email'
                },
                {
                    placeholder: 'Password',
                    isPass: true,
                    svg: 'pass',
                    inputValue: '',
                    inputType: 'password'
                },
                {
                    placeholder: 'Confirm Password',
                    isPass: true,
                    svg: 'pass',
                    inputValue: '',
                    inputType: 'password'
                },
            ],
            termsCheckboxValue: true
        }
    },
    getters: {
        authInputsAreValid: (state) => isInputValid(state.authInputs),
        createInputsAreValid: (state) => isInputValid(state.createInputs),
        passIsCorrect: (state) => {
            const passInputs = state.createInputs.filter((elem) => {
                return elem.isPass
            })
            return passInputs[0].inputValue === passInputs[1].inputValue
        }
    },
    actions: {
        async postAuthForm() {
            await $fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.authInputs[0].inputValue,
                    password: this.authInputs[1].inputValue,
                })
            })
        },
        async postCreateForm() {
            await $fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.createInputs[0].inputValue,
                    email: this.createInputs[1].inputValue,
                    password: this.createInputs[2].inputValue,
                })
            })
        }
    }
})

