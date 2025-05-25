let form = document.querySelector("form")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let name = e.target.name.value
    let cardNumb = e.target.cardNumb.value.trim()
    let cvc = e.target.cvc.value
    let month = e.target.month.value
    let year = e.target.year.value

    let time = new Date()
    let wholeYear = String(time.getFullYear()).slice(-2)

    let hasLetter = false
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    for (let i of cardNumb.toLowerCase()) {
        if (letters.includes(i)) {
            hasLetter = true;
            break;
        }
    }
    if(hasLetter){
        e.target.cardNumb.style.outline = "1px solid red"
        let span = e.target.cardNumb.parentElement.querySelector("span")
        span.textContent = "the card number has a letter in it"
        return
    }else if(name.length < 1){
        e.target.name.style.outline = "1px solid red"
        let span = e.target.name.parentElement.querySelector("span")
        span.textContent = "please put in your name"
        return
    }else if(cardNumb.length !=16){
        e.target.cardNumb.style.outline = "1px solid red"
        let span = e.target.cardNumb.parentElement.querySelector("span")
        span.textContent = "must be 16 numbers long"
        return
    }else if(month.length != 2){
        e.target.month.style.outline = "1px solid red"
        let span = e.target.month.parentElement.parentElement.querySelector("span")
        span.textContent = "must be 2 numbers long"
        return
    }else if(Number(month) >=13){
        e.target.month.style.outline = "1px solid red"
        let span = e.target.month.parentElement.parentElement.querySelector("span")
        span.textContent = "enter valid date"
        return
    }else if(year.length != 2){
        e.target.year.style.outline = "1px solid red"
        let span = e.target.year.parentElement.parentElement.querySelector("span")
        span.textContent = "must be 2 numbers long"
        return
    }else if(Number(year) < wholeYear){
        e.target.year.style.outline = "1px solid red"
        let span = e.target.year.parentElement.parentElement.querySelector("span")
        span.textContent = "enter valid date"
        return
    }else if(cvc.length != 3){
        e.target.cvc.style.outline = "1px solid red"
        let span = e.target.cvc.parentElement.querySelector("span")
        span.textContent = "must be 3 numbers long"
        return
    }

    let displayCardNumber = document.querySelector("#numberCard")
    let displayName = document.querySelector("#fullName")
    let displayDate = document.querySelector("#date")
    let displayCVC = document.querySelector("back-card p")
    displayCardNumber.textContent = ""

    let counter = 0
    for(let i of cardNumb){
        counter%4==0?displayCardNumber.textContent += " "+ i: displayCardNumber.textContent += i
        counter++
    }
    displayName.textContent = name
    displayDate.textContent = `${month}/${year}`
    displayCVC.textContent = cvc
    setTimeout(() => {
        alert("you have purchased the product thank you")
    }, 200);
})