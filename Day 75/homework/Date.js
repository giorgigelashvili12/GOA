// 1.Write a JavaScript function to display the current date in the format "MM/DD/YYYY".
function getMonthDayYear() {
    const currTime = new Date();
    let month = currTime.getMonth();
    let day = currTime.getDay();
    let year = currTime.getFullYear();

    console.log(`${month}/${day}/${year}`);
}

// 2.Create a script that shows the current time in the format "HH:MM"
function getHrMin() {
    const currTime = new Date();
    let hour = currTime.getHours();
    let min = currTime.getMinutes();
    
    console.log(`${hour}:${min}`);
}

// 3.Write a function that takes a number(1-7) as input and returns the day of the week (e.g., "Monday", "Tuesday") for that number.
const userInp = prompt('Enter a number from 1 to 7. (1-7');

function returnDay() {
    if(userInp === 1) {
        console.log(new Date("Monday"));
    } else if(userInp === 2) {
        console.log(new Date("Tuesday"));
    } else if(userInp === 3) {
        console.log(new Date("Wednesday"));
    } else if(userInp === 4) {
        console.log(new Date("Thursday"));
    } else if(userInp === 5) {
        console.log(new Date("Friday"));
    } else if(userInp === 6) {
        console.log(new Date("Saturday"));
    } else if(userInp === 7) {
        console.log(new Date("Sunday"));
    } else {
        console.error('An error occured.');
    }
}

// 4.Develop a function that calculates the number of days between two given dates.
console.log(Math.sum(new Date()));

// 5.Create a function to format a given date object into a custom format, like "YYYY-MM-DD".
const currDate = new Date();
const dateObj = {
    year: currDate.getFullYear(),
    month: currDate.getMonths(),
    day: currDate.getDay()
}

