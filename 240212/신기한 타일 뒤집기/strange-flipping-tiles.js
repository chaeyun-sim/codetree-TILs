const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCases = input.slice(1).map(el => el.split(' '));
let obj = {};
let current = 0;

testCases.forEach(item => {
    let [distance, direction] = item;
    distance = Number(distance);

    if (direction === 'R') {
        for (let i = 0; i < distance; i++) {
            obj[current + i] = obj[current + i] === 'white' ? 'black' : 'black';
        }
        current += distance;
    } else {
        for (let i = 0; i < distance; i++) {
            obj[current - i] = obj[current - i] === 'black' ? 'white' : 'white';
        }
        current -= distance - 1;
    }
});

const whites = Object.values(obj).filter(el => el === 'white').length;
const blacks = Object.values(obj).filter(el => el === 'black').length;
console.log(`${whites} ${blacks}`);