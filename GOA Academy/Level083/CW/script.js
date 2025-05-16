let but = document.querySelector("button")
let body = document.body
let text = document.querySelector("p").querySelector("span")
but.addEventListener("click", function(){
    let idk = "0123456789ABCDEF"
    let color = ""

    for(let i =0; i<6;i++){
        let random = Math.floor(Math.random() * 16)
        color += idk[random]
    }
    body.style.backgroundColor = `#${color}`
    text.textContent = `#${color}`
    text.style.color = `#${color}`
})