//account details
const detailCont = document.querySelector('.acc-details-container')
const detailDivs = detailCont.querySelector('div').querySelectorAll('div')

const loadMoreBtn = document.querySelector('.transacs-cont button')
const table = document.querySelector('.table')
const transHist = document.querySelector('.transaction-history')

function renderAllDetails(acc){
    const [bank,accType,balance,branch,accNumb] = detailDivs
    bank.querySelector('p').textContent = acc.bank
    accType.querySelector('p').textContent = acc.cardType
    balance.querySelector('p').textContent = acc.money
    branch.querySelector('p').textContent = acc.branchName
    accNumb.querySelector('p').textContent = acc.accNumber
}
renderAllDetails(allAccs.find(el=>el.logged).cards[0])
loadMoreBtn.addEventListener('click', () => {
    table.classList.add('expanded')
    transHist.classList.add('expanded')
    loadMoreBtn.style.display = 'none'
})
function renderAllTransactions(acc){
    let transactions = acc.cards
}