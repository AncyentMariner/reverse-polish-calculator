const calc = require('../calculations')

describe("calculator tests", () => {
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

        it("divides two numbers correctly", () => {
            const inputArray = [100, 20]
            const operator = '/'
            const result = calc.runCalculations(inputArray, operator)

            return expect(result).toEqual([5])
        })

        it("multiplies two numbers correctly", () => {
            const inputArray = [42, 2]
            const operator = '*'

            const result = calc.runCalculations(inputArray, operator)
            return expect(result).toEqual([84])
        })
    })

    describe("complex calculations", () => {
        it("adds two numbers correctly from a long array", () => {
            const inputArray = [100, 42, 82, 4]
            const operator = '+'
            const result = calc.runCalculations(inputArray, operator)

            return expect(result).toEqual([100, 42, 86])
        })

        it("subtracts two numbers correctly from a long array", () => {
            const inputArray = [100, 42, 82, 4]
            const operator = '-'
            const result = calc.runCalculations(inputArray, operator)

            return expect(result).toEqual([100, 42, 78])
        })

        it("adds two floats correctly", () => {
            const inputArray = [2.5, 42.6]
            const operator = '+'
            const result = calc.runCalculations(inputArray, operator)

            return expect(result).toEqual([45.1])
        })

        it("multiplies two floats correctly", () => {
            const inputArray = [2.5, 42.6]
            const operator = '*'
            const result = calc.runCalculations(inputArray, operator)

            return expect(result).toEqual([106.5])
        })

        it("divides two floats correctly", () => {
            const inputArray = [50.5, 5.1]
            const operator = '/'
            const result = calc.runCalculations(inputArray, operator)

            return expect(result).toEqual([9.901960784313726])
        })
    })
})