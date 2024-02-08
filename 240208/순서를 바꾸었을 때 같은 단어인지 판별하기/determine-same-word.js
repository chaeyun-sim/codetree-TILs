const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const a = input[0].split('').sort().join('')
const b = input[1].split('').sort().join('')

console.log(a === b ? 'Yes' : 'No')