const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arrA = input.slice(1, n + 1).map(el => el.split(' '))
const arrB = input.slice(n + 1).map(el => el.split(' '))
const distancesA = []
const distancesB = []
let currentA = 0
let currentB = 0

arrA.forEach(item => {
    let [direction, distance] = item;

    while (distance > 0) {
        if (distancesA.length) {
            const lastItem = distancesA[distancesA.length - 1]
            if (direction === 'R') {
                distancesA.push(lastItem + 1)
            } else {
                distancesA.push(lastItem - 1)
            }
        } else {
            distancesA.push(0)
        }
        distance--
    }
})

arrB.forEach(item => {
    let [direction, distance] = item;

    while (distance > 0) {
        if (distancesB.length) {
            const lastItem = distancesB[distancesB.length - 1]
            if (direction === 'R') {
                distancesB.push(lastItem + 1)
            } else {
                distancesB.push(lastItem - 1)
            }
        } else {
            distancesB.push(0)
        }
        distance--
    }
})

const getWhenMeet = () => {
    for (let i = 1; i < distancesA.length; i++) {
        if (distancesB[i] === distancesA[i]) {
            return i + 2
        }
    }

    return -1
}

console.log(getWhenMeet())