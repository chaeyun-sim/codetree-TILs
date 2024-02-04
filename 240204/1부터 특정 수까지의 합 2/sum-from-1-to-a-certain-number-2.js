const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

function solution(num){
    if (num === n) return n
    return num + solution(num + 1)
}

console.log(solution(1))