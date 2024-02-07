const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const arr = input.slice(1)
arr.sort()

arr.forEach(str => console.log(str))