const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [m1, d1, m2, d2] = input[0].split(' ').map(Number)
const daysByMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const calculateDays = (m, d) => {
    let totalDays = 0

    for (let i = 1; i <= m; i++) {
        totalDays += daysByMonth[m]
    }

    return totalDays - d
}

const date = calculateDays(m2, d2) - calculateDays(m1, d1)

console.log(Math.ceil(date / 7))