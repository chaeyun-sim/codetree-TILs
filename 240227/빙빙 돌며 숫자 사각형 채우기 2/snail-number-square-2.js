const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let x = 0, y = 0;
const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1];
let currentDirection = 0;
const answer = Array(n).fill(null).map(() => Array(m).fill(0));
answer[x][y] = 1;

const isInRange = (x, y) => 0 <= x && x < n && 0 <= y && y < m;

for (let i = 2; i <= n * m; i++) {
    let nx = x + dx[currentDirection];
    let ny = y + dy[currentDirection];

    if (!isInRange(nx, ny) || answer[nx][ny] !== 0) {
        currentDirection = (currentDirection + 1) % 4;
        nx = x + dx[currentDirection];
        ny = y + dy[currentDirection];
    }

    x = nx;
    y = ny;
    answer[x][y] = i;
}

answer.forEach(row => console.log(row.join(' ')));