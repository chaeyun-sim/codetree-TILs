const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input[0].split('')
const controls = input[1]

controls.split('').forEach(control => {
    if (control === 'L') {
        const str = arr.shift()
        arr = [...arr, str]
    } else if (control === 'R') {
        const str = arr.pop()
        arr = [str, ...arr]
    }
})

console.log(arr.join(''))