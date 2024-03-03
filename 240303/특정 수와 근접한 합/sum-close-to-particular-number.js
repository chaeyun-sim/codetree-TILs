const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, s] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const list = []

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const filtered = arr.filter((_, idx) => idx !== i && idx !== j)
        const sum = filtered.reduce((a, b) => a + b)
        list.push(sum)
    }
}

const newList = list.map(el => [Math.abs(s - el), el]).sort((a, b) => a[0] - b[0] || a[1] - b[1])
console.log(newList[0][0])