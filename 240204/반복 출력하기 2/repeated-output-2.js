const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])

const func = () => {
    if (n === 0) return;
    console.log('HelloWorld')
    n--
    return func()
}

func()