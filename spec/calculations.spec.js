const calc = require('../calculations')
const utils = require('../utils')

describe("basic calculations", () => {
    it("adds two numbers correctly", () => {
        const inputArray = [100, 42]
        const operator = '+'
        const result = calc.runCalculations(inputArray, operator)

        return expect(result).toEqual([142])
    })

    it("subtracts two numbers correctly", () => {
        const inputArray = [42, 43]
        const operator = '-'

        const result = calc.runCalculations(inputArray, operator)
        return expect(result).toEqual([-1])
    })
})

describe("operator check", () => {
    it("correctly identifies mathematical operator", () => {
        const operator = '-'

        const check = utils.isOperator(operator)
        return expect(check).toBeTruthy()
    })

    it("does not claim number is an operator", () => {
        const number = 42

        const check = utils.isOperator(number)
        return expect(check).toBeFalsy()
    })
})