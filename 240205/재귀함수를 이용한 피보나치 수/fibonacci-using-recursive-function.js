const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let cnt = 0

function solution (num) {
    if (cnt === n) return;
    cnt++
    return solution(num - 2) + solution(num - 1)
}

solution(1)
console.log(cnt - 1)