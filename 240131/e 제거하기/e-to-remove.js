const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0]
let idx = str.indexOf('e')

console.log(str.split('').filter((_, i) => i !== idx).join(''))