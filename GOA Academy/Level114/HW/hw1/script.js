//setting the theme
let theme = localStorage.getItem('theme') || 'light';
theme === "dark" ?
    document.body.classList.add('darkmode') :
    document.body.classList.remove('darkmode');

//changing themes
const themeToggle = [document.querySelector('.theme'), document.querySelector(".side-theme")]
for (let i of themeToggle) {
    i.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');

        document.body.classList.contains('darkmode') ?
            localStorage.setItem('theme', 'dark') :
            localStorage.setItem('theme', 'light');
    });
}


//setting up old events
let tasks = JSON.parse(localStorage.getItem('events')) || []
const mainBot = document.querySelector(".all")
const finished = document.querySelector(".finished")
const setUpOldEvents = () => {
    mainBot.innerHTML = '';
    finished.innerHTML = '';
    for (let i of tasks) {
        if (i.status === "onGoing") {
            mainBot.innerHTML += `
                <div class="card ${i.status}">
                    <div class="card-left">
                        <form action="" class='edit-input'>
                            <input type="text" name="textEdit" value="${i.event}" required">
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
                            <input type="text" name="textEdit" value="${i.event}" required">
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
const changeText = document.querySelector('.feedText')
const feedDivs = document.querySelector('.feed-cont').querySelectorAll('div')
const sideChangeText = document.querySelector(".side-feed-text")
const sideFeed = document.querySelector(".side-feed-cont").querySelectorAll('div')
for (let i = 0; i < feedDivs.length; i++) {
    feedDivs[i].addEventListener('click', e => {
        if (i == 0) {
            changeText.textContent = "thank you"
            changeText.style.color = "green"
        } else {
            changeText.textContent = "that's rude"
            changeText.style.color = 'red'
        }
    });
}
for (let i = 0; i < sideFeed.length; i++) {
    sideFeed[i].addEventListener('click', e => {
        if (i == 0) {
            sideChangeText.textContent = "thank you"
            sideChangeText.style.color = "lime"
        } else {
            sideChangeText.textContent = "that's rude"
            sideChangeText.style.color = 'red'
        }
    });
}

//creating new task
function InfoSaver(event, date, status) {
    this.event = event;
    this.date = date
    this.status = status;
}
let eventForm = document.querySelector('.main-top-right').querySelector('form')
let formError = eventForm.querySelector("label")
eventForm.addEventListener('submit', e => {
    e.preventDefault()
    let formInput = eventForm.querySelector("input")

    let time = new Date();
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = monthNames[time.getMonth()];
    let day = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();

    day = day < 10 ? `0${day}` : day;
    minute = minute < 10 ? `0${minute}` : minute;

    let period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;
    let hourStr = hour < 10 ? `0${hour}` : hour;

    let clock = `${hourStr}:${minute} ${period}`;
    let date = `${month} ${day}, ${clock}`;

    let task = e.target.todo.value
    let status = "onGoing"

    if (!task.trim()) {
        formError.style.display = "block"
        formError.style.opacity = "0.7"
        formInput.style.outline = "2px solid red"
        // return
    } else {
        formError.style.display = "none"
        formError.style.opacity = "0"
        formInput.style.outline = "2px solid var(--primary-light)"
        tasks.push(new InfoSaver(task, date, status))
        localStorage.setItem("events", JSON.stringify(tasks))
        mainBot.innerHTML += `
            <div class="card ${status}">
                <div class="card-left">
                    <form action="" class='edit-input'>
                        <input type="text" name="textEdit" value="${task}" required">
                        <button>Finish</button>
                    </form>
                    <h3>${task}</h3>
                    <span>${date}</span>
                </div>

                <div class="card-right">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>`
        e.target.todo.value = ''
    }
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
    // Skip if trash or edit icons were clicked
    if (
        e.target.classList.contains("fa-trash-can") ||
        e.target.classList.contains("fa-pen-to-square") ||
        e.target.closest(".edit-input") // <-- THIS LINE IS THE FIX
    ) {
        return;
    }

    const card = e.target.closest(".card");
    if (card) {
        let cardInfo = card.children[0].children;
        let [, cardText, cardDate] = cardInfo;

        if (card.parentElement.classList.contains("all")) {
            finished.appendChild(card);
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].event == cardText.textContent && tasks[i].date == cardDate.textContent) {
                    tasks[i].status = "finished";
                    localStorage.setItem('events', JSON.stringify(tasks));
                }
            }
            card.classList.remove("onGoing");
            card.classList.add("finished");
        } else {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].event == cardText.textContent && tasks[i].date == cardDate.textContent) {
                    tasks[i].status = "onGoing";
                    localStorage.setItem('events', JSON.stringify(tasks));
                }
            }
            mainBot.append(card);
            card.classList.remove("finished");
            card.classList.add("onGoing");
        }
    }
});

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
let textEditOpen = false
document.addEventListener("click", e => {
    if (e.target.classList.contains("fa-pen-to-square")) {
        let cardText = e.target.parentElement.parentElement.children[0].children[1]
        let editForm = cardText.parentElement.querySelector("form")
        let cardDate = cardText.parentElement.children[2]

        cardText.style.display = "none"
        editForm.style.display = "flex"

        let input = editForm.querySelector("input")
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
        textEditOpen = true
        let newText = ''
        let newDate = ''

        // saving the new text
        editForm.onsubmit = e => {
            e.preventDefault()
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let parent = e.target.parentElement
            let cardText = parent.querySelector("h3")
            let date = cardText.parentElement.children[2]

            let time = new Date()
            let month = monthNames[time.getMonth()]
            let day = time.getDate()
            let hour = time.getHours();
            let minute = time.getMinutes();
            let period = hour >= 12 ? "PM" : "AM";
            hour = hour % 12 || 12;
            minute = minute < 10 ? `0${minute}` : minute;
            hour = hour < 10 ? `0${hour}` : hour;
            let clock = `${hour}:${minute} ${period}`;
            let dates = `${month} ${day}, ${clock}`;

            newText = e.target.textEdit.value
            newDate = dates

            cardText.style.display = 'block'
            e.target.style.display = 'none'
            textEditOpen = false
            //updating the localstorage and the list
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].event == cardText.textContent && tasks[i].date == date.textContent) {
                    tasks[i].event = newText
                    tasks[i].date = newDate
                    localStorage.setItem("events", JSON.stringify(tasks))
                }
            }
            cardText.textContent = newText
            cardDate.textContent = newDate
        }
    }
})

//stopping edit
document.addEventListener("click", e => {
    if (textEditOpen) {
        let activeForm = document.querySelector("form[style*='display: flex']")
        if (activeForm && !activeForm.contains(e.target) && !e.target.classList.contains("fa-pen-to-square")) {
            let cardText = activeForm.parentElement.querySelector("h3")
            cardText.style.display = "block"
            activeForm.style.display = "none"
            textEditOpen = false
        }
    }
})

//sidebar - open
const burger = document.querySelector(".burger")
const sideBar = document.querySelector(".side-bar")
burger.addEventListener("click", e => {
    sideBar.classList.toggle("side-active")
    sideBar.style.transform = "translateX(0)"
    sideBar.style.opacity = "100%"
})
//sidebar - close
const sideClose = document.querySelector(".close")
sideClose.addEventListener("click", e => {
    sideBar.classList.toggle("side-active")
    sideBar.style.transform = "translateX(101%)"
    sideBar.style.opacity = "0"
})