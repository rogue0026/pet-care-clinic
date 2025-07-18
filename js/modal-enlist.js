const enlistButton = document.querySelector('.enlist-button')

enlistButton.addEventListener('click', evt => {
    const modalWindow = document.querySelector('.modal');
    modalWindow.classList.add('modal-container');
})

const closeModalWindowButton = document.querySelector('.modal-close-button')

closeModalWindowButton.addEventListener('click', evt => {
    const modalWindow = document.querySelector('.modal');
    modalWindow.classList.remove('modal-container');
})
