let counter = 1
let musica = document.querySelector("audio")
let photo = document.querySelector("#photo")
let headName = document.querySelector("#headname") 
let headCreator = document.querySelector("#headcreator")
let musTime = document.querySelector("#time")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")
musica.volume = 0.05
musica.autoplay = false

let music1 = {
    photo:"resources/cover-1.jpg",
    music:"resources/lost-in-city-lights-145038.mp3",
    name:"Lost in the City Lights",
    creator:"Cosmo Sheldrake",
    length:"03:15"
}
let music2 = {
    photo:"resources/cover-2.jpg",
    music:"resources/forest-lullaby-110624.mp3",
    name:"Forest Lullaby",
    creator:"Lesfm",
    length:"03:45"
}
let music3 = {
    photo:"resources/cover-3.jpg",
    music:"resources/Cozmic.mp3",
    name:"Cozmic",
    creator:"Lunivo",
    length:"02:46"
}


function skip(skipper){
    counter += Number(skipper)
}
function musicOrder(){
    if(counter === 1){
        musica.src = music1.music
        photo.src = music1.photo
        headName.textContent = music1.name
        headCreatortextContent = music1.creator
        musTimetextContent = music1.length
    }else if(counter === 2){
        musica.src = music2.music
        photo.src = music2.photo
        headName.textContent = music2.name
        headCreator.textContent = music2.creator
        musTime.textContent = music2.length
    }else if(counter === 3){
        musica.src = music3.music
        photo.src = music3.photo
        headName.textContent = music3.name
        headCreator.textContent = music3.creator
        musTime.textContent = music3.length
    }
    musica.load()
    musica.play()
}
musica.addEventListener('ended', function() {
    counter++
    if (counter > 3) {
        counter = 1
    }
    musicOrder()
})
musicOrder()
function skip(skipper) {
    counter += Number(skipper) 
    if (counter > 3) {
        counter = 1
    } else if (counter < 1) {
        counter = 3
    }
    musicOrder()

}
function isAudioPlaying(audio) {
    return !audio.paused && audio.currentTime > 0 && !audio.ended
}
function startPause(){
    if(!isAudioPlaying(musica)){
        musica.play()
    }else{
        musica.pause()
    }
}

