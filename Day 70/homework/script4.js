// 1
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

// 2
function multiplyNumbers(num1, num2) {
    console.log(num1 * num2);
}

// 3
function calculateRectangleArea(width, height) {
    console.log(width * height);
}

// 4
function calculateCircleCircumference(radius) {
    const PI = 3.14;
    let circumference = 2 * PI * radius;
    console.log(circumference);
}

// 5
function isEven(num) {
    if(num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

// 6
function findMax(num1, num2) {
    if(num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

// 7
function reverseString(str) {
    let arrStr = str.split('');
    arrStr.reverse();
    let reversed = arrStr.join(' ');

    console.log(reversed);
}

// 8
function generateNumbersArray(n) {
    for(i = 0; n <= i; i++) {
        let arr = i.split('');
        console.log(arr);
    }
}

// 9
function sumArray(arr) {
    console.log(Math.max(arr));
}

// 10
// ?