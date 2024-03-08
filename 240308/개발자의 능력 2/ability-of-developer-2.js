const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(Number).sort((a, b) => a - b)
const answer = []

for (let i = 0; i < arr.length / 2; i++) {
    answer.push([arr[i], arr[arr.length - 1 - i]])
}

const sum = answer.map(el => el[0] + el[1]).sort((a, b) => a - b)

console.log(sum[sum.length - 1] - sum[0])