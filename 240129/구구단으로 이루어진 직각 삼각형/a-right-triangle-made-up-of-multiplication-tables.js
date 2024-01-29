const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

for (let i = 1; i <= n; i++) {
    const arr = []

    for (let j = 1; j <= n - i + 1; j++) {
        arr.push(`${i} * ${j} = ${i * j}`)
    }

    console.log(arr.join(' / '))
}