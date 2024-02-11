const fs= require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0]
let num = 0

for (let i = 0; i < n.length; i++) {
    num += 2 ** i * n[n.length - 1 - i]
}

num *= 17

var binary = '';

while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
}

console.log(binary)