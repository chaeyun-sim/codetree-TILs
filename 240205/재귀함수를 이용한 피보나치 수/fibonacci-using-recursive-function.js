const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

function fibonacci(n){
	if(n <= 1) {
		return n; 
	}

    return fibonacci(n-1) + fibonacci(n-2); 
}


console.log(fibonacci(n))