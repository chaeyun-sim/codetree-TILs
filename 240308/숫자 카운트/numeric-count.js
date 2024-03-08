const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
const allNumbers = [];

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (j === i) continue;
        for (let k = 1; k <= 9; k++) {
            if (k === i || k === j) continue;
            allNumbers.push(`${i}${j}${k}`);
        }
    }
}

function checkItems(list, number, correctPositionCount, wrongPositionCount) {
    const filteredList = [];
    for (let i = 0; i < list.length; i++) {
        let equals = 0;
        let includes = 0;
        for (let j = 0; j < 3; j++) {
            if (number[j] === list[i][j]) {
                equals++;
            } else if (list[i].includes(number[j])) {
                includes++;
            }
        }

        if (equals === correctPositionCount && includes === wrongPositionCount) {
            filteredList.push(list[i]);
        }
    }
    return filteredList;
}

let list = allNumbers;
let cnt = 0;

while (cnt < arr.length) {
    let [num, correctPositionCount, wrongPositionCount] = arr[cnt];
    list = checkItems(list, String(num), correctPositionCount, wrongPositionCount);
    cnt++;
}

console.log(list.length);