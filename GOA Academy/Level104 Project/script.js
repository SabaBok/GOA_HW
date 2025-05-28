//checking if logged
const accBtn = document.querySelector(".account")
const logOut = document.querySelector(".log-out")
const checker = ()=>{
    let logged = localStorage.getItem("norma-logged") || "false"
    if(logged == "true"){
        logOut.style.display = "block"
        accBtn.style.display = "none"
    }else{
        logOut.style.display = "none"
        accBtn.style.display = "flex"
    }
}
checker()


//open sidebar
let headRight = document.querySelector('.header-right')
let burger = document.querySelector(".burger")
burger.addEventListener("click",()=>headRight.style.transform = "translateX(0)")

//close sidebar
let close = document.querySelector("#close")
close.addEventListener("click",()=>headRight.style.transform = "translatex(100%)")

//log out
logOut.addEventListener("click",()=>{
    localStorage.setItem("norma-logged","false")
    checker()
    alert("You Have Logged Out Of Your Account")
})

//opening/closing bios
const hidden = document.querySelectorAll(".hidden")
let textOpen = false
const textBtn = document.querySelector(".team-section button")
textBtn.addEventListener("click",()=>{
    for(let i of hidden){
        !textOpen?i.style.height = "auto":i.style.height = "0"
    }
    textOpen = !textOpen
})

//extra form
let workers = JSON.parse(localStorage.getItem("workers")) || []
let form = document.querySelector("form")
function Aplication(name,position,number,expirience,status){
    this.name = name
    this.position = position
    this.number = number
    this.expirience = expirience
    this.status = status
}
form.addEventListener("submit",e=>{
    let name = e.target.name.value
    let position = e.target.pos.value
    let number = e.target.numb.value.trim()
    let expirience = e.target.pos.value
    let status = e.target.pos.value

    if(number.length !=9){
        alert("put in a valid number")
    }
    workers.push(new Aplication(name,position,number,expirience,status))
})