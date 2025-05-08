let time = document.querySelector(".hour");
setInterval(() => {
    let date = new Date();
    let hours = date.getHours() < 10? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() <10? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() <10? `0${date.getSeconds()}` : date.getSeconds();
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);


let colors = ["./imgs/black.png",'./imgs/red.png',"./imgs/blue.png","./imgs/pink.png"]
let btn = document.querySelector(".colors").querySelectorAll("div");
let watch = document.querySelector(".watch-img");
for(let i of btn){
    i.addEventListener("click", e=>{
        watch.style.backgroundImage = `url(${colors[Number(e.target.id)]})`;
        console.log(e.target.id);
    });
}

let but = document.querySelector(".option-features").querySelector("div").querySelectorAll("button");
let heart = document.querySelector(".heart-rate");
for(let i of but){
    i.addEventListener("click", e=>{
        if(e.target.id == "time"){
            heart.style.display = "none";
            time.style.display = "block";
        }else{
            heart.style.display = "block";
            time.style.display = "none";
        }
    });
}

let heartRate = document.querySelector(".heart-rate").querySelector("p");
let heartImg = heart.querySelector("img");
setInterval(() => {
    let heart = Math.floor(Math.random() * 91 + 50);
    heartRate.innerHTML = heart;

    heart<80 && heart>50? heartImg.style.animationDuration = "1.2s" : 
    heart<100 && heart>80? heartImg.style.animationDuration = "0.9s" : 
    heartImg.style.animationDuration = "0.6s"
},2000)