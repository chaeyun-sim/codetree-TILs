const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let max = 0

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const [x1, y1] = arr[i]
            const [x2, y2] = arr[j]
            const [x3, y3] = arr[k]

            if (y1 === y2 || y2 === y3 || y1 === y3 || x1 === x2 || x2 === x3 || x1 === x3) {
                const sum = Math.abs((x1 * y2 + x2 * y3 + x3 * y1) - (x2 * y1 + x3 * y2 + x1 * y3));
                max = Math.max(max, sum);
            }

            
        }
    }
}

console.log(max)