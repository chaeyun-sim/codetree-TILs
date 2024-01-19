const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr1 = input.slice(0, 3).map(row => row.split(' ').map(Number))
let arr2 = input.slice(4).map(row => row.split(' ').map(Number))


const result = arr1.map((row, i) => row.map((el, j) => el * arr2[i][j]))
result.forEach(item => console.log(item.join(' ')))