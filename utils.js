const isOperator = (char) => {
    const input = char.trim()
    return operators.includes(input)
}

const checkforValidInput = (data) => {
    const input = data.trim()
    const inputRegex = new RegExp('([0-9|\+|\*|\.|\/|\-])+')
    return inputRegex.test(input)
}

module.exports = {
    isOperator,
    checkforValidInput
}