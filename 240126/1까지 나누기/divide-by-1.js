const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let i = 1;

while (true) {
    if (n <= 1) break;
    n = Math.floor(n / i)
    i++
}

console.log(i - 1)