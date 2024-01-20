const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const octal = input[0]
  let binary = '';

  for (let i = 0; i < octal.length; i++) {
    const digit = parseInt(octal[i], 8);
    const binaryDigit = digit.toString(2);
    binary += i > 0 ? binaryDigit.padStart(3, '0') : binaryDigit;
  }

  console.log(binary)