const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number)
const result = arr.map(el => Math.abs(el))

console.log(result.join(' '))