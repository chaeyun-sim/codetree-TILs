const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])

function findNthValue(n) {
    if (n === 1) return 2;
    if (n === 2) return 4;

    return (findNthValue(n - 1) * findNthValue(n - 2)) % 100;
}

console.log(findNthValue(n));