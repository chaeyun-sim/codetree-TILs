const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const dots = input.slice(1).map(el => el.split(' ').map(Number))
const arr = Array(n).fill([]).map(() => Array(n).fill(0))

dots.forEach(dot => {
    const [i, j] = dot;
    arr[i - 1][j - 1] = i * j
})

arr.forEach(row => console.log(row.join(' ')))