const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
arr.sort((a, b) => a[1] - b[1] || b[0] - a[0])
let max = 0

for (let i = 0; i < n; i++) {
    let cnt = 1;
    const discount = arr[i][0] / 2 + arr[i][1]
    let total = discount <= b ? discount : 0

    for (let j = 0; j < n; j++) {
        const sum = arr[j].reduce((a, b) => a + b)
        if (i !== j && total + sum <= b) {
            total += sum;
            cnt++;
        }
    }

    max = Math.max(max, cnt)
}

console.log(max)