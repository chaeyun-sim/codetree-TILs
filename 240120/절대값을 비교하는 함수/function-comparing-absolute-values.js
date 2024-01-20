const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' ').map(Number))
const result = []

for (const item of arr) {
    result.push(Math.max(...item.map(num => Math.abs(num))))
}

result.forEach(row => console.log(row))