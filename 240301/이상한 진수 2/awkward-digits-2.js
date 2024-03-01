const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const binary = input[0]
let max = -Infinity

for (let i = 0; i < binary.length; i++) {
    const left = binary.slice(0, i)
    const right = binary.slice(i + 1)
    const convert = binary[i] === '1' ? '0' : '1'
    const result = left + convert + right

    if (max < Number(result)) {
        max = result
    }
}

console.log(parseInt(max, 2))