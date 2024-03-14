const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let max = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (i !== j && i !== k && j !== k) {
                const [x1, y1] = arr[i];
                const [x2, y2] = arr[j];
                const [x3, y3] = arr[k];
                
                if ((x1 === x2 && y2 === y3) || (x2 === x3 && y3 === y1) || (x3 === x1 && y1 === y2)) {
                    let area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
                    max = Math.max(max, area);
                }
            }
        }
    }
}

console.log(max);