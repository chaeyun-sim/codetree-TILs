const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' '))
arr.sort((a, b) => Number(a[0]) - Number(b[0]))
const list = []

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (Number(arr[j][0]) - Number(arr[i][0]) === k) {
            list.push(arr.slice(i, j + 1).map(el => el[1]))
        }
    }
}

let max = 0
list.forEach(item => {
    const sum = item.map(el => el === 'G' ? 1 : 2).reduce((a, b) => a + b)
    max = Math.max(max, sum)
})

if (arr.length === 1) {
    console.log(arr[0][0] - 1)
} else {
    console.log(max)
}