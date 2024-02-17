const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number)
const testCasesN = input.slice(1, n + 1).map(el => el.split(" "))
const testCasesM = input.slice(n + 1).map(el => el.split(' '))
const arrN = []
const arrM = []
let current = 0

testCasesN.forEach(item => {
    let [distance, direction] = item;

    while (distance > 0) {
        if (direction === 'R') {
            current++
        } else {
            current--
        }

        arrN.push(current)
        distance--
    }
})

current = 0

testCasesM.forEach(item => {
    let [distance, direction] = item;

    while (distance > 0) {
        if (direction === 'R') {
            current++
        } else {
            current--
        }

        arrM.push(current)
        distance--
    }
})

let cnt = 0
for (let i = 0; i < Math.max(arrN.length, arrM.length); i++) {
    const N = arrN[i] === undefined ? arrN[arrN.length - 1] : arrN[i]
    const M = arrM[i] === undefined ? arrM[arrM.length - 1] : arrM[i]

    if (N === M && arrN[i - 1] !== arrM[i - 1]) {
        cnt++
    }
}

console.log(cnt)