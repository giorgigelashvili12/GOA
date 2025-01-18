// First Homework
function infoJoin() {
    // Create needed elements
    let finalParagraph = document.getElementById("finalParagraph");
    // to output final sentence in html
    let errorCode = document.getElementById("errorCode");
    // to warn user about the errors

    // Prompt for user information
    let name = window.prompt("Hello, what's your first name?");
    let surname = window.prompt("And what's your surname?");
    let age = window.prompt("Okay, how old are you?");
    let livingPlace = window.prompt("Where do you live?");
    let hobby = window.prompt("What's your hobby/hobbies?");

    // build the final sentence
    let final = "Your name is " + name + " and your surname is " + surname + ". You are " + age + " years old. You live in/on " + livingPlace + " and your hobby is/hobbies are " + hobby + ".";
    console.log(final); // Output to console for testing

    // Handle age input validation
    if(isNaN(parseInt(age))) { // isNaN is better because != expression might not behave/work correctly as we want it to work
        window.alert("Age must be a number. Please enter a valid age.");
        if (finalParagraph) finalParagraph.textContent = "Syntax Error.";
        if (errorCode) errorCode.textContent = "Age must be a number. Please enter a valid age.";
        return; // break the function since an error was detected 
    }

    // Output the final sentence to HTML
    if (finalParagraph) {
        finalParagraph.textContent = final;
    } else if (errorCode) {
        errorCode.textContent = "Paragraph with id 'finalParagraph' was not found in this HTML document.";
    } else {
        console.error("Neither 'finalParagraph' nor 'errorCode' elements were found in the HTML document.");
    }
}

// infoJoin();
// activate the function

// Second Homework
function ageCheck() {
    // create html element to output the function result
    let result = document.getElementById("result");
    let age = window.prompt("Please, enter your age");

    if(age > 18) {
        result.textContent = "You are old enough, accepted!";
        console.log("You are old enough, accepted!");
    } else if(age == 18) {
        result.textContent = "You are old enough, accepted!";
        console.log("You are old enough, accepted!");
    } else if(isNaN(parseInt(age))) {
        result.textContent = "Error. Please enter a valid number.";
        console.error("Error. Please enter a valid number.");
        console.error("Your input is " + typeof(age));
    } else {
        alert("You are very young! Declined. Everything this page contains will be hidden from you.")
        console.log("You are very young! Declined.");

        document.body.style.display = "none";
    }
}

// ageCheck();

// Third homework
function alerter() {
    alert("Button was clicked");
}

// alerter();

// Fourth homework
let demoParagraph = document.getElementById("demo");

function changeEvent() {
    demoParagraph.style.color = "green";
}

// Fifth Homework
document.addEventListener("DOMContentLoaded", function() {
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");

    p1.style.color = "red";
    p2.style.color = "blue";
    p3.style.color = "green";
    p4.style.color = "yellow";
});
