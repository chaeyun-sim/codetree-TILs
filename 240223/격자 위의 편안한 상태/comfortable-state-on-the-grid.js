const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const testCases = input.slice(1).map(el => el.split(' ').map(Number));
const arr = Array.from({ length: n }, () => Array(n).fill(0)); // 올바른 격자 초기화
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < n;

testCases.forEach(item => {
    const [i, j] = item;
    arr[i - 1][j - 1] = 1;
    let total = 0;

    for (let num = 0; num < 4; num++) {
        let nx = i - 1 + dx[num];
        let ny = j - 1 + dy[num];

        if (isValid(nx, ny) && arr[nx][ny] === 1) {
            total++;
        }
    } 

    console.log(total === 3 ? 1 : 0);
});