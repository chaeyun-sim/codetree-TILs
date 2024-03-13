const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
const map = new Map();
let max = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const k = (arr[j] + arr[i]) / 2.0;
      
      if (Number.isInteger(k)) {
        const item = map.get(k)
        map.set(k, (item || 0) + 1);
        max = Math.max(max, item);
      }
    }
}

console.log(max)