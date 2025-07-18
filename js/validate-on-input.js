const fio = document.querySelector('#input-fio')

fio.addEventListener('blur', (evt) => {
    if (evt.target.value === '') {
        evt.target.classList.remove('valid');
        evt.target.classList.add('invalid');
    } else {
        evt.target.classList.remove('invalid');
        evt.target.classList.add('valid');
    }
})

const phone = document.querySelector('#input-phone')

phone.addEventListener('blur', (evt) => {
    const regExp = /^\d{6,}$/;
    if (regExp.test(evt.target.value)) {
        evt.target.classList.remove('invalid');
        evt.target.classList.add('valid');
    } else {
        evt.target.classList.remove('valid');
        evt.target.classList.add('invalid');
    }
})

const email = document.querySelector('#input-email');

email.addEventListener('blur', (evt) => {
    const regExp = /^$|^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (regExp.test(evt.target.value)) {
        evt.target.classList.remove('invalid');
        evt.target.classList.add('valid');
    } else {
        evt.target.classList.remove('valid');
        evt.target.classList.add('invalid');
    }
})

const serviceType = document.querySelector('#input-service-type');

serviceType.addEventListener('blur', (evt) => {
    if (evt.target.value === 'Тип услуги') {
        evt.target.classList.remove('valid');
        evt.target.classList.add('invalid');
    } else {
        evt.target.classList.remove('invalid');
        evt.target.classList.add('valid');
    }
})
