const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(el => el.split(' '))
let x = 0, y = 0
let directions = ['E', 'S', 'W', 'N']
let dx = [1, 0, -1, 0]
let dy = [0, -1, 0, 1]

testCases.forEach(item => {
    let [direction, distance] = item;
    let index = directions.findIndex(el => el === direction)

    while (distance > 0) {
        x += dx[index]
        y += dy[index]

        distance--
    }
})

console.log(x, y)