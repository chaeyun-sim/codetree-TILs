const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split('').filter((_, i) => i % 2).reverse()
console.log(arr.join(''))