const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let a = Number(input[0])

if (a % 2) {
    a += 3
}

if (!(a % 3)) {
    a /= 3
}

console.log(a)