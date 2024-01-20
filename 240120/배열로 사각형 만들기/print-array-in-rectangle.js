const n = 5
const arr = Array(n).fill([]).map(() => Array(n).fill(0))

arr[0].forEach((_, i) => arr[0][i] = 1)
arr.forEach((_, i) => arr[i][0] = 1)

for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 1; j <= arr.length - 1; j++) {
        arr[i][j] = arr[i][j - 1] + arr[i - 1][j]
    }
}

arr.forEach(row => console.log(row.join(' ')))