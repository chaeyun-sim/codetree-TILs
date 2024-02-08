const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class JamesBond {
    constructor (code, point, time) {
        this.code = code;
        this.point = point;
        this.time = time
    }

    getData() {
        console.log(`secret code : ${this.code}`)
        console.log(`meeting point : ${this.point}`)
        console.log(`time : ${this.time}`)
    }
}

const bond = new JamesBond(...input[0].split(' '));
bond.getData()