const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [x, y] = input[0].split(' ').map(Number)
let max = 0

for (let i = x; i <= y; i++) {
    const str = String(i)
    const arr = str.split('').reduce((a, b) => Number(a) + Number(b))
    max = Math.max(max, arr)
}

console.log(max)