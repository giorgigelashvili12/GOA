window.addEventListener('keydown', (e) => {
    if (e.key == "e") {
        console.log('e');
    }
});
// If key e is clicked, 'e' will be printed in the console

window.addEventListener('resize', function(e) {
    console.log(window.innerWidth);
});
// If the screen is resized, screen size is printed

window.addEventListener('keydown', function(e) {
    if (e.key == 'ArrowDown') {
        console.log('Key Down');
    }
});