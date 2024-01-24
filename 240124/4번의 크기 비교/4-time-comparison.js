const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const a = Number(input[0])
const arr = input[1].split(' ').map(Number)

console.log(arr.map(num => +(num < a)).join('\n'))