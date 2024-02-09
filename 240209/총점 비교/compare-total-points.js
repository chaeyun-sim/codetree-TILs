const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' '))

class Student {
    constructor (arr) {
        this.arr = arr
    }

    sort() {
        this.arr.sort((a, b) => (Number(a[1]) + Number(a[2]) + Number(a[3])) - (Number(b[1]) + Number(b[2]) + Number(b[3])))
        this.arr.map(item => console.log(item.join(' ')))
    }
}

const student = new Student(arr)
student.sort()