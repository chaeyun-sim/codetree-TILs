const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

for (let i = n; i > 1; i--) {
    if (i === n) {
        console.log('*'.repeat(i).split('').join(' '))
        if (n > 1) console.log('*')
    } else {
        console.log('*'.repeat(i).split('').join(' '))
    }
}

for (let i = 2; i <= n; i++) {
    if (i === n) {
        if (n > 1) {
            console.log('*')
        }
        console.log('*'.repeat(i).split('').join(' '))
    } else {
        console.log('*'.repeat(i).split('').join(' '))
    }
}