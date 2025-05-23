// initialize storage only if not already set
if (localStorage.getItem("userInfo") === null) {
    localStorage.setItem("userInfo", JSON.stringify([]))
}


//checks if alredy logged in
let click = document.querySelector(".account")
let logger = document.querySelector(".logged-in")
const confirmer = () => {
    let info = localStorage.getItem("isLogin")
    if (info) {
        logger.style.display = "flex"
        let nameUser = JSON.parse(localStorage.getItem("user")).name
        document.querySelector("#name").textContent = nameUser
        click.style.display = "none"
    } else {
        logger.style.display = "none"
        click.style.display = "flex"
    }
}
confirmer()


//clock function
let time = document.querySelector(".hour")
setInterval(() => {
    let date = new Date()
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    time.innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000)


//collor switcher
let colors = ["./imgs/black.png", './imgs/red.png', "./imgs/blue.png", "./imgs/pink.png"]
let btn = document.querySelector(".colors").querySelectorAll("div")
let watch = document.querySelector(".watch-img")
for (let i of btn) {
    i.addEventListener("click", e => {
        watch.style.backgroundImage = `url(${colors[Number(e.target.id)]})`
    })
}

//heart clock toggle
let but = document.querySelector(".option-features").querySelector("div").querySelectorAll("button")
let heart = document.querySelector(".heart-rate")
for (let i of but) {
    i.addEventListener("click", e => {
        if (e.target.id == "time") {
            heart.style.display = "none"
            time.style.display = "block"
        } else {
            heart.style.display = "block"
            time.style.display = "none"
        }
    })
}


//heart rate generator
let heartRate = document.querySelector(".heart-rate").querySelector("p")
let heartImg = heart.querySelector("img")
setInterval(() => {
    let heart = Math.floor(Math.random() * 91 + 50)
    heartRate.innerHTML = heart

    if (heart < 80 && heart > 50) {
        heartImg.style.animationDuration = "1.2s"
    } else if (heart < 100 && heart > 80) {
        heartImg.style.animationDuration = "0.9s"
    } else {
        heartImg.style.animationDuration = "0.6s"
    }
}, 2000)


//click on buy
let buy = document.querySelector(".buy")
buy.addEventListener("click", e => {
    if (!localStorage.getItem("isLogin")) {
        alert("Please login to purchase")
        return
    } else {
        let cover = document.createElement("div")
        cover.style.width = "100%"
        cover.style.height = "100%"
        cover.style.position = "absolute"
        cover.style.background = "#00000039"
        cover.style.backdropFilter = "blur(20px)"
        document.body.appendChild(cover)
        cover.style.zIndex = "1000"
        cover.style.top = "0"

        let text = document.createElement("h1")
        text.innerHTML = "Thank you for your purchase!"
        text.style.position = "absolute"
        text.style.top = "50%"
        text.style.left = "50%"
        text.style.transform = "translate(-50%,-50%)"
        text.style.fontSize = "50px"
        text.style.color = "#fff"
        text.style.zIndex = "1001"
        text.style.fontFamily = "'Lexend', sans-serif"
        cover.appendChild(text)

        setTimeout(() => {
            alert("Thank you for your purchase!")
        }, 200)
    }
})


//open register
let blure = document.querySelector("#blur")
let regForm = document.querySelector("#register-log")
let opener = false
click.addEventListener("click", e => {
    if (!opener) {
        blure.style.display = "block"
        regForm.style.display = "block"
        opener = true
    } else {
        blure.style.display = "none"
        regForm.style.display = "none"
        opener = false
    }
})


//register
function Account(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}
let regi = regForm.querySelector(".register")
let form1 = regi.querySelector("form")
let login = document.querySelector(".login")
form1.addEventListener("submit", e => {
    e.preventDefault()
    let userName = e.target.name.value
    let email = e.target.email.value
    let password = e.target.pass.value
    let confirmPassword = e.target.rePass.value

    let informa = JSON.parse(localStorage.getItem("userInfo"))

    if (password != confirmPassword || password.length < 8) {
        alert("Passwords do not match or are less than 8 characters")
        return
    } else if (userName.length > 7) {
        alert("User name is too long. choose a shorter handle")
        return
    }
    for (let i in informa) {
        if (i.email == email) {
            alert("email is already registered")
            return
        }
    }
    alert("Registration successful")
    const data = new Account(userName, email, password)
    informa.push(data)
    localStorage.setItem("userInfo", JSON.stringify(informa))
    login.classList.add("logina")
    login.classList.remove("login")
    regi.style.display = "none"
})


//login
let form2 = login.querySelector("form")
let header = document.querySelector("header")
let accName = document.querySelector("#name")
form2.addEventListener("submit", e => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.pass.value

    let data = JSON.parse(localStorage.getItem("userInfo"))
    let matched = false

    for (let i of data) {
        if (i.email == email && i.password == password) {
            localStorage.setItem("isLogin", true)
            localStorage.setItem("user", JSON.stringify(i))
            accName.innerHTML = i.name
            alert("Login successful")
            logger.style.display = "flex"
            click.style.display = "none"
            login.classList.add("login")
            login.classList.remove("logina")
            regForm.style.display = "none"
            blure.style.display = "none"
            matched = true
            break
        }
    }
    if (!matched) {
        alert("Invalid credentials")
    }
})


//logout
let logOut = document.querySelector("#log-out")
logOut.addEventListener("click", e => {
    localStorage.setItem("isLogin", false)
    localStorage.removeItem("user")
    logger.style.display = "none"
    click.style.display = "flex"
    alert("Logged out successfully")
})

//alredy logged in
let alrLog = document.querySelector("#login")
alrLog.addEventListener("click", e => {
    login.classList.add("logina")
    login.classList.remove("login")
    regi.style.display = "none"
})


//want to register
let wantReg = document.querySelector("#regist")
wantReg.addEventListener("click", e => {
    login.classList.add("login")
    login.classList.remove("logina")
    regi.style.display = "block"
})
