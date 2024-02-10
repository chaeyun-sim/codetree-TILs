const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b, c, d] = input[0].split(' ').map(Number)
let min = 0

while (a !== c && b !== d) {
    if (a < c) {
        min += 60
        a++
    }

    if (a === c && b > d) {
        min -= b - d
        b = d
    }
}

console.log(min)