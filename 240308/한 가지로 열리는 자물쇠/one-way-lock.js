const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const num = input[1].split(' ').map(Number)
const arr = []

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (Math.abs(num[0] - i) <= 2 || Math.abs(num[1] - j) <= 2 || Math.abs(num[2] - k) <= 2) {
                arr.push(`${i}${j}${k}`)
            }
        }
    }
}

console.log(arr.length)