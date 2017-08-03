const calcs = require('./calculations/calculations')
const input = process.stdin
const output = process.stdout

let numbers = []

const begin = (() => {
    output.write('Welcome! Start calculating things! \n')
})()

input.on('data', (data) => {
    let parsedData = calcs.isOperator(data) ? data : calcs.checkNumForFloats(data)

    numbers.push(`${parsedData} `)
    output.write(`${numbers.toString().trim()} \n`)
})