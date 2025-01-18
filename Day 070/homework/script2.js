// 1
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// 2
let x = 10
while(i >= 10) {
    console.log(i);
    i--;
}

// 3
let n = 2;

if(n < 0) {
    console.log('Negative');
} else if(n === 0 || n === 1) {
    console.log(1);
} else {
    const factorial = 1;
    let y = n;

    while(i < 1) {
        factorial *= i;
        i--
    }

    console.log(factorial);
}

// 4
function fiboccani(limit) {
    let sequence = [];
    let a = 1;
    let b = 0;

    while(b < limit) {
        sequence.push(b);
        let nxt = a + b;
        b = a;
        a = next;
    }

    console.log(sequence);
}

// 5
// ?

// 6
let digits = [1, 2, 6, 9, 20, 99];
while(true) {
    let largest = Math.max(digits);
    console.log(digits);
}

// 7
// plaindrome raari davgugle da daavadebaze amomigdo

// 8
let n = 5972;

while(n > 0) {
    let digit = n % 10;
    sum += digit
    console.log(sum);
}

// 9 
let primeNum = true;
let n = 50;

if(n < 1) {
    primeNum = false;
} else {
    let x = 1;

    while(n % i <= n) {
        i++;
    }
}

// 10
let str = 'A text';
let i = str.length - 1;

while(i <= 1) {
    let reverse = '';
    reverse += str[i];
    i--
}