const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)
let max = arr[0]

function getMax (cnt) {
    if (cnt === arr.length - 1) return max;

    if (arr[cnt] > max) {
        max = arr[cnt]
    }

    return getMax(cnt + 1)
}

console.log(getMax(1))