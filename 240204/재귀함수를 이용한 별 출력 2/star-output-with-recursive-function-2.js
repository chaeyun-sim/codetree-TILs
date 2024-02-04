const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let num = n;
let flag = false
const arr = []

function solution(num) {
    if (num === 1) {
        arr.push('*')
        flag = true
    }

    if (num > n) return;

    arr.push('*'.repeat(num).split("").join(' '))

    if (!flag) {
        solution(num - 1)
    } else {
        solution(num + 1)
    }
}

solution(num)
console.log(arr.join('\n'))