const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ').map(Number)
const result = []

while (a <= b) {
    if (a % 2 === 0) {
        result.push(a);
    }
    a++;
}

console.log(result.join(' '))