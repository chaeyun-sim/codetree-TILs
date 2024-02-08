const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class Bomb {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }

    getData() {
        console.log(`code : ${this.code}`)
        console.log(`color : ${this.color}`)
        console.log(`second : ${this.second}`)
    }
}

const bomb = new Bomb(...input[0].split(' '))
bomb.getData()