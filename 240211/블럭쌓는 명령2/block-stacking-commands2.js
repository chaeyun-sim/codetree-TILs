const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const testCases = input.slice(1).map(el => el.split(' ').map(Number))
const arr = Array(n).fill(0)


testCases.forEach(item => {
    for (let i = item[0]; i <= item[1]; i++) {
        if (arr[i]) {
            arr[i]++
        } else {
            arr[i] = 1
        }
        console.log(arr)
    }
})

console.log(Math.max(...arr))