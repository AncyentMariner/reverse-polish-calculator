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
    return operators.includes(char)
}

const checkforValidInput = (data) => {
    const inputRegex = new RegExp('(^[0-9|\+|\*|\.|\/|\-])+$')
    return inputRegex.test(data)
}

module.exports = {
    isOperator,
    checkforValidInput,
    isKillCode,
    isLongEnough
}