const person = {
    name: 'Jorji',
    surname: 'Gelashvili',
    age: 13
};

person.assign(person, {city: 'Kutaisi'});


const newMe = {};

newMe.assign(newMe, {name: 'Jorji'});
newMe.assign(newMe, {surname: 'Gelashvili'});