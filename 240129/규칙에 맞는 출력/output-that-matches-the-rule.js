const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

for (let i = n; i > 0; i--) {
    let arr = []

    for (let j = i; j <= n; j++) {
        arr.push(j)
    }
    
    console.log(arr.join(' '))
}