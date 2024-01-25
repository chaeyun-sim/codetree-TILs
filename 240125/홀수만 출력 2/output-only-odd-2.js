const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [b, a] = input[0].split(' ').map(Number)
const result = []

for (let i = b; i >= a; i--) {
    if (i % 2) {
        result.push(i)
    }
}

console.log(result.join(' '))