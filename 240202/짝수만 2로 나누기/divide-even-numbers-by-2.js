const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)
const result = arr.map(num => num % 2 === 0 ? num / 2 : num)
console.log(result.join(' '))