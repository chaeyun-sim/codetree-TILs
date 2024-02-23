const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const testCases = input.slice(1).map(el => el.split(' '));
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]
let x = 0, y = 0;
let target = 0;
let cnt = 0

testCases.forEach((item, index) => {
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

        distance--
        cnt++

        if (x === 0 && y === 0) {
            target = cnt
            break;
        }
    }
});

if (target)  {
    console.log(target)
} else {
    console.log(-1)
}