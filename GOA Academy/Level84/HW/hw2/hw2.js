let dino = document.querySelector("#dino");
let gameContainer = document.querySelector(".cont");
let high = document.querySelector("#high");
let cur = document.querySelector("#cur");
high.textContent = localStorage.getItem("high");
let counter = 0;
let but = document.querySelectorAll(".but");
let gameSpeed = 60;
let cactusSpeed = 10;

for (let i of but) {
    i.addEventListener("click", function () {
        if (this.textContent == "Easy") {
            gameSpeed = 300;
            cactusSpeed = 2500;
        } else if (this.textContent == "Normal") {
            gameSpeed = 50;
            cactusSpeed = 300;
        } else {
            gameSpeed = 10;
            cactusSpeed = 1000;
        }
        location.reload();
    });
}

setInterval(function () {
    counter++;
    cur.textContent = counter;
}, gameSpeed);

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, jumpSpeed);
    }
}

function spawnCactus() {
    let cactus = document.createElement("div");
    cactus.classList.add("cactus");
    cactus.style.animation = `cacti ${cactusSpeed / 1000}s linear forwards`;
    gameContainer.appendChild(cactus);

    setTimeout(function () {
        cactus.remove();
    }, cactusSpeed);
}

setInterval(function () {
    spawnCactus();
}, Math.random() * 200 + 1000);

setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cacti = document.querySelectorAll(".cactus");

    for (let cactus of cacti) {
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 150 && cactusLeft > 100 && dinoTop >= 140) {
            alert("You Have Lost");
            if (Number(cur.textContent) > Number(high.textContent)) {
                high.textContent = cur.textContent;
                localStorage.setItem("high", Number(high.textContent));
            }
            counter = 0;
            cur.textContent = 0;
        }
    }
}, 10);

setInterval(() => {
    if (counter >= 600) {
        gameContainer.style.backgroundColor = "#fff";
        if (counter >= 1200) {
            gameContainer.style.backgroundColor = "#333";
        }
    }
}, 10);

document.addEventListener("keyup", function (e) {
    if (e.key === " ") {
        jump();
    }
});
