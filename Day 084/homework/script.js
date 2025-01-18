const child = document.getElementById("child-container");

let left = 0;
let y = 0;
let direct = "right"

const moveRight = setInterval(function(){
    if(direct === "right"){
        left++;
        if(left == 300){
            direct == "bottom"
        }
    } else if(direct === "bottom"){
        y++;
        if(y == 300){
            direct == "left";
        }
    } else if(direct === "left"){
        left--;
        if(left == 0){
            direct == "top"
        }
    } else{
        y--;
        if(y === 0 && left === 0){
            clearInterval(moveRight);
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 10);


// 2) შექმენით ამ პროექტის მსგავსი მაგრამ, ბლოკის მოძრაობა უნდა ხდებოდეს კლავიატურის
// მეშვეობით კონკრეტულათ ისრების ღილაკებით, აგრეთვე აკონტროლეთ ის რომ თუ ბლოკი 
// მივა რომელიმე კუთხის კიდეში მაშინ აღარ მისცეთ უფლება რომ მაგ კიდეს გადაცდეს
// დაიხმარეთ ეს ვიდეო

const container = document.getElementById('container'); // width 500px
const cube = document.getElementById('cube'); // width 50px

const positionX = 0;
const poistionY = 0;

document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowUp') {
        cube.style.bottom + 10;
        positionY += 10;

        if(positionY == 450) {
            cube.style.bottom + 0;
            positionX += 0;
        }
    }

    if(e.key === 'ArrowDown') {
        cube.style.top + 10;
        poistionY += 10;

        if(poistionY == 450) {
            cube.style.top + 0;
            positionY += 0;
        }
    }

    if(e.key === 'ArrowLeft') {
        cube.style.left + 10;
        positionX += 10;

        if(positionX == 450) {
            cube.style.left + 0;
            positionX += 0;
        }
    }

    if(e.key === 'ArrowRight') {
        cube.style.right + 10;
        positionY += 10;

        if(positionX == 450) {
            cube.style.right + 0;
            positionX += 0;
        }
    }
});