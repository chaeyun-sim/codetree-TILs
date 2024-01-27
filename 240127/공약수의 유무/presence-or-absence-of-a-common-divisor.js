// 정수 a, b가 주어지면, a이상 b이하의 수 중에서 1,920과 2,880의 공약수가 존재하는지 판단해보는 프로그램을 작성해보세요.

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input[0].split(' ').map(Number)
const arr = []

for (let i = 1; i < 2880 / 2; i++) {
    if (2880 % i === 0 && 1920 % i === 0) {
        arr.push(i)
    }
}

let flag = false;
for (let n = a; n <= b; n++) {
    if (arr.includes(n)) {
        flag = true
    }
}

console.log(+flag)