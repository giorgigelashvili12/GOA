// შექმენით ანიმაცია რაიმე დივზე, რომელიც იმოძრავებს მარჯვნივ, როდესაც ავა 500 პიქსელზე ამ დივმა მოძრაობა უნდა შეწყვიტოს
const div = document.getElementById('div');
const container = document.getElementById('container');

let x = 0;
let y = 0;
let direct = "right"

const limitedMovement = setInterval(() => {
    if(x === 500) {
        x += 0;
    }

    div.style.left = x + 'px';
    div.style.top = y + 'px';
}, 2000);