const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)
const arr = input.slice(2).map(el => el.split(' ').map(Number))

for (const a of arr) {
    const [start, end] = a;
    let sum = 0

    for (let i = start - 1; i < end; i++) {
        sum += A[i]
    }

    console.log(sum)
}