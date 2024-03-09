const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)
let max = 0

for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
        const newArr = arr.slice(i, j)
        for (let k = 0; k < newArr.length; k++) {
            const list = [...newArr.slice(0, k), newArr[k] / 2, ...newArr.slice(k + 1)]
            const sum = list.reduce((a,b) => a + b)
            if (sum <= b) {
                max = Math.max(list.length, max)
            }
        }
    }
}

console.log(max)