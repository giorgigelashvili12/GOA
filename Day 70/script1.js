// 1
const personInfo = {
    name: 'Name',
    surname: 'Surname',
    age: 'Age'
}
// to modify changed:
// personInfo.name = 'The changes/content'

// 2
console.log(personInfo);
console.log(personInfo.name);
console.log(personInfo.surname);
console.log(personInfo.age);

// 3
personInfo.email = 'example@example.com';

// 4
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
delete vehicle.model // deletes the car model parameter

// 5
// ?

// 6
vehicle.model = 'BMW 3';

// 7
// ?