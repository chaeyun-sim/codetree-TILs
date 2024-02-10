const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [d, h, m] = Array(3).fill(11)
let [a, b, c] = input[0].split(' ').map(Number)
let startMinutes = d * 24 * 60 + h * 60 + m;
let endMinutes = a * 24 * 60 + b * 60 + c;

console.log(endMinutes - startMinutes > 0 ? endMinutes - startMinutes : -1)