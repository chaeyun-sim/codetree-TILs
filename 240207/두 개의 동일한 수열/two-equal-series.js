const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr1 = input[1].split(' ').map(Number).sort((a, b) => a - b);
const arr2 = input[2].split(' ').map(Number).sort((a, b) => a - b);

let isEqual = true;
for (let i = 0; i < n; i++) {
  if (arr1[i] !== arr2[i]) {
    isEqual = false;
    break;
  }
}

console.log(isEqual ? 'Yes' : 'No');