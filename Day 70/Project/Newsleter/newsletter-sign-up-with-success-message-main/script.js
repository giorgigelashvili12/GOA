function subscribe() {
    let emailInput = document.getElementById('emailinp').value.trim();
    let errorMsg = document.getElementById('error');
    let cardCont = document.querySelector('.card-container');
    let successMsg = document.querySelector('.success');

    if (emailInput === '') {
        errorMsg.textContent = 'Email input cannot be blank.'
    } else {
        errorMsg.textContent = '';
        cardCont.style.display = 'none';
        successMsg.style.display = 'block';
    }
}