const allAccs = JSON.parse(localStorage.getItem('finebank-accs')) || []
const modal = document.querySelector('.modal')

//notification
const notisOpener = document.querySelector('.fa-bell')
const notis = document.querySelector('#notis')
let notisOpen = false
let newNotis = false

//side-bar
const burger = document.querySelector('.burger')
const blure = document.querySelector('#blur')
const aside = document.querySelector('aside')
let asideOpen = false

//creating card
const balanceCont = document.querySelector('.balance-cont')
const addCard = document.querySelectorAll('.balance-create-card button')[0]
const editCard = document.querySelectorAll('.balance-create-card button')[1]
const cardWindow = document.querySelector('#add-card')
const cardWindowForm = cardWindow.querySelector('form')
let cardWindowOpen = false

//card rendering
async function RenderAllCards() {
    balanceCont.innerHTML = "";

    let user = allAccs.find(user => user.logged && user.keepSigned);
    if (!user) return;

    let html = "";

    for (let card of user.cards) {
        const cardInfo = await setCardBrand(card.accNumber);

        html += `
            <div class="balance-card">
                <div class="balance-card-top">
                    <p>${card.cardType}</p>
                    <div>
                        <span>${card.bank}</span>
                        <img src="${cardInfo.logo}" alt="">
                    </div>
                </div>

                <div class="balance-card-mid">
                    <div>
                        <p>${card.accNumber}</p>
                        <span>Account Number</span>
                    </div>

                    <div>
                        <p>$${card.money}</p>
                        <span>Total Amount</span>
                    </div>
                </div>

                <div class="balance-card-bot">
                    <button onClick='removeCard(event)'>Remove</button>
                    <button>Details <i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        `;
    }

    html += `
        <div class="balance-create-card">
            <button onClick='displayCardAdd()'>Add Account</button>
            <button>Edit Accounts</button>
        </div>
    `;

    balanceCont.innerHTML = html;
}

RenderAllCards()

function removeCard(e) {
    const parent = e.target.closest('.balance-card')
    const accNumb = parent.querySelector('.balance-card-mid div p').textContent
    let user = allAccs.find(user => user.logged && user.keepSigned)
    if (!user) return
    for (let i = 0; i < user.cards.length; i++) {
        if (user.cards[i].accNumber == accNumb) {
            user.cards.splice(i, 1)
            break
        }
    }
    parent.style.opacity = '0'
    setTimeout(() => {
        parent.remove()
        localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
        modalAppear('the card has been removed')
    }, 200);

    //parent.remove()
    //localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
    //modalAppear('the card has been removed')
}
function seeDetaild(e) {

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
        if (newNotis) {
            newNotis = false
            notisOpener.classList.remove('notis')
        }
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
    } if (cardWindowOpen) {
        blure.style.display = ''
        cardWindow.style.display = ''
        cardWindowForm.reset()
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
    this.bils = []
    this.transactions = []
    this.expenses = {}
}
function displayCardAdd() {
    blure.style.display = 'block'
    cardWindow.style.display = 'block'
    cardWindowOpen = true
}
cardWindowForm.addEventListener('submit', async e => {
    e.preventDefault()
    let acc = allAccs.find(user => user.logged && user.keepSigned)
    let allLeters = 'abcdefghijklmnopqrstuvwxyz'
    let fullname
    const accNumber = e.target.accNumber.value
    const branchName = e.target.branchName.value
    const money = e.target.balance.value
    if (accNumber.length != 19 || accNumber.includes(allLeters)) {
        modalAppear("enter a valid account number")
        e.target.accNumber.style.border = '1px solid red'
        return
    }
    for (let i of acc.cards) {
        if (i.accNumber == accNumber) {
            modalAppear("this account is alredy added")
            e.target.accNumber.style.border = '1px solid red'
            return
        }
    }
    let bankInfo = await setCardBrand(accNumber)
    const bank = bankInfo.brand
    const cardType = bankInfo.type
    const logo = bankInfo.logo
    allAccs.forEach(el => {
        if (el.logged && el.keepSigned) {
            fullname = el.fullName
        }
    })
    balanceCont.innerHTML = `
        <div class="balance-card">
        <div class="balance-card-top">
            <p>${cardType}</p>
            <div>
                <span>${bank}</span>
                <img src="${logo}" alt="">
            </div>
        </div>

        <div class="balance-card-mid">
            <div>
                <p>${accNumber}</p>
                <span>Account Number</span>
            </div>

            <div>
                <p>$${money}</p>
                <span>Total Amount</span>
            </div>
        </div>

        <div class="balance-card-bot">
            <button>Remove</button>
            <button>Details <i class="fa-solid fa-angle-right"></i></button>
        </div>
    </div>

    ${balanceCont.innerHTML}
    `
    for (let i of allAccs) {
        if (i.logged && i.keepSigned) {
            i.cards.push(new CardTemp(fullname, accNumber, bank, cardType, branchName, money))
        }
    }

    modalAppear("Card added successfully")
    localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
    cardWindowForm.reset()
    blure.style.display = 'none'
    cardWindow.style.display = 'none'
    cardWindowOpen = false
    if (!notisOpener.classList.contains('notis')) {
        notisOpener.classList.add('notis')
        newNotis = true
        let now = new Date()
        let timeString = formatTime(now)

        notis.innerHTML += `
            <section>
                <p><i class="fa-solid fa-exclamation"></i> New Card Added</p>
                <small>${timeString}</small>
            </section>
        `

        acc.notifications.push({
            message: 'New Card Added',
            timestamp: now.toISOString()
        })
    }
})

async function setCardBrand(cardNumber) {
    const bin = cardNumber.replace(/\s+/g, '').slice(0, 6);

    try {
        const res = await fetch(`https://data.handyapi.com/bin/${bin}`, {
            headers: { 'x-api-key': 'PUB-0YOUklJ9BGHC55319gqT' }
        });
        if (!res.ok) throw new Error("BIN not found");

        const data = await res.json();
        if (data.Status !== "SUCCESS") throw new Error("BIN lookup failed");

        const scheme = data.Scheme.toLowerCase() || "Unknown";
        const type = data.Type.toLowerCase() || "Unknown";
        let logo
        switch (scheme.toLowerCase()) {
            case 'visa':
                logo = '../images/visa.png'
                break;
            case 'mastercard':
                logo = '../images/mastercard.png'
                break;
            case 'amex':
                logo == '../images/amExp.png'
                break;
            case 'unionpay':
                logo = '../images/unionPay.png'
                break;
            default:
                logo = 'Unknown'
                break;
        }

        return {
            brand: scheme,
            type: type,
            logo: logo
        };
    } catch (error) {
        console.error("BIN lookup failed:", error);
        modalAppear("enter a valid account number");
        cardWindowForm.accNumber.style.border = '1px solid red';
        return {
            brand: "Unknown",
            type: "Unknown",
            bank: "Unknown Bank",
            logo: "../images/unknown.png"
        };
    }
}
function formatTime(date) {
    let now = new Date()
    let diffInMs = now - date
    let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    let hours = date.getHours().toString().padStart(2, '0')
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let timePart = `${hours}:${minutes}`

    if (diffInDays === 0) {
        return `Today at ${timePart}`
    } else if (diffInDays === 1) {
        return `Yesterday at ${timePart}`
    } else {
        let day = date.getDate().toString().padStart(2, '0')
        let month = (date.getMonth() + 1).toString().padStart(2, '0')
        let year = date.getFullYear()
        return `${day}/${month}/${year} at ${timePart}`
    }
}
//let user = allAccs.find(user => user.logged && user.keepSigned)
//user.notifications = []
//localStorage.setItem('finebank-accs',JSON.stringify(allAccs))
