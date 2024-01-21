const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(el => el.length)
const min = Math.min(...arr)
const max = Math.max(...arr)

console.log(max - min)