const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

console.log((Number(input[0]) + 1.5).toFixed(2))