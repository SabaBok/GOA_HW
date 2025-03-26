function nothing(){}
let listing = document.querySelectorAll(".cool-cont")
let blur = document.querySelector(".card-blur")
for(let i of listing){
    i.addEventListener("click",function(){
        this.querySelector(".full-card").style.display = "block"
        blur.style.display = "block"
    })
}

let closes = document.querySelectorAll(".close")
for(let i of closes){
    i.addEventListener("click",function(event){
        event.stopPropagation()
        this.closest(".full-card").style.display = "none"
        blur.style.display = "none"
    })
}

for(let i of listing){
    let fullCard = i.querySelector(".full-card")
    let images = fullCard.querySelectorAll(".slider-img")
    let counter = 0

    function updateImage(){
        for(let iss of images){
            iss.style.display = "none"
        }
        images[counter].style.display = "block"
    }

    let rightArr = fullCard.querySelector(".right") 
    rightArr.addEventListener("click",function(){
        if(counter == images.length-1){
            counter = 0
        }else{
            counter++
        }
        updateImage()
    })

    let leftArr = fullCard.querySelector(".left")
    leftArr.addEventListener("click",function(){
        if(counter == 0){
            counter = images.length-1

        }else{
            counter--
        }
        updateImage()
    })
    updateImage();
}

for(let i of listing){
    let lang = "eng"
    let flags = i.querySelectorAll(".flag")
    for(let iss of flags){
        iss.addEventListener("click",function(){
            let text = i.querySelector(".full-bot-text").querySelectorAll("p")
            if(this.classList.contains("geo")){
                for(let idk of text){
                    idk.style.display = "none"
                }
                text[0].style.display = "block"
            }
            if(this.classList.contains("rus")){
                for(let idk of text){
                    idk.style.display = "none"
                }
                text[1].style.display = "block"
            }
            if(this.classList.contains("eng")){
                for(let idk of text){
                    idk.style.display = "none"
                }
                text[2].style.display = "block"
            }
        }) 
    }
}

let drop = document.querySelectorAll(".drop-but")
for(let i of drop){
    let semi = i.querySelector(".semi-drop")
    i.addEventListener("mouseenter",function(){
        i.style.height = "250px"
        semi.style.display = "block"
        semi.style.opacity = 1
    })
    i.addEventListener("mouseleave",function(){
        if(!i.matches(":hover") && !semi.matches(":hover")){
            i.style.height = "auto"
            semi.style.display = "none"
            semi.style.opacity = 0
        }
    })
}

let cities = document.querySelector(".city").querySelectorAll("li")
function filterCity(){
    cities[0].addEventListener("click", function(){
        for(let i of listing){
            i.style.display = "block"
        }
    })
    cities[1].addEventListener("click", function(){
        for(let i of listing){
            if(!i.className.includes("tbil")){
                i.style.display = "none"
            }
            if(i.className.includes("tbil")){
                i.style.display = "block"
            }
        }
    })
    cities[2].addEventListener("click",function(){
        for(let i of listing){
            if(!i.className.includes("kuta")){
                i.style.display = "none"
            }
            if(i.className.includes("kuta")){
                i.style.display = "block"
            }
        }
    })
    cities[3].addEventListener("click",function(){
        for(let i of listing){
            if(!i.className.includes("batu")){
                i.style.display = "none"
            }
            if(i.className.includes("batu")){
                i.style.display = "block"
            }
        }
    })
}

let sizeBut = document.querySelector(".size").querySelectorAll("li")
function filterSize(){
    for(let i = 0;i<sizeBut.length;i++){
        let span = i.querySelector("span")

        sizeBut[i].addEventListener("click", function(){
            if(i ==0){
                for(let iss of listing){
                    iss.style.display = "block"
                }
            }else{
                
            }
        })
    }
}


