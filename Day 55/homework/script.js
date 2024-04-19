let num1 = parseFloat(prompt("Enter the fisrt number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// 2
let inpOne = document.getElementById("inpOne");
let inpTwo = document.getElementById("inpTwo");
let inpThree = document.getElementById("inpThree");
let final = document.getElementById("final");

function submitForm() {
    let name = inpOne.value;
    let surname = inpTwo.value;
    let age = inpThree.value;

    final.textContent = `Name: ${name}, Surname: ${surname}, Age: ${age}`;
}
// 3
let p = document.getElementById("p");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

function submit() {
    let text = inp1.value;
    let color = inp2.value;

    let allowedColors = ["Green", "Yellow", "Red", "Blue", "Brown", "Black", "Pink", "Purple"];
    if(allowedColors.includes(color)) {
        p.textContent = text;
        p.style.color = color.toLowerCase();
    }
    else {
        alert("The color you entered in doesn't exist in the system or does not exist at all or you might have not followed the instructions.");
    }
}
