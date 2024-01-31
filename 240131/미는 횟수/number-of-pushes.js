const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input;
let i = 0;

while (a !== b && i < a.length) {
    a = a[a.length - 1] + a.slice(0, a.length - 1)
    i++
}

console.log(a === b ? i : -1)