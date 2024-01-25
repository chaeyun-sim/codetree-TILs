const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [b, a] = input[0].split(" ").map(Number)
const arr = []

while (b >= a) {
    if (b % 2 === 0) {
        arr.push(b)
    }
    b--
}

console.log(arr.join(' '))