const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0];
console.log(str.slice(2, 10))