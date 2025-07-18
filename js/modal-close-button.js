const modalCloseButton = document.getElementById('form-close-button')

modalCloseButton.addEventListener('click', () => {
    emailField.classList.remove('valid');
    emailField.classList.remove('invalid');
    phoneField.classList.remove('valid');
    phoneField.classList.remove('invalid');

    let okResponseText = document.querySelector('.send-request-ok');
    let errResponseText = document.querySelector('.send-request-error');
    okResponseText.classList.add('invisible');
    errResponseText.classList.add('invisible');

    document.querySelector('.enlist-form').reset();
})