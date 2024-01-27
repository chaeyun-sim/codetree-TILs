const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[[0]])
const num = n * 2 - 1

for (let i = 1; i <= n; i++) {
    const stars = '*'.repeat(i).split("").join(" ")
    const blanks = ' '.repeat((num - stars.length) / 2)
    console.log(blanks + stars + blanks)
}

for (let i = n - 1; i > 0; i--) {
    const stars = '*'.repeat(i).split("").join(" ")
    const blanks = ' '.repeat((num - stars.length) / 2)
    console.log(blanks + stars + blanks)
}