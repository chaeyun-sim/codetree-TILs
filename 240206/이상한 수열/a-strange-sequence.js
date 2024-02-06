const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = [1, 2]

function solution(num) {
    if (num === 1) return 1
    if (num === 2) return 2

    return solution(parseInt(num / 3)) + solution(num - 1)
}

console.log(solution(n))