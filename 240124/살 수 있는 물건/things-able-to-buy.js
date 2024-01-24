const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const menu = Object.freeze({
    book: 3000,
    mask: 1000
})

const money = Number(input[0])

if (money < 1000) {
    console.log('no')
} else if (money < 3000) {
    console.log('mask')
} else if (money >= 3000) {
    console.log('book')
}