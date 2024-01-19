const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr1 = input.slice(1, n + 1).map(row => row.split(' ').map(Number))
const arr2 = input.slice(n + 1).map(row => row.split(' ').map(Number))
const result = []

for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < m; j++) {
        row.push(+(arr1[i][j] !== arr2[i][j]))
    }
    result.push(row)
}

result.forEach(row => console.log(row.join(' ')))