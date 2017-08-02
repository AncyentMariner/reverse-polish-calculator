const operators = ['+', '-', '/', '*']

const operatorCheck = (char) => {
    return operators.includes(char)
}

const runCalculations = () => {
    console.log('thing')
}


module.exports = {
    runCalculations,
    operatorCheck
}