const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' ').map(Number))

for (const item of arr) {
    const [a, b] = item;
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }

    console.log(sum)
}