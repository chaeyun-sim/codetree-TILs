const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(' ').map(Number)
let result = 1;

for (let i = 1; i <= b; i++) {
    if (i % a === 0) {
        result *= i
    }
}

console.log(result)