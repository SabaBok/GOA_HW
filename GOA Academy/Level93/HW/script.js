let day = document.querySelector(".day")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let conf = document.querySelector(".con")
let music = document.querySelector("audio")

function timer(){
    let time = new Date()
    let newYear = new Date(`january 01 2026 00:00:00`)
    let interval = newYear - time
    // let interval = 0
    
    let dge = Math.floor(interval/(1000*60*60*24))
    let saati = Math.floor(interval/(1000*60*60)%24)
    let wuti = Math.floor(interval/(1000*60)%60)
    let wami = Math.floor((interval/1000)%60)

    if(interval <=0){
        clearInterval(idk)
        conf.style.display = "block"
        conf.src = "gif.gif"
        music.src = "audio.mp3"
        music.play()
    }

    if(saati < 10){
        saati = `0${saati}`
    }else{
        saati = `${saati}`
    }

    if(wuti < 10){
        wuti = `0${wuti}`
    }else{
        wuti = `${wuti}`
    }

    if(wami < 10){
        wami = `0${wami}`
    }else{
        wami = `${wami}`
    }

    day.textContent = dge
    hour.textContent = saati
    minute.textContent = wuti
    second.textContent = wami
}

let idk = setInterval(timer,1000)