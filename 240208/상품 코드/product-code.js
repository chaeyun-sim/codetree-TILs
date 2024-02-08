const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class Product {
    constructor(name = "codetree", code = 50) {
    this.name = name;
    this.code = code;
  }

  getData() {
    console.log(`product ${this.code} is ${this.name}`)
  }
}

const product1 = new Product()
product1.getData()

const product2 = new Product(...input[0].split(' '))
product2.getData()