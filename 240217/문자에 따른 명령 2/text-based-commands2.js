const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let x = 0, y = 0;
let currentDirection = 0;

for (let i = 0; i < input[0].length; i++) {
    if (input[0][i] === 'L') {
        currentDirection = (currentDirection + 3) % 4;
    } else if (input[0][i] === 'R') {
        currentDirection = (currentDirection + 1) % 4;
    } else if (input[0][i] === 'F') {
        x += dx[currentDirection];
        y += dy[currentDirection];
    }
}

console.log(x, y);