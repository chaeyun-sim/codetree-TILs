const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b, c, d] = input[0].split(' ').map(Number)
let min = 0

while (true) {
    if (a === c && b === d) {
        break;
    }

    min++
    b++

    if (b === 60) {
        a++
        b = 0
    }
}

console.log(min)