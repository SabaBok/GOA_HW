const notisOpener = document.querySelector('.fa-bell')
const notis = document.querySelector('#notis')
let notisOpen = false

const burger = document.querySelector('.burger')
const blure = document.querySelector('#blur')
const aside = document.querySelector('aside')
let asideOpen = false

//notification opener
notisOpener.addEventListener('click', e => {
    if (!notisOpen) {
        notis.style.display = 'flex'
        notisOpen = true
        notis.style.animation = 'NotisAppear 0.4s ease-in-out'
    } else {
        notis.style.animation = 'NotisDissappear 0.4s ease-in-out'
        setTimeout(() => {
            notis.style.display = 'none'
            notisOpen = false
        }, 380);
    }
})

//side-bar opener
burger.addEventListener('click', e => {
    if (!asideOpen) {
        aside.style.transform = 'translateX(0)'
        asideOpen = true
        blure.style.display = 'block'
        blure.style.animation = 'BlurAppear 0.3s ease-in-out'
    }
})
//side-bar closer
blure.addEventListener('click',e=>{
    if(asideOpen){
        blure.style.animation = 'BlurDissappear 0.3s ease-in-out'
        aside.style.transform = ''
        setTimeout(() => {
            blure.style.display = 'none'
            asideOpen = false
            blure.style.animation = ''
        }, 300);
    }
})