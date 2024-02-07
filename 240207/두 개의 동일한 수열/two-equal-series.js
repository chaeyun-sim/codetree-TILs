const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr1 = input[1].split(' ').map(Number)
const arr2 = input[2].split(' ').map(Number)

function equal () {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

arr1.sort()
arr2.sort()

console.log(equal() ? 'Yes' : 'No')