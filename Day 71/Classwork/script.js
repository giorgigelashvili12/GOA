// შექმენით მანქანის ობიექტი რომელსაც ექნება 4 კუთვნილება: მანქანის ბრენდი, მოდელი, ამჟამინდელი სიცქარე და მაქსიმალური სიჩქარე. 
// გექნებათ 3მეთოდი 
// 1) აქსელერაციის მეთოდი რომელიც ამჟამინდელ სიცჩაქრეს ყოცველ გამოძახებაზე მოუმატებს 10ს,
// 2) შექმენით კიდევ ერთი მეთოდი დექსელარცია რომელიც ყოველ გამოძახებაზე მოაკლებდა 10ს თუკი ტოპ სიჩქარეზეა მაშინ დაპრინტეთ რომ 
// მაქსიმალურ სიჩქარეზეა და დექსელარიიცს მეთოდში თუკი სიჩქარე 0ის ტოლია დაწერეთ  რომ აღარ დაამატოს. 
// 3) დაპრინტავს ამჟამინდელ სიჩქარეს. გამოიძახეთ რამდენიმეჯერ რომ გატესტოთ მეთოდების მუშაობა და კომენტარებით ახსენით რა 
// არის ობიექტი რა არის კუთვნილება და რა არის მეთოდი. როდესაც გატესტავთ სულ ბოლოს წაშალეთ მანქანის მოდელის კუთვნილება
const vehicle = {
    manufacturer: 'Toyota',
    model: 'Camry',
    speed: 0,
    maxSpeed: 210,
    accelaration: function() {
        if(this.speed <= this.maxSpeed) {
            this.speed += 10; 
            // checks if current speed isnt more than maxspeed, if not increase speed by 10
        } else {
            this.speed = this.maxSpeed
            console.log('Going on full speed.');
            // if current speed is equal to max speed stop.
        }
    },
    decelaration: function() {
        if(this.speed >= 0) {
            this.speed += 0;
            console.log("Can't go any less. Current speed: ", this.speed, 'KM/H.');
            // checks if current speed is more or equal to 0. If yes, can't decrease speed
        } else if(this.speed == this.maxSpeed){
            console.log('The car is on max speed. Currently: ', this.speed, 'KM/H.');
            // checks if the car is going on max speed
        } else {
            this.speed -= 10;
            // if any condition is false slow down/decrease speed by 10
        }
    }
}

console.log(vehicle); // prints the whole object
console.log(vehicle.manufacturer); // prints the objects 'manufacturer' parameter
console.log(vehicle.model);// prints the objects 'model' parameter
console.log(vehicle.speed); // prints the objects 'speed' parameter
console.log(vehicle.maxSpeed); // prints the objects 'maxSpeed' parameter
console.log(vehicle.accelaration); // prints the objects 'accelaration' func/parameter
console.log(vehicle.decelaration); // prints the objects 'decelaration' func/parameter

// Object - განკუთვნილი ობიექტის აგებულება რომელსაც ააჩნია თავისი ელემენტები. უფრო მარტივად, ყველაფერი ცოცხალი თუ არა ყველა არის ობიექტი.
// მაგ. სახლი ადამიანი და ა.შ. ამ ობიექტებს გააჩნიათ თავიანთი კუთვნილება. ადამიანიც ობიექტია, ჩვენი კუთვნილებაა ჩვენივე სხეულის აგებულება:
// თავი, მკლავი, ტანი და ა.შ. ობიექტებს ასევე გააჩნიათ მეთოდები. მეთოდები არის იგივე ფუნქციები რომლებიხ გაწერილი არის ობიექტში, მათი საშვლაბეით
// შეგვიძლია ვიმუშაოთ ობიექტების კუთვნილებებზე და მათ მნიშვნელობებზე. ადამიანში შეიძლება მარტივად ითქვას ჩვენივე მოძრაობა. ხელი - ობიექტის კუთვნილება
// მისი მეთოდი კი მოძრაობაა, ჯავასკრიფტში კუთვნილების მანიპულაცია და მუშაობა მეთოდებით/ფუნქციებით.

function Vehicle(model, currentSpeed, maxSpeed) {
    this.model = model;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
}

const car1 = new Vehicle('Ford Mustang', 0, 255);
const car2 = new Vehicle('Toyota Camry', 0, 217);
const car3 = new Vehicle('Honda Fit', 0, 200);
const car4 = new Vehicle('Honda Civic', 0, 272);
const car5 = new Vehicle("BMW 3", 0, 250);

// Explanation
// function Vehicle - simply, this function is a blueprint
// using new keyword while declaring - new object allows you to create an instant/copy/clone (whatever to make it sound easier) that 
// in this example uses our very own blueprint (Vehicle()), and with the help of it we can create a new object with same properties but 
// different values without any hard work.