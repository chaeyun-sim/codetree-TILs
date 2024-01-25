const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(" ").map(Number)
const result = []

for (let i = a; i <= b; i++) {
    if (i % 2) {
        result.push(i)
    }
}

console.log(result.join(' '))