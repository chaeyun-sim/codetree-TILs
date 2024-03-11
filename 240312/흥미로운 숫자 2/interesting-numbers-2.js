const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [x, y] = input[0].split(' ').map(Number)
let cnt = 0

const isValid = (values, str) => values.includes(1) && (values[0] === 1 || values[0] === str.length - 1);

for (let i = x; i <= y; i++) {
    const str = i.toString();
    const obj = {};

    for (const s of str) {
        obj[s] = (obj[s] || 0) + 1;
    }

    const values = Object.values(obj);
    if (values.length === 2 && isValid(values, str)) cnt++

}

console.log(cnt);