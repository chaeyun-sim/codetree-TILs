const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr1 = input.slice(0, 3).map(row => row.trim().split(' ').map(Number))
let arr2 = input.slice(4).map(row => row.trim().split(' ').map(Number))

const result = []

for (let i = 0; i < arr1.length; i++) {
    const row = []
    for (let j = 0; j < arr1[0].length; j++) {
        row.push(arr1[i][j] * arr2[i][j])
    }
    result.push(row)
}

result.forEach(row => console.log(row.join(' ')))