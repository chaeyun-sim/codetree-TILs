const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(el => el.split(' '))

class People {
    constructor (arr) {
        this.arr = arr;
    }

    sortByName() {
        const sorted = this.arr.sort((a, b) => a[0].localeCompare(b[0]))
        console.log('name')
        this.print(sorted)
    }

    sortByHeight() {
        const sorted = this.arr.sort((a, b) => b[1] - a[1])
        console.log('height')
        this.print(sorted)
    }

    print (arr) {
        arr.forEach(item => console.log(item.join(' ')))
    }
}

const people = new People(arr);
people.sortByName()
console.log()
people.sortByHeight()