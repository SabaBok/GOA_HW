const allAccs = JSON.parse(localStorage.getItem('finebank-accs')) || []
const modal = document.querySelector('.modal')

//login
const login = document.querySelector('.login')
const loginForm = document.querySelector('.login form')
const forgotBut = document.querySelector('.forgot-but')
const createAcc = document.querySelector('.create-acc')
const passEmoji = document.querySelectorAll('.pass-emj')

//register
const reg = document.querySelector('.register')
const registerForm = document.querySelector('.register form')
const signAcc = registerForm.querySelector('button')
const allrHaveAcc = document.querySelector('.sign-acc')

//forgot-pass
const forgot = document.querySelector('.forgot-pass')
const forgotForm = document.querySelector('.forgot-pass form')
const backLogin = document.querySelector('.for-acc')

// setting up account on loading
function logAcc() {
    let allowed = false;

    for (let i of allAccs) {
        if (i.logged && i.keepSigned) {
            allowed = true;
            break;
        }
    }
}
logAcc()

let isModalRunning = false
function modalAppear(text) {
    const line = modal.querySelector('div')
    if (!isModalRunning) {
        isModalRunning = true
        line.style.animation = 'modalTime 2.5s linear'
        modal.style.animation = 'modalAppear 0.4s ease-in-out'
        modal.style.opacity = '100%'
        const modalText = modal.querySelector('p')
        modalText.textContent = text
        setTimeout(() => {
            modal.style.opacity = '0'
            modal.style.animation = 'none'
            line.style.animation = 'none'
            isModalRunning = false
        }, 2600);
    }
}

// show/hide password
for (let i of passEmoji) {
    i.addEventListener('click', e => {
        const passInp = e.target.parentElement.children[0]
        const showEmj = e.target.parentElement.children[1]
        if (e.target.classList.contains('fa-eye')) {
            passInp.type = 'text'
            e.target.classList.remove('fa-eye')
            e.target.classList.add('fa-eye-slash')
        } else {
            passInp.type = 'password'
            e.target.classList.remove('fa-eye-slash')
            e.target.classList.add('fa-eye')
        }
    })
}

//forgot password opener
forgotBut.addEventListener('click', e => {
    login.style.display = 'none'
    forgot.style.display = 'flex'
    modalAppear('you can get a password reset here')
})

//sign up opener
createAcc.addEventListener('click', e => {
    login.style.display = 'none'
    reg.style.display = 'flex'
})

//login opener
allrHaveAcc.addEventListener('click', e => {
    reg.style.display = 'none'
    login.style.display = 'flex'
})

//back to login opener
backLogin.addEventListener('click', e => {
    forgot.style.display = 'none'
    login.style.display = 'flex'
})

//submiting register form
function AccConstructor(fullName, email, pass) {
    this.fullName = fullName
    this.profileImgSrc = ''
    this.email = email
    this.pass = pass
    this.keepSigned = false
    this.logged = false
    this.cards = []
    this.notifications = {newNotif:false, notifs:{}}
}
registerForm.addEventListener('submit', e => {
    e.preventDefault()
    if (!e.target.fullName.value.trim()) {
        modalAppear('You Must Enter a Valid Full Name')
        return
    }
    if (e.target.pass.value.length < 8) {
        modalAppear('The password must be 8 or more characters')
        return
    }
    for (let i of allAccs) {
        if (e.target.email.value == i.email) {
            modalAppear("an account with this email exists alredy")
            return
        }
    }
    const userInfo = new AccConstructor(
        e.target.fullName.value,
        e.target.email.value,
        e.target.pass.value,
    )
    allAccs.push(userInfo)
    localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
    modalAppear('you have created an account')
    setTimeout(() => {
        reg.style.display = 'none'
        login.style.display = 'flex'
    }, 500);
})

//subimit login form
loginForm.addEventListener('submit', e => {
    e.preventDefault()
    for (let i of allAccs) {
        if (i.email == e.target.email.value && i.pass != e.target.pass.value) {
            modalAppear('Wrong Password Try Again')
            return
        }

        if (
            i.email == e.target.email.value &&
            i.pass == e.target.pass.value) {
            i.logged = true
            modalAppear('you have logged in')
            setTimeout(() => {
                window.location.href = 'overview/over.html'
            }, 500);
        }

        if (
            i.email == e.target.email.value &&
            i.pass == e.target.pass.value &&
            e.target.keepSigned.checked) {
            i.logged = true
            i.keepSigned = true
            modalAppear('you have logged in')
            setTimeout(() => {
                window.location.href = 'overview/over.html'
            }, 2000);
        }
    }
    localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
})

//forgot password form
forgotForm.addEventListener('submit', e => {
    e.preventDefault()
    let name
    const newPass = generatePassword()
    for (let i of allAccs) {
        if (i.email == e.target.email.value) {
            name = i.name
        }
    }
    let parms = {
        name: name,
        email: e.target.email.value,
        subject: 'Finebank',
        message: newPass,
    }
    emailjs.send('service_2pps7t6', 'template_lz7v2y5', parms)
        .then(() => {
            for (let i of allAccs) {
                if (i.email == e.target.email.value) {
                    i.pass = newPass
                }
            }
            modalAppear("email sent")
            localStorage.setItem('finebank-accs', JSON.stringify(allAccs))
        })
})



function generatePassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const minLen = 8
    const maxLen = 15

    // Generate a random length between minLen and maxLen
    const passwordLength = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen

    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        password += chars[randomIndex]
    }

    return password
}

