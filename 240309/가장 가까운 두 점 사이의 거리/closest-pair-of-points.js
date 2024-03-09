const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let min = Infinity;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const [x1, y1] = arr[i]
        const [x2, y2] = arr[j]
        const distance = (x1 - x2) ** 2 + (y1 - y2) ** 2
        min = Math.min(min, (distance))
    }
}
console.log(min)