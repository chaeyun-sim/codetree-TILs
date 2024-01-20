const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = Array(n).fill([]).map(() => Array(n).fill(0))

for (let i = 0; i < n; i++) {
    arr[0][i] = 1
    arr[i][0] = 1
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        arr[i][j] = arr[i][j - 1] + arr[i - 1][j - 1] + arr[i - 1][j]
    }
}

arr.forEach(row => console.log(row.join(' ')))