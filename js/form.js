const sendButton = document.querySelector('.enlist-form__send-button');
sendButton.addEventListener('click', evt => {
    evt.preventDefault();

    const URL = 'http://vet-stupino.ru/api/enlist';
    let okResponseText = document.querySelector('.send-request-ok');
    if (!okResponseText.classList.contains('invisible')) {
        okResponseText.classList.add('invisible');
    }

    let errResponseText = document.querySelector('.send-request-error');
    if (!errResponseText.classList.contains('invisible')) {
        errResponseText.classList.add('invisible')
    }

    let fio = document.getElementById('input-fio');
    let phone = document.getElementById('input-phone');
    let email = document.getElementById('input-email');
    let serviceType = document.getElementById('input-service-type');
    let extraMessage = document.getElementById('input-extra-message');

    const requestBody = {
        fio: fio.value,
        phone: phone.value,
        email: email.value,
        service_type: serviceType.value,
        extra_message: extraMessage.value
    };

    const enlistForm = document.querySelector('.enlist-form')
    enlistForm.reset()
    phoneField.classList.remove('valid');
    phoneField.classList.remove('invalid');
    emailField.classList.remove('valid');
    emailField.classList.remove('invalid');

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            let okResponseText = document.querySelector('.send-request-ok');
            okResponseText.classList.remove('invisible');
            console.log('Ответ сервера:', result);
        })
        .catch(error => {
            let errResponseText = document.querySelector('.send-request-error');
            errResponseText.classList.remove('invisible')
            console.error('Ошибка при выполении запроса:', error);
        })
})

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