const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(Number)

let total = 0;
for (let i = 0; i < n; i++) {
    total += arr[i] * i;
}

let min = total;
let current = total;
    
for (let i = 1; i < n; i++) {
    current += arr[i - 1] * (n - 1);
    current -= (arr.reduce((acc, cur) => acc + cur, 0) - arr[i - 1]);
        
    if (current < min) {
        min = current;
    }
}

console.log(min)