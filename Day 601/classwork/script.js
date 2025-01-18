console.log(True && False);
console.log(False && True);
console.log(True && True);
console.log(False && False);

console.log(True || False);
console.log(False || True);
console.log(True || True);
console.log(False || False);


function enterNums() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (num1 > 18 && num2 > 18) {
        alert("Both are greater than 18");
        console.log("Both are greater than 18");
    } else if (num1 > 18 || num2 > 18) {
        alert("One number is greater than 18");
        console.log("One number is greater than 18");
    } else {
        alert("Neither are greater than 18");
        console.error("Neither are greater than 18");
    }
}