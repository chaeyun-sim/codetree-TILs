const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').filter((str, i) => !(i % 2))
arr.forEach(str => console.log(str))