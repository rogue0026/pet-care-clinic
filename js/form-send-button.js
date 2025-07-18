const URL = 'https://vet-stupino.ru/api/enlist';

function validatePhone(phoneValue) {
    const regExp = /^\d{6,}$/;
    return regExp.test(phoneValue);
}

function validateEmail(emailValue) {
    const regExp = /^$|^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return regExp.test(emailValue)
}

function validateServiceType(serviceTypeValue) {
    return serviceTypeValue !== 'Тип услуги';
}

const sendButton = document.querySelector('.enlist-form__send-button');
sendButton.addEventListener('click', evt => {
    evt.preventDefault();

    let fio = document.querySelector('#input-fio')
    let phone = document.querySelector('#input-phone')
    let email = document.querySelector('#input-email');
    let serviceType = document.querySelector('#input-service-type');
    let extraMessage = document.querySelector('#input-extra-message');


    let fioNotEmpty = (fio.value !== '')
    let phoneIsValid = validatePhone(phone.value)
    let emailIsValid = validateEmail(email.value)
    let serviceTypeIsValid = validateServiceType(serviceType.value)

    let allFieldsAreValid = fioNotEmpty && phoneIsValid && emailIsValid && serviceTypeIsValid

    if (!fioNotEmpty) {
        fio.classList.add('invalid')
    }

    if (!phoneIsValid) {
        phone.classList.add('invalid')
    }
    if (!emailIsValid) {
        email.classList.add('invalid')
    }
    if (!serviceTypeIsValid) {
        serviceType.classList.add('invalid')
    }

    if (!allFieldsAreValid) {
        return
    }

    const enlistForm = document.querySelector('.enlist-form')
    enlistForm.reset()
    const formFields = [fio, phone, email, serviceType, extraMessage]
    for (let i = 0; i < formFields.length; i++) {
        formFields[i].classList.remove('valid', 'invalid')
    }
    const requestBody = {
        fio: fio.value,
        phone: phone.value,
        email: email.value,
        service_type: serviceType.value,
        extra_message: extraMessage.value
    };

    sendDataToServer(requestBody)
        .catch(error => {
                let errResponseText = document.querySelector('.send-request-error');
                errResponseText.classList.remove('invisible')
                console.error('Error while requesting data:', error);
        })
})

async function sendDataToServer(requestBody) {
    let resp = await fetch(URL,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)})
    if (!resp.ok) {
        let errResponseText = document.querySelector('.send-request-error');
        errResponseText.classList.remove('invisible')
        throw new Error(`HTTP Error: ${resp.statusText}`)
    } else {
        let okResponseText = document.querySelector('.send-request-ok');
        okResponseText.classList.remove('invisible');
    }
}

