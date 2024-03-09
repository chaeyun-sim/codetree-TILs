const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let min = Infinity;

function getTime(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        let [start,end] = arr[i];
        while (start <= end) {
            if (obj[start]) {
                obj[start]++
            } else {
                obj[start] = 1
            }
            start++
        }
    }

    return obj
}

for (let i = 0; i < n; i++) {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1))
    const works = getTime(newArr)
    const keys = Object.keys(works).map(Number)
    const workingTime = keys[keys.length - 1] - keys[0] + 1
    min = Math.min(workingTime, min)
}

console.log(min)