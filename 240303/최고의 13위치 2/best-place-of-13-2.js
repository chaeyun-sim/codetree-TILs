const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const list = []


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        list.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2])
    }
}

const sorted = list.sort((a, b) => b - a)
console.log(sorted[0] + sorted[1])