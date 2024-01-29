const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let cnt = 0;
let min = 1;
let max = n;

while (cnt < n * 2) {
    if (cnt % 2 === 0) {
        console.log('*'.repeat(max).split("").join(' '))
        max--
    } else {
        console.log('*'.repeat(min).split('').join(' '))
        min++
    }
    cnt++
}