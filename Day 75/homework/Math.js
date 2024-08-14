// 1.Write a function that generates a random integer between a specified minimum and maximum value.
function random(min, max) {
    if(min > max) {
        console.error("Minimal number can't be more than the maximum number");
    }

    const randomNumFull = Math.floor(Math.random());
    console.log(randomNumFull * (max - min + 1) + min);
}

// 2.Implement a function that takes a number as input and calculates its square root.
function getSquareRoot(mainNum, num) {
    const finalNum = Math.sqrt(mainNum, num);
}

// 3.Write a function that rounds a given number to the nearest integer.
function roundGivenNum(num) {
    console.log(Math.round(num));
}

// 4.Implement a function that rounds down a given number to the nearest integer.
function roundDown(num) {
    console.log(Math.floor(num));
}

// 5.Write a function that rounds up a given number to the nearest integer.