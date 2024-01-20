const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(" ").map(Number)).flat()
console.log(arr.sort((a, b) => a - b).join(' '))