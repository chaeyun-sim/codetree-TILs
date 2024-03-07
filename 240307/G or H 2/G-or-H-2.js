const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ')).sort((a, b) => Number(a[0]) - Number(b[0]))
let max = 0

function checkEqual(arr) {
    let gs = 0, hs = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === 'G') gs++
        else hs++
    }

    return gs === hs || !hs || !gs
}

for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j < n; j++) {
        const newArr = arr.slice(i, j)
        if (checkEqual(newArr)) {
            const num = Number(newArr[newArr.length - 1][0]) - Number(newArr[0][0])
            max = Math.max(max, num)
        }
    }
}

console.log(max)