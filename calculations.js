const removeLastTwo = (array) => {
    array.splice(array.length - 2, 2);
}

const runCalculations = (calcArray, operator) => {
    const indexOfFirstNum = 2
    const indexOfSecondNum = 1
    const arrLength = calcArray.length

    const maths = eval(
        calcArray[arrLength - indexOfFirstNum] +
        operator +
        calcArray[arrLength - indexOfSecondNum]
    )

    removeLastTwo(calcArray)
    calcArray.push(maths)

    return calcArray
}

module.exports = {
    runCalculations
}