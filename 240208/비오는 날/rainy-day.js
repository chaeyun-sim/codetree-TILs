const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' '))

class RainyDay {
    getDay(input) {
        const days = input.filter(el => el[2] === 'Rain')
        days.sort((a, b) => a[0].localeCompare(b[0]));
        console.log(days[0].join(' '))
    }
}

const rainyday = new RainyDay()
rainyday.getDay(arr)