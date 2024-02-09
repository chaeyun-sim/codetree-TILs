const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(" "))

class People {
    constructor(arr) {
        this.arr = arr
    }

    sort() {
        arr.sort((a, b) => Number(a[1]) - Number(b[1]))
        arr.forEach(item => console.log(item.join(' ')))
    }
}

const people = new People(arr);
people.sort()