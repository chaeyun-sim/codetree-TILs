const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [m1, d1, m2, d2] = input[0].split(' ').map(Number)
const target = input[1]
const daysByMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


const calculateDays = (m, d) => {
    let totalDays = 0

    for (let i = 1; i <= m; i++) {
        totalDays += daysByMonth[m]
    }

    return totalDays - d
}

const date = calculateDays(m2, d2) - calculateDays(m1, d1)

const startDayIndex = days.indexOf('Mon');
let targetDayIndex = days.indexOf(target);

let diff = targetDayIndex - startDayIndex;
if (diff < 0) diff += 7;

const count = Math.ceil((date - diff) / 7) + 1;
console.log(count)