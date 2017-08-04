const operators = ['+', '-', '/', '*']
const indexOfFirstNumToCalc = -1
const indexOfSecondNumToCalc = -2


const checkNumForFloats = (num) => {
    const input = num.trim();
    return input;
}

const runCalculations = (calcArray, operator) => {
    console.log(calcArray[indexOfFirstNumToCalc] + operator + calcArray[indexOfSecondNumToCalc])
}

module.exports = {
    runCalculations,
    checkNumForFloats
}