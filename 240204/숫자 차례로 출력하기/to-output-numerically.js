const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let cnt = n;
const arr1 = []
const arr2 = []

function add(cnt) {
  if (cnt === 0) return;

  arr1.push(cnt)
  add(cnt - 1);
}

function minus(cnt) {
  if (cnt > n) return;

  arr2.push(cnt)
  minus(cnt + 1);
}

add(cnt);
minus(1)

console.log(arr1.join(' '))
console.log(arr2.join(" "))