const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(el => el.split(' '))
const obj = {}
let num = 0

testCases.forEach(item => {
    const [amount, direction] = item;
    
    for (let i = 0; i < amount; i++) {
        obj[num] ? obj[num]++ : obj[num] = 1

        if (direction === 'R') {
            num++
        } else if (direction === 'L') {
            num--
        }
    }
})

let total = 0
Object.values(obj).forEach(val => {
    if (val >= 2) {
        total++
    }
})

console.log(total)