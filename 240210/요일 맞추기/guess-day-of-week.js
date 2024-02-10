const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // 월요일부터 시작
const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function daysFromStartOfYear(m, d) {
    let totalDays = 0;
    for (let i = 1; i < m; i++) {
        totalDays += daysInMonth[i];
    }
    totalDays += d;
    return totalDays;
}

let daysForFirstDate = daysFromStartOfYear(m1, d1);
let daysForSecondDate = daysFromStartOfYear(m2, d2);
let daysDifference = daysForSecondDate - daysForFirstDate;

let dayOfWeekIndex = (daysDifference % 7 + 7) % 7;
let resultDay = days[dayOfWeekIndex];

console.log(resultDay);