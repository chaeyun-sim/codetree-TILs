const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' ').map(Number))

class Student {
    constructor (arr) {
        this.arr = arr
    }

    sort() {
        this.arr = this.arr.map((el, idx) => [...el, idx + 1])
        this.arr.sort((a, b) => b[0] - a[0] || b[1] - a[1] || a[2] - b[2])
        this.arr.map(el => console.log(el.join(' ')))
    }
}

const student = new Student(arr)
student.sort()