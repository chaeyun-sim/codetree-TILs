const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0]

function sumOfSquaresDigits(inputStr) {
    if (inputStr.length === 0) {
        return 0;
    }
    
    const lastDigit = parseInt(inputStr.slice(-1));
    const lastDigitSquare = lastDigit * lastDigit;
    const remainingDigitsSum = sumOfSquaresDigits(inputStr.slice(0, -1));
    
    return lastDigitSquare + remainingDigitsSum;
}

const result = sumOfSquaresDigits(n);

console.log(result);