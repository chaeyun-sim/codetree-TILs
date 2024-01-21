const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const obj = {}
input[0].split(' ').map(el => obj[el.length] = el)

const str = Math.max(...Object.keys(obj))
if (Object.keys(obj).length === 1) {
    console.log('same')
} else {
    console.log(`${obj[str]} ${str}`)
}