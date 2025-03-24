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