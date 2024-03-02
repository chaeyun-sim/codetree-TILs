const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
let max = -Infinity

for (let i = 2; i < n; i++) {
    for (let j = i; j < n; j++) {
        max = Math.max(arr[i-2]+arr[j], max)
    }
}

console.log(max)