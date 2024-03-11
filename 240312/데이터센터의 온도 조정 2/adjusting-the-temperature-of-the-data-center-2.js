const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, c, g, h] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const end = Math.max(...arr.flat())
const start = Math.min(...arr.flat())
let max = 0

for (let temp = start; temp <= end; temp++) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        const [ta, tb] = arr[i]

        if (temp < ta) {
            total += c
        } else if (temp <= tb) {
            total += g
        } else if (temp > tb) {
            total += h
        }
    }

    max = Math.max(max, total)
}

console.log(max)