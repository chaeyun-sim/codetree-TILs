const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(Number)
let max = 0

function countIceberg(arr) {
    const icebergs = [];
    let cnt = 0

    arr.forEach(item => {
        if (item !== 0) {
            cnt++
        } else if (cnt > 0) {
            icebergs.push(cnt);
            cnt = 0
        }
    });

    if (cnt > 0) icebergs.push(cnt);

    return icebergs.length;
}

for (let limit = 1; limit < Math.max(...arr); limit++) {
    const newArr = arr.map(el => el - limit <= 0 ? 0 : el - limit)
    max = Math.max(max, countIceberg(newArr))
}

console.log(max)