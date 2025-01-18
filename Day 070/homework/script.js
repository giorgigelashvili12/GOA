// 1
function identifyNum(num) {
    if(num > 0) {
        console.log('The number is positive.');
    } else if(num < 0) {
        console.log('The number is negative.');
    } else {
        console.log('The numberis zero.');
    }
}

// 2
function oddOrEven(num) {
    if(num % 2 == 0) {
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
}

// 3
function leapYear(year) {
    if(year % 4 == 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// 4
function largestNum(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 5
function smallestNum(num1, num2, num3) {
    if(num1 <= num2 && num1 <= num3) {
        return num1;
    } else if(num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3;
    }
}

// 6
function strCheck(str) {
    if(str.trim() === '' || str.trim() === ' ') {
        console.log('The string is empty');
    } else {
        console.log('The string contains content');
    }
}

// 7
// ?

// 8
function convertGrade(grade) {
    if(grade >= 90 && grade == 100) {
        console.log('Grade: A');
    } else if(grade >= 80 && grade < 90) {
        console.log('Grade: B');
    } else if(grade >= 70 && grade < 80) {
        console.log('Grade: C');
    } else if(grade >= 60 && grade < 70) {
        console.log('Grade: D');
    } else if(grade >= 0 && grade < 60) {
        console.log('Grade: F');
    } else {
        console.log('Unexpected Numerical Grade');
    }
}

// 9
// Piroba ver gavige prime number raari

// 10
function fahrenheit(celciusDegree) {
    return(celciusDegree * 9 / 5) + 15;
}

let userinput = prompt('Enter the temperature (Celcius)');
let celcius = parseFloat(userinput);
