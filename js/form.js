const sendButton = document.querySelector('.enlist-form__send-button');
sendButton.addEventListener('click', evt => {
    const URL = 'http://localhost:8080/enlist';

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
            console.log('Ответ сервера:', result);
        })
        .catch(error => {
            console.error('Ошибка при выполении запроса:', error);
        })
})
