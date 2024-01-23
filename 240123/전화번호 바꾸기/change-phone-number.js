const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const phone = input[0].split('-')
const str = [phone[0], phone[2], phone[1]].join('-')
console.log(str)