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

//creating card
const addCard = document.querySelectorAll('.balance-create-card button')[0]
const editCard = document.querySelectorAll('.balance-create-card button')[1]
const cardWindow = document.querySelector('#add-card')
const cardWindowForm = cardWindow.querySelector('form')
let cardWindowOpen = false

//card rendering
function RenderAllCards() {

}

//modal creation
let isModalRunning = false
function modalAppear(text) {
    const line = modal.querySelector('div')
    if (!isModalRunning) {
        isModalRunning = true
        line.style.animation = 'modalTime 2.5s linear'
        modal.style.animation = 'modalAppear 0.4s ease-in-out'
        modal.style.opacity = '100%'
        const modalText = modal.querySelector('p')
        modalText.textContent = text
        setTimeout(() => {
            modal.style.opacity = '0'
            modal.style.animation = 'none'
            line.style.animation = 'none'
            isModalRunning = false
        }, 2600);
    }
}

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
//side-bar closer // adding-card closer 
blure.addEventListener('click', e => {
    if (asideOpen) {
        blure.style.animation = 'BlurDissappear 0.3s ease-in-out'
        aside.style.transform = ''
        setTimeout(() => {
            blure.style.display = 'none'
            asideOpen = false
            blure.style.animation = ''
        }, 300);
    }if(cardWindowOpen){
        blure.style.display = ''
        cardWindow.style.display = ''
    }
})

//adding cards
function CardTemp(fullName, accNumber, bank, cardType, branchName, money) {
    this.fullName = fullName
    this.accNumber = accNumber
    this.bank = bank
    this.cardType = cardType
    this.branchName = branchName
    this.money = money

    this.goals = {}
    bils = []
    transactions = []
    expenses = {}
}
addCard.addEventListener('click', e => {
    blure.style.display = 'block'
    cardWindow.style.display = 'block'
    cardWindowOpen = true
})
cardWindowForm.addEventListener('submit',e=>{
    e.preventDefault()
    let fullname
    const accNumber = e.target.accNumber.value
    const bank = e.target.bank.value
    const cardType = e.target.cardType.value
    const branchName = e.target.branchName.value
    const money = e.target.balance.value
    if(accNumber.trim().length != 16 || accNumber.includes("abcdefghijklmnopqrstuvwxyz")){
        modalAppear("enter a valid account number")
        return  
    }
    
    allAccs.forEach(el => {
        if(el.logged && el.keepSigned){
            fullname = el.fullName
        }
    })


})