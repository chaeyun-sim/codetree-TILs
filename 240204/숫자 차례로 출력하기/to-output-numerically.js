function printNumbersForward(n) {
  if (n === 1) {
    return "1";
  }
  return printNumbersForward(n - 1) + " " + n;
}

function printNumbersBackward(n) {
  if (n === 1) {
    return "1";
  }
  return n + " " + printNumbersBackward(n - 1);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const forwardNumbers = printNumbersForward(n);
const backwardNumbers = printNumbersBackward(n);

console.log(forwardNumbers);
console.log(backwardNumbers);