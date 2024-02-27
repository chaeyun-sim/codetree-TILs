const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
const directions = input[1].split('');
const arr = input.slice(2).map(el => el.split(' ').map(Number));
let result = 0;
let current = 0;

let x = Math.floor(n / 2);
let y = Math.floor(n / 2);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

result += arr[x][y];

directions.forEach(direction => {
    if (direction === 'F') {
        let nx = x + dx[current];
        let ny = y + dy[current];
        
        if (isValid(nx, ny)) {
            x = nx;
            y = ny;
            result += arr[x][y];
        }
    } else if (direction === 'R') {
        current = (current + 1) % 4;
    } else if (direction === 'L') {
        current = (current + 3) % 4;
    }
});

console.log(result);