const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(el => el.split(' '))
const arr = []
let current = 0
const offset = 1000

testCases.forEach(item => {
    let [amount, direction] = item;
    amount = Number(amount)
    let left = 0
    let right = 0
    
    if (direction === 'L') {
        left = current - amount;
        right = current
        current -= amount
    } else {
        left = current
        right = current + amount
        current += amount
    }

    arr.push([left, right])
})

const checked = Array(2001).fill(0)

for (const [x1, x2] of arr) {
    const start = x1 + offset;
    const end = x2 + offset;

    for (let i = start; i < end; i++) {
        if (!checked[i]) checked[i] = 0;
        checked[i] += 1;
    }
}

let cnt = 0;
for (const elem of checked) {
    if (elem >= 2) {
        cnt += 1;
    }
}

console.log(cnt);