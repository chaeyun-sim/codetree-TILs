const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0]

function solution(i) {
    if (i === n.length - 1) return Number(n[n.length - 1]);
    return (Number(n[i]) ** 2) + solution(i + 1)
}

console.log(solution(0))