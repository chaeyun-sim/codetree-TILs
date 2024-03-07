const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)
let cnt = 0

for (let i = m; i < n; i++) {
    const block = a.slice(i - m, i).sort((a, b) => a - b)

    if (block.join('') === b.sort((a, b) => a - b).join('')) {
        cnt++
    }
}

console.log(cnt)