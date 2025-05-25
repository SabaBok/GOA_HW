//checking if alredy logged in
let click = document.querySelector(".account")
let logger = document.querySelector(".logged-in")
let displayName = document.querySelector("#name")
let btnBuy = document.querySelector("#buy-btn")
btnBuy.style.display = "none"
localStorage.setItem("isLogin",JSON.stringify(false))
const confirmer = () => {
    let info = JSON.parse(localStorage.getItem("isLogin"))
    info?btnBuy.style.display = "block":btnBuy.style.display = "none"
}
confirmer()


//clock function
let time = document.querySelector(".hour");
setInterval(() => {
    let date = new Date();
    let hours = date.getHours() < 10? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() <10? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() <10? `0${date.getSeconds()}` : date.getSeconds();
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);


//color changer
let colors = ["./imgs/black.png",'./imgs/red.png',"./imgs/blue.png","./imgs/pink.png"]
let btn = document.querySelector(".colors").querySelectorAll("div");
let watch = document.querySelector(".watch-img");
for(let i of btn){
    i.addEventListener("click", e=>{
        watch.style.backgroundImage = `url(${colors[Number(e.target.id)]})`;
        console.log(e.target.id);
    });
}


//heart shower
let but = document.querySelector(".option-features").querySelector("div").querySelectorAll("button");
let heart = document.querySelector(".heart-rate");
for(let i of but){
    i.addEventListener("click", e=>{
        if(e.target.id == "time"){
            heart.style.display = "none";
            time.style.display = "block";
        }else{
            heart.style.display = "block";
            time.style.display = "none";
        }
    });
}

//heart rate generator
let heartRate = document.querySelector(".heart-rate").querySelector("p");
let heartImg = heart.querySelector("img");
setInterval(() => {
    let heart = Math.floor(Math.random() * 91 + 50);
    heartRate.innerHTML = heart;

    heart<80 && heart>50? heartImg.style.animationDuration = "1.2s" : 
    heart<100 && heart>80? heartImg.style.animationDuration = "0.9s" : 
    heartImg.style.animationDuration = "0.6s"
},2000)


//register opener
let regForm = document.querySelector("#register-log")
let opener = false
click.addEventListener("click", e=>{
    if(!opener){
        blure.style.display = "block";
        regForm.style.display = "block";
        opener = true;
    }else{
        blure.style.display = "none";
        regForm.style.display = "none";
        opener = false;
    }
})

//registration
function Account(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
}
let regi = regForm.querySelector(".register")
let form1 = regi.querySelector("form")
let login = document.querySelector(".login")
let arr = JSON.parse(localStorage.getItem("user")) || []
let blure = document.querySelector("#blur")
form1.addEventListener("submit", e=>{
    e.preventDefault()
    let userName = e.target.name.value
    let email = e.target.email.value
    let password = e.target.pass.value
    let confirmPassword = e.target.rePass.value

    if(password != confirmPassword || password.length < 8){
        alert("Passwords do not match or are less than 8 characters")
        return
    }else if(userName.length >7){
        alert("User name is too long. choose a shorter handle")
        return
    }
    alert("Registration successful")
    const data = new Account(userName,email,password)
    arr.push(data)
    localStorage.clear()
    localStorage.setItem("user", JSON.stringify(arr))
    login.classList.add("logina")
    login.classList.remove("login")
    regi.style.display = "none"
})


//log in
let form2 = login.querySelector("form")
let header = document.querySelector("header")
let accName = document.querySelector("#name")
form2.addEventListener("submit", e=>{
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.pass.value

    for(let i of arr){
        if(i.email == email && i.password == password){
            localStorage.setItem("isLogin", JSON.stringify(true))
            accName.innerHTML = i.name
            logger.style.display = "flex"
            click.style.display = "none"
            login.classList.add("login")
            login.classList.remove("logina")
            regForm.style.display = "none"
            blure.style.display = "none"
        }
    }
    if(JSON.parse(localStorage.getItem("isLogin"))){
        alert("Login successful")
        confirmer()
    }else{
        alert("Invalid credentials")
    }

})

//log out
let logOut = document.querySelector("#log-out")
logOut.addEventListener("click", e=>{
    localStorage.setItem("isLogin",false)
    logger.style.display = "none"
    click.style.display = "flex"
    alert("Logged out successfully")
})


//alredy logged in
let alrLog = document.querySelector("#login")
alrLog.addEventListener("click", e=>{
    login.classList.add("logina")
    login.classList.remove("login")
    regi.style.display = "none"
})  

//want to sign up
let wantReg = document.querySelector("#regist")
wantReg.addEventListener("click", e=>{
    login.classList.add("login")
    login.classList.remove("logina")
    regi.style.display = "block"
})