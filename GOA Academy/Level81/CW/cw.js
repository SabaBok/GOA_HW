let audio = document.querySelector("audio")
let h1 = document.querySelector("h1")
function interval(){
    let time = new Date()
    h1.textContent = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
    if(time.getSeconds() < 10){
        h1.textContent = `${time.getHours()} : ${time.getMinutes()} : 0${time.getSeconds()}`
    }
}

setInterval(interval,1000)
audio.play()
