const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[0].split(' ').map(Number)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        console.log(arr[i - 1])
        return;
    }
}