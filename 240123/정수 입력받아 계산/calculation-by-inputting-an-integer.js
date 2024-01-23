const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const a = Number(input[0])
console.log(a * 2 + 3)