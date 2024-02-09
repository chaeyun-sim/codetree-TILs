const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' '))

class People {
    constructor (arr) {
        this.arr = arr
    }

    sort() {
        this.arr.sort((a, b) => a[1] - b[1] || b[2] - a[2])
        this.arr.forEach(item => console.log(item.join(' ')))
    }
}

const people = new People(arr)
people.sort()