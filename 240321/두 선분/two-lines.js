const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [x1, x2, x3, x4] = input[0].split(' ').map(Number)
let flag = false

if (x2 > x3 || (x3 < x1 && x2 > x3)) {
    flag = true
}

console.log(flag ? 'intersecting' : 'nonintersecting')