const container = document.querySelector('.container');
const registerbtn = document.querySelector('.register-btn');
const loginbtn = document.querySelector('.login-btn');

registerbtn.addEventListener('click', () => {
    container.classList.add('active'); // Corrected from comma to dot
});

loginbtn.addEventListener('click', () => {
    container.classList.remove('active'); // Corrected the variable name
});