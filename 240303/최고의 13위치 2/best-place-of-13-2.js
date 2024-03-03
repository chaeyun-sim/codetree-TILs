const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const obj = {}


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        if (!obj[i]) {
            obj[i] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
        } else {
            obj[i] = Math.max(obj[i], arr[i][j] + arr[i][j + 1] + arr[i][j + 2])
        }
    }
}

const sorted = Object.values(obj).sort((a, b) => b - a)
console.log(sorted[0] + sorted[1])