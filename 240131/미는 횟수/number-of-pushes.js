const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input;
let i = 0;

while (a !== b && i < a.length) {
    a = a.slice(1) + a[0]
    i++
}

console.log(a === b ? i : -1)