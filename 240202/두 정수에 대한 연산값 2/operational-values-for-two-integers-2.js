const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ').map(Number)

function solution(a, b) {
    if (a < b) {
        a += 10
        b *= 2
    } else {
        a *= 2
        b += 10
    }

    console.log(`${a} ${b}`)
}

solution(a, b)