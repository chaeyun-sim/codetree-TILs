const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' '))
arr.sort((a, b) => b[0].localeCompare(a[0]))

class Person {
    constructor (name, addr, location) {
        this.name = name;
        this.addr = addr;
        this.location = location;
    }

    getData() {
        console.log(`name ${this.name}`)
        console.log(`addr ${this.addr}`)
        console.log(`city ${this.location}`)
    }
}

const person = new Person(...arr[0])
person.getData()