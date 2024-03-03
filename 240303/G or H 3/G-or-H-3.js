const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' '))
arr.sort((a, b) => Number(a[0]) - Number(b[0]))

let max = 0;

for (let i = 0; i < n; i++) {
    let score = 0;
    for (let j = i; j < n && arr[j][0] - arr[i][0] <= k; j++) {
        score += arr[j][1] === 'G' ? 1 : 2;
    }
    max = Math.max(max, score);
}

console.log(max);