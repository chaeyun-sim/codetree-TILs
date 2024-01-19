const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 0 0
// 0 1, 1 0
// 0 2, 1 1, 2 0
// 1 2, 2 1
// 2 2

// 0 0
// 0 1, 1 0
// 1 1, 2 0
// 2 1, 3 0
// 3 2

const [n, m] = input[0].split(" ").map(Number)
const arr = Array(n).fill([]).map(() => Array(m).fill(0))
let num = 1;


for (let k = 0; k < n + m - 1; k++) {
    for (let i = 0; i < n; i++) {
        let j = k - i;
        if (j >= 0 && j < m) {
            arr[i][j] = num++
        }
    }
}

arr.forEach(row => console.log(row.join(' ')))