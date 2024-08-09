// OBJECTS

// 1. Create an object to represent a book with properties for title, author, and year published.
const book = {
    title: 'ჯინსების თაობა',
    aurthor: 'დათო ტურაშვილი',
    published_year: 1991
}

// 2. Add a new property to an existing object.
book.genre = 'Drama';
console.log(book.genre);

// 3. Delete a property from an object.
delete book['genre'];

// 4. Access and print the value of a property in an object.
console.log(book.title);
console.log(book.aurthor);
console.log(book.published_year);

// 5. Check if a property exists in an object.
console.log(book.hasOwnProperty());

// 6. Iterate over all properties of an object and print their values.
for(let element in book) {
    console.log(`${book.element}`);
}

// 7. Create an array of objects, each representing a person with name 
const names = {
    name1: 'John',
    name2: 'Jamal',
    name3: 'Jake',
    name4: 'Jonathan'
}

// 8. Find the length of an object (number of properties).
console.log(names.length);

// 9. Create an object with nested objects and access a property from the nested object
const car = {
    manufacturer: 'Honda',
    model: 'Fit',
    year: 2011,
    start: function() {
        console.log('The car has started');
    },
    stop: function() {
        console.log('The car has stopped');
    }
}

// 10. Convert an object into an array of its property values.
const empty_array = [];
for(let element in car) {
    empty_array.push(car[element]);
}
console.log(empty_array);

// 11. Create an array of numbers from 1 to 10.
const num_array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// or
const num_array2 = [];
let i = 0;

while(i <= 10) {
    num_array2.push(i);
    i++;
}

// 12. Add an element to the end of an array.
num_array2.push(11);

// 13. Add an element to the beginning of an array.
num_array2.unshift(0);

// 14. Remove the last element of an array.
num_array2.pop();

// 15. Remove the first element of an array.
num_array2.shift();

// 16. Find the length of an array.
console.log(num_array2.length);

// 17. Access the third element in an array.
console.log(num_array2[3]);

// 18. Iterate over an array and print each element.
for(let num in num_array2) {
    console.log(`${num_array2.num}`);
}

// 19. Create a new array by doubling each element of an existing array.
const new_arr = new num_array2;

// 20. Reverse the order of elements in an array.
new_arr.reverse();