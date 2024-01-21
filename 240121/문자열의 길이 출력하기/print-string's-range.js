const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(str => str.length)
console.log(arr.reduce((a, b) => a + b))