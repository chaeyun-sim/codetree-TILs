const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
console.log(n * n)
if (n < 5) {
    console.log('tiny')
}