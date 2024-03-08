const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const [first, second] = input.slice(1).map(el => el.split(" ").map(Number))
let cnt = 0;

function distance(a, b) {
    return Math.min(Math.abs(a - b), n - Math.abs(a - b));
}

function isClose(combination, target) {
    return distance(combination[0], target[0]) <= 2 &&
            distance(combination[1], target[1]) <= 2 &&
            distance(combination[2], target[2]) <= 2;
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (isClose([i, j, k], first) || isClose([i, j, k], second)) {
                cnt++;
            }
        }
    }
}

console.log(cnt)