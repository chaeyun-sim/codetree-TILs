const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ').map(Number)

console.log(`${a > b ? a += 25 : a *= 2} ${a > b ? b *= 2 : b += 25}`)