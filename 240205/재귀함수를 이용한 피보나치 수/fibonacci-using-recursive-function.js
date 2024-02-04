const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let cnt = 0
const arr = Array(n + 1).fill(0)

function fibonacci(num) {
    cnt++;
    if (num <= 1) return num;

    if (arr[num] !== 0) return arr[num];

    arr[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return arr[num];
}

fibonacci(n);
console.log(arr[n])