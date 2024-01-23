const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b, c] = input[0].split(" ").map(Number)
const sum = a + b + c
const avg = (a + b + c) / 3
console.log(sum)
console.log(avg)
console.log(sum - avg)