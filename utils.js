const isKillCode = (char) => {
    const killArray = ['q', 'q!'];
    const input = char.trim()

    return killArray.includes(input)
}

const isLongEnough = (array) => {
    return array.length >= 2
}

const isOperator = (char) => {
    const operators = ['+', '-', '/', '*']
    const input = char.trim()
    return operators.includes(input)
}

const checkforValidInput = (data) => {
    const input = data.trim()
    const inputRegex = new RegExp('([0-9|\+|\*|\.|\/|\-])+g')
    return inputRegex.test(input)
}

module.exports = {
    isOperator,
    checkforValidInput,
    isKillCode,
    isLongEnough
}