const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let num = n
let flag = false
const arr = []

function solution (num) {
    if (num === 1) {
        flag = true
        arr.push(1)
    }

    if (num > n) return;

    arr.push(num)

    if (!flag) {
        return solution(num - 1)
    } else {
        return solution(num + 1)
    }
}

solution(num)
console.log(arr.join(' '))