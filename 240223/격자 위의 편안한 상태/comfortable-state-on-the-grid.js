const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const testCases = input.slice(1).map(el => el.split(' ').map(Number))
const arr = Array(n).fill([]).map(() => Array(n).fill(0))
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < n

testCases.forEach(item => {
    const [i, j] = item;
    arr[i - 1][j - 1] = 1
    let num = 0;
    let total = 0

    while (num < 4) {
        let nx = i - 1 + dx[num]
        let ny = j - 1 + dy[num]

        if (isValid(nx, ny) && arr[nx][ny] === 1) {
            total++
        }
        num++
    } 

    console.log(+(total >= 3))
})