const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ').map(Number)
let cnt = 0;

while (cnt < b) {
    a += b
    console.log(a)
    cnt++
}