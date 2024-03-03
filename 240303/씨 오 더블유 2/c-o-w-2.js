const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split('')
let c = 0, o = 0, result = 0;

arr.forEach(item => {
    if (item === 'C') {
        c++;
    } else if (item === 'O') {
        o += c;
    } else if (item === 'W') {
        result += o;
    }
})

console.log(result)