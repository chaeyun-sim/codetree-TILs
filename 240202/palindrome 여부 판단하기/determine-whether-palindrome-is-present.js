const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0]
let reverse = ''

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
}

if (str === reverse) {
    console.log('Yes')
} else {
    console.log('No')
}