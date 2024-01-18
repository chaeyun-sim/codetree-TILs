const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(el => el.split(" ").map(Number))
const filtered = arr.map(el => el.sort((a, b) => a - b)).filter(el => !el.includes(1))
const result = new Set(...filtered)
console.log(result.size)