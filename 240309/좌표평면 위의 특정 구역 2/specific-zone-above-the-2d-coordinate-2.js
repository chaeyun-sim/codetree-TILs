const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[[0]])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let min = Infinity;

for (let i = 0; i < n; i++) {
    const arr1 = arr.slice(0, i)
    const arr2 = arr.slice(i + 1)
    const newArr = arr1.concat(arr2)
    const sortedByX = newArr.map(el => el[0]).sort((a, b) => a - b)
    const sortedByY = newArr.map(el => el[1]).sort((a, b) => a - b)
    const answer = Math.abs((sortedByX[sortedByX.length - 1] - sortedByX[0])) * Math.abs((sortedByY[sortedByY.length - 1] - sortedByY[0]))
    min = Math.min(answer, min)
}

console.log(min)