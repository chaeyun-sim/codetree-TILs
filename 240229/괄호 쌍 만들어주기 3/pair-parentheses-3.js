const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split('')
let cnt = 0

arr.forEach((item, index) => {
    if (item === '(') {
        let i = index + 1
        while (i < arr.length) {
            if (arr[i] === ')') {
                cnt++
            }
            i++
        }
    }
})

console.log(cnt)