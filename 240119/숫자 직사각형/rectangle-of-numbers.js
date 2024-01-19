const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
let arr = Array(n).fill(0).map((_, i) => Array(m).fill(0));

let num = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr[i][j] = num;
        num++
    }
}

arr.forEach(row => console.log(row.join(' ')))