export const isInputValid = (inputs: { inputValue: string }[]) => {
    return inputs.every((elem) => {
        return elem.inputValue.trim().length !== 0
    })
}