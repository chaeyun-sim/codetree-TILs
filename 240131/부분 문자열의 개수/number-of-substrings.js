const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input;
let cnt = 0

for (let i = 2; i <= a.length; i++) {
    const str = a.slice(i - b.length, i)
    if (str === b) cnt++
}

console.log(cnt)