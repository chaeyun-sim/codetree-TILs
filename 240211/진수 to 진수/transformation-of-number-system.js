const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
let decimal = 0;

for (let i = 0; i < n.length; i++) {
    decimal += parseInt(n[i], a) * (a ** (n.length - 1 - i));
}

let result = '';
while (decimal > 0) {
    result = (decimal % b).toString() + result;
    decimal = Math.floor(decimal / b);
}

console.log(result ? result : "0");