const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let [m1, d1, m2, d2] = input[0].split(' ').map(Number)
let total = 0

while (true) {
    if (m1 === m2 && d1 === d2) {
        break;
    }

    d1++
    total++

    if (d1 > days[m1]) {
        m1++
        d1 = 1
    }
}

if (m1 === m2 && d1 === d2) {
    console.log(1)
} else {
    console.log(total + 2)
}