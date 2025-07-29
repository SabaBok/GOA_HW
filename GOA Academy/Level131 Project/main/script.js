const info = JSON.parse(localStorage.getItem('finebank-accs'))
const idk = prompt('yes or no')
if(idk == "yes"){
    for(let i of info){
        if(i.logged){
            i.logged = false
            i.keepSigned = false
            window.location.href = '../index.html'
        }
    }
    localStorage.setItem('finebank-accs',JSON.stringify(info))
}