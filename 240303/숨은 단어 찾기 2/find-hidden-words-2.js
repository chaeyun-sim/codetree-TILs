const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// 1 0, 1 1, 0 1, -1 1, -1 0, -1 -1, 0 -1, 1 -1, 
const dx = [1, 1, 0, -1, -1, -1, 0, 1]
const dy = [0, 1, 1, 1, 0, -1, -1, -1]
let cnt = 0

const [n, m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(''))
const list = []

const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr[i][j] === 'L') {
            list.push([i, j])
        }
    }
}

list.forEach(item => {
    const [i, j] = item;
    let dir = 0

    while (dir < 8) {
        let nx1 = i + dx[dir];
        let ny1 = j + dy[dir];
        let nx2 = nx1 + dx[dir];
        let ny2 = ny1 + dy[dir];
                
        if (isValid(nx1, ny1) && isValid(nx2, ny2) && 
            arr[nx1][ny1] === 'E' && arr[nx2][ny2] === 'E') {
            cnt++;
        }
        
        dir++
    }
})

console.log(cnt)