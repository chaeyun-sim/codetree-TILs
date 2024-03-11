const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);
let map = new Map();
let max = -1;

for (let i = 0; i < n; i++) {
    map.set(arr[i], map.has(arr[i]) ? [...map.get(arr[i]), i] : [i])
}

map.forEach((item, number) => {
    for (let i = 1; i < item.length; i++) {
        if (item[i] - item[i - 1] <= k) {
            max = Math.max(max, number);
            break;
        }
    }
});

console.log(max);