function submitInfo() {
    const inp1 = document.getElementById('inp1').value.trim();
    const inp2 = document.getElementById('inp2').value.trim();
    const inp3 = document.getElementById('inp3').value;
    const inp4 = document.getElementById('inp4').value.trim();

    let name = inp1;
    let surname = inp2;
    let age = inp3;
    let pass = inp4;

    const greet = document.getElementById('greet');
    let user = document.getElementById('username');
    let accImg = document.getElementById('accImg');
    let ageElemnt = document.getElementById('ageElement');

    if(pass.length < 8) {
        greet.textContent = 'Password length should be more than 8 characters!';
        greet.style.color = 'red';
    } else {
        greet.textContent = `Welcome, ${name} ${surname}!`;
        greet.style.color = 'black';
    }

    if (name = '' || surname == '') {
        greet.textContent = 'Blank name or surname.'
        greet.style.color = 'red';
    } else {
        user.textContent = `${name} ${surname}`;
        accImg.src = 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png';
        ageElemnt.textContent = `Age: ${age}`;
    }
}