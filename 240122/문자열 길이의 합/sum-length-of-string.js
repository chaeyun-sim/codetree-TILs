const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1)
let total = 0;
let sum = 0;

arr.forEach(str => {
    sum += str.split("").filter(el => el === 'a').length
    total += str.length
})

console.log(total, sum)