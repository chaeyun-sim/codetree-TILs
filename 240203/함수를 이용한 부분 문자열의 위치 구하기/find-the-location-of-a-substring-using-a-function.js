const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b] = input

if (a.includes(b)) {
    console.log(a.indexOf(b))
} else {
    console.log(-1)
}