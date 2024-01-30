const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = Array(n).fill([]).map(() => Array(n).fill(' '))
let num = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        arr[i][j + i] = String.fromCharCode(65 + num)
        num++
    }
}

arr.forEach(row => console.log(row.join(' ')))