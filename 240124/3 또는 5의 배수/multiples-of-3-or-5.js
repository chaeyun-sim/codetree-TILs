const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const a = Number(input[0])
let result1 = 'YES';
let result2 = 'YES'

if (a % 3) {
    result1 = 'NO'
}

if (a % 5) {
    result2 = 'NO'
}

console.log(result1)
console.log(result2)