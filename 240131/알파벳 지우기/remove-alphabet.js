const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let num1 = ''
let num2 = ''

for (let i = 0; i < input[0].length; i++) {
    if (!isNaN(input[0][i])) {
        num1 += input[0][i]
    }
}

for (let i = 0; i < input[1].length; i++) {
    if (!isNaN(input[1][i])) {
        num2 += input[1][i]
    }
}

console.log(Number(num1) + Number(num2))