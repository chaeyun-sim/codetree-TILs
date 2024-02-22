const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(el => el.split(' ').map(Number));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const isValid = (x, y, n) => x >= 0 && x < n && y >= 0 && y < n;
let cnt = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let direction = 0;
        let total = 0

        while (direction < 4) {
            const nx = i + dx[cnt];
            const ny = j + dy[cnt];

            if (isValid(nx, ny, n) && arr[nx][ny] === 1) {
                total++
            }
            direction++;
        } 

        if (total >= 3) {
            cnt++
        }
    }
}

console.log(cnt);