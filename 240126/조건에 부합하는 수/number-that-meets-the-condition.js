const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const result = []

for (let i = 1; i <= n; i++) {
    if (!(i % 2 === 0 && i % 4 !== 0) && Math.floor(i / 8) % 2 !== 0 && i % 7 >= 4) {
        result.push(i)
    }
}

console.log(result.join(' '))