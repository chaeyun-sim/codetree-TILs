const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

Array.from({ length: n }).map(() => {
    console.log('*')
})