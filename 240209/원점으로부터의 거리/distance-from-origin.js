const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const pos = input.slice(1).map(el => el.split(' ').map(Number))

class Distance {
    constructor (pos) {
        this.pos = pos;
    }

    calculate () {
        let arr = this.pos.map((el, idx) => [idx + 1, Math.abs(0 - el[0]) + Math.abs(0 - el[1])])
        arr.sort((a, b) => a[1] - b[1] || a[0] - b[0])
        arr.map(el => console.log(el[0]))
    }
}

const distance = new Distance(pos)
distance.calculate()