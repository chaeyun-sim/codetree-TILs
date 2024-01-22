const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0];
const target = input[1]
let cnt = 0;

str.split("").forEach((item, idx) => {
    if (item === target) {
        cnt++
    }
})

console.log(cnt)