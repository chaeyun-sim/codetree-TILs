const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const n = Number(input[0])
const grid = input.slice(1).map(el => el.split(' ').map(Number))
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let count = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let ones = 0;

        for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];

            if (grid[nx] !== undefined && nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                ones++;
            }
        }

        if (ones >= 3) {
            count++;
        }
    }
}

console.log(count);