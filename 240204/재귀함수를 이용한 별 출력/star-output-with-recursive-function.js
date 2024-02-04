const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const num = Number(input[0])

function solution (n) {
    if (n > num) return num;
    console.log('*'.repeat(n))
    return solution(n + 1)
}

solution(1)