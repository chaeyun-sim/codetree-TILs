const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const odds = Array(n * 2).fill(0).map((_ ,i) => i).filter(el => el % 2).reverse()

console.log('*'.repeat(n).split('').join(' '))

for (let i = 1; i < n; i ++) {
    const stars = '*'.repeat(i).split('').join(' ')
    const blanks = ' '.repeat(odds[i])
    console.log(stars + blanks + '*')
}