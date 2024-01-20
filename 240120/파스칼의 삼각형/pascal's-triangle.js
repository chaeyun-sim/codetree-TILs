const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const result = Array(n).fill([])

for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
}

result.forEach(row => console.log(row.join(' ')))