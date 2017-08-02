const calc = require('../index')

describe("basic calculations", () => {
    it("adds two numbers correctly", () => {
        const firstInput = 100;
        const secondInput = 42;
        const operator = '+';

        const result = calc.runCalculations(firstInput, secondInput, operator);
        return expect(result).toEqual(142);
    })

    it("subtracts two numbers correctly", () => {
        const firstInput = 1;
        const secondInput = 42;
        const operator = '-';

        const result = calc.runCalculations(firstInput, secondInput, operator);
        return expect(result).toEqual(41);
    })
})


describe("operator check", () => {
    it("correctly identifies mathematical operator", () => {
        const operator = '-';

        const check = calc.operatorCheck(operator);
        return expect(check).toBeTruthy();
    })

    it("does not claim number is an operator", () => {
        const number = 42;

        const check = calc.operatorCheck(number);
        return expect(check).toBeFalsy();
    })
})