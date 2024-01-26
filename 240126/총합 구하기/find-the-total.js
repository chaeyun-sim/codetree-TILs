const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(' ').map(Number)
let sum = 0;

for (let i = a; i <= b; i++) {
    if (i % 6 === 0 && i % 8) {
        sum += i
    }
}

console.log(sum)