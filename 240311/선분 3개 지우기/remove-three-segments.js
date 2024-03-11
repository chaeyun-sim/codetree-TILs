const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1])
let cnt = 0

function isOverlapped(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] <= arr[i - 1][1]) {
            return true
        }
    }

    return false
}

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const newArr = arr.filter((_, idx) => idx !== i && idx !== j && idx !== k)
            if (!isOverlapped(newArr)) cnt++
        }
    }
}

console.log(cnt)