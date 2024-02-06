const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])

function solution (num, first, second) {
    if (num === n - 2) return second;
    num++
    return solution(num, second, (first * second) % 100)
}

console.log(solution(0, 2, 4))