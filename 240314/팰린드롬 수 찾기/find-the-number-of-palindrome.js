const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [x, y] = input[0].split(' ').map(Number)
let cnt = 0

function checkEqaul(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[b.length - 1 - i]) {
            return false
        }
    }

    return true
}

for (let n = x; n <= y; n++) {
    const str = String(n);
    const mid = Math.floor(str.length / 2)

    const left = str.slice(0, mid)
    const right = str.slice(str.length % 2 ? mid + 1 : mid)
    if (checkEqaul(left, right)) cnt++
}

console.log(cnt)