const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCases = input.slice(1).map(el => el.split(' '));
let current = 0;
const arr = [];

testCases.forEach(item => {
    const num = parseInt(item[0], 10);
    const direction = item[1];

    if (direction === 'R') {
        for (let i = 0; i < num; i++) {
            current++;
            arr.push(current);
        }
    } else {
        for (let i = 0; i < num; i++) {
            current--;
            arr.push(current);
        }
    }
});

const obj = {};
arr.forEach(num => obj[num] = (obj[num] || 0) + 1);
const repeatedAreas = Object.values(obj).filter(count => count > 1);

console.log(repeatedAreas.reduce((acc, count) => acc + count - 1, 0));