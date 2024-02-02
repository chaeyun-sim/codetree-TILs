const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ').map(Number)

function modifyAndPrintValues(a, b) {
    if (a > b) {
        a += 25;
        b *= 2;
    } else {
        a *= 2;
        b += 25;
    }

    console.log(a, b);
}

modifyAndPrintValues(a, b);