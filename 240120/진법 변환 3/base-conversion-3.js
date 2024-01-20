const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = parseInt(input[0], 8)
console.log(n.toString(2))