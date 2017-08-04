const utils = require('../utils')

describe("utils test", () => {
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

    describe("check for valid input", () => {
        it("correctly identifies number as valid", () => {
            const number = 2

            const check = utils.checkforValidInput(number)
            return expect(check).toBeTruthy()
        })

        it("correctly identifies number as valid", () => {
            const letter = 'a'

            const check = utils.checkforValidInput(letter)
            return expect(check).toBeFalsy()
        })
    })

    describe("registers kill code", () => {
        it("correctly identifies q as kill code", () => {
            const letter = 'q'

            const check = utils.isKillCode(letter)
            return expect(check).toBeTruthy()
        })

        it("correctly identifies w as something other than kill code", () => {
            const letter = 'w'

            const check = utils.isKillCode(letter)
            return expect(check).toBeFalsy()
        })
    })

    describe("correctly checks array length is greater than two", () => {
        it("correctly identifies array as longer than 2 indexes", () => {
            const testArray = [1, 2, 3, 4]

            const check = utils.isLongEnough(testArray)
            return expect(check).toBeTruthy()
        })

        it("correctly identifies array as shorter than 2 indexes", () => {
            const testArray = [42]

            const check = utils.isLongEnough(testArray)
            return expect(check).toBeFalsy()
        })
    })
})