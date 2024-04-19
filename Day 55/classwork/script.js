// დავალება: შექმენით ფუნქცია, რომელიც მიიღებს რიცხვს, შემდეგ კი შეასრულებს არითმეტიკულ მოქმედებებს - გაამრავლებს ორზე,
// გაყოფს ორზე, აიყვანს მეორე ხარისხში. დაიცავით საუკეთესო პრაქტიკები და გაითვალისწინეთ დღეს ახსნილი მასალა
let num1 = parseInt(prompt("Enter a random number for some math calculations: "));
let num2 = parseInt(prompt("Enter a random number for some math calculations: "));

function getNumFunc() {
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let division = num1 / num2;
    let multiplication = num1 * num2;

   print(addition);
   print(subtraction);
   print(division);
   print(multiplication);
}

getNumFunc();

//დავალება: 4 promt-ის გამოყენებით მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და საცხოვრებელი ადგილი. 
//თითოეული შეინახეთ ცვლადში, საბოლოოდ კი დაბეჭდეთ ერთ დიდ წინადადებაში
let name = prompt("What's your name? ");
let surname = prompt("What's your surname? ");
let age = parseInt(prompt("What's your age? "));
let adress = prompt("What's your adress? ");

print(name);
print(surname);
print(age);
print(adress);