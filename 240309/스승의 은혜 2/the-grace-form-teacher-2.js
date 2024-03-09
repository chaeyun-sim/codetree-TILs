const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)
let max = 0

function getSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        const total = [...arr.slice(0, i), arr[i] / 2, ...arr.slice(i + 1)]
        const sum = total.reduce((a, b) => a + b)
        if (sum <= b) {
            max = Math.max(max, total.length)
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const newArr = arr.slice(i, j)
        getSum(newArr)
    }
}

console.log(max)