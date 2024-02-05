const fs= require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let cnt = 0;

function solution(num) {
    if (num === 1) return cnt;

    cnt++

    if (num % 2) {
        return solution(num * 3 + 1)
    } else {
        return solution(num / 2)
    }
}

console.log(solution(n))