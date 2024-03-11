const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)
let flag = false
let max = 0
let cnt = 0

for (let i = 0; i < n; i++) {
    if (flag) {
        max = Math.max(max, arr[i])
        cnt++
    }
    
    if (arr[i] === 3) flag = !flag
}

console.log(cnt <= k ? max : -1)