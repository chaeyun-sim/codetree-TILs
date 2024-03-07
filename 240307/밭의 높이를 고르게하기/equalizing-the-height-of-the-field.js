const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let min = Infinity;

function calculateCost(startIndex) {
    let sum = 0;
    for (let i = startIndex; i < startIndex + t; i++) {
        sum += Math.abs(h - arr[i])
    }
    return sum;
}

for (let i = 0; i <= n - t; i++) {
    const sum = calculateCost(i);
    min = Math.min(min, sum);
}

console.log(min);