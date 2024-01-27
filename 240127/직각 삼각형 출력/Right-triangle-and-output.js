// 정수 n이 주어졌을 때, 아래 예를 참고하여 * 로 이루어진 직각삼각형을 출력하는 프로그램을 작성해보세요.

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

for (let i = 1; i < 2 * n; i += 2) {
    console.log('*'.repeat(i))
}