const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(' ').map(Number)
let result = ''

for (let i = 0; i < b; i++) {
    result += a
}

console.log(a <= 0 ? 0 : result)