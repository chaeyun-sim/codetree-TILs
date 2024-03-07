const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number)).sort((a, b) => a[1] - b[1])
let max = -Infinity;

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i]
    return sum;
}

for (let i = k; i < arr[arr.length - 1][1] - k; i++) {
    const left = arr.filter(el => el[1] <= i && el[1] >= i - k)
    const right = arr.filter(el => el[1] >= i && el[1] <= i + k)
    const newArr = left.concat(right)
    max = Math.max(max, sum(newArr.map(el => el[0])))
}

console.log(max)