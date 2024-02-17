const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const dx = [1, -1, 0, 0]
const dy = [0, 0, -1, 1]
let x = 0, y = 0;
let currentDirection = 3   //'E', 'W', 'S', 'N'

for (let i = 0; i < input[0].length; i++) {
    if (input[0][i] === 'L') {
        currentDirection -= 2
        currentDirection = currentDirection > 3 ? currentDirection - 4 : currentDirection
    } else if (input[0][i] === 'R') {
        currentDirection += 2
        currentDirection = currentDirection < 0 ? currentDirection + 4 : currentDirection
    } else if (input[0][i] === 'F') {
        x += dx[currentDirection]
        y += dy[currentDirection]
    }
}

console.log(x, y)