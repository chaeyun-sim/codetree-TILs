const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b, c] = input[0].split(' ').map(Number)
const sum = String(a * b * c)
let result = 0

sum.split('').forEach(num => result += Number(num))

console.log(result)