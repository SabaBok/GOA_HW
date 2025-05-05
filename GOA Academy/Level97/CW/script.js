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