const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let max = 0

for (let i = 0; i < n; i++) {
    let cnt = 0;
    let total = 0

    total += (arr[i][0] / 2 + arr[i][1]);
    cnt++;

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