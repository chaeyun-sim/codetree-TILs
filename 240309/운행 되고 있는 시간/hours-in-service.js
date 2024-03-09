const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let max = 0

function checkTime(intervals) {
  let timePoints = [];

  intervals.forEach(([start, end]) => {
    timePoints.push({ time: start, type: 'start' });
    timePoints.push({ time: end, type: 'end' });
  });

  timePoints.sort((a, b) => a.time - b.time || (a.type === 'end' ? -1 : 1));

  let current = 0;
  let lastTime = 0;
  let total = 0;

  timePoints.forEach(point => {
    if (current > 0) {
      total += point.time - lastTime;
    }

    current = point.type === 'start' ? current + 1 : current - 1
    lastTime = point.time;
  });

  return total;
}


for (let i = 0; i < n; i++) {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1)).sort((a, b) => a[0] - b[0])
    max = Math.max(max, checkTime(newArr))
}

console.log(max)