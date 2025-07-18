const modalCloseButton = document.getElementById('form-close-button')

modalCloseButton.addEventListener('click', () => {


    let fio = document.querySelector('#input-fio')
    let phone = document.querySelector('#input-phone')
    let email = document.querySelector('#input-email');
    let serviceType = document.querySelector('#input-service-type');

    let formFields = [fio, phone, email, serviceType]

    for (let i = 0; i < formFields.length; i++) {
        formFields[i].classList.remove('valid', 'invalid')
    }

    let okResponseText = document.querySelector('.send-request-ok');
    let errResponseText = document.querySelector('.send-request-error');

    okResponseText.classList.add('invisible');
    errResponseText.classList.add('invisible');

    document.querySelector('.enlist-form').reset();
})