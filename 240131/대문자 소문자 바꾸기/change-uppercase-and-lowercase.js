const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0]

const arr = str.split('').map(el => el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase())
console.log(arr.join(''))