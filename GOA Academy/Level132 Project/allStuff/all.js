const allAccs = JSON.parse(localStorage.getItem('finebank-accs')) || []
const modal = document.querySelector('.modal')

//notification
const notisOpener = document.querySelector('.fa-bell')
const notis = document.querySelector('#notis')
let notisOpen = false

//side-bar
const burger = document.querySelector('.burger')
const blure = document.querySelector('#blur')
const aside = document.querySelector('aside')
let asideOpen = false

//modal creation
let isModalRunning = false
function modalAppear(text) {
    const line = modal.querySelector('div');
    const modalText = modal.querySelector('p');
    if (!isModalRunning) {
        isModalRunning = true;
        line.style.animation = 'modalTime 2.5s linear';
        modal.style.animation = 'modalAppear 0.4s ease-in-out';
        modal.style.opacity = '1';
        modal.classList.add('show'); // enable pointer events
        modalText.textContent = text;
        setTimeout(() => {
            modal.style.opacity = '0';
            modal.style.animation = 'none';
            line.style.animation = 'none';
            modal.classList.remove('show'); // disable pointer events again
            isModalRunning = false;
        }, 2600);
    }
}

//sidebar open
burger.addEventListener('click', e => {
    if (!asideOpen) {
        aside.style.transform = 'translateX(0)'
        asideOpen = true
        blure.style.display = 'block'
        blure.style.animation = 'BlurAppear 0.3s ease-in-out'
    }
})
//sidebar / card form close
blure.addEventListener('click', e => {
    if (asideOpen) {
        blure.style.animation = 'BlurDissappear 0.3s ease-in-out'
        aside.style.transform = ''
        setTimeout(() => {
            blure.style.display = 'none'
            asideOpen = false
            blure.style.animation = ''
        }, 300)
    }
    if (cardWindowOpen) {
        blure.style.display = ''
        cardWindow.style.display = ''
        cardWindowForm.reset()
    }
})