// HTML
/* <p id="p1">Hi</p>
<p id="p2">Bye</p>
<p id="p3">What Now?</p> */
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

console.log(p1);
console.log(p2);
console.log(p3);


const myInfo = {
    name: "Giorgi",
    age: 13,
    birthday: "2011 March 10"
}

const friendInfo = {
    name: "Luka",
    age: 13,
    birthday: "2011 March 19"
}

let ptwo = document.getElementById("p1");
let pone = document.getElementById("p2");
function change() {
    pone.textContent = "Bye";
    ptwo.textContent = "Hi";
}

// 1
function addition(num1, num2) {
    return num1 + num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

console.log(addition(2, 4));
console.log(multiplication(5, 7));

// 2
function greet(name) {
    return "Hello " + name + "!";
}

greet("nameHere");

// 3
function mathFunc(num1, num2, num3) {
    return (num1 + num2) * num3;
}

// 4
function isluwiornat(num1) {
    if(num1 % 2) {
        return "Luwia";
    } else {
        return "Kentia"
    }
}

// 5 
function samkurtedisGverdebi(first, second, third) { // inglisurad agar maxsovs
    return first + " " + second + " " + third
}

// another 1
const carInfo = {
    manufacturer: "Honda",
    model: "Fit",
    color: "Silver",
    year: 2001,
    start: function() {
        return "Start";
    },
    break: function() {
        return "Break";
    }
}

carInfo.start()
carInfo.break()

// 2
const info = {
    name: "name",
    surname: "surname",
    age: "age",
    full: function() {
        return "Their name is " + this.name + ". Their surname is " + this.surname + ", and their age is" + this.age;
        // here age is string, for number + parseInt(this.age);
    }
}