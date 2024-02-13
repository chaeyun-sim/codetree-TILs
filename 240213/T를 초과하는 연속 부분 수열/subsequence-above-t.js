const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, t] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let max = 0
let cnt = 0

for (let i = 0; i < n; i++) {
    if (arr[i] > t) {
        cnt++;
        max = Math.max(max, cnt);
    } else {
        cnt = 0;
    }
}

console.log(max);