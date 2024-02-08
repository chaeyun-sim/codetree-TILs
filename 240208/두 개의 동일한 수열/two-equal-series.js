const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[1].split(' ').filter(el => el)
const b = input[2].split(' ').filter(el => el)

function isEqualSet() {
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            return false 
        }
    }
    return true
}

console.log(isEqualSet() ? 'Yes' : 'No');