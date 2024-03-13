const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
let cnt = 0

for (let i = 1; i <= n; i++) {
    let num = i;

    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (num - arr[j] === arr[k] - num) {
                cnt++
            }
        }
    }
}

console.log(cnt)