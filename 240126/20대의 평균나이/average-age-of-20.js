const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = []
input.map(Number).forEach(num => {
    if (num >= 20 && num < 30) arr.push(num)
})

const sum = arr.reduce((a, b) => a + b)
console.log((sum / arr.length).toFixed(2))