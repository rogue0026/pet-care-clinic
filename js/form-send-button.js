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

// const sendButton = document.querySelector('.enlist-form__send-button');
// sendButton.addEventListener('click', evt => {
//     evt.preventDefault();
//
//     let fio = document.querySelector('#input-fio')
//     let phone = document.querySelector('#input-phone')
//     let email = document.querySelector('#input-email');
//     let serviceType = document.querySelector('#input-service-type');
//     let extraMessage = document.querySelector('#input-extra-message');
//
//     let fioNotEmpty = (fio.value !== '')
//     if (!fioNotEmpty) {
//         fio.classList.add('invalid')
//     }
//
//     let phoneIsValid = validatePhone(phone.value)
//     if (!phoneIsValid) {
//         phone.classList.add('invalid')
//     }
//
//     let emailIsValid = validateEmail(email.value)
//     if (!emailIsValid) {
//         email.classList.add('invalid')
//     }
//
//     let serviceTypeIsValid = validateServiceType(serviceType.value)
//     if (!serviceTypeIsValid) {
//         serviceType.classList.add('invalid')
//     }
//
//     let allFieldsAreValid = fioNotEmpty && phoneIsValid && emailIsValid && serviceTypeIsValid
//     if (!allFieldsAreValid) {
//         return
//     }
//
//     const requestBody = {
//         fio: fio.value,
//         phone: phone.value,
//         email: email.value,
//         service_type: serviceType.value,
//         extra_message: extraMessage.value
//     };
//
//     console.log(fio.value)
//     console.log(phone.value)
//     console.log(email.value)
//     console.log(serviceType.value)
//     console.log(extraMessage.value)
//
//     sendDataToServer(requestBody)
//         .catch(error => {
//                 let errResponseText = document.querySelector('.send-request-error');
//                 errResponseText.classList.remove('invisible')
//                 console.error('Error while requesting data:', error);
//         })
// })
//
// async function sendDataToServer(requestBody) {
//     let resp = await fetch(URL,
//         {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)})
//     if (!resp.ok) {
//         let errResponseText = document.querySelector('.send-request-error');
//         errResponseText.classList.remove('invisible')
//         throw new Error(`HTTP Error: ${resp.statusText}`)
//     } else {
//         let okResponseText = document.querySelector('.send-request-ok');
//         okResponseText.classList.remove('invisible');
//
//         let fio = document.querySelector('#input-fio')
//         let phone = document.querySelector('#input-phone')
//         let email = document.querySelector('#input-email');
//         let serviceType = document.querySelector('#input-service-type');
//         let extraMessage = document.querySelector('#input-extra-message');
//
//         document.querySelector('.enlist-form').reset()
//         const formFields = [fio, phone, email, serviceType, extraMessage]
//
//         for (let i = 0; i < formFields.length; i++) {
//             formFields[i].classList.remove('valid', 'invalid')
//         }
//     }
// }
//

const sendButton = document.querySelector('.enlist-form__send-button');

sendButton.addEventListener('click', async evt => {
    evt.preventDefault();

    const fio = document.querySelector('#input-fio');
    const phone = document.querySelector('#input-phone');
    const email = document.querySelector('#input-email');
    const serviceType = document.querySelector('#input-service-type');
    const extraMessage = document.querySelector('#input-extra-message');
    const formFields = [fio, phone, email, serviceType, extraMessage];

    const fioNotEmpty = fio.value.trim() !== '';
    const phoneIsValid = validatePhone(phone.value);
    const emailIsValid = validateEmail(email.value);
    const serviceTypeIsValid = validateServiceType(serviceType.value);

    // Удалим старые классы
    formFields.forEach(field => field.classList.remove('invalid'));

    if (!fioNotEmpty) fio.classList.add('invalid');
    if (!phoneIsValid) phone.classList.add('invalid');
    if (!emailIsValid) email.classList.add('invalid');
    if (!serviceTypeIsValid) serviceType.classList.add('invalid');

    const allFieldsAreValid = fioNotEmpty && phoneIsValid && emailIsValid && serviceTypeIsValid;

    if (!allFieldsAreValid) return;

    const requestBody = {
        fio: fio.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        service_type: serviceType.value.trim(),
        extra_message: extraMessage.value.trim()
    };

    try {
        console.log(requestBody)
        await sendDataToServer(requestBody);

        // Успешно — сбрасываем форму и классы
        document.querySelector('.enlist-form').reset();
        formFields.forEach(field => field.classList.remove('valid', 'invalid'));

        const okResponseText = document.querySelector('.send-request-ok');
        okResponseText.classList.remove('invisible');
    } catch (error) {
        const errResponseText = document.querySelector('.send-request-error');
        errResponseText.classList.remove('invisible');
        console.error('Error while requesting data:', error);
    }
});

async function sendDataToServer(requestBody) {
    const resp = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!resp.ok) {
        throw new Error(`HTTP Error: ${resp.status} ${resp.statusText}`);
    }
}
