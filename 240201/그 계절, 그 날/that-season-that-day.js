const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return 'Spring';
    } else if (month >= 6 && month <= 8) {
        return 'Summer';
    } else if (month >= 9 && month <= 11) {
        return 'Fall';
    } else {
        return 'Winter';
    }
}

function validateDate(Y, M, D) {
    if (M < 1 || M > 12 || D < 1) {
        return -1;
    }

    if (M === 2) {
        if (isLeapYear(Y) && D > 29) {
            return -1;
        } else if (!isLeapYear(Y) && D > 28) {
            return -1;
        }
    } else if ((M === 4 || M === 6 || M === 9 || M === 11) && D > 30) {
        return -1;
    } else if (D > 31) {
        return -1;
    }

    return getSeason(M);
}

console.log(validateDate(...input[0].split(' ').map(Number)))