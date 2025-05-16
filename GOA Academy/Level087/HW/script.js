let but = document.querySelector("#roll")
let cub1 = document.querySelector(".one")
let cub2 = document.querySelector(".two")
let won = document.querySelector(".dices").querySelector("h1")
let count1 = 0
let count2 = 0


but.addEventListener("click",function(){
    let all1 = cub1.querySelectorAll("div")
    let all2 = cub2.querySelectorAll("div")

    for(let i of all1){
        i.style.display = "none"
    }
    for(let i of all2){
        i.style.display = "none"
    }
    
    let math1 = Math.floor(Math.random()*6)+1
    let math2 = Math.floor(Math.random()*6)+1
    console.clear()
    console.log(`first: ${math1} \nsecond: ${math2}`)
    if(math1>math2){
        won.textContent = "Player 1 Won"
        count1++
    }else if(math1<math2){
        won.textContent = "Player 2 Won"
        count2++
    }else if(math1 == math2){
        won.textContent = "Draw"
    }
    let pl1 = document.querySelector(".pl1").textContent = count1
    let pl2 = document.querySelector(".pl2").textContent = count2

    switch(math1){
        case 1:
            all1[4].style.display = "block";break;
        case 2:
            all1[2].style.display = "block";
            all1[6].style.display = "block";break;
        case 3:
            all1[2].style.display = "block";
            all1[4].style.display = "block";
            all1[6].style.display = "block";break;      
        case 4:
            all1[0].style.display = "block";
            all1[2].style.display = "block";
            all1[6].style.display = "block";
            all1[8].style.display = "block";break;     
        case 5:
            all1[0].style.display = "block";
            all1[2].style.display = "block";
            all1[4].style.display = "block";
            all1[6].style.display = "block";
            all1[8].style.display = "block";break;
        case 6:
            all1[0].style.display = "block";
            all1[2].style.display = "block";

            all1[3].style.display = "block";
            all1[5].style.display = "block";

            all1[6].style.display = "block";
            all1[8].style.display = "block";break;     
    }

    switch(math2){
        case 1:
            all2[4].style.display = "block";break;
        case 2:
            all2[2].style.display = "block";
            all2[6].style.display = "block";break;
        case 3:
            all2[2].style.display = "block";
            all2[4].style.display = "block";
            all2[6].style.display = "block";break;      
        case 4:
            all2[0].style.display = "block";
            all2[2].style.display = "block";
            all2[6].style.display = "block";
            all2[8].style.display = "block";break;     
        case 5:
            all2[0].style.display = "block";
            all2[2].style.display = "block";
            all2[4].style.display = "block";
            all2[6].style.display = "block";
            all2[8].style.display = "block";break;
        case 6:
            all2[0].style.display = "block";
            all2[2].style.display = "block";

            all2[3].style.display = "block";
            all2[5].style.display = "block";
            
            all2[6].style.display = "block";
            all2[8].style.display = "block";break;     
    }
})


let blure = document.querySelector("#blur")
let pop = document.querySelector(".pop")
let gif = document.querySelector(".gif")

let scorer = document.querySelectorAll(".scorer")
let decide = document.querySelectorAll(".decide")
setInterval(function(){
    if(count1 >=10 || count2>=10){
        blure.style.display = "block"
        pop.style.display = "block"
        gif.style.display = "block"
        scorer[0].textContent = count1
        scorer[1].textContent = count2

        if(count1 > count2){
            decide[0].textContent = "Winner"
            decide[1].textContent = "Looser"
        }else{
            decide[1].textContent = "Winer"
            decide[0].textContent = "Looser"
        }
    }
},20)

gif.addEventListener("click",closer)
blure.addEventListener("click",closer)
function closer(){
    blure.style.display = "none"
    pop.style.display = "none"
    gif.style.display = "none"
    count1 = 0
    count2 = 0
    window.location.reload()
}
