// 7
// 4 6 3 8 2 1 10\

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)
const filtered = arr.filter(el => el % 2 === 0).reverse()
console.log(filtered.join(" "))