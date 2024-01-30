const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)
let min = Infinity;

for (let i = 1; i < arr.length; i++) {
    const num = Math.abs(arr[i - 1] - arr[i])
    if (num < min) {
        min = num
    }
    
}

console.log(min)