const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const testCases = input.slice(1).map(el => el.split(' '));
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]
let x = 0, y = 0;
let cnt = 0;
let target = -Infinity;

testCases.forEach(item => {
    const [direction, strDistance] = item;
    let distance = Number(strDistance);
    let idx;

    if (direction === 'N') {
        idx = 0
    } else if (direction === 'E') {
        idx = 1
    } else if (direction === 'S') {
        idx = 2
    } else if (direction === 'W') {
        idx = 3
    }
    
    while (distance > 0) {
        x += dx[idx];
        y += dy[idx];

        cnt++
        distance--

        if (x === 0 && y === 0) {
            if (cnt < target) {
                target = cnt
            }

            return;
        }
    }
});

if (target > 0)  {
    console.log(target)
} else {
    console.log(-1)
}