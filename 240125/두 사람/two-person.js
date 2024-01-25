const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let cnt = 0;
let flag = false;
input.forEach(item => {
    const [age, gender] = item.split(' ');

    if (age >= 19 && gender === 'M') {
        flag = true
    }
})

console.log(+(flag))