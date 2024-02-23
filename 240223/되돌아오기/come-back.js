const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const testCases = input.slice(1).map(el => el.split(' '));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let target = Infinity;
let x = 0, y = 0;
let cnt = 0;

for (let i = 0; i < n && target === Infinity; i++) {
    const [direction, strDistance] = testCases[i];
    const distance = Number(strDistance);
    let idx;

    if (direction === 'N') idx = 0;
    else if (direction === 'E') idx = 1;
    else if (direction === 'S') idx = 2;
    else if (direction === 'W') idx = 3;

    for (let j = 0; j < distance; j++) {
        x += dx[idx];
        y += dy[idx];
        cnt++;

        if (x === 0 && y === 0) {
            target = cnt;
            break;
        }
    }

    if (target !== Infinity) break;
}

if (target !== Infinity) {
    console.log(target);
} else {
    console.log(-1);
}