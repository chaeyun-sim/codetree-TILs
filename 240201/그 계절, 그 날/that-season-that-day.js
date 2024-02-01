const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [year, month, date] = input[0].split(' ').map(Number);
const isLeap = year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)
const season = {
    Spring: [3, 4, 5],
    Summer: [6, 7, 8],
    Autumn: [9, 10, 11],
    Winter: [1, 2, 12]
}

if (isLeap && month === 2 && date === 29) {
    console.log('Winter')
} else if (!isLeap && date < 29) {
    const thisSeason = Object.keys(season).filter(el => season[el].includes(month))
    console.log(thisSeason)
} else {
    console.log(-1)
}