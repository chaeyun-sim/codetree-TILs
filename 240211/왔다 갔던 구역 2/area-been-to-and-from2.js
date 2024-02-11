const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(el => el.split(' '))
const arr = []
let current = 0

testCases.forEach(item => {
    const [num, direction] = item;

    if (direction === 'R') {
        for (let i = 0; i < num; i++) {
            arr.push(current)
            current++
        }
    } else {
        for (let i = 0; i < num; i++) {
            arr.push(current)
            current--
        }
    }
})

const obj = {}
arr.forEach(num => obj[num] ? obj[num]++ : obj[num] = 1)
console.log(Object.keys(obj).filter(el => obj[el] >= 2).length)