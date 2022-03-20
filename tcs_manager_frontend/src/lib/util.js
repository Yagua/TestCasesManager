export const checkValidInput = (value) => {
    let isFieldEmpty = !/^(?!\s*$).+/.test(value)
    return isFieldEmpty ? false : true
}
