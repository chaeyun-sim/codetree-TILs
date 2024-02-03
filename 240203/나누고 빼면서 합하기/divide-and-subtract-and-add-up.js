const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)

function calculateSum(n, m, A) {
    let sum = A[m - 1];
    
    while (m !== 1) {
        if (m % 2) {
            m--;
        } else {
            m /= 2;
        }
        sum += A[m - 1];
    }
    
    return sum;
}

const result = calculateSum(n, m, A);
console.log(result);