const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(el => el.trim().split(' ').map(Number))
const min = Math.min(...testCases.flat())
const max = Math.max(...testCases.flat())
const arr = Array(max - min + 1).fill(0)

testCases.forEach(item => {
    for (let i = item[0]; i < item[1]; i++) {
        arr[i - min]++;
    }
});

console.log(Math.max(...arr))