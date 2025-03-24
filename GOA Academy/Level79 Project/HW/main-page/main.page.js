let listing = document.querySelectorAll(".cool-cont")
let blur = document.querySelector(".card-blur")
let closes = document.querySelectorAll(".close")
for(let i of listing){
    i.addEventListener("click",function(){
        this.querySelector(".full-card").style.display = "block"
        blur.style.display = "block"
    })
}
for(let i of closes){
    i.addEventListener("click",function(event){
        event.stopPropagation()
        this.closest(".full-card").style.display = "none"
        blur.style.display = "none"
    })
}
