export const showPassword = (inputs: {isPass: boolean, inputType: string}[]) => {
    const passInputs = inputs.filter((elem) => {
        return elem.isPass
    })

    passInputs.forEach(elem => {
        elem.inputType = elem.inputType === 'password' ? 'text' : 'password'
    })
}