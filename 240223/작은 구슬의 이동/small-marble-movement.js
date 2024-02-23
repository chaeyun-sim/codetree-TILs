const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, t] = input[0].split(' ').map(Number);
let [x, y, d] = input[1].trim().split(' ');
x = Number(x);
y = Number(y);

const directions = {'U': [-1, 0], 'D': [1, 0], 'R': [0, 1], 'L': [0, -1]};

while (t > 0) {
    const [dx, dy] = directions[d];
    const newX = x + dx;
    const newY = y + dy;

    if (newX < 1 || newX > n || newY < 1 || newY > n) {
        if (d === 'U') d = 'D';
        else if (d === 'D') d = 'U';
        else if (d === 'R') d = 'L';
        else if (d === 'L') d = 'R';
    } else {
        x = newX;
        y = newY;
        
    }

    t--
}

console.log(x, y);