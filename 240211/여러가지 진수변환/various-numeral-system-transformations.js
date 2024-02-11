const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
console.log(n.toString(b))