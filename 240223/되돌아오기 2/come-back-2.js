const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases =input[0].split('')
let x = 0, y = 0
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]
let current = 0
let cnt = 0
let target = Infinity


testCases.forEach(direction => {
    if (direction === 'F') {
        x += dx[current]
        y += dy[current]
    } else if (direction === 'R') {
        if (current === 3) {
            current = 0
        } else {
            current++
        }
    } else if (direction === 'L') {
        if (current === 0) {
            current === 3
        } else {
            current--
        }
    }
    cnt++
    
    if (x === 0 && y === 0) {
        target = Math.min(target, cnt)
        return;
    }
})

if (target === Infinity) {
    console.log(-1)
} else {
    console.log(target)
}