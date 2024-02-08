const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const a = input[0].split('').sort()
const b = input[1].split('').sort()

function getEqual () {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return 'No'
        }
    }

    return 'Yes'
}

console.log(getEqual())