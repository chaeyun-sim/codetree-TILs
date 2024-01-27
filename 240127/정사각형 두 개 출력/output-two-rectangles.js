// 정수 n이 주어졌을 때, 다음과 같은 형식으로 * 로 이루어진 n x n 크기의 정사각형을 두 개 출력합니다.


const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n))
}

console.log()

for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n))
}