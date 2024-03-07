const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
let cnt = 0

for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
        const block = arr.slice(i, j)
        const avg = block.reduce((a, b) => a + b) / block.length

        if (block.includes(avg)) {
            cnt++
        }
    }
}

console.log(cnt)