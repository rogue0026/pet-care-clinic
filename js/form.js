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

const serviceTypeField = document.querySelector('#input-service-type')
serviceTypeField.addEventListener('change', (evt) => {
    if (serviceTypeField.value === 'Тип услуги' && !serviceTypeField.classList.contains('invalid')) {
        serviceTypeField.classList.add('invalid');
        return
    }
    if (serviceTypeField.value !== 'Тип услуги') {
        if (serviceTypeField.classList.contains('invalid')) {
            serviceTypeField.classList.remove('invalid');
        }
        serviceTypeField.classList.add('valid');
    }
})