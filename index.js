const calcs = require('./calculations')
const utils = require('./utils')
const stdin = process.stdin
const stdout = process.stdout
stdin.setEncoding('utf8')
stdin.resume()

let numbers = []

const begin = (() => {
    stdout.write(
        'Welcome! Start calculating things! \n \
        Input one number or mathematical operator at a time \n \
        to use the calculator \n >')
})()

const quit = () => {
    stdout.write('Goodbye! \n')
    process.exit(0);
}

stdin.on('data', (data) => {
    if (utils.isKillCode(data)) return quit()

    if (!utils.checkforValidInput(data)) {
        stdout.write('This is not a valid input \n >')
        return
    }

    if (utils.isOperator(data)) {
        if (!utils.isLongEnough(numbers)) {
            stdout.write('You need at least two numbers to calculate \n >')
            return
        }

        calcs.runCalculations(numbers, data)
    } else {
        numbers.push(data.trim())
    }

    stdout.write(`current number set: ${numbers.join(' ')}`)
    stdout.write('\n >')
})