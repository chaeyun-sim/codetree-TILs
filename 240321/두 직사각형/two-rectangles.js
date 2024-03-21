const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [x1, y1, x2, y2] = input[0].split(' ').map(Number)
const [a1, b1, a2, b2] = input[0].split(' ').map(Number)
let flag = false

if (x2 <= a1 || a2 <= x1 || b2 <= y1 || y2 <= b1) {
    flag = true
}

console.log(flag ? 'nonoverlapping' : 'overlapping')