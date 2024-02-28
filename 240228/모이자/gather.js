const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)

let totalPeople = arr.reduce((acc, curr) => acc + curr, 0);
let cumulativePeople = 0;
let meetingHouse = 0;

for (let i = 0; i < arr.length; i++) {
    cumulativePeople += arr[i];
    if (cumulativePeople >= totalPeople / 2) {
      meetingHouse = i;
      break;
    }
  }

let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += Math.abs(i - meetingHouse) * arr[i];
}

console.log(total)