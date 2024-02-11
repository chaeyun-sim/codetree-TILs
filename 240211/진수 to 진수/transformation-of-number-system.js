const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(' ').map(Number)
const n = input[1]
let decimal = 0

for (let i = 0; i < String(n).length; i++) {
    decimal += a ** i * n[n.length - 1 - i]
}

let result = '';

while (decimal > 0) {
    result += (decimal % b)
    decimal = Math.floor(decimal / b);
}

console.log(result)