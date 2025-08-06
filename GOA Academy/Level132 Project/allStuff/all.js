const allAccs = JSON.parse(localStorage.getItem('finebank-accs')) || []
const modal = document.querySelector('.modal')
let user = allAccs.find(u => u.logged)

//aside
const logOut = document.querySelector('.aside-bot button')
const headerProfile = document.querySelector('.profile p')

//header date
const headerDate = document.querySelector('.header-date p')

//notification
const notisOpener = document.querySelector('.fa-bell')
const notis = document.querySelector('#notis')
let notisOpen = false

//side-bar
const burger = document.querySelector('.burger')
const blure = document.querySelector('#blur')
const aside = document.querySelector('aside')
let asideOpen = false

// setting up account on loading
function logAcc() {
    let allowed = false;

    for (let i of allAccs) {
        if (i.logged && i.keepSigned) {
            allowed = true;
            break;
        }
    }

    if (!allowed) {
        window.location.href = '../index.html';
    }
}
logAcc()

//setting profile
function setProfile(){
    headerProfile.textContent = user.fullName
}
setProfile()

//logging out
logOut.addEventListener('click',e=>{
    let user = allAccs.find(u => u.logged)
    user.logged = false
    localStorage.setItem('finebank-accs',JSON.stringify(allAccs))
    modalAppear('you have logged out')
    window.location.href = '../index.html'
})

//modal creation
let isModalRunning = false
function modalAppear(text) {
    const line = modal.querySelector('div');
    const modalText = modal.querySelector('p');
    if (!isModalRunning) {
        isModalRunning = true;
        line.style.animation = 'modalTime 2.5s linear';
        modal.style.animation = 'modalAppear 0.4s ease-in-out';
        modal.style.opacity = '1';
        modal.classList.add('show'); // enable pointer events
        modalText.textContent = text;
        setTimeout(() => {
            modal.style.opacity = '0';
            modal.style.animation = 'none';
            line.style.animation = 'none';
            modal.classList.remove('show'); // disable pointer events again
            isModalRunning = false;
        }, 2600);
    }
}

//add notification
function addNotification(message) {
    let user = allAccs.find(u => u.logged)
    let now = new Date()

    user.notifications.newNotif = true
    user.notifications.notifs.push({
        message: message,
        timeStamp: now.toISOString()
    })

    localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
    renderNotis()
}
//notification opener
notisOpener.addEventListener('click', e => {
    let acc = allAccs.find(el => el.logged)
    if (!notisOpen) {
        notis.style.display = 'flex'
        notisOpen = true
        notis.style.animation = 'NotisAppear 0.4s ease-in-out'
        if (acc.notifications.newNotif) {
            acc.notifications.newNotif = false
            notisOpener.classList.remove('notis')
            localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
        }
    } else {
        notis.style.animation = 'NotisDissappear 0.4s ease-in-out'
        setTimeout(() => {
            notis.style.display = 'none'
            notisOpen = false
        }, 380)
    }
})
//render all notifications
function renderNotis() {
    notis.innerHTML = ""
    let acc = allAccs.find(el => el.logged).notifications

    for (let i of acc.notifs.slice().reverse()) {
        notis.innerHTML += `
            <section>
                <p><i class="fa-solid fa-exclamation"></i> ${i.message}</p>
                <small>${formatTime(new Date(i.timeStamp))}</small>
            </section>
        `
    }

    if (acc.newNotif) {
        notisOpener.classList.add('notis')
    } else {
        notisOpener.classList.remove('notis')
    }
}
renderNotis()

//setting header date
function setHeaderDate(){
    let allMonths = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
    let time = new Date()
    let month = allMonths[time.getMonth()]
    let date = time.getDate()
    let year = time.getFullYear()
    headerDate.textContent = `${month} ${date}, ${year}`
}

setHeaderDate()
//sidebar open
burger.addEventListener('click', e => {
    if (!asideOpen) {
        aside.style.transform = 'translateX(0)'
        asideOpen = true
        blure.style.display = 'block'
        blure.style.animation = 'BlurAppear 0.3s ease-in-out'
    }
})
//sidebar / card form close
blure.addEventListener('click', e => {
    if (asideOpen) {
        blure.style.animation = 'BlurDissappear 0.3s ease-in-out'
        aside.style.transform = ''
        setTimeout(() => {
            blure.style.display = 'none'
            asideOpen = false
            blure.style.animation = ''
        }, 300)
    }
    if (cardWindowOpen) {
        blure.style.display = ''
        cardWindow.style.display = ''
        cardWindowForm.reset()
    }
})


//time formatter
function formatTime(date) {
    let now = new Date()
    let diffInMs = now - date
    let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    let hours = date.getHours().toString().padStart(2, '0')
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let timePart = `${hours}:${minutes}`

    if (diffInDays === 0) {
        return `Today at ${timePart}`
    } else if (diffInDays === 1) {
        return `Yesterday at ${timePart}`
    } else {
        let day = date.getDate().toString().padStart(2, '0')
        let month = (date.getMonth() + 1).toString().padStart(2, '0')
        let year = date.getFullYear()
        return `${day}/${month}/${year} at ${timePart}`
    }
}