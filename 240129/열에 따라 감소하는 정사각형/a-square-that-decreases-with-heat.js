const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let i = 0;

while (i < n) {
    const row = Array(n).fill(0).map((_, i) => i + 1).reverse().join(' ')
    console.log(row)
    i++
}