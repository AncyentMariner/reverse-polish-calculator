const operators = ['+', '-', '/', '*']

const isOperator = (char) => {
    return operators.includes(char)
}

const checkNumForFloats = (num) => {
    console.log(num)
    return num;
}

const runCalculations = () => {
    console.log('thing')
}

module.exports = {
    runCalculations,
    isOperator,
    checkNumForFloats
}