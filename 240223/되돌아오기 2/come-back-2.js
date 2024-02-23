const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCases = input[0].split('');
let x = 0, y = 0;
const dx = [0, 1, 0, -1]; // 북, 동, 남, 서
const dy = [1, 0, -1, 0];
let current = 0;
let cnt = 0;
let target = Infinity;

testCases.forEach((direction, index) => {
    if (direction === 'F') {
        x += dx[current];
        y += dy[current];
    } else if (direction === 'R') {
        current = (current + 1) % 4;
    } else if (direction === 'L') {
        current = (current + 3) % 4;
    }
    cnt++;
    
    if (x === 0 && y === 0) {
        target = cnt;
        return;
    }
});

if (target === Infinity) {
    console.log(-1);
} else {
    console.log(target);
}