const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

const sum = (num) => {
    if (num === n) return n;
    return num + sum(num + 2)
}

if (n % 2) {
    console.log(sum(1))
} else {
    console.log(sum(2))
}