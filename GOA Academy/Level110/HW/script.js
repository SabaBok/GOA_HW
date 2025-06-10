//the color theme setter
let theme = localStorage.getItem('theme') || 'light';
theme === "dark"?document.body.classList.add('darkmode'):document.body.classList.remove('darkmode');
const light = document.querySelector('.fa-sun')
const dark = document.querySelector('.fa-moon')
light.addEventListener('click', () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('theme', 'dark');
})
dark.addEventListener('click', () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('theme', 'light');
})


//setting up old events
let tasks = JSON.parse(localStorage.getItem('events')) || []
const mainBot = document.querySelector(".all")
const onGoing = document.querySelector('.onGoing')
const finished = document.querySelector(".finished")
const setUpOldEvents = ()=>{
    for(let i of tasks){
        if(i.status === "onGoing"){
            mainBot.innerHTML+=`
                <div class="card ${i.status}">
                    <div class="card-left">
                        <h3>${i.event}</h3>
                        <span>${i.month} ${i.day}, ${i.year}</span>
                    </div>

                    <div class="card-right">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `
            onGoing.innerHTML+=`
                <div class="card ${i.status}">
                    <div class="card-left">
                        <h3>${i.event}</h3>
                        <span>${i.month} ${i.day}, ${i.year}</span>
                    </div>

                    <div class="card-right">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `
        }else{
            finished.innerHTML+=`
                <div class="card ${i.status}">
                    <div class="card-left">
                        <h3>${i.event}</h3>
                        <span>${i.month} ${i.day}, ${i.year}</span>
                    </div>

                    <div class="card-right">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `
        }
    }
}
setUpOldEvents()



//feedback
let idk = document.querySelector('.feed-cont').querySelectorAll('div')
for(let i=0;i<idk.length;i++){
    idk[i].addEventListener('click', () => i==0?alert("thank you"):alert("we are sorry to hear that"));
}


//creating new task
function InfoSaver(event,month,day,year,status){
    this.event = event;
    this.month = month;
    this.day = day;
    this.year = year;
}
let input = document.querySelector('.main-top-right').querySelector('form')
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
input.addEventListener('submit', e=> {
    e.preventDefault()
    let time = new Date()
    let month = monthNames[time.getMonth()]
    let day = time.getDate()
    let year = time.getFullYear()
    let task = e.target.todo.value
    let status = "onGoing"
    tasks.push(new InfoSaver(task,month,day,year,status))
    localStorage.setItem("events",JSON.stringify(tasks))

    if (!task.trim()) return;
    mainBot.innerHTML+=`
        <div class="card ${status}">
			<div class="card-left">
				<h3>${task}</h3>
				<span>${month} ${day}, ${year}</span>
			</div>

			<div class="card-right">
				<i class="fa-solid fa-pen-to-square"></i>
				<i class="fa-solid fa-trash-can"></i>
			</div>
		</div>
    `
    onGoing.innerHTML+=`
        <div class="card ${status}">
			<div class="card-left">
				<h3>${task}</h3>
				<span>${month} ${day}, ${year}</span>
			</div>

			<div class="card-right">
				<i class="fa-solid fa-pen-to-square"></i>
				<i class="fa-solid fa-trash-can"></i>
			</div>
		</div>
    `
    e.target.todo.value = ''
})

//completing task
document.addEventListener("click",e=>{
    if(e.target.classList.contains("card")){
        finished.appendChild(e.target)
        e.target.classList.remove("onGoing")
        e.target.classList.add("finished")
    }
})

//switching modes
// const mainMid = document.querySelector(".main-mid-container")
// const cardAll = mainMid.querySelectorAll("div")
// for(let i of cardAll){
//     i.addEventListener("click", e=>{
//         if(i.textContent = "All"){
//             console.log("all")
//         }
//     })
// }

