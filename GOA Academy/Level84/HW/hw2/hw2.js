let dino = document.querySelector("#dino")
let cacti = document.querySelector("#cactus")
function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump")
        setTimeout(function(){
            dino.classList.remove("jump")
        }, 300)
    }
}
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusTop = parseInt(window.getComputedStyle(cacti).getPropertyValue("left"))
    if(cactusTop < 150 && cactusTop>100 && dinoTop >=140){
        alert("You Have Lost")
    }
},10)
document.addEventListener("keyup", function(e){
    if(e.key == " "){
        jump()
    }
    console.log(e.key)
})