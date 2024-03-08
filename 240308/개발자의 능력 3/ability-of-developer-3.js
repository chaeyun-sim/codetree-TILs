const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(Number)
let min = Infinity;

function sum(arr) {
    let sum = 0;
    arr.forEach(num => sum += num)
    return sum;
}

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            const current = arr.filter((_, idx) => idx === i || idx === j || idx === k)
            const left = arr.filter((_, idx) => idx !== i && idx !== j && idx !== k)
            const diff = Math.abs(sum(left) - sum(current))
            min = Math.min(min, diff)
        }
    }
}

console.log(min)