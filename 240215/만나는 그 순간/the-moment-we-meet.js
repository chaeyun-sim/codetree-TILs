const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const testCasesA = input.slice(1, n + 1).map(el => el.split(' '))
const testCasesB = input.slice(n + 1).map(el => el.split(' '))
const arrA = [0]
const arrB = [0]

testCasesA.forEach(item => {
    let [direction, distance] = item;
    distance = Number(distance)

    while (distance > 0) {
        const lastItem = arrA[arrA.length - 1]

        if (direction === 'R') {
            arrA.push(lastItem + 1)
        } else {
            arrA.push(lastItem - 1)
        }

        distance--
    }
})

testCasesB.forEach(item => {
    let [direction, distance] = item;
    distance = Number(distance)

    while (distance > 0) {
        const lastItem = arrB[arrB.length - 1]

        if (direction === 'R') {
            arrB.push(lastItem + 1)
        } else {
            arrB.push(lastItem - 1)
        }
        
        distance--
    }
})

const getWhenMeet = () => {
    for (let i = 1; i < arrA.length; i++) {
        if (arrB[i] === arrA[i]) {
            return i
        }
    }

    return -1
}

console.log(getWhenMeet())