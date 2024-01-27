const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

for (let i = n; i > 0; i--) {
    const star = '*'.repeat(i)
    const blank = ' '.repeat((n - i) * 2)
    console.log(star + blank + star)
}