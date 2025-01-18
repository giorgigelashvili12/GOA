class Person {
    static greet(name, age) {
        return `Hello, my name is ${name} and I am ${age} years old.`
    }
}

//////////////////////////////////////////////////////////////////////////////////

class Student extends Person {
    static greet(name, age, grade) {
        return `Hello, my name is ${name} and I am ${age} years old. Grades: ${grade}`;
    }

    static study() {
        return `${name} is studying`;
    }
}

//////////////////////////////////////////////////////////////////////////////////

class Calculator {
    static add(a, b) {
      return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
}

//////////////////////////////////////////////////////////////////////////////////

