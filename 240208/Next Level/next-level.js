const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [id, level] = input[0].split(' ')

class Levels {
    constructor (id, level) {
        this.id = id;
        this.level = level;
    }

    getData() {
        console.log(`user ${this.id} lv ${this.level}`)
    }
}

const lev1 = new Levels()
lev1.id = 'codetree'
lev1.level = 10
lev1.getData()

const lev2 = new Levels(id, level);
lev2.getData()