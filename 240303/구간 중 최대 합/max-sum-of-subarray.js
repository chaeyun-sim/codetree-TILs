const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let max = -Infinity;

for (let i = 0; i <= n - k; i++) {
    const sliced = arr.slice(i, i + k)
    const sum = sliced.reduce((a, b) => a + b)
    max = Math.max(max, sum)
}

console.log(max)