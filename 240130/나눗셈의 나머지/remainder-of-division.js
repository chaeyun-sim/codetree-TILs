const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ').map(Number)
const arr = Array(10).fill(0)

while (a > 1) {
    arr[a % b]++
    a = Math.floor(a / b)
}

const filtered = arr.filter(el => el > 0).map(num => num ** 2)
console.log(filtered.reduce((a, b) => a + b))