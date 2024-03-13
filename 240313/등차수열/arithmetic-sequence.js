const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
let max = 0;

for (let i = 1; i <= 100; i++) {
    let cnt = 0

    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (arr[j] + arr[k] === 2 * i) {
                cnt++
            }
        }
    }

    max = Math.max(max, cnt)
}

console.log(max)