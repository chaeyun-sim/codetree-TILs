const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let max = 0

function checkTime(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i][0]; j <= arr[i][1]; j++) {
            if (!obj[j]) obj[j] = 1
        }
    }

    return Object.keys(obj).length
}


for (let i = 0; i < n; i++) {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1)).sort((a, b) => a[0] - b[0])
    max = Math.max(max, checkTime(newArr) - 2)
}

console.log(max)