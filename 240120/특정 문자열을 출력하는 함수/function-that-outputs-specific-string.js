const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

Array.from({ length: n }).forEach(() => {
    console.log('Hello')
    console.log('#@#@#@#@#@')
    console.log('CodeTree')
    console.log('@#@#@#@#@#')
    console.log('Students!\n')
})