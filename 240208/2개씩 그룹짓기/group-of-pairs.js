const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let maxSum = 0;
const n = arr.length / 2;
  
for (let i = 0; i < n; i++) {
    const groupSum = arr[i] + arr[arr.length - 1 - i];
    maxSum = Math.max(maxSum, groupSum);
}

console.log(maxSum)