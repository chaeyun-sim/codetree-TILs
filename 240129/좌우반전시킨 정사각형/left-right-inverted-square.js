const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const row = Array(n).fill(0).map((_, i) => n - i)
console.log(row.join(' '))

let num = 2;

while (num <= n) {
    let arr = []

    for (const a of row) {
        arr.push(a * num)
    }

    console.log(arr.join(' '))
    num++
}