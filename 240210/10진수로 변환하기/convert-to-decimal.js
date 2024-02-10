const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0]
let total = 0

for (let i = 0; i < n.length; i++){
    total += 2**i * n[n.length - 1 - i]
}

console.log(total)