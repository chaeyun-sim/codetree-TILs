const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(Number)
let sum = 0;

arr.forEach(num => sum += num)

sum = String(sum);
console.log(sum.slice(1).concat(sum[0]))