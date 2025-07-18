const modalCloseButton = document.getElementById('form-close-button')

modalCloseButton.addEventListener('click', () => {

    let emailField = document.querySelector('#input-email');
    let phoneField = document.querySelector('#input-phone');
    let serviceTypeField = document.querySelector('#input-service-type');
    emailField.classList.remove('valid', 'invalid');
    phoneField.classList.remove('valid', 'invalid');
    serviceTypeField.classList.remove('valid', 'invalid');


    let okResponseText = document.querySelector('.send-request-ok');
    let errResponseText = document.querySelector('.send-request-error');
    okResponseText.classList.add('invisible');
    errResponseText.classList.add('invisible');

    document.querySelector('.enlist-form').reset();
})