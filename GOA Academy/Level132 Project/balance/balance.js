//versions
const balance = document.querySelector('#balance')
const details = document.querySelector('#details')

//creating card
const balanceCont = document.querySelector('.balance-cont')
const addCard = document.querySelectorAll('.balance-create-card button')[0]
const editCard = document.querySelectorAll('.balance-create-card button')[1]
const cardWindow = document.querySelector('#add-card')
const cardWindowForm = cardWindow.querySelector('form')
let cardWindowOpen = false

//details
const detailCont = document.querySelector('.acc-details-container')
const detailDivs = detailCont.querySelector('div').querySelectorAll('div')

const loadMoreBtn = document.querySelector('.transacs-cont button')
const table = document.querySelector('.table')
const transHist = document.querySelector('.transaction-history')
const editDets = document.querySelector('.acc-details-bot').querySelectorAll('button')[0]
const removeCardDets = document.querySelector('.acc-details-bot').querySelectorAll('button')[1]
const asideBalance = document.querySelector('.ac')
let isEditing = false
let currCard

//render all cards
async function RenderAllCards() {
    balanceCont.innerHTML = ""

    let user = allAccs.find(user => user.logged)
    if (!user) return

    let html = ""

    for (let card of user.cards) {
        const cardInfo = await setCardBrand(card.accNumber)

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
                    <button onClick='seeDetails(event)'>Details <i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        `
    }

    html += `
        <div class="balance-create-card">
            <button onClick='displayCardAdd()'>Add Account</button>
            <button>Edit Accounts</button>
        </div>
    `

    balanceCont.innerHTML = html
}
RenderAllCards()
function removeCard(e) {
    const parent = e.target.closest('.balance-card')
    const accNumb = parent.querySelector('.balance-card-mid div p').textContent
    let now = new Date()
    let user = allAccs.find(user => user.logged)
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
        modalAppear('The card has been removed')
    }, 200)

    addNotification('A Card Has Been Removed')
}
function seeDetails(e) {
    const cardEl = e.target.closest('.balance-card')
    const cardNumb = cardEl.querySelector('.balance-card-mid div p').textContent
    let user = allAccs.find(el => el.logged)
    let card = user.cards.find(el => el.accNumber == cardNumb)

    balance.style.display = 'none'
    details.style.display = 'block'
    renderAllDetails(card)
    renderAllTransactions(card)
}

//add card constructor
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
    let acc = allAccs.find(user => user.logged)
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
            modalAppear("this account is already added")
            e.target.accNumber.style.border = '1px solid red'
            return
        }
    }

    let bankInfo = await setCardBrand(accNumber)
    const bank = bankInfo.brand
    const cardType = e.target.cardType.value

    if (cardType.includes('1234567890')) {
        modalAppear('enter a valid card type')
        e.target.cardType.style.border = '1px solid red'
        return
    }

    const logo = bankInfo.logo
    allAccs.forEach(el => el.logged ? fullname = el.fullName : null)

    let newCard = document.createElement("div")
    newCard.className = "balance-card"
    newCard.innerHTML = `
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
            <button onClick='removeCard(event)'>Remove</button>
            <button onClick='seeDetails(event)'>Details <i class="fa-solid fa-angle-right"></i></button>
        </div>
    `

    let createCardEl = document.querySelector('.balance-create-card')
    balanceCont.insertBefore(newCard, createCardEl)

    for (let i of allAccs) {
        if (i.logged) {
            i.cards.push(new CardTemp(fullname, accNumber, bank, cardType, branchName, money))
        }
    }

    modalAppear("Card added successfully")
    localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
    cardWindowForm.reset()
    blure.style.display = 'none'
    cardWindow.style.display = 'none'
    cardWindowOpen = false

    addNotification('New Card Added')
})

//get card brand and logo
async function setCardBrand(cardNumber) {
    const bin = cardNumber.replace(/\s+/g, '').slice(0, 6)

    try {
        const res = await fetch(`https://data.handyapi.com/bin/${bin}`, {
            headers: { 'x-api-key': 'PUB-0YOUklJ9BGHC55319gqT' }
        })
        if (!res.ok) throw new Error("BIN not found")

        const data = await res.json()
        if (data.Status !== "SUCCESS") throw new Error("BIN lookup failed")

        const scheme = data.Scheme.toLowerCase() || "Unknown"
        let logo

        switch (scheme.toLowerCase()) {
            case 'visa':
                logo = '../images/visa.png'
                break
            case 'mastercard':
                logo = '../images/mastercard.png'
                break
            case 'american express':
                logo = '../images/amExp.png'
                break
            case 'unionpay':
                logo = '../images/unionPay.png'
                break
            default:
                logo = '../images/unknown.png'
                break
        }

        return {
            brand: scheme,
            logo: logo
        }
    } catch (error) {
        console.error("BIN lookup failed:", error)
        modalAppear("enter a valid account number")
        cardWindowForm.accNumber.style.border = '1px solid red'
        return {
            brand: "Unknown",
            logo: "../images/unknown.png"
        }
    }
}

//time formatter
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


//
// details version
//
function renderAllDetails(card) {
    currCard = card
    const [bank, accType, balance, branch, accNumb] = detailDivs
    bank.querySelector('p').textContent = card.bank
    accType.querySelector('p').textContent = card.cardType
    balance.querySelector('p').textContent = `$${card.money}`
    branch.querySelector('p').textContent = card.branchName
    accNumb.querySelector('p').textContent = `${card.accNumber.slice(0, 14)} ****`
}
loadMoreBtn.addEventListener('click', () => {
    table.classList.add('expanded')
    transHist.classList.add('expanded')
    loadMoreBtn.style.display = 'none'
})
function renderAllTransactions(card) {
    let transactions = card.transactions
    for (let i of transactions) {
        table.innerHTML += `
            <tr>
                <td>17 may, 2025</td>
                <td>${i.status}</td>
                <td>${i.paymentMethod}</td>
                <td>${i.receipt}</td>
                <td><idk>$</idk>${i.price}</td>
            </tr>
        `
    }
}

//editing Details
editDets.addEventListener('click', () => {
    if (!isEditing) {
        isEditing = true
        for (let div of detailDivs) {
            const span = div.querySelector('span')
            const p = div.querySelector('p')
            const label = span.textContent.trim()

            p.style.display = 'none'

            const form = document.createElement('form')
            const input = document.createElement('input')
            input.type = 'text'

            if (label === 'Account Number') {
                input.value = currCard.accNumber
            } else if (label === 'Balance') {
                input.value = currCard.money
            } else if (label === 'Bank') {
                input.value = currCard.bank
            } else if (label === 'Account Type') {
                input.value = currCard.cardType
            } else if (label === 'Branch Name') {
                input.value = currCard.branchName
            }

            form.appendChild(input)
            div.appendChild(form)

            form.addEventListener('submit', e => {
                e.preventDefault()
            })
        }
    } else {
        let allValid = true

        for (let div of detailDivs) {
            const span = div.querySelector('span')
            const label = span.textContent.trim()
            const form = div.querySelector('form')
            const input = form.querySelector('input')
            const value = input.value.trim()

            let valid = true

            if (label === 'Balance') {
                if (value.length === 0) valid = false
                else {
                    for (let i = 0; i < value.length; i++) {
                        const code = value.charCodeAt(i)
                        if (code < 48 || code > 57) {
                            valid = false
                            break
                        }
                    }
                }
            } else if (label !== 'Account Number') {
                // For Bank, Account Type, Branch Name: non-empty check only
                if (value.length === 0) valid = false
            }

            if (!valid) {
                input.style.border = '2px solid red'
                allValid = false
            } else {
                input.style.border = ''
            }
        }

        if (allValid) {
            isEditing = false

            for (let div of detailDivs) {
                const span = div.querySelector('span')
                const label = span.textContent.trim()
                const form = div.querySelector('form')
                const input = form.querySelector('input')
                const p = div.querySelector('p')
                const value = input.value.trim()

                form.remove()
                p.style.display = 'block'

                if (label === 'Account Number') {
                    currCard.accNumber = value
                    p.textContent = value.slice(0, -4) + ' ****'
                } else if (label === 'Balance') {
                    currCard.money = value
                    p.textContent = `$${value}`
                } else if (label === 'Bank') {
                    currCard.bank = value
                    p.textContent = value
                } else if (label === 'Account Type') {
                    currCard.cardType = value
                    p.textContent = value
                } else if (label === 'Branch Name') {
                    currCard.branchName = value
                    p.textContent = value
                }
            }

            localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
        }
    }
})
//removing card
removeCardDets.addEventListener('click', async e => {
    console.log(currCard)
    let user = allAccs.find(data => data.logged)
    for (let i = 0; i < user.cards.length; i++) {
        if (user.cards[i].accNumber == currCard.accNumber) {
            user.cards.splice(i, 1)
        }
    }
    modalAppear('you have deleted a card')
    addNotification('A Card Has Been Added')
    await RenderAllCards()
    setTimeout(() => {
        balance.style.display = ''
        details.style.display = 'none'
    }, 100);
})

//closing details opening balance
asideBalance.addEventListener('click', e => {
    balance.style.display = ''
    details.style.display = 'none'
})
