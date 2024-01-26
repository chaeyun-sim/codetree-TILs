const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(Number)

console.log(arr.filter(num => num % 2 && num % 3 === 0).join('\n'))