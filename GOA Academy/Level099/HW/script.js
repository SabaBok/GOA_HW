let time = document.querySelector(".hour");
setInterval(() => {
    let date = new Date();
    let hours = date.getHours() < 10? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() <10? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() <10? `0${date.getSeconds()}` : date.getSeconds();
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);


let colors = ["./imgs/black.png",'./imgs/red.png',"./imgs/blue.png","./imgs/pink.png"]
let btn = document.querySelector(".colors").querySelectorAll("div");
let watch = document.querySelector(".watch-img");
for(let i of btn){
    i.addEventListener("click", e=>{
        watch.style.backgroundImage = `url(${colors[Number(e.target.id)]})`;
        console.log(e.target.id);
    });
}

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

let heartRate = document.querySelector(".heart-rate").querySelector("p");
let heartImg = heart.querySelector("img");
setInterval(() => {
    let heart = Math.floor(Math.random() * 91 + 50);
    heartRate.innerHTML = heart;

    heart<80 && heart>50? heartImg.style.animationDuration = "1.2s" : 
    heart<100 && heart>80? heartImg.style.animationDuration = "0.9s" : 
    heartImg.style.animationDuration = "0.6s"
},2000)


let buy = document.querySelector(".buy");
buy.addEventListener("click", e=>{
    if(!localStorage.getItem("isLogin")){
        alert("Please login to purchase")
        return
    }else{
        let cover = document.createElement("div");
        cover.style.width = "100%";
        cover.style.height = "100%";
        cover.style.position = "absolute";
        cover.style.background = "#00000039"
        cover.style.backdropFilter = "blur(20px)";
        document.body.appendChild(cover);
        cover.style.zIndex = "1000";
        cover.style.top = "0";

        let text = document.createElement("h1");
        text.innerHTML = "Thank you for your purchase!";
        text.style.position = "absolute";
        text.style.top = "50%";
        text.style.left = "50%";
        text.style.transform = "translate(-50%,-50%)";
        text.style.fontSize = "50px";
        text.style.color = "#fff";
        text.style.zIndex = "1001";
        text.style.fontFamily = "'Lexend', sans-serif;";
        cover.appendChild(text);

        setTimeout(() => {
            alert("Thank you for your purchase!");
        }, timeout = 200);
    }
})




let blure = document.querySelector("#blur")
let regForm = document.querySelector("#register-log")
let click = document.querySelector(".account")
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

function Account(email,password){
    this.email = email;
    this.password = password;
}
let regi = regForm.querySelector(".register")
let form1 = regi.querySelector("form")
let login = document.querySelector(".login")

form1.addEventListener("submit", e=>{
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.pass.value
    let confirmPassword = e.target.rePass.value

    if(password != confirmPassword || password.length < 8){
        alert("Passwords do not match or are less than 8 characters")
        return
    }
    alert("Registration successful")
    const data = new Account(email,password)
    localStorage.clear()
    localStorage.setItem("user", JSON.stringify(data))
    localStorage.setItem("isLogin", true)
    login.classList.add("logina")
    login.classList.remove("login")
    regi.style.display = "none"
})

let form2 = login.querySelector("form")
form2.addEventListener("submit", e=>{
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.pass.value

    let data = JSON.parse(localStorage.getItem("user"))
    if(data.email == email && data.password == password){
        alert("Login successful")
        login.classList.add("login")
        login.classList.remove("logina")
        regForm.style.display = "none"
        blure.style.display = "none"
    }else{
        alert("Invalid credentials")
    }
})

let alrLog = document.querySelector("#login")
alrLog.addEventListener("click", e=>{
    login.classList.add("logina")
    login.classList.remove("login")
    regi.style.display = "none"
})  
let wantReg = document.querySelector("#regist")
wantReg.addEventListener("click", e=>{
    login.classList.add("login")
    login.classList.remove("logina")
    regi.style.display = "block"
})