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

//add to worker list form
let workers = JSON.parse(localStorage.getItem("norma-workers")) || []
let form = document.querySelector("form")
function Aplication(name,expirience,position,date,status,color){
    this.name = name
    this.expirience = expirience
    this.position = position
    this.date = date
    this.status = status
    this.color = color
}
form.addEventListener("submit",e=>{
    let logged = localStorage.getItem("norma-logged") || "false"
    if(logged == "true"){
        let info = JSON.parse(localStorage.getItem("norma-acc"))
        for(let i of info){
            if(i.logged == true){     
                let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                let time = new Date()
                let year = time.getFullYear()
                let month = allMonths[time.getMonth()]
                let day = time.getDate()

                let name = e.target.name.value
                let expirience = e.target.pos.value
                let position = e.target.pos.value
                let date = `${year}-${month}-${day}`
                let status = e.target.pos.value
                let number = e.target.numb.value.trim()
                let color = e.target.color.value

                if(number.length !=9){
                    alert("put in a valid number")
                }
                workers.push(new Aplication(name,expirience,position,date,status,number,color))
                localStorage.setItem("norma-workers",JSON.stringify(workers))
            }
        }
    }else{
        alert("You Must Be Logged In")
    }

})