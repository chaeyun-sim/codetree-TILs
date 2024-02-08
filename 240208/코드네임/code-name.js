const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const item = input.map(el => el.split(' ')).sort((a, b) => a[1] - b[1])[0]

class CodeName {
    constructor(grade, score) {
        this.grade = grade;
        this.score = score;
    }

    getData() {
        console.log(`${this.grade} ${this.score}`)
    }
}

const codename = new CodeName(item[0], item[1])
codename.getData()