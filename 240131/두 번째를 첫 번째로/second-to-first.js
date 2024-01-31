const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0]

if (str[1] !== str[0]) {
    console.log(str.replaceAll(str[1], str[0]))
} else {
    console.log(str)
}