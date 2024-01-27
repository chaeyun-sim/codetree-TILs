const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let cnt = 0;

while (n < 1000) {
    if (n % 2) {
        n *= 2
        n += 2
    } else {
        n *= 3
        n++
    }
    cnt++
}

console.log(cnt)