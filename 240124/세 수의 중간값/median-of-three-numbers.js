const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// 세 수 a, b, c의 값이 주어졌을 때, b가 a보다 크고 c보다 작다면 1을, 그렇지 않다면 0을 출력하는 프로그램을 작성해보세요.

const [a, b, c] = input[0].split(" ").map(Number)

console.log(+(b > a && a < c))