const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(row => row.split(' ').map(Number))
let sum = 0


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
        sum += arr[i][j]
    }
}

console.log(sum)