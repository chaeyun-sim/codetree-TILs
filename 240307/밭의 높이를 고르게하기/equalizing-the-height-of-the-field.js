const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, h, t] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let min = Infinity;

function calculate(arr) {
    let sum = 0
    for (let i = 0; i < t; i++) {
        sum += Math.abs(t - arr[i])
    }

    return sum
}

for (let i = 0; i < n - t + 1; i++) {
    const newArr = arr.slice(i, i + t)
    if (calculate(newArr) <= h) {
        min = Math.min(min, calculate(newArr))
    }
}

console.log(min)