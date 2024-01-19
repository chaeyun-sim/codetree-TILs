const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = Array(n).fill([]).map(() => Array(n).fill(0))
let num = 1;

for (let i = n - 1; i >= 0; i--) {
    if (i % 2) {
        for (let j = n - 1; j >= 0; j--) {
            arr[j][i] = num;
            num++;
        }
    } else {
        for (let j = 0; j < n; j++) {
            arr[j][i] = num;
            num++;
        }
    }
}

arr.forEach(row => console.log(row.join(' ')))