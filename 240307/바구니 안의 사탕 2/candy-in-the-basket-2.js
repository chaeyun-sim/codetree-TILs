const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const d = Array(101).fill(0)

for (let i = 1; i <= n; i++) {
    const [cnt, idx] = input[i].split(' ').map(Number)
    d[idx] += cnt
}

let max = 0

for (let i = 0; i < 100; i++) {
    let sum = 0
    for (let j = i - k; j < i + k + 1; j++) {
        if (0 <= j && j <= 100) {
            sum += d[j]
        }
    }
    max = Math.max(max, sum)
}

console.log(max)