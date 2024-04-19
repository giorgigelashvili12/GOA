let num1 = parseFloat(prompt("Enter the fisrt number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// 2
let validationName = prompt("Name Here: ");
let validationSurname = prompt("Surname Here");
let validationAge = parseInt(prompt("Age Here: "));

console.log(`Your name is ${validationName}, your surname is ${validationSurname} and your age is ${validationAge}.`);

// 3
let p = document.getElementById("p");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

function submit() {
    let name = inp1.value;
    let surname = inp2.value;

    p.textContent = `Name: ${name}. Surname: ${surname}`;
}