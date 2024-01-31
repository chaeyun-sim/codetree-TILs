const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1, n + 1)
const char = input[n + 1]
let cnt = 0
let lens = 0

for (const item of arr) {
    if (item[0] === char) {
        cnt++
        lens += item.length
    }
}

console.log(`${cnt} ${(lens / cnt).toFixed(2)}`)