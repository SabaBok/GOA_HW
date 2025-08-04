//account details
const detailCont = document.querySelector('.acc-details-container')
const detailDivs = detailCont.querySelector('div').querySelectorAll('div')

const loadMoreBtn = document.querySelector('.transacs-cont button')
const table = document.querySelector('.table')
const transHist = document.querySelector('.transaction-history')

function renderAllDetails(card) {
    const [bank, accType, balance, branch, accNumb] = detailDivs
    bank.querySelector('p').textContent = card.bank
    accType.querySelector('p').textContent = card.cardType
    balance.querySelector('p').textContent = card.money
    branch.querySelector('p').textContent = card.branchName
    accNumb.querySelector('p').textContent = card.accNumber
}
loadMoreBtn.addEventListener('click', () => {
    table.classList.add('expanded')
    transHist.classList.add('expanded')
    loadMoreBtn.style.display = 'none'
})
function renderAllTransactions(card) {
    let transactions = card.transactions
    for (let i of transactions){
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