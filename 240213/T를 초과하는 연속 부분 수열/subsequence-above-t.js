const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, t] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let max = 0
let cnt = 1;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i + 1] > 3) {
        cnt++
        max = Math.max(max, cnt)
    } else {
        cnt = 1
    }
}

console.log(max)