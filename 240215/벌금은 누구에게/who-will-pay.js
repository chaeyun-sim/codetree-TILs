const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m, k] = input[0].split(' ').map(Number)
const students = input.slice(1).map(Number)
const obj = {}

for (let i = 0; i < students.length; i++) {
    if (obj[students[i]]) {
        obj[students[i]]++
    } else {
        obj[students[i]] = 1
    }

    if (obj[students[i]] >= k) {
        console.log(students[i])
        return;
    }
}

if (Object.values(obj).filter(el => el >= 3).length === 0) {
    console.log(-1)
}