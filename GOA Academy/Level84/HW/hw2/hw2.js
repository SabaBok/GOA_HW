let dino = document.querySelector("#dino");
let gameContainer = document.querySelector(".cont");
let high = document.querySelector("#high")
let cur = document.querySelector("#cur")
high.textContent = localStorage.getItem("high")

let counter = 0
setInterval(function(){
    counter++
    cur.textContent = counter
},60)

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
    }
}

function spawnCactus() {
    let cactus = document.createElement("div");
    cactus.classList.add("cactus");
    gameContainer.appendChild(cactus);

    setTimeout(() => {
        cactus.remove();
    }, 2000);
}

setInterval(() => {
    spawnCactus();
}, Math.random() * 2000 + 500);

setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cacti = document.querySelectorAll(".cactus");

    for (let cactus of cacti) {
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 150 && cactusLeft > 100 && dinoTop >= 140) {
            alert("You Have Lost");
            if(Number(cur.textContent) > Number(high.textContent)){
                high.textContent = cur.textContent
                localStorage.setItem("high",Number(high.textContent))
                counter = 0
                cur.textContent = 0
            }else{
                counter = 0
                cur.textContent = 0
            }
        }
    }
}, 10);

document.addEventListener("keyup", function (e) {
    if (e.key === " ") {
        jump();
    }
});
