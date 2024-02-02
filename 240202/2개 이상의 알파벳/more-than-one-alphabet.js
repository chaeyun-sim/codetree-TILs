const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0];
const stack = []

for (const s of str.split('')) {
    if (!stack.includes(s)) {
        stack.push(s)
    }
}

console.log(stack.length >= 2 ? 'Yes' : 'No')