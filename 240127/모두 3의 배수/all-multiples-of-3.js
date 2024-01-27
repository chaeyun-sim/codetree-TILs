// 5개의 정수가 주어졌을 때, 주어진 모든 수가 3의 배수인지 판단하는 프로그램을 작성해보세요.

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(Number)
console.log(+arr.every(el => el % 3 === 0))