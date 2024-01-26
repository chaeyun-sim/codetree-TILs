const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

console.log(input.map(Number).filter(num => num % 2 === 0).length)