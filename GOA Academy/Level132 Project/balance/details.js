//account details
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