const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number);

for (let i = Math.max(n, m); i > 0; i++) {
    if (i % n === 0 && i % m === 0) {
        console.log(i)
        return;
    }
}