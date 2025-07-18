const phoneField =  document.getElementById('input-phone');

phoneField.addEventListener('input', () => {
    const regExp = /^\d{6,}$/;
    if (regExp.test(phoneField.value)) {
        phoneField.classList.add('valid');
        phoneField.classList.remove('invalid');
    } else {
        phoneField.classList.add('invalid');
        phoneField.classList.remove('valid');
    }
})

const emailField = document.getElementById('input-email');

emailField.addEventListener('input', () => {
    const regExp = /^$|^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (regExp.test(emailField.value)) {
        emailField.classList.add('valid');
        emailField.classList.remove('invalid');
    } else {
        emailField.classList.add('invalid');
        emailField.classList.remove('valid');
    }
})