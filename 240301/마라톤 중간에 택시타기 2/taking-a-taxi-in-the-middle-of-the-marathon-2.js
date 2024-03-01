const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const maraton = input.slice(1).map(el => el.split(' ').map(Number))

function calculateDistances(points) {
  let distances = 0;

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i]
    const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    distances += distance
  }
  return distances;
}

let min = Infinity;
for (let i = 1; i < n; i++) {
    const left = maraton.slice(0, i)
    const right = maraton.slice(i + 1)
    const sum = calculateDistances(left.concat(right))
    
    if (min > sum) {
        min = sum
    }
}

console.log(min)