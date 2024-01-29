const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(" ").map(Number)
let min = a > b ? b : a
let max = a > b ? a : b
let num = 2;

while (num <= 8) {
    const arr = []

    for (let i = max; i >= min; i--) {
        arr.push(`${i} * ${num} = ${i * num}`)
    }

    console.log(arr.join(' / '))
    num += 2
}