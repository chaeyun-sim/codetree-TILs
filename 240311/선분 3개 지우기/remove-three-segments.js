const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1])
const answer = [[arr[0]]]

for (let i = 1; i < n; i++) {
    if (arr[i - 1][1] > arr[i][0]) {
        answer[answer.length - 1].push(arr[i])
    } else {
        answer.push([arr[i]])
    }
}

console.log(answer.map(el => el.length).reduce((a, b) => a * b))