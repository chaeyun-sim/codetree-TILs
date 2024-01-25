const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(el => el.split(' ')).filter(el => el[0] >= 19 && el[1] === 'M')
console.log(arr.length)