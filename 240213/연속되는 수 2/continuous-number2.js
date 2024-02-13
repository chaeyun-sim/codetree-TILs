const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(Number)
let max = 0
let cnt = 0

for (let i = 1; i < arr.length; i++) {
    cnt++
    
    if (arr[i] !== arr[i - 1]) {
        if (cnt > max) {
            max = cnt
        }
        cnt = 0
    }
}

console.log(arr.length === 1 ? 1 : max)