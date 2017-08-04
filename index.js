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
        Input one number or mathematical operator at a time to use the calculator \n >'
    )
})()

const quit = () => {
    stdout.write('Goodbye! \n')
    process.exit(0);
}

stdin.on('data', (data) => {
    if (utils.isKillCode(data)) return quit()

    if (!utils.checkforValidInput(data.trim())) {
        stdout.write('This is not a valid input \n >')
        return
    }

    if (utils.isOperator(data.trim())) {
        if (!utils.isLongEnough(numbers)) {
            stdout.write('You need at least two numbers to calculate \n >')
            return
        }

        if (utils.isDividingByZero(numbers, data.trim())) {
            stdout.write('You can\'t divide by zero, silly \n >')
            return
        }

        calcs.runCalculations(numbers, data.trim())
    } else {
        numbers.push(data.trim())
    }

    stdout.write(`current number set: ${numbers.join(' ')}`)
    stdout.write('\n >')
})

process.on('SIGINT', () => {
    quit()
})

process.on('uncaughtException', (err) => {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
})