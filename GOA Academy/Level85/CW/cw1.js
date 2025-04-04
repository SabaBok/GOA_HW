let audios = [ //yvela audios file path
    "./audios/crash.mp3",
    "./audios/kick-bass.mp3",
    "./audios/snare.mp3",
    "./audios/tom-1.mp3",
    "./audios/tom-2.mp3",
    "./audios/tom-3.mp3",
    "./audios/tom-4.mp3"
]
let instruments = document.querySelectorAll(".img-cont") // [instru1, instru2, instru3, instru4, instru5.......instru♾]
document.addEventListener("keydown",function(e){ // e = event
    console.log(e.key + "keydown")
    if(e.key == "w"){ // tu "W"-s daachers ragaca qnas|| "e.key"-amowmebs romel gilaks daachires
        let idk = new Audio(audios[0]) // igebs audios index0it da inaxavs variable-shi
        idk.play() // rtavs audio-s
        instruments[0].style.border = "10px solid #53607c" // icvleba borderi
    }
    else if(e.key == "a"){
        let idk = new Audio(audios[1])
        idk.play()
        instruments[1].style.border = "10px solid #53607c"
    }
    else if(e.key == "s"){
        let idk = new Audio(audios[2])
        idk.play()
        instruments[2].style.border = "10px solid #53607c"
    }
    else if(e.key == "d"){
        let idk = new Audio(audios[3])
        idk.play()
        instruments[3].style.border = "10px solid #53607c"
    }
    else if(e.key == "j"){
        let idk = new Audio(audios[4])
        idk.play()
        instruments[4].style.border = "10px solid #53607c"
    }
    else if(e.key == "k"){
        let idk = new Audio(audios[5])
        idk.play()
        instruments[5].style.border = "10px solid #53607c"
    }
    else if(e.key == "l"){
        let idk = new Audio(audios[6])
        idk.play()
        instruments[6].style.border = "10px solid #53607c"
    }
})
document.addEventListener("keyup",function(e){
    console.log(e.key + "keyup")

    if(e.key == "w"){
        instruments[0].style.border = "10px solid #3d465d"
    }
    if(e.key == "a"){
        instruments[1].style.border = "10px solid #3d465d"
    }
    if(e.key == "s"){
        instruments[2].style.border = "10px solid #3d465d"
    }
    if(e.key == "d"){
        instruments[3].style.border = "10px solid #3d465d"
    }
    if(e.key == "j"){
        instruments[4].style.border = "10px solid #3d465d"
    }
    if(e.key == "k"){
        instruments[5].style.border = "10px solid #3d465d"
    }
    if(e.key == "l"){
        instruments[6].style.border = "10px solid #3d465d"
    }
})
instruments[0].addEventListener("click",function(){
    alert("hello")
}, {once:true}) // {once:true} = marto ertxel iyos shesadzlebeli ro gaishvas || {once:false} = usasrulod imushavos ramdenjerac davawert || once = ერთხელ