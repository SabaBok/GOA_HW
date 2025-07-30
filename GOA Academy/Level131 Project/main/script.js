const notisOpener = document.querySelector('.fa-bell')
const notis = document.querySelector('#notis')
let notisOpen = false

notisOpener.addEventListener('click',e=>{
    if(!notisOpen){
        notis.style.display = 'flex'
        notisOpen = true
        notis.style.animation = 'NotisAppear 0.4s ease-in-out'
    }else{
        notis.style.animation = 'NotisDissappear 0.4s ease-in-out'
        setTimeout(() => {
            notis.style.display = 'none'
            notisOpen = false
        }, 380);
    }
})