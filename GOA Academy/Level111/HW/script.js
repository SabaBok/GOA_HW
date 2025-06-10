//the color theme setter
let theme = localStorage.getItem('theme') || 'light';
theme === "dark" ? document.body.classList.add('darkmode') : document.body.classList.remove('darkmode');
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
const finished = document.querySelector(".finished")
const setUpOldEvents = () => {
    for (let i of tasks) {
        if (i.status === "onGoing") {
            mainBot.innerHTML += `
                <div class="card ${i.status}">
                    <div class="card-left">
                        <form action="" class='edit-input'>
                            <input type="text" name="textEdit" value='${i.event}' required">
                            <button>Finish</button>
                        </form>
                        <h3>${i.event}</h3>
                        <span>${i.date}</span>
                    </div>

                    <div class="card-right">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `
        } else {
            finished.innerHTML += `
                <div class="card ${i.status}">
                    <div class="card-left">
                        <form action="" class='edit-input'>
                            <input type="text" name="textEdit" value='${i.event}' required">
                            <button>Finish</button>
                        </form>
                        <h3>${i.event}</h3>
                        <span>${i.date}</span>
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
for (let i = 0; i < idk.length; i++) {
    idk[i].addEventListener('click', () => i == 0 ? alert("thank you") : alert("we are sorry to hear that"));
}

//creating new task
function InfoSaver(event, date, status) {
    this.event = event;
    this.date = date
    this.status = status;
}
let input = document.querySelector('.main-top-right').querySelector('form')
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
input.addEventListener('submit', e => {
    e.preventDefault()
    let time = new Date()
    let month = monthNames[time.getMonth()]
    let day = time.getDate()
    let year = time.getFullYear()
    let date = `${month} ${day}, ${year}`

    let task = e.target.todo.value
    let status = "onGoing"
    tasks.push(new InfoSaver(task, date, status))
    localStorage.setItem("events", JSON.stringify(tasks))

    if (!task.trim()) return;
    mainBot.innerHTML += `
        <div class="card ${status}">
			<div class="card-left">
                <form action="" class='edit-input'>
                    <input type="text" name="textEdit" value='${task}' required">
                    <button>Finish</button>
                </form>
				<h3>${task}</h3>
				<span>${date}</span>
			</div>

			<div class="card-right">
				<i class="fa-solid fa-pen-to-square"></i>
				<i class="fa-solid fa-trash-can"></i>
			</div>
		</div>
    `
    e.target.todo.value = ''
})

//swicthing display
let displaySwitchers = document.querySelector(".main-mid-container").querySelectorAll("div")
let displayAll = true
for (let i of displaySwitchers) {
    i.addEventListener("click", e => {
        let [firstDisplay, secDisplay] = displaySwitchers
        if (displayAll) {
            mainBot.style.display = "none"
            finished.style.display = 'flex'
            firstDisplay.classList.remove("active")
            firstDisplay.classList.add("deActive")
            secDisplay.classList.remove("deActive")
            secDisplay.classList.add("active")
            displayAll = false
        } else {
            mainBot.style.display = "flex"
            finished.style.display = 'none'
            firstDisplay.classList.add("active")
            firstDisplay.classList.remove("deActive")
            secDisplay.classList.add("deActive")
            secDisplay.classList.remove("active")
            displayAll = true
        }
    })
}

//completing task
document.addEventListener("click", e => {
    if (e.target.classList.contains("card")) {
        let cardInfo = e.target.children[0].children
        let [, cardText, cardDate] = cardInfo
        if (e.target.parentElement.classList.contains("all")) {
            finished.appendChild(e.target)
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].event == cardText.textContent && tasks[i].date == cardDate.textContent) {
                    tasks[i].status = "finished"
                    console.log("moved")
                    localStorage.setItem('events', JSON.stringify(tasks))
                }
            }
            e.target.classList.remove("onGoing")
            e.target.classList.add("finished")
        } else {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].event == cardText.textContent && tasks[i].date == cardDate.textContent) {
                    tasks[i].status = "onGoing"
                    localStorage.setItem('events', JSON.stringify(tasks))
                }
            }
            mainBot.append(e.target)
            e.target.classList.remove("finished")
            e.target.classList.add("onGoing")
        }
    }
})

//deleting
document.addEventListener("click", e => {
    if (e.target.classList.contains("fa-trash-can")) {
        let card = e.target.parentElement.parentElement
        let cardInfo = card.children[0].children
        let [, cardText, cardDate] = cardInfo
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].event == cardText.textContent && cardDate.textContent == tasks[i].date) {
                card.remove()
                tasks.splice(i, 1)
                localStorage.setItem("events", JSON.stringify(tasks))
            }
        }
    }

})

//editing
document.addEventListener("click", e => {
    if (e.target.classList.contains("fa-pen-to-square")) {
        let cardText = e.target.parentElement.parentElement.children[0].children[1]
        let editForm = cardText.parentElement.querySelector("form")
        let cardDate = cardText.parentElement.children[2]

        cardText.style.display = "none"
        editForm.style.display = "flex"

        let newText = ''
        let newDate = ''

        // saving the new text
        editForm.addEventListener("submit",e=>{
            e.preventDefault()
            let parent = e.target.parentElement
            let cardText = parent.querySelector("h3")
            let date = cardText.parentElement.children[2]

            let time = new Date()
            let month = monthNames[time.getMonth()]
            let day = time.getDate()
            let year = time.getFullYear()
            let dates = `${month} ${day}, ${year}`

            newText = e.target.textEdit.value
            newDate = dates

            cardText.style.display = 'block'
            e.target.style.display = 'none'

            //updating the localstorage and the list
            for(let i = 0; i<tasks.length; i++){
                if(tasks[i].event == cardText.textContent && tasks[i].date == date.textContent){
                    tasks[i].event = newText
                    tasks[i].date = newDate
                    localStorage.setItem("events",JSON.stringify(tasks))
                }
            }
            cardText.textContent = newText
            cardDate.textContent = newDate
        })
    }
})
