const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let x = 0, y = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const alphabet = Array(26).fill(0).map((_, i) => String.fromCharCode(i + 65));
let currentDirection = 0;
const answer = Array(n).fill(null).map(() => Array(m).fill(0));
answer[x][y] = 'A';

const isInRange = (x, y) => 0 <= x && x < n && 0 <= y && y < m;

for (let i = 1; i < n * m; i++) {
    let nx = x + dx[currentDirection];
    let ny = y + dy[currentDirection];

    if (!isInRange(nx, ny) || answer[nx][ny] !== 0) {
        currentDirection = (currentDirection + 1) % 4;
        nx = x + dx[currentDirection];
        ny = y + dy[currentDirection];
    }

    x = nx;
    y = ny;
    answer[x][y] = alphabet[(i % 26)];
}

answer.forEach(row => console.log(row.join(' ')));