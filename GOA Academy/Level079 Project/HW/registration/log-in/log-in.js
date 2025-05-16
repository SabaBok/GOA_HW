function logIn(event){
    event.preventDefault();

    const email = document.querySelector("#email1")
    const pass = document.querySelector("#password1")

    const corrEmail = localStorage.getItem('email')
    const corrPass = localStorage.getItem('pass')

    if(email.value == corrEmail && pass.value == corrPass){
        window.location.href = '../../main-page/main-page.html'
        localStorage.setItem('isLogged',"true")
    }else{
        alert('Incorect Password or Email')
    }
}