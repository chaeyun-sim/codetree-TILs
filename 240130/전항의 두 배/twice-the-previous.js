const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(Number)

for (let i = 2; i < 10; i++) {
    arr.push(arr[i - 1] + (arr[i - 2] * 2))
}

console.log(arr.join(' '))