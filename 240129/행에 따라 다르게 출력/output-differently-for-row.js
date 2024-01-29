const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let start = 1;
let i = 0;

while (i < n) {
    let arr = []

    Array.from({ length: n}).map(() => {
        arr.push(start)

        if (i % 2 === 0) {
            start++
        } else {
            start += 2
        }
    })

    if (i % 2 === 0) start++
    else start--

    console.log(arr.join(' '))
    i++
}