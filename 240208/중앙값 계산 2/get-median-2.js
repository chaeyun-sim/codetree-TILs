const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)
const stack = []

for (let i = 0; i < arr.length; i += 2) {
    const sliced = arr.slice(0, i + 1).sort((a, b) => a - b)
    const mid = Math.floor(sliced.length / 2)
    stack.push(sliced[mid])
}

console.log(stack.join(' '))