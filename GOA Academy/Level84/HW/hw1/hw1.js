let mover = document.querySelector("div")
let hor = 0
let ver = 0
let rot = 0
let skew = 0
document.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp"){
        ver -= 20
    }
    if(e.key == "ArrowDown"){
        ver += 20
    }
    if(e.key == "ArrowLeft"){
        hor -= 20
    }
    if(e.key == "ArrowRight"){
        hor += 20
    }
    if(e.key == "d"){
        rot += 10
    }
    if(e.key == "a"){
        rot -=10
    }
    if(e.key == "w"){
        skew += 10
    }


    mover.style.transform = `translateY(${ver}px) translateX(${hor}px) rotate(${rot}deg) skew(${skew}deg)`
    console.log(e.key)
})