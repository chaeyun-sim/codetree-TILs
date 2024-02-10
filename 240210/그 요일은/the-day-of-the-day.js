const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const target = input[1];
const daysByMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const calculateDaysFromYearStart = (m, d) => {
    let totalDays = 0;
    for (let i = 1; i < m; i++) {
        totalDays += daysByMonth[i];
    }
    totalDays += d;
    return totalDays;
};

const daysBetween = calculateDaysFromYearStart(m2, d2) - calculateDaysFromYearStart(m1, d1);

const startIndex = days.indexOf('Mon');
const targetIndex = days.indexOf(target);
const dayDiff = (targetIndex - startIndex + 7) % 7;

let count = Math.floor((daysBetween + dayDiff) / 7);

console.log(count);