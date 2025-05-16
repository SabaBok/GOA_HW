let cart = document.querySelector(".carter").querySelector("img")
let opener = document.querySelector(".shopping")
cart.addEventListener("click",function(){
    opener.style.transform = "translateX(0)"
})

let closer = opener.querySelector("#close")
closer.addEventListener("click", function(){
    opener.style.transform = "translateX(100%)"
})
closer.addEventListener("keyup", function(e){
    if(e.key == "escape"){
        opener.style.transform = "translateX(100%)"
    }
})

let adder = document.querySelectorAll(".adder")

let card = document.querySelectorAll(".pc-card") 

let count = 0
let totalPrice = 0
let counter = document.querySelectorAll(".lll")
let total = document.querySelector("#totale")
let prodCont = document.querySelector(".prod-cont")

for(let i = 0;i<adder.length;i++){
    adder[i].addEventListener("click",function(){
        let info = card[i]
        let img = info.querySelector("img").src
        let name = info.querySelector("p").textContent
        let price = parseInt(info.querySelector(".span2").textContent)

        totalPrice += price
        total.textContent = totalPrice
        count++
        counter[0].textContent = count
        counter[1].textContent = count


        let newProd = document.createElement("div")
        newProd.classList.add("product")

        let pcImg = document.createElement("img")
        pcImg.src = img

        let childProdDiv = document.createElement("div")

        let h3 = document.createElement("h3")
        h3.textContent = name

        let p = document.createElement("p")
        p.textContent = `$${price}`

        let but = document.createElement("button")
        but.textContent = "Remove"

        but.addEventListener("click",function(){
            newProd.remove()
            count -= 1
            totalPrice -= price
            
            counter[0].textContent = count
            counter[1].textContent = count
            total.textContent = totalPrice
        })

        childProdDiv.appendChild(h3)
        childProdDiv.appendChild(p)
        childProdDiv.appendChild(but)

        newProd.append(pcImg)
        newProd.append(childProdDiv)

        prodCont.appendChild(newProd)
    })
}



