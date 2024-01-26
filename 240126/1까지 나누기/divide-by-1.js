const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let i = 1;

while (n > 1) {
    n /= i
    i++
}

console.log(i - 1)