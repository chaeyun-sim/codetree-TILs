const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)

console.log(arr.join(' '))
console.log(arr.reverse().join(' '))