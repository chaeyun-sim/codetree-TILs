const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map((el, idx) => el.split(' ').map(Number))

class Students {
    constructor (arr) {
        this.arr = arr
    }

    sort() {
        this.arr = this.arr.map((el, idx) => [...el, idx + 1])
        this.arr.sort((a, b) => a[0] - b[0] || b[1] - a[1])
        this.arr.forEach(item => console.log(item.join(' ')))
    }
}

const students = new Students(arr)
students.sort()