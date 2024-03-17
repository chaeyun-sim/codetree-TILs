const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
arr.sort((a, b) => a[0] - b[0])
let cnt = 0

for (let i = 1; i < n; i++) {
    if (!(arr[i - 1][0] < arr[i][0] && arr[i][1] < arr[i - 1][1])) {
        cnt++
    }
}

console.log(cnt)