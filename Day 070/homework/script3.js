// 1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
for(let i =1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// 3
for(let i = 1; i <= 100; i++) {
    let sum = 0;
    sum += i;
    console.log(sum);
}

// 4
for(let i = 5; i <= 50; i += 5) {
    console.log(i);
}

// 5
for(let i = 10; i >= 10; i--) {
    console.log(i);
}

// 6
let nums = [1, 2, 3, 4, 5];
for(i = 0; i < nums.length; i++) {
    let sum = 0;
    sum += nums;
}

// 7
let digits = [10, 5, 8, 20, 2];
for(i = 0; i < digits.length; i++) {
    let maxnum = Math.max(digits);
    console.log(maxnum);
}