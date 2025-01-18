// 1.Implement a countdown timer that starts from a specified number of seconds 
// and updates the display every second using setInterval.
let i = 0;
const x = setTimeout(function() {
    i += 1;
    console.log(`${i} seconds passed`);
}, 10000);

// 2.Build a digital clock in console that updates its display every second using
// setInterval, When seaconds reach 60, update the minutes display...
const y = setInterval(function() {
    let seconds = 0;
    seconds++;
    console.log('+', seconds, ' seconds');

    if(seconds == 60) {
        clearInterval(interval);
        console.log('minute passed');
    }
}, 1000);

// 3.Create a script that generates a random number between 1 and 100 every 
// 2 seconds using setInterval.
const z = setInterval(function() {
    console.log(Math.floor(Math.random()));
}, 2000);

// 4.Build a webpage that displays the current date and time and updates
// it every second using setInterval.
const c = setInterval(function() {
    console.log(new Date());
}, 10000);

// 5.Create a function that generates random word from an array every 2 seconds.