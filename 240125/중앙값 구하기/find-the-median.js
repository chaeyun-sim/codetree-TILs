const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(Number)
arr.sort((a, b) => a - b)
const mid = Math.ceil(arr.length / 2)
console.log(arr[mid - 1])