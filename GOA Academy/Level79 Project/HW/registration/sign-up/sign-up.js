function signUp(event){
    event.preventDefault();

    const email = document.querySelector("#email")
    const pass = document.querySelector("#password")
    const rePass = document.querySelector("#re-password")

    if(pass.value == rePass.value && pass.value.length >= 8){
        localStorage.setItem('email',email.value)
        localStorage.setItem('pass',pass.value)
        window.location = "../log-in/log-in.html"
    }else{
        alert("Both Of the Password fields must be the same and their length should be 8 or more")
    }
}
