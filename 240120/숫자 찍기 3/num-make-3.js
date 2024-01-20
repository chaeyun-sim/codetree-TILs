const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, type] = input[0].split(" ").map(Number)
let result = [];

for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            result[i][j] = 1;
        } else {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }
}

if (type === 1) {
    result.forEach(row => console.log(row.join(' ')))
} else if (type === 2) {
    const arr = result.reverse()

    arr.forEach((row, i) => {
        console.log(' '.repeat(i) + row.join(' ') + ' '.repeat(i))
    })
} else if (type === 3) {
    const arr = result.reverse()
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const row = []
        for (let j = 0; j < arr[i].length; j++) {
            row.push(arr[j][i])
        }
        newArr.push(row)
    }
    newArr.reverse().forEach(row => console.log(row.join(' ')))
}