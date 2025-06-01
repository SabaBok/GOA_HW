let log = document.querySelector(".log-in")
let reg = document.querySelector(".registration")
let auth = localStorage.getItem("norma-logged") || "false"
let regForm = reg.querySelector("form")
let accs = JSON.parse(localStorage.getItem("norma-acc")) || []
let regIdk = reg.querySelectorAll(".i")


//registration
function Info(email,number,pass,logged){
    this.email = email
    this.number = number
    this.pass = pass
    this.logged = false
}
regForm.addEventListener("submit",e=>{
    e.preventDefault()
    let email = e.target.email.value
    let pass = e.target.pass.value
    let mobNumb = e.target.mobNumb.value.trim()
    let rePass = e.target.rePass.value

    if(pass.length >=8 && rePass == pass){
        accs.push(new Info(email,mobNumb,pass,false))
        localStorage.setItem("norma-acc",JSON.stringify(accs))
        reg.style.display = "none"
        log.style.display = "flex"
    }
})


//log in
let logForm = log.querySelector("form")
logForm.addEventListener("submit",e=>{
    e.preventDefault()
    let email = e.target.email.value
    let pass = e.target.pass.value
    let wrong = false
    for(let i of accs){
        if(i.email == email && i.pass == pass){
            i.logged = true
            localStorage.setItem("norma-logged","true")
            window.location.href = '../index.html'
            wrong = false
        }else{
            wrong = true
        }

        if(wrong){
            alert("Wrong Information")
        }
    }
})

//alredy logged in?
let span = reg.querySelector("p span")
span.addEventListener("click",()=>{
    reg.style.display = "none"
    log.style.display = "flex"
})

//want to sign up?
let regSpan = log.querySelector("p span")
regSpan.addEventListener("click", ()=>{
    reg.style.display = "flex"
    log.style.display = "none"
})