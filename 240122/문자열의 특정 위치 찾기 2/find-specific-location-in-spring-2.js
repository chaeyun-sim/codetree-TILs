const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = ['apple', 'banana', 'grape', 'blueberry', 'orange']
const str = input[0]
let cnt = 0;

arr.forEach(fruit => {
    if (fruit[2] === str || fruit[3] === str) {
        console.log(fruit)
        cnt++
    }
})

console.log(cnt)