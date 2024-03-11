const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
let max = 0;

for (let i = 0; i < n; i++) {
    let budget = b - (arr[i][0] / 2 + arr[i][1]);
    let cnt = budget >= 0 ? 1 : 0;

    for (let j = 0; j < n; j++) {
        if (i !== j) {
            const sum = arr[j][0] + arr[j][1];
            if (sum <= budget) {
                budget -= sum;
                cnt++;
            }
        }
    }

    max = Math.max(max, cnt);
}

console.log(max);