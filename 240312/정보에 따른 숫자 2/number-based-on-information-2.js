const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [T, a, b] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' '))
let cnt = 0

for (let x = a; x <= b; x++) {
    const s = arr.filter(el => el[0] === 'S')
    const n = arr.filter(el => el[0] === 'N')
    const d1 = s.map(v => Math.abs(x - Number(v[1]))).sort((a, b) => a - b)[0]
    const d2 = n.map(v => Math.abs(x - Number(v[1]))).sort((a, b) => a - b)[0]
    
    if (d1 <= d2) cnt++
}

console.log(cnt)