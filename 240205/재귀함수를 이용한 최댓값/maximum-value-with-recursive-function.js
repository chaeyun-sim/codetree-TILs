const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)

function getMax(index, currentMax) {
    if (index >= arr.length) return currentMax;

    const newMax = arr[index] > currentMax ? arr[index] : currentMax
    return getMax(index + 1, newMax);
}

console.log(getMax(0, arr[0]))