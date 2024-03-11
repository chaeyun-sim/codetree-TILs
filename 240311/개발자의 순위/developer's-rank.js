const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [k, n] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const obj = {}

for (let i = 0; i < k; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let number = String(arr[i][j]) + '-' + String(arr[i][k])
            obj[number] = (obj[number] || 0) + 1
        }
    }
}
const filtered = Object.values(obj).filter(el => el === k)
console.log(filtered.length)