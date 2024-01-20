const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(el => Math.round(Number(el)))
const sum = arr.reduce((a, b) => a + b)
const average = Math.round(sum / arr.length)

console.log(sum)
console.log(average)