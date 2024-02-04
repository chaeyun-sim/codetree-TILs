const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let cnt = 0;

function solution(num) {
    if (num === 1) return 0;

    cnt++

    if (num % 2) {
        return solution(Math.floor(num / 3))
    } else {
        return solution(num / 2)
    }
}

solution(n)
console.log(cnt)