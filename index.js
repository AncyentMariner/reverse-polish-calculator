const calcs = require('./calculations/calculations')
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

const isKillCode = (char) => {
    const killArray = ['q', 'q!'];
    const input = char.trim()

    return killArray.includes(input)
}

stdin.on('data', (data) => {
    if (isKillCode(data)) return quit()

    if (!utils.checkforValidInput(data)) {
        stdout.write('This is not a valid input \n')
        return
    }

    // let parsedData = utils.isOperator(data) ? data : calcs.checkNumForFloats(data)
    // numbers.push(parsedData)
    numbers.push(data)

    stdout.write(`current number set: ${numbers.join(' ')}`)
    stdout.write('\n >')

})