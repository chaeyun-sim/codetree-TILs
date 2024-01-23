const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(" ").map(Number)
const c = Number(input[1])

console.log([a, b, c].join(' '))