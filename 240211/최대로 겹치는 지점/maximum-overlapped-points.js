const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(el => el.split(' ').map(Number))
const max = Math.max(...testCases.flat())
const min = Math.min(...testCases.flat())
const arr = Array(max).fill(0)

testCases.forEach(item => {
    for (let i = item[0] - 1; i < item[1]; i++) {
        arr[i]++
    }
})

console.log(Math.max(...arr))