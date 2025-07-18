const sendButton = document.querySelector('.enlist-form__send-button');
const URL = 'https://vet-stupino.ru/api/enlist';

sendButton.addEventListener('click', evt => {
    evt.preventDefault();

    let fio = document.querySelector('#input-fio')
    let phone = document.querySelector('#input-phone')
    let email = document.querySelector('#input-email');
    let serviceType = document.querySelector('#input-service-type');
    let extraMessage = document.querySelector('#input-extra-message');

    if (serviceType.value === 'Тип услуги') {
        serviceType.classList.add('invalid')
        return
    } else {
        if (serviceType.classList.contains('invalid')) {
            serviceType.classList.remove('invalid')
        }
    }

    const requestBody = {
        fio: fio.value,
        phone: phone.value,
        email: email.value,
        service_type: serviceType.value,
        extra_message: extraMessage.value
    };

    const enlistForm = document.querySelector('.enlist-form')
    enlistForm.reset()
    phoneField.classList.remove('valid', 'invalid');
    emailField.classList.remove('valid', 'invalid');

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