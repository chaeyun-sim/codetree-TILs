const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)
arr.sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < n; i++) {
    let budget = b;
    let count = 0;

    budget -= arr[i] / 2;
    count++;

    for (let j = 0; j < n; j++) {
        if (i !== j && budget >= arr[j]) {
            budget -= arr[j];
            count++;
        }
    }

    max = Math.max(max, count);
}

console.log(max);