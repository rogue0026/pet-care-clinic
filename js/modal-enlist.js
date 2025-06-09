const enlistButton = document.querySelector('.enlist-button')
enlistButton.addEventListener('click', evt => {
    const modalWindow = document.querySelector('.modal');
    modalWindow.classList.add('modal-container');
})

const closeModalWindobButton = document.querySelector('.modal-close-button')
closeModalWindobButton.addEventListener('click', evt => {
    const modalWindow = document.querySelector('.modal');
    modalWindow.classList.remove('modal-container');
})


const sendButton = document.querySelector('.enlist-form__send-button');
sendButton.addEventListener('click', evt => {
    const URL = 'http://localhost:8080/enlist';

    let fio = document.getElementById('input-fio').value;
    let phone = document.getElementById('input-phone').value;
    let email = document.getElementById('input-email').value;
    let serviceType = document.getElementById('input-service-type').value;
    let extraMessage = document.getElementById('input-extra-message').value;

    const requestBody = {
        fio: fio,
        phone: phone,
        email: email,
        service_type: serviceType,
        extra_message: extraMessage
    };

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
