const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

if (input[0] === 'a') console.log('z')
else {
    const code = input[0].charCodeAt(0)
    console.log(String.fromCharCode(code - 1))
}