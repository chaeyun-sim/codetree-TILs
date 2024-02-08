const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k, T] = input[0].split(' ')
let arr = input.slice(1)
const withT = arr.filter(el => el.startsWith(T)).sort()
const withoutT = arr.filter(el => !el.startsWith(T)).sort()
arr = withT.concat(withoutT)

console.log(arr[k - 1])