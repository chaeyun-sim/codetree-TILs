const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [x, y] = input[0].split(' ').map(Number)
let cnt = 0

function checkString(str) {
    const obj = {}

    for (let j = 0; j < str.length; j++) {
        obj[str[j]] = (obj[str[j]] || 0) + 1
    }

    return Object.keys(obj).length === 2
}

for (let i = x; i <= y; i++) {
    const str = String(i)
    
    if (checkString(str)) cnt++
}

console.log(cnt)