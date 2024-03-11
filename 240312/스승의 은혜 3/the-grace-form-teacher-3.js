const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
let max = 0

for (let i = 0; i < n; i++) {
    let budget = b
    let cnt = 1;
    const currentDiscount = arr[i][0] / 2 + arr[i][1]

    if (currentDiscount <= budget) {
        budget -= currentDiscount
    }

    for (let j = 0; j < n; j++) {
        const sum = arr[j].reduce((a, b) => a + b)
        if (i !== j && sum <= budget) {
            budget -= sum
            cnt++;
        }
    }

    max = Math.max(max, cnt)
}

console.log(max)