const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)
let cnt = 0

function checkEqual (a, b) {
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            return false
        }
    }

    return true
}

for (let i = m; i <= n; i++) {
    const block = a.slice(i - m, i)
    if (checkEqual(block, b)) {
        cnt++
    }
}

console.log(cnt)