const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(Number)
let max = 1
let cnt = 1

for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
        cnt++;
        max = Math.max(max, cnt);
    } else {
        cnt = 1;
    }
}

console.log(max)