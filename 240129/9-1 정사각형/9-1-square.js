const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let cnt = 0;
let num = 9;

while (cnt < n) {
    const arr = []

    Array.from({ length: n}).map(() => {
        if (!num) num = 9

        arr.push(num)
        num--
    })

    console.log(arr.join(''))
    cnt++
}