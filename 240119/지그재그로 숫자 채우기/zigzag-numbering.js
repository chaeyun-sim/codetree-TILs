const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const [n, m] = input[0].split(' ').map(Number)
const arr = Array(n).fill([]).map(() => Array(m).fill(0))
let num = 0;

for (let i = 0; i < m; i++) {
    if (i % 2) {
        for (let j = n - 1; j >= 0; j--) {
            arr[j][i] = num++;
        }
    } else {
        for (let j = 0; j < n; j++) {
            arr[j][i] = num++;
        }
    }
}

arr.forEach(row => console.log(row.join(' ')))