const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split('')
const obj = {}

arr.forEach((item) => {
  if (obj[item]) {
    obj[item]++
  } else {
    obj[item] = 1
  }
})

const result = Object.values(obj).reduce((a, b) => a* b)
console.log(result)