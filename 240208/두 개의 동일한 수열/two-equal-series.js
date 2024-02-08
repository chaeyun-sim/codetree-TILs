const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)

function equal () {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

a.sort((a, b) => a - b)
b.sort((a, b) => a - b)

if (equal()) {
    console.log('Yes')
} else {
    console.log('No')
}