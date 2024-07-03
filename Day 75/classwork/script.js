const time = new Date();
// this code outputs the standart time of where you are currently

const time1 = new Date('2024-03-25');
// Fri Mar 25 2024 04:00:00 GMT+0400 (Georgia Standart Time)
// outputs the time and day of the date that is put it the Date() object

// There are 9 ways to create a new date object
new Date() // WeekDay/Month/Day/Time
new Date(/* Date string */);
new Date(/*year, month*/);
new Date(/*year, month, day*/);
new Date(/*year, month, day, hours*/);
new Date(/*year, month, day, hours, minutes*/);
new Date(/*year, month, day, hours, minutes, seconds*/);
new Date(/*year, month, day, hours, minutes, seconds, ms*/);
new Date(/*Milliseconds*/);

const time2 = new Date(2008, 11, 24, 10, 33, 30, 0);
              new Date(/*year, month, day, hours, minutes, seconds, ms*/);

// JS counts months from 0 to 11
// January = 0
// December = 11

time = new Date();
console.log(time.toString());
// Convert date to string

time.toDateString();
// Wed Jul 03 2024
// More simple

time.setHours(10); // - Set method
// 10 - and more


const v = setTimeout(function() {
    console.log('2 seconds passed');
}, 2000);
// starts the function after 2 seconds/2000 ms

v = setTimeout(function() {
    console.log('2 seconds passed');
}, 2000);

console.log(v);
console.log(v);
// also logs how many times setinterval is used

// VARJISHI
const time = new Date();

console.log(time.setFullYear(1023));
console.log(time.getMilliseconds(2));
console.log(time.getSeconds(20));
console.log(time.getDay(4));
console.log(time.getMinutes(15));
console.log(time.getMonth(6));

let userdate = new Date();
console.log(userdate);

// timer
const interval = setInterval(function() {
    let seconds = 0;
    seconds++;
    console.log(seconds, 'seconds passed');

    if(seconds == 10) {
        clearInterval(interval);
    }
}, 1000);



setTimeout(function() {
    console.log('5 seconds have passed');
}, 5000);

const y = setInterval(function() {
    let seconds = 0;
    seconds++;
    console.log('+', seconds, ' seconds');

    if(seconds == 60) {
        clearInterval(interval);
        console.log('minute passed');
    }
}, 1000);

const z = setInterval(function() {
    const time = new Date();
    console.log(time);

    console.log(time.setFullYear(1023));
    console.log(time.getMilliseconds(2));
    console.log(time.getSeconds(20));
    console.log(time.getDay(4));
    console.log(time.getMinutes(15));
    console.log(time.getMonth(6));  
}, 1000)


// MATH JS
console.log(Math.round(3.4));
// damrgvaleba
// 3
console.log(Math.round(3.5));
// 4

console.log(Math.floor(3.6));
// yvelaze mcire
// 3

console.log(Math.ceil(3.1));
// yvelaze didi
// 4

console.log(Math.trunc(3.2));
// chamoawris
// 2