const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let a = Number(input[0])

console.log(+(a % 3 === 0 || a % 5 === 0))