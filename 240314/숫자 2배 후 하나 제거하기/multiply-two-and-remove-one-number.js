const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
let min = Infinity;

function getSum(arr) {
    let sum = 0;

    for (let i = 1; i < n - 1; i++) {
        sum += Math.abs(arr[i - 1] - arr[i])
    }
    
    return sum
}

for (let i = 0; i < n; i++) {
    const newArr = [...arr.slice(0, i), arr[i] * 2, ...arr.slice(i + 1)]
    for (let j = 0; j < n; j++) {
        const filtered = newArr.filter((_, idx) => idx !== j)
        min = Math.min(getSum(filtered), min)
    }
}

console.log(min)