const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let max = -Infinity;

for (let i = 0; i < n; i++){  // row
    for (let j = 2; j < n; j++) { // col
        max = Math.max(max, arr[i][j - 2] + arr[i][j - 1] + arr[i][j])
    }
}

console.log(max)